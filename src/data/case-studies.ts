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
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    evidenceBoundary:
      "The buyer name, Excel file, commercial documents and shipment photographs are private. The record shows the control points used for a mixed RFQ, not public proof of order value or customer endorsement.",
    takeaway:
      "Mixed RFQs remain auditable when every line preserves its original reference, evidence status, packing instruction and release record.",
  },
];
