import type { ContentSection } from "./hydraulic-pages";

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  /** ISO date for published date. */
  published: string;
  /** ISO date for last review/edit. */
  modified: string;
  /** Named author — must be a person listed in site.ts authorSocial or technicalReviewer. */
  author: string;
  category: "sourcing" | "technical" | "comparison" | "quality" | "industry";
  tags: string[];
  image: string;
  /** Estimated reading time, e.g. "8 min". */
  readingTime: string;
  intro: string;
  sections: ContentSection[];
  relatedPosts?: string[];
  /** Set true to keep this post out of the sitemap and search index. */
  excludeFromIndex?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-source-hydraulic-pumps-from-china",
    title: "How to Source Hydraulic Pumps from China: A Practical Guide",
    seoTitle:
      "How to Source Hydraulic Pumps from China",
    description:
      "A step-by-step guide for hydraulic distributors, repair shops and MRO buyers sourcing piston, vane and gear pumps from China — covering model codes, supplier screening and pre-shipment checks.",
    published: "2026-08-01",
    modified: "2026-08-01",
    author: "Hydraulic Match Editorial Review",
    category: "sourcing",
    tags: [
      "hydraulic pump sourcing",
      "China hydraulic suppliers",
      "pump replacement",
      "import guide",
    ],
    image: "/images/hydraulic/hydraulic-pumps.webp",
    readingTime: "10 min",
    intro:
      "Sourcing a hydraulic pump from China is not the same as ordering a commodity part. Piston, vane and gear pumps carry configuration details — displacement, control type, rotation, shaft, flange, port orientation and through-drive — that must be verified before a quotation becomes a purchase order. This guide walks through the process from model identification to shipment release.",
    sections: [
      {
        title: "1. Start with the complete pump identity, not a family name",
        intro:
          "An A10VSO or PVH series label alone is not a purchase specification. The full model code defines the build that must be sourced.",
        items: [
          "Record the complete model code including all suffixes, slashes and revision markers",
          "Photograph the nameplate straight-on in good light — every character must be readable",
          "Capture the serial number and order number separately",
          "Photograph the shaft end, mounting flange, port side and control/compensator assembly",
          "Note the machine manufacturer, model and year",
        ],
      },
      {
        title: "2. Separate the code into review groups",
        intro:
          "A pump model code encodes displacement, control, rotation, shaft, flange, ports and options. Each group must be compared, not assumed.",
        table: {
          headers: ["Code group", "What it controls", "Risk if omitted"],
          rows: [
            [
              "Frame size / displacement",
              "Theoretical flow, speed range and power demand",
              "Wrong capacity — too little flow or excessive power draw",
            ],
            [
              "Control / compensator",
              "Pressure regulation, load sensing, torque limiting or electronic control behaviour",
              "Machine response changes; safety or cycle-time problems",
            ],
            [
              "Rotation",
              "Pumping direction viewed from the drive shaft",
              "Immediate damage on startup if reversed",
            ],
            [
              "Shaft and flange",
              "Mechanical fit, pilot diameter, bolt pattern and spline/key details",
              "Installation blocked or coupling mismatch",
            ],
            [
              "Ports and case drain",
              "Main connections, case-drain routing and orientation",
              "Hose conflict, incorrect case pressure or leakage",
            ],
            [
              "Through-drive / auxiliary",
              "Rear-mounted auxiliary pump interface",
              "Missing auxiliary function; system incomplete",
            ],
          ],
        },
      },
      {
        title: "3. Supplier screening — beyond the marketplace listing",
        intro:
          "A pump supplier should be screened on identity, capability and order-specific evidence, not only on a catalogue page.",
        items: [
          "Request the supplier's legal business name, registration and product scope",
          "Ask which pump families they produce or trade regularly — not 'all types'",
          "Request a sample quotation for the exact model code, not a similar series",
          "Check whether the supplier can provide dimensional confirmation before shipment",
          "Ask about test availability: what method, what equipment and whether the record is order-linked",
          "Confirm corrective-action process: what happens if a unit fails incoming inspection?",
        ],
        note: "A supplier that cannot answer configuration-specific questions should be treated as a lead, not yet an approved source.",
      },
      {
        title: "4. Technical comparison before purchase",
        intro:
          "The core of responsible sourcing: comparing the original pump specification against the proposed option.",
        items: [
          "Displacement (cm³/rev) and permissible speed range",
          "Nominal and peak pressure rating",
          "Control type and setting range — confirm the compensator or regulator behaviour",
          "Rotation direction — confirm the manufacturer's viewing convention",
          "Mounting flange standard, pilot diameter, bolt pattern",
          "Shaft type, dimensions, spline or keyway specification",
          "Main port size, type, thread and orientation",
          "Case-drain port size and required routing",
          "Through-drive or auxiliary pump interface, if applicable",
          "Seal material and fluid compatibility (NBR, FKM, temperature range)",
        ],
        note: "Record every confirmed point and every open item. Hidden differences are the most expensive kind.",
      },
      {
        title: "5. Pre-shipment evidence — agree scope before payment",
        intro:
          "A useful pre-shipment check answers the question the buyer actually faces: 'Is this the unit I approved, and is it ready to install?'",
        items: [
          "Identity: model code, nameplate and quantity matched to the order",
          "Dimensions: agreed mounting, shaft, flange and port points recorded",
          "Visual: casting, machining, port protection and overall condition",
          "Functional: test data only when the method, equipment, conditions and acceptance limits are stated in the quotation",
          "Packing: shaft and port protection, labelling and crate/pallet condition",
        ],
        note: "Ask for the specific evidence you need in the RFQ. Availability and cost are confirmed before order placement.",
      },
      {
        title: "6. Receiving, commissioning and record retention",
        items: [
          "Inspect the pump on arrival: model, nameplate, dimensions, ports, rotation marking and visible condition",
          "Compare against the approved quotation and any pre-shipment records",
          "Commission at reduced pressure and speed where possible; monitor case-drain flow, noise, temperature and response",
          "Keep the complete RFQ, quotation, order, shipping and receiving records together",
          "For repeat orders, recheck the supplier, revision, material and application conditions — do not assume the last order governs the next one",
        ],
      },
    ],
    relatedPosts: [
      "china-vs-oem-hydraulic-parts-comparison",
      "hydraulic-component-quality-inspection-checklist",
    ],
  },
  {
    slug: "rexroth-a10vso-alternative-guide",
    title: "Rexroth A10VSO Replacement Options: What to Check Before Ordering",
    seoTitle:
      "Rexroth A10VSO Replacement Guide",
    description:
      "A practical guide to sourcing Chinese alternatives for the Rexroth A10VSO axial piston pump. Covers displacement, control, rotation, shaft, flange, ports and application checks.",
    published: "2026-08-01",
    modified: "2026-08-01",
    author: "Hydraulic Match Editorial Review",
    category: "comparison",
    tags: [
      "Rexroth A10VSO",
      "hydraulic pump alternative",
      "axial piston pump",
      "Chinese replacement pump",
    ],
    image: "/images/owned-network/rexroth-a10v.webp",
    readingTime: "9 min",
    intro:
      "The Rexroth A10VSO is one of the most widely referenced open-circuit axial piston pumps in industrial and mobile hydraulic systems. A family name alone — 'A10VSO' — does not define the displacement, control, rotation, shaft, flange, ports or through-drive arrangement. This guide explains the comparison fields that must be checked before a Chinese-sourced alternative can be approved.",
    sections: [
      {
        title: "Why 'A10VSO' is not a purchase specification",
        intro:
          "The A10VSO family spans multiple displacements, control options, rotations, shaft ends, flanges, port arrangements and through-drive configurations. Selecting by the short series name risks an installation or performance mismatch.",
        items: [
          "Displacements range from 18 to 140 cm³/rev across the family",
          "Control options include pressure compensator (DR), load sensing (DFR), remote pressure (DRG), electronic (EP) and others",
          "Rotation can be clockwise or counter-clockwise — and the convention matters",
          "Shaft options include keyed, splined and multiple diameters",
          "Flange choices include ISO 2-bolt and 4-bolt patterns",
          "Port orientation, through-drive and auxiliary options are encoded in the full type code",
        ],
      },
      {
        title: "Complete comparison checklist",
        table: {
          headers: ["Parameter", "Original A10VSO data needed", "Release condition"],
          rows: [
            [
              "Displacement",
              "Nominal cm³/rev from the nameplate code",
              "Candidate matches displacement and permissible speed range",
            ],
            [
              "Pressure",
              "Working and peak pressure from the machine specification",
              "Candidate rating covers the application with appropriate margin",
            ],
            [
              "Control",
              "Complete control code: DR, DFR, DRG, EP, etc.",
              "Control behaviour, setting range and response are confirmed by supplier data",
            ],
            [
              "Rotation",
              "As viewed from the drive shaft per the manufacturer convention",
              "Rotation is confirmed by nameplate marking and supplier specification",
            ],
            [
              "Shaft",
              "Type, diameter, key/spline detail and length",
              "Supplier drawing or measured dimensions match the original",
            ],
            [
              "Flange",
              "Pilot diameter, bolt pattern, bolt circle and bolt size",
              "Mounting dimensions are confirmed by supplier drawing",
            ],
            [
              "Ports",
              "Main pressure, suction and case-drain port sizes, types and positions",
              "Every connection point is mapped against the original installation",
            ],
            [
              "Through-drive",
              "Rear auxiliary pump interface specification, if present",
              "Through-drive availability and rating are confirmed or explicitly excluded",
            ],
            [
              "Seals",
              "Material (NBR / FKM) and temperature range",
              "Seal material matches the fluid and operating temperature",
            ],
          ],
        },
      },
      {
        title: "Common A10VSO sourcing pitfalls",
        items: [
          "A supplier offers 'A10VSO' without asking for the complete type code — the quotation may overlook critical suffixes",
          "Two pumps share the same displacement and flange but use opposite rotations",
          "A pressure compensator setting is assumed rather than confirmed from the machine specification",
          "The original through-drive auxiliary pump is forgotten — the replacement pump lacks the rear pad",
          "Port threads are guessed from nominal size rather than verified from the original installation",
          "The seal material cannot handle the actual fluid temperature or type",
        ],
        note: "The most expensive mistakes are the ones the supplier did not ask about and the buyer did not know to check.",
      },
      {
        title: "Application data that changes the comparison",
        intro:
          "Beyond the pump code, the machine application affects whether a proposed option is acceptable.",
        items: [
          "Machine type, function and duty cycle — continuous, intermittent or standby",
          "Working pressure profile — steady or with frequent peaks",
          "Hydraulic fluid type, viscosity and normal operating temperature",
          "Prime mover speed and drive arrangement",
          "System cooling and filtration condition",
          "Reason for replacement — wear, damage, upgrade or preventive maintenance",
        ],
      },
      {
        title: "Sample and commissioning plan",
        intro:
          "For a first order or a higher-risk machine, a controlled sample before batch purchase is a prudent step.",
        items: [
          "Define the sample quantity, acceptance criteria and approval authority before ordering",
          "Record the original pump settings and machine performance baseline before removal",
          "Commission the sample pump at reduced pressure/speed where possible",
          "Monitor case-drain flow, operating temperature, noise and machine cycle time",
          "Document the result — pass, conditional acceptance with noted deviations, or reject",
          "Only proceed to batch when the sample evaluation is complete and approved",
        ],
      },
    ],
    relatedPosts: [
      "how-to-source-hydraulic-pumps-from-china",
      "hydraulic-valve-model-code-decoding",
    ],
  },
  {
    slug: "hydraulic-valve-model-code-decoding",
    title: "How to Decode a Rexroth or Vickers Hydraulic Valve Model Code",
    seoTitle:
      "How to Decode a Hydraulic Valve Model Code",
    description:
      "Learn how to read Rexroth 4WE, Vickers DG4V and similar hydraulic directional valve model codes. Each code group controls function, voltage, mounting and seals.",
    published: "2026-07-28",
    modified: "2026-08-01",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: [
      "valve model code",
      "Rexroth 4WE",
      "Vickers DG4V",
      "directional valve",
      "hydraulic identification",
    ],
    image: "/images/hydraulic/hydraulic-valves.webp",
    readingTime: "9 min",
    intro:
      "A hydraulic directional valve model code looks like a string of letters, numbers and symbols — but every position encodes a specific functional or physical characteristic. Missing a suffix can mean the difference between a valve that operates the circuit correctly and one that bolts on but works incorrectly. This guide explains how to read Rexroth 4WE and Vickers DG4V codes, what each code group controls and why guessing is expensive.",
    sections: [
      {
        title: "Why every character matters",
        intro:
          "Two valves from the same series can share a mounting pattern while differing in spool function, solenoid voltage, connector style, seal material or manual-override arrangement. Shortening the code to a family name hides these differences.",
        items: [
          "A '4WE6' label describes the family and nominal size, not the spool function, voltage or connector",
          "A 'DG4V-3' reference gives the frame size but omits spool, centering, solenoid and seal options",
          "Characters are not interchangeable — a missing slash, hyphen or space may represent a real configuration difference",
          "Order numbers (R900…) and material numbers are separate identifiers that may carry revision information not visible in the short code",
        ],
      },
      {
        title: "Rexroth 4WE directional valve code groups",
        table: {
          headers: ["Code position", "Example", "What it controls", "What to check"],
          rows: [
            [
              "4WE 6",
              "4WE 6",
              "Directional spool valve, nominal size 6 (NG6 / CETOP 3)",
              "Confirm mounting pattern ISO 4401-03 / CETOP 3",
            ],
            [
              "Spool symbol",
              "D, E, J, C, Y, etc.",
              "Flow paths in each solenoid state and the de-energized center condition",
              "Match the spool symbol to the hydraulic schematic — do not substitute without circuit review",
            ],
            [
              "Series",
              "5X, 6X, 7X",
              "Design series; may affect dimensions, pressure rating or available options",
              "Confirm installation dimensions are consistent across series changes",
            ],
            [
              "Solenoid type",
              "E, G, etc.",
              "Wet-pin DC solenoid (E) or AC solenoid (G)",
              "DC and AC solenoids are not interchangeable; confirm voltage type and coil specification",
            ],
            [
              "Voltage",
              "G24, W230, etc.",
              "24 VDC (G24) or 230 VAC 50/60 Hz (W230)",
              "Voltage must match the machine electrical supply; wrong voltage damages the coil",
            ],
            [
              "Manual override",
              "N9, N, etc.",
              "Manual override type and accessibility",
              "Confirm override is usable in the installed position",
            ],
            [
              "Connector",
              "K4, K40, etc.",
              "DIN connector (K4) or other connector type",
              "Connector must match the wiring harness; K4 = DIN EN 175301-803",
            ],
            [
              "Seals / special",
              "V, M, etc.",
              "FKM seals (V) for higher temperature or special fluids; NBR is standard",
              "Match seal material to the hydraulic fluid and operating temperature range",
            ],
          ],
        },
        note: "This structure is illustrative for the 4WE6 series. Other Rexroth valve families may follow a different code structure. Always consult the original manufacturer documentation for the exact model.",
      },
      {
        title: "Vickers DG4V-3 directional valve code groups",
        table: {
          headers: ["Code position", "Example", "What it controls"],
          rows: [
            [
              "DG4V-3",
              "DG4V-3",
              "Solenoid-operated directional valve, size 3 (CETOP 3 / NG6)",
            ],
            [
              "Spool type",
              "2C, 6C, 0C, etc.",
              "Spool function and center condition — open, closed, tandem or float",
            ],
            [
              "Spool/spring arrangement",
              "M, etc.",
              "Spring-offset or detent configuration",
            ],
            [
              "Voltage",
              "U, L, etc.",
              "Coil voltage code — the actual voltage must be checked against the coil label",
            ],
            [
              "Coil/connector",
              "N, K, etc.",
              "Connector and coil type combination",
            ],
            [
              "Design number",
              "10, 11, 20, etc.",
              "Design revision — may affect internal parts, dimensions or interchangeability",
            ],
            [
              "Special features",
              "S, etc.",
              "Special seals, manual override or environmental options",
            ],
          ],
        },
      },
      {
        title: "Before requesting a replacement",
        items: [
          "Photograph the complete nameplate — not just the top line",
          "Record the order number or material number if it appears separately",
          "Photograph the connector face and mounting surface",
          "Note the hydraulic fluid type, working pressure and flow",
          "Identify the machine and application",
          "Explain the known failure or replacement reason",
          "If a character is unreadable, mark it as unknown — do not guess",
        ],
      },
      {
        title: "Worked RFQ example",
        intro:
          "A structured RFQ separates confirmed facts from open questions.",
        items: [
          "Confirmed from nameplate: 4WE 6 D6X/EG24N9K4, material R900561274, D spool, 24 VDC, DIN connector K4",
          "Confirmed from machine: working pressure 210 bar, flow 40 L/min, mineral oil ISO VG 46 at 50 °C",
          "To verify from supplier: proposed manufacturer, spool drawing, mounting dimensions, pressure-drop curve, seal specification",
          "Release condition: hydraulic, electrical and mechanical comparison accepted; differences recorded and approved",
        ],
      },
    ],
    relatedPosts: [
      "china-vs-oem-hydraulic-parts-comparison",
      "hydraulic-component-quality-inspection-checklist",
    ],
  },
  {
    slug: "china-vs-oem-hydraulic-parts-comparison",
    title:
      "Chinese Aftermarket Hydraulic Parts vs OEM: A Data-Driven Comparison",
    seoTitle:
      "Aftermarket vs OEM Hydraulic Parts",
    description:
      "Compare Chinese aftermarket, OEM and remanufactured hydraulic component sourcing routes. Covers cost, lead time, quality evidence, warranty and when each route makes sense.",
    published: "2026-07-25",
    modified: "2026-08-01",
    author: "Hydraulic Match Editorial Review",
    category: "comparison",
    tags: [
      "OEM vs aftermarket",
      "Chinese hydraulic parts",
      "sourcing comparison",
      "cost comparison",
    ],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    readingTime: "8 min",
    intro:
      "Buyers evaluating Chinese aftermarket hydraulic components face a recurring question: 'Is the saving worth the risk?' The answer depends on the product, the application, the supplier evidence and the buyer's ability to validate. This guide separates the sourcing routes, comparison criteria and decision factors so the choice is made on data, not assumption.",
    sections: [
      {
        title: "Three sourcing routes — labelled honestly",
        table: {
          headers: [
            "Route",
            "What it means",
            "When it is appropriate",
            "When it is not",
          ],
          rows: [
            [
              "Original / OEM",
              "The component is sourced through the manufacturer's authorised channel, with manufacturer-controlled traceability",
              "Safety-critical, warranty-sensitive or tightly controlled equipment; low tolerance for unverified changes",
              "Obsolete models; when lead time or price makes the machine unviable",
            ],
            [
              "Aftermarket (documented)",
              "An independently manufactured replacement with stated manufacturer identity, technical data and comparison evidence",
              "Applications where the complete code, supplier data, differences and acceptance plan are documented",
              "When supplier identity, comparison data or evidence is missing or refused",
            ],
            [
              "Remanufactured / service route",
              "A used unit rebuilt to a defined scope with documented replacement parts, inspection and test records",
              "Obsolete or expensive assemblies; when the remanufacturing process, parts and test records are transparent",
              "When remanufacturing scope, replacement-part quality or test method cannot be confirmed",
            ],
          ],
        },
        note: '"Aftermarket" without manufacturer identity, model basis or comparison data is not a documented alternative — it is an unidentified part.',
      },
      {
        title: "Comparison dimensions — what changes between routes",
        table: {
          headers: ["Factor", "OEM route", "Documented aftermarket route"],
          rows: [
            [
              "Identity",
              "Manufacturer-controlled serialisation and channel traceability",
              "Supplier identity, model basis and supply records must be stated in the quotation",
            ],
            [
              "Price",
              "Typically higher; premium for manufacturer channel assurance",
              "Variable; saving requires data, not assumption — compare on the exact model, not the series",
            ],
            [
              "Lead time",
              "Subject to manufacturer production schedule and distribution",
              "May be shorter; depends on supplier readiness, location and shipping route",
            ],
            [
              "Compatibility basis",
              "Original code still needs confirmation; configuration errors happen in OEM channels too",
              "Requires line-by-line function, rating, interface and application comparison",
            ],
            [
              "Quality evidence",
              "Manufacturer-controlled process, test and documentation",
              "Varies by supplier; the quotation must state what evidence is available and how it is order-linked",
            ],
            [
              "Warranty",
              "Manufacturer warranty terms apply",
              "Supplier warranty terms, duration, claim evidence and exclusions must be in the accepted quotation",
            ],
            [
              "Validation burden",
              "Usually lower — the product is traceable to the original specification",
              "Higher — the buyer must review the comparison, accept documented differences and own the commissioning result",
            ],
          ],
        },
      },
      {
        title: "Decision framework — when does aftermarket make sense?",
        items: [
          "The complete original model code is available and the failure mode is understood",
          "The supplier has provided their legal identity, product scope and a model-specific comparison",
          "Key parameters — function, pressure, flow, mounting, interfaces, seals — have been compared",
          "Known differences are stated and the buyer has the technical capability to accept or reject them",
          "The application is not safety-critical or the acceptance path has been approved by qualified personnel",
          "The cost, lead-time or availability advantage is real, not assumed from a series-level comparison",
          "A sample, first-article or controlled commissioning plan exists for the initial order",
        ],
        note: "If the supplier cannot state which manufacturer will make the part, on what model basis and with what comparison data, treat the quotation as an identification lead — not a ready-to-order option.",
      },
      {
        title: "Documentation that separates a serious aftermarket quotation",
        items: [
          "The original customer reference is preserved on the quotation",
          "The proposed manufacturer, model and supply route are identified",
          "A comparison record states what is confirmed, what differs and what remains open",
          "The quotation states the condition (new, remanufactured, service part), MOQ, lead-time basis and Incoterm",
          "Available inspection evidence and the required customer approval points are listed",
          "Warranty scope, duration, claim evidence requirements and exclusions are explicit",
        ],
      },
    ],
    relatedPosts: [
      "how-to-source-hydraulic-pumps-from-china",
      "hydraulic-component-quality-inspection-checklist",
    ],
  },
  {
    slug: "hydraulic-component-quality-inspection-checklist",
    title:
      "Pre-Shipment Inspection Checklist for Hydraulic Components from China",
    seoTitle:
      "Hydraulic Pre-Shipment Inspection Checklist",
    description:
      "A practical pre-shipment inspection checklist for hydraulic valves, pumps, cylinders and motors sourced from China. Covers identity, dimensions, function, packing and documentation.",
    published: "2026-07-20",
    modified: "2026-08-01",
    author: "Hydraulic Match Editorial Review",
    category: "quality",
    tags: [
      "pre-shipment inspection",
      "quality control",
      "hydraulic components",
      "China sourcing",
      "inspection checklist",
    ],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    readingTime: "9 min",
    intro:
      "A useful pre-shipment inspection is not a '100% tested' badge. It is a defined set of checks with recorded results, tied to the approved quotation and the actual units being shipped. This guide provides a practical framework for defining what to inspect, how to record it and what to do when something does not match.",
    sections: [
      {
        title: "1. Freeze the inspection reference",
        intro:
          "Without a frozen reference, an inspector can verify quantity and visible condition but cannot decide technical conformity.",
        items: [
          "Customer's original reference: brand, complete model code, nameplate photo",
          "Approved proposed model: manufacturer, model, drawing revision, datasheet",
          "Agreed comparison record: what is confirmed, what differs and what is still open",
          "The order quantity, the sampling plan and the list of critical characteristics",
          "Acceptance criteria: dimensions, tolerances, surface finish, function limits and document requirements",
          "The person authorised to approve or reject the inspection result",
        ],
      },
      {
        title: "2. Identity and quantity — the non-negotiable first check",
        items: [
          "Model code or part number on the unit matches the approved quotation",
          "Nameplate, label, marking or serial number is present, legible and correct",
          "Quantity matches the order — count every item, not only the outer carton label",
          "Photograph the nameplate, overall item and quantity layout as a record",
        ],
        note: "An item that cannot be identified from its marking is not acceptable, regardless of visual similarity.",
      },
      {
        title: "3. Visual condition — surface, finish and obvious defects",
        items: [
          "Casting or body surface: free of cracks, porosity, heavy rust or damage",
          "Machined surfaces: no scoring, galling, corrosion or handling damage",
          "Ports, connectors and threaded areas: clean, undamaged, with protective caps or plugs",
          "Shaft, rod or exposed moving surfaces: free of nicks, corrosion or impact marks",
          "Seals and O-rings visible from the exterior: no cuts, deformation or visible deterioration",
          "Paint, plating or surface treatment: consistent, no peeling or masking defects",
        ],
      },
      {
        title: "4. Dimensions and interfaces — measure what matters for installation",
        table: {
          headers: ["Component type", "Critical dimensions to check", "Tool"],
          rows: [
            [
              "Pump",
              "Shaft diameter and length, pilot diameter, bolt pattern, port thread and size, flange type",
              "Calliper, micrometer, thread gauge, bolt-pattern drawing",
            ],
            [
              "Valve",
              "Mounting pattern (ISO/CETOP), port size and position, connector type, overall envelope",
              "Calliper, thread gauge, mounting-pattern template or drawing",
            ],
            [
              "Cylinder",
              "Bore, rod diameter, stroke, retracted/extended pin centres, mounting dimensions, port thread",
              "Calliper, micrometer, tape measure, thread gauge",
            ],
            [
              "Motor",
              "Shaft diameter and keyway/spline, pilot diameter, bolt pattern, port thread and orientation",
              "Calliper, micrometer, thread gauge, bolt-pattern drawing",
            ],
            [
              "Repair kit",
              "Seal dimensions, material marking, kit contents against the parts list",
              "Calliper, material verification when specified",
            ],
          ],
        },
      },
      {
        title: "5. Functional evidence — only what was agreed",
        intro:
          "Functional testing depends on the product, supplier equipment and order agreement. It is never assumed.",
        items: [
          "If a pressure or leakage test was agreed: confirm the test method, equipment, conditions and recorded result",
          "If a rotation check was agreed for pumps/motors: verify the marking and test record",
          "If an electrical check was agreed for solenoid valves: confirm voltage, coil resistance and connector pinout",
          "If a function or response test was agreed: confirm the cycle, the reading and the pass/fail limit",
          "If no functional test was agreed, the inspection record must say so — do not imply that function was verified",
        ],
        note: "A generic test certificate that does not identify the unit, the method, the conditions and the result is not order-specific evidence. It should not be accepted as proof of function.",
      },
      {
        title: "6. Packing and shipment release",
        items: [
          "Protective caps or plugs on all ports, connectors, shaft ends and exposed threads",
          "Individual item protection: wrap, bag, sleeve or tray as agreed",
          "Outer packaging: carton, crate or pallet condition is adequate for the transport route",
          "Labels: model, quantity, destination and handling marks are correct and legible",
          "Packing list: matches the actual shipped items by model, quantity and package count",
          "Photograph the packed items and labelled packages before closure",
        ],
      },
      {
        title: "7. Inspection result — pass, hold or reject",
        table: {
          headers: ["Result", "Definition", "Action"],
          rows: [
            [
              "Pass",
              "All agreed checks meet the acceptance criteria",
              "Authorise shipment; archive the inspection record",
            ],
            [
              "Hold",
              "One or more checks are incomplete, unclear or borderline; no critical defect",
              "Supplier provides missing evidence or clarifies the finding; re-inspect if needed before release",
            ],
            [
              "Conditional approval",
              "A non-critical deviation is documented and the buyer accepts it in writing",
              "Record the deviation and buyer approval; attach to the shipment record",
            ],
            [
              "Reject",
              "A critical characteristic fails or the unit cannot be identified",
              "Supplier must correct or replace the affected units; re-inspection is required before resubmission",
            ],
          ],
        },
      },
    ],
    relatedPosts: [
      "how-to-source-hydraulic-pumps-from-china",
      "china-vs-oem-hydraulic-parts-comparison",
    ],
  },
  {
    slug: "fixed-vs-variable-displacement-pump",
    title: "Fixed vs Variable Displacement Hydraulic Pumps",
    seoTitle: "Fixed vs Variable Displacement Pumps",
    description:
      "Compare fixed and variable displacement hydraulic pumps by flow control, energy use, complexity and application before selecting a replacement.",
    published: "2026-08-05",
    modified: "2026-08-05",
    author: "Hydraulic Match Editorial Review",
    category: "comparison",
    tags: ["variable displacement pump", "pump selection", "hydraulic pump"],
    image: "/images/hydraulic/hydraulic-pumps.webp",
    readingTime: "7 min",
    intro:
      "The first pump decision is usually fixed or variable displacement. The two families change how the circuit produces and controls flow, so the choice belongs to the application, not to habit.",
    sections: [
      {
        title: "What the names mean",
        items: [
          "A fixed displacement pump delivers a nominal flow per revolution set by its size",
          "A variable displacement pump changes output flow through a swashplate, yoke or similar control",
          "Gear pumps are normally fixed; axial piston and vane families exist in both versions",
        ],
      },
      {
        title: "Where each fits",
        table: {
          headers: ["Consideration", "Fixed displacement", "Variable displacement"],
          rows: [
            ["Circuit need", "Steady flow, simple control", "Flow changes with demand"],
            ["Energy use", "Relief valve bypass wastes energy", "Pump output follows demand"],
            ["Complexity", "Simpler, lower cost", "Control, drain and compensation complexity"],
            ["Typical use", "Presses, simple cylinders, low-cost drives", "Load sensing, mobile, multi-function machines"],
          ],
        },
      },
      {
        title: "Control options that matter",
        items: [
          "Pressure compensation limits maximum pressure while allowing flow reduction",
          "Load sensing matches flow to the highest working pressure and demand",
          "Electrical proportional control supports programmable machine behaviour",
          "The complete model code defines which control and its adjustment range apply",
        ],
      },
      {
        title: "Before quoting a replacement",
        items: [
          "Confirm the existing control type, displacement range and maximum pressure",
          "Record rotation, shaft, flange, ports and through-drive",
          "Note the machine duty cycle and whether the control is load-sensing",
          "Send the nameplate and control photographs with the inquiry",
        ],
      },
    ],
  },
  {
    slug: "gear-vs-piston-vs-vane-pump",
    title: "Gear vs Piston vs Vane Hydraulic Pump",
    seoTitle: "Gear vs Piston vs Vane Pumps",
    description:
      "Compare gear, piston and vane hydraulic pumps by pressure, efficiency, noise and cost to shortlist the right family for replacement.",
    published: "2026-08-08",
    modified: "2026-08-08",
    author: "Hydraulic Match Editorial Review",
    category: "comparison",
    tags: ["gear pump", "piston pump", "vane pump", "pump comparison"],
    image: "/images/hydraulic/hydraulic-pumps.webp",
    readingTime: "7 min",
    intro:
      "Gear, vane and piston pumps each win in a different operating range. Comparing pressure, efficiency, noise and service cost narrows the choice before model-code review.",
    sections: [
      {
        title: "Family comparison",
        table: {
          headers: ["Characteristic", "Gear", "Vane", "Piston"],
          rows: [
            ["Typical pressure", "Low to medium", "Medium", "High"],
            ["Efficiency", "Good at low cost", "Good, low noise", "Highest, more complex"],
            ["Variable displacement", "Rare", "Available", "Common"],
            ["Service cost", "Lowest", "Moderate", "Highest"],
          ],
        },
      },
      {
        title: "Reading the trade-offs",
        items: [
          "Gear pumps suit simple, cost-sensitive circuits where pressure stays moderate",
          "Vane pumps offer quiet operation and smooth flow for medium-pressure industrial duty",
          "Piston pumps handle high pressure, variable flow and mobile duty cycles",
          "A 'similar looking' pump from another family is not an automatic replacement",
        ],
      },
      {
        title: "What to confirm for a replacement",
        items: [
          "Original family, series and complete model code",
          "Displacement, pressure rating, rotation and shaft",
          "Mounting, ports, through-drive and control",
          "Noise, efficiency and duty expectations for the machine",
        ],
      },
    ],
  },
  {
    slug: "measure-hydraulic-cylinder-replacement",
    title: "How to Measure a Hydraulic Cylinder for Replacement",
    seoTitle: "Measure a Hydraulic Cylinder for Replacement",
    description:
      "Measure bore, rod, stroke, closed length, mounting and ports correctly so a replacement hydraulic cylinder fits the machine the first time.",
    published: "2026-08-12",
    modified: "2026-08-12",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: ["hydraulic cylinder", "cylinder measurement", "cylinder replacement"],
    image: "/images/hydraulic/hydraulic-cylinders.webp",
    readingTime: "8 min",
    intro:
      "A replacement cylinder must match dimensions, mounting and ports, not just look the same. Measure in a consistent order and keep photographs with the RFQ.",
    sections: [
      {
        title: "Dimensions to record",
        items: [
          "Bore diameter—measured inside the tube, not guessed from the rod",
          "Rod diameter and exposed rod length",
          "Stroke between fully retracted and fully extended positions",
          "Closed centre distance and pin or mounting centres",
          "Port size, thread, position and orientation",
        ],
      },
      {
        title: "Mounting types change everything",
        table: {
          headers: ["Mounting", "Measure", "Common error"],
          rows: [
            ["Clevis", "Pin bore, clevis width and pin centres", "Mixing pin centres with overall length"],
            ["Flange", "Bolt pattern, pilot and face offset", "Assuming all flanges are the same"],
            ["Trunnion", "Trunnion centres and pin diameter", "Measuring only the body length"],
            ["Foot", "Foot bolt spacing and height", "Missing the rod-end offset"],
          ],
        },
      },
      {
        title: "Nameplate and photos",
        items: [
          "Full nameplate with series and model code",
          "Retracted and extended side views",
          "Mounting ends, ports and rod-end thread detail",
          "The machine installation and any adjoining bracket",
        ],
      },
    ],
  },
  {
    slug: "hydraulic-cylinder-drift-causes",
    title: "Hydraulic Cylinder Drift: Common Causes",
    seoTitle: "Hydraulic Cylinder Drift Causes",
    description:
      "Diagnose a drifting hydraulic cylinder by checking internal leakage, valve leakage, load change and system pressure before replacing parts.",
    published: "2026-08-15",
    modified: "2026-08-15",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: ["cylinder drift", "internal leakage", "hydraulic troubleshooting"],
    image: "/images/hydraulic/hydraulic-cylinders.webp",
    readingTime: "7 min",
    intro:
      "A cylinder that creeps under load usually has leakage somewhere in the circuit. Finding where—not replacing the cylinder first—is the faster repair.",
    sections: [
      {
        title: "Where drift comes from",
        items: [
          "Internal leakage past the piston seals",
          "Leakage past the directional or check valve spool/seat",
          "Changing external load acting on the cylinder",
          "A load-holding valve that no longer seats fully",
          "Air or compliance in the line allowing slow movement",
        ],
      },
      {
        title: "Diagnosis order",
        items: [
          "Isolate the cylinder from the valve with a blocking valve to separate causes",
          "Check the rod end for oil weep that indicates internal seal leakage",
          "Measure pressure decay on each port with gauges",
          "Test the valve spool/seat leakage against the manufacturer method",
          "Repeat the test at operating temperature",
        ],
      },
      {
        title: "Repair decisions",
        items: [
          "Record the cylinder series and complete model code before ordering seals",
          "Confirm seal material, hardness and kit scope with the application",
          "Replacement is justified only after the leak path is confirmed",
          "Keep the test record so the repair can be verified",
        ],
      },
    ],
  },
  {
    slug: "hydraulic-pump-noise-diagnosis",
    title: "Hydraulic Pump Noise Diagnosis",
    seoTitle: "Hydraulic Pump Noise Diagnosis",
    description:
      "Trace the cause of a noisy hydraulic pump from cavitation and air ingestion to mounting, viscosity and wear before scheduling repair.",
    published: "2026-08-19",
    modified: "2026-08-19",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: ["pump noise", "cavitation", "pump troubleshooting"],
    image: "/images/hydraulic/hydraulic-pumps.webp",
    readingTime: "7 min",
    intro:
      "Pump noise is a symptom with several causes. Cavitation, air ingestion, mounting stiffness, viscosity and wear each need a different fix.",
    sections: [
      {
        title: "First checks",
        items: [
          "Inlet filter and suction line condition—restriction causes cavitation",
          "Air leaks at the suction side, shaft seal or reservoir return",
          "Oil level and return-line aeration",
          "Fluid viscosity at operating temperature",
        ],
      },
      {
        title: "Cavitation vs aeration",
        table: {
          headers: ["Symptom", "Likely cause", "Check"],
          rows: [
            ["High-pitched rattle under load", "Cavitation from restricted inlet", "Suction filter, line size, oil level"],
            ["Crackling or knocking with foam", "Air ingestion", "Suction fittings, shaft seal, return line"],
            ["Whine that changes with temperature", "Viscosity too high or too low", "Fluid grade and temperature"],
            ["Metal knock or constant rough tone", "Wear or bearing damage", "Flow test, disassembly, inspection"],
          ],
        },
      },
      {
        title: "Before condemning the pump",
        items: [
          "Confirm inlet pressure and temperature with gauges",
          "Inspect the coupling and mounting for looseness",
          "Run the pump isolated from the circuit where the procedure permits",
          "If replacement is needed, order from the complete model code and nameplate",
        ],
      },
    ],
  },
  {
    slug: "hydraulic-system-overheating",
    title: "Hydraulic System Overheating: Causes and Checks",
    seoTitle: "Hydraulic System Overheating",
    description:
      "Find why a hydraulic system runs hot by checking relief bypass, internal leakage, cooling capacity and fluid condition in order.",
    published: "2026-08-22",
    modified: "2026-08-22",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: ["hydraulic overheating", "oil temperature", "hydraulic troubleshooting"],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    readingTime: "7 min",
    intro:
      "Heat in a hydraulic system comes from work being converted to heat somewhere unintended. Track the energy path before changing the cooler.",
    sections: [
      {
        title: "Where the heat is generated",
        items: [
          "Continuous relief-valve bypassing while the machine idles",
          "Internal leakage in pumps, valves and cylinders",
          "Flow throttled across controls at high pressure",
          "Insufficient cooling or airflow, blocked coolers and fans",
          "Wrong fluid viscosity raising friction losses",
        ],
      },
      {
        title: "Measurement and diagnosis",
        items: [
          "Record oil temperature at the reservoir, cooler inlet and outlet",
          "Check the relief valve setting and whether bypass is continuous",
          "Compare pump flow against specification to find internal wear",
          "Verify cooler airflow, fan direction and fin condition",
          "Test with a calibrated thermometer, not the dash gauge alone",
        ],
      },
      {
        title: "Fixes and records",
        items: [
          "Correct the cause before adding cooling capacity",
          "Confirm fluid grade and operating viscosity for the duty",
          "Record temperatures, pressures and the change made",
          "Re-test at full operating duty before closing the issue",
        ],
      },
    ],
  },
  {
    slug: "hydraulic-oil-contamination-filtration",
    title: "Hydraulic Oil Contamination and Filtration Basics",
    seoTitle: "Hydraulic Oil Contamination & Filtration",
    description:
      "Understand particle, water and chemical contamination in hydraulic oil, sampling, ISO cleanliness codes and filter placement.",
    published: "2026-09-02",
    modified: "2026-09-02",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: ["oil contamination", "filtration", "ISO 4406"],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    readingTime: "7 min",
    intro:
      "Most hydraulic component failures are contamination-related. A practical sampling and filtration program protects pumps, valves and cylinders better than any spare-part stock.",
    sections: [
      {
        title: "Contaminant types",
        items: [
          "Particles—ingress through seals, breathers and new fluid",
          "Water—from condensation, cooling leaks or washdown",
          "Chemical change—oxidation, varnish and additive depletion",
          "Air—foam and poor response when the reservoir cannot degas",
        ],
      },
      {
        title: "Reading a cleanliness code",
        items: [
          "ISO 4406 reports particle counts in three size ranges",
          "The target code depends on component sensitivity and pressure",
          "Compare lab results against the machine or component target",
          "Sample from a live system at a clean, representative point",
        ],
      },
      {
        title: "Filter placement",
        table: {
          headers: ["Filter type", "Purpose", "Check"],
          rows: [
            ["Suction strainer", "Protect the pump from large debris", "Cleanliness and restriction"],
            ["Return-line filter", "Remove wear and ingress particles", "Bypass indicator and element condition"],
            ["Pressure filter", "Protect sensitive valves", "Rating, delta P and element life"],
            ["Offline kidney loop", "Improve cleanliness during idle time", "Flow, rating and service interval"],
          ],
        },
      },
      {
        title: "Sampling discipline",
        items: [
          "Sample at operating temperature from a live return or drain line",
          "Use clean bottles and avoid topping up before sampling",
          "Record hours, fluid brand, grade and any recent work",
          "Trend results over time instead of judging one sample",
        ],
      },
    ],
  },
  {
    slug: "choose-hydraulic-seal-kit",
    title: "How to Choose a Hydraulic Seal Kit",
    seoTitle: "Choose a Hydraulic Seal Kit",
    description:
      "Select the right hydraulic seal kit by material, hardness, application, pressure and fluid compatibility before ordering.",
    published: "2026-09-06",
    modified: "2026-09-06",
    author: "Hydraulic Match Editorial Review",
    category: "technical",
    tags: ["seal kit", "hydraulic seals", "repair kit"],
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    readingTime: "7 min",
    intro:
      "A seal kit must match the component's exact revision, material and application. Choosing by 'looks the same' risks early failure or wrong hardness.",
    sections: [
      {
        title: "What a kit must match",
        items: [
          "The complete parent-unit model code and design revision",
          "Seal material compatible with the fluid and temperature",
          "Hardness and profiles for the working pressure and speed",
          "Rod, piston, static and wiper seals as a matched set",
        ],
      },
      {
        title: "Material basics",
        table: {
          headers: ["Material", "Strength", "Watch for"],
          rows: [
            ["NBR", "General mineral-oil duty, low cost", "High temperature and exotic fluids"],
            ["FKM", "Higher temperature and chemical resistance", "Cost and some fluid incompatibilities"],
            ["PU", "Excellent wear for rod seals", "Water and hydrolysis in some grades"],
            ["PTFE-based", "Low friction, wide compatibility", "Backup ring and profile design"],
          ],
        },
      },
      {
        title: "Before ordering",
        items: [
          "Photograph the nameplate and the seal grooves",
          "Measure bore, rod, groove and gland dimensions",
          "Confirm the fluid, temperature range and working pressure",
          "State whether the kit is for a cylinder, pump, motor or valve",
          "Keep the original kit bag or part number when available",
        ],
      },
    ],
  },
];

/** Blog categories for navigation and filtering. */
export const blogCategories = [
  {
    slug: "sourcing",
    label: "Sourcing Guides",
    description: "Step-by-step guides for sourcing hydraulic components from China",
  },
  {
    slug: "technical",
    label: "Technical Guides",
    description: "Deep dives on model codes, identification and technical comparison",
  },
  {
    slug: "comparison",
    label: "Comparisons",
    description: "OEM vs aftermarket, route comparisons and decision frameworks",
  },
  {
    slug: "quality",
    label: "Quality & Inspection",
    description: "Pre-shipment inspection, quality control and evidence requirements",
  },
  {
    slug: "industry",
    label: "Industry Applications",
    description: "Application-specific sourcing and replacement guidance",
  },
];

/** Sort posts by published date descending (newest first). */
export const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
);

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedPosts?.length) return [];
  return post.relatedPosts
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];
}
