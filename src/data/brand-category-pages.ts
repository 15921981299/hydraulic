import { brandCoverage } from "./brand-coverage";
import { products } from "./products";
import { seriesRecords } from "./series-records";
import { modelRecords } from "./model-records";

/**
 * Brand × category matrix pages: /brands/{brand}/{category}/
 *
 * Each page is generated only when the brand has real content evidence for
 * that category (a series reference, an exact model record, or a product
 * family label). A page is an inquiry-routing hub, not a compatibility or
 * authorization claim.
 */

export type BrandCategoryKey =
  | "hydraulic-pumps"
  | "hydraulic-valves"
  | "hydraulic-motors"
  | "hydraulic-repair-kits";

type CategoryConfig = {
  label: string;
  h1Label: string;
  productSlug: string;
  /** Classify a product-type label into this category when it matches first. */
  match: (label: string) => boolean;
};

const categoryConfig: Record<BrandCategoryKey, CategoryConfig> = {
  "hydraulic-pumps": {
    label: "Hydraulic Pumps",
    h1Label: "Hydraulic Pumps",
    productSlug: "hydraulic-pumps",
    match: (t) => /pump/i.test(t),
  },
  "hydraulic-valves": {
    label: "Hydraulic Valves",
    h1Label: "Hydraulic Valves",
    productSlug: "hydraulic-valves",
    match: (t) => /valve/i.test(t),
  },
  "hydraulic-motors": {
    label: "Hydraulic Motors",
    h1Label: "Hydraulic Motors",
    productSlug: "hydraulic-motors",
    match: (t) => /motor/i.test(t),
  },
  "hydraulic-repair-kits": {
    label: "Repair Kits & Parts",
    h1Label: "Repair Kits & Service Parts",
    productSlug: "hydraulic-repair-kits",
    match: (t) =>
      /seal kit|seal-ring|repair kit|cartridge|rotating|service part|hardware|^seal|^kit/i.test(
        t,
      ),
  },
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Title-safe short brand name. Keeps the familiar identity ("Bosch Rexroth",
 * "Eaton / Vickers") while dropping decorative suffixes such as
 * "Hydraulics" / "Hydraulik" / long corporate names.
 */
export function shortBrandName(brandName: string): string {
  const brand = brandCoverage.find(
    (item) => item.name === brandName || item.aliases.includes(brandName),
  );
  if (!brand) return brandName;
  for (const alias of brand.aliases) {
    if (
      alias.length <= 12 &&
      /^[A-Za-z][\w&./-]*$/.test(alias) &&
      alias.length * 1.6 >= brand.name.length
    ) {
      return alias;
    }
  }
  const stripped = brand.name
    .replace(/\s+(Hydraulics|Hydraulik)$/i, "")
    .replace(/\/\s*Sauer-Sundstrand\s*$/i, "")
    .trim();
  if (stripped.length <= 24) return stripped;
  return brand.name.split(/\s+/)[0];
}

/** Map any brand label (series/model record) to a brandCoverage slug. */
export function brandSlugFor(label: string): string | undefined {
  const lower = label.toLowerCase();
  let best:
    | { slug: string; aliasLength: number; brandNameLength: number }
    | undefined;
  for (const brand of brandCoverage) {
    for (const alias of [brand.name, ...brand.aliases]) {
      const candidate = alias.toLowerCase();
      if (new RegExp(`\\b${escapeRegExp(candidate)}\\b`).test(lower)) {
        if (
          !best ||
          candidate.length > best.aliasLength ||
          (candidate.length === best.aliasLength &&
            brand.name.length > best.brandNameLength)
        ) {
          best = {
            slug: brand.slug,
            aliasLength: candidate.length,
            brandNameLength: brand.name.length,
          };
        }
      }
    }
  }
  return best?.slug;
}

/** Classify a product-type label into at most one matrix category. */
export function categoryKeyFor(label: string): BrandCategoryKey | undefined {
  const keys: BrandCategoryKey[] = [
    "hydraulic-valves",
    "hydraulic-pumps",
    "hydraulic-motors",
    "hydraulic-repair-kits",
  ];
  return keys.find((key) => categoryConfig[key].match(label));
}

export type BrandCategoryPage = {
  brandSlug: string;
  brandName: string;
  category: BrandCategoryKey;
  categoryLabel: string;
  categoryH1Label: string;
  productSlug: string;
  productTitle: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  series: (typeof seriesRecords)[number][];
  models: (typeof modelRecords)[number][];
  families: string[];
  parameterGroups: string[];
  applications: string[];
  requiredEvidence: string[];
  positioning: string;
};

function buildTitle(
  brandName: string,
  label: string,
): { title: string; h1: string } {
  const short = shortBrandName(brandName);
  let base = `${short} ${label} Supplier & Replacement`;
  if (base.length > 47) base = `${short} ${label} Supplier`;
  if (base.length > 47) base = `${short} ${label}`;
  return { title: `${base} | Hydraulic Match`, h1: base };
}

function buildDescription(
  brandName: string,
  label: string,
  series: BrandCategoryPage["series"],
): string {
  const seriesText =
    series.length > 0
      ? ` References include ${series
          .slice(0, 4)
          .map((item) => item.series)
          .join(", ")}.`
      : "";
  return `${brandName} ${label.toLowerCase()} replacement and sourcing.${seriesText} Submit the complete model code for technical comparison and an export quotation.`;
}

export const brandCategoryPages: BrandCategoryPage[] = brandCoverage.flatMap(
  (brand) =>
    (Object.keys(categoryConfig) as BrandCategoryKey[]).flatMap((category) => {
      const config = categoryConfig[category];
      const series = seriesRecords.filter(
        (record) =>
          brandSlugFor(record.brand) === brand.slug &&
          config.match(record.productType),
      );
      const models = modelRecords.filter(
        (record) =>
          brandSlugFor(record.brand) === brand.slug &&
          config.match(record.productType),
      );
      const families = brand.productFamilies.filter((family) =>
        config.match(family),
      );
      if (series.length === 0 && models.length === 0 && families.length === 0) {
        return [];
      }
      const product = products.find((item) => item.slug === config.productSlug);
      if (!product) return [];
      const { title, h1 } = buildTitle(brand.name, config.label);
      return [
        {
          brandSlug: brand.slug,
          brandName: brand.name,
          category,
          categoryLabel: config.label,
          categoryH1Label: config.h1Label,
          productSlug: config.productSlug,
          productTitle: product.title,
          title,
          h1,
          description: buildDescription(brand.name, config.label, series),
          intro: `${brand.name} ${config.h1Label.toLowerCase()} references are reviewed by complete model code, technical parameters, mounting interfaces and application duty before any replacement statement or quotation is released.`,
          series,
          models,
          families,
          parameterGroups: product.parameterGroups,
          applications: brand.applications,
          requiredEvidence: brand.requiredEvidence,
          positioning: brand.positioning,
        },
      ];
    }),
);

export const brandCategoryPageStats = {
  total: brandCategoryPages.length,
  byCategory: brandCategoryPages.reduce<Record<string, number>>(
    (acc, page) => {
      acc[page.category] = (acc[page.category] ?? 0) + 1;
      return acc;
    },
    {},
  ),
};
