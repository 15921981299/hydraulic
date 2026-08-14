export type ContentSection = {
  title: string;
  intro?: string;
  items?: string[];
  note?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type HydraulicContentPage = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  kicker: string;
  intro: string;
  sections: ContentSection[];
  ctaTitle?: string;
  ctaText?: string;
  published?: string;
  modified?: string;
  readingTime?: string;
  reviewedBy?: string;
  excludeFromIndex?: boolean;
  relatedLinks?: { href: string; title: string; text: string }[];
};

export const hydraulicPages: HydraulicContentPage[] = [
  {
    slug: "matching-process",
    title: "How Our Hydraulic Matching Process Works",
    seoTitle: "Hydraulic Component Matching Process",
    description:
      "See how Hydraulic Match reviews model codes, compares technical parameters, grades replacement risk and prepares a hydraulic component quotation.",
    kicker: "FROM REFERENCE TO REVIEWABLE OPTION",
    intro:
      "Our process is designed to reduce the risk of selecting a hydraulic component from an incomplete code, a similar-looking product or an unverified cross-reference.",
    sections: [
      {
        title: "1. Inquiry completeness check",
        intro:
          "We first confirm whether the information is sufficient for a technical review.",
        items: [
          "Original manufacturer and complete model code",
          "Order number or part number, if available",
          "Quantity and destination country",
          "Nameplate, product photos, drawing or datasheet",
          "Machine, application and replacement reason",
        ],
      },
      {
        title: "2. Technical identification",
        intro:
          "The model code is broken down and checked against the available reference data.",
        items: [
          "Product family, size and function",
          "Pressure, flow or displacement",
          "Voltage, spool, control or compensator",
          "Mounting, ports, rotation, flange and shaft",
          "Fluid, temperature and environmental conditions",
        ],
      },
      {
        title: "3. Supply-route review",
        intro:
          "We contact suitable suppliers and compare the routes that can be supported with actual data.",
        items: [
          "Proposed Chinese model and manufacturing source",
          "Technical evidence available for comparison",
          "MOQ, lead time, inspection and warranty scope",
          "Original or alternative option, when available",
          "Items that cannot be confirmed yet",
        ],
      },
      {
        title: "4. Compatibility risk grade",
        items: [
          "A — supported by complete cross-reference data and prior supply records",
          "B — key parameters align, but a dimension, port or connector still needs confirmation",
          "C — functional alternative requiring installation or system changes",
          "D — insufficient data or unacceptable risk; quotation is not recommended",
        ],
        note: "A grade describes the current evidence, not a blanket guarantee. The customer remains responsible for final application approval and safe installation.",
      },
      {
        title: "5. Formal quotation",
        items: [
          "Original reference and proposed alternative",
          "Compatibility status and known differences",
          "Unit price, MOQ and lead time",
          "Incoterm, packing and warranty",
          "Quote validity and required customer confirmation",
        ],
      },
      {
        title: "6. Sample and batch release",
        intro:
          "For higher-value or higher-risk products, we recommend a sample or first-article review before the batch order. Inspection scope is agreed before purchase.",
      },
    ],
    ctaTitle: "Start with the model code or nameplate.",
    ctaText:
      "We will tell you what can be reviewed now and what information is still missing.",
  },
  {
    slug: "manufacturing-partners",
    title: "How We Review Manufacturing Partners",
    seoTitle: "Hydraulic Manufacturing Partner Review",
    description:
      "See how Hydraulic Match separates supplier leads, reviewed suppliers and order-approved manufacturing sources using identity, capability and order evidence.",
    kicker: "A FACTORY RELATIONSHIP NEEDS EVIDENCE",
    intro:
      "We do not publish an invented factory list. When a source is described as a manufacturing partner, the wording should reflect what has actually been checked: who the business is, what it can make, what evidence it can provide and how the specific order will be released.",
    sections: [
      {
        title: "Why supplier labels matter",
        intro:
          "A marketplace seller, trading company, service workshop and manufacturer can all be useful, but they are not interchangeable. We identify the role that can be supported instead of calling every source a factory.",
      },
      {
        title: "Three existing source sites behind the current research",
        intro:
          "The operator has identified these three sites as source properties for Hydraulic Match. Their public pages provide real catalog, identity and process evidence, but they do not all display the same legal entity. We therefore preserve the source and do not merge every claim into one company biography.",
        table: {
          headers: [
            "Public source",
            "What its own pages establish",
            "How Hydraulic Match may use it",
          ],
          rows: [
            [
              "RexrothReplacements.com",
              "Maintained by Metro Fluid Power in Clinton Township, Michigan; publishes aftermarket A2F, A4V, A6V, A10V and A11V pump records plus valves",
              "Exact aftermarket model and series research; operator, warranty and compatibility claims remain attributed to that source",
            ],
            [
              "RestoPower.com",
              "Describes a Lake Orion, Michigan aftermarket hydraulic-parts operation covering Vickers, Parker, Denison, Rexroth, Sundstrand, Poclain and other brands",
              "Part-number, parent-series and sourceable-part research; stock, warranty and interchange claims remain source-site claims",
            ],
            [
              "HydraulicPumpSupply.com",
              "Identifies Hunan Shanbu Zhuanshui Zhuan Power Technology Co., Ltd. as a China-based fluid-power trading company",
              "China sourcing, product-family and exact product-reference research; manufacturing source still requires order-specific disclosure",
            ],
          ],
        },
        note: "Before launch, the legal or contractual relationship among these properties should be documented. Until then, Hydraulic Match describes them as operator-identified source sites, not as one legal entity or three owned factories.",
      },
      {
        title: "Partner review stages",
        table: {
          headers: ["Stage", "What we check", "Permitted status"],
          rows: [
            [
              "1. Source lead",
              "Listing, referral or catalog reference has been found",
              "Candidate source; no manufacturing claim",
            ],
            [
              "2. Identity review",
              "Legal name, business scope, address, contact and stated role",
              "Identity reviewed; capability not yet approved",
            ],
            [
              "3. Capability review",
              "Relevant product family, technical data, process evidence and inspection access",
              "Reviewed supplier for the named scope",
            ],
            [
              "4. Order approval",
              "Exact model, specification, condition, acceptance criteria and commercial route",
              "Approved source for that order only",
            ],
            [
              "5. Ongoing review",
              "Delivery accuracy, defects, corrective action and repeatability",
              "Manufacturing partner only within the supported scope",
            ],
          ],
        },
      },
      {
        title: "What we ask a prospective factory",
        items: [
          "Which legal entity will manufacture, invoice or export the item",
          "Which operations are performed in-house and which are subcontracted",
          "Whether the team can interpret the complete model code and drawing revision",
          "Which material, dimension, function or test records can be tied to the order",
          "How nonconforming units are contained, investigated and corrected",
          "Whether neutral packing, traceable labels and order-specific photos are available",
        ],
      },
      {
        title: "Evidence is tied to a product scope",
        intro:
          "A supplier that is credible for a machined pump part is not automatically approved for a complete piston pump, proportional valve or welded cylinder. Review is limited to the product family and process evidence actually seen.",
      },
      {
        title: "What we will not claim",
        items: [
          "That a source is an original manufacturer or authorized distributor without current written evidence",
          "That every product image was photographed in a factory we visited",
          "That a supplier can make every item shown on this website",
          "That one sample, certificate or successful order proves every future batch",
          "That a supplier identity may be disclosed publicly without permission",
        ],
        note: "No named public manufacturing-partner roster is currently published. A quotation may identify the contracting and supply entities when disclosure is permitted and relevant to the order.",
      },
    ],
    ctaTitle: "Need the supply route disclosed before purchase?",
    ctaText:
      "State the identity, factory, authorization or process evidence your approval requires in the RFQ.",
    relatedLinks: [
      {
        href: "https://www.rexrothreplacements.com/pages/about-us",
        title: "Rexroth Replacements identity source",
        text: "Public operator and contact disclosure used for the source profile.",
      },
      {
        href: "https://restopower.com/pages/resources",
        title: "RestoPower source profile",
        text: "Public location, customer scope, brand and sourcing statements.",
      },
      {
        href: "https://hydraulicpumpsupply.com/about-us/",
        title: "Hydraulic Pump Supply identity",
        text: "Public legal identity, trading role and product scope.",
      },
      {
        href: "/quality/",
        title: "Quality control",
        text: "Match evidence depth to the product and consequence of failure.",
      },
      {
        href: "/inspection-process/",
        title: "Inspection process",
        text: "See how an agreed order moves from checklist to release status.",
      },
      {
        href: "/shipping/",
        title: "Packaging and shipping",
        text: "Connect released units to protected, identified packages.",
      },
    ],
  },
  {
    slug: "inspection-process",
    title: "Hydraulic Inspection Process",
    seoTitle: "Hydraulic Component Inspection Process",
    description:
      "A practical hydraulic component inspection workflow covering the approved reference, visual and dimensional checks, functional evidence, hold points and shipment release.",
    kicker: "CHECKLIST, EVIDENCE, HOLD OR RELEASE",
    intro:
      "Inspection is not a generic “100% tested” badge. The useful version starts with an approved reference and written acceptance criteria, records what was checked on the actual order and leaves unsupported characteristics open.",
    sections: [
      {
        title: "1. Freeze the inspection input",
        items: [
          "Buyer reference and approved proposed model",
          "Drawing revision, datasheet or agreed comparison record",
          "Quantity, sampling plan and critical characteristics",
          "Required markings, condition, documents and packing",
          "Acceptance limits and the person authorized to approve deviations",
        ],
        note: "Without a frozen reference, an inspector can confirm appearance and quantity but cannot decide technical conformity.",
      },
      {
        title: "2. Select checks that answer the actual risk",
        table: {
          headers: [
            "Check",
            "Typical evidence",
            "What it does not prove alone",
          ],
          rows: [
            [
              "Identity and quantity",
              "Nameplate, part label, serial or batch photos and count",
              "Internal configuration or performance",
            ],
            [
              "Visual condition",
              "Surface, casting, machining, ports, connectors and damage photos",
              "Material grade or hydraulic function",
            ],
            [
              "Dimensions and interfaces",
              "Recorded values for agreed mounting, shaft, flange, port or envelope points",
              "Performance under pressure or load",
            ],
            [
              "Function or pressure test",
              "Test method, unit identity, conditions, readings and result",
              "Characteristics outside the recorded test points",
            ],
            [
              "Packing release",
              "Protection, labels, package count, weight and final photos",
              "Product conformity not checked earlier",
            ],
          ],
        },
      },
      {
        title: "3. Record exceptions before release",
        items: [
          "Pass: the recorded check meets the agreed criterion",
          "Hold: evidence is missing, unclear or outside the limit",
          "Conditional approval: the buyer accepts a documented deviation in writing",
          "Reject or rework: the source must correct or replace the affected unit",
        ],
      },
      {
        title: "4. Build the order evidence pack",
        items: [
          "Order and line-item reference",
          "Actual unit, label or batch identity",
          "Dated photos and measurement or test records when included",
          "Exception, corrective-action and approval record",
          "Final packing list and release status",
        ],
      },
      {
        title: "Inspection boundaries",
        intro:
          "The quotation must say whether checks are performed by the supplier, coordinated by Hydraulic Match, performed by an independent inspector or witnessed by the buyer. Test availability, sample size and cost are confirmed before order placement.",
        note: "Inspection reduces defined risks; it does not create evidence for characteristics that were not checked.",
      },
    ],
    ctaTitle: "Send your acceptance criteria with the RFQ.",
    ctaText:
      "We will separate available evidence from checks that need a supplier, laboratory or independent inspection route.",
    relatedLinks: [
      {
        href: "/manufacturing-partners/",
        title: "Manufacturing partner review",
        text: "See how a source advances from lead to order-approved supplier.",
      },
      {
        href: "/quality/",
        title: "Quality evidence levels",
        text: "Choose the evidence level that supports the purchase decision.",
      },
      {
        href: "/resources/hydraulic-component-pre-shipment-inspection-checklist/",
        title: "Pre-shipment checklist",
        text: "Use the checklist when defining order-specific release evidence.",
      },
    ],
  },
  {
    slug: "quality",
    title: "Quality and Pre-Shipment Verification",
    seoTitle: "Hydraulic Quality & Pre-Shipment Checks",
    description:
      "Hydraulic component supplier review, incoming checks, model verification, dimensions, functional testing and export packing confirmation.",
    kicker: "EVIDENCE BEFORE CLAIMS",
    intro:
      "Quality information is confirmed by product, supplier and order. We do not use unrelated factory photographs, invented certificates or blanket “100% tested” claims.",
    sections: [
      {
        title: "Supplier qualification",
        items: [
          "Supplier identity and business scope review",
          "Product-family experience and data availability",
          "Communication and corrective-action responsiveness",
          "Historical model-code and delivery accuracy where available",
        ],
      },
      {
        title: "Process evidence already published by the source sites",
        intro:
          "The three source properties provide different depths of evidence. These statements can inform an RFQ, but the named source and product scope must remain visible.",
        table: {
          headers: ["Source", "Publicly described evidence", "Use boundary"],
          rows: [
            [
              "Rexroth Replacements",
              "Warranty page states units are tested to stated pressure and flow or torque specifications before shipment",
              "Treat as a source-site statement until the exact unit test record and conditions are supplied",
            ],
            [
              "RestoPower",
              "Product and resource pages identify aftermarket and OEM-equivalent part scope, Michigan dispatch and warranty terms",
              "Useful for source and part identification; does not by itself provide order-specific inspection data",
            ],
            [
              "Hydraulic Pump Supply",
              "Product pages publish quality-control and testing descriptions for selected product families",
              "Confirm the actual manufacturer, test method and order-linked record before repeating the claim",
            ],
          ],
        },
        note: "Hydraulic Match may cite a source-site process. It should only say “inspected” or “tested” for an order when the applicable record identifies the actual item and acceptance criteria.",
      },
      {
        title: "Incoming and pre-shipment checks",
        items: [
          "Model, part number and quantity verification",
          "Visible finish, casting, machining and nameplate checks",
          "Critical dimensions and mounting details by order requirement",
          "Connector, coil, shaft, flange or port confirmation",
          "Pre-shipment photos before dispatch when requested",
        ],
      },
      {
        title: "Functional tests, when applicable",
        intro:
          "Test scope depends on the product, supplier equipment and order agreement.",
        items: [
          "Pressure and leakage checks for applicable valves or cylinders",
          "Basic function or response checks where equipment is available",
          "Pump test data only when agreed and genuinely available",
          "Records linked to the order rather than generic sample reports",
        ],
        note: "Ask for the exact inspection or test evidence you need in the RFQ. We confirm availability before order placement.",
      },
      {
        title: "Evidence level must match the decision",
        intro:
          "A photograph, measurement and functional test answer different questions. The order should define which level is needed for the cost and consequence of failure.",
        table: {
          headers: [
            "Evidence level",
            "Can support",
            "Cannot support by itself",
          ],
          rows: [
            [
              "Label and visual record",
              "Model marking, quantity, visible condition and packing identity",
              "Internal configuration, material or performance",
            ],
            [
              "Dimensional record",
              "Agreed mounting, shaft, port or envelope dimensions",
              "Hydraulic function under load",
            ],
            [
              "Supplier functional record",
              "The stated test points and conditions on the offered unit",
              "Performance outside the documented test scope",
            ],
            [
              "Independent or customer test",
              "Results under the named method, sample and acceptance limits",
              "Every future batch without a continuing control plan",
            ],
          ],
        },
        note: "A generic certificate or unrelated sample report is not treated as order-specific release evidence.",
      },
      {
        title: "Export packing and traceability",
        items: [
          "Model and quantity matched to the packing list",
          "Protection selected for weight, surface and transit route",
          "Commercial invoice and packing list support",
          "Quotation and order records kept against the confirmed reference",
        ],
      },
    ],
    ctaTitle: "Need a specific inspection record?",
    ctaText:
      "List the dimensions, markings, photos or test documents required with your inquiry.",
    relatedLinks: [
      {
        href: "/manufacturing-partners/",
        title: "Manufacturing partner review",
        text: "Review supplier identity, capability and order-approval stages.",
      },
      {
        href: "/inspection-process/",
        title: "Inspection process",
        text: "Turn agreed requirements into pass, hold or release evidence.",
      },
      {
        href: "/shipping/",
        title: "Packaging and shipping",
        text: "Connect released units to the final packages and transport record.",
      },
    ],
  },
  {
    slug: "distributor-support",
    title: "Hydraulic Parts Support for Distributors",
    seoTitle: "Hydraulic Distributor Sourcing Support",
    description:
      "Mixed RFQs, small-batch orders, neutral export packing, line-by-line model review and repeat sourcing support for hydraulic distributors and repair companies.",
    kicker: "BUILT FOR REPEAT B2B INQUIRIES",
    intro:
      "Hydraulic Match supports distributors, repair shops and service companies that need a practical China sourcing channel without overstating interchangeability.",
    sections: [
      {
        title: "Mixed and line-by-line RFQs",
        items: [
          "Upload Excel lists with brand, model, quantity and destination",
          "Combine valves, pumps, parts and cylinder requests",
          "Separate confirmed items from lines requiring more information",
          "Keep reference notes visible in the quotation",
        ],
      },
      {
        title: "Small-batch and sample support",
        items: [
          "Sample and low-volume requests are welcome",
          "Actual supplier MOQ is stated by line item",
          "Higher-risk replacements can start with a sample",
          "Repeat orders retain the confirmed reference and difference notes",
        ],
      },
      {
        title: "Commercial and packing support",
        items: [
          "Neutral export packing can be discussed",
          "Packing, Incoterm and shipment route stated in the quotation",
          "Pre-shipment model and quantity photos on request",
          "Commercial invoice and packing list coordination",
        ],
      },
      {
        title: "Line-item response states",
        intro:
          "Mixed RFQs are returned with visible status by line so an unresolved item does not delay or contaminate confirmed items.",
        table: {
          headers: ["Status", "Meaning", "Next action"],
          rows: [
            [
              "Ready to quote",
              "The identifier and basic commercial scope are sufficient",
              "Review price, lead time, condition and inspection terms",
            ],
            [
              "Technical clarification",
              "A suffix, interface or operating requirement is missing",
              "Provide the requested photo, drawing or application detail",
            ],
            [
              "Conditional route",
              "A candidate exists but a difference or supplier point remains open",
              "Approve further verification or a sample before batch release",
            ],
            [
              "No responsible route",
              "Evidence or supplier coverage cannot support an offer",
              "Keep the line open without substituting an unsupported item",
            ],
          ],
        },
      },
      {
        title: "Distributor record boundary",
        intro:
          "Neutral packing, repeat supply and customer-facing documents are order-specific services, not standing promises. Brand names remain identification references, and the distributor remains responsible for the final representation made to its customer.",
        items: [
          "Authorization or original-product status is never inferred from a familiar brand code",
          "Repeat orders are rechecked when supplier, revision, material or operating duty changes",
          "Customer logos, private labels and document formats require written approval before use",
          "Warranty handling follows the exact offered route and written quotation",
        ],
      },
      {
        title: "What helps us respond faster",
        items: [
          "Complete model code and original brand",
          "Order number or clear nameplate photo",
          "Quantity and required delivery date",
          "Destination country and buyer type",
          "Any must-match supplier, test or packing requirement",
        ],
      },
    ],
    ctaTitle: "Have an Excel RFQ list?",
    ctaText:
      "Upload it with your destination and required delivery date for line-by-line review.",
  },
  {
    slug: "alternatives/rexroth",
    title: "Chinese Alternatives to Bosch Rexroth Hydraulic Components",
    seoTitle: "Rexroth Hydraulic Alternatives from China",
    description:
      "Independent sourcing review for selected Rexroth-referenced hydraulic valves and pumps, based on complete model codes and application data.",
    kicker: "INDEPENDENT AFTERMARKET SOURCING",
    intro:
      "We review selected hydraulic valves and pumps identified by Bosch Rexroth model references. We are independent and are not affiliated with or endorsed by Bosch Rexroth.",
    sections: [
      {
        title: "Product groups reviewed",
        items: [
          "Solenoid directional and modular valves",
          "Pressure and flow control valves",
          "Selected axial piston pumps",
          "Selected pump replacement parts",
        ],
      },
      {
        title: "Priority series",
        items: [
          "4WE6 and 4WE10 directional valve alternatives",
          "Selected Z2S and Z2FS modular valve families",
          "A10VSO and A11VO open-circuit pump reviews",
          "A4VG closed-circuit pump reviews",
          "A2FO fixed bent-axis pump reviews",
        ],
      },
      {
        title: "What must be confirmed",
        items: [
          "Complete model code and order number",
          "Spool function, voltage and connector for valves",
          "Displacement, control, rotation, flange, shaft and ports for pumps",
          "Machine and operating conditions",
          "Known differences accepted by the customer",
        ],
      },
      {
        title: "Trademark and compatibility notice",
        intro:
          "All manufacturer names, trademarks and model numbers are used for identification and cross-reference purposes only. Compatibility must be confirmed for each application before purchase and installation.",
      },
    ],
    ctaTitle: "Send the complete Rexroth reference.",
    ctaText: "A series name alone is not enough to confirm a replacement.",
  },
  {
    slug: "alternatives/rexroth/4we6",
    title: "Rexroth 4WE6 Directional Valve Alternative",
    seoTitle: "Rexroth 4WE6 Directional Valve Alternative",
    description:
      "Review points for Chinese 4WE6 directional valve alternatives: spool function, pressure, flow, mounting, voltage, connector and model-code differences.",
    kicker: "SERIES REVIEW · MODEL CONFIRMATION REQUIRED",
    intro:
      "4WE6 identifies a directional valve family, not a complete replacement specification. The full model code and application data must be reviewed.",
    sections: [
      {
        title: "Series-level comparison record",
        table: {
          headers: ["Field", "Original reference", "Proposed option"],
          rows: [
            [
              "Spool and center condition",
              "Capture the complete functional code",
              "Must be stated by supplier data",
            ],
            [
              "Solenoid and connector",
              "Record voltage, current type and connector",
              "Must match or be listed as a difference",
            ],
            [
              "Mounting and envelope",
              "Confirm mounting pattern and available space",
              "Drawing or dimensions required",
            ],
            [
              "Pressure and flow",
              "Record working and peak conditions",
              "Rating and performance data required",
            ],
          ],
        },
        note: "This is a review template, not a declaration that an unnamed option is compatible.",
      },
      {
        title: "Series characteristics to review",
        items: [
          "Nominal size and ISO / CETOP mounting pattern",
          "Spool symbol and spring or detent arrangement",
          "Operating pressure and flow requirement",
          "Solenoid voltage, connector and manual override",
          "Seal material and fluid compatibility",
        ],
      },
      {
        title: "Why two 4WE6 valves may not interchange",
        items: [
          "Different spool functions change the hydraulic circuit",
          "Connector direction or coil voltage may differ",
          "Pressure limits and flow performance may differ",
          "Special seals, low-temperature versions or electrical options may be encoded",
          "Order numbers can represent revisions not visible in the short series name",
        ],
      },
      {
        title: "Required customer information",
        items: [
          "Complete model code and order number",
          "Clear nameplate and connector photos",
          "Hydraulic schematic or spool symbol when available",
          "Working pressure, flow and machine application",
          "Quantity and destination country",
        ],
      },
      {
        title: "Compatibility status",
        intro:
          "A proposed option is labelled as supported by data, requiring review or a functional alternative. Known differences are stated instead of hidden.",
      },
    ],
    ctaTitle: "Request a 4WE6 compatibility review.",
    ctaText: "Upload the nameplate and connector photo with the complete code.",
  },
  {
    slug: "alternatives/rexroth/4we10",
    title: "Rexroth 4WE10 Directional Valve Alternative",
    seoTitle: "Rexroth 4WE10 Directional Valve Alternative",
    description:
      "Review Chinese 4WE10 directional valve options by complete spool code, pressure, flow, mounting, voltage, connector, seals and application.",
    kicker: "LARGER DIRECTIONAL VALVE SERIES",
    intro:
      "A 4WE10 series reference must be expanded to the complete code before pressure, flow, spool, voltage and installation can be compared.",
    sections: [
      {
        title: "Series-level comparison record",
        table: {
          headers: [
            "Review group",
            "Original data required",
            "Release condition",
          ],
          rows: [
            [
              "Hydraulic function",
              "Full spool and centering code",
              "Function is confirmed line by line",
            ],
            [
              "Electrical",
              "Voltage, AC/DC, connector and coil details",
              "No unlisted electrical difference",
            ],
            [
              "Mechanical",
              "Mounting pattern, envelope and port interface",
              "Dimensions or supplier drawing reviewed",
            ],
            [
              "Performance",
              "Pressure, flow, fluid and temperature",
              "Candidate rating supports the application",
            ],
          ],
        },
      },
      {
        title: "Comparison points",
        items: [
          "Complete spool and centering code",
          "Pressure and flow range",
          "Mounting interface and port pattern",
          "Voltage, connector and solenoid design",
          "Seal and fluid compatibility",
        ],
      },
      {
        title: "Information to send",
        items: [
          "Full nameplate photo",
          "Order number if present",
          "Machine and hydraulic schematic",
          "Quantity and destination",
          "Known failure or replacement reason",
        ],
      },
      {
        title: "Quotation notes",
        intro:
          "The quotation identifies the original reference, proposed route, known differences, open confirmation items, MOQ, lead time and inspection scope.",
      },
    ],
    ctaTitle: "Send the full 4WE10 model code.",
    ctaText:
      "We will identify the parameters and confirmation points that matter.",
  },
  {
    slug: "alternatives/rexroth/a10vso",
    title: "Rexroth A10VSO Replacement Options",
    seoTitle: "Rexroth A10VSO Replacement Pump Options",
    description:
      "Review selected A10VSO-referenced pump options by displacement, pressure, control, rotation, shaft, flange, ports and application.",
    kicker: "AXIAL PISTON PUMP REVIEW",
    intro:
      "An A10VSO family name does not confirm the displacement, control, rotation, shaft, flange, ports or through-drive arrangement.",
    sections: [
      {
        title: "Pump comparison record",
        table: {
          headers: ["Group", "Original pump", "Proposed option"],
          rows: [
            [
              "Hydraulic",
              "Displacement, pressure and control code",
              "Supplier data must state the same fields",
            ],
            [
              "Drive",
              "Rotation, shaft and mounting flange",
              "Drawing or dimensions required",
            ],
            [
              "Connections",
              "Port size, type and orientation",
              "Differences must be listed",
            ],
            [
              "Options",
              "Through-drive and auxiliary features",
              "Must be confirmed or marked not available",
            ],
          ],
        },
        note: "Family-level pages cannot approve a pump. The completed record belongs to the individual quotation.",
      },
      {
        title: "Model details to compare",
        items: [
          "Displacement and pressure range",
          "Control or compensator code",
          "Direction of rotation",
          "Mounting flange and shaft",
          "Port position and connection",
          "Through-drive and auxiliary options",
        ],
      },
      {
        title: "Application conditions",
        items: [
          "Machine type and duty cycle",
          "Hydraulic fluid and temperature",
          "Working and peak pressure",
          "Expected speed and drive arrangement",
          "Reason for replacement",
        ],
      },
      {
        title: "Recommended verification",
        items: [
          "Provide the complete nameplate",
          "Add photos of shaft, flange and port layout",
          "Confirm a drawing or dimension sheet before shipment",
          "Use a sample or controlled commissioning for higher-risk replacements",
        ],
      },
    ],
    ctaTitle: "Request an A10VSO model review.",
    ctaText: "The complete pump code and installation details are required.",
  },
  {
    slug: "alternatives/rexroth/a4vg",
    title: "Rexroth A4VG Replacement Options",
    seoTitle: "Rexroth A4VG Replacement Pump Options",
    description:
      "Review selected A4VG-referenced closed-circuit pump options by control, charge system, rotation, shaft, flange, ports and machine application.",
    kicker: "CLOSED-CIRCUIT PUMP REVIEW",
    intro:
      "A4VG replacements require careful review of control, charge system, rotation, shaft, flange, ports and application conditions.",
    sections: [
      {
        title: "Closed-circuit pump comparison record",
        table: {
          headers: ["Review group", "Evidence needed", "Risk if omitted"],
          rows: [
            [
              "Main pump",
              "Displacement, pressure and rotation",
              "Incorrect capacity or drive direction",
            ],
            [
              "Control",
              "Complete control and feedback configuration",
              "Machine response or control conflict",
            ],
            [
              "Charge system",
              "Charge pump and relief information",
              "Insufficient charge pressure or overheating",
            ],
            [
              "Installation",
              "Shaft, flange, ports and through-drive drawing",
              "Mechanical or hose-layout conflict",
            ],
          ],
        },
      },
      {
        title: "Critical comparison points",
        items: [
          "Displacement and pressure rating",
          "Control and feedback configuration",
          "Charge pump and relief settings",
          "Rotation, shaft and mounting flange",
          "Port orientation and through-drive",
          "Machine control and commissioning requirements",
        ],
      },
      {
        title: "Risk controls",
        items: [
          "Do not select by series name alone",
          "Request dimensional confirmation",
          "Confirm control-system compatibility",
          "Plan sample or supervised commissioning for higher-risk applications",
        ],
      },
    ],
    ctaTitle: "Send the complete A4VG reference.",
    ctaText: "Include the machine model, nameplate and port-side photos.",
  },
  {
    slug: "alternatives/vickers",
    title: "Eaton / Vickers Hydraulic Alternatives",
    seoTitle: "Vickers Hydraulic Alternatives from China",
    description:
      "Chinese sourcing review for selected Eaton and Vickers-referenced hydraulic valves, vane pumps and related components.",
    kicker: "BRAND REFERENCE CENTER",
    intro:
      "We review selected Eaton and Vickers model references for independent aftermarket sourcing. Complete codes and technical data are required.",
    sections: [
      {
        title: "Selected product scope",
        items: [
          "DG4V and selected directional-valve references",
          "Pressure, flow and modular valves",
          "V10, V20, 20V–45V and selected double vane-pump references",
          "PVB, PVH and PVQ piston-pump references",
          "Selected pump cartridges and parts",
        ],
      },
      {
        title: "Required comparison",
        items: [
          "Complete model and part number",
          "Valve function, voltage and mounting",
          "Pump displacement, rotation, shaft and ports",
          "Application pressure, fluid and duty",
          "Known differences and required approval",
        ],
      },
      {
        title: "Vickers reference routes by product type",
        table: {
          headers: [
            "Reference group",
            "Critical evidence",
            "Reason a short code is insufficient",
          ],
          rows: [
            [
              "DG4V / directional valves",
              "Spool, centering, frame, pilot arrangement, solenoid and connector",
              "The same mounting size can contain a different hydraulic function or electrical option",
            ],
            [
              "V10 / V20 / vane pumps",
              "Displacement, rotation, shaft, cover and port arrangement",
              "A family label does not define the drive and connection configuration",
            ],
            [
              "20V–45V / VQ units",
              "Single or multiple sections, cartridge, cover and port positions",
              "Section order and cartridge configuration affect installation and output",
            ],
            [
              "PVB / PVH / PVQ pumps",
              "Displacement, control, shaft, flange, rotation and ports",
              "Control and mounting suffixes can change system behavior and physical fit",
            ],
          ],
        },
      },
      {
        title: "Supply-route wording",
        items: [
          "Original or traceable route only when manufacturer and condition are documented",
          "Aftermarket candidate when the offered maker and comparison evidence are identified",
          "Functional alternative when installation or engineering changes are required",
          "No responsible quote when the configuration or evidence cannot be established",
        ],
        note: "Legacy Vickers references may appear in different catalog or ownership contexts. The customer’s original marking and part number are preserved instead of silently rewriting the brand identity.",
      },
      {
        title: "Independent service notice",
        intro:
          "Eaton and Vickers names are used only to identify the customer’s original component. Hydraulic Match is not affiliated with or endorsed by the referenced manufacturers.",
      },
    ],
  },
  {
    slug: "alternatives/parker",
    title: "Parker Hydraulic Alternatives",
    seoTitle: "Parker Hydraulic Alternatives",
    description:
      "Independent Chinese sourcing review for selected Parker-referenced hydraulic valves and pumps.",
    kicker: "BRAND REFERENCE CENTER",
    intro:
      "Selected Parker-referenced valves and pumps can be reviewed when a reliable supply route and technical data are available.",
    sections: [
      {
        title: "Selected review scope",
        items: [
          "D1VW, D3W and selected proportional-valve references",
          "PAVC and PVP piston-pump references",
          "T6 and T7 vane-pump references",
          "F11 and F12 bent-axis references",
        ],
      },
      {
        title: "Information required",
        items: [
          "Complete Parker model code and part number",
          "Nameplate and product photos",
          "Pressure, flow or displacement",
          "Mounting, connector, shaft or port details",
          "Application and replacement reason",
        ],
      },
      {
        title: "Parker mismatch review by family",
        table: {
          headers: [
            "Reference family",
            "Primary mismatch risk",
            "Release evidence",
          ],
          rows: [
            [
              "D1VW / D3W valves",
              "Spool function, solenoid, connector or mounting difference",
              "Complete code, symbol/function, electrical data and interface confirmation",
            ],
            [
              "PAVC / PVP piston pumps",
              "Control response, displacement, shaft, flange or port conflict",
              "Code breakdown, operating duty and dimensional drawing",
            ],
            [
              "T6 / T7 vane pumps",
              "Cartridge, rotation, cover or port arrangement mismatch",
              "Section code, rotation and port/cover configuration",
            ],
            [
              "F11 / F12 bent-axis units",
              "Pump/motor function, displacement, speed or mounting difference",
              "Duty, complete code, shaft/flange and connection data",
            ],
          ],
        },
      },
      {
        title: "How options are described",
        items: [
          "Original route, when available",
          "Aftermarket option supported by comparison data",
          "Functional alternative requiring customer engineering review",
          "Unable to quote when evidence is insufficient",
        ],
      },
      {
        title: "Independent service notice",
        intro:
          "Parker names and model numbers are used for identification only. No manufacturer affiliation or authorization is implied.",
      },
    ],
  },
  {
    slug: "resources/how-to-read-a-hydraulic-valve-model-code",
    title: "How to Read a Hydraulic Valve Model Code",
    seoTitle: "How to Read a Hydraulic Valve Model Code",
    description:
      "A practical guide to collecting the complete hydraulic valve model code before requesting a replacement.",
    published: "2026-05-10",
    modified: "2026-08-01",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "MODEL-CODE GUIDE",
    intro:
      "A valve code can encode size, spool function, actuation, voltage, connector, seals and special options. A missing suffix can change the product.",
    sections: [
      {
        title: "Capture the code exactly",
        items: [
          "Photograph the complete nameplate in focus",
          "Keep slashes, hyphens, spaces and suffixes",
          "Record the order number separately",
          "Photograph the connector and mounting face",
        ],
      },
      {
        title: "Common code groups",
        table: {
          headers: [
            "Code group",
            "What it may control",
            "Why omission is risky",
          ],
          rows: [
            [
              "Family and nominal size",
              "Basic construction, mounting family and flow range",
              "A similar family label does not prove the same interface or capacity",
            ],
            [
              "Spool or poppet function",
              "Flow paths in each energized and de-energized state",
              "The machine can move incorrectly even when the valve bolts on",
            ],
            [
              "Actuation and centering",
              "Solenoid, pilot, manual, spring, detent or proportional behavior",
              "The normal state and failure response may change",
            ],
            [
              "Electrical configuration",
              "Voltage, current type, connector, electronics and feedback",
              "Wrong voltage or pinout can damage the coil or controller",
            ],
            [
              "Seal and special options",
              "Fluid compatibility, temperature, corrosion and certified variants",
              "A standard seal or revision may not suit the application",
            ],
          ],
        },
      },
      {
        title: "Before requesting a replacement",
        items: [
          "State working pressure and flow",
          "Identify the machine and application",
          "Explain the known failure",
          "Provide a hydraulic schematic when available",
        ],
        note: "Do not infer compatibility from a short family name. Different suffixes may change function, electrical connection or operating limits.",
      },
      {
        title: "Worked intake example",
        intro:
          "Treat the nameplate and the machine as two evidence sources. A useful RFQ records the code exactly as shown, then adds the circuit symbol, coil label, mounting-face photo, pressure, flow and machine function. If a character is unreadable, mark it as unknown instead of guessing.",
        items: [
          "Confirmed: characters visible on the plate, order number and physical interface",
          "Customer-provided: machine, duty, pressure, flow and failure symptoms",
          "To verify: suffix interpretation, revision, manufacturer data and proposed-model differences",
          "Release condition: hydraulic, electrical and mechanical checks accepted in writing",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/resources/what-must-match-when-replacing-a-directional-valve/",
        title: "Directional valve checklist",
        text: "Turn a decoded code into a functional replacement review.",
      },
      {
        href: "/cross-reference/",
        title: "Submit a model code",
        text: "Send the complete reference and supporting photos.",
      },
      {
        href: "/models/",
        title: "Exact model records",
        text: "See how individual code groups are documented.",
      },
    ],
  },
  {
    slug: "resources/how-to-identify-a-hydraulic-pump-from-its-nameplate",
    title: "How to Identify a Hydraulic Pump from Its Nameplate",
    seoTitle: "Identify a Hydraulic Pump from Its Nameplate",
    description:
      "Learn which nameplate, shaft, flange, port and application details are needed to identify a hydraulic pump.",
    published: "2026-05-15",
    modified: "2026-08-01",
    readingTime: "9 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "PUMP IDENTIFICATION GUIDE",
    intro:
      "Pump identification starts with a complete nameplate, but mechanical details and application data are often needed to confirm the exact build.",
    sections: [
      {
        title: "Photographs to collect",
        items: [
          "Full nameplate straight-on",
          "Shaft and mounting flange",
          "Port side and connection layout",
          "Control or compensator assembly",
          "Overall installation and drive arrangement",
        ],
      },
      {
        title: "Technical information",
        items: [
          "Complete model code and serial number",
          "Displacement and working pressure",
          "Direction of rotation",
          "Shaft type and flange",
          "Port threads and position",
          "Machine, fluid and duty cycle",
        ],
      },
      {
        title: "Common identification errors",
        items: [
          "Reading only the series name",
          "Assuming rotation from hose position",
          "Ignoring through-drive or control suffixes",
          "Measuring a worn shaft without reference data",
        ],
      },
      {
        title: "Pump evidence matrix",
        table: {
          headers: [
            "Evidence",
            "What it can confirm",
            "What it cannot confirm alone",
          ],
          rows: [
            [
              "Nameplate",
              "Family, nominal displacement, control and configuration code",
              "Current condition, hidden installation changes or unreadable suffixes",
            ],
            [
              "Shaft and flange photos",
              "Interface type, pilot, bolt pattern and available clearance",
              "Exact dimensions without a scale or drawing",
            ],
            [
              "Port-side photo",
              "Port arrangement, control location and hose routing",
              "Thread standard or internal control logic by appearance",
            ],
            [
              "Machine and duty data",
              "Required pressure, flow, speed and control behavior",
              "Exact original pump build without identity evidence",
            ],
          ],
        },
      },
      {
        title: "When the nameplate is unreadable",
        intro:
          "Do not select from appearance alone. Record casting marks, all stamped numbers, shaft and pilot dimensions, bolt pattern, port threads, rotation viewed from the drive shaft, control photographs and machine identity. The result should remain a conditional identification until dimensions and function are reconciled.",
        note: "Rotation must be stated from a defined viewing direction. “Left” or “right” without the drive-shaft viewpoint is ambiguous.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/hydraulic-pump-rotation-flange-and-shaft-identification/",
        title: "Pump interfaces",
        text: "Measure rotation, shaft, flange and ports consistently.",
      },
      {
        href: "/products/hydraulic-pumps/",
        title: "Hydraulic pump categories",
        text: "Review piston, vane and gear pump sourcing scope.",
      },
      {
        href: "/cross-reference/",
        title: "Pump model review",
        text: "Submit nameplate and installation evidence.",
      },
    ],
  },
  {
    slug: "resources/what-must-match-when-replacing-a-directional-valve",
    title: "What Must Match When Replacing a Directional Valve",
    seoTitle: "Directional Valve Replacement Checklist",
    description:
      "Directional valve replacement checklist covering spool function, pressure, flow, mounting, voltage, connector and seals.",
    published: "2026-05-20",
    modified: "2026-08-01",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "DIRECTIONAL VALVE CHECKLIST",
    intro:
      "A valve that fits the mounting pattern can still operate the circuit incorrectly. Function and electrical details must be checked before installation.",
    sections: [
      {
        title: "Hydraulic function",
        items: [
          "Number of ways and positions",
          "Spool symbol and center condition",
          "Spring return, detent or centering",
          "Pilot, manual override or special controls",
        ],
      },
      {
        title: "Performance and installation",
        items: [
          "Pressure and flow limits",
          "Mounting standard and port pattern",
          "Pressure drop and leakage expectations",
          "Physical envelope and connector clearance",
        ],
      },
      {
        title: "Electrical and material details",
        items: [
          "AC or DC voltage",
          "Connector style and orientation",
          "Coil power and protection rating",
          "Seal material, fluid and temperature",
        ],
      },
      {
        title: "Replacement decision table",
        table: {
          headers: ["Check", "Acceptable evidence", "Failure if assumed"],
          rows: [
            [
              "De-energized flow state",
              "Hydraulic symbol or verified spool code",
              "Unexpected actuator motion, blocked flow or unloaded pressure",
            ],
            [
              "Mounting interface",
              "Standard drawing plus measured installed pattern",
              "A valve may bolt on yet connect ports incorrectly",
            ],
            [
              "Flow and pressure drop",
              "Manufacturer curve or relevant test data at actual flow",
              "Slow motion, heat and excessive energy loss",
            ],
            [
              "Solenoid and connector",
              "Coil label, datasheet and connector pinout",
              "Coil failure, control fault or reversed actuation",
            ],
            [
              "Seals and environment",
              "Fluid, temperature and material confirmation",
              "Swelling, hardening, leakage or shortened life",
            ],
          ],
        },
      },
      {
        title: "Commissioning boundary",
        intro:
          "Before removal, record the original valve orientation, wiring, pressure settings and a normal machine cycle. Commission a changed model at controlled pressure and speed, verify every commanded and neutral state, and stop if motion, pressure, leakage, noise or temperature differs from the acceptance plan.",
        note: "A matching mounting pattern is only one check. It is never a substitute for confirming the circuit function.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/how-to-read-a-hydraulic-valve-model-code/",
        title: "Read the valve code",
        text: "Identify the functional and electrical suffixes first.",
      },
      {
        href: "/products/hydraulic-valves/solenoid-directional-valves/",
        title: "Solenoid directional valves",
        text: "Review product scope and quotation evidence.",
      },
      {
        href: "/resources/hydraulic-valve-pressure-drop-heat/",
        title: "Pressure drop and heat",
        text: "Check the cost of undersized or restrictive flow paths.",
      },
    ],
  },
  {
    slug: "resources/oem-vs-aftermarket-hydraulic-components",
    title: "OEM vs Aftermarket Hydraulic Components",
    seoTitle: "OEM vs Aftermarket Hydraulic Components",
    description:
      "Compare original and aftermarket hydraulic sourcing routes without assuming every alternative is a direct replacement.",
    kicker: "PURCHASING GUIDE",
    intro:
      "Original and aftermarket routes can both be useful. The right decision depends on application risk, technical evidence, lifecycle cost and supply urgency.",
    excludeFromIndex: true,
    sections: [
      {
        title: "Original route",
        items: [
          "Manufacturer-controlled specification and traceability",
          "Often preferred for safety-critical or warranty-sensitive equipment",
          "May involve higher price or longer lead time",
          "Availability can be difficult for obsolete models",
        ],
      },
      {
        title: "Aftermarket route",
        items: [
          "Potential cost and lead-time advantages",
          "Multiple quality levels and data maturity",
          "Requires careful parameter and supplier review",
          "Sampling or commissioning may be appropriate",
        ],
      },
      {
        title: "Decision factors",
        items: [
          "System criticality and failure consequence",
          "Availability of complete technical data",
          "Supplier history and inspection evidence",
          "Customer ability to validate the alternative",
          "Total downtime and replacement cost",
        ],
      },
      {
        title: "Route comparison",
        table: {
          headers: [
            "Decision area",
            "Original route",
            "Independent aftermarket route",
          ],
          rows: [
            [
              "Identity and traceability",
              "Manufacturer documentation and channel evidence should be requested",
              "Manufacturer identity, model basis and supplier records must be stated",
            ],
            [
              "Compatibility basis",
              "Complete original code still needs confirmation",
              "Line-by-line function, rating and interface comparison is essential",
            ],
            [
              "Commercial advantage",
              "May protect standardization and reduce approval effort",
              "May improve price, availability or obsolete-part access",
            ],
            [
              "Validation effort",
              "Usually lower when the exact authorized product is confirmed",
              "Depends on evidence quality, consequence and size of the change",
            ],
            [
              "Best use case",
              "High criticality, warranty-sensitive or tightly controlled equipment",
              "Documented, reviewable applications with an acceptance path",
            ],
          ],
        },
      },
      {
        title: "Claims the quotation should separate",
        items: [
          "Original product, independently manufactured compatible option and functional alternative are different supply routes.",
          "“In stock” should refer to the exact model and checked quantity, not a generic product family.",
          "“Direct replacement” requires the relevant functional, hydraulic, electrical and mechanical evidence.",
          "Warranty scope should identify the supplied product, term, exclusions and required claim evidence.",
        ],
        note: "Do not treat a brand name in a page title, supplier message or marketplace listing as proof of authorization or origin.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/original-vs-aftermarket-hydraulic-sourcing-routes/",
        title: "Detailed sourcing routes",
        text: "Compare evidence, risk, lead time and approval ownership.",
      },
      {
        href: "/trust/",
        title: "Trust and verification",
        text: "Review how identity, compatibility and commercial claims are separated.",
      },
      {
        href: "/quality/",
        title: "Order-specific evidence",
        text: "Define inspection and documentation before purchase.",
      },
    ],
  },
  {
    slug: "resources/how-to-request-a-custom-hydraulic-cylinder-quote",
    title: "How to Request a Custom Hydraulic Cylinder Quote",
    seoTitle: "Custom Hydraulic Cylinder RFQ Guide",
    description:
      "Custom hydraulic cylinder RFQ checklist for drawings, dimensions, pressure, mounting, seals, speed, load and quantity.",
    published: "2026-06-01",
    modified: "2026-08-01",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "CUSTOM CYLINDER RFQ GUIDE",
    intro:
      "A clear cylinder quotation needs both dimensions and operating conditions. A drawing is the best starting point.",
    sections: [
      {
        title: "Dimensional information",
        items: [
          "Bore and rod diameter",
          "Stroke and retracted length",
          "Mounting style and pin dimensions",
          "Port location, size and thread",
          "Rod end and installation envelope",
        ],
      },
      {
        title: "Operating conditions",
        items: [
          "Working and test pressure",
          "Push and pull load",
          "Extension and retraction speed",
          "Duty cycle and environment",
          "Fluid, temperature and seal requirement",
        ],
      },
      {
        title: "Commercial information",
        items: [
          "Prototype and annual quantity",
          "Required delivery date",
          "Inspection or test documents",
          "Surface treatment and packing",
          "Destination and Incoterm preference",
        ],
      },
      {
        title: "Minimum drawing dataset",
        table: {
          headers: [
            "Drawing area",
            "Required dimensions or notes",
            "Common omission",
          ],
          rows: [
            [
              "Barrel and stroke",
              "Bore, stroke, closed length and maximum open length",
              "Stroke is given without the pin-to-pin installed lengths",
            ],
            [
              "Rod and end",
              "Rod diameter, thread, eye or clevis geometry and orientation",
              "Rod-end rotation or wrench flats are not defined",
            ],
            [
              "Mounting",
              "Base, trunnion, flange, clevis or pin dimensions and tolerances",
              "Pin diameter is shown without width, centerline or bearing detail",
            ],
            [
              "Ports and cushioning",
              "Thread, size, location, orientation, cushioning and bleed points",
              "Port standard is guessed from nominal size",
            ],
            [
              "Materials and finish",
              "Tube, rod surface, seals, corrosion finish and environment",
              "A generic material callout ignores salt, dust or temperature",
            ],
          ],
        },
      },
      {
        title: "Force, speed and stability checks",
        intro:
          "Bore and pressure determine theoretical push force; annular area controls pull force. Flow and effective area determine nominal speed. Side load, buckling, cushioning, pressure loss and efficiency still require engineering review.",
        items: [
          "State whether the quoted load is push, pull, static holding or dynamic.",
          "Provide the actual pressure available at the cylinder, not only the pump rating.",
          "Identify vertical loads, side loads, long strokes and guidance outside the cylinder.",
          "Define the acceptance test: dimensions, leakage, pressure hold, function and documentation.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/products/hydraulic-cylinders/custom-hydraulic-cylinders/",
        title: "Custom hydraulic cylinders",
        text: "Review manufacturing and quotation scope.",
      },
      {
        href: "/downloads/",
        title: "RFQ templates",
        text: "Structure dimensional, operating and commercial inputs.",
      },
      {
        href: "/quality/",
        title: "Cylinder inspection evidence",
        text: "Agree dimensions, tests and records before production.",
      },
    ],
  },
  {
    slug: "resources/why-the-same-hydraulic-series-may-not-be-interchangeable",
    title: "Why the Same Hydraulic Series May Not Be Directly Interchangeable",
    seoTitle: "Why Hydraulic Series May Not Interchange",
    description:
      "Series names can hide differences in function, size, control, voltage, shaft, flange, ports, seals and revisions.",
    published: "2026-06-05",
    modified: "2026-08-01",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "COMPATIBILITY GUIDE",
    intro:
      "A series identifies a product family. It rarely captures every option needed to approve a direct replacement.",
    sections: [
      {
        title: "Differences hidden in suffixes",
        items: [
          "Valve spool and centering",
          "Coil voltage and connector",
          "Pump control and rotation",
          "Shaft, flange and port layout",
          "Seals, temperature and special revisions",
        ],
      },
      {
        title: "Risks of selecting by family name",
        items: [
          "Incorrect machine function",
          "Mechanical installation conflict",
          "Electrical damage or connector mismatch",
          "Pressure or flow outside the rating",
          "Short service life or unsafe commissioning",
        ],
      },
      {
        title: "Safer workflow",
        items: [
          "Capture the complete original code",
          "Compare technical data line by line",
          "List all known differences",
          "Confirm dimensions and application",
          "Use a sample or controlled test when appropriate",
        ],
      },
      {
        title: "Interchangeability risk ladder",
        table: {
          headers: ["Level", "Evidence state", "Permitted wording"],
          rows: [
            [
              "Identification lead",
              "Family or partial code only",
              "Possible family; more evidence required",
            ],
            [
              "Conditional option",
              "Key parameters align but one or more interfaces remain open",
              "Candidate subject to the listed confirmations",
            ],
            [
              "Documented match",
              "Relevant function, ratings, interfaces and application have been compared",
              "Matched for the recorded application and conditions",
            ],
            [
              "Order-approved item",
              "Exact supplied model, differences and acceptance evidence are attached to the quotation",
              "Approved against that quotation—not every variant or machine",
            ],
          ],
        },
      },
      {
        title: "Three examples of a suffix changing the result",
        items: [
          "A valve coil voltage may match while the spool center condition sends flow through a different path.",
          "A piston pump may share displacement and flange but use the opposite rotation or a different pressure-control response.",
          "A motor may fit the pilot and shaft while requiring a different brake, flushing or case-drain arrangement.",
        ],
        note: "Compatibility language should become more specific as evidence improves. It should never become broader than the machine and operating conditions actually reviewed.",
      },
    ],
    relatedLinks: [
      {
        href: "/models/",
        title: "Exact model records",
        text: "See code-group and open-check documentation at model level.",
      },
      {
        href: "/series/",
        title: "Series directory",
        text: "Use a series page for orientation, not final compatibility.",
      },
      {
        href: "/matching-process/",
        title: "Compatibility workflow",
        text: "Follow the evidence and risk-grading process.",
      },
    ],
  },
  {
    slug: "alternatives",
    title: "Hydraulic Alternative and Cross-Reference Review",
    seoTitle: "Hydraulic Alternatives & Cross-Reference",
    description:
      "Review selected hydraulic valve and pump references by complete model code, technical parameters, application and available sourcing evidence.",
    kicker: "BRAND, SERIES AND MODEL-CODE REVIEW",
    intro:
      "This center organizes independent aftermarket sourcing by original brand and series. It is an intake and technical review service, not a database of guaranteed direct replacements.",
    sections: [
      {
        title: "Reference centers",
        items: [
          "Bosch Rexroth-referenced valves and axial piston pumps",
          "Eaton / Vickers-referenced valves and vane pumps",
          "Selected Parker-referenced hydraulic components",
          "Additional brands reviewed only when supplier data can support the comparison",
        ],
      },
      {
        title: "How a result is classified",
        table: {
          headers: ["Status", "Meaning", "Next action"],
          rows: [
            [
              "Reviewable",
              "Complete original code and useful comparison data are available.",
              "Compare the application-specific parameters.",
            ],
            [
              "Conditional",
              "A candidate route exists, but one or more dimensions, controls or ratings remain open.",
              "Obtain drawings, photos or supplier confirmation.",
            ],
            [
              "Functional alternative",
              "The option may perform the required function but is not a drop-in replacement.",
              "Customer engineering review and installation changes are required.",
            ],
            [
              "Not publishable",
              "Evidence is insufficient for a responsible cross-reference statement.",
              "Request more data or use the original route.",
            ],
          ],
        },
      },
      {
        title: "What to submit",
        items: [
          "Original manufacturer and complete model code",
          "Nameplate and product photos",
          "Quantity and destination",
          "Pressure, flow, displacement, voltage or control details as applicable",
          "Mounting, ports, shaft, flange and machine application",
        ],
      },
      {
        title: "Choose the correct review level",
        table: {
          headers: [
            "Available input",
            "Appropriate page or service",
            "Responsible output",
          ],
          rows: [
            [
              "Brand or product type only",
              "Brand and product category pages",
              "Required fields and possible review route—not a candidate model",
            ],
            [
              "Series or family reference",
              "Series review page",
              "Code groups, common risks and evidence checklist",
            ],
            [
              "Complete model code",
              "Exact model record or manual cross-reference",
              "Field-by-field interpretation and visible open checks",
            ],
            [
              "Installed unit plus application data",
              "Order-specific quotation review",
              "Proposed route, differences, evidence status and commercial scope",
            ],
          ],
        },
      },
      {
        title: "Claims this center does not make",
        items: [
          "A listed brand or series is not evidence of manufacturer authorization",
          "A published reference is not a statement of live inventory or fixed lead time",
          "“Alternative” does not automatically mean drop-in, identical or approved for every machine",
          "Supplier statements and drawings remain tied to the offered unit and quotation",
          "Final installation and commissioning responsibility cannot be replaced by a directory page",
        ],
      },
    ],
    ctaTitle: "Search by sending the complete original reference.",
    ctaText:
      "We publish no direct-replacement claim until the relevant technical evidence has been reviewed.",
  },
  {
    slug: "alternatives/rexroth/directional-valves",
    title: "Rexroth Directional Valve Alternative Review",
    seoTitle: "Rexroth Directional Valve Alternatives",
    description:
      "Independent review of selected Rexroth-referenced directional valve alternatives using complete model codes, spool functions, voltages and mounting details.",
    kicker: "DIRECTIONAL VALVE REFERENCE HUB",
    intro:
      "Directional valve families can share a mounting size while differing in spool symbol, centering, solenoid, connector, pressure and flow capability.",
    sections: [
      {
        title: "Reference families currently accepted for review",
        table: {
          headers: [
            "Reference family",
            "Typical review scope",
            "Publication status",
          ],
          rows: [
            [
              "4WE6",
              "Size 6 solenoid directional valve references",
              "Series guidance published; exact code review required",
            ],
            [
              "4WE10",
              "Size 10 solenoid directional valve references",
              "Series guidance published; exact code review required",
            ],
            [
              "Other WE references",
              "Selected complete model codes",
              "Inquiry review only until data is verified",
            ],
          ],
        },
      },
      {
        title: "Comparison fields",
        items: [
          "Number of ways and positions",
          "Spool symbol and center condition",
          "Spring return, detent or centering arrangement",
          "Voltage, connector and manual override",
          "Mounting pattern, port function, pressure and flow",
          "Seal material, fluid and temperature",
        ],
      },
      {
        title: "Commercial confirmation",
        items: [
          "Proposed manufacturer and model stated on the quotation",
          "MOQ and lead time confirmed by line item",
          "Available drawings or inspection points identified",
          "Known differences and customer approvals recorded",
        ],
      },
    ],
  },
  {
    slug: "alternatives/rexroth/modular-valves",
    title: "Rexroth Modular Valve Alternative Review",
    seoTitle: "Rexroth Modular Valve Alternatives from China",
    description:
      "Review selected Rexroth-referenced sandwich and modular valves by size, function, pressure, setting range, port action and stack arrangement.",
    kicker: "MODULAR AND SANDWICH VALVE REVIEW",
    intro:
      "A modular valve must match more than its nominal size. Function, controlled port, adjustment range, stacking direction and pilot arrangement can change the circuit.",
    sections: [
      {
        title: "Valve types accepted for review",
        items: [
          "Pressure reducing and relief modules",
          "Throttle and throttle-check modules",
          "Pilot-operated check modules",
          "Sequence and counterbalance functions where data is available",
        ],
      },
      {
        title: "Technical comparison table",
        table: {
          headers: ["Field", "Why it matters", "Evidence to provide"],
          rows: [
            [
              "Mounting size and pattern",
              "Determines interface and stack compatibility.",
              "Complete code, dimensions or datasheet",
            ],
            [
              "Controlled port and flow direction",
              "A similar body can act on a different circuit port.",
              "Hydraulic symbol and stack order",
            ],
            [
              "Setting range",
              "Spring and adjustment range must suit the circuit.",
              "Original suffix and working pressure",
            ],
            [
              "Pilot and drain arrangement",
              "Internal or external pilot/drain can change operation.",
              "Circuit and port information",
            ],
          ],
        },
      },
      {
        title: "Release rule",
        intro:
          "A proposed model remains conditional until the circuit function, setting range and stacking arrangement are confirmed.",
      },
    ],
  },
  {
    slug: "resources/how-to-cross-reference-an-obsolete-hydraulic-valve",
    title: "How to Cross-Reference an Obsolete Hydraulic Valve",
    seoTitle: "Cross-Reference an Obsolete Hydraulic Valve",
    description:
      "A practical workflow for identifying and replacing an obsolete hydraulic valve without relying on appearance or a shortened series name.",
    published: "2026-06-10",
    modified: "2026-08-01",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "OBSOLETE VALVE WORKFLOW",
    intro:
      "When the original valve is obsolete, first reconstruct its function and installation requirements. A candidate should be compared against evidence, not selected from appearance alone.",
    sections: [
      {
        title: "Build the original reference record",
        items: [
          "Complete model and order numbers",
          "Readable nameplate and all-side photos",
          "Hydraulic symbol or machine schematic",
          "Mounting face, port and envelope dimensions",
          "Voltage, connector and manual override",
        ],
      },
      {
        title: "Separate must-match and adaptable fields",
        table: {
          headers: [
            "Field",
            "Normally must match",
            "May be adaptable with engineering review",
          ],
          rows: [
            [
              "Hydraulic function",
              "Spool symbol, center condition and controlled ports",
              "Pilot arrangement only if the circuit is redesigned",
            ],
            [
              "Installation",
              "Mounting interface and safe pressure rating",
              "Envelope, connector direction or plumbing",
            ],
            [
              "Electrical",
              "Supply type and voltage",
              "Connector style with approved rewiring",
            ],
            [
              "Performance",
              "Required pressure, flow and fluid compatibility",
              "Response or leakage only when the application permits",
            ],
          ],
        },
      },
      {
        title: "Document the decision",
        items: [
          "Original reference and proposed model",
          "Data sources used",
          "Known differences",
          "Required customer changes",
          "Sample, commissioning and approval plan",
        ],
      },
      {
        title: "Where obsolete references commonly turn up",
        intro:
          "Recognizing the source of an obsolete reference helps route it to the right evidence. The same series name can arrive through very different channels.",
        table: {
          headers: ["Situation", "Typical evidence available", "Main risk"],
          rows: [
            [
              "Machine still in service with a failed valve",
              "Nameplate, machine model, schematic and operating history",
              "A visually similar valve with a different function or size",
            ],
            [
              "Storeroom or second-hand stock",
              "Part label, box marking and limited installation history",
              "A stored unit whose revision or suffix differs from the drawing",
            ],
            [
              "Catalog or BOM entry from an old machine manual",
              "Old catalog page, order code and machine BOM",
              "Multiple catalog generations sharing one series label",
            ],
          ],
        },
      },
      {
        title: "Evidence to keep with the final record",
        items: [
          "Photograph or scan of the original nameplate",
          "Machine make, model, serial number and circuit reference",
          "The complete code from the catalog generation that matches the machine",
          "Any dimension, drawing or test note used to compare the candidate",
          "The approved differences and the person responsible for approval",
        ],
      },
    ],
  },
  {
    slug: "resources/hydraulic-pump-rotation-flange-and-shaft-identification",
    title: "Hydraulic Pump Rotation, Flange and Shaft Identification",
    seoTitle: "Hydraulic Pump Rotation, Flange & Shaft Guide",
    description:
      "Identify hydraulic pump rotation, mounting flange, shaft and port arrangement before requesting a replacement.",
    published: "2026-06-15",
    modified: "2026-08-01",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "PUMP INSTALLATION GUIDE",
    intro:
      "Rotation, flange and shaft errors can prevent installation or damage a pump. Use the manufacturer view convention and dimensional evidence rather than hose position alone.",
    sections: [
      {
        title: "Rotation",
        items: [
          "Record the direction stated in the complete model code",
          "Confirm the manufacturer viewing convention",
          "Photograph the drive-end and port side",
          "Do not infer rotation only from inlet and outlet position",
        ],
      },
      {
        title: "Flange and shaft",
        table: {
          headers: ["Item", "Record", "Common error"],
          rows: [
            [
              "Mounting flange",
              "Pilot diameter, bolt pattern and flange standard",
              "Calling all two-bolt flanges identical",
            ],
            [
              "Shaft",
              "Spline or keyed type, diameter, tooth count and length",
              "Measuring only the worn exposed section",
            ],
            [
              "Port layout",
              "Port size, thread, position and direction",
              "Assuming hoses can always be rerouted",
            ],
            [
              "Through drive",
              "Interface and supported auxiliary pump",
              "Ignoring an attached rear pump",
            ],
          ],
        },
      },
      {
        title: "Useful RFQ photos",
        items: [
          "Full nameplate",
          "Drive-end shaft and flange",
          "Port-side view",
          "Control or compensator",
          "Overall installed pump and coupling",
        ],
      },
      {
        title: "Common mounting families",
        intro:
          "Most pump mounting flanges belong to established two-bolt or four-bolt families. The family name is only a starting point; the pilot diameter, bolt circle, bolt size and shaft extension decide whether a unit actually fits.",
        table: {
          headers: ["Mounting family", "What to record", "Risk of guessing"],
          rows: [
            [
              "Two-bolt flange (SAE-style)",
              "Pilot diameter, bolt spacing, shaft type and keyway",
              "Similar-looking two-bolt flanges differ across displacements",
            ],
            [
              "Four-bolt flange (SAE/ISO-style)",
              "Bolt circle, pilot diameter, bolt size and shaft end",
              "Bolt pattern and pilot are checked separately, not assumed",
            ],
            [
              "Inline or cartridge mount",
              "Port spacing, housing bore and retention detail",
              "Inline mounting depends on exact housing dimensions",
            ],
          ],
        },
      },
      {
        title: "Verification order before ordering",
        items: [
          "Read the complete model code and confirm every suffix",
          "Compare the flange pilot and bolt circle against the existing unit",
          "Compare shaft type, diameter, keyway or spline against the coupling",
          "Confirm rotation direction using the manufacturer view convention",
          "Check port size, thread, position and through-drive interface",
          "Keep the nameplate photograph attached to the inquiry record",
        ],
      },
    ],
  },
  {
    slug: "industries",
    title: "Hydraulic Component Applications",
    seoTitle: "Hydraulic Component Applications",
    description:
      "Hydraulic component matching and sourcing review for industrial machinery, construction equipment, metal forming and plastics machinery.",
    kicker: "APPLICATION CONTEXT MATTERS",
    intro:
      "Application pages explain the operating data needed for a responsible component review. They do not imply that one replacement is suitable for every machine in a sector.",
    sections: [
      {
        title: "Application review map",
        table: {
          headers: [
            "Sector",
            "Common hydraulic concern",
            "Evidence that changes the decision",
          ],
          rows: [
            [
              "Industrial machinery and factory MRO",
              "Repeatability, legacy codes and downtime",
              "Circuit function, duty cycle, installed interfaces and failure history",
            ],
            [
              "Construction and mobile equipment",
              "Shock load, contamination and machine-specific controls",
              "Machine identity, control configuration, pump interfaces and commissioning plan",
            ],
            [
              "Presses and metal forming",
              "Pressure holding, stored energy and safety functions",
              "Hydraulic schematic, load-holding logic, settings and qualified approval",
            ],
            [
              "Injection molding and plastics machinery",
              "Cycle repeatability, response and temperature",
              "Pressure-flow cycle, electrical signal, fluid temperature and acceptance criteria",
            ],
          ],
        },
      },
      {
        title: "Why a part number is not the whole application",
        intro:
          "A complete component code identifies a configuration, but it does not describe every condition imposed by the machine. The same nominal valve or pump can behave differently when the duty, fluid, control system or installation changes.",
        items: [
          "Duty cycle and failure consequence",
          "Working and peak pressure",
          "Fluid, temperature and contamination conditions",
          "Control response and commissioning requirements",
          "Installation access and allowable changes",
        ],
      },
      {
        title: "Minimum application record before a match is released",
        items: [
          "Machine manufacturer, model, function and operating environment",
          "Original component brand, complete code and readable nameplate photos",
          "Known pressure, flow, displacement, voltage or control-signal data",
          "Mounting, ports, shaft, flange, connector and available-space evidence",
          "Failure symptoms, previous modifications and the customer's acceptance test",
        ],
        note: "If the machine or circuit information is incomplete, the result should remain an identification lead or conditional option—not a direct-compatibility claim.",
      },
    ],
    relatedLinks: [
      {
        href: "/matching-process/",
        title: "Matching process",
        text: "See how evidence is separated from open compatibility checks.",
      },
      {
        href: "/cross-reference/",
        title: "Model-code review",
        text: "Submit a machine-linked component reference for review.",
      },
      {
        href: "/quality/",
        title: "Inspection planning",
        text: "Define order-specific checks before supplier release.",
      },
    ],
  },
  {
    slug: "industries/industrial-machinery",
    title: "Hydraulic Components for Industrial Machinery",
    seoTitle: "Hydraulics for Industrial Machinery & MRO",
    description:
      "Valve, pump, cylinder and pump-part sourcing review for industrial machinery, production lines and factory maintenance.",
    kicker: "INDUSTRIAL MACHINERY",
    intro:
      "Industrial equipment requests often involve repeatable duty, downtime pressure and legacy model codes. The machine circuit and installation details remain essential.",
    sections: [
      {
        title: "Where industrial replacement risk usually appears",
        table: {
          headers: ["Request", "Common hidden difference", "What to verify"],
          rows: [
            [
              "Directional or modular valve",
              "Spool function, de-energized state or stack port action",
              "Hydraulic symbol, subplate pattern, pressure, flow, voltage and connector",
            ],
            [
              "Piston, vane or gear pump",
              "Rotation, control, shaft, flange or port orientation",
              "Complete code, drive view, installed dimensions, pressure-flow duty and fluid",
            ],
            [
              "Cylinder replacement",
              "Mounting geometry, cushioning or load side pressure",
              "Drawing, pin centers, bore, rod, stroke, ports, speed and load",
            ],
            [
              "Repair kit or service part",
              "Kit scope or parent-unit revision",
              "Complete parent code, serial/revision evidence and dismantled-part photos",
            ],
          ],
        },
      },
      {
        title: "Production data to include",
        intro:
          "For factory equipment, the review should capture not only nominal ratings but also how the component is used during a complete production cycle.",
        items: [
          "Machine function, cycle time, shifts per day and start-stop frequency",
          "Working, standby and peak pressure with known pressure spikes",
          "Flow demand, actuator speed and any heat or pressure-drop problem",
          "Voltage, control signal, connector, feedback and PLC interface",
          "Mounting, ports, access, allowable piping changes and delivery window",
        ],
      },
      {
        title: "Maintenance release and acceptance",
        items: [
          "Record the original failure mode before replacing the component; contamination, cavitation or circuit faults can damage a new part.",
          "For a changed model, define who approves drawing differences and who owns machine-level safety validation.",
          "Agree the receiving inspection: identity, interfaces, settings, cleanliness, documentation and packaging.",
          "For a critical production asset, use a controlled first article or sample before stocking a batch.",
        ],
        note: "A lower purchase price does not offset unplanned downtime. The quotation should keep technical differences and open checks visible to maintenance and purchasing teams.",
      },
    ],
    ctaTitle: "Build an industrial maintenance RFQ.",
    ctaText:
      "Send the complete code, machine function, failure history, duty and installed-interface evidence.",
    relatedLinks: [
      {
        href: "/products/hydraulic-valves/",
        title: "Industrial hydraulic valves",
        text: "Review valve families and required confirmation points.",
      },
      {
        href: "/products/hydraulic-pumps/",
        title: "Industrial hydraulic pumps",
        text: "Compare pump type, controls and installation interfaces.",
      },
      {
        href: "/distributor-support/",
        title: "Mixed maintenance lists",
        text: "Prepare multi-line RFQs without hiding unresolved items.",
      },
    ],
  },
  {
    slug: "industries/construction-equipment",
    title: "Hydraulic Components for Construction Equipment",
    seoTitle: "Hydraulics for Construction Equipment",
    description:
      "Hydraulic pump, valve and component review for selected construction and mobile equipment applications.",
    kicker: "MOBILE HYDRAULICS",
    intro:
      "Mobile equipment can combine high pressure, shock loads, temperature changes and machine-specific controls. Model and machine data must be reviewed together.",
    sections: [
      {
        title: "Machine-linked identification record",
        items: [
          "Machine manufacturer, model and year",
          "Component nameplate and complete code",
          "Pump rotation, shaft, flange and port layout",
          "Control, sensor and feedback configuration",
          "Operating symptoms and system history",
        ],
      },
      {
        title: "Mobile equipment comparison matrix",
        table: {
          headers: [
            "Subsystem",
            "Replacement-sensitive details",
            "Evidence before release",
          ],
          rows: [
            [
              "Main or implement pump",
              "Control regulator, displacement, rotation, shaft, flange and ports",
              "Full pump code, machine model, drive-side and port-side photos, operating pressure",
            ],
            [
              "Travel or swing motor",
              "Displacement, brake, reduction interface, flushing and case drain",
              "Motor and machine codes, mounting dimensions, hose layout and duty",
            ],
            [
              "Control valve",
              "Section functions, relief settings, pilot logic and sensor connections",
              "Hydraulic schematic, valve code, coil/sensor labels and port identification",
            ],
            [
              "Cylinder",
              "Pin centers, bore, rod, stroke, cushioning and port location",
              "Drawing or measured geometry, load direction, pressure and speed",
            ],
          ],
        },
      },
      {
        title: "Conditions that must not be hidden by a cross-reference",
        items: [
          "Cold-start viscosity, high ambient temperature and contamination exposure",
          "Shock loads, overrun, braking and load-holding consequences",
          "Electronic displacement control, feedback calibration or controller compatibility",
          "Hose clearance, case-drain routing, charge pressure and commissioning procedure",
        ],
        note: "A physical fit is not proof of correct control behavior. Pump, motor and valve changes on mobile equipment require a machine-level commissioning plan.",
      },
      {
        title: "Controlled validation for higher-risk replacements",
        intro:
          "Before batch purchase, define measurable acceptance criteria such as standby pressure, case-drain flow, operating temperature, machine cycle time, response and leakage. Record the original settings before removal so the trial has a usable baseline.",
      },
    ],
    ctaTitle: "Review a component against the machine.",
    ctaText:
      "Include the machine model, full component code, control details, failure symptoms and installation photos.",
    relatedLinks: [
      {
        href: "/products/hydraulic-motors/",
        title: "Hydraulic motors",
        text: "Review orbital, piston, travel and swing motor requirements.",
      },
      {
        href: "/resources/hydraulic-pump-cavitation-suction-line/",
        title: "Pump inlet diagnosis",
        text: "Rule out suction and contamination problems before replacement.",
      },
      {
        href: "/resources/hydrostatic-pump-and-transmission-basics/",
        title: "Hydrostatic transmission basics",
        text: "Understand pump, motor, charge and control interactions.",
      },
    ],
  },
  {
    slug: "industries/metal-forming",
    title: "Hydraulic Components for Metal Forming",
    seoTitle: "Hydraulics for Presses & Metal Forming",
    description:
      "Hydraulic valve, pump and cylinder sourcing review for presses and selected metal-forming machinery.",
    kicker: "PRESSES AND FORMING LINES",
    intro:
      "Press and forming applications can involve high force, pressure holding and safety-related functions. Functional and safety approval remains with the equipment owner and qualified engineers.",
    sections: [
      {
        title: "Press function and replacement consequence",
        table: {
          headers: [
            "Function",
            "Why the detail matters",
            "Required review evidence",
          ],
          rows: [
            [
              "Rapid approach and return",
              "Flow capacity and pressure drop affect cycle time and heat",
              "Cycle flow, valve path, pump delivery and measured temperature",
            ],
            [
              "Pressing or forming",
              "Pressure stability and pump control affect force and repeatability",
              "Pressure-flow profile, control type, settings and motor allowance",
            ],
            [
              "Dwell and pressure holding",
              "Internal leakage or wrong valve state can permit movement",
              "Circuit schematic, leakage expectation, valve logic and hold-time test",
            ],
            [
              "Decompression and unloading",
              "Incorrect sequencing can cause shock, noise or unsafe motion",
              "Sequence logic, pilot paths, settings and commissioning procedure",
            ],
          ],
        },
      },
      {
        title: "Component-specific evidence",
        items: [
          "Valve symbol, normal state, pilot arrangement, setting range and mounting pattern",
          "Cylinder bore, rod, stroke, retracted and extended lengths, mounting, ports and cushioning",
          "Pump displacement, pressure control, rotation, shaft, flange, ports and duty",
          "Critical dimensions, material requirements and agreed leakage or pressure-hold checks",
        ],
      },
      {
        title: "Safety boundary",
        intro:
          "A component sourcing review does not validate the press safety system. Stored hydraulic energy, gravity loads, interlocks, guarding and applicable machine-safety requirements must be reviewed by the equipment owner and qualified personnel.",
        items: [
          "Do not use a catalogue pressure rating as proof of a safe load-holding function.",
          "Do not alter spool, poppet, pilot or decompression behavior without circuit review.",
          "Lockout, depressurization and commissioning procedures belong in the replacement plan.",
          "Acceptance should include controlled low-risk testing before production release.",
        ],
      },
    ],
    ctaTitle: "Prepare a press-component review.",
    ctaText:
      "Send the hydraulic schematic, complete component code, pressure-flow cycle, dimensions and safety-related function.",
    relatedLinks: [
      {
        href: "/products/hydraulic-cylinders/",
        title: "Hydraulic cylinders",
        text: "Capture geometry, load, speed and mounting requirements.",
      },
      {
        href: "/resources/hydraulic-valve-pressure-drop-heat/",
        title: "Valve pressure drop",
        text: "Estimate power loss where high cycle flow creates heat.",
      },
      {
        href: "/resources/hydraulic-pressure-relief-valve-function-adjustment/",
        title: "Relief valve function",
        text: "Review pressure limiting and adjustment boundaries.",
      },
    ],
  },
  {
    slug: "industries/plastics-machinery",
    title: "Hydraulic Components for Plastics Machinery",
    seoTitle: "Hydraulics for Plastics Machinery",
    description:
      "Hydraulic valve, pump and component matching for selected injection molding and plastics machinery applications.",
    kicker: "PLASTICS MACHINERY",
    intro:
      "Injection molding and plastics machinery can depend on repeatable pressure, flow and response. The complete component code and machine conditions should be reviewed together.",
    sections: [
      {
        title: "Hydraulic function by machine phase",
        table: {
          headers: ["Machine phase", "Hydraulic demand", "Replacement checks"],
          rows: [
            [
              "Mold close and clamp",
              "Fast approach followed by controlled high pressure",
              "Valve flow paths, pressure transition, pump control and clamp acceptance",
            ],
            [
              "Injection and holding",
              "Repeatable pressure, flow and response",
              "Proportional characteristics, feedback, signal type, leakage and temperature",
            ],
            [
              "Plasticizing and recovery",
              "Stable motor speed and back-pressure control",
              "Motor displacement, pressure-flow demand, control valve and cooling",
            ],
            [
              "Mold open and eject",
              "Repeatable speed, position and cushioning",
              "Valve response, cylinder geometry, sensors and commissioning limits",
            ],
          ],
        },
      },
      {
        title: "Application and control details",
        items: [
          "Machine manufacturer and model",
          "Pressure and flow during each relevant cycle phase",
          "Voltage, connector, current or voltage command and feedback signal",
          "Fluid grade, normal and startup temperature, cooling condition",
          "Expected repeatability, cycle-time baseline and commissioning plan",
        ],
      },
      {
        title:
          "Common causes of a technically similar part performing differently",
        items: [
          "Different proportional-valve command range, electronics or null adjustment",
          "Pump control dynamics that change pressure transition or cycle time",
          "Internal leakage that becomes visible during pressure holding",
          "Incorrect seals or viscosity range at the machine's operating temperature",
          "Connector pinout, sensor scaling or PLC parameters that were assumed rather than verified",
        ],
        note: "Record the original machine settings and a good-cycle baseline before changing a valve or pump. Without a baseline, commissioning cannot separate a component difference from an existing system problem.",
      },
      {
        title: "Acceptance record",
        intro:
          "For a changed model, agree the measurements that release it for production: cycle time, pressure stability, temperature, leakage, noise, response and product-quality result. Higher-risk changes should begin with one controlled sample.",
      },
    ],
    ctaTitle: "Review a plastics-machine component.",
    ctaText:
      "Send the machine model, complete code, cycle pressure-flow data, control signal, temperature and acceptance criteria.",
    relatedLinks: [
      {
        href: "/products/hydraulic-valves/proportional-servo-valves/",
        title: "Proportional and servo valves",
        text: "Review signal, feedback, electronics and response requirements.",
      },
      {
        href: "/products/hydraulic-pumps/",
        title: "Hydraulic pumps",
        text: "Compare pressure-flow duty, control and installation.",
      },
      {
        href: "/resources/hydraulic-fluid-freezing-point-and-cold-start/",
        title: "Fluid and temperature",
        text: "Understand why viscosity and temperature affect component behavior.",
      },
    ],
  },
  {
    slug: "alternatives/rexroth/a11vo",
    title: "Rexroth A11VO Replacement Pump Review",
    seoTitle: "Rexroth A11VO Replacement Pump Review",
    description:
      "A11VO replacement review covering displacement, pressure, control, rotation, mounting, shaft, ports, through-drive and machine application.",
    kicker: "OPEN-CIRCUIT MOBILE PUMP SERIES",
    intro:
      "A11VO identifies an axial piston pump family. A replacement decision still depends on the complete code, control configuration, installation geometry and machine duty.",
    sections: [
      {
        title: "A11VO comparison record",
        table: {
          headers: [
            "Parameter group",
            "Original data to capture",
            "Release requirement",
          ],
          rows: [
            [
              "Hydraulic",
              "Displacement, nominal and peak pressure, speed",
              "Candidate data supports the operating range",
            ],
            [
              "Control",
              "Complete control code, signal and setting range",
              "Control behavior is confirmed, not inferred",
            ],
            [
              "Mechanical",
              "Rotation, flange, shaft and installation envelope",
              "Drawing or measured dimensions are reviewed",
            ],
            [
              "Connections",
              "Main ports, case drain, pilot ports and orientation",
              "Every connection is mapped before shipment",
            ],
            [
              "Options",
              "Through-drive, auxiliary pump and special suffixes",
              "Option is confirmed or listed as unavailable",
            ],
          ],
        },
      },
      {
        title: "Information needed from the machine",
        items: [
          "Machine manufacturer, model and year",
          "Original pump nameplate and order number",
          "Working and peak pressure",
          "Expected flow or drive speed",
          "Control signal and commissioning information",
          "Reason for replacement and failure symptoms",
        ],
      },
      {
        title: "Common A11VO replacement risks",
        items: [
          "A similar displacement with a different controller can change machine response",
          "A shaft or flange difference can prevent installation",
          "Port orientation can conflict with hoses or the machine frame",
          "Incorrect rotation can damage a pump during startup",
          "Through-drive and auxiliary functions may be hidden in suffixes",
        ],
      },
      {
        title: "Recommended release route",
        items: [
          "Decode the complete reference",
          "Compare the supplier drawing and technical data",
          "Record every known difference on the quotation",
          "Confirm inspection evidence before dispatch",
          "Use controlled commissioning for a first order or higher-risk machine",
        ],
      },
    ],
    ctaTitle: "Request an A11VO code review.",
    ctaText:
      "Send the full nameplate, machine model and photos of the shaft, flange, ports and controller.",
  },
  {
    slug: "alternatives/rexroth/a2fo",
    title: "Rexroth A2FO Fixed Pump Replacement Review",
    seoTitle: "Rexroth A2FO Fixed Pump Replacement Review",
    description:
      "Review an A2FO fixed pump reference by displacement, rotation, speed, pressure, mounting flange, shaft, ports and installation conditions.",
    kicker: "BENT-AXIS FIXED PUMP SERIES",
    intro:
      "The fixed-displacement design does not make A2FO selection automatic. Size, series, rotation, shaft, flange and port details still have to match the installation.",
    sections: [
      {
        title: "Model-code review fields",
        table: {
          headers: ["Field", "Why it matters", "Evidence"],
          rows: [
            [
              "Nominal size",
              "Sets theoretical displacement and expected flow",
              "Complete code and supplier data",
            ],
            [
              "Series and pressure rating",
              "Affects permissible operating conditions",
              "Datasheet or quotation record",
            ],
            [
              "Rotation",
              "Determines correct pumping direction",
              "Nameplate, arrow and drive arrangement",
            ],
            [
              "Shaft and flange",
              "Controls mechanical fit and torque transmission",
              "Drawing or verified dimensions",
            ],
            [
              "Ports",
              "Controls hose fit, orientation and case drainage",
              "Port-side photos and connection data",
            ],
          ],
        },
      },
      {
        title: "Application details",
        items: [
          "Prime mover and operating speed",
          "Continuous and peak pressure",
          "Hydraulic fluid and operating temperature",
          "Duty cycle and expected service hours",
          "Installation envelope and hose clearance",
        ],
      },
      {
        title: "Do not release from appearance alone",
        intro:
          "Two bent-axis pumps can look nearly identical while using different shafts, flange pilots, rotations or port arrangements. The complete record should be approved before purchase.",
      },
      {
        title: "First-order checks",
        items: [
          "Model and quantity against the quotation",
          "Rotation marking",
          "Shaft and flange dimensions",
          "Port type and position",
          "Packing protection for the shaft and sealing faces",
        ],
      },
    ],
    ctaTitle: "Send the complete A2FO reference.",
    ctaText:
      "Include the drive speed, pressure, rotation and installation photos.",
  },
  {
    slug: "alternatives/vickers/dg4v",
    title: "Vickers DG4V Directional Valve Alternative Review",
    seoTitle: "Vickers DG4V Valve Alternative Review",
    description:
      "DG4V directional valve alternative review covering frame size, spool, centering, voltage, connector, mounting, pressure, flow and special suffixes.",
    kicker: "DIRECTIONAL VALVE SERIES REVIEW",
    intro:
      "DG4V is a broad directional-valve family. Frame size and the complete functional and electrical suffixes must be reviewed before an alternative can be quoted.",
    sections: [
      {
        title: "DG4V code groups to capture",
        table: {
          headers: ["Code group", "Review question", "Risk if omitted"],
          rows: [
            [
              "Frame and mounting",
              "Which nominal size and mounting pattern?",
              "The valve may not fit the manifold",
            ],
            [
              "Spool and centering",
              "What circuit function and neutral condition are required?",
              "The machine may move or unload incorrectly",
            ],
            [
              "Actuation",
              "Spring return, detent or other arrangement?",
              "Operating sequence may change",
            ],
            [
              "Electrical",
              "Voltage, frequency, connector and coil option?",
              "Coil damage or wiring conflict",
            ],
            [
              "Special options",
              "Seals, manual override and environmental options?",
              "Reduced life or unsuitable operation",
            ],
          ],
        },
      },
      {
        title: "Photos and data to send",
        items: [
          "Complete nameplate and part number",
          "Connector and coil labels",
          "Mounting face or manifold reference",
          "Hydraulic symbol or schematic",
          "Working pressure, flow and fluid",
          "Machine model and quantity",
        ],
      },
      {
        title: "Quotation status language",
        items: [
          "Reviewable option: the main comparison fields are documented",
          "Conditional option: one or more fields still need customer confirmation",
          "Functional alternative: installation or circuit change may be required",
          "Not publishable: evidence is insufficient for a responsible quotation",
        ],
      },
      {
        title: "Independent reference notice",
        intro:
          "Vickers and Eaton names are used to identify the original component only. No manufacturer affiliation or authorization is implied.",
      },
    ],
    ctaTitle: "Request a DG4V model-code review.",
    ctaText:
      "Upload the complete nameplate, connector photo and hydraulic symbol.",
  },
  {
    slug: "alternatives/vickers/pvh",
    title: "Vickers PVH Piston Pump Alternative Review",
    seoTitle: "Vickers PVH Pump Alternative Review",
    description:
      "PVH piston pump alternative review covering displacement, control, rotation, pressure, shaft, mounting, ports and machine operating conditions.",
    kicker: "VARIABLE PISTON PUMP SERIES",
    intro:
      "A PVH family reference is only the start of the identification process. The controller, shaft, mounting and port configuration can determine whether an option is usable.",
    sections: [
      {
        title: "PVH comparison checklist",
        table: {
          headers: ["Group", "Original reference", "Proposed option"],
          rows: [
            [
              "Capacity",
              "Displacement and speed",
              "Documented operating range",
            ],
            [
              "Pressure",
              "Continuous and peak conditions",
              "Published or confirmed rating",
            ],
            [
              "Control",
              "Compensator or control configuration and settings",
              "Equivalent behavior or stated difference",
            ],
            [
              "Drive",
              "Rotation, shaft and mounting flange",
              "Drawing reviewed",
            ],
            [
              "Connections",
              "Main, drain and control ports",
              "Type, size and orientation mapped",
            ],
          ],
        },
      },
      {
        title: "Machine information",
        items: [
          "Machine manufacturer and model",
          "Drive motor speed and rotation",
          "Working cycle and pressure demand",
          "Fluid and temperature",
          "Known symptoms or reason for replacement",
        ],
      },
      {
        title: "Evidence before purchase",
        items: [
          "Full model code retained on the quotation",
          "Supplier drawing or critical dimensions",
          "Known control differences listed",
          "Inspection scope agreed",
          "Commissioning plan for a first installation",
        ],
      },
      {
        title: "When not to proceed",
        intro:
          "Do not release a pump when the original control, rotation, shaft, flange or port arrangement cannot be confirmed. A lower price does not offset an unidentified application risk.",
      },
    ],
    ctaTitle: "Request a PVH pump review.",
    ctaText:
      "Send the full code and clear photos of the control, shaft, flange and ports.",
  },
  {
    slug: "alternatives/parker/d1vw",
    title: "Parker D1VW Directional Valve Alternative Review",
    seoTitle: "Parker D1VW Valve Alternative Review",
    description:
      "D1VW directional valve alternative review by spool function, pressure, flow, voltage, connector, mounting, seals and machine application.",
    kicker: "NG06 / CETOP 3 VALVE REVIEW",
    intro:
      "A D1VW series name does not define the spool function, solenoid, connector or special options. Review the full code and circuit before selecting an alternative.",
    sections: [
      {
        title: "Critical D1VW fields",
        table: {
          headers: ["Field", "Required confirmation", "Typical failure mode"],
          rows: [
            [
              "Spool",
              "Complete functional code and center condition",
              "Wrong actuator or neutral behavior",
            ],
            [
              "Performance",
              "Operating pressure, tank pressure and flow",
              "Excess pressure drop or unsuitable rating",
            ],
            [
              "Electrical",
              "Voltage, current type, connector and protection",
              "Wiring conflict or coil failure",
            ],
            [
              "Mounting",
              "Pattern, envelope and connector clearance",
              "Mechanical interference",
            ],
            [
              "Materials",
              "Fluid, seals and temperature",
              "Leakage or premature seal failure",
            ],
          ],
        },
      },
      {
        title: "RFQ evidence",
        items: [
          "Nameplate and full part number",
          "Valve symbol or schematic",
          "Coil and connector photos",
          "Manifold or mounting information",
          "Machine, pressure, flow and fluid",
        ],
      },
      {
        title: "Replacement decision",
        intro:
          "The final quotation should distinguish between a data-supported option, a conditional option and a functional alternative that requires customer engineering approval.",
      },
      {
        title: "Independent reference notice",
        intro:
          "Parker names and model numbers are used for cross-reference identification only. Hydraulic Match is not affiliated with or endorsed by Parker.",
      },
    ],
    ctaTitle: "Request a D1VW review.",
    ctaText: "Send the complete code, coil label and hydraulic symbol.",
  },
  {
    slug: "alternatives/parker/pavc",
    title: "Parker PAVC Piston Pump Alternative Review",
    seoTitle: "Parker PAVC Pump Alternative Review",
    description:
      "PAVC piston pump alternative review covering displacement, pressure control, rotation, shaft, mounting flange, ports and application duty.",
    kicker: "VARIABLE VOLUME PUMP SERIES",
    intro:
      "PAVC pump selection requires more than matching displacement. Pressure-control configuration, drive details and installation geometry must be compared.",
    sections: [
      {
        title: "PAVC review record",
        table: {
          headers: ["Review group", "Information required", "Approval basis"],
          rows: [
            [
              "Hydraulic capacity",
              "Displacement, working pressure and speed",
              "Candidate operating range",
            ],
            [
              "Control",
              "Control type, setting range and response requirement",
              "Documented behavior and differences",
            ],
            [
              "Drive interface",
              "Rotation, shaft and flange",
              "Drawing or dimensions",
            ],
            [
              "Connections",
              "Main, drain and control ports",
              "Size, thread and orientation",
            ],
            [
              "Application",
              "Machine, duty, fluid and temperature",
              "Suitability review",
            ],
          ],
        },
      },
      {
        title: "Nameplate and installation photos",
        items: [
          "Nameplate straight-on and readable",
          "Shaft and mounting pilot",
          "Port side and hose arrangement",
          "Controller and adjustment points",
          "Overall pump installation",
        ],
      },
      {
        title: "First-order risk controls",
        items: [
          "Confirm the complete comparison before payment",
          "Agree critical dimension checks",
          "Protect shaft and ports during export packing",
          "Verify settings before commissioning",
          "Monitor pressure, temperature and noise during startup",
        ],
      },
      {
        title: "When a functional alternative may be considered",
        intro:
          "If no drop-in route is supportable, a different pump may be reviewed only when the customer can approve changes to mounting, piping, control or commissioning.",
      },
    ],
    ctaTitle: "Request a PAVC pump review.",
    ctaText:
      "Include the full model code, operating pressure, drive speed and installation photos.",
  },
  {
    slug: "resources/hydraulic-pump-sizing-flow-pressure-power",
    title: "Hydraulic Pump Sizing: Flow, Pressure and Power",
    seoTitle: "Hydraulic Pump Sizing: Flow, Pressure & Power",
    description:
      "Calculate hydraulic pump flow, actuator speed, input power and motor allowance with practical formulas, units, examples and replacement checks.",
    kicker: "ENGINEERING GUIDE · CALCULATIONS",
    intro:
      "Pump sizing starts with the work the system must perform. Flow determines actuator speed, pressure follows the load and input power must include real system efficiency.",
    published: "2026-07-25",
    modified: "2026-07-25",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Technical Review",
    sections: [
      {
        title: "Core sizing formulas",
        table: {
          headers: ["Question", "Metric formula", "Use"],
          rows: [
            [
              "Pump flow from displacement",
              "Q (L/min) = displacement (cc/rev) × speed (rpm) × volumetric efficiency ÷ 1000",
              "Estimate delivered flow",
            ],
            [
              "Cylinder extension speed",
              "v (m/s) = Q (L/min) ÷ [6 × piston area (cm²)]",
              "Check cycle speed",
            ],
            [
              "Hydraulic output power",
              "Pₕ (kW) = pressure (bar) × flow (L/min) ÷ 600",
              "Ideal hydraulic power",
            ],
            [
              "Estimated shaft input",
              "Pᵢ (kW) = Pₕ ÷ overall efficiency",
              "Size the driver with losses included",
            ],
          ],
        },
        note: "Use manufacturer performance data when available. A formula estimate does not replace the speed, pressure and control limits of the selected pump.",
      },
      {
        title: "Worked pump-flow example",
        intro:
          "A 45 cc/rev pump running at 1,450 rpm with estimated volumetric efficiency of 0.90 delivers approximately 58.7 L/min: 45 × 1,450 × 0.90 ÷ 1,000.",
      },
      {
        title: "Worked power example",
        intro:
          "At 210 bar and 58.7 L/min, ideal hydraulic power is about 20.5 kW. At 85% overall efficiency, estimated shaft input is about 24.2 kW before considering starting conditions and the motor service factor.",
      },
      {
        title: "What the simple calculation does not capture",
        items: [
          "Pump control and standby behavior",
          "Pressure losses through valves, filters and piping",
          "Fluid viscosity at startup and operating temperature",
          "Intermittent peak pressure versus continuous duty",
          "Prime-mover torque curve and acceleration",
          "Cooling capacity and heat rejection",
        ],
      },
      {
        title: "Replacement sizing checklist",
        items: [
          "Do not increase displacement without checking driver power and circuit flow limits",
          "Do not reduce displacement without checking required actuator speed",
          "Confirm maximum and minimum pump speed",
          "Check continuous and peak pressure separately",
          "Match open- or closed-circuit design and the complete control code",
          "Verify shaft, flange, rotation and ports after hydraulic sizing",
        ],
      },
      {
        title: "Information to put on the RFQ",
        items: [
          "Required flow or actuator cycle time",
          "Working and peak pressure",
          "Drive speed and available motor power",
          "Fluid and temperature range",
          "Duty cycle and machine application",
          "Original model code and installation drawings",
        ],
      },
    ],
  },
  {
    slug: "resources/hydraulic-pump-cavitation-suction-line",
    title: "Hydraulic Pump Cavitation and Suction-Line Checklist",
    seoTitle: "Hydraulic Pump Cavitation & Suction-Line Guide",
    description:
      "Diagnose hydraulic pump cavitation and suction problems using symptoms, inlet checks, viscosity, line sizing, contamination and startup precautions.",
    kicker: "TROUBLESHOOTING GUIDE · PUMPS",
    intro:
      "A replacement pump can fail again when the original problem is in the reservoir, suction line, fluid condition or startup procedure. Diagnose the inlet side before blaming the pump.",
    published: "2026-07-25",
    modified: "2026-07-25",
    readingTime: "9 min",
    reviewedBy: "Hydraulic Match Technical Review",
    sections: [
      {
        title: "Cavitation, aeration or mechanical noise?",
        table: {
          headers: ["Observation", "Possible cause", "Initial check"],
          rows: [
            [
              "High-pitched whine that rises with speed",
              "Restricted inlet or excessive vacuum",
              "Filter, hose, valve and fluid viscosity",
            ],
            [
              "Foamy or cloudy oil",
              "Air entering the suction side or poor deaeration",
              "Loose fittings, damaged hose and reservoir return",
            ],
            [
              "Knocking under load",
              "Cavitation, pressure ripple or internal damage",
              "Inlet condition, pressure and case drain",
            ],
            [
              "Slow response when cold",
              "Fluid too viscous or inlet path restricted",
              "Oil grade, temperature and suction loss",
            ],
            [
              "Hot pump and dark oil",
              "Internal leakage, excessive load or continuing cavitation",
              "Efficiency, pressure, cooling and contamination",
            ],
          ],
        },
      },
      {
        title: "Suction-side inspection sequence",
        items: [
          "Confirm oil level and reservoir breather condition",
          "Check fluid grade, viscosity and operating temperature",
          "Inspect the suction hose for collapse, softening or internal separation",
          "Open and verify every suction valve",
          "Check strainers and filters against the pump manufacturer’s guidance",
          "Inspect fittings, clamps and shaft-seal areas for air entry",
          "Confirm that the inlet is not exposed to return-flow turbulence",
        ],
      },
      {
        title: "Measure instead of guessing",
        intro:
          "Record inlet pressure or vacuum at the pump under cold start, normal temperature and peak demand. Compare the result with the pump manufacturer’s permitted inlet conditions. Do not copy a universal vacuum limit from an unrelated pump.",
      },
      {
        title: "Case-drain evidence for piston pumps",
        items: [
          "Measure case-drain flow only with the correct procedure and safe equipment",
          "Confirm drain-line size and back pressure",
          "Check that the drain reaches the reservoir as required",
          "Use trend changes with temperature and load as diagnostic evidence",
          "Do not treat one number as proof without the model’s test criteria",
        ],
      },
      {
        title: "Before installing a replacement",
        items: [
          "Find and correct the probable failure cause",
          "Flush or clean the circuit to the agreed contamination target",
          "Pre-fill or prime where the manufacturer requires it",
          "Confirm rotation before startup",
          "Use a controlled low-load startup and monitor noise, pressure and temperature",
          "Retain oil, filter and inspection evidence for a warranty review",
        ],
      },
    ],
  },
  {
    slug: "resources/hydraulic-valve-pressure-drop-heat",
    title: "Hydraulic Valve Pressure Drop and Heat",
    seoTitle: "Hydraulic Valve Pressure Drop & Heat Guide",
    description:
      "Estimate hydraulic valve pressure-drop power loss, understand flow-rating limits and compare directional or control valves without relying on size alone.",
    kicker: "ENGINEERING GUIDE · VALVES",
    intro:
      "A valve can fit the mounting pattern and still create excessive pressure loss or heat. Flow rating, spool path, fluid viscosity and duty cycle must be considered together.",
    published: "2026-07-25",
    modified: "2026-07-25",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Technical Review",
    sections: [
      {
        title: "Pressure loss becomes heat",
        intro:
          "Approximate hydraulic power converted to heat is P (kW) = pressure drop (bar) × flow (L/min) ÷ 600. A 12 bar pressure drop at 80 L/min represents about 1.6 kW of heat while that flow path is active.",
      },
      {
        title: "Why catalog flow is not a universal limit",
        table: {
          headers: [
            "Factor",
            "Effect on pressure drop or operation",
            "What to compare",
          ],
          rows: [
            [
              "Spool path",
              "Different metering paths have different losses",
              "Curve for the actual spool and flow path",
            ],
            [
              "Flow rate",
              "Loss normally increases rapidly as flow rises",
              "Expected continuous and peak flow",
            ],
            [
              "Viscosity and temperature",
              "Cold or high-viscosity fluid changes losses and response",
              "Fluid grade and temperature range",
            ],
            [
              "Return or tank pressure",
              "Can affect seals, actuator behavior and pilot functions",
              "Permissible port pressure",
            ],
            [
              "Duty cycle",
              "Determines average heat generation",
              "Time at each flow and pressure condition",
            ],
          ],
        },
      },
      {
        title: "Directional-valve comparison checklist",
        items: [
          "Mounting standard and nominal size",
          "Exact spool symbol and center condition",
          "P-to-A, P-to-B, A-to-T and B-to-T flow paths",
          "Pressure-drop curves at relevant viscosity",
          "Working, peak and tank-port pressure limits",
          "Internal and external leakage expectations",
          "Solenoid voltage, power, duty and connector",
        ],
      },
      {
        title: "Warning signs after a replacement",
        items: [
          "Unexpected oil-temperature rise",
          "Slower cylinder or motor speed",
          "Higher upstream pressure for the same load",
          "Unstable motion or increased shock",
          "Coil overheating or incomplete shifting",
          "Noise across a throttled flow path",
        ],
      },
      {
        title: "Data required for a safer quotation",
        items: [
          "Complete original code and spool symbol",
          "System flow and working pressure",
          "Fluid and temperature range",
          "Cycle timing and time in neutral",
          "Expected tank pressure",
          "Available cooling capacity when heat is already a concern",
        ],
      },
    ],
  },
  {
    slug: "resources/hydraulic-component-pre-shipment-inspection-checklist",
    title: "Hydraulic Component Pre-Shipment Inspection Checklist",
    seoTitle: "Hydraulic Component Pre-Shipment Checklist",
    description:
      "A practical inspection checklist for hydraulic valves, pumps and cylinders covering identity, dimensions, interfaces, documents, photos and export packing.",
    kicker: "PROCUREMENT GUIDE · QUALITY EVIDENCE",
    intro:
      "A useful inspection record is linked to the exact order and agreed requirements. Generic factory photographs or an unrelated test report do not prove that the shipped component is correct.",
    published: "2026-07-25",
    modified: "2026-07-25",
    readingTime: "6 min",
    reviewedBy: "Hydraulic Match Technical Review",
    sections: [
      {
        title: "Universal identity checks",
        items: [
          "Purchase-order line, original reference and proposed model",
          "Quantity and individual package count",
          "Nameplate, markings and readable model code",
          "Supplier or batch traceability when available",
          "Visible damage, corrosion, contamination and finish",
        ],
      },
      {
        title: "Product-specific checks",
        table: {
          headers: [
            "Product",
            "Critical visible or measurable checks",
            "Possible evidence",
          ],
          rows: [
            [
              "Directional valve",
              "Spool code, voltage, connector, mounting pattern and manual override",
              "Nameplate, connector and mounting-face photos",
            ],
            [
              "Hydraulic pump",
              "Rotation, shaft, flange, ports, controller and protection",
              "Dimension sheet and multi-angle photos",
            ],
            [
              "Hydraulic cylinder",
              "Bore, rod, stroke, closed length, mounts and ports",
              "Measurement photos and drawing record",
            ],
            [
              "Pump parts",
              "Part identity, key dimensions, mating surfaces and kit contents",
              "Labeled layout and measurement photos",
            ],
          ],
        },
      },
      {
        title: "Functional or pressure testing",
        intro:
          "Agree the method, conditions, acceptance criteria and record format before the order. State clearly when a supplier cannot provide the requested test. A test label without conditions is weak evidence.",
      },
      {
        title: "Document check",
        items: [
          "Commercial invoice and packing list match the order",
          "Quotation differences and customer approvals are retained",
          "Requested drawing, inspection or test records are attached",
          "Country-of-origin or other documents are confirmed before shipment",
          "Shipping marks and consignee information are correct",
        ],
      },
      {
        title: "Export packing release",
        items: [
          "Ports and sealing faces are protected",
          "Shafts and rods cannot strike the packaging",
          "Moisture and corrosion protection suit the route",
          "Heavy units are restrained inside the case",
          "Package weight and lifting needs are marked where required",
          "Final closed-package photos are retained on request",
        ],
      },
      {
        title: "Recommended photo set",
        items: [
          "Full product and nameplate",
          "Each connection or interface side",
          "Critical dimensions with readable tools",
          "Included accessories and documents",
          "Internal protection before closing",
          "Closed package, label and shipping mark",
        ],
      },
    ],
  },
  {
    slug: "resources/original-vs-aftermarket-hydraulic-sourcing-routes",
    title: "Original vs Aftermarket Hydraulic Sourcing Routes",
    seoTitle: "Original vs Aftermarket Hydraulic Parts",
    description:
      "Compare original, independent aftermarket and functional-alternative hydraulic sourcing routes by evidence, risk, lead time and approval needs.",
    kicker: "PROCUREMENT GUIDE · DUAL-ROUTE SOURCING",
    intro:
      "A buyer may need an original product for one line and an independent alternative for another. The correct route depends on the application, evidence, urgency and acceptable change—not a blanket preference.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Three sourcing routes",
        table: {
          headers: [
            "Route",
            "What must be documented",
            "Typical approval need",
          ],
          rows: [
            [
              "Original product",
              "Manufacturer reference, traceability, condition and supply route",
              "Commercial and authenticity review",
            ],
            [
              "Direct-fit independent product",
              "Complete interface and performance comparison with stated evidence",
              "Engineering confirmation and controlled commissioning",
            ],
            [
              "Functional alternative",
              "Required system, mounting, electrical or control changes",
              "Formal engineering change approval",
            ],
          ],
        },
      },
      {
        title: "When an original route may be preferred",
        items: [
          "Safety-critical or regulated equipment requires the original specification",
          "The machine builder controls the approved-parts list",
          "Electronic integration or proprietary calibration cannot be verified",
          "Downtime risk outweighs the potential commercial saving",
          "Traceability or manufacturer warranty is contractually required",
        ],
      },
      {
        title: "When an aftermarket route may be considered",
        items: [
          "The complete original code and interfaces are available",
          "The application limits and duty cycle are known",
          "The proposed supplier can provide relevant technical and inspection evidence",
          "Known differences can be accepted before purchase",
          "A sample or controlled installation can be used for higher-risk items",
        ],
      },
      {
        title: "What a dual-route quotation should show",
        items: [
          "Original reference and requested quantity",
          "Route label: original, independent direct-fit or functional alternative",
          "Evidence available and evidence still missing",
          "Known differences and customer confirmations",
          "MOQ, lead time, inspection, packing and warranty by route",
        ],
      },
      {
        title: "Claims to reject",
        items: [
          "“OEM quality” without a defined manufacturer or evidence",
          "“100% compatible” based only on visual similarity",
          "“Original” without traceability or a clear supply route",
          "A universal warranty statement that conflicts with the quotation",
          "A price comparison that hides different scope or included accessories",
        ],
      },
    ],
    ctaTitle: "Need original and alternative options on one RFQ?",
    ctaText:
      "Mark the required route by line item, or ask us to separate the available routes and their evidence in the quotation.",
  },
  {
    slug: "resources/obsolete-hard-to-find-hydraulic-part-sourcing",
    title: "How to Source an Obsolete or Hard-to-Find Hydraulic Part",
    seoTitle: "Obsolete Hydraulic Part Sourcing Guide",
    description:
      "A practical workflow for identifying discontinued hydraulic valves, pumps, motors and service parts from legacy codes, photos and machine evidence.",
    kicker: "IDENTIFICATION GUIDE · LEGACY COMPONENTS",
    intro:
      "An obsolete code is not solved by searching the short series name. The job is to reconstruct the installed function and interfaces, then decide whether an original surplus, service part, direct-fit product or engineered change is supportable.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "9 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Preserve the original evidence",
        items: [
          "Photograph the complete nameplate before cleaning or dismantling",
          "Record every line of the code, including faint suffixes",
          "Keep the machine model, serial range and hydraulic schematic",
          "Photograph connectors, ports, mounting faces, shafts and control hardware",
          "Retain the failed unit until the replacement route is approved",
        ],
      },
      {
        title: "Separate identity from required function",
        table: {
          headers: ["Evidence layer", "Question it answers", "Common failure"],
          rows: [
            [
              "Original code",
              "What was supplied originally?",
              "Suffix omitted or code transcribed incorrectly",
            ],
            [
              "Installed interfaces",
              "What must physically and electrically connect?",
              "Port, shaft or connector assumed from family name",
            ],
            [
              "Application conditions",
              "What must the unit do in this machine?",
              "Pressure, flow, speed or control behavior missing",
            ],
            [
              "Change tolerance",
              "Can the machine accept modification?",
              "Functional alternative treated as direct fit",
            ],
          ],
        },
      },
      {
        title: "Possible supply outcomes",
        items: [
          "Documented original-product route",
          "Unused or traceable surplus route with condition review",
          "Independent product after complete interface review",
          "Repair kit or component-level restoration",
          "Functional alternative requiring approved changes",
          "No-quote decision when evidence or safety margin is insufficient",
        ],
      },
      {
        title: "Legacy-code risk controls",
        items: [
          "Compare catalog generation and design revision",
          "Do not assume supersession means direct interchangeability",
          "Check old and new electrical standards",
          "Verify seals against current fluid and temperature",
          "Use sample installation for high-value or uncertain configurations",
        ],
      },
      {
        title: "RFQ evidence checklist",
        items: [
          "Brand, complete code and any order number",
          "Machine make, model, year and serial range",
          "Failure symptom and urgency",
          "Nameplate and six-side product photographs",
          "Pressure, flow, voltage, speed or displacement",
          "Whether installation changes are permitted",
        ],
      },
    ],
    ctaTitle: "Have only an old nameplate or partial code?",
    ctaText:
      "Upload all visible markings and installation photos. We will identify the missing evidence before treating any match as quote-ready.",
  },
  {
    slug: "resources/how-to-identify-a-hydraulic-motor",
    title: "How to Identify a Hydraulic Motor for Replacement",
    seoTitle: "Identify a Hydraulic Motor for Replacement",
    description:
      "Identify orbital, axial piston, radial piston, swing and travel motors using the model code, displacement, shaft, flange, ports, brake and machine duty.",
    kicker: "IDENTIFICATION GUIDE · HYDRAULIC MOTORS",
    intro:
      "Two motors with the same nominal displacement can differ in pressure capability, speed, shaft load, brake, flushing, porting and mounting. Record the complete installed configuration before requesting a replacement.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "First identify the motor type",
        table: {
          headers: ["Motor type", "Useful visible clues", "Extra evidence"],
          rows: [
            [
              "Orbital motor",
              "Compact gerotor housing, shaft and side or rear ports",
              "Displacement, shaft, flange and drain requirement",
            ],
            [
              "Axial piston motor",
              "Piston-unit housing, control or displacement hardware",
              "Fixed or variable function, case drain and control",
            ],
            [
              "Radial piston motor",
              "Large low-speed high-torque housing or wheel interface",
              "Cam or displacement configuration, brake and mounting",
            ],
            [
              "Swing or travel motor",
              "Motor, brake and reduction assembly",
              "Machine model, reduction ratio and valve configuration",
            ],
          ],
        },
      },
      {
        title: "Mechanical interfaces",
        items: [
          "Shaft form, spline count, diameter and usable length",
          "Mounting flange, pilot and bolt pattern",
          "Port thread, flange type, position and orientation",
          "Case-drain and flushing connections",
          "Brake release and reduction interface where applicable",
        ],
      },
      {
        title: "Operating requirements",
        items: [
          "Continuous and peak pressure",
          "Required torque and starting behavior",
          "Continuous and maximum speed",
          "Direction of rotation and reversible duty",
          "Fluid, temperature and contamination level",
          "Radial or axial shaft loads",
        ],
      },
      {
        title: "Control and safety checks",
        items: [
          "Fixed or variable displacement",
          "Hydraulic or electronic control reference",
          "Overcenter, brake or anti-cavitation valve function",
          "Fail-safe behavior and stopping requirement",
          "Machine-side speed sensing or feedback",
        ],
      },
      {
        title: "Minimum RFQ package",
        items: [
          "Complete motor nameplate",
          "Installed and removed-unit photos",
          "Machine make and model",
          "Shaft, flange and port measurements",
          "Pressure, speed, torque or machine performance requirement",
          "Failure reason and acceptable modification level",
        ],
      },
    ],
    ctaTitle: "Need help identifying a hydraulic motor?",
    ctaText:
      "Send the nameplate, shaft, flange, ports and machine information. We will separate confirmed details from the open checks.",
  },
  {
    slug: "resources/how-to-identify-hydraulic-seal-kits-service-parts",
    title: "How to Identify Hydraulic Seal Kits and Service Parts",
    seoTitle: "Identify Hydraulic Seal Kits & Service Parts",
    description:
      "Identify hydraulic pump, motor, valve and cylinder seal kits or service parts from the complete parent-unit code, material and kit scope.",
    kicker: "IDENTIFICATION GUIDE · REPAIR PARTS",
    intro:
      "A seal that appears to have the same dimensions may use a different material, profile or pressure duty. Start with the complete parent-unit identity and confirm what the kit must contain.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Identify the parent unit first",
        items: [
          "Manufacturer and complete pump, motor, valve or cylinder code",
          "Design series, revision and serial or date code",
          "Original service-part number when available",
          "Machine and operating fluid",
          "Previous repair history and failure symptom",
        ],
      },
      {
        title: "Define the requested scope",
        table: {
          headers: ["Request", "Evidence needed", "Typical ambiguity"],
          rows: [
            [
              "Complete seal kit",
              "Parent code and expected kit contents",
              "External-only versus full overhaul kit",
            ],
            [
              "Individual seal",
              "Dimensions, profile, material and location",
              "Similar dimensions but different compound",
            ],
            [
              "Rotating group",
              "Pump or motor code and matched-part requirement",
              "Mixed unmatched wear components",
            ],
            [
              "Vane cartridge",
              "Pump family, displacement, rotation and cover",
              "Cartridge fits physically but port timing differs",
            ],
          ],
        },
      },
      {
        title: "Material and fluid checks",
        items: [
          "Hydraulic fluid type and additives",
          "Minimum and maximum temperature",
          "Pressure and duty cycle",
          "Compatibility with water-glycol, phosphate ester or biodegradable fluids where applicable",
          "Storage age and packaging condition for elastomer parts",
        ],
      },
      {
        title: "Inspection before shipment",
        items: [
          "Part or kit identity linked to the RFQ line",
          "Contents laid out and counted when requested",
          "Critical dimensions or markings photographed",
          "Sealing surfaces protected from dust and damage",
          "Material declaration supplied only when genuinely available",
        ],
      },
      {
        title: "Limits of a repair-parts quotation",
        intro:
          "A correctly identified kit does not prove that the complete unit is economically repairable. Housing, shaft, bearing, valve plate, bore and contamination damage may require additional parts or replacement of the assembly.",
      },
    ],
    ctaTitle: "Send the parent-unit code before ordering a kit.",
    ctaText:
      "Include the nameplate, dismantled-part photos, fluid and required kit scope to reduce incomplete or incorrect supply.",
  },
  {
    slug: "trust",
    title: "Hydraulic Match Trust and Verification Center",
    seoTitle: "Trust, Quality & Verification | Hydraulic Match",
    description:
      "Review Hydraulic Match business transparency, compatibility process, supplier checks, inspection evidence, shipping, warranty and trademark policies.",
    kicker: "VERIFY BEFORE YOU BUY",
    intro:
      "This center brings together the policies and evidence a buyer should review before approving a hydraulic component order. Claims are separated from order-specific facts.",
    sections: [
      {
        title: "Business and payment verification",
        items: [
          "The contracting entity and beneficiary are stated on formal commercial documents",
          "Buyers should verify beneficiary details before remittance",
          "Website branding is not a substitute for the quotation and order record",
          "Incoterm, payment terms and destination are confirmed per order",
        ],
      },
      {
        title: "Compatibility evidence",
        items: [
          "Original reference and complete model code",
          "Parameter comparison and known differences",
          "Open confirmation items and risk status",
          "Customer engineering approval where required",
          "Sample or controlled commissioning for higher-risk replacements",
        ],
      },
      {
        title: "Quality and shipment evidence",
        items: [
          "Order-linked product and nameplate photos",
          "Critical dimensions or functional checks when agreed",
          "Model, quantity and packing verification",
          "Commercial invoice, packing list and shipment record",
          "Warranty scope stated on the quotation",
        ],
      },
      {
        title: "What is not presented as proof",
        items: [
          "Unrelated factory photographs",
          "Certificates not linked to the supplying entity or product",
          "Generic test reports presented as order records",
          "Invented stock, shipment volumes or customer reviews",
          "A family name presented as guaranteed interchangeability",
        ],
      },
      {
        title: "Useful policy pages",
        items: [
          "About Hydraulic Match and business identity",
          "Matching process and risk grades",
          "Quality and pre-shipment verification",
          "Shipping and export support",
          "Warranty and after-sales review",
          "Technical editorial policy",
        ],
      },
    ],
    ctaTitle: "Need a specific document before ordering?",
    ctaText:
      "List the identity, inspection, test, packing or commercial evidence required in your RFQ.",
  },
  {
    slug: "editorial-policy",
    title: "Technical Content and Editorial Policy",
    seoTitle: "Technical Content & Editorial Policy",
    description:
      "How Hydraulic Match creates, reviews, labels and updates hydraulic model-code, replacement, calculation and procurement content.",
    kicker: "WHO · HOW · WHY",
    intro:
      "Our technical content is written to help buyers prepare a safer RFQ and review a proposed sourcing route. It is not a substitute for the original manufacturer’s data or qualified system engineering.",
    sections: [
      {
        title: "Who creates and reviews the content",
        intro:
          "Pages are prepared and reviewed under the Hydraulic Match Technical Review label. We use an organization label until a named contributor’s identity and credentials can be published and independently verified.",
      },
      {
        title: "How technical pages are prepared",
        items: [
          "Define the user task and the decision the page must support",
          "Separate series-level identification from model-level compatibility",
          "Use engineering formulas with units and stated assumptions",
          "Request original manufacturer or supplier data for order decisions",
          "Remove unsupported stock, certification, test and performance claims",
          "Record publication and substantive update dates on technical guides",
        ],
      },
      {
        title: "Source and trademark handling",
        items: [
          "Manufacturer names and model numbers are used for identification",
          "Original documents remain the authority for original product limits",
          "No affiliation or authorization is implied",
          "Supplier data is checked against the exact proposed option when available",
          "A cross-reference is treated as a review lead, not automatic proof",
        ],
      },
      {
        title: "Corrections and updates",
        intro:
          "When a technical error or material ambiguity is identified, the page should be corrected and its modified date updated. Commercial availability and compatibility are confirmed again for every quotation.",
      },
      {
        title: "Use of generated visuals",
        intro:
          "Illustrative images are labeled by context and are not presented as photographs of a specific factory, inspection or customer order. Order evidence must come from the actual supplier and shipment.",
      },
      {
        title: "Why the content exists",
        intro:
          "The purpose is to reduce incomplete inquiries, make technical differences visible and help distributors, repair companies and MRO teams decide what evidence is needed before purchase.",
      },
    ],
  },
  {
    slug: "shipping",
    title: "Packaging and Shipping Process",
    seoTitle: "Hydraulic Packaging & Shipping Process",
    description:
      "Order-specific protective packaging, package identification, release evidence, export documents and shipping coordination for hydraulic components.",
    kicker: "FROM RELEASED UNIT TO IDENTIFIED PACKAGE",
    intro:
      "Packaging starts with the actual product risk, not a generic carton promise. Protection, labels, documents and transport are confirmed against the released units, packed dimensions, urgency and destination.",
    sections: [
      {
        title: "Packaging is selected by product risk",
        table: {
          headers: [
            "Product or risk",
            "Protection to define",
            "Release evidence when agreed",
          ],
          rows: [
            [
              "Valves and electrical controls",
              "Port caps, connector protection, moisture barrier and unit separation",
              "Model label, capped interfaces, quantity and packed-unit photos",
            ],
            [
              "Pumps and motors",
              "Shaft restraint, port sealing, corrosion protection and impact control",
              "Shaft and port condition, protection method and package identity",
            ],
            [
              "Cylinders and heavy assemblies",
              "Rod protection, stable supports, lifting points and reinforced case",
              "Rod condition, restraint, case construction, weight and lifting marks",
            ],
            [
              "Seal kits and small service parts",
              "Part segregation, moisture protection and readable line-item labels",
              "Kit identity, quantity, inner-pack separation and outer marks",
            ],
          ],
        },
        note: "These are planning examples, not a promise that every order includes every method. The accepted quotation defines the actual packing scope.",
      },
      {
        title: "Transport options",
        items: [
          "Express courier for suitable small parts",
          "Air freight for urgent or heavier shipments",
          "Sea freight for cylinders, larger orders and consolidated cargo",
          "Customer-nominated forwarder support",
        ],
      },
      {
        title: "Export packing",
        items: [
          "Protection selected for product weight and surface",
          "Moisture and corrosion protection when required",
          "Reinforced cartons or wooden cases as applicable",
          "Packing photos on request before shipment",
        ],
      },
      {
        title: "Logistics facts visible on the three source sites",
        table: {
          headers: [
            "Source",
            "Public logistics statement",
            "What remains open",
          ],
          rows: [
            [
              "Rexroth Replacements",
              "Public contact page states items are quoted FOB its warehouse unless noted otherwise",
              "Actual warehouse, package, carrier, export route and Hydraulic Match responsibility",
            ],
            [
              "RestoPower",
              "Public resource pages describe dispatch from its Michigan facility",
              "Exact stock, package protection and international route for the submitted order",
            ],
            [
              "Hydraulic Pump Supply",
              "Public pages describe global delivery and China-based trading support",
              "Supplier location, packed dimensions, export entity, Incoterm and carrier quote",
            ],
          ],
        },
        note: "A source-site shipping statement is not copied into the Hydraulic Match quotation as a fixed transit or packing commitment.",
      },
      {
        title: "Documents",
        items: [
          "Commercial invoice",
          "Packing list",
          "Shipment tracking or transport document",
          "Additional documentation confirmed before order placement",
        ],
      },
      {
        title: "Information required for a freight review",
        items: [
          "Final packed quantity, gross weight and package dimensions",
          "Destination country, city or named airport/port",
          "Required delivery window and preferred transport mode",
          "Incoterm, consignee requirements and nominated forwarder details",
          "Any wood-packing, labeling, insurance or document requirement",
        ],
        note: "A product quotation without final packing data is not a fixed freight commitment.",
      },
      {
        title: "Shipping quote boundaries",
        table: {
          headers: ["Item", "Confirmed when", "Reason it may change"],
          rows: [
            [
              "Freight cost",
              "Carrier quote, chargeable weight, route and validity are stated",
              "Fuel surcharge, capacity, remote-area fee or packed dimensions",
            ],
            [
              "Transit estimate",
              "The carrier and service level are selected",
              "Customs, weather, inspections, congestion or connection delays",
            ],
            [
              "Import charges",
              "The buyer or broker confirms local treatment",
              "Classification, destination rules and customs valuation",
            ],
            [
              "Delivery responsibility",
              "The written Incoterm and named place are agreed",
              "A change of forwarder, destination or handover point",
            ],
          ],
        },
        note: "Hydraulic Match coordinates the agreed export steps but does not represent a carrier, customs authority or destination-country broker.",
      },
      {
        title: "Release record before dispatch",
        intro:
          "Shipment release should connect the commercial order to the actual packages, rather than relying on a tracking number alone.",
        items: [
          "Order and line-item quantities matched to the packing list",
          "Package count, marks, weight and dimensions recorded",
          "Packing and product photos retained when agreed",
          "Transport document or tracking reference linked to the shipment",
          "Open document or consignee issues closed before handover",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/inspection-process/",
        title: "Inspection process",
        text: "See what must pass or be approved before packing release.",
      },
      {
        href: "/quality/",
        title: "Quality control",
        text: "Define which visual, dimensional or functional evidence is required.",
      },
      {
        href: "/manufacturing-partners/",
        title: "Manufacturing partner review",
        text: "Understand who is responsible for supply and process evidence.",
      },
    ],
  },
  {
    slug: "warranty",
    title: "Hydraulic Component Warranty Terms",
    seoTitle: "Hydraulic Component Warranty Terms",
    description:
      "Order-specific hydraulic component warranty scope, claim evidence, exclusions and possible remedies as stated in the accepted quotation.",
    kicker: "ORDER-SPECIFIC WRITTEN TERMS",
    intro:
      "Warranty coverage exists only when the accepted quotation or warranty document states the eligible item, duration, start point, exclusions, claim process and available remedies.",
    excludeFromIndex: true,
    sections: [
      {
        title: "Coverage period and response",
        table: {
          headers: ["Term", "Commitment"],
          rows: [
            [
              "Warranty period",
              "The duration stated in the accepted quotation",
            ],
            [
              "Initial response",
              "Acknowledgement and review timing stated in the applicable order terms",
            ],
            [
              "Available remedy",
              "Technical support, repair, replacement or credit based on confirmed failure cause",
            ],
            [
              "Covered products",
              "Eligible hydraulic valves, pumps, cylinders and parts supplied under the confirmed quotation",
            ],
          ],
        },
      },
      {
        title: "Evidence required for a claim",
        items: [
          "Invoice, model, serial or batch details",
          "Installation and commissioning record",
          "Operating pressure, speed, temperature, fluid and filtration information",
          "Failure photos, video and symptom description",
          "Product retained without unauthorized disassembly",
          "Return for inspection when reasonably required",
        ],
      },
      {
        title: "Standard exclusions",
        items: [
          "Incorrect model selection or unapproved application changes",
          "Improper installation, commissioning, contamination or fluid condition",
          "Operation outside confirmed hydraulic, mechanical, thermal or electrical limits",
          "Unauthorized disassembly, modification or repair",
          "Normal wear unless a manufacturing defect is confirmed",
          "Freight, labor, downtime and consequential losses unless agreed in writing",
        ],
      },
      {
        title: "Compatibility and warranty scope",
        intro:
          "Any compatibility wording and warranty apply only to the exact offered item, application conditions and acceptance scope recorded with the quotation. A public model or series page does not create coverage.",
      },
    ],
  },
  {
    slug: "trademark-disclaimer",
    title: "Trademark and Compatibility Disclaimer",
    seoTitle: "Trademark and Compatibility Disclaimer",
    description:
      "Independent sourcing, manufacturer-name use and compatibility confirmation policy for Hydraulic Match.",
    kicker: "INDEPENDENT SOURCING SERVICE",
    intro:
      "Hydraulic Match is an independent sourcing service. It is not affiliated with, authorized by or endorsed by the manufacturers referenced on this website.",
    sections: [
      {
        title: "Use of manufacturer names",
        intro:
          "All manufacturer names, trademarks, series names, model numbers and part numbers are used for identification and cross-reference purposes only.",
      },
      {
        title: "Product origin",
        intro:
          "Unless a quotation explicitly identifies an original product, products supplied are independent aftermarket or alternative products and are not manufactured by the referenced original manufacturer.",
      },
      {
        title: "Compatibility",
        intro:
          "Compatibility must be reviewed for each complete model code and application before purchase and installation. Similar appearance, a shared series name or a cross-reference statement does not by itself prove direct interchangeability.",
      },
      {
        title: "Customer responsibility",
        intro:
          "The customer is responsible for final engineering approval, safe installation, commissioning and compliance with applicable equipment and safety requirements.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-pressure-reducing-valve-adjustment",
    title: "Hydraulic Pressure Reducing Valve Adjustment Guide",
    seoTitle: "Hydraulic Pressure Reducing Valve Adjustment",
    description:
      "A safe commissioning workflow for adjusting a hydraulic pressure reducing valve, checking downstream pressure and diagnosing unstable settings.",
    kicker: "PRESSURE CONTROL VALVE GUIDE",
    intro:
      "A pressure reducing valve controls pressure in a downstream branch. Adjustment should be made against the circuit diagram and manufacturer procedure with a verified gauge—not by counting screw turns.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "6 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Before changing the setting",
        items: [
          "Confirm the valve is a reducing valve and identify the controlled port",
          "Review the circuit, valve model, adjustment range and maximum ratings",
          "Install a calibrated gauge on the downstream branch",
          "Bring oil temperature and supply pressure into the normal operating range",
          "Apply the machine lockout and commissioning procedure",
        ],
      },
      {
        title: "Controlled adjustment sequence",
        items: [
          "Back off the adjustment only as directed by the valve documentation",
          "Start at low system demand and observe upstream and downstream gauges",
          "Increase the setting gradually while monitoring the controlled branch",
          "Cycle the actuator and verify pressure under both static and flowing conditions",
          "Lock the adjuster and record the final setting and test conditions",
        ],
      },
      {
        title: "When adjustment does not hold",
        items: [
          "Check upstream pressure margin and return-line backpressure",
          "Inspect pilot or drain routing, contamination and sticking components",
          "Confirm flow is within the valve range",
          "Check whether another relief or reducing valve is influencing the branch",
          "Replace or service the valve only after confirming the complete model code",
        ],
      },
      {
        title: "Settings, symptoms and likely causes",
        table: {
          headers: ["Observed behaviour", "Likely causes", "Check before changing the valve"],
          rows: [
            [
              "Downstream pressure rises with demand",
              "Low upstream margin, incorrect drain, or internal leakage",
              "Supply pressure, drain line and pilot connection",
            ],
            [
              "Downstream pressure drifts over time",
              "Temperature-sensitive viscosity, contamination, or sticking spool",
              "Oil temperature, filter condition and valve cleanliness",
            ],
            [
              "Pressure cannot be set within range",
              "Wrong valve family, damaged seat, or wrong spring",
              "Complete model code, rating and documented adjustment range",
            ],
          ],
        },
      },
      {
        title: "Record kept after commissioning",
        items: [
          "Complete valve model code and serial or order reference",
          "Final setting, gauge position and oil temperature",
          "Supply and downstream pressure under static and flowing conditions",
          "Any circuit changes or differences from the original drawing",
          "The person and date responsible for the adjustment",
        ],
      },
    ],
    ctaTitle: "Need a pressure-control valve replacement?",
    ctaText:
      "Send the complete valve code, circuit function, setting range, pressure, flow, mounting and destination for a matched quotation.",
  },
  {
    slug: "resources/hydraulic-system-schematic-diagram-guide",
    title: "How to Read a Hydraulic System Schematic Diagram",
    seoTitle: "Hydraulic System Schematic Guide",
    description:
      "Learn how to trace a hydraulic circuit diagram from reservoir and pump through pressure, directional and flow controls to the actuator and return line.",
    kicker: "HYDRAULIC CIRCUIT FUNDAMENTALS",
    intro:
      "A hydraulic schematic shows function and connections rather than physical layout. Read it by tracing energy and flow paths through operating states, then connect each symbol to the actual component model.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Start with the power path",
        items: [
          "Locate the reservoir, suction line, prime mover and hydraulic pump",
          "Identify the main pressure line, relief path and pressure measurement points",
          "Trace the return line through filters, coolers and the reservoir",
          "Note separate case-drain, pilot and load-sense lines",
        ],
      },
      {
        title: "Read the control states",
        items: [
          "Directional valve boxes represent available spool positions",
          "The normal position is determined by springs, detents and actuators",
          "Pressure valves respond to pressure at their pilot connection",
          "Flow-control symbols show restriction, compensation and check-valve bypass paths",
          "Dashed lines usually indicate pilot, control or drain connections",
        ],
      },
      {
        title: "Use the diagram for replacement sourcing",
        items: [
          "Confirm component function before searching by appearance",
          "Pair each schematic tag with its complete model code and nameplate",
          "Record pressure, flow, displacement, voltage and operating state",
          "Compare mounting, ports and external pilot or drain requirements",
          "Treat any unresolved symbol or connection as an open compatibility point",
        ],
      },
      {
        title: "Symbols you will see in most circuits",
        table: {
          headers: ["Symbol group", "What it tells you", "What to verify on the machine"],
          rows: [
            [
              "Pump and motor circles",
              "Fixed or variable displacement and flow direction",
              "Model code, rotation, mounting and shaft data",
            ],
            [
              "Directional valve boxes",
              "Number of positions and the flow paths in each",
              "Spool symbol, voltage, connector and manual override",
            ],
            [
              "Pressure-control symbols",
              "Relief, reducing, sequence or unloading function",
              "Set pressure, pilot source and adjustment location",
            ],
            [
              "Line types",
              "Main flow, pilot/control, drain and enclosure boundaries",
              "Actual port labels and external pilot or drain plumbing",
            ],
            [
              "Reservoir, filter, cooler and accumulator",
              "Support functions and cleanliness path",
              "Element rating, accumulator gas precharge and connections",
            ],
          ],
        },
      },
      {
        title: "A repeatable reading order",
        items: [
          "Identify every major component tag and its manufacturer reference",
          "Trace the neutral or de-energized state first",
          "Trace each energized or shifted state and note which components move",
          "List every pressure, flow, pilot and drain connection the component needs",
          "Compare the schematic claim against the nameplate and installed plumbing",
          "Keep the circuit tag alongside the RFQ so each item stays traceable",
        ],
      },
    ],
    ctaTitle: "Turn a circuit reference into a component RFQ.",
    ctaText:
      "Send the schematic, component tag, complete model code, machine function and photos so the required pump, motor or valve can be reviewed.",
  },
  {
    slug: "resources/hydraulic-fluid-freezing-point-and-cold-start",
    title: "Hydraulic Fluid Freezing Point and Cold-Start Limits",
    seoTitle: "Hydraulic Fluid Cold-Start Guide",
    description:
      "Understand why hydraulic oil usually becomes too viscous before it freezes, and how viscosity, pour point and component limits affect cold starts.",
    kicker: "LOW-TEMPERATURE HYDRAULICS",
    intro:
      "For most hydraulic systems, the practical cold limit is reached when viscosity becomes too high for safe pump inlet flow and lubrication—not when the fluid becomes a solid block.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "6 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Terms that are often confused",
        items: [
          "Pour point is a laboratory indicator of the lowest temperature at which the oil still moves under the test method",
          "Viscosity controls resistance to flow and changes sharply with temperature",
          "Cloud point concerns wax formation in applicable mineral oils",
          "The pump manufacturer minimum starting viscosity and fluid datasheet are the governing references",
        ],
      },
      {
        title: "Cold-start risks",
        items: [
          "Pump inlet vacuum, cavitation and delayed lubrication",
          "Filter bypass or media damage from excessive pressure differential",
          "Slow actuator response and unstable valve operation",
          "Seal damage and leakage during rapid pressure rise",
          "Motor or coupling overload caused by high starting torque",
        ],
      },
      {
        title: "Practical controls",
        items: [
          "Select fluid grade from the full ambient and operating temperature range",
          "Use reservoir or line heating where the verified start limit can be exceeded",
          "Warm the system at low pressure and low speed under an approved procedure",
          "Monitor oil temperature, inlet conditions and filter differential pressure",
          "Confirm seal and component compatibility before changing fluid chemistry",
        ],
      },
      {
        title: "What the fluid data sheet actually gives you",
        table: {
          headers: ["Data sheet value", "What it does", "How to use it"],
          rows: [
            [
              "Kinematic viscosity grades",
              "Describes resistance to flow at reference temperatures",
              "Estimate whether inlet flow and lubrication are achievable at ambient temperature",
            ],
            [
              "Pour point",
              "Laboratory indicator of lowest measured fluid movement",
              "A starting filter, not a system start limit",
            ],
            [
              "Viscosity index",
              "Shows how strongly viscosity changes with temperature",
              "Compare candidate fluids for wide-temperature duty",
            ],
            [
              "Minimum starting viscosity",
              "Component-dependent limit from the pump or motor manufacturer",
              "The governing value for a cold-start procedure",
            ],
          ],
        },
      },
      {
        title: "Cold-start record to keep",
        items: [
          "Ambient and fluid temperature at start",
          "Fluid grade, batch reference and water content check",
          "Pump inlet condition, filter differential and prime mover load",
          "Time, pressure and speed used during warm-up",
          "Any anomaly recorded before the system reached operating temperature",
        ],
      },
    ],
    ctaTitle: "Review a pump for low-temperature duty.",
    ctaText:
      "Send the pump code, fluid, minimum ambient temperature, start procedure, pressure, speed and application for a sourcing review.",
  },
  {
    slug: "resources/hydrostatic-pump-and-transmission-basics",
    title: "Hydrostatic Pump and Transmission Basics",
    seoTitle: "Hydrostatic Pump & Transmission Guide",
    description:
      "Understand how a hydrostatic pump, motor, charge circuit and controls work together in a closed-loop transmission and what must match during replacement.",
    kicker: "HYDROSTATIC DRIVE GUIDE",
    intro:
      "A hydrostatic transmission converts engine or motor power into variable hydraulic flow and then back into rotary output. The pump cannot be selected independently from the loop, motor, charge system, controls and machine duty.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Main components in a hydrostatic drive",
        items: [
          "Variable-displacement hydrostatic pump controlling flow direction and magnitude",
          "Fixed or variable hydraulic motor producing output torque and speed",
          "Charge pump maintaining loop fill, cooling flow and control pressure",
          "High-pressure relief, charge relief, flushing and make-up valves",
          "Mechanical, hydraulic or electronic displacement controls",
        ],
      },
      {
        title: "Operating relationships",
        items: [
          "Pump displacement and speed determine theoretical loop flow",
          "Motor displacement and pressure differential determine output torque",
          "Charge pressure must remain within the component and machine limits",
          "Case-drain flow and temperature help identify wear or internal leakage",
          "Control response must suit the machine, prime mover and safety system",
        ],
      },
      {
        title: "Hydrostatic pump replacement checklist",
        items: [
          "Complete pump code, material number and machine serial information",
          "Displacement, rotation, control type and control-pressure requirements",
          "Shaft, flange, ports, through-drive and installed orientation",
          "Charge-pump size, relief settings, flushing circuit and fluid",
          "Motor code, machine duty, symptoms and contamination history",
        ],
      },
    ],
    ctaTitle: "Request a hydrostatic pump replacement review.",
    ctaText:
      "Send the complete pump and motor codes, machine model, photos, control details, pressure, speed, quantity and destination.",
    relatedLinks: [
      {
        href: "/products/hydraulic-pumps/axial-piston-pumps/",
        title: "Axial piston pumps",
        text: "Review open- and closed-circuit piston pump selection.",
      },
      {
        href: "/brands/danfoss-sundstrand/",
        title: "Danfoss / Sundstrand",
        text: "Browse hydrostatic pump and motor reference coverage.",
      },
      {
        href: "/cross-reference/",
        title: "Pump cross-reference",
        text: "Submit a complete hydrostatic pump code.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-pressure-relief-valve-function-adjustment",
    title: "Hydraulic Pressure Relief Valve Function and Adjustment",
    seoTitle: "Hydraulic Pressure Relief Valve Adjustment",
    description:
      "Learn how hydraulic pressure relief valves limit system pressure, how direct and pilot-operated designs differ and what to verify before adjustment or replacement.",
    kicker: "PRESSURE RELIEF VALVE GUIDE",
    intro:
      "A hydraulic pressure relief valve protects the pressure line by opening a controlled path when its setting is reached. It is a safety-critical pressure-limiting device, not a routine flow-control method.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "How a relief valve works",
        items: [
          "Direct-acting valves balance hydraulic force against an adjustable spring",
          "Pilot-operated valves use a pilot stage to control the main stage",
          "Cracking pressure begins flow; full-flow pressure is normally higher",
          "Tank-line backpressure can change the effective setting on some designs",
          "Pressure override and response affect heat, stability and protection",
        ],
      },
      {
        title: "Safe setting verification",
        items: [
          "Identify the exact valve, adjustment range and circuit location",
          "Use calibrated pressure measurement at the correct test point",
          "Follow the machine and valve manufacturer's commissioning procedure",
          "Adjust gradually under controlled flow and temperature conditions",
          "Lock, record and recheck the setting through the required operating cycle",
        ],
      },
      {
        title: "Replacement information",
        items: [
          "Relief function, direct or pilot operation and adjustment range",
          "Maximum pressure, rated flow and acceptable pressure override",
          "Inline, cartridge, subplate or modular mounting interface",
          "Pilot, vent, drain and tank backpressure arrangement",
          "Fluid, seals, temperature, contamination class and application duty",
        ],
      },
    ],
    ctaTitle: "Source a hydraulic pressure relief valve.",
    ctaText:
      "Send the complete code, circuit function, setting range, pressure, flow, mounting, pilot or drain arrangement and destination.",
    relatedLinks: [
      {
        href: "/products/hydraulic-valves/pressure-control-valves/",
        title: "Pressure control valves",
        text: "Relief, reducing, sequence and unloading valve sourcing.",
      },
      {
        href: "/resources/hydraulic-pressure-reducing-valve-adjustment/",
        title: "Reducing valve adjustment",
        text: "Understand downstream pressure control.",
      },
      {
        href: "/cross-reference/",
        title: "Valve cross-reference",
        text: "Submit the complete relief valve code.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-pump-schematic-symbols-circuits",
    title: "Hydraulic Pump Schematic Symbols and Circuit Examples",
    seoTitle: "Hydraulic Pump Schematic Symbols & Circuits",
    description:
      "Read fixed and variable hydraulic pump symbols, rotation, controls, case drains and common open- and closed-circuit schematic connections.",
    kicker: "PUMP SCHEMATIC GUIDE",
    intro:
      "A hydraulic pump schematic symbol shows energy conversion and functional options, not the pump's physical shape. Arrows, control lines and drain connections help identify the pump type and circuit role.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "6 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Common pump symbol features",
        items: [
          "A circle with an outward triangle identifies hydraulic pump flow",
          "A diagonal arrow across the symbol indicates variable displacement",
          "Two opposed flow directions can indicate reversible operation",
          "Dashed control lines show pilot, pressure-compensator or load-sense signals",
          "A separate case-drain line must return with acceptable backpressure",
        ],
      },
      {
        title: "Open- and closed-circuit context",
        items: [
          "Open circuits normally draw from and return fluid to the reservoir",
          "Closed loops connect the main pump ports directly to motor ports",
          "Closed loops require charge, make-up, relief and often flushing functions",
          "Pressure-compensated pumps destroke when the control pressure is reached",
          "Load-sense controls maintain a pressure margin above the highest load signal",
        ],
      },
      {
        title: "Using a schematic for pump sourcing",
        items: [
          "Pair the circuit symbol with the complete pump nameplate and model code",
          "Identify displacement, control, rotation and required pressure",
          "Trace case drain, load-sense, pilot and through-drive connections",
          "Confirm shaft, flange and port information from drawings or the installed unit",
          "Record unresolved circuit functions as open points before quotation",
        ],
      },
    ],
    ctaTitle: "Identify a hydraulic pump from its circuit and nameplate.",
    ctaText:
      "Send the schematic, pump tag, complete code, nameplate, machine function and photos for replacement review.",
    relatedLinks: [
      {
        href: "/resources/hydraulic-system-schematic-diagram-guide/",
        title: "Hydraulic system schematic",
        text: "Trace the complete circuit from pump to actuator.",
      },
      {
        href: "/resources/how-to-identify-a-hydraulic-pump-from-its-nameplate/",
        title: "Pump nameplate identification",
        text: "Decode the physical pump reference.",
      },
      {
        href: "/products/hydraulic-pumps/",
        title: "Hydraulic pump supplier",
        text: "Move from identification to quotation.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-piston-motor-types-selection",
    title: "Hydraulic Piston Motor Types and Selection",
    seoTitle: "Hydraulic Piston Motor Types & Selection Guide",
    description:
      "Compare axial, bent-axis and radial piston hydraulic motors by torque, speed, displacement, efficiency, mounting and application duty.",
    kicker: "PISTON MOTOR SELECTION",
    intro:
      "Piston motors are selected from the required torque-speed envelope and operating duty, then verified against displacement, pressure, controls, mounting and installed interfaces.",
    published: "2026-07-26",
    modified: "2026-07-26",
    readingTime: "7 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    sections: [
      {
        title: "Main piston motor types",
        items: [
          "Axial swashplate motors for compact fixed or variable-displacement drives",
          "Bent-axis motors for high-speed and high-efficiency applications",
          "Radial piston motors for high-torque, low-speed direct drives",
          "Open-circuit and closed-loop motors with different control and flushing needs",
          "Motor assemblies with brakes, reduction units, sensors or wheel interfaces",
        ],
      },
      {
        title: "Performance selection",
        items: [
          "Continuous, intermittent and starting torque requirements",
          "Minimum, rated and maximum operating speed",
          "Working and peak pressure plus acceptable case pressure",
          "Fixed or variable displacement and control response",
          "Efficiency, cooling, flushing, fluid and expected duty cycle",
        ],
      },
      {
        title: "Replacement interface checks",
        items: [
          "Complete code, displacement and design revision",
          "Shaft, mounting pilot, bolt pattern and permitted external loads",
          "Main ports, case drain, flushing and brake connections",
          "Rotation, brake release, sensors and control configuration",
          "Machine model, gearbox or wheel interface and operating symptoms",
        ],
      },
      {
        title: "Family comparison at a glance",
        table: {
          headers: ["Motor family", "Typical strength", "Interface to confirm"],
          rows: [
            [
              "Axial swashplate motor",
              "Compact package, wide speed range, variable-displacement options",
              "Swashplate angle range, control, shaft and case pressure",
            ],
            [
              "Bent-axis piston motor",
              "High efficiency and speed capability",
              "Bent angle, displacement, mounting and drain routing",
            ],
            [
              "Radial piston motor",
              "High torque at low speed for direct drives",
              "Torque rating, speed limit, shaft load and brake option",
            ],
            [
              "Motor with integrated brake or gearbox",
              "Complete drive package with one supply interface",
              "Brake release pressure, ratio, sensor and wheel mounting",
            ],
          ],
        },
      },
      {
        title: "Data needed before a quote",
        items: [
          "Complete motor model code and revision",
          "Nameplate plus shaft, flange, port and control photographs",
          "Required torque and speed envelope, including start and peak values",
          "Working, peak and case pressure limits for the application",
          "Machine function, duty cycle, fluid and ambient conditions",
          "Brake, sensor, reduction or wheel-mount requirements",
        ],
      },
    ],
    ctaTitle: "Request a hydraulic piston motor match.",
    ctaText:
      "Send the full motor code, nameplate, torque, speed, pressure, shaft, mounting, ports, brake, application and destination.",
    relatedLinks: [
      {
        href: "/products/hydraulic-motors/axial-piston-motors/",
        title: "Axial piston motors",
        text: "Review fixed and variable motor requirements.",
      },
      {
        href: "/products/hydraulic-motors/radial-piston-motors/",
        title: "Radial piston motors",
        text: "High-torque motor selection and MCR routes.",
      },
      {
        href: "/series/mcr/",
        title: "MCR replacement motors",
        text: "Open the Poclain MCR family hub.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-terms-glossary",
    title: "Hydraulic Terminology Glossary",
    seoTitle: "Hydraulic Terms Glossary",
    description:
      "Clear definitions of common hydraulic terms covering pumps, valves, cylinders, motors, circuits and industry acronyms for buyers and maintenance teams.",
    published: "2026-08-01",
    modified: "2026-08-01",
    readingTime: "12 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "HYDRAULIC TERMINOLOGY REFERENCE",
    intro:
      "This glossary defines common hydraulic terms used in component identification, sourcing, replacement and system troubleshooting. Use it alongside model-code guides and technical checklists.",
    sections: [
      {
        title: "Pumps",
        table: {
          headers: ["Term", "Definition"],
          rows: [
            [
              "Axial piston pump",
              "A pump where pistons move parallel to the drive shaft. Available in variable-displacement (swashplate) and fixed-displacement (bent-axis) configurations. Common for high-pressure industrial and mobile applications.",
            ],
            [
              "Vane pump",
              "A pump using sliding vanes in a rotor to move fluid. Available in single, double and triple configurations. Typically used at medium pressure in industrial systems.",
            ],
            [
              "Gear pump",
              "A fixed-displacement pump using meshing gears. Simple construction, tolerant of contamination, commonly used for low-to-medium pressure applications and charge circuits.",
            ],
            [
              "Displacement",
              "The theoretical volume of fluid a pump delivers per revolution, expressed in cm³/rev or in³/rev. Actual flow is displacement × speed × volumetric efficiency.",
            ],
            [
              "Pressure compensator",
              "A pump control that adjusts displacement to maintain a set pressure. When system pressure reaches the compensator setting, the pump de-strokes to near-zero flow.",
            ],
            [
              "Load sensing",
              "A pump control that adjusts displacement to maintain a set pressure margin above the highest load pressure. Improves efficiency in multi-function systems.",
            ],
            [
              "Through-drive",
              "A rear mounting pad and coupling on a pump that accepts an auxiliary pump. The auxiliary pump is driven by the main pump shaft.",
            ],
            [
              "Case drain",
              "A dedicated return line from the pump or motor housing to the reservoir. Carries internal leakage and provides cooling and lubrication. Must never be plugged.",
            ],
          ],
        },
      },
      {
        title: "Valves",
        table: {
          headers: ["Term", "Definition"],
          rows: [
            [
              "Directional control valve",
              "A valve that directs fluid flow to a selected path. Classified by number of ways (ports) and positions. Spool type determines flow paths in each position.",
            ],
            [
              "Spool",
              "The moving element inside a directional valve. The spool lands and grooves determine which ports are connected or blocked in each position. The spool symbol is critical for correct circuit function.",
            ],
            [
              "Center condition",
              "The flow-path configuration when a directional valve is in its spring-centered (de-energized) position. Options include all ports closed, pump to tank (open center), A and B to tank (float), etc.",
            ],
            [
              "Solenoid valve",
              "A valve shifted by an electromagnetic solenoid. Available in AC and DC voltages. Wet-armature (wet-pin) solenoids are immersed in hydraulic fluid; dry types are separated.",
            ],
            [
              "Proportional valve",
              "A valve where spool position is proportional to an electrical input signal. Used when variable flow or pressure control is needed. Requires compatible electronics/amplifier.",
            ],
            [
              "Modular (sandwich) valve",
              "A valve that mounts between a directional valve and its subplate or manifold. Common types: pressure relief, pressure reducing, flow control, pilot-operated check.",
            ],
            [
              "Pressure relief valve",
              "A normally closed valve that opens at a set pressure to limit maximum system pressure. Direct-acting for low flow; pilot-operated for higher flow and stability.",
            ],
            [
              "Pressure reducing valve",
              "A normally open valve that reduces outlet pressure to a set level below inlet pressure. Used when a branch circuit needs lower pressure than the main system.",
            ],
            [
              "Check valve",
              "A valve that allows flow in one direction and blocks reverse flow. A pilot-operated check valve can be opened by an external pilot signal.",
            ],
            [
              "Mounting pattern / interface",
              "The standardised bolt pattern and port layout for mounting a valve. Common standards: ISO 4401 / CETOP (NG6, NG10, NG16), NFPA D03/D05/D07.",
            ],
          ],
        },
      },
      {
        title: "Cylinders",
        table: {
          headers: ["Term", "Definition"],
          rows: [
            [
              "Bore",
              "The internal diameter of a cylinder barrel. Together with pressure, it determines the extending force (Force = Pressure × Bore area).",
            ],
            [
              "Rod diameter",
              "The diameter of the piston rod. Together with bore, it determines the retracting force via the annular area. Rod diameter affects buckling resistance.",
            ],
            [
              "Stroke",
              "The distance the piston travels from fully retracted to fully extended. Stroke plus retracted length gives the extended pin-to-pin dimension.",
            ],
            [
              "Mounting style",
              "How the cylinder is attached to the machine. Common types: clevis, flange, trunnion, foot, eye. Mounting affects force transmission and alignment tolerance.",
            ],
            [
              "Cushioning",
              "A device at the cylinder end that restricts flow near stroke-end to decelerate the piston. Reduces impact and noise. May be fixed or adjustable.",
            ],
          ],
        },
      },
      {
        title: "Motors",
        table: {
          headers: ["Term", "Definition"],
          rows: [
            [
              "Orbital (gerotor) motor",
              "A low-speed high-torque motor using an orbiting gear set. Simple, robust, widely used in mobile equipment for wheel drives, augers and conveyors.",
            ],
            [
              "Axial piston motor",
              "A motor where pistons are arranged parallel to the drive shaft. Available in fixed and variable displacement. Used where high efficiency and speed range are needed.",
            ],
            [
              "Radial piston motor",
              "A motor where pistons are arranged radially around the crankshaft. Capable of very high torque at low speed. Used in winches, slewing drives and heavy machinery.",
            ],
            [
              "Flushing valve",
              "A valve in a closed-circuit hydrostatic transmission that exchanges a portion of the loop fluid to control temperature and contamination.",
            ],
          ],
        },
      },
      {
        title: "Systems & Performance",
        table: {
          headers: ["Term", "Definition"],
          rows: [
            [
              "Working pressure",
              "The pressure at which a system or component normally operates. Components should be rated for working pressure plus a safety margin for peaks.",
            ],
            [
              "Flow rate",
              "The volume of fluid passing a point per unit time, typically L/min or GPM. Pump flow is displacement × speed; actuator flow is area × velocity.",
            ],
            [
              "Cavitation",
              "The formation and collapse of vapour bubbles in hydraulic fluid when inlet pressure falls below vapour pressure. Causes noise, erosion and component damage.",
            ],
            [
              "Filtration",
              "The removal of solid contaminants from hydraulic fluid. Typically measured in microns (µm). Return-line, pressure-line and off-line filtration protect components.",
            ],
            [
              "ISO VG",
              "ISO Viscosity Grade — a standard classification for hydraulic oil viscosity at 40°C. Common grades: ISO VG 32, 46, 68. Selection depends on pump type, temperature and duty.",
            ],
            [
              "NBR / FKM",
              "Nitrile (NBR) is the standard hydraulic seal material. FKM (Viton) is used for higher temperatures or aggressive fluids. Seal compatibility must match the actual fluid and operating temperature.",
            ],
            [
              "Open circuit",
              "A hydraulic circuit where pump inlet is connected to the reservoir and return flow goes back to the reservoir. Most industrial systems are open-circuit.",
            ],
            [
              "Closed circuit",
              "A hydrostatic circuit where pump outlet connects directly to motor inlet and motor return connects back to pump inlet. Uses a charge pump to compensate for leakage. Common in mobile propel drives.",
            ],
          ],
        },
      },
    ],
    relatedLinks: [
      {
        href: "/resources/how-to-read-a-hydraulic-valve-model-code/",
        title: "Read a valve model code",
        text: "Apply these terms when decoding Rexroth, Vickers and Parker valve codes.",
      },
      {
        href: "/resources/how-to-identify-a-hydraulic-pump-from-its-nameplate/",
        title: "Identify a hydraulic pump",
        text: "Use terminology to confirm nameplate, shaft, flange and port details.",
      },
      {
        href: "/resources/why-the-same-hydraulic-series-may-not-be-interchangeable/",
        title: "Why series names mislead",
        text: "See how suffixes encode the functional differences defined in this glossary.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-system-troubleshooting-guide",
    title: "Hydraulic System Troubleshooting Guide",
    seoTitle: "Hydraulic System Troubleshooting Guide",
    description:
      "Systematic troubleshooting guide for common hydraulic system problems: low pressure, overheating, noisy pump, slow actuator, drifting cylinder and erratic operation.",
    published: "2026-08-01",
    modified: "2026-08-01",
    readingTime: "10 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "MAINTENANCE & DIAGNOSTICS",
    intro:
      "A hydraulic system problem is rarely solved by replacing one component without first understanding what caused it to fail. This guide provides a systematic approach to diagnosing common hydraulic problems before ordering replacement parts.",
    sections: [
      {
        title: "Low or No System Pressure",
        table: {
          headers: ["Possible cause", "What to check", "Before replacing"],
          rows: [
            [
              "Relief valve open or set too low",
              "Confirm setting with a pressure gauge at the pump outlet or relief valve test point",
              "Adjust or clean the relief valve first. Replace only if the seat or spring is damaged.",
            ],
            [
              "Worn pump",
              "Measure case-drain flow at operating pressure and temperature; compare with the pump's published case-drain limit",
              "Rule out inlet restrictions, air ingress and excessive temperature before condemning the pump.",
            ],
            [
              "Internal valve leakage",
              "Isolate circuit sections and measure pressure drop; feel for hot valve bodies indicating bypass flow",
              "Test individual valves before replacing the pump. A bypassing relief or directional valve is cheaper to fix.",
            ],
            [
              "Damaged cylinder seal",
              "Isolate the cylinder and check for drift under load; inspect for external rod leakage",
              "Confirm the seal is the cause — a drifting load can also be caused by a leaking valve spool.",
            ],
          ],
        },
      },
      {
        title: "Overheating",
        items: [
          "Check the reservoir fluid level — low fluid reduces heat dissipation capacity",
          "Inspect the heat exchanger (air/oil cooler or water/oil cooler) for fouling, blocked airflow or coolant failure",
          "Measure pressure drop across return filters — a clogged filter forces fluid through the bypass, reducing cooling",
          "Check for continuous relief valve operation — a stuck-open relief or a misadjusted compensator can generate continuous heat",
          "Measure case-drain flow on pumps and motors — excessive internal leakage generates heat",
          "Confirm the fluid viscosity grade matches the ambient and operating temperature range",
          "Check for internal leakage through closed-center directional valves — a worn spool can bypass flow at rest",
        ],
        note: "Adding a cooler without finding the heat source treats the symptom, not the cause. Start by measuring flow and pressure where energy is being converted to heat.",
      },
      {
        title: "Noisy Pump",
        items: [
          "Check for cavitation: restricted suction strainer, collapsed suction hose, high fluid viscosity or insufficient reservoir head",
          "Check for aeration: loose suction-line fittings, low reservoir level, faulty shaft seal or excessive return-line turbulence above the fluid surface",
          "Inspect the pump coupling: misalignment, wear, or loose elements can produce noise that sounds like a pump problem",
          "Check for trapped air: bleed the pump case and the highest point in the circuit",
          "Measure case-drain flow: an increase over time can indicate wear that also changes pump sound",
          "Confirm the drive speed is within the pump's published range",
        ],
        note: "Cavitation and aeration damage pumps quickly. A noisy pump should be investigated immediately — do not run it hoping the noise will go away.",
      },
      {
        title: "Slow or Erratic Actuator",
        items: [
          "Confirm the pump is delivering flow: measure flow at the pump outlet or use a flow meter in the pressure line",
          "Check for a partially shifted directional valve: a sticking spool or inadequate pilot pressure can restrict flow",
          "Inspect flow-control valves for contamination or incorrect setting",
          "Check for external leakage at cylinder rod seals, fittings or hoses",
          "Check for internal cylinder leakage: isolate the cylinder and check for piston bypass under load",
          "Confirm the load has not changed: increased mechanical friction, binding or additional weight",
          "Check for air in the circuit: bleed the system and inspect the suction side",
        ],
      },
      {
        title: "Cylinder Drift Under Load",
        items: [
          "Isolate the cylinder with a shut-off valve or by blocking the ports — if drift stops, the problem is in the valve, not the cylinder",
          "If drift continues with the cylinder isolated, the piston seal is bypassing internally",
          "Check the directional valve spool for wear — a closed-center spool with excessive clearance can allow creep",
          "Check the counterbalance or load-holding valve for contamination or incorrect setting",
          "For vertical loads, confirm the load-holding valve pilot ratio is appropriate for the application",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/resources/hydraulic-pump-cavitation-suction-line/",
        title: "Pump cavitation diagnosis",
        text: "Check the inlet system before replacing the pump.",
      },
      {
        href: "/resources/hydraulic-valve-pressure-drop-heat/",
        title: "Valve pressure drop and heat",
        text: "Estimate power loss where high cycle flow creates excess heat.",
      },
      {
        href: "/resources/hydraulic-pressure-relief-valve-function-adjustment/",
        title: "Relief valve adjustment",
        text: "Understand the function and limits before adjusting settings.",
      },
      {
        href: "/request-a-quote/",
        title: "Request a replacement review",
        text: "Send the failed component code, failure symptoms and machine data.",
      },
    ],
  },
  {
    slug: "resources/how-to-verify-hydraulic-supplier-credentials",
    title: "How to Verify a Hydraulic Component Supplier",
    seoTitle: "How to Verify Hydraulic Supplier Credentials",
    description:
      "A practical framework for verifying hydraulic component supplier identity, capability, evidence and corrective-action readiness before placing an order.",
    published: "2026-08-01",
    modified: "2026-08-01",
    readingTime: "9 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "SUPPLIER QUALIFICATION GUIDE",
    intro:
      "A catalogue page, a quick reply and a low price do not by themselves establish a reliable hydraulic component supplier. This guide separates the questions that reveal capability from the claims that reveal nothing.",
    sections: [
      {
        title: "1. Legal identity — start with who the business actually is",
        items: [
          "Request the supplier's registered legal name and business registration number",
          "Confirm the business scope includes the product family you are ordering",
          "Verify the physical operating address — a virtual office or residential address alone is not disqualifying, but it should be known",
          "Ask who will appear as the exporter/shipper on documents and whether they are the same legal entity as the manufacturer",
        ],
        note: "A supplier that refuses to share its legal identity before an order is a red flag. A supplier that provides an identity but cannot link it to the product being offered is a lead, not an approved source.",
      },
      {
        title: "2. Product capability — not 'everything', but 'this exact model'",
        items: [
          "Ask which product families the supplier produces or trades regularly — a focused list is more credible than 'all hydraulic parts'",
          "Request a model-code interpretation for your exact reference — can the supplier decode the function, control, interface and options?",
          "Ask which operations are performed in-house and which are subcontracted",
          "Request a dimensional comparison or drawing for the proposed item — not only a datasheet for the series",
          "Ask about available test equipment and whether test records are order-linked",
        ],
        note: "A supplier that cannot interpret the complete model code is sourcing from a catalogue, not from product knowledge. Price may be the only differentiator.",
      },
      {
        title: "3. Evidence depth — separate what exists from what is claimed",
        table: {
          headers: ["Evidence level", "What it can confirm", "What it cannot confirm"],
          rows: [
            [
              "Product photo",
              "Visible condition, markings, packaging appearance",
              "Internal configuration, material, performance or conformity to order",
            ],
            [
              "Company registration",
              "Legal identity, business scope, registration date",
              "Capability, quality, delivery reliability or product-specific competence",
            ],
            [
              "ISO / quality certificate",
              "That a certification body assessed the management system at a point in time",
              "That the certificate covers your product family, location or current capability",
            ],
            [
              "Sample unit",
              "Physical product quality for that one unit",
              "Batch consistency, future delivery conformity or dimensional accuracy without measurement",
            ],
            [
              "Order-linked test record",
              "That the identified unit was tested under stated conditions and met stated criteria",
              "Performance outside the tested conditions or future batch behaviour",
            ],
          ],
        },
      },
      {
        title: "4. Corrective action — what happens when something goes wrong",
        items: [
          "Ask how a nonconforming unit is reported, investigated and corrected",
          "Request the warranty duration, scope, claim evidence requirements and exclusions in writing",
          "Ask whether the supplier has a documented corrective-action process for quality issues",
          "Confirm who pays for return shipping, inspection and replacement in a warranty claim",
          "Ask how repeat-order consistency is maintained when the revision, material or sub-supplier changes",
        ],
        note: "'We will replace it' without a defined process, responsible party, timeline or shipping arrangement is not a warranty — it is a hope.",
      },
      {
        title: "5. Communication as a qualification signal",
        items: [
          "Does the supplier ask clarifying questions about the model code, application and required evidence — or only about quantity and price?",
          "Does the supplier state when a parameter cannot be confirmed — or does everything sound 'no problem'?",
          "Does the supplier provide written technical data — or only voice messages and promises?",
          "Does the supplier respect an evidence boundary — or promise documents they cannot produce?",
        ],
        note: "A supplier that never says 'I need to check that' is probably not checking anything.",
      },
    ],
    relatedLinks: [
      {
        href: "/manufacturing-partners/",
        title: "Manufacturing partner review",
        text: "See the five-stage source evaluation framework used for Hydraulic Match RFQs.",
      },
      {
        href: "/quality/",
        title: "Quality evidence levels",
        text: "Match the required evidence depth to the purchase decision.",
      },
      {
        href: "/resources/hydraulic-component-pre-shipment-inspection-checklist/",
        title: "Pre-shipment inspection",
        text: "Define order-specific checks that answer the actual release question.",
      },
    ],
  },
  {
    slug: "resources/hydraulic-export-documentation-guide",
    title: "Hydraulic Component Export Documentation Guide",
    seoTitle: "Hydraulic Export Documentation Guide",
    description:
      "A practical guide to export documentation for hydraulic components sourced from China: commercial invoice, packing list, bill of lading, certificate of origin and Incoterms.",
    published: "2026-08-01",
    modified: "2026-08-01",
    readingTime: "8 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "EXPORT & LOGISTICS GUIDE",
    intro:
      "Correct export documentation keeps a shipment moving through customs and into the buyer's hands without delay. This guide explains the core documents and terms for hydraulic component exports from China.",
    sections: [
      {
        title: "Core export documents",
        table: {
          headers: ["Document", "Purpose", "Hydraulic-specific notes"],
          rows: [
            [
              "Commercial invoice",
              "States the seller, buyer, goods description, harmonised-system (HS) code, value, currency and Incoterm. Required for customs clearance in both countries.",
              "Model codes and quantities should match the quotation and packing list exactly. HS codes for hydraulic valves (8481.20), pumps (8413.60) and cylinders (8412.21) should be verified for the destination country.",
            ],
            [
              "Packing list",
              "Lists every package with Gross weight, net weight, dimensions, package count and contents per package.",
              "Each line should reference the hydraulic model code and quantity inside that carton or crate. A packing list that only states 'hydraulic parts' invites customs delay.",
            ],
            [
              "Bill of lading (sea) or air waybill (air)",
              "The transport contract and document of title. The carrier issues it after receiving the goods.",
              "Verify the consignee and notify-party details are exactly as required. For sea freight, a telex release can avoid couriering original bills.",
            ],
            [
              "Certificate of origin",
              "States the country where the goods were produced. May be required for preferential tariff treatment under a trade agreement.",
              "Hydraulic components assembled in China from globally sourced parts may qualify for a China CO. The specific rule of origin should be confirmed with the supplier.",
            ],
            [
              "Inspection certificate",
              "Records the inspection result when pre-shipment inspection was agreed. May be issued by the supplier, a third party or the buyer's representative.",
              "The certificate should list the models, quantities, checked characteristics and results — not only 'inspected and approved'.",
            ],
          ],
        },
      },
      {
        title: "Key Incoterms for hydraulic exports",
        items: [
          "FOB (Free On Board) — seller delivers goods on board the vessel at the named port. Buyer arranges and pays for ocean freight and insurance. Common for full-container hydraulic shipments.",
          "CIF (Cost, Insurance, Freight) — seller arranges and pays for freight and insurance to the named destination port. Buyer handles import clearance. Gives the buyer a delivered cost to the port.",
          "EXW (Ex Works) — buyer collects from the seller's premises and handles all transport, export and import formalities. Risk transfers at pickup. Only suitable when the buyer has a China-based logistics partner.",
          "DAP (Delivered at Place) — seller delivers to the named destination, ready for unloading. Buyer handles import clearance. Useful when the buyer wants a delivered price to their door or warehouse.",
          "FCA (Free Carrier) — seller delivers to the buyer's nominated carrier at a named place. More flexible than FOB for air freight or consolidated shipments.",
        ],
        note: "The Incoterm determines when risk transfers from seller to buyer, who pays for transport and who handles customs formalities. It must be stated in the quotation — a price without an Incoterm is incomplete.",
      },
      {
        title: "Shipping practicalities for hydraulic components",
        items: [
          "Heavy items (pumps, motors, large cylinders) usually ship by sea freight in crates or on pallets. Air freight is economical only for small valves, seal kits or urgent replacements.",
          "Protect machined surfaces: shaft ends, port threads and mounting faces need caps, plugs or protective covers. Rust-preventive treatment should be specified for sea freight.",
          "Flexible hoses, seals and elastomeric parts should be protected from heat, direct sunlight and ozone during transit and storage.",
          "Neutral packing (no supplier branding on outer cartons) is commonly requested by distributors. Confirm availability before ordering.",
          "Wood packaging (crates, pallets) must comply with ISPM 15 for international shipments — heat treatment or fumigation with the IPPC mark.",
          "Express courier (DHL, FedEx, UPS) is practical for samples, small seal kits, or single small valves. Faster but more expensive per kg than air freight for larger shipments.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/shipping/",
        title: "Shipping and packaging",
        text: "Review the packing, documentation and transport process for hydraulic orders.",
      },
      {
        href: "/downloads/",
        title: "RFQ templates",
        text: "Structure model, quantity and destination requirements before inquiry.",
      },
      {
        href: "/resources/hydraulic-component-pre-shipment-inspection-checklist/",
        title: "Pre-shipment checklist",
        text: "Define the inspection evidence needed before shipment release.",
      },
    ],
  },
  {
    slug: "resources/china-hydraulic-market-overview",
    title: "China Hydraulic Component Market — A Buyer's Overview",
    seoTitle: "China Hydraulic Market Overview",
    description:
      "An overview of the China hydraulic component manufacturing landscape: key production regions, product specialisations, quality tiers and practical sourcing considerations for international buyers.",
    published: "2026-08-01",
    modified: "2026-08-01",
    readingTime: "9 min",
    reviewedBy: "Hydraulic Match Editorial Review",
    kicker: "MARKET OVERVIEW",
    intro:
      "China is a major producer of hydraulic components, but 'China hydraulic' is not one thing. The market spans state-owned enterprises, privately held specialists, trading companies and workshops with very different capabilities, quality systems and export readiness. This overview helps buyers understand the landscape before selecting a sourcing route.",
    sections: [
      {
        title: "Key production clusters",
        table: {
          headers: ["Region", "Specialisation", "Buyer relevance"],
          rows: [
            [
              "Zhejiang / Shanghai",
              "Industrial hydraulic valves, power units, hydraulic presses, cylinders. Strong in high-volume standard components and complete systems.",
              "Good for standard solenoid and modular valves, power units, and industrial cylinders. Many factories with export experience.",
            ],
            [
              "Jiangsu / Shandong",
              "Gear pumps, vane pumps, industrial cylinders, hydraulic fittings. Concentration of hydraulic component and system manufacturers.",
              "Good for gear pumps and standard industrial cylinders. Medium-to-large enterprises with established quality systems.",
            ],
            [
              "Guangdong / Fujian",
              "Mobile hydraulic components, hydraulic breakers, compact power units. Strong in construction-equipment hydraulics.",
              "Relevant for mobile equipment pumps, motors and valves. Smaller average factory size but faster response.",
            ],
            [
              "Hunan / Hubei",
              "Axial piston pumps and motors, larger hydraulic systems. Home to several major Chinese hydraulic enterprises.",
              "Important for piston pump inquiries. May have state-owned heritage, different commercial behaviour than private firms.",
            ],
            [
              "Beijing / Tianjin",
              "High-end proportional and servo hydraulics, aerospace components. Research-institute spin-offs and joint ventures.",
              "Relevant for proportional and servo valve inquiries. Often higher cost but better technical capability.",
            ],
          ],
        },
        note: "Production clusters suggest capability concentration, not that every factory in the region has equal quality. Supplier screening is still required.",
      },
      {
        title: "Supplier types — not all are factories",
        items: [
          "Direct manufacturer — produces components in-house. May or may not be willing to sell small quantities or provide order-specific test data. Usually identifiable by a focused product catalogue and model-code literacy.",
          "Trading company — sources from one or more factories and handles export logistics. Can provide access to factories that do not export directly. Add a margin but may reduce the buyer's coordination burden.",
          "Manufacturer-owned trading company — a separate legal entity created by a factory for export. Legitimate but the factory relationship should be confirmed.",
          "Workshop / small-batch specialist — produces simple components (cylinders, manifolds, fittings) in low volume. May have limited documentation capability. Suitable when a drawing and dimensional check are sufficient.",
          "Online marketplace seller — lists everything, knows nobody. Typically cannot provide technical comparison, order-specific evidence or consistent quality. Highest risk for a hydraulic replacement purchase.",
        ],
      },
      {
        title: "Quality tiers — understand what you are comparing",
        items: [
          "Top tier: ISO 9001 or IATF 16949 certified, documented production process, in-house testing, export experience to Europe or North America, willing to provide order-linked test records. Higher price but lower qualification burden.",
          "Middle tier: ISO 9001 certified, reasonable product focus, some export experience, technical data available on request. Represents the practical sweet spot for many hydraulic replacement RFQs.",
          "Entry tier: business license only, broad product claims, limited technical data, no export documentation capability. Price may be lower, but the buyer carries the full quality-assurance burden.",
        ],
        note: "A certificate is a starting point for qualification, not a substitute for model-specific comparison and order-specific evidence.",
      },
      {
        title: "Practical sourcing considerations",
        items: [
          "Ask for the complete model code comparison, not a 'similar product' suggestion. A series-level match is not a model-level match.",
          "Request a dimensional drawing or confirmation sheet for the proposed item before production or shipment.",
          "For higher-risk replacements, start with one sample unit before batch ordering. Define the sample acceptance criteria first.",
          "Confirm the Incoterm, shipping route and delivery window before placing the order. A price without delivery terms is incomplete.",
          "Payment terms (T/T, L/C, deposit/balance split) should be agreed before production. Standard practice: 30% deposit, 70% before shipment or against copy documents.",
          "IP protection: if the component is proprietary, consider an NDA and confirm that drawings are controlled. China has IP laws, but enforcement requires documentation.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/resources/how-to-verify-hydraulic-supplier-credentials/",
        title: "Supplier verification guide",
        text: "Apply the five-stage screening framework to any prospective supplier.",
      },
      {
        href: "/resources/hydraulic-export-documentation-guide/",
        title: "Export documentation",
        text: "Prepare commercial invoices, packing lists and shipping documents.",
      },
      {
        href: "/manufacturing-partners/",
        title: "Manufacturing partner review",
        text: "Understand how Hydraulic Match evaluates prospective suppliers.",
      },
    ],
  },
];
