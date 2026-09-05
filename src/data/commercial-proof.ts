import { modelRecords } from "./model-records";
import { seriesRecords } from "./series-records";

/**
 * Public evidence shown on the pre-launch site.
 *
 * These records deliberately describe what a visitor can verify on this site.
 * Live stock, legal identity, authorization, certification, warranty and
 * customer references must not be invented or inferred from another business.
 */
export const inventoryMetrics = [
  {
    value: String(modelRecords.length),
    label: "published exact-model research records",
  },
  {
    value: String(seriesRecords.length),
    label: "published series review pages",
  },
  { value: "16", label: "manufacturer reference groups" },
  { value: "6", label: "core product categories" },
];

export const ownedNetworkEvidence = [
  {
    site: "Exact model records",
    contribution:
      "Code-level research pages showing known fields and open confirmation points.",
    evidence:
      "Public page evidence only; not a statement of ownership, stock or sales history.",
    sourceUrl: "/models/",
    status: "Published on this site",
  },
  {
    site: "Series review directory",
    contribution:
      "Family-level review focus, source boundary and minimum inquiry evidence.",
    evidence:
      "Series coverage supports inquiry routing, not automatic interchangeability.",
    sourceUrl: "/series/",
    status: "Published on this site",
  },
  {
    site: "Technical resource library",
    contribution:
      "Identification, sizing, inspection and sourcing guidance for RFQ preparation.",
    evidence:
      "Editorial guidance with limitations; not manufacturer engineering approval.",
    sourceUrl: "/resources/",
    status: "Published on this site",
  },
  {
    site: "Review and release process",
    contribution:
      "A documented method for separating confirmed, conditional and unknown information.",
    evidence:
      "Process description only; execution evidence must be attached to an actual quotation or order.",
    sourceUrl: "/matching-process/",
    status: "Published on this site",
  },
];

export const operationalEvidence = [
  {
    type: "Business identity",
    record:
      "No legal entity registration, office ownership or warehouse record is published on the pre-launch site.",
    proof: "Must be added only from a genuine, current business document",
    sourceUrl: "/about/",
  },
  {
    type: "Inventory",
    record:
      "No live quantity or ready-to-dispatch inventory is publicly established.",
    proof:
      "Exact model, quantity, condition and date require supplier confirmation",
    sourceUrl: "/models/",
  },
  {
    type: "Customer evidence",
    record:
      "Anonymous process examples are not presented as independent reviews or endorsements.",
    proof:
      "Public attribution requires customer permission and a verifiable source",
    sourceUrl: "/case-studies/",
  },
  {
    type: "Order evidence",
    record:
      "Price, stock, compatibility, inspection and warranty are order-specific facts.",
    proof: "The accepted quotation and attached evidence control the order",
    sourceUrl: "/request-a-quote/",
  },
];

export const verificationLevels = [
  [
    "Published site record",
    "A visitor can inspect the page and its stated limitations",
    "Useful for research and inquiry preparation only",
  ],
  [
    "Document supplied",
    "A current document is tied to the exact supplier, item or claim",
    "Check issuer, holder, scope, identifier and validity",
  ],
  [
    "Quotation confirmed",
    "The exact model, quantity and commercial conditions are checked for the inquiry",
    "Written quotation controls the proposed transaction",
  ],
  [
    "Order release evidence",
    "Agreed inspection or test records are tied to the supplied item",
    "Supports only the named order, scope and acceptance criteria",
  ],
];

export const inventoryRows = [
  [
    "Directional and modular valves",
    "No live stock quantity published",
    "Product, brand, series and selected model-code research",
    "Exact model, quantity, condition and lead time checked per RFQ",
  ],
  [
    "Axial piston pumps",
    "No live stock quantity published",
    "Open- and closed-circuit series plus selected exact codes",
    "Control, rotation, interfaces and supply route checked per RFQ",
  ],
  [
    "Vane pumps and cartridges",
    "No live stock quantity published",
    "Selected Vickers- and Parker-referenced family coverage",
    "Section, cartridge, rotation and port configuration checked per RFQ",
  ],
  [
    "Hydraulic pump and motor parts",
    "No live stock quantity published",
    "Selected service-kit and parent-unit reference records",
    "Parent assembly, part number, contents and condition checked per RFQ",
  ],
  [
    "Hydraulic cylinders",
    "No live stock quantity published",
    "Standard replacement and custom-cylinder requirement guides",
    "Dimensions, load, pressure, material and first-article scope checked per RFQ",
  ],
  [
    "Solenoids and accessories",
    "No live stock quantity published",
    "Referenced within relevant valve and model-code pages",
    "Voltage, connector, coil and parent-valve relationship checked per RFQ",
  ],
];

export const credentials = [
  {
    type: "Evidence status",
    title: "Manufacturer authorization",
    holder: "Not publicly established",
    issuer: "No issuer document posted",
    reference: "Not available",
    validity: "Must be current on the quotation date",
    scope:
      "Authorization may be claimed only for the exact manufacturer, legal holder, territory and product scope shown by a genuine document.",
  },
  {
    type: "Evidence status",
    title: "Management-system certification",
    holder: "Not publicly established",
    issuer: "No certification body document posted",
    reference: "Not available",
    validity: "Must be verified with the issuer",
    scope:
      "Supplier certificates do not automatically certify Hydraulic Match or every product supplied through the service.",
  },
  {
    type: "Evidence status",
    title: "Business and facility identity",
    holder: "Not yet published",
    issuer: "Applicable official registry or property record",
    reference: "To be added from genuine records",
    validity: "Recheck when business details change",
    scope:
      "An address, warehouse, factory or named employee must belong to the represented legal entity before it appears as company proof.",
  },
];

export const evidenceGaps = [
  {
    claim: "Customer review or testimonial",
    publishWhen:
      "The customer authorizes publication and the quote, role and relationship can be substantiated.",
    currentStatus:
      "No attributed customer endorsement is published. Anonymous cases remain process examples.",
  },
  {
    claim: "Live inventory and dispatch time",
    publishWhen:
      "The exact code, available quantity, condition, location, checked date and dispatch basis are recorded.",
    currentStatus:
      "Confirmed privately per RFQ; no public live-stock feed is represented.",
  },
  {
    claim: "Authorization or certification",
    publishWhen:
      "A genuine document identifies the issuer, legal holder, scope, reference and current validity.",
    currentStatus: "No public credential is represented as verified.",
  },
  {
    claim: "Direct-fit or performance outcome",
    publishWhen:
      "Relevant function, interfaces, ratings, application and acceptance evidence are tied to the exact offered item.",
    currentStatus:
      "Pages describe review requirements, not pre-approved replacements.",
  },
];

export const compatibilityReviewRows = [
  [
    "Family or partial code",
    "Identification lead",
    "Do not name a direct replacement; request the missing identifier and application evidence",
    "No commercial commitment",
  ],
  [
    "Complete original code",
    "Reviewable reference",
    "Interpret code fields and identify comparison requirements",
    "Availability still unconfirmed",
  ],
  [
    "Original and offered data compared",
    "Conditional candidate",
    "List matched fields, differences and open confirmations",
    "Quote only with visible conditions",
  ],
  [
    "Order-specific evidence accepted",
    "Approved for the recorded order scope",
    "Use the wording and acceptance criteria stated in the quotation",
    "Warranty only as written in that quotation",
  ],
];

export const warranty = {
  duration: "Quotation-specific",
  starts:
    "from the event stated in the accepted quotation or warranty document",
  response:
    "Claim acknowledgement and review timing are stated in the applicable order terms",
  remedies:
    "Any technical support, repair, replacement or credit is governed by the accepted quotation and confirmed failure review",
  exclusions: [
    "Incorrect model selection or unapproved application changes",
    "Improper installation, commissioning, contamination or fluid condition",
    "Operation outside confirmed pressure, speed, temperature or electrical limits",
    "Unauthorized disassembly, modification or repair",
    "Normal wear unless the applicable order warranty states otherwise",
    "Freight, labor, downtime and consequential loss unless expressly accepted in writing",
  ],
};
