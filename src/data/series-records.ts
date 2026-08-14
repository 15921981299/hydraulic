import { modelRecords } from "./model-records";

export type SeriesRecord = {
  slug: string;
  brand: string;
  series: string;
  productType: string;
  image: string;
  summary: string;
  reviewFocus: string[];
  applications: string[];
  supplyRoutes: string[];
  sourceSite: string;
  sourceUrl: string;
  sourceNote: string;
};

const pumpFocus = [
  "Displacement and control option",
  "Rotation, shaft and mounting flange",
  "Port arrangement and through-drive option",
  "Pressure, speed, fluid and duty cycle",
];
const valveFocus = [
  "Spool or control function",
  "Mounting interface and nominal size",
  "Voltage, connector and operator option",
  "Pressure, flow, seals and revision",
];
const serviceFocus = [
  "Exact assembly or service-part number",
  "Pump or motor size and design revision",
  "New, remanufactured or service-part condition",
  "Quantity, stock location and required date",
];
const standardApplications = [
  "Industrial MRO",
  "Hydraulic repair shops",
  "Mobile equipment service",
  "Distributor and OEM support",
];

const seriesReference = (
  slug: string,
  brand: string,
  series: string,
  productType: string,
  image: string,
  sourceSite: string,
  sourceUrl: string,
  focus = pumpFocus,
): SeriesRecord => ({
  slug,
  brand,
  series,
  productType,
  image,
  summary: `${brand} ${series} ${productType} technical identification hub covering series scope, model-code evidence, configuration fields and linked exact records.`,
  reviewFocus: focus,
  applications: standardApplications,
  supplyRoutes: [
    "Original identifier and catalog research",
    "Supplier candidate requiring identity and technical evidence",
    "Remanufactured route only when condition is documented",
    "Repair-part or seal-kit route only when the assembly revision is known",
  ],
  sourceSite,
  sourceUrl,
  sourceNote:
    "The cited external source supports reference research only. Supplier identity, availability, condition and compatibility are confirmed for the specific quotation.",
});

export const seriesRecords: SeriesRecord[] = [
  seriesReference(
    "a10vo",
    "Bosch Rexroth",
    "A10VO",
    "axial piston variable pump",
    "/images/owned-network/rexroth-a10v.webp",
    "Rexroth Replacements",
    "https://www.rexrothreplacements.com/collections/a10v-hydraulic-pump",
  ),
  seriesReference(
    "a10vso",
    "Bosch Rexroth",
    "A10VSO",
    "open-circuit axial piston pump",
    "/images/owned-network/rexroth-a10v.webp",
    "Rexroth Replacements",
    "https://www.rexrothreplacements.com/collections/a10v-hydraulic-pump",
  ),
  seriesReference(
    "a4vso",
    "Bosch Rexroth",
    "A4VSO",
    "industrial axial piston pump",
    "/images/owned-network/rexroth-a4v.png",
    "Rexroth Replacements",
    "https://www.rexrothreplacements.com/collections/a4v-hydraulic-pump",
  ),
  seriesReference(
    "aa10vo",
    "Bosch Rexroth",
    "AA10VO",
    "SAE axial piston variable pump",
    "/images/owned-network/rexroth-a10v.webp",
    "Rexroth Replacements",
    "https://www.rexrothreplacements.com/collections/a10v-hydraulic-pump",
  ),
  seriesReference(
    "aa10vso",
    "Bosch Rexroth",
    "AA10VSO",
    "SAE open-circuit axial piston pump",
    "/images/owned-network/rexroth-a10v.webp",
    "Rexroth Replacements",
    "https://www.rexrothreplacements.com/collections/a10v-hydraulic-pump",
  ),
  seriesReference(
    "a4vg",
    "Bosch Rexroth",
    "A4VG",
    "closed-circuit axial piston pump and service parts",
    "/images/owned-network/service-a4vg90.webp",
    "RestoPower",
    "https://restopower.com/products/rexroth-r909152493-seal-ring-a4vg90",
    serviceFocus,
  ),
  seriesReference(
    "a10v",
    "Bosch Rexroth",
    "A10V",
    "axial piston pump and service parts",
    "/images/owned-network/service-a10v18.webp",
    "RestoPower",
    "https://restopower.com/products/r910185973-a10v18-check-valve-pin",
    serviceFocus,
  ),
  seriesReference(
    "ap2d",
    "Bosch Rexroth / Uchida",
    "AP2D",
    "compact excavator pump and seal-kit family",
    "/images/owned-network/service-ap2d12.webp",
    "RestoPower",
    "https://restopower.com/products/rexroth-uchida-ap2d12-seal-kit",
    serviceFocus,
  ),
  seriesReference(
    "pvh",
    "Eaton / Vickers",
    "PVH",
    "piston pump and seal-kit family",
    "/images/owned-network/service-pvh74.webp",
    "RestoPower",
    "https://restopower.com/products/vickers-pvh74-seal-kit",
    serviceFocus,
  ),
  {
    ...seriesReference(
      "mcr",
      "Poclain",
      "MCR",
      "radial piston motor and seal-kit family",
      "/images/owned-network/service-mcr03.webp",
      "RestoPower",
      "https://restopower.com/products/poclain-seal-kit-mcr03",
      serviceFocus,
    ),
    summary:
      "Poclain MCR replacement hydraulic motor and MCR seal-kit sourcing hub for complete-code review, application-specific compatibility status, exact availability checks, quotation-specific warranty terms and MCR03 service records.",
  },
  ...[
    ["t6dc", "T6DC", "double vane pump cartridge family"],
    ["t6cc", "T6CC", "double vane pump family"],
    ["t6ccm", "T6CCM", "multi-section vane pump family"],
    ["t5d", "T5D", "vane pump family"],
    ["m1d", "M1D", "vane motor family"],
    ["tmb", "TMB", "vane motor family"],
  ].map(([slug, series, productType]) =>
    seriesReference(
      slug,
      "Parker Denison",
      series,
      productType,
      "/images/owned-network/denison-t6dc.jpg",
      "Hydraulic Parts Source",
      "https://www.hydparts.com/catsearch/15/vane-pump",
      serviceFocus,
    ),
  ),
  seriesReference(
    "cat-piston-pump",
    "Caterpillar reference",
    "CAT Piston Pump",
    "construction-equipment variable piston pump",
    "/images/owned-network/cat-piston-pump.png",
    "Hydraulic Pump Supply",
    "https://hydraulicpumpsupply.com/product/cat-169-4883-259-0815-295-9426-153-9426-10r3805-hydraulic-piston-pump/",
  ),
  seriesReference(
    "4we6",
    "Bosch Rexroth",
    "4WE6",
    "NG06 solenoid directional valve",
    "/images/hydraulic/hydraulic-valves.webp",
    "Hydraulic Match engineering review",
    "/alternatives/rexroth/4we6/",
    valveFocus,
  ),
  seriesReference(
    "4we10",
    "Bosch Rexroth",
    "4WE10",
    "NG10 solenoid directional valve",
    "/images/hydraulic/hydraulic-valves.webp",
    "Hydraulic Match engineering review",
    "/alternatives/rexroth/4we10/",
    valveFocus,
  ),
  seriesReference(
    "dg4v",
    "Eaton / Vickers",
    "DG4V",
    "solenoid directional valve",
    "/images/hydraulic/hydraulic-valves.webp",
    "Hydraulic Match engineering review",
    "/alternatives/vickers/dg4v/",
    valveFocus,
  ),
  seriesReference(
    "d1vw",
    "Parker",
    "D1VW",
    "NG06 solenoid directional valve",
    "/images/hydraulic/hydraulic-valves.webp",
    "Hydraulic Match engineering review",
    "/alternatives/parker/d1vw/",
    valveFocus,
  ),
  seriesReference(
    "pavc",
    "Parker",
    "PAVC",
    "axial piston variable pump",
    "/images/hydraulic/hydraulic-pumps.webp",
    "Hydraulic Match engineering review",
    "/alternatives/parker/pavc/",
  ),
];

export const seriesModels = (series: string) =>
  modelRecords.filter(
    (record) => record.series.toLowerCase() === series.toLowerCase(),
  );

export const seriesHref = (series: string) => {
  const match = seriesRecords.find(
    (record) => record.series.toLowerCase() === series.toLowerCase(),
  );
  return match ? `/series/${match.slug}/` : undefined;
};
