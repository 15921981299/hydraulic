# Hydraulic Match

Hydraulic component sourcing and model-code review website built with [Astro](https://astro.build). Primary domain: [hydraulicmatch.com](https://hydraulicmatch.com).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run check
npm run build
npm run preview
```

## Site structure

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/products/` | Hydraulic valves, pumps, cylinders and pump parts |
| `/alternatives/` | Brand and series reference reviews |
| `/cross-reference/` | Model-code review intake |
| `/industries/` | Hydraulic application pages |
| `/resources/` | Technical identification and replacement guides |
| `/about/` | About us |
| `/request-a-quote/` | Hydraulic RFQ form (Cloudflare Worker `/api/rfq`) |
| `/thank-you/` | Post-submission confirmation |

## Configuration

Edit `src/data/site.ts`:

- `PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4 (leave empty to disable)
- `PUBLIC_GOOGLE_SITE_VERIFICATION` — GSC HTML verification content value (leave empty to skip)
- `PUBLIC_GTM_CONTAINER_ID` — Google Tag Manager (leave empty to disable)
- `social.linkedin` / `social.youtube` — footer social links (leave empty to hide)

## Stack

- Astro 5 (static site generation)
- TypeScript client scripts
- `@astrojs/sitemap` for SEO
- Cloudflare Worker (`cloudflare-worker.js`) for RFQ form submissions via Resend + R2

### Worker secrets

The production RFQ entry is generated from `cloudflare-worker.js` during `npm run build`.

Set these secrets/bindings on Cloudflare Pages:

- `RESEND_API_KEY` — Resend API bearer token
- `R2_BUCKET` — optional private R2 archive binding for uploaded files
- `SALES_EMAIL` — optional receiving address override
- `RFQ_FROM_EMAIL` — optional verified sender override
