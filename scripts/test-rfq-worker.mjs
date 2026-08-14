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
  let fetchCalls = 0;
  await withMockFetch(
    async () => {
      fetchCalls += 1;
      return Response.json({ id: "unexpected" });
    },
    async () => {
      const response = await worker.fetch(
        formRequest({ website: "spam.example" }),
        { RESEND_API_KEY: "test-secret" },
      );
      assert.equal(response.status, 200);
      assert.equal(fetchCalls, 0);
    },
  );
});

test("valid model-code RFQ sends sales email and auto-reply", async () => {
  const requests = [];
  await withMockFetch(
    async (url, init) => {
      requests.push({ url: String(url), body: JSON.parse(init.body) });
      return Response.json({ id: "email-id" });
    },
    async () => {
      const response = await worker.fetch(formRequest(), {
        RESEND_API_KEY: "test-secret",
      });
      assert.equal(response.status, 200);
      assert.equal(requests.length, 2);
      assert.ok(requests.every((item) => item.url.includes("api.resend.com")));
      assert.equal(requests[0].body.reply_to, "buyer@example.com");
    },
  );
});

test("attachment content must match its declared extension", async () => {
  let fetchCalls = 0;
  await withMockFetch(
    async () => {
      fetchCalls += 1;
      return Response.json({ id: "unexpected" });
    },
    async () => {
      const response = await worker.fetch(
        formRequest(
          {},
          {
            name: "nameplate.pdf",
            type: "application/pdf",
            bytes: "this is not a PDF",
          },
        ),
        { RESEND_API_KEY: "test-secret" },
      );
      assert.equal(response.status, 400);
      assert.match((await response.json()).message, /does not match/);
      assert.equal(fetchCalls, 0);
    },
  );
});

test("Turnstile fails closed when its Worker secret is configured", async () => {
  const response = await worker.fetch(formRequest(), {
    TURNSTILE_SECRET_KEY: "test-turnstile-secret",
    RESEND_API_KEY: "test-resend-secret",
  });
  assert.equal(response.status, 403);
  assert.match((await response.json()).message, /Security verification failed/);
});

test("verified Turnstile request continues to email delivery", async () => {
  const request = formRequest({ "cf-turnstile-response": "valid-token" });
  let challengeCalls = 0;
  let emailCalls = 0;
  await withMockFetch(
    async (url) => {
      if (String(url).includes("challenges.cloudflare.com")) {
        challengeCalls += 1;
        return Response.json({ success: true });
      }
      emailCalls += 1;
      return Response.json({ id: "email-id" });
    },
    async () => {
      const response = await worker.fetch(request, {
        TURNSTILE_SECRET_KEY: "test-turnstile-secret",
        RESEND_API_KEY: "test-resend-secret",
      });
      assert.equal(response.status, 200);
      assert.equal(challengeCalls, 1);
      assert.equal(emailCalls, 2);
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
