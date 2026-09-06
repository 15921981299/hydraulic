import { SALES_EMAIL, isZohoSmtpConfigured, sendZohoEmail } from './zoho-smtp.js';

const MAX_FILES = 5;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 20 * 1024 * 1024;
const MAX_REQUEST_BYTES = 22 * 1024 * 1024;
const DOWNLOAD_TTL_SECONDS = 7 * 24 * 60 * 60;
const textEncoder = new TextEncoder();
const ALLOWED_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "pdf",
  "xls",
  "xlsx",
  "doc",
  "docx",
  "csv",
]);

function logEvent(level, event, details = {}) {
  const payload = JSON.stringify({
    level,
    event,
    timestamp: new Date().toISOString(),
    ...details,
  });
  (level === "error" ? console.error : console.log)(payload);
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return {};

  let allowed = false;
  try {
    const requestHost = new URL(request.url).host;
    allowed =
      new URL(origin).host === requestHost ||
      origin === "http://localhost:4321" ||
      origin === "http://127.0.0.1:4321";
  } catch {
    return {};
  }

  return allowed
    ? {
        "Access-Control-Allow-Origin": origin,
        Vary: "Origin",
      }
    : {};
}

function value(formData, key, maxLength = 4000) {
  return (formData.get(key)?.toString() || "").trim().slice(0, maxLength);
}

function safeFilename(filename) {
  return (
    filename
      .normalize("NFKC")
      .replace(/[^a-zA-Z0-9._-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 120) || "attachment"
  );
}

function extension(filename) {
  return filename.includes(".") ? filename.split(".").pop().toLowerCase() : "";
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function createDownloadUrl(request, key, secret, now = Date.now()) {
  const expires = String(Math.floor(now / 1000) + DOWNLOAD_TTL_SECONDS);
  const signature = await crypto.subtle.sign(
    "HMAC",
    await hmacKey(secret),
    textEncoder.encode(`${key}\n${expires}`),
  );
  const hex = Array.from(new Uint8Array(signature), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
  const url = new URL("/api/rfq/download", request.url);
  url.search = new URLSearchParams({ key, expires, signature: hex }).toString();
  return url.toString();
}

async function downloadAttachment(request, env, now = Date.now()) {
  const headers = {
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
  };
  const fail = (message, status) => new Response(message, { status, headers });
  if (!["GET", "HEAD"].includes(request.method))
    return fail("Method not allowed", 405);
  if (!env.RFQ_DOWNLOAD_SECRET || !env.R2_BUCKET)
    return fail("Download temporarily unavailable.", 503);

  const url = new URL(request.url);
  const key = url.searchParams.get("key") || "";
  const expires = url.searchParams.get("expires") || "";
  const signature = url.searchParams.get("signature") || "";
  const nowSeconds = Math.floor(now / 1000);
  if (
    !key.startsWith("rfq/") ||
    /[\r\n]/.test(key) ||
    !/^\d{10}$/.test(expires) ||
    !/^[a-f0-9]{64}$/.test(signature)
  ) {
    return fail("Invalid download link.", 403);
  }
  const valid = await crypto.subtle.verify(
    "HMAC",
    await hmacKey(env.RFQ_DOWNLOAD_SECRET),
    Uint8Array.from(signature.match(/../g), (byte) => parseInt(byte, 16)),
    textEncoder.encode(`${key}\n${expires}`),
  );
  if (!valid) return fail("Invalid download link.", 403);
  if (
    Number(expires) <= nowSeconds ||
    Number(expires) > nowSeconds + DOWNLOAD_TTL_SECONDS + 60
  ) {
    return fail(
      "This download link has expired. Contact sales@hydraulicmatch.com for assistance.",
      410,
    );
  }

  const object =
    request.method === "HEAD"
      ? await env.R2_BUCKET.head(key)
      : await env.R2_BUCKET.get(key);
  if (!object) return fail("File not found.", 404);
  const filename = (
    object.customMetadata?.originalFilename ||
    key.split("/").pop() ||
    "attachment"
  ).replace(/[\r\n\u0000-\u001f\u007f/\\]/g, "_");
  const encoded = encodeURIComponent(filename).replace(/[!'()*]/g, (char) =>
    `%${char.charCodeAt(0).toString(16).toUpperCase()}`,
  );
  return new Response(request.method === "HEAD" ? null : object.body, {
    headers: {
      ...headers,
      "Content-Type":
        object.httpMetadata?.contentType || "application/octet-stream",
      "Content-Length": String(object.size),
      "Content-Disposition": `attachment; filename="attachment"; filename*=UTF-8''${encoded}`,
    },
  });
}

function startsWith(bytes, signature, offset = 0) {
  return signature.every((value, index) => bytes[offset + index] === value);
}

function fileContentMatches(filename, buffer) {
  const ext = extension(filename);
  const bytes = new Uint8Array(buffer);
  const isZipContainer = startsWith(bytes, [0x50, 0x4b, 0x03, 0x04]);
  const isOleContainer = startsWith(
    bytes,
    [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1],
  );

  if (ext === "jpg" || ext === "jpeg")
    return startsWith(bytes, [0xff, 0xd8, 0xff]);
  if (ext === "png")
    return startsWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (ext === "webp") {
    return (
      startsWith(bytes, [0x52, 0x49, 0x46, 0x46]) &&
      startsWith(bytes, [0x57, 0x45, 0x42, 0x50], 8)
    );
  }
  if (ext === "pdf") return startsWith(bytes, [0x25, 0x50, 0x44, 0x46, 0x2d]);
  if (ext === "xls" || ext === "doc") return isOleContainer;
  if (ext === "xlsx" || ext === "docx") return isZipContainer;
  if (ext === "csv") {
    const sample = bytes.subarray(0, Math.min(bytes.length, 4096));
    return !sample.includes(0x00);
  }
  return false;
}

async function verifyTurnstile(secret, token, remoteIp) {
  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body,
    },
  );
  if (!response.ok) return false;
  const result = await response.json();
  return result.success === true;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isRfqRoute =
      url.pathname === "/api/rfq" || url.pathname === "/api/rfq/";
    const isDownloadRoute =
      url.pathname === "/api/rfq/download" ||
      url.pathname === "/api/rfq/download/";

    if (isDownloadRoute) return downloadAttachment(request, env);

    if (!isRfqRoute) {
      if (env.ASSETS && typeof env.ASSETS.fetch === "function") {
        return env.ASSETS.fetch(request);
      }
      return new Response("Not found", { status: 404 });
    }

    const cors = corsHeaders(request);
    if (request.method === "OPTIONS") {
      if (
        request.headers.get("Origin") &&
        !cors["Access-Control-Allow-Origin"]
      ) {
        return new Response(null, { status: 403 });
      }
      return new Response(null, {
        status: 204,
        headers: {
          ...cors,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Accept",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method === "GET") {
      return json(
        { ok: true, ready: true, service: "Hydraulic Match RFQ" },
        200,
        cors,
      );
    }

    if (request.method !== "POST") {
      return json({ ok: false, message: "Method not allowed." }, 405, {
        ...cors,
        Allow: "GET, POST, OPTIONS",
      });
    }

    try {
      const contentLength = Number(request.headers.get("Content-Length") || 0);
      if (contentLength > MAX_REQUEST_BYTES) {
        return json(
          { ok: false, message: "The submitted request is too large." },
          413,
          cors,
        );
      }

      const formData = await request.formData();

      // Return a neutral success response to bots without sending or storing anything.
      if (value(formData, "website", 200)) {
        return json({ ok: true, message: "Request received." }, 200, cors);
      }

      if (env.TURNSTILE_SECRET_KEY) {
        const turnstileToken = value(formData, "cf-turnstile-response", 2048);
        const turnstileOk =
          turnstileToken &&
          (await verifyTurnstile(
            env.TURNSTILE_SECRET_KEY,
            turnstileToken,
            request.headers.get("CF-Connecting-IP") || "",
          ));
        if (!turnstileOk) {
          logEvent("info", "rfq_turnstile_rejected");
          return json(
            {
              ok: false,
              message:
                "Security verification failed. Please refresh the page and try again.",
            },
            403,
            cors,
          );
        }
      }

      const fields = {
        name: value(formData, "name", 120),
        email: value(formData, "email", 254).toLowerCase(),
        company: value(formData, "company", 180),
        phone: value(formData, "phone", 100),
        country: value(formData, "country", 120),
        role: value(formData, "role", 120),
        brand: value(formData, "brand", 180),
        model: value(formData, "model", 300),
        partNumber: value(formData, "part_number", 180),
        productType: value(formData, "product_type", 120),
        quantity: value(formData, "quantity", 120),
        deadline: value(formData, "deadline", 80),
        workingPressure: value(formData, "working_pressure", 180),
        flowDisplacement: value(formData, "flow_displacement", 180),
        voltageConnector: value(formData, "voltage_connector", 180),
        mountingPorts: value(formData, "mounting_ports", 300),
        rotationShaft: value(formData, "rotation_shaft", 240),
        fluidTemperature: value(formData, "fluid_temperature", 240),
        application: value(formData, "application", 2000),
        replacementReason: value(formData, "replacement_reason", 2000),
        details: value(formData, "details", 4000),
        message: value(formData, "message", 8000),
        source: value(formData, "source", 200),
        pageUrl: value(formData, "page_url", 600),
        pageTitle: value(formData, "page_title", 300),
        rfqContext: value(formData, "rfq_context", 500),
      };

      const rawFiles = [
        ...formData.getAll("attachments"),
        ...formData.getAll("drawing"),
      ].filter((entry) => entry instanceof File && entry.size > 0);

      const errors = [];
      if (!fields.name) errors.push("Name is required.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
        errors.push("A valid business email is required.");
      if (!fields.brand)
        errors.push("Original manufacturer or brand is required.");
      if (!fields.quantity) errors.push("Quantity is required.");
      if (!fields.country) errors.push("Destination country is required.");
      if (!fields.model && rawFiles.length === 0)
        errors.push(
          "Provide the full model code or at least one reference file.",
        );
      if (rawFiles.length > MAX_FILES)
        errors.push(`Upload no more than ${MAX_FILES} files.`);

      let totalBytes = 0;
      for (const file of rawFiles) {
        totalBytes += file.size;
        if (file.size > MAX_FILE_BYTES)
          errors.push(`${file.name} is larger than 5 MB.`);
        if (!ALLOWED_EXTENSIONS.has(extension(file.name)))
          errors.push(`${file.name} has an unsupported file type.`);
      }
      if (totalBytes > MAX_TOTAL_BYTES)
        errors.push("The combined attachment size is larger than 20 MB.");

      if (errors.length) {
        return json({ ok: false, message: errors[0], errors }, 400, cors);
      }

      const archiveKeys = [];
      const downloadLinks = [];
      for (const file of rawFiles) {
        const buffer = await file.arrayBuffer();
        if (!fileContentMatches(file.name, buffer)) {
          return json(
            {
              ok: false,
              message: `${file.name} does not match its declared file type.`,
            },
            400,
            cors,
          );
        }
        const filename = safeFilename(file.name);

        if (env.R2_BUCKET) {
          const key = `rfq/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${filename}`;
          await env.R2_BUCKET.put(key, buffer, {
            httpMetadata: {
              contentType: file.type || "application/octet-stream",
            },
            customMetadata: {
              originalFilename: file.name,
              source: fields.source || "website-rfq",
              receivedAt: new Date().toISOString(),
              retentionClass: "rfq-private",
            },
          });
          archiveKeys.push(key);
          if (env.RFQ_DOWNLOAD_SECRET) {
            downloadLinks.push({
              filename: file.name,
              url: await createDownloadUrl(
                request,
                key,
                env.RFQ_DOWNLOAD_SECRET,
              ),
            });
          }
        }
      }

      const deliverEmail =
        typeof env.__sendEmail === "function" ? env.__sendEmail : sendZohoEmail;

      if (!env.__sendEmail && !isZohoSmtpConfigured(env)) {
        logEvent("error", "rfq_email_service_unconfigured");
        return json(
          {
            ok: false,
            message:
              "Email service is temporarily unavailable. Please email sales@hydraulicmatch.com.",
          },
          503,
          cors,
        );
      }

      const emailBody = [
        "HYDRAULIC MATCH — NEW RFQ",
        "",
        `Name: ${fields.name}`,
        `Business email: ${fields.email}`,
        `Company: ${fields.company || "-"}`,
        `Phone / WhatsApp: ${fields.phone || "-"}`,
        `Destination country: ${fields.country}`,
        `Buyer type: ${fields.role || "-"}`,
        "",
        `Original manufacturer: ${fields.brand}`,
        `Full model code: ${fields.model || "See attachment"}`,
        `Order / part number: ${fields.partNumber || "-"}`,
        `Product type: ${fields.productType || "-"}`,
        `Quantity: ${fields.quantity}`,
        `Required delivery date: ${fields.deadline || "-"}`,
        "",
        `Working pressure: ${fields.workingPressure || "-"}`,
        `Flow / displacement: ${fields.flowDisplacement || "-"}`,
        `Voltage / connector: ${fields.voltageConnector || "-"}`,
        `Mounting / ports: ${fields.mountingPorts || "-"}`,
        `Rotation / shaft: ${fields.rotationShaft || "-"}`,
        `Fluid / temperature: ${fields.fluidTemperature || "-"}`,
        `Machine / application: ${fields.application || "-"}`,
        `Failure / replacement reason: ${fields.replacementReason || "-"}`,
        `Additional details: ${fields.details || fields.message || "-"}`,
        "",
        `Attachments: ${rawFiles.length ? rawFiles.map((file) => file.name).join(", ") : "None"}`,
        `Private downloads (valid for 7 days):`,
        downloadLinks.length
          ? downloadLinks.map(({ filename, url }) => `- ${filename}: ${url}`).join("\n")
          : "Private download links not enabled",
        `Private R2 archive keys: ${archiveKeys.length ? archiveKeys.join(", ") : "R2 archive not enabled"}`,
        `Source: ${fields.source || "-"}`,
        `Page title: ${fields.pageTitle || "-"}`,
        `Page URL: ${fields.pageUrl || "-"}`,
        `RFQ context: ${fields.rfqContext || "-"}`,
      ].join("\n");

      const salesEmail = env.SALES_EMAIL || SALES_EMAIL;
      await deliverEmail(env, {
        to: 'admin@machiningsupplier.com',
        subject: `Hydraulic RFQ — ${fields.brand} ${fields.model || "reference file"} — ${fields.quantity}`,
        text: emailBody,
        replyTo: fields.email,
      });

      const autoReplyBody = [
        `Hi ${fields.name},`,
        "",
        "Thank you for sending your hydraulic component request to Hydraulic Match.",
        "",
        `Reference received: ${fields.brand} ${fields.model || "(model shown in the attached file)"}`,
        `Quantity: ${fields.quantity}`,
        `Destination: ${fields.country}`,
        "",
        "Our parts team will review the complete model code, hydraulic and mechanical parameters, application details, and available files before proposing an option.",
        "",
        "What happens next:",
        "1. Inquiry completeness and model-code review",
        "2. Pressure, flow, control, mounting, port, voltage, shaft or rotation comparison as applicable",
        "3. Supply-route, MOQ, lead-time and evidence check",
        "4. A quotation that states known differences and open confirmation points",
        "",
        "We review qualified inquiries within one business day.",
        "",
        "Hydraulic Match is an independent sourcing service. Referenced manufacturer names and model numbers are used for identification only.",
        "",
        "Best regards,",
        "Hydraulic Match Team",
        salesEmail,
      ].join("\n");

      try {
        await deliverEmail(env, {
          to: fields.email,
          subject:
            "We received your hydraulic component request — Hydraulic Match",
          text: autoReplyBody,
          replyTo: salesEmail,
        });
      } catch (error) {
        logEvent("error", "rfq_auto_reply_failed", {
          errorType: error?.name || "Error",
        });
      }

      logEvent("info", "rfq_processed", {
        requestId: crypto.randomUUID(),
        attachmentCount: rawFiles.length,
        archived: archiveKeys.length === rawFiles.length && rawFiles.length > 0,
      });

      return json(
        {
          ok: true,
          message:
            "Your request was sent. We review qualified inquiries within one business day.",
        },
        200,
        cors,
      );
    } catch (error) {
      logEvent("error", "rfq_processing_failed", {
        errorType: error?.name || "Error",
      });
      return json(
        {
          ok: false,
          message:
            "The request could not be sent. Please email sales@hydraulicmatch.com.",
        },
        500,
        cors,
      );
    }
  },
};
