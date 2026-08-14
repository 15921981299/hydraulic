import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

function parseEnvFile(path) {
  if (!existsSync(path)) return {};
  const values = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator < 1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed
      .slice(separator + 1)
      .trim()
      .replace(/^(['"])(.*)\1$/, "$2");
    values[key] = value;
  }
  return values;
}

const env = { ...parseEnvFile(resolve(".env")), ...process.env };
const readinessPath = resolve("config/launch-readiness.json");
const readiness = existsSync(readinessPath)
  ? JSON.parse(readFileSync(readinessPath, "utf8"))
  : {};

const requiredPublicValues = {
  PUBLIC_LEGAL_ENTITY_NAME: "verified legal entity name",
  PUBLIC_COMPANY_REGISTRATION_NUMBER: "company registration number",
  PUBLIC_COMPANY_STREET_ADDRESS: "public business address",
  PUBLIC_COMPANY_CITY: "business city",
  PUBLIC_COMPANY_COUNTRY_CODE: "company country code",
  PUBLIC_TURNSTILE_SITE_KEY: "Turnstile public site key",
  PUBLIC_TECHNICAL_REVIEWER_NAME: "named technical reviewer",
  PUBLIC_TECHNICAL_REVIEWER_JOB_TITLE: "technical reviewer job title",
  PUBLIC_TECHNICAL_REVIEWER_BACKGROUND: "verified reviewer background",
};

const confirmations = {
  legalDocumentsReviewed: "legal documents reviewed",
  quotationIdentityMatches: "quotation and website identities match",
  turnstileSecretConfigured: "TURNSTILE_SECRET_KEY configured in Cloudflare",
  resendSecretConfigured: "RESEND_API_KEY configured in Cloudflare",
  senderDomainVerified: "RFQ sender domain verified",
  privacyWorkflowReviewed: "privacy and deletion workflow reviewed",
  r2LifecycleConfiguredOrDisabled:
    "R2 lifecycle configured or R2 deliberately disabled",
  productionRfqTested: "production RFQ success and failure paths tested",
  technicalReviewerProfileVerified:
    "technical reviewer identity and background verified",
};

const blockers = [];
for (const [key, label] of Object.entries(requiredPublicValues)) {
  if (!String(env[key] ?? "").trim()) blockers.push(`${label} (${key})`);
}
for (const [key, label] of Object.entries(confirmations)) {
  if (readiness[key] !== true) blockers.push(`${label} (${key})`);
}

if (blockers.length) {
  console.error(`Launch readiness blocked by ${blockers.length} item(s):`);
  for (const blocker of blockers) console.error(`- ${blocker}`);
  if (!existsSync(readinessPath)) {
    console.error(
      "- Create config/launch-readiness.json from config/launch-readiness.example.json after completing the external checks.",
    );
  }
  process.exit(1);
}

console.log(
  "Launch readiness audit passed: public identity and production confirmations are complete.",
);
