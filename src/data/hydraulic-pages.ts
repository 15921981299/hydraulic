export type ContentSection = {
  title: string;
  intro?: string;
  items?: string[];
  note?: string;
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
};

export const hydraulicPages: HydraulicContentPage[] = [
  {
    slug: 'matching-process',
    title: 'How Our Hydraulic Matching Process Works',
    seoTitle: 'Hydraulic Component Matching Process',
    description: 'See how Hydraulic Match reviews model codes, compares technical parameters, grades replacement risk and prepares a hydraulic component quotation.',
    kicker: 'FROM REFERENCE TO REVIEWABLE OPTION',
    intro: 'Our process is designed to reduce the risk of selecting a hydraulic component from an incomplete code, a similar-looking product or an unverified cross-reference.',
    sections: [
      { title: '1. Inquiry completeness check', intro: 'We first confirm whether the information is sufficient for a technical review.', items: ['Original manufacturer and complete model code', 'Order number or part number, if available', 'Quantity and destination country', 'Nameplate, product photos, drawing or datasheet', 'Machine, application and replacement reason'] },
      { title: '2. Technical identification', intro: 'The model code is broken down and checked against the available reference data.', items: ['Product family, size and function', 'Pressure, flow or displacement', 'Voltage, spool, control or compensator', 'Mounting, ports, rotation, flange and shaft', 'Fluid, temperature and environmental conditions'] },
      { title: '3. Supply-route review', intro: 'We contact suitable suppliers and compare the routes that can be supported with actual data.', items: ['Proposed Chinese model and manufacturing source', 'Technical evidence available for comparison', 'MOQ, lead time, inspection and warranty scope', 'Original or alternative option, when available', 'Items that cannot be confirmed yet'] },
      { title: '4. Compatibility risk grade', items: ['A — supported by complete cross-reference data and prior supply records', 'B — key parameters align, but a dimension, port or connector still needs confirmation', 'C — functional alternative requiring installation or system changes', 'D — insufficient data or unacceptable risk; quotation is not recommended'], note: 'A grade describes the current evidence, not a blanket guarantee. The customer remains responsible for final application approval and safe installation.' },
      { title: '5. Formal quotation', items: ['Original reference and proposed alternative', 'Compatibility status and known differences', 'Unit price, MOQ and lead time', 'Incoterm, packing and warranty', 'Quote validity and required customer confirmation'] },
      { title: '6. Sample and batch release', intro: 'For higher-value or higher-risk products, we recommend a sample or first-article review before the batch order. Inspection scope is agreed before purchase.' },
    ],
    ctaTitle: 'Start with the model code or nameplate.',
    ctaText: 'We will tell you what can be reviewed now and what information is still missing.',
  },
  {
    slug: 'quality',
    title: 'Quality and Pre-Shipment Verification',
    seoTitle: 'Hydraulic Component Quality and Pre-Shipment Verification',
    description: 'Hydraulic component supplier review, incoming checks, model verification, dimensions, functional testing and export packing confirmation.',
    kicker: 'EVIDENCE BEFORE CLAIMS',
    intro: 'Quality information is confirmed by product, supplier and order. We do not use unrelated factory photographs, invented certificates or blanket “100% tested” claims.',
    sections: [
      { title: 'Supplier qualification', items: ['Supplier identity and business scope review', 'Product-family experience and data availability', 'Communication and corrective-action responsiveness', 'Historical model-code and delivery accuracy where available'] },
      { title: 'Incoming and pre-shipment checks', items: ['Model, part number and quantity verification', 'Visible finish, casting, machining and nameplate checks', 'Critical dimensions and mounting details by order requirement', 'Connector, coil, shaft, flange or port confirmation', 'Pre-shipment photos before dispatch when requested'] },
      { title: 'Functional tests, when applicable', intro: 'Test scope depends on the product, supplier equipment and order agreement.', items: ['Pressure and leakage checks for applicable valves or cylinders', 'Basic function or response checks where equipment is available', 'Pump test data only when agreed and genuinely available', 'Records linked to the order rather than generic sample reports'], note: 'Ask for the exact inspection or test evidence you need in the RFQ. We confirm availability before order placement.' },
      { title: 'Export packing and traceability', items: ['Model and quantity matched to the packing list', 'Protection selected for weight, surface and transit route', 'Commercial invoice and packing list support', 'Quotation and order records kept against the confirmed reference'] },
    ],
    ctaTitle: 'Need a specific inspection record?',
    ctaText: 'List the dimensions, markings, photos or test documents required with your inquiry.',
  },
  {
    slug: 'distributor-support',
    title: 'Hydraulic Parts Support for Distributors',
    seoTitle: 'Hydraulic Parts Sourcing Support for Distributors',
    description: 'Mixed RFQs, small-batch orders, neutral export packing, line-by-line model review and repeat sourcing support for hydraulic distributors and repair companies.',
    kicker: 'BUILT FOR REPEAT B2B INQUIRIES',
    intro: 'Hydraulic Match supports distributors, repair shops and service companies that need a practical China sourcing channel without overstating interchangeability.',
    sections: [
      { title: 'Mixed and line-by-line RFQs', items: ['Upload Excel lists with brand, model, quantity and destination', 'Combine valves, pumps, parts and cylinder requests', 'Separate confirmed items from lines requiring more information', 'Keep reference notes visible in the quotation'] },
      { title: 'Small-batch and sample support', items: ['Sample and low-volume requests are welcome', 'Actual supplier MOQ is stated by line item', 'Higher-risk replacements can start with a sample', 'Repeat orders retain the confirmed reference and difference notes'] },
      { title: 'Commercial and packing support', items: ['Neutral export packing can be discussed', 'Packing, Incoterm and shipment route stated in the quotation', 'Pre-shipment model and quantity photos on request', 'Commercial invoice and packing list coordination'] },
      { title: 'What helps us respond faster', items: ['Complete model code and original brand', 'Order number or clear nameplate photo', 'Quantity and required delivery date', 'Destination country and buyer type', 'Any must-match supplier, test or packing requirement'] },
    ],
    ctaTitle: 'Have an Excel RFQ list?',
    ctaText: 'Upload it with your destination and required delivery date for line-by-line review.',
  },
  {
    slug: 'alternatives/rexroth',
    title: 'Chinese Alternatives to Bosch Rexroth Hydraulic Components',
    seoTitle: 'Chinese Alternatives to Bosch Rexroth Hydraulic Components',
    description: 'Independent sourcing review for selected Rexroth-referenced hydraulic valves and pumps, based on complete model codes and application data.',
    kicker: 'INDEPENDENT AFTERMARKET SOURCING',
    intro: 'We review selected hydraulic valves and pumps identified by Bosch Rexroth model references. We are independent and are not affiliated with or endorsed by Bosch Rexroth.',
    sections: [
      { title: 'Product groups reviewed', items: ['Solenoid directional and modular valves', 'Pressure and flow control valves', 'Selected axial piston pumps', 'Selected pump replacement parts'] },
      { title: 'Priority series', items: ['4WE6 directional valve alternatives', '4WE10 directional valve alternatives', 'Selected modular valve families', 'A10VSO pump replacement options', 'A4VG pump replacement options'] },
      { title: 'What must be confirmed', items: ['Complete model code and order number', 'Spool function, voltage and connector for valves', 'Displacement, control, rotation, flange, shaft and ports for pumps', 'Machine and operating conditions', 'Known differences accepted by the customer'] },
      { title: 'Trademark and compatibility notice', intro: 'All manufacturer names, trademarks and model numbers are used for identification and cross-reference purposes only. Compatibility must be confirmed for each application before purchase and installation.' },
    ],
    ctaTitle: 'Send the complete Rexroth reference.',
    ctaText: 'A series name alone is not enough to confirm a replacement.',
  },
  {
    slug: 'alternatives/rexroth/4we6',
    title: 'Rexroth 4WE6 Directional Valve Alternative',
    seoTitle: 'Rexroth 4WE6 Directional Valve Alternative',
    description: 'Review points for Chinese 4WE6 directional valve alternatives: spool function, pressure, flow, mounting, voltage, connector and model-code differences.',
    kicker: 'SERIES REVIEW · MODEL CONFIRMATION REQUIRED',
    intro: '4WE6 identifies a directional valve family, not a complete replacement specification. The full model code and application data must be reviewed.',
    sections: [
      { title: 'Series characteristics to review', items: ['Nominal size and ISO / CETOP mounting pattern', 'Spool symbol and spring or detent arrangement', 'Operating pressure and flow requirement', 'Solenoid voltage, connector and manual override', 'Seal material and fluid compatibility'] },
      { title: 'Why two 4WE6 valves may not interchange', items: ['Different spool functions change the hydraulic circuit', 'Connector direction or coil voltage may differ', 'Pressure limits and flow performance may differ', 'Special seals, low-temperature versions or electrical options may be encoded', 'Order numbers can represent revisions not visible in the short series name'] },
      { title: 'Required customer information', items: ['Complete model code and order number', 'Clear nameplate and connector photos', 'Hydraulic schematic or spool symbol when available', 'Working pressure, flow and machine application', 'Quantity and destination country'] },
      { title: 'Compatibility status', intro: 'A proposed option is labelled as supported by data, requiring review or a functional alternative. Known differences are stated instead of hidden.' },
    ],
    ctaTitle: 'Request a 4WE6 compatibility review.',
    ctaText: 'Upload the nameplate and connector photo with the complete code.',
  },
  {
    slug: 'alternatives/rexroth/4we10',
    title: 'Rexroth 4WE10 Directional Valve Alternative',
    seoTitle: 'Rexroth 4WE10 Directional Valve Alternative',
    description: 'Technical review points for Chinese alternatives to 4WE10 directional valves.',
    kicker: 'LARGER DIRECTIONAL VALVE SERIES',
    intro: 'A 4WE10 series reference must be expanded to the complete code before pressure, flow, spool, voltage and installation can be compared.',
    sections: [
      { title: 'Comparison points', items: ['Complete spool and centering code', 'Pressure and flow range', 'Mounting interface and port pattern', 'Voltage, connector and solenoid design', 'Seal and fluid compatibility'] },
      { title: 'Information to send', items: ['Full nameplate photo', 'Order number if present', 'Machine and hydraulic schematic', 'Quantity and destination', 'Known failure or replacement reason'] },
      { title: 'Quotation notes', intro: 'The quotation identifies the original reference, proposed route, known differences, open confirmation items, MOQ, lead time and inspection scope.' },
    ],
    ctaTitle: 'Send the full 4WE10 model code.',
    ctaText: 'We will identify the parameters and confirmation points that matter.',
  },
  {
    slug: 'alternatives/rexroth/a10vso',
    title: 'Rexroth A10VSO Replacement Options',
    seoTitle: 'Rexroth A10VSO Replacement Pump Options',
    description: 'Independent review of selected A10VSO-referenced pump replacement options from China.',
    kicker: 'AXIAL PISTON PUMP REVIEW',
    intro: 'An A10VSO family name does not confirm the displacement, control, rotation, shaft, flange, ports or through-drive arrangement.',
    sections: [
      { title: 'Model details to compare', items: ['Displacement and pressure range', 'Control or compensator code', 'Direction of rotation', 'Mounting flange and shaft', 'Port position and connection', 'Through-drive and auxiliary options'] },
      { title: 'Application conditions', items: ['Machine type and duty cycle', 'Hydraulic fluid and temperature', 'Working and peak pressure', 'Expected speed and drive arrangement', 'Reason for replacement'] },
      { title: 'Recommended verification', items: ['Provide the complete nameplate', 'Add photos of shaft, flange and port layout', 'Confirm a drawing or dimension sheet before shipment', 'Use a sample or controlled commissioning for higher-risk replacements'] },
    ],
    ctaTitle: 'Request an A10VSO model review.',
    ctaText: 'The complete pump code and installation details are required.',
  },
  {
    slug: 'alternatives/rexroth/a4vg',
    title: 'Rexroth A4VG Replacement Options',
    seoTitle: 'Rexroth A4VG Replacement Pump Options',
    description: 'Review selected A4VG-referenced closed-circuit pump replacement options from China.',
    kicker: 'CLOSED-CIRCUIT PUMP REVIEW',
    intro: 'A4VG replacements require careful review of control, charge system, rotation, shaft, flange, ports and application conditions.',
    sections: [
      { title: 'Critical comparison points', items: ['Displacement and pressure rating', 'Control and feedback configuration', 'Charge pump and relief settings', 'Rotation, shaft and mounting flange', 'Port orientation and through-drive', 'Machine control and commissioning requirements'] },
      { title: 'Risk controls', items: ['Do not select by series name alone', 'Request dimensional confirmation', 'Confirm control-system compatibility', 'Plan sample or supervised commissioning for higher-risk applications'] },
    ],
    ctaTitle: 'Send the complete A4VG reference.',
    ctaText: 'Include the machine model, nameplate and port-side photos.',
  },
  {
    slug: 'alternatives/vickers',
    title: 'Eaton / Vickers Hydraulic Alternatives',
    seoTitle: 'Eaton and Vickers Hydraulic Alternatives from China',
    description: 'Chinese sourcing review for selected Eaton and Vickers-referenced hydraulic valves, vane pumps and related components.',
    kicker: 'BRAND REFERENCE CENTER',
    intro: 'We review selected Eaton and Vickers model references for independent aftermarket sourcing. Complete codes and technical data are required.',
    sections: [
      { title: 'Selected product scope', items: ['Directional and modular valves', 'Pressure and flow control valves', 'Vane pumps and cartridges', 'Selected pump parts'] },
      { title: 'Required comparison', items: ['Complete model and part number', 'Valve function, voltage and mounting', 'Pump displacement, rotation, shaft and ports', 'Application pressure, fluid and duty', 'Known differences and required approval'] },
      { title: 'Independent service notice', intro: 'Eaton and Vickers names are used only to identify the customer’s original component. Hydraulic Match is not affiliated with or endorsed by the referenced manufacturers.' },
    ],
  },
  {
    slug: 'alternatives/parker',
    title: 'Parker Hydraulic Alternatives',
    seoTitle: 'Parker Hydraulic Component Alternatives from China',
    description: 'Independent Chinese sourcing review for selected Parker-referenced hydraulic valves and pumps.',
    kicker: 'BRAND REFERENCE CENTER',
    intro: 'Selected Parker-referenced valves and pumps can be reviewed when a reliable supply route and technical data are available.',
    sections: [
      { title: 'Information required', items: ['Complete Parker model code and part number', 'Nameplate and product photos', 'Pressure, flow or displacement', 'Mounting, connector, shaft or port details', 'Application and replacement reason'] },
      { title: 'How options are described', items: ['Original route, when available', 'Aftermarket option supported by comparison data', 'Functional alternative requiring customer engineering review', 'Unable to quote when evidence is insufficient'] },
      { title: 'Independent service notice', intro: 'Parker names and model numbers are used for identification only. No manufacturer affiliation or authorization is implied.' },
    ],
  },
  {
    slug: 'resources/how-to-read-a-hydraulic-valve-model-code',
    title: 'How to Read a Hydraulic Valve Model Code',
    seoTitle: 'How to Read a Hydraulic Valve Model Code',
    description: 'A practical guide to collecting the complete hydraulic valve model code before requesting a replacement.',
    kicker: 'MODEL-CODE GUIDE',
    intro: 'A valve code can encode size, spool function, actuation, voltage, connector, seals and special options. A missing suffix can change the product.',
    sections: [
      { title: 'Capture the code exactly', items: ['Photograph the complete nameplate in focus', 'Keep slashes, hyphens, spaces and suffixes', 'Record the order number separately', 'Photograph the connector and mounting face'] },
      { title: 'Common code groups', items: ['Valve family and nominal size', 'Spool function or circuit symbol', 'Actuation and centering method', 'Solenoid voltage and connector', 'Seal, temperature or special options'] },
      { title: 'Before requesting a replacement', items: ['State working pressure and flow', 'Identify the machine and application', 'Explain the known failure', 'Provide a hydraulic schematic when available'], note: 'Do not infer compatibility from a short family name. Different suffixes may change function, electrical connection or operating limits.' },
    ],
  },
  {
    slug: 'resources/how-to-identify-a-hydraulic-pump-from-its-nameplate',
    title: 'How to Identify a Hydraulic Pump from Its Nameplate',
    seoTitle: 'How to Identify a Hydraulic Pump from Its Nameplate',
    description: 'Learn which nameplate, shaft, flange, port and application details are needed to identify a hydraulic pump.',
    kicker: 'PUMP IDENTIFICATION GUIDE',
    intro: 'Pump identification starts with a complete nameplate, but mechanical details and application data are often needed to confirm the exact build.',
    sections: [
      { title: 'Photographs to collect', items: ['Full nameplate straight-on', 'Shaft and mounting flange', 'Port side and connection layout', 'Control or compensator assembly', 'Overall installation and drive arrangement'] },
      { title: 'Technical information', items: ['Complete model code and serial number', 'Displacement and working pressure', 'Direction of rotation', 'Shaft type and flange', 'Port threads and position', 'Machine, fluid and duty cycle'] },
      { title: 'Common identification errors', items: ['Reading only the series name', 'Assuming rotation from hose position', 'Ignoring through-drive or control suffixes', 'Measuring a worn shaft without reference data'] },
    ],
  },
  {
    slug: 'resources/what-must-match-when-replacing-a-directional-valve',
    title: 'What Must Match When Replacing a Directional Valve',
    seoTitle: 'What Must Match When Replacing a Directional Valve',
    description: 'Directional valve replacement checklist covering spool function, pressure, flow, mounting, voltage, connector and seals.',
    kicker: 'DIRECTIONAL VALVE CHECKLIST',
    intro: 'A valve that fits the mounting pattern can still operate the circuit incorrectly. Function and electrical details must be checked before installation.',
    sections: [
      { title: 'Hydraulic function', items: ['Number of ways and positions', 'Spool symbol and center condition', 'Spring return, detent or centering', 'Pilot, manual override or special controls'] },
      { title: 'Performance and installation', items: ['Pressure and flow limits', 'Mounting standard and port pattern', 'Pressure drop and leakage expectations', 'Physical envelope and connector clearance'] },
      { title: 'Electrical and material details', items: ['AC or DC voltage', 'Connector style and orientation', 'Coil power and protection rating', 'Seal material, fluid and temperature'] },
    ],
  },
  {
    slug: 'resources/oem-vs-aftermarket-hydraulic-components',
    title: 'OEM vs Aftermarket Hydraulic Components',
    seoTitle: 'OEM vs Aftermarket Hydraulic Components',
    description: 'Compare original and aftermarket hydraulic sourcing routes without assuming every alternative is a direct replacement.',
    kicker: 'PURCHASING GUIDE',
    intro: 'Original and aftermarket routes can both be useful. The right decision depends on application risk, technical evidence, lifecycle cost and supply urgency.',
    sections: [
      { title: 'Original route', items: ['Manufacturer-controlled specification and traceability', 'Often preferred for safety-critical or warranty-sensitive equipment', 'May involve higher price or longer lead time', 'Availability can be difficult for obsolete models'] },
      { title: 'Aftermarket route', items: ['Potential cost and lead-time advantages', 'Multiple quality levels and data maturity', 'Requires careful parameter and supplier review', 'Sampling or commissioning may be appropriate'] },
      { title: 'Decision factors', items: ['System criticality and failure consequence', 'Availability of complete technical data', 'Supplier history and inspection evidence', 'Customer ability to validate the alternative', 'Total downtime and replacement cost'] },
    ],
  },
  {
    slug: 'resources/how-to-request-a-custom-hydraulic-cylinder-quote',
    title: 'How to Request a Custom Hydraulic Cylinder Quote',
    seoTitle: 'How to Request a Custom Hydraulic Cylinder Quote',
    description: 'Custom hydraulic cylinder RFQ checklist for drawings, dimensions, pressure, mounting, seals, speed, load and quantity.',
    kicker: 'CUSTOM CYLINDER RFQ GUIDE',
    intro: 'A clear cylinder quotation needs both dimensions and operating conditions. A drawing is the best starting point.',
    sections: [
      { title: 'Dimensional information', items: ['Bore and rod diameter', 'Stroke and retracted length', 'Mounting style and pin dimensions', 'Port location, size and thread', 'Rod end and installation envelope'] },
      { title: 'Operating conditions', items: ['Working and test pressure', 'Push and pull load', 'Extension and retraction speed', 'Duty cycle and environment', 'Fluid, temperature and seal requirement'] },
      { title: 'Commercial information', items: ['Prototype and annual quantity', 'Required delivery date', 'Inspection or test documents', 'Surface treatment and packing', 'Destination and Incoterm preference'] },
    ],
  },
  {
    slug: 'resources/why-the-same-hydraulic-series-may-not-be-interchangeable',
    title: 'Why the Same Hydraulic Series May Not Be Directly Interchangeable',
    seoTitle: 'Why the Same Hydraulic Series May Not Be Interchangeable',
    description: 'Series names can hide differences in function, size, control, voltage, shaft, flange, ports, seals and revisions.',
    kicker: 'COMPATIBILITY GUIDE',
    intro: 'A series identifies a product family. It rarely captures every option needed to approve a direct replacement.',
    sections: [
      { title: 'Differences hidden in suffixes', items: ['Valve spool and centering', 'Coil voltage and connector', 'Pump control and rotation', 'Shaft, flange and port layout', 'Seals, temperature and special revisions'] },
      { title: 'Risks of selecting by family name', items: ['Incorrect machine function', 'Mechanical installation conflict', 'Electrical damage or connector mismatch', 'Pressure or flow outside the rating', 'Short service life or unsafe commissioning'] },
      { title: 'Safer workflow', items: ['Capture the complete original code', 'Compare technical data line by line', 'List all known differences', 'Confirm dimensions and application', 'Use a sample or controlled test when appropriate'] },
    ],
  },
  {
    slug: 'shipping',
    title: 'Shipping and Export Support',
    seoTitle: 'Hydraulic Components Shipping and Export Support',
    description: 'Export packing, commercial invoice, packing list and international shipping coordination for hydraulic valves, pumps, cylinders and parts.',
    kicker: 'FROM CHINA TO YOUR DESTINATION',
    intro: 'Shipping options are quoted against the actual product weight, dimensions, urgency and destination. We do not promise one route or transit time for every order.',
    sections: [
      { title: 'Transport options', items: ['Express courier for suitable small parts', 'Air freight for urgent or heavier shipments', 'Sea freight for cylinders, larger orders and consolidated cargo', 'Customer-nominated forwarder support'] },
      { title: 'Export packing', items: ['Protection selected for product weight and surface', 'Moisture and corrosion protection when required', 'Reinforced cartons or wooden cases as applicable', 'Packing photos on request before shipment'] },
      { title: 'Documents', items: ['Commercial invoice', 'Packing list', 'Shipment tracking or transport document', 'Additional documentation confirmed before order placement'] },
    ],
  },
  {
    slug: 'warranty',
    title: 'Warranty and After-Sales Review',
    seoTitle: 'Hydraulic Component Warranty and After-Sales Review',
    description: 'How warranty scope, claim evidence, installation review and supplier corrective action are handled for hydraulic component orders.',
    kicker: 'CLEAR SCOPE BY QUOTATION',
    intro: 'Warranty terms depend on the product, supplier and confirmed quotation. A universal one-year or unconditional warranty is not claimed.',
    sections: [
      { title: 'Before order', items: ['Warranty period and scope stated in the quotation', 'Known application limits and differences recorded', 'Customer confirmation points kept with the order', 'Sample validation recommended for higher-risk alternatives'] },
      { title: 'If a problem occurs', items: ['Stop use when continued operation could cause damage', 'Send model, serial or batch details', 'Provide installation, system and failure photos or video', 'Keep the product available for inspection', 'Share operating pressure, fluid and commissioning information'] },
      { title: 'Review outcome', intro: 'We coordinate the evidence with the supplier and communicate the available corrective action. Outcome depends on the confirmed warranty scope, failure cause and evidence.' },
    ],
  },
  {
    slug: 'trademark-disclaimer',
    title: 'Trademark and Compatibility Disclaimer',
    seoTitle: 'Trademark and Compatibility Disclaimer',
    description: 'Independent sourcing, manufacturer-name use and compatibility confirmation policy for Hydraulic Match.',
    kicker: 'INDEPENDENT SOURCING SERVICE',
    intro: 'Hydraulic Match is an independent sourcing service. It is not affiliated with, authorized by or endorsed by the manufacturers referenced on this website.',
    sections: [
      { title: 'Use of manufacturer names', intro: 'All manufacturer names, trademarks, series names, model numbers and part numbers are used for identification and cross-reference purposes only.' },
      { title: 'Product origin', intro: 'Unless a quotation explicitly identifies an original product, products supplied are independent aftermarket or alternative products and are not manufactured by the referenced original manufacturer.' },
      { title: 'Compatibility', intro: 'Compatibility must be reviewed for each complete model code and application before purchase and installation. Similar appearance, a shared series name or a cross-reference statement does not by itself prove direct interchangeability.' },
      { title: 'Customer responsibility', intro: 'The customer is responsible for final engineering approval, safe installation, commissioning and compliance with applicable equipment and safety requirements.' },
    ],
  },
];
