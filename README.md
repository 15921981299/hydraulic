# Hydraulic Match

Hydraulic component sourcing and model-code review website built with [Astro](https://astro.build). Planned primary domain: `hydraulicmatch.com`.

## Local setup

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:4321`.

## Verification

Run the complete code and content verification suite:

```bash
pnpm run verify
```

It performs Astro diagnostics, a production build, RFQ Worker tests, model-record and content-readiness checks, SEO auditing, internal-link checking and encoding auditing.

All published model records and case studies are eligible for search indexing. Record-specific evidence and source attribution remain visible on each page for buyers to review, but no record is withheld from the sitemap or marked `noindex` on the basis of a content-maturity gate.

`pnpm run audit:launch` is deliberately separate. It must remain blocked until genuine company details and external production checks have been completed.

## Site structure

| Path                | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `/products/`        | Hydraulic product-category research            |
| `/brands/`          | Manufacturer reference groups                  |
| `/series/`          | Series-level review directory                  |
| `/models/`          | Exact-model research database                  |
| `/cross-reference/` | Model-code review intake                       |
| `/industries/`      | Application and industry pages                 |
| `/resources/`       | Identification, inspection and sourcing guides |
| `/about/`           | Sourcing background and evidence boundaries    |
| `/request-a-quote/` | RFQ form using the `/api/rfq` Worker endpoint  |

## Public configuration

Copy `.env.example` to an uncommitted `.env` file. Do not invent legal or credential values.

- `PUBLIC_LEGAL_ENTITY_NAME` and `PUBLIC_COMPANY_*`: verified contracting identity.
- `PUBLIC_TURNSTILE_SITE_KEY`: public Turnstile site key.
- `PUBLIC_GA_MEASUREMENT_ID`: optional GA4 measurement ID.
- `PUBLIC_GTM_CONTAINER_ID`: optional Google Tag Manager container.
- `PUBLIC_GOOGLE_SITE_VERIFICATION`: optional Search Console verification value.
- `PUBLIC_TECHNICAL_REVIEWER_*`: verified reviewer name, role, relevant background and optional professional profile.

The legal identity is omitted from public proof and structured data until the required verified fields are supplied.

## Cloudflare Worker deployment

The production Worker entry is copied from `cloudflare-worker.js` during `pnpm run build`. `wrangler.jsonc` routes only `/api/*` through the Worker first and serves the remaining static files through the `ASSETS` binding.

Store secrets in Cloudflare, never in `wrangler.jsonc` or committed files:

- `RESEND_API_KEY`: required Resend API token.
- `RFQ_DOWNLOAD_SECRET`: required HMAC secret for private attachment links that expire after 7 days.
- `TURNSTILE_SECRET_KEY`: required together with `PUBLIC_TURNSTILE_SITE_KEY`.
- `R2_BUCKET`: optional private R2 binding for uploaded files. Add the binding to `wrangler.jsonc` after the bucket exists, rather than configuring it only in the dashboard, and apply an `rfq/` lifecycle rule when enabled.
- `SALES_EMAIL`: optional receiving-address override.
- `RFQ_FROM_EMAIL`: optional verified sender override.

Before deployment, copy `config/launch-readiness.example.json` to the ignored `config/launch-readiness.json`, mark a confirmation `true` only after completing it, then run:

```bash
pnpm run audit:launch
```

The detailed operational checklist is in `docs/prelaunch-evidence-checklist.md`.
