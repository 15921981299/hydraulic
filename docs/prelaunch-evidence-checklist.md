# Hydraulic Match pre-launch evidence checklist

The site deliberately hides or qualifies claims that cannot yet be supported. Complete this list with current, genuine records before removing the pre-launch boundary.

## P0 — required before accepting public inquiries

- Set the verified legal entity name, registration number and public business address through the `PUBLIC_COMPANY_*` values in `.env.example`.
- Confirm the quotation, invoice beneficiary and website legal identity describe the same contracting party.
- Create a Cloudflare Turnstile widget for the production hostname. Set `PUBLIC_TURNSTILE_SITE_KEY` at build time and store `TURNSTILE_SECRET_KEY` as a Worker secret.
- Store `RESEND_API_KEY` as a Worker secret. Confirm `RFQ_FROM_EMAIL` is a verified sending identity and `SALES_EMAIL` reaches the responsible team.
- If RFQ files are archived, bind a private R2 bucket as `R2_BUCKET`. Apply an R2 lifecycle rule that deletes the `rfq/` prefix after 365 days unless an order record requires longer retention.
- Test one valid RFQ, one bot-verification failure, one oversized request and every permitted attachment type in production.
- Review the Privacy Policy against the actual Cloudflare, Resend, supplier-sharing and deletion workflow.
- Add a genuine technical reviewer name, job title and relevant background. Verify the public profile before setting `technicalReviewerProfileVerified` to `true`.

## P1 — required for scalable model-library publication

- Keep brand, series, exact-model and alternative-review pages on distinct search intents; do not duplicate the same introduction across all four levels.
- Replace representative category photos with owned or supplier-authorized exact-product media when available. Keep a source and usage-permission record.
- Add a customer-attributed result only with written publication permission and evidence tied to the named order scope.
- Re-run the model counts, SEO audit and internal-link check after every data import.

## P2 — launch and conversion QA

- Complete the short RFQ route on mobile and desktop with keyboard-only navigation.
- Verify success, failure and file-validation messages are visible and understandable.
- Check that search finds exact model codes with punctuation, spaces and hyphens removed.
- Confirm security headers in production and review Core Web Vitals after the final domain and analytics tags are active.
- Add Search Console, submit the sitemap and inspect a brand, series, model and resource URL after launch.
