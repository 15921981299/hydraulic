const MAX_FILES = 5;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 20 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set([
  'jpg',
  'jpeg',
  'png',
  'webp',
  'pdf',
  'xls',
  'xlsx',
  'doc',
  'docx',
  'csv',
  'zip',
]);

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return {};

  let allowed = false;
  try {
    const requestHost = new URL(request.url).host;
    allowed =
      new URL(origin).host === requestHost ||
      origin === 'http://localhost:4321' ||
      origin === 'http://127.0.0.1:4321';
  } catch {
    return {};
  }

  return allowed
    ? {
        'Access-Control-Allow-Origin': origin,
        Vary: 'Origin',
      }
    : {};
}

function value(formData, key, maxLength = 4000) {
  return (formData.get(key)?.toString() || '').trim().slice(0, maxLength);
}

function safeFilename(filename) {
  return filename
    .normalize('NFKC')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120) || 'attachment';
}

function extension(filename) {
  return filename.includes('.') ? filename.split('.').pop().toLowerCase() : '';
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

async function sendEmail(apiKey, payload) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error('Resend error:', response.status, detail.slice(0, 500));
    throw new Error('Email delivery failed');
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isRfqRoute = url.pathname === '/api/rfq' || url.pathname === '/api/rfq/';

    if (!isRfqRoute) {
      if (env.ASSETS && typeof env.ASSETS.fetch === 'function') {
        return env.ASSETS.fetch(request);
      }
      return new Response('Not found', { status: 404 });
    }

    const cors = corsHeaders(request);
    if (request.method === 'OPTIONS') {
      if (request.headers.get('Origin') && !cors['Access-Control-Allow-Origin']) {
        return new Response(null, { status: 403 });
      }
      return new Response(null, {
        status: 204,
        headers: {
          ...cors,
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Accept',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    if (request.method === 'GET') {
      return json({ ok: true, ready: true, service: 'Hydraulic Match RFQ' }, 200, cors);
    }

    if (request.method !== 'POST') {
      return json({ ok: false, message: 'Method not allowed.' }, 405, {
        ...cors,
        Allow: 'GET, POST, OPTIONS',
      });
    }

    try {
      const formData = await request.formData();

      // Return a neutral success response to bots without sending or storing anything.
      if (value(formData, 'website', 200)) {
        return json({ ok: true, message: 'Request received.' }, 200, cors);
      }

      const fields = {
        name: value(formData, 'name', 120),
        email: value(formData, 'email', 254).toLowerCase(),
        company: value(formData, 'company', 180),
        phone: value(formData, 'phone', 100),
        country: value(formData, 'country', 120),
        role: value(formData, 'role', 120),
        brand: value(formData, 'brand', 180),
        model: value(formData, 'model', 300),
        partNumber: value(formData, 'part_number', 180),
        productType: value(formData, 'product_type', 120),
        quantity: value(formData, 'quantity', 120),
        deadline: value(formData, 'deadline', 80),
        workingPressure: value(formData, 'working_pressure', 180),
        flowDisplacement: value(formData, 'flow_displacement', 180),
        voltageConnector: value(formData, 'voltage_connector', 180),
        mountingPorts: value(formData, 'mounting_ports', 300),
        rotationShaft: value(formData, 'rotation_shaft', 240),
        fluidTemperature: value(formData, 'fluid_temperature', 240),
        application: value(formData, 'application', 2000),
        replacementReason: value(formData, 'replacement_reason', 2000),
        details: value(formData, 'details', 4000),
        message: value(formData, 'message', 8000),
        source: value(formData, 'source', 200),
        pageUrl: value(formData, 'page_url', 600),
        pageTitle: value(formData, 'page_title', 300),
        rfqContext: value(formData, 'rfq_context', 500),
      };

      const rawFiles = [
        ...formData.getAll('attachments'),
        ...formData.getAll('drawing'),
      ].filter((entry) => entry instanceof File && entry.size > 0);

      const errors = [];
      if (!fields.name) errors.push('Name is required.');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.push('A valid business email is required.');
      if (!fields.brand) errors.push('Original manufacturer or brand is required.');
      if (!fields.quantity) errors.push('Quantity is required.');
      if (!fields.country) errors.push('Destination country is required.');
      if (!fields.model && rawFiles.length === 0) errors.push('Provide the full model code or at least one reference file.');
      if (rawFiles.length > MAX_FILES) errors.push(`Upload no more than ${MAX_FILES} files.`);

      let totalBytes = 0;
      for (const file of rawFiles) {
        totalBytes += file.size;
        if (file.size > MAX_FILE_BYTES) errors.push(`${file.name} is larger than 5 MB.`);
        if (!ALLOWED_EXTENSIONS.has(extension(file.name))) errors.push(`${file.name} has an unsupported file type.`);
      }
      if (totalBytes > MAX_TOTAL_BYTES) errors.push('The combined attachment size is larger than 20 MB.');

      if (errors.length) {
        return json({ ok: false, message: errors[0], errors }, 400, cors);
      }

      const attachments = [];
      const archiveKeys = [];
      for (const file of rawFiles) {
        const buffer = await file.arrayBuffer();
        const filename = safeFilename(file.name);
        attachments.push({ filename, content: arrayBufferToBase64(buffer) });

        if (env.R2_BUCKET) {
          const key = `rfq/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${filename}`;
          await env.R2_BUCKET.put(key, buffer, {
            httpMetadata: { contentType: file.type || 'application/octet-stream' },
            customMetadata: { source: fields.source || 'website-rfq' },
          });
          archiveKeys.push(key);
        }
      }

      if (!env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured.');
        return json(
          { ok: false, message: 'Email service is temporarily unavailable. Please email sales@hydraulicmatch.com.' },
          503,
          cors
        );
      }

      const emailBody = [
        'HYDRAULIC MATCH — NEW RFQ',
        '',
        `Name: ${fields.name}`,
        `Business email: ${fields.email}`,
        `Company: ${fields.company || '-'}`,
        `Phone / WhatsApp: ${fields.phone || '-'}`,
        `Destination country: ${fields.country}`,
        `Buyer type: ${fields.role || '-'}`,
        '',
        `Original manufacturer: ${fields.brand}`,
        `Full model code: ${fields.model || 'See attachment'}`,
        `Order / part number: ${fields.partNumber || '-'}`,
        `Product type: ${fields.productType || '-'}`,
        `Quantity: ${fields.quantity}`,
        `Required delivery date: ${fields.deadline || '-'}`,
        '',
        `Working pressure: ${fields.workingPressure || '-'}`,
        `Flow / displacement: ${fields.flowDisplacement || '-'}`,
        `Voltage / connector: ${fields.voltageConnector || '-'}`,
        `Mounting / ports: ${fields.mountingPorts || '-'}`,
        `Rotation / shaft: ${fields.rotationShaft || '-'}`,
        `Fluid / temperature: ${fields.fluidTemperature || '-'}`,
        `Machine / application: ${fields.application || '-'}`,
        `Failure / replacement reason: ${fields.replacementReason || '-'}`,
        `Additional details: ${fields.details || fields.message || '-'}`,
        '',
        `Attachments: ${rawFiles.length ? rawFiles.map((file) => file.name).join(', ') : 'None'}`,
        `Private R2 archive keys: ${archiveKeys.length ? archiveKeys.join(', ') : 'R2 archive not enabled'}`,
        `Source: ${fields.source || '-'}`,
        `Page title: ${fields.pageTitle || '-'}`,
        `Page URL: ${fields.pageUrl || '-'}`,
        `RFQ context: ${fields.rfqContext || '-'}`,
      ].join('\n');

      const salesEmail = env.SALES_EMAIL || 'sales@hydraulicmatch.com';
      const fromEmail = env.RFQ_FROM_EMAIL || 'Hydraulic Match <rfq@hydraulicmatch.com>';
      await sendEmail(env.RESEND_API_KEY, {
        from: fromEmail,
        to: salesEmail,
        reply_to: fields.email,
        subject: `Hydraulic RFQ — ${fields.brand} ${fields.model || 'reference file'} — ${fields.quantity}`,
        text: emailBody,
        ...(attachments.length ? { attachments } : {}),
      });

      const autoReplyBody = [
        `Hi ${fields.name},`,
        '',
        'Thank you for sending your hydraulic component request to Hydraulic Match.',
        '',
        `Reference received: ${fields.brand} ${fields.model || '(model shown in the attached file)'}`,
        `Quantity: ${fields.quantity}`,
        `Destination: ${fields.country}`,
        '',
        'Our parts team will review the complete model code, hydraulic and mechanical parameters, application details, and available files before proposing an option.',
        '',
        'What happens next:',
        '1. Inquiry completeness and model-code review',
        '2. Pressure, flow, control, mounting, port, voltage, shaft or rotation comparison as applicable',
        '3. Supply-route, MOQ, lead-time and evidence check',
        '4. A quotation that states known differences and open confirmation points',
        '',
        'We review qualified inquiries within one business day.',
        '',
        'Hydraulic Match is an independent sourcing service. Referenced manufacturer names and model numbers are used for identification only.',
        '',
        'Best regards,',
        'Hydraulic Match Team',
        salesEmail,
      ].join('\n');

      try {
        await sendEmail(env.RESEND_API_KEY, {
          from: fromEmail,
          to: fields.email,
          reply_to: salesEmail,
          subject: 'We received your hydraulic component request — Hydraulic Match',
          text: autoReplyBody,
        });
      } catch (error) {
        console.error('Customer auto-reply failed:', error.message);
      }

      return json(
        { ok: true, message: 'Your request was sent. We review qualified inquiries within one business day.' },
        200,
        cors
      );
    } catch (error) {
      console.error('RFQ error:', error.message);
      return json(
        { ok: false, message: 'The request could not be sent. Please email sales@hydraulicmatch.com.' },
        500,
        cors
      );
    }
  },
};
