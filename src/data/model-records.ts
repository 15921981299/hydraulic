import { importedModelRecords } from "./imported-model-records.ts";

export type HydraulicModelRecord = {
  slug: string;
  brand: string;
  model: string;
  materialNumber?: string;
  productType: string;
  series: string;
  image: string;
  description: string;
  originalReference: string;
  matchedRoute: string;
  compatibilityStatus: string;
  warranty: string;
  sourceLabel: string;
  sourceUrl: string;
  /** Add document metadata only when the cited source supports it. */
  sourceDocument?: string;
  sourceRevision?: string;
  sourceReviewedAt?: string;
  published?: string;
  modified?: string;
  reviewedBy?: string;
  codeGroups: { label: string; value: string; review: string }[];
  requiredChecks: string[];
  applications: string[];
  relatedHref: string;
  recordKind?:
    | "engineering-review"
    | "owned-site-catalog"
    | "external-catalog-reference";
  sourceSite?: string;
  evidenceNote?: string;
  procurementSpecs?: {
    label: string;
    value: string;
    basis: string;
  }[];
  compatibleApplication?: string;
  incompatibleApplications?: string[];
  knownDifferences?: string[];
  evidenceAssets?: {
    kind: "nameplate" | "drawing" | "comparison" | "inspection" | "test";
    label: string;
    url: string;
    disclosure?: string;
  }[];
  inquiryFields?: string[];
  replacementCase?: {
    title: string;
    originalModel: string;
    replacementModel: string;
    application: string;
    verification: string;
    outcome: string;
    disclosure: string;
  };
  alternativeReview?: {
    status:
      | "No public alternative"
      | "Candidate under review"
      | "Order-specific alternative approved";
    proposedModel?: string;
    note: string;
  };
  commercial?: {
    status: "Available" | "Quote required" | "Reconfirm";
    price?: string;
    moq: string;
    leadTime: string;
    condition: string;
  };
};

export type ModelContentLevel =
  | "catalog-reference"
  | "identification-reviewed"
  | "comparison-ready"
  | "verified-case";

/** Content maturity label derived from record-specific evidence. */
export function getModelContentLevel(
  record: HydraulicModelRecord,
): ModelContentLevel {
  if (record.replacementCase) return "verified-case";
  if (
    record.alternativeReview?.proposedModel &&
    record.alternativeReview.status !== "No public alternative" &&
    (record.procurementSpecs?.length ?? 0) >= 6 &&
    record.compatibleApplication
  ) {
    return "comparison-ready";
  }
  if (
    record.recordKind !== "external-catalog-reference" &&
    (record.codeGroups?.length ?? 0) >= 4 &&
    (record.procurementSpecs?.length ?? 0) >= 6 &&
    Boolean(record.compatibleApplication) &&
    /^https?:\/\//.test(record.sourceUrl)
  ) {
    return "identification-reviewed";
  }
  return "catalog-reference";
}

export function modelSearchIntent(record: HydraulicModelRecord) {
  const level = getModelContentLevel(record);
  if (level === "verified-case") {
    return {
      level,
      label: "Documented replacement case",
      title: `${record.model} Replacement Case`,
      heading: `${record.model} Replacement Case`,
    };
  }
  if (level === "comparison-ready") {
    return {
      level,
      label: "Replacement comparison",
      title: `${record.model} Replacement Match`,
      heading: `${record.model} Replacement Comparison`,
    };
  }
  if (level === "identification-reviewed") {
    return {
      level,
      label: "Reviewed identification record",
      title: `${record.model} Specifications`,
      heading: `${record.model} Specifications & Identification`,
    };
  }
  const shortModel =
    record.materialNumber ??
    (record.model.length > 30 ? record.series : record.model);
  return {
    level,
    label: "External catalog lead",
    title: `${shortModel} Sourcing Reference`,
    heading: `${record.model} Sourcing Reference`,
  };
}

/**
 * Search landing records for exact model references documented by the original
 * manufacturer. Inclusion is not a claim that every suffix is currently in
 * stock. Exact availability and compatibility are confirmed per quotation.
 */
const reviewedModelRecords: HydraulicModelRecord[] = [
  {
    slug: "bosch-rexroth-4we6-d6x-eg24n9k4",
    brand: "Bosch Rexroth",
    model: "4WE 6 D6X/EG24N9K4",
    materialNumber: "R900561274",
    productType: "Solenoid directional valve",
    series: "4WE6",
    image: "/images/hydraulic/hydraulic-valves.webp",
    description:
      "Independent replacement review for Bosch Rexroth 4WE 6 D6X/EG24N9K4, including spool, 24 VDC solenoid, connector, mounting and application checks.",
    originalReference: "4WE 6 D6X/EG24N9K4 · R900561274",
    matchedRoute:
      "Candidate supply route to be identified and documented by quotation",
    compatibilityStatus:
      "Identification record; no offered replacement is approved on this page",
    warranty: "Only the terms stated in an accepted quotation apply",
    sourceLabel: "Bosch Rexroth official offer drawing",
    sourceUrl:
      "https://www.boschrexroth.com/ics/content/UpToDate/CadGenerate/Ventile/4WE_6_D6X_EG24N9K4_Emm_MB_1.pdf",
    codeGroups: [
      {
        label: "WE 6",
        value: "Directional spool valve, nominal size 6",
        review: "Confirm ISO / CETOP mounting interface",
      },
      {
        label: "D",
        value: "D spool symbol",
        review: "Confirm the circuit function against the hydraulic schematic",
      },
      {
        label: "6X",
        value: "Series 60–69",
        review: "Confirm installation dimensions and revision",
      },
      {
        label: "EG24",
        value: "Wet-pin solenoid, 24 VDC",
        review: "Confirm voltage, current type and coil arrangement",
      },
      {
        label: "N9K4",
        value: "Manual override and DIN connector configuration",
        review: "Confirm connector orientation and plug requirement",
      },
    ],
    procurementSpecs: [
      {
        label: "Original model",
        value: "4WE 6 D6X/EG24N9K4",
        basis: "Bosch Rexroth exact offer drawing",
      },
      {
        label: "Material number",
        value: "R900561274",
        basis: "Bosch Rexroth exact offer drawing",
      },
      {
        label: "Nominal size",
        value: "NG6 directional spool valve",
        basis: "WE 6 code group",
      },
      { label: "Spool", value: "D spool symbol", basis: "D code group" },
      {
        label: "Design series",
        value: "Series 60–69",
        basis: "6X code group; exact drawing controls dimensions",
      },
      { label: "Solenoid", value: "Wet-pin, 24 VDC", basis: "EG24 code group" },
      {
        label: "Operator / connector",
        value: "Manual override and DIN connector configuration",
        basis: "N9K4 code group",
      },
    ],
    compatibleApplication:
      "NG6 industrial hydraulic circuits requiring the documented D spool function, 24 VDC wet-pin solenoid and N9K4 operator/connector configuration. Pressure, flow, fluid, mounting and the machine schematic still control final approval.",
    requiredChecks: [
      "Clear original nameplate and connector photos",
      "Working and peak pressure",
      "Required flow and pressure-drop tolerance",
      "Fluid, seal and temperature requirements",
      "Mounting space and manual-override access",
    ],
    applications: [
      "Industrial machinery",
      "Machine tools",
      "Plastic machinery",
      "Hydraulic power units",
    ],
    relatedHref: "/alternatives/rexroth/4we6/",
  },
  {
    slug: "bosch-rexroth-4we10-e5x-eg24n9k4-m",
    brand: "Bosch Rexroth",
    model: "4WE 10 E5X/EG24N9K4/M",
    materialNumber: "R901278761",
    productType: "Solenoid directional valve",
    series: "4WE10",
    image: "/images/hydraulic/hydraulic-valves.webp",
    description:
      "Independent replacement review for Bosch Rexroth 4WE 10 E5X/EG24N9K4/M by spool, nominal size, pressure, flow, 24 VDC solenoid and connector.",
    originalReference: "4WE 10 E5X/EG24N9K4/M · R901278761",
    matchedRoute:
      "Candidate supply route to be identified and documented by quotation",
    compatibilityStatus:
      "Identification record; hydraulic and electrical comparison still required",
    warranty: "Only the terms stated in an accepted quotation apply",
    sourceLabel: "Bosch Rexroth official product record",
    sourceUrl:
      "https://www.boschrexroth.com/ics/Materialnumber/JumpToDatasheet.cfm?materialnumber=R901278761",
    codeGroups: [
      {
        label: "WE 10",
        value: "Direct-operated directional spool valve, nominal size 10",
        review: "Confirm mounting pattern and envelope",
      },
      {
        label: "E",
        value: "E spool, three positions",
        review: "Confirm center and switched flow paths",
      },
      {
        label: "5X",
        value: "Series 50–59",
        review: "Confirm revision and unchanged connection dimensions",
      },
      {
        label: "EG24",
        value: "Wet-pin solenoid, 24 VDC",
        review: "Confirm electrical supply and duty",
      },
      {
        label: "N9K4/M",
        value: "Manual override, DIN connector and corrosion option",
        review: "Confirm connector and environmental requirement",
      },
    ],
    procurementSpecs: [
      {
        label: "Original model",
        value: "4WE 10 E5X/EG24N9K4/M",
        basis: "Bosch Rexroth exact product record",
      },
      {
        label: "Material number",
        value: "R901278761",
        basis: "Bosch Rexroth exact product record",
      },
      {
        label: "Nominal size",
        value: "NG10 direct-operated directional spool valve",
        basis: "WE 10 code group",
      },
      {
        label: "Spool",
        value: "E spool, three positions",
        basis: "E code group",
      },
      {
        label: "Design series",
        value: "Series 50–59",
        basis: "5X code group; drawing controls interfaces",
      },
      { label: "Solenoid", value: "Wet-pin, 24 VDC", basis: "EG24 code group" },
      {
        label: "Operator / connector",
        value: "Manual override, DIN connector and corrosion option",
        basis: "N9K4/M code group",
      },
    ],
    compatibleApplication:
      "NG10 industrial hydraulic circuits requiring the documented three-position E spool, 24 VDC wet-pin solenoid and N9K4/M option group. Center function, pressure, flow, mounting and environmental exposure must be confirmed for the machine.",
    requiredChecks: [
      "Complete nameplate and material number",
      "Hydraulic schematic or required spool function",
      "Working pressure and maximum flow",
      "Voltage, connector and manual override",
      "Fluid, ambient and corrosion conditions",
    ],
    applications: [
      "Industrial presses",
      "Power units",
      "Material handling",
      "Heavy industrial machinery",
    ],
    relatedHref: "/alternatives/rexroth/4we10/",
  },
  {
    slug: "bosch-rexroth-a10vso18-drg-31r-vpa12n00",
    brand: "Bosch Rexroth",
    model: "A10VSO 18 DRG/31R-VPA12N00",
    materialNumber: "R910948472",
    productType: "Axial piston variable pump",
    series: "A10VSO",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    description:
      "Independent sourcing and replacement review for Bosch Rexroth A10VSO 18 DRG/31R-VPA12N00 by displacement, control, rotation, shaft, flange and ports.",
    originalReference: "A10VSO 18 DRG/31R-VPA12N00 · R910948472",
    matchedRoute:
      "Original or alternative route must be identified by the quotation",
    compatibilityStatus:
      "Identification record; drawing, control and application review still required",
    warranty: "Only the terms stated in an accepted quotation apply",
    sourceLabel: "Bosch Rexroth official product record",
    sourceUrl:
      "https://www.boschrexroth.com/en/nz/p/axial-piston-pump-r910948472/",
    procurementSpecs: [
      {
        label: "Original model",
        value: "A10VSO 18 DRG/31R-VPA12N00",
        basis: "Bosch Rexroth exact product record R910948472",
      },
      {
        label: "Displacement",
        value: "18 cm³/rev",
        basis: "Exact material-number attribute",
      },
      {
        label: "Working pressure",
        value: "280 bar",
        basis: "Exact material-number attribute",
      },
      {
        label: "Rotation",
        value: "Clockwise, viewed on shaft end",
        basis: "Exact material-number attribute",
      },
      {
        label: "Rated data point",
        value: "1500 rpm · maximum flow 27 L/min",
        basis: "Exact material-number attributes",
      },
      {
        label: "Control",
        value: "DR remote-controlled pressure control",
        basis: "Exact material-number attribute",
      },
      {
        label: "Shaft",
        value: "ISO shaft with key",
        basis: "Exact material-number attribute",
      },
      {
        label: "Mounting",
        value: "ISO 3019-2 metric, 2-hole flange",
        basis: "Exact material-number attribute",
      },
      {
        label: "Working ports",
        value: "B and S metric flange configuration",
        basis:
          "Exact material-number attribute; drawing still controls dimensions",
      },
      {
        label: "Seal material",
        value: "FKM",
        basis: "Exact material-number attribute",
      },
      {
        label: "Published weight",
        value: "13.17 kg",
        basis: "Exact material-number attribute",
      },
    ],
    compatibleApplication:
      "Open-circuit industrial hydraulic systems that require an 18 cm³/rev variable axial-piston pump, DR remote pressure control, clockwise shaft rotation, ISO 3019-2 metric 2-hole mounting and the stated shaft and port configuration. Final application approval still requires operating pressure, speed, fluid, duty cycle and installation comparison.",
    inquiryFields: [
      "Photo of the complete original nameplate and material number R910948472",
      "Required quantity and destination",
      "Machine type and current pump failure or replacement reason",
      "Working and peak pressure, drive speed and required flow",
      "Shaft, flange and port-side installation photos",
      "Whether an original unit, aftermarket replacement or either route is acceptable",
    ],
    codeGroups: [
      {
        label: "A10VSO",
        value: "Open-circuit axial piston variable pump family",
        review: "Confirm intended circuit and duty",
      },
      {
        label: "18",
        value: "Nominal displacement group",
        review: "Confirm required flow at actual drive speed",
      },
      {
        label: "DRG",
        value: "Pressure-control configuration",
        review: "Confirm control behavior and setting range",
      },
      {
        label: "31R",
        value: "Series and clockwise rotation",
        review: "Confirm rotation viewed from the drive shaft",
      },
      {
        label: "VPA12N00",
        value: "Seal, shaft, mounting and connection configuration",
        review: "Compare official drawing and installed interfaces",
      },
    ],
    requiredChecks: [
      "Complete pump nameplate and material number",
      "Control and pressure-setting requirements",
      "Drive rotation and operating speed",
      "Shaft, flange and port-side photos or dimensions",
      "Hydraulic fluid, temperature and machine duty",
    ],
    applications: [
      "Industrial power units",
      "Machine tools",
      "Presses",
      "General industrial hydraulics",
    ],
    relatedHref: "/alternatives/rexroth/a10vso/",
  },
  {
    slug: "eaton-vickers-dg4v-3-6c-m-u-h7-60",
    brand: "Eaton / Vickers",
    model: "DG4V-3-6C-M-U-H7-60",
    productType: "Solenoid directional valve",
    series: "DG4V",
    image: "/images/hydraulic/hydraulic-valves.webp",
    description:
      "Independent replacement review for Eaton Vickers DG4V-3-6C-M-U-H7-60 by frame, spool, actuation, voltage, mounting and fluid conditions.",
    originalReference: "DG4V-3-6C-M-U-H7-60",
    matchedRoute:
      "Candidate supply route to be identified and documented by quotation",
    compatibilityStatus:
      "Identification record; function, mounting and solenoid review still required",
    warranty: "Only the terms stated in an accepted quotation apply",
    sourceLabel: "Eaton official product guide",
    sourceUrl:
      "https://www.eaton.com/content/dam/eaton/markets/food-beverage/knowledge-center/brochure/Food%20processing%20products%20guide%20PDF.pdf",
    codeGroups: [
      {
        label: "DG4V",
        value: "Solenoid-operated directional valve family",
        review: "Confirm actuation and application",
      },
      {
        label: "3",
        value: "Frame / mounting size group",
        review: "Confirm mounting interface and available envelope",
      },
      {
        label: "6C",
        value: "Spool and position configuration",
        review: "Confirm hydraulic circuit function",
      },
      {
        label: "M-U",
        value: "Operator and connection options",
        review: "Confirm manual operator and electrical connection",
      },
      {
        label: "H7-60",
        value: "Solenoid and design-series configuration",
        review: "Confirm voltage, frequency and series revision",
      },
    ],
    procurementSpecs: [
      {
        label: "Original model",
        value: "DG4V-3-6C-M-U-H7-60",
        basis: "Eaton official product-guide reference",
      },
      {
        label: "Product family",
        value: "Solenoid-operated directional valve",
        basis: "DG4V code group",
      },
      {
        label: "Frame / mounting group",
        value: "Size group 3",
        basis: "3 code group; mounting drawing still required",
      },
      {
        label: "Spool configuration",
        value: "6C",
        basis: "Exact code; verify flow paths against the circuit",
      },
      {
        label: "Operator / connection",
        value: "M-U option group",
        basis: "Exact code; confirm physical operator and connection",
      },
      {
        label: "Solenoid / design series",
        value: "H7-60 configuration",
        basis: "Exact code; voltage and frequency require confirmation",
      },
    ],
    compatibleApplication:
      "Industrial directional-control duties that match the DG4V size-group 3 mounting, 6C spool function and the documented operator, connection and design-series options. Voltage, pressure, flow, fluid and the circuit symbol remain required before approval.",
    requiredChecks: [
      "Complete model and part number",
      "Nameplate, connector and mounting photos",
      "Spool function and circuit requirement",
      "Operating pressure and flow",
      "Voltage, fluid and temperature",
    ],
    applications: [
      "Industrial machinery",
      "Food-processing equipment",
      "Power units",
      "Material handling",
    ],
    relatedHref: "/alternatives/vickers/dg4v/",
  },
  {
    slug: "parker-d1vw020bnjw",
    brand: "Parker",
    model: "D1VW020BNJW",
    productType: "Solenoid directional valve",
    series: "D1VW",
    image: "/images/hydraulic/hydraulic-valves.webp",
    description:
      "Independent replacement review for Parker D1VW020BNJW by NG06 mounting, spool function, 24 VDC electrical configuration, pressure and flow.",
    originalReference: "D1VW020BNJW",
    matchedRoute:
      "Candidate supply route to be identified and documented by quotation",
    compatibilityStatus:
      "Identification record; no offered replacement is approved on this page",
    warranty: "Only the terms stated in an accepted quotation apply",
    sourceLabel: "Parker official approved-component document",
    sourceUrl:
      "https://www.parker.com/content/dam/parker/emea/germany-austria-and-switzerland/about-parker/vw/main/Parker_Hannifin_GmbH_Freigabeliste_VW_Components-Gie%C3%9Ferei_Hydraulik_20250101_en.pdf",
    codeGroups: [
      {
        label: "D1VW",
        value: "Direct-operated directional valve, NG06 family",
        review: "Confirm ISO mounting interface",
      },
      {
        label: "020",
        value: "Spool function code",
        review: "Confirm flow paths against the hydraulic schematic",
      },
      {
        label: "B",
        value: "Operator / spring configuration group",
        review: "Confirm de-energized position and return action",
      },
      {
        label: "NJW",
        value: "Electrical and option configuration",
        review: "Confirm 24 VDC coil, connector and installed option",
      },
    ],
    procurementSpecs: [
      {
        label: "Original model",
        value: "D1VW020BNJW",
        basis: "Parker approved-component reference",
      },
      {
        label: "Product family",
        value: "Direct-operated directional valve",
        basis: "D1VW code group",
      },
      {
        label: "Mounting family",
        value: "NG06",
        basis: "D1VW family identification; drawing controls dimensions",
      },
      {
        label: "Spool function",
        value: "020 code",
        basis: "Exact model code; verify against the schematic",
      },
      {
        label: "Operator / spring group",
        value: "B configuration",
        basis: "Exact model code",
      },
      {
        label: "Electrical / option group",
        value: "NJW configuration",
        basis: "Exact model code; confirm coil and connector label",
      },
    ],
    compatibleApplication:
      "NG06 industrial hydraulic circuits requiring the D1VW 020 spool function and the documented B and NJW option groups. The hydraulic symbol, de-energized position, voltage, pressure, flow and mounting face must be confirmed before replacement approval.",
    requiredChecks: [
      "Complete nameplate and product photos",
      "Required spool and de-energized condition",
      "Working pressure and flow",
      "Voltage and connector",
      "Seal, fluid and environment",
    ],
    applications: [
      "Industrial machinery",
      "Foundry equipment",
      "Machine tools",
      "Hydraulic power units",
    ],
    relatedHref: "/alternatives/parker/d1vw/",
  },
];

type OwnedCatalogInput = {
  slug: string;
  brand: string;
  model: string;
  productType: string;
  series: string;
  image: string;
  sourceSite: string;
  sourceUrl: string;
  sourceLabel: string;
  status?: "Available" | "Quote required" | "Reconfirm";
  price?: string;
  condition?: string;
  leadTime?: string;
  moq?: string;
  materialNumber?: string;
};

export const catalogRecord = (item: OwnedCatalogInput): HydraulicModelRecord => ({
  ...item,
  recordKind: "external-catalog-reference",
  description: `${item.brand} ${item.model} ${item.productType} reference record derived from the cited external catalog and requiring independent commercial confirmation.`,
  originalReference: item.materialNumber
    ? `${item.model} · ${item.materialNumber}`
    : item.model,
  matchedRoute:
    "External reference lead; supplier identity and legal supply route unconfirmed",
  compatibilityStatus:
    "Catalog reference only; no stock, ownership or direct-fit commitment",
  warranty: "Only the terms stated in an accepted quotation apply",
  evidenceNote:
    "The cited third-party page supports the reference only. It does not establish that Hydraulic Match owns the source site, controls its inventory or can supply the item.",
  alternativeReview: {
    status: "No public alternative",
    note: "No replacement model is published from this external reference alone. A candidate requires a separate code, interface and application review.",
  },
  commercial: {
    status: item.status ?? "Reconfirm",
    price: item.price,
    moq: item.moq ?? "1 unit; reconfirm with quotation",
    leadTime: item.leadTime ?? "Reconfirm against current stock",
    condition: item.condition ?? "As stated on approved quotation",
  },
  codeGroups: [
    {
      label: item.model,
      value: "Exact legacy-catalog identifier",
      review: "Match every character to the nameplate or part label",
    },
    {
      label: item.series,
      value: `${item.series} product-family reference`,
      review: "Confirm displacement or size, control, rotation and revision",
    },
    {
      label: item.productType,
      value: "Confirmed product type",
      review: "Confirm the requested assembly level and condition",
    },
    {
      label: "Commercial status",
      value: "Availability record",
      review:
        "Reconfirm price, physical quantity and dispatch date before payment",
    },
  ],
  requiredChecks: [
    "Complete original nameplate or part-label photograph",
    "Quantity, destination and required delivery date",
    "New, aftermarket, remanufactured or repair-part requirement",
    "Mechanical, hydraulic and electrical interface details",
    "Written approval of the final quotation and differences",
  ],
  applications: [
    "Industrial hydraulic service",
    "Mobile equipment repair",
    "MRO and distributor supply",
    "Controlled replacement projects",
  ],
  relatedHref: `/series/${item.series
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}/`,
});

const ownedCatalogRecords: HydraulicModelRecord[] = [
  catalogRecord({
    slug: "rexroth-a10vo28dr-31r-psc61k40",
    brand: "Bosch Rexroth",
    model: "A10VO28DR/31R-PSC61K40",
    productType: "New aftermarket axial piston pump",
    series: "A10VO",
    image: "/images/owned-network/rexroth-a10v.webp",
    sourceSite: "Rexroth Replacements",
    sourceLabel: "External catalog reference",
    sourceUrl:
      "https://www.rexrothreplacements.com/products/a10vo28dr-31r-psc61k40",
    status: "Available",
    price: "USD 1,710.00",
    condition: "New aftermarket",
    leadTime: "Stock status published; dispatch date reconfirmed",
  }),
  ...[
    ["a10vso28dfr1-31r-psa11k01", "A10VSO28DFR1/31R-PSA11K01", "A10VSO"],
    ["a10vo45dflr-31l-psc12k03", "A10VO45DFLR/31L-PSC12K03", "A10VO"],
    ["a10vo71dr-31r-pua12k07", "A10VO71DR/31R-PUA12K07", "A10VO"],
    ["a10vo71dfr-31r-vsa92k03", "A10VO71DFR/31R-VSA92K03", "A10VO"],
    ["a10vo71dflr-31r-vka41k52", "A10VO71DFLR/31R-VKA41K52", "A10VO"],
    ["a10vso71dfr1-31l-vrc62k03", "A10VSO71DFR1/31L-VRC62K03", "A10VSO"],
    ["a10vso100dfr1-31l-vkc12k17", "A10VSO100DFR1/31L-VKC12K17", "A10VSO"],
  ].map(([slug, model, series]) =>
    catalogRecord({
      slug: `rexroth-${slug}`,
      brand: "Bosch Rexroth",
      model,
      productType: "New aftermarket axial piston pump",
      series,
      image: "/images/owned-network/rexroth-a10v.webp",
      sourceSite: "Rexroth Replacements",
      sourceLabel: "External catalog reference",
      sourceUrl: `https://www.rexrothreplacements.com/products/${slug}`,
      status: "Reconfirm",
      condition: "New aftermarket",
    }),
  ),
  ...[
    ["a4vso71dfr-10r-vpd63n00", "A4VSO71DFR/10R-VPD63N00", "A4VSO"],
    ["a4vso71dfr-10l-pkb63n00", "A4VSO71DFR/10L-PKB63N00", "A4VSO"],
    ["aa10vo45dflr-31l-ppa62k68", "AA10VO45DFLR/31L-PPA62K68", "AA10VO"],
    ["aa10vo71dflr-31l-psa41k03", "AA10VO71DFLR/31L-PSA41K03", "AA10VO"],
    ["aa10vso71dfr1-31l-vwc61k07", "AA10VSO71DFR1/31L-VWC61K07", "AA10VSO"],
    ["aa10vso100dflr-31r-ppc62k38", "AA10VSO100DFLR/31R-PPC62K38", "AA10VSO"],
  ].map(([slug, model, series]) =>
    catalogRecord({
      slug: `rexroth-${slug}`,
      brand: "Bosch Rexroth",
      model,
      productType: "New aftermarket axial piston pump",
      series,
      image: "/images/owned-network/rexroth-a4v.png",
      sourceSite: "Rexroth Replacements",
      sourceLabel: "External catalog reference",
      sourceUrl: `https://www.rexrothreplacements.com/products/${slug}`,
      status: "Reconfirm",
      condition: "New aftermarket",
    }),
  ),
  catalogRecord({
    slug: "vickers-02-102262-seal-kit-pvh74-pvh81",
    brand: "Eaton / Vickers",
    model: "02-102262",
    materialNumber: "PVH74 / PVH81",
    productType: "Pump seal kit",
    series: "PVH",
    image: "/images/owned-network/service-pvh74.webp",
    sourceSite: "RestoPower",
    sourceLabel: "External catalog reference",
    sourceUrl: "https://restopower.com/products/vickers-pvh74-seal-kit",
    status: "Available",
    price: "USD 45.00",
    condition: "Service part",
  }),
  catalogRecord({
    slug: "vickers-02-102264-seal-kit-pvh98-pvh106",
    brand: "Eaton / Vickers",
    model: "02-102264",
    materialNumber: "PVH98 / PVH106",
    productType: "Pump seal kit",
    series: "PVH",
    image: "/images/owned-network/service-pvh98.webp",
    sourceSite: "RestoPower",
    sourceLabel: "External catalog reference",
    sourceUrl:
      "https://restopower.com/products/vickers-pvh98-pvh106-seal-kit-02-102264",
    status: "Available",
    price: "USD 45.00",
    condition: "Service part",
  }),
  catalogRecord({
    slug: "rexroth-rsap2d12-seal-kit",
    brand: "Bosch Rexroth / Uchida",
    model: "RSAP2D12",
    productType: "Pump seal kit",
    series: "AP2D",
    image: "/images/owned-network/service-ap2d12.webp",
    sourceSite: "RestoPower",
    sourceLabel: "External catalog reference",
    sourceUrl: "https://restopower.com/products/rexroth-uchida-ap2d12-seal-kit",
    status: "Available",
    price: "USD 68.00",
    condition: "Service part",
  }),
  catalogRecord({
    slug: "rexroth-r909152493-seal-ring-a4vg90",
    brand: "Bosch Rexroth",
    model: "R909152493",
    materialNumber: "A4VG90",
    productType: "Pump seal ring",
    series: "A4VG",
    image: "/images/owned-network/service-a4vg90.webp",
    sourceSite: "RestoPower",
    sourceLabel: "External catalog reference",
    sourceUrl:
      "https://restopower.com/products/rexroth-r909152493-seal-ring-a4vg90",
    status: "Available",
    price: "USD 4.35",
    condition: "Service part",
  }),
  catalogRecord({
    slug: "rexroth-r910185973-a10v18-hardware",
    brand: "Bosch Rexroth",
    model: "R910185973",
    materialNumber: "A10V18",
    productType: "Check-valve hardware",
    series: "A10V",
    image: "/images/owned-network/service-a10v18.webp",
    sourceSite: "RestoPower",
    sourceLabel: "External catalog reference",
    sourceUrl:
      "https://restopower.com/products/r910185973-a10v18-check-valve-pin",
    status: "Available",
    price: "USD 3.55",
    condition: "Service part",
  }),
  catalogRecord({
    slug: "poclain-mcr03-seal-kit",
    brand: "Poclain",
    model: "MCR03",
    productType: "Motor seal kit",
    series: "MCR",
    image: "/images/owned-network/service-mcr03.webp",
    sourceSite: "RestoPower",
    sourceLabel: "External catalog reference",
    sourceUrl: "https://restopower.com/products/poclain-seal-kit-mcr03",
    status: "Available",
    price: "USD 78.00",
    condition: "Service part",
  }),
  ...[
    [
      "D-000004RO",
      "000004 · T6DC 041 cartridge kit, CW front",
      "T6DC",
      "Cartridge kit",
    ],
    [
      "D-000006/00RO",
      "000006/00 · T6CC 003 012 1L00 C111",
      "T6CC",
      "Remanufactured vane pump",
    ],
    [
      "D-000009/00RO",
      "000009/00 · T6CC 017 025 1R00 A1 00",
      "T6CC",
      "Remanufactured vane pump",
    ],
    [
      "D-000013/00RO",
      "000013/00 · T5D 045 1R00 A1",
      "T5D",
      "Remanufactured vane pump",
    ],
    ["D-000014RO", "000014 · M1D 117 23N", "M1D", "Remanufactured vane motor"],
    [
      "D-000018/00RO",
      "000018/00 · T6CC 022 017 5L00 C110",
      "T6CC",
      "Remanufactured vane pump",
    ],
    [
      "D-000020/00RO",
      "000020/00 · T5D 045 1L00 A1",
      "T5D",
      "Remanufactured vane pump",
    ],
    [
      "D-000021/00RO",
      "000021/00 · T6CCM B10 B06 5R00 D101",
      "T6CCM",
      "Remanufactured vane pump",
    ],
    [
      "D-000022/00RO",
      "000022/00 · T6CC 022 010 2R00 C100",
      "T6CC",
      "Remanufactured vane pump",
    ],
    ["D-000026RO", "000026 · TMB 012 21N", "TMB", "Remanufactured vane motor"],
  ].map(([code, model, series, productType]) =>
    catalogRecord({
      slug: `hydparts-${code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      brand: "Parker Denison",
      model,
      materialNumber: code,
      productType,
      series,
      image: "/images/owned-network/denison-t6dc.jpg",
      sourceSite: "Hydraulic Parts Source",
      sourceLabel: "External item-detail reference",
      sourceUrl: `https://www.hydparts.com/itemdetail/?itemCode=${encodeURIComponent(code)}`,
      status: "Quote required",
      condition: code.endsWith("N") ? "New" : "HPS remanufactured",
      leadTime: "Same-day route available when physical stock is reconfirmed",
    }),
  ),
  catalogRecord({
    slug: "cat-169-4883-259-0815-295-9426-153-9426-10r3805",
    brand: "Caterpillar reference",
    model: "169-4883 / 259-0815 / 295-9426 / 153-9426 / 10R3805",
    productType: "Variable-displacement hydraulic piston pump",
    series: "CAT Piston Pump",
    image: "/images/owned-network/cat-piston-pump.png",
    sourceSite: "Hydraulic Pump Supply",
    sourceLabel: "External catalog reference",
    sourceUrl:
      "https://hydraulicpumpsupply.com/product/cat-169-4883-259-0815-295-9426-153-9426-10r3805-hydraulic-piston-pump/",
    status: "Quote required",
    condition: "OEM-spec replacement route; exact condition on quotation",
    leadTime: "Stock and production route reconfirmed",
  }),
];

export const modelRecords: HydraulicModelRecord[] = [
  ...reviewedModelRecords,
  ...ownedCatalogRecords,
  ...importedModelRecords,
].map((record) => ({
  ...record,
  recordKind: record.recordKind ?? "engineering-review",
  alternativeReview: record.alternativeReview ?? {
    status: "No public alternative",
    note: "No alternative model is published for this record yet. Submit the complete code and application evidence for candidate review.",
  },
}));
