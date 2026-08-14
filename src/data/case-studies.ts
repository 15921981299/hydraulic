export type HydraulicCaseStudy = {
  slug: string;
  title: string;
  description: string;
  industry: string;
  region: string;
  reference: string;
  result: string;
  challenge: string;
  evidence: string[];
  review: { field: string; finding: string; action: string }[];
  outcome: string[];
  image: string;
  published?: string;
  modified?: string;
  indexReady?: boolean;
  evidenceAssets?: {
    label: string;
    url: string;
    disclosure?: string;
  }[];
  evidenceBoundary: string;
  takeaway: string;
};

export const hydraulicCaseStudies: HydraulicCaseStudy[] = [
  {
    slug: "directional-valve-model-code-review-germany",
    title: "Directional Valve Model-Code Review for a German MRO Distributor",
    description:
      "An anonymized case showing how a full directional-valve model-code comparison made differences visible before order approval.",
    industry: "Industrial MRO distribution",
    region: "Germany",
    reference: "Directional valve and pump RFQ list",
    result: "Repeat valve and pump RFQs",
    challenge:
      "The buyer needed a reviewable alternative route for repeated maintenance requirements. Short series names were not sufficient for purchasing approval.",
    evidence: [
      "Original manufacturer and complete model codes",
      "Nameplate and connector photographs",
      "Quantity and destination requirements",
      "Requested quotation and packing format",
    ],
    review: [
      {
        field: "Model code",
        finding: "Multiple suffix positions affected the proposed supply",
        action: "Compared the complete code instead of the short family name",
      },
      {
        field: "Electrical",
        finding: "Voltage and connector required line-by-line confirmation",
        action: "Listed the confirmed configuration and open points",
      },
      {
        field: "Commercial",
        finding: "The buyer needed repeatable internal approval records",
        action:
          "Kept the original reference, proposed route and differences visible",
      },
    ],
    outcome: [
      "The customer could approve the proposal against a documented comparison",
      "Known differences were visible before purchase",
      "The same format was retained for repeat RFQs",
    ],
    published: "2026-06-15",
    modified: "2026-08-01",
    indexReady: true,
    evidenceAssets: [
      {
        label: "Model-code comparison record",
        url: "",
        disclosure: "Internal review document; customer identity withheld",
      },
    ],
    image: "/images/hydraulic/hydraulic-valves.webp",
    evidenceBoundary:
      "Customer identity, quotation files and correspondence are withheld. The page documents the review method and decision fields but is not presented as independently verified third-party proof.",
    takeaway:
      "For repeat MRO purchasing, retain the original reference, proposed route, differences and open confirmations in the same line-item record.",
  },
  {
    slug: "pump-identification-from-nameplate-united-states",
    title:
      "Hydraulic Pump Identification from an Old Nameplate and Installation Photos",
    description:
      "An anonymized repair-company case showing how missing shaft and port details were identified before a pump quotation.",
    industry: "Hydraulic repair and service",
    region: "United States",
    reference: "Old pump nameplate and installation photographs",
    result: "First sample accepted for controlled installation",
    challenge:
      "The original pump code was incomplete and the removed unit had no reliable dimensional drawing available at the start of the inquiry.",
    evidence: [
      "Old nameplate photograph",
      "Installed pump and drive-side photographs",
      "Machine and replacement-reason information",
      "Customer confirmation of the controlled sample process",
    ],
    review: [
      {
        field: "Identification",
        finding: "The short code did not establish the complete build",
        action: "Requested the full nameplate and additional housing views",
      },
      {
        field: "Drive interface",
        finding: "Shaft detail was missing",
        action: "Requested shaft and coupling measurements",
      },
      {
        field: "Connections",
        finding: "Port layout was not visible",
        action: "Requested port-side photographs before release",
      },
    ],
    outcome: [
      "Missing information was identified before price was treated as final",
      "A sample-first route reduced batch-order risk",
      "The first sample was accepted for controlled installation",
    ],
    published: "2026-06-20",
    modified: "2026-08-01",
    indexReady: true,
    evidenceAssets: [
      {
        label: "Pump nameplate and shaft-flange photos",
        url: "",
        disclosure: "Internal review document; customer identity withheld",
      },
    ],
    image: "/images/hydraulic/hydraulic-pumps.webp",
    evidenceBoundary:
      "The original nameplate, measurements and customer approval record are private. This page demonstrates the information-gathering sequence and does not prove that another visually similar pump will be suitable.",
    takeaway:
      "When the full pump code is unavailable, turn every missing interface into a named measurement or photograph request before treating price or compatibility as final.",
  },
  {
    slug: "mixed-hydraulic-rfq-export-uae",
    title:
      "Mixed Hydraulic RFQ, Neutral Packing and Export Evidence for a UAE Distributor",
    description:
      "An anonymized distributor case covering line-by-line Excel review, neutral packing and pre-shipment evidence.",
    industry: "Fluid power distribution",
    region: "United Arab Emirates",
    reference: "Mixed-item distributor RFQ",
    result: "Mixed-item distributor order",
    challenge:
      "The buyer needed multiple hydraulic lines reviewed in one quotation while keeping product references, packing requirements and inspection evidence organized.",
    evidence: [
      "Excel RFQ with original reference and quantity by line",
      "Destination and preferred shipment method",
      "Neutral-packing requirement",
      "Requested pre-shipment product and packing photographs",
    ],
    review: [
      {
        field: "RFQ structure",
        finding: "Different products required different confirmation depth",
        action: "Separated confirmed, conditional and incomplete lines",
      },
      {
        field: "Packing",
        finding: "The buyer served its own customer",
        action: "Recorded neutral-packing requirements before order release",
      },
      {
        field: "Shipment evidence",
        finding: "Extra local handling needed to be avoided",
        action: "Linked model, quantity and packing photos to the order",
      },
    ],
    outcome: [
      "The buyer received a line-by-line commercial record",
      "Neutral packing reduced additional handling",
      "Pre-shipment photos supported customer release",
    ],
    published: "2026-06-25",
    modified: "2026-08-01",
    indexReady: true,
    evidenceAssets: [
      {
        label: "Line-by-line RFQ comparison and packing photos",
        url: "",
        disclosure: "Internal review document; customer identity withheld",
      },
    ],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    evidenceBoundary:
      "The buyer name, Excel file, commercial documents and shipment photographs are private. The record shows the control points used for a mixed RFQ, not public proof of order value or customer endorsement.",
    takeaway:
      "Mixed RFQs remain auditable when every line preserves its original reference, evidence status, packing instruction and release record.",
  },
  {
    slug: "hydraulic-motor-replacement-southeast-asia",
    title:
      "Hydraulic Motor Replacement for a Southeast Asian Processing Plant",
    description:
      "An anonymised case showing how a piston motor replacement was reviewed against the original unit, machine duty and operating environment before supplier approval.",
    industry: "Palm oil processing",
    region: "Southeast Asia",
    reference: "Axial piston motor with brake and speed sensor",
    result: "Documented replacement with sample validation",
    challenge:
      "The plant needed a replacement for a discontinued piston motor driving a process conveyor. The original nameplate was worn, the motor had an integrated brake and speed sensor, and downtime was costly. A generic 'same displacement' offer had already failed once.",
    evidence: [
      "Partial nameplate with legible model code sections",
      "Motor mounting flange and shaft-end photos with scale reference",
      "Brake and sensor connector photographs",
      "Machine duty cycle: 16 h/day, continuous torque, frequent starts",
      "Failed motor returned for dimensional comparison",
    ],
    review: [
      {
        field: "Model identification",
        finding:
          "The worn nameplate retained the key displacement, series and brake code positions",
        action:
          "Reconstructed the complete code, marking confirmed and inferred characters",
      },
      {
        field: "Interface verification",
        finding:
          "The mounting flange, shaft and port threads had to match the gearbox and existing hoses",
        action:
          "Compared supplier drawing dimensions against the returned failed unit",
      },
      {
        field: "Brake and sensor",
        finding:
          "The brake release pressure and sensor output signal had to be confirmed",
        action:
          "Requested the brake characteristic and sensor specification from the supplier",
      },
      {
        field: "Sample validation",
        finding:
          "The buyer could not risk a batch failure with production running",
        action:
          "Supplied one sample unit; the buyer installed, commissioned and monitored for one week before the batch order",
      },
    ],
    outcome: [
      "One sample unit validated the mounting, brake function and sensor compatibility",
      "Batch order of six motors followed the successful sample trial",
      "The dimensional comparison record was retained for future repeat orders",
    ],
    published: "2026-06-20",
    modified: "2026-08-01",
    indexReady: true,
    evidenceAssets: [
      {
        label: "Motor nameplate and dimensional comparison record",
        url: "",
        disclosure: "Internal review document; customer identity withheld",
      },
    ],
    image: "/images/hydraulic/hydraulic-pumps.webp",
    evidenceBoundary:
      "The plant name, location, supplier identity, quotation values and commissioning records are private. The case records the review method, not public proof of a specific supplier's capability.",
    takeaway:
      "A used, failed unit is one of the best identification references available — keep it until the replacement is installed, commissioned and accepted.",
  },
  {
    slug: "multi-line-rfq-european-distributor",
    title:
      "Multi-Line Hydraulic RFQ Processing for a European Distributor",
    description:
      "An anonymised case showing how a 14-line mixed hydraulic RFQ covering valves, pumps and seal kits was processed line-by-line with visible status and open checks.",
    industry: "Hydraulic distribution",
    region: "Europe",
    reference: "14-line mixed hydraulic component RFQ",
    result: "12 lines quoted, 2 held pending more data",
    challenge:
      "The distributor needed pump, valve and seal-kit pricing for its end customer but could not source every line from one supplier. The RFQ included legacy model codes, incomplete suffixes and one line identified only by a photograph. The buyer needed a clean, line-by-line status record it could share with its customer.",
    evidence: [
      "Excel RFQ with brand, model, quantity and destination per line",
      "Nameplate and product photographs for 11 of 14 lines",
      "End-customer machine and operating data for the pump lines",
      "Required delivery window and Incoterm per line",
    ],
    review: [
      {
        field: "Code completeness",
        finding:
          "Two valve lines used short series names without spool or voltage suffixes",
        action:
          "Requested nameplate photos; supplier review could not proceed without them",
      },
      {
        field: "Pump comparison",
        finding:
          "Three pump lines had complete codes but different control and rotation options",
        action:
          "Compared each pump line separately; one required a control-code clarification",
      },
      {
        field: "Seal kit identification",
        finding:
          "One kit line was identified by a parent-pump photograph, not a part number",
        action:
          "Routed to a seal-kit supplier with the parent-pump evidence; conditional quote provided",
      },
      {
        field: "Line-item status",
        finding:
          "The buyer needed to present clear status to its own customer",
        action:
          "Returned the RFQ with every line labelled: ready-to-quote, technical clarification needed, or conditional route",
      },
    ],
    outcome: [
      "12 of 14 lines received a complete quotation with comparison status",
      "Two lines held pending missing spool/voltage suffixes",
      "The buyer used the same status format to communicate with its customer",
      "The quotation format was retained for repeat multi-line RFQs",
    ],
    published: "2026-07-01",
    modified: "2026-08-01",
    indexReady: true,
    evidenceAssets: [
      {
        label: "Multi-line RFQ status record and packing photos",
        url: "",
        disclosure: "Internal review document; customer identity withheld",
      },
    ],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    evidenceBoundary:
      "The distributor name, end-customer identity, prices and supplier names are private. The case records the RFQ processing method, not a public endorsement.",
    takeaway:
      "A multi-line RFQ does not need every line resolved to be useful. A clear status — ready, pending or conditional — lets the buyer act on what is known while chasing what is missing.",
  },
];
