import {
  getModelContentLevel,
  modelRecords,
} from "../src/data/model-records.ts";

const errors = [];
const slugs = new Set();
const references = new Set();

for (const record of modelRecords) {
  const label = record.slug || `${record.brand} ${record.model}`;
  if (!record.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.slug)) {
    errors.push(`${label}: slug must be lowercase kebab-case.`);
  }
  if (slugs.has(record.slug)) errors.push(`${label}: duplicate slug.`);
  slugs.add(record.slug);

  const normalizedReference = `${record.brand} ${record.model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
  if (references.has(normalizedReference)) {
    errors.push(`${label}: duplicate brand/model reference.`);
  }
  references.add(normalizedReference);

  for (const key of [
    "brand",
    "model",
    "productType",
    "series",
    "description",
    "compatibilityStatus",
  ]) {
    if (!record[key]?.trim()) errors.push(`${label}: missing ${key}.`);
  }
  if ((record.codeGroups?.length ?? 0) < 2) {
    errors.push(`${label}: needs at least two code/parameter groups.`);
  }
  if ((record.requiredChecks?.length ?? 0) < 3) {
    errors.push(`${label}: needs at least three inquiry confirmation fields.`);
  }
  if ((record.applications?.length ?? 0) < 1) {
    errors.push(`${label}: needs at least one application context.`);
  }
  if (!record.recordKind) errors.push(`${label}: missing recordKind.`);
}

if (errors.length) {
  console.error(
    `Model-record quality audit failed with ${errors.length} issue(s):`,
  );
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const maturityCounts = Object.groupBy(modelRecords, getModelContentLevel);
const summary = Object.entries(maturityCounts)
  .map(([level, records]) => `${level}: ${records.length}`)
  .join(", ");
console.log(
  `Model-record quality audit passed: ${modelRecords.length} records (${summary}); all records are eligible for search indexing.`,
);
