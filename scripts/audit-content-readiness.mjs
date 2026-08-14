import { hydraulicCaseStudies } from "../src/data/case-studies.ts";
import { hydraulicPages } from "../src/data/hydraulic-pages.ts";
import { modelRecords } from "../src/data/model-records.ts";

const errors = [];
const warnings = [];
const resources = hydraulicPages.filter((page) =>
  page.slug.startsWith("resources/"),
);

for (const page of resources) {
  if (page.excludeFromIndex) continue;
  if (!page.published || !page.modified) {
    warnings.push(
      `${page.slug}: publication or review date is not yet explicit.`,
    );
  }
  if (!page.reviewedBy) {
    warnings.push(`${page.slug}: uses the organizational reviewer fallback.`);
  }
}

const overlappingLegacyPage = hydraulicPages.find(
  (page) => page.slug === "resources/oem-vs-aftermarket-hydraulic-components",
);
if (!overlappingLegacyPage?.excludeFromIndex) {
  errors.push(
    "The legacy OEM-vs-aftermarket page must remain excluded while the more complete sourcing-routes guide is canonical content.",
  );
}

console.log(
  `Content readiness: ${modelRecords.length} model records, ${hydraulicCaseStudies.length} case studies, ${resources.length} resource guides.`,
);
for (const warning of warnings) console.warn(`WARN  ${warning}`);
if (warnings.length) {
  console.warn(
    `${warnings.length} non-blocking content provenance field(s) still require genuine editorial input.`,
  );
}
for (const error of errors) console.error(`ERROR ${error}`);
if (errors.length) process.exit(1);
