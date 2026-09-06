import assert from "node:assert/strict";
import test from "node:test";
import worker from "../cloudflare-worker.js";

function formRequest(overrides = {}, attachment) {
  const values = {
    name: "Test Buyer",
    email: "buyer@example.com",
    country: "United States",
    brand: "Bosch Rexroth",
    model: "A10VSO18DR/31R",
    quantity: "2 pcs",
    ...overrides,
  };
  const form = new FormData();
  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined) form.set(key, String(value));
  }
  if (attachment) {
    form.append(
      "attachments",
      new Blob([attachment.bytes], { type: attachment.type }),
      attachment.name,
    );
  }
  return new Request("https://hydraulicmatch.com/api/rfq", {
    method: "POST",
    body: form,
    headers: { Origin: "https://hydraulicmatch.com" },
  });
}

async function withMockFetch(handler, callback) {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = handler;
  try {
    return await callback();
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function createEmailCapture() {
  const emails = [];
  const __sendEmail = async (_env, message) => {
    emails.push(message);
  };
  return { emails, __sendEmail };
}

test("health endpoint is ready and not cacheable", async () => {
  const response = await worker.fetch(
    new Request("https://hydraulicmatch.com/api/rfq"),
    {},
  );
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal((await response.json()).ready, true);
});

test("incomplete RFQ is rejected before email delivery", async () => {
  const response = await worker.fetch(formRequest({ name: "", model: "" }), {});
  assert.equal(response.status, 400);
  assert.match((await response.json()).message, /Name is required/);
});

test("honeypot submission returns neutral success without side effects", async () => {
  const { emails, __sendEmail } = createEmailCapture();
  const response = await worker.fetch(
    formRequest({ website: "spam.example" }),
    { __sendEmail },
  );
  assert.equal(response.status, 200);
  assert.equal(emails.length, 0);
});

test("valid model-code RFQ sends sales email and auto-reply", async () => {
  const { emails, __sendEmail } = createEmailCapture();
  const response = await worker.fetch(formRequest(), { __sendEmail });
  assert.equal(response.status, 200);
  assert.equal(emails.length, 2);
  assert.equal(emails[0].to, "sales@hydraulicmatch.com");
  assert.equal(emails[0].replyTo, "buyer@example.com");
  assert.equal(emails[1].to, "buyer@example.com");
  assert.equal(emails[1].replyTo, "sales@hydraulicmatch.com");
});

test("attachment content must match its declared extension", async () => {
  const { emails, __sendEmail } = createEmailCapture();
  const response = await worker.fetch(
    formRequest(
      {},
      {
        name: "nameplate.pdf",
        type: "application/pdf",
        bytes: "this is not a PDF",
      },
    ),
    { __sendEmail },
  );
  assert.equal(response.status, 400);
  assert.match((await response.json()).message, /does not match/);
  assert.equal(emails.length, 0);
});

test("Turnstile fails closed when its Worker secret is configured", async () => {
  const { __sendEmail } = createEmailCapture();
  const response = await worker.fetch(formRequest(), {
    TURNSTILE_SECRET_KEY: "test-turnstile-secret",
    __sendEmail,
  });
  assert.equal(response.status, 403);
  assert.match((await response.json()).message, /Security verification failed/);
});

test("verified Turnstile request continues to email delivery", async () => {
  const request = formRequest({ "cf-turnstile-response": "valid-token" });
  const { emails, __sendEmail } = createEmailCapture();
  let challengeCalls = 0;
  await withMockFetch(
    async (url) => {
      if (String(url).includes("challenges.cloudflare.com")) {
        challengeCalls += 1;
        return Response.json({ success: true });
      }
      return Response.json({ id: "unexpected" });
    },
    async () => {
      const response = await worker.fetch(request, {
        TURNSTILE_SECRET_KEY: "test-turnstile-secret",
        __sendEmail,
      });
      assert.equal(response.status, 200);
      assert.equal(challengeCalls, 1);
      assert.equal(emails.length, 2);
    },
  );
});

test("oversized declared request is rejected before parsing", async () => {
  const response = await worker.fetch(
    new Request("https://hydraulicmatch.com/api/rfq", {
      method: "POST",
      body: "ignored",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": String(23 * 1024 * 1024),
      },
    }),
    {},
  );
  assert.equal(response.status, 413);
});

test("unsigned private download requests are rejected", async () => {
  const response = await worker.fetch(
    new Request(
      "https://hydraulicmatch.com/api/rfq/download?key=rfq/example.pdf",
    ),
    { RFQ_DOWNLOAD_SECRET: "test-secret", R2_BUCKET: {} },
  );
  assert.equal(response.status, 403);
  assert.match(response.headers.get("X-Robots-Tag"), /noindex/);
});

test("archived attachment receives a working seven-day private link", async () => {
  const objects = new Map();
  const bucket = {
    async put(key, buffer, options) {
      objects.set(key, { buffer, options });
    },
    async get(key) {
      const item = objects.get(key);
      if (!item) return null;
      return {
        body: item.buffer,
        size: item.buffer.byteLength,
        httpMetadata: item.options.httpMetadata,
        customMetadata: item.options.customMetadata,
      };
    },
  };
  const { emails, __sendEmail } = createEmailCapture();
  const response = await worker.fetch(
    formRequest(
      {},
      {
        name: "nameplate.pdf",
        type: "application/pdf",
        bytes: "%PDF-1.4 test",
      },
    ),
    {
      __sendEmail,
      RFQ_DOWNLOAD_SECRET: "download-test",
      R2_BUCKET: bucket,
    },
  );
  assert.equal(response.status, 200);
  const match = emails[0].text.match(
    /https:\/\/hydraulicmatch\.com\/api\/rfq\/download\?[^\s]+/,
  );
  assert.ok(match, "sales email should contain a private download URL");
  const download = await worker.fetch(new Request(match[0]), {
    RFQ_DOWNLOAD_SECRET: "download-test",
    R2_BUCKET: bucket,
  });
  assert.equal(download.status, 200);
  assert.match(download.headers.get("Content-Disposition"), /nameplate\.pdf/);
  assert.equal(await download.text(), "%PDF-1.4 test");
});
