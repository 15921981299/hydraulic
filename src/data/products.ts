export type HydraulicProduct = {
  slug: string;
  title: string;
  seoTitle: string;
  h1Title: string;
  image: string;
  summary: string;
  intro: string;
  parameterGroups: string[];
  subcategories: { title: string; slug: string; summary: string }[];
  applications: string[];
  brandReferences: string[];
  verification: string[];
  buyingGuidance?: { title: string; text: string }[];
  relatedLinks?: { title: string; href: string; summary: string }[];
};

export const products: HydraulicProduct[] = [
  {
    slug: "hydraulic-valves",
    title: "Hydraulic Valves",
    seoTitle: "Hydraulic Valve Manufacturer & Supplier | Hydraulic Match",
    h1Title: "Hydraulic Valve Manufacturer & Supplier",
    image: "/images/hydraulic/hydraulic-valves.webp",
    summary:
      "Hydraulic valve manufacturer and supplier for directional, pressure, flow, modular, check and selected proportional valve requirements.",
    intro:
      "Hydraulic Match supplies new and replacement hydraulic valves for distributors, repair shops and MRO buyers. We review the complete model code, spool function, mounting pattern, pressure, flow, voltage and seals before quotation.",
    parameterGroups: [
      "Valve type and nominal size",
      "Spool function and control method",
      "Rated and maximum pressure",
      "Rated flow and pressure drop",
      "Mounting interface and port pattern",
      "Voltage, connector and coil options",
      "Seal material and fluid compatibility",
      "Application duty and environment",
    ],
    subcategories: [
      {
        title: "Solenoid Directional Valves",
        slug: "solenoid-directional-valves",
        summary:
          "Model-code review for solenoid-operated directional valves and common CETOP / ISO mounting patterns.",
      },
      {
        title: "Pressure Control Valves",
        slug: "pressure-control-valves",
        summary: "Relief, reducing, sequence and unloading valve sourcing.",
      },
      {
        title: "Flow Control Valves",
        slug: "flow-control-valves",
        summary: "Throttle, flow-regulating and pressure-compensated options.",
      },
      {
        title: "Modular Valves",
        slug: "modular-valves",
        summary:
          "Sandwich-plate valves reviewed by size, function and stacking arrangement.",
      },
      {
        title: "Check Valves",
        slug: "check-valves",
        summary: "Inline, sandwich and pilot-operated check valves.",
      },
      {
        title: "Proportional & Servo Valves",
        slug: "proportional-servo-valves",
        summary:
          "Selected higher-risk series offered only when supply and verification data are available.",
      },
    ],
    applications: [
      "Industrial machinery",
      "Plastic injection machinery",
      "Metal forming and presses",
      "Machine tools",
      "Material handling",
      "Construction equipment",
    ],
    brandReferences: [
      "Bosch Rexroth",
      "Eaton / Vickers",
      "Parker",
      "Yuken",
      "Atos",
      "Danfoss",
    ],
    verification: [
      "Send the complete model code, not only the series name.",
      "Confirm spool symbol, voltage and connector.",
      "Provide a photo of the nameplate and mounting face when possible.",
      "For proportional or servo valves, provide electronics and application details.",
    ],
    buyingGuidance: [
      {
        title: "Manufacturer and supplier scope",
        text: "Choose a new-production route for confirmed specifications or a replacement route for an existing directional, pressure, flow, modular or check valve reference.",
      },
      {
        title: "Direct-compatibility commitment",
        text: "When the evidence supports direct-fit wording, it applies only to the quoted valve, confirmed interface, function, electrical specification and recorded application. Any known difference is listed before order.",
      },
      {
        title: "Stock, lead time and warranty",
        text: "Exact availability, production lead time, MOQ, inspection scope and any warranty period are stated for the exact code and quantity in the quotation.",
      },
    ],
    relatedLinks: [
      {
        title: "Bosch Rexroth valve alternatives",
        href: "/alternatives/rexroth/",
        summary: "Review 4WE6, 4WE10 and related directional-valve references.",
      },
      {
        title: "Eaton / Vickers valve alternatives",
        href: "/alternatives/vickers/",
        summary: "Browse DG4V and pressure-control valve matching routes.",
      },
      {
        title: "Exact valve series",
        href: "/series/",
        summary:
          "Move from a broad valve type to a series or exact model record.",
      },
      {
        title: "Hydraulic valve parts",
        href: "/products/hydraulic-repair-kits/hydraulic-valve-parts/",
        summary:
          "Solenoids, coils, seals and selected service parts by parent-valve code.",
      },
    ],
  },
  {
    slug: "hydraulic-pumps",
    title: "Hydraulic Pumps",
    seoTitle: "Hydraulic Pump Manufacturer & Supplier",
    h1Title: "Hydraulic Pump Manufacturer & Supplier",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    summary:
      "Hydraulic pump manufacturer and supplier for axial piston, vane and gear pumps, including replacement pump review and quote-based pricing.",
    intro:
      "Source new and replacement hydraulic pumps through one technical review. We verify the complete code, displacement, control, rotation, shaft, flange and ports before confirming compatibility, price and lead time.",
    parameterGroups: [
      "Pump type and displacement",
      "Working and peak pressure",
      "Control or compensator type",
      "Rotation direction",
      "Mounting flange",
      "Drive shaft and spline",
      "Port position and thread",
      "Through-drive and auxiliary options",
    ],
    subcategories: [
      {
        title: "Axial Piston Pumps",
        slug: "axial-piston-pumps",
        summary:
          "Variable and fixed displacement piston pump sourcing for industrial and mobile systems.",
      },
      {
        title: "Vane Pumps",
        slug: "vane-pumps",
        summary: "Single, double and cartridge-type vane pump options.",
      },
      {
        title: "Gear Pumps",
        slug: "gear-pumps",
        summary:
          "External gear pumps reviewed by displacement, flange, shaft and ports.",
      },
    ],
    applications: [
      "Industrial power units",
      "Construction equipment",
      "Mobile machinery",
      "Plastic machinery",
      "Presses and forming lines",
      "Mining and material handling",
    ],
    brandReferences: [
      "Bosch Rexroth",
      "Eaton / Vickers",
      "Parker",
      "Danfoss",
      "Yuken",
    ],
    verification: [
      "Provide the complete model code and nameplate photo.",
      "Confirm clockwise or counter-clockwise rotation as viewed from the shaft.",
      "Share flange, shaft and port photos or dimensions.",
      "State the application, pressure, fluid and replacement reason.",
    ],
    buyingGuidance: [
      {
        title: "Replacement pump matching",
        text: "A replacement is matched against the full original code and installation details—not the series name alone. The quotation states whether the route is direct-compatible or requires a disclosed change.",
      },
      {
        title: "Variable displacement pump review",
        text: "Variable displacement pumps—axial piston and vane types included—adjust output flow through a swashplate, yoke or compensator control. The control type, displacement range, pressure rating, rotation and flange are confirmed from the complete code before an option is quoted.",
      },
      {
        title: "How hydraulic pump price is set",
        text: "Price depends on pump family, displacement, control, shaft, flange, port arrangement, condition, quantity and destination. Submit the nameplate for an exact commercial offer.",
      },
      {
        title: "Supply evidence",
        text: "The quotation identifies availability, condition, MOQ, lead time, inspection documents and any written warranty period for the offered unit.",
      },
    ],
    relatedLinks: [
      {
        title: "Bosch Rexroth replacement pumps",
        href: "/alternatives/rexroth/",
        summary: "A10VO, A10VSO, A4VSO, A4VG and related pump families.",
      },
      {
        title: "Parker hydraulic pumps",
        href: "/brands/parker/",
        summary:
          "Parker and Parker Denison vane-pump and service-part coverage.",
      },
      {
        title: "Caterpillar hydraulic pumps",
        href: "/series/cat-piston-pump/",
        summary:
          "Construction-equipment piston pump records and matching review.",
      },
    ],
  },
  {
    slug: "hydraulic-cylinders",
    title: "Hydraulic Cylinders",
    seoTitle: "Hydraulic Cylinder Manufacturer & Supplier",
    h1Title: "Hydraulic Cylinder Manufacturer & Supplier",
    image: "/images/hydraulic/hydraulic-cylinders.webp",
    summary:
      "Hydraulic cylinder manufacturer and supplier for standard, custom and replacement cylinders developed from drawings, samples and confirmed operating conditions.",
    intro:
      "Standard, custom and replacement hydraulic cylinder requests are handled as engineering RFQs. Send a drawing, sample or complete dimensional and operating specification for design review, pricing and production planning.",
    parameterGroups: [
      "Bore and rod diameter",
      "Stroke and closed length",
      "Working and test pressure",
      "Mounting type and pin dimensions",
      "Port position and thread",
      "Seal material and fluid",
      "Speed, load and duty cycle",
      "Cushioning, sensors and surface finish",
    ],
    subcategories: [
      {
        title: "Standard Industrial Cylinders",
        slug: "standard-industrial-cylinders",
        summary:
          "Industrial tie-rod and welded cylinder sourcing against a confirmed specification.",
      },
      {
        title: "Custom Hydraulic Cylinders",
        slug: "custom-hydraulic-cylinders",
        summary:
          "Made-to-order cylinders developed from a drawing, sample or full design brief.",
      },
    ],
    applications: [
      "Industrial presses",
      "Steel and metal processing",
      "Mining equipment",
      "Construction machinery",
      "Material handling",
      "Special-purpose machinery",
    ],
    brandReferences: [
      "Drawing-based replacement",
      "Sample-based measurement",
      "Application-specific design",
    ],
    verification: [
      "Send a dimensioned drawing whenever possible.",
      "Confirm pressure, load, speed and duty cycle.",
      "State mounting, port, seal and environment requirements.",
      "A sample or first-article review is recommended before batch production.",
    ],
    buyingGuidance: [
      {
        title: "Custom cylinder manufacturing",
        text: "Made-to-order cylinders can be developed from a dimensioned drawing, an approved sample or a complete design brief covering load, speed, pressure, mounting and environment.",
      },
      {
        title: "Replacement cylinder review",
        text: "Hydraulic cylinder replacement review compares closed length, stroke, bore, rod, mounting, ports and operating duty before classifying an offered replacement.",
      },
      {
        title: "Commercial confirmation",
        text: "The final offer states material and inspection scope, MOQ, lead time, any warranty period and any first-article requirement.",
      },
    ],
    relatedLinks: [
      {
        title: "Custom hydraulic cylinders",
        href: "/products/hydraulic-cylinders/custom-hydraulic-cylinders/",
        summary: "Drawing-based and application-specific cylinder development.",
      },
      {
        title: "Standard industrial cylinders",
        href: "/products/hydraulic-cylinders/standard-industrial-cylinders/",
        summary:
          "Tie-rod and welded cylinder sourcing against a confirmed specification.",
      },
      {
        title: "Submit a cylinder RFQ",
        href: "/request-a-quote/?product=hydraulic-cylinders",
        summary:
          "Send drawings, dimensions, operating conditions and required quantity.",
      },
    ],
  },
  {
    slug: "hydraulic-motors",
    title: "Hydraulic Motors",
    seoTitle: "Hydraulic Motor Manufacturer & Supplier",
    h1Title: "Hydraulic Motor Manufacturer & Supplier",
    image: "/images/hydraulic/hydraulic-motors.webp",
    summary:
      "Hydraulic motor manufacturer and supplier for orbital, axial piston, radial piston, swing and travel motors, with replacement and distributor support.",
    intro:
      "Hydraulic Match supports distributors, repair companies and equipment owners sourcing new and replacement hydraulic motors. We review the complete reference together with torque, speed, pressure, shaft, flange, ports, brake and machine duty.",
    parameterGroups: [
      "Motor type and displacement",
      "Required torque and operating speed",
      "Working and peak pressure",
      "Shaft, flange and mounting pilot",
      "Port size and position",
      "Brake, flushing and case-drain options",
      "Rotation and control configuration",
      "Machine duty and environment",
    ],
    subcategories: [
      {
        title: "Orbital Hydraulic Motors",
        slug: "orbital-hydraulic-motors",
        summary:
          "Gerotor and geroler motor references reviewed by displacement, shaft, flange, ports and duty.",
      },
      {
        title: "Axial Piston Motors",
        slug: "axial-piston-motors",
        summary:
          "Fixed and variable piston motors for industrial and mobile drive applications.",
      },
      {
        title: "Radial Piston Motors",
        slug: "radial-piston-motors",
        summary:
          "High-torque radial piston motor inquiries for winch, wheel, marine and industrial drives.",
      },
      {
        title: "Swing & Travel Motors",
        slug: "swing-travel-motors",
        summary:
          "Excavator and mobile-equipment motor assemblies reviewed with machine and brake information.",
      },
    ],
    applications: [
      "Construction equipment",
      "Agricultural machinery",
      "Marine and winch drives",
      "Material handling",
      "Mining machinery",
      "Industrial rotary drives",
    ],
    brandReferences: [
      "Bosch Rexroth",
      "Danfoss",
      "Kawasaki",
      "Parker",
      "Poclain",
      "Eaton / Char-Lynn",
    ],
    verification: [
      "Provide the complete motor code and nameplate.",
      "State the machine, required speed, torque and pressure.",
      "Confirm shaft, flange, ports and case-drain arrangement.",
      "For mobile units, include brake, reduction and installed-unit photos.",
    ],
    buyingGuidance: [
      {
        title: "Supplier and distributor support",
        text: "Single replacements, repair-shop requirements and repeat distributor programs can be quoted with the relevant stock, production and packing route identified.",
      },
      {
        title: "Replacement motor commitment",
        text: "A direct-compatible offer is issued only after the code, displacement, shaft, flange, ports, brake and operating duty are confirmed. Differences are disclosed in the quotation.",
      },
      {
        title: "Commercial terms",
        text: "Condition, exact availability, MOQ, lead time, inspection scope and any warranty period are confirmed for the exact motor and quantity offered.",
      },
    ],
    relatedLinks: [
      {
        title: "Poclain MCR replacements",
        href: "/series/mcr/",
        summary: "MCR radial piston motor and MCR03 service-kit matching.",
      },
      {
        title: "Bosch Rexroth motor coverage",
        href: "/brands/bosch-rexroth/",
        summary: "Review motor references by exact model and application.",
      },
      {
        title: "Exact motor model records",
        href: "/models/",
        summary: "Search consolidated model, part and service-kit records.",
      },
      {
        title: "Hydraulic motor parts",
        href: "/products/hydraulic-repair-kits/hydraulic-motor-parts/",
        summary:
          "Service parts and seal-kit routes identified from the complete motor code.",
      },
    ],
  },
  {
    slug: "hydraulic-pump-parts",
    title: "Hydraulic Pump Parts",
    seoTitle: "Hydraulic Pump Parts Supplier | Hydraulic Match",
    h1Title: "Hydraulic Pump Parts Supplier",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    summary:
      "Hydraulic pump parts supplier for rotating groups, cylinder blocks, valve plates, piston shoes, shafts, seal kits and repair components tied to confirmed pump references.",
    intro:
      "Hydraulic pump replacement parts are quoted only when the pump series, complete model code and required component can be identified reliably. Stock, condition, kit scope and warranty are confirmed by line item.",
    parameterGroups: [
      "Original pump brand and series",
      "Complete pump model code",
      "Part number or component position",
      "Dimensions and photos",
      "Rotation and shaft details",
      "Material or surface requirement",
      "Quantity and repair scope",
      "Required inspection documents",
    ],
    subcategories: [],
    applications: [
      "Pump repair workshops",
      "Hydraulic service companies",
      "MRO warehouses",
      "Distributor stock programs",
    ],
    brandReferences: ["Bosch Rexroth", "Eaton / Vickers", "Parker", "Danfoss"],
    verification: [
      "Provide pump nameplate and dismantled-part photos.",
      "Use an original part number when available.",
      "Confirm dimensions before shipment.",
      "Repair outcome depends on the condition of the complete pump.",
    ],
    buyingGuidance: [
      {
        title: "Part-number and parent-pump match",
        text: "Use the original part number where available. Otherwise, the complete pump code, dismantled-part photos, dimensions and component position are required.",
      },
      {
        title: "Matched rotating components",
        text: "Cylinder blocks, valve plates and piston assemblies may need to be supplied as a matched rotating group rather than mixed with worn components.",
      },
      {
        title: "Stock and commercial scope",
        text: "The quotation states exact availability, new or remanufactured condition, included parts, MOQ, lead time, inspection evidence and any warranty period.",
      },
    ],
    relatedLinks: [
      {
        title: "Hydraulic seal kits",
        href: "/products/hydraulic-repair-kits/hydraulic-seal-kits/",
        summary:
          "Identify pump seal kits by complete unit code, size and revision.",
      },
      {
        title: "Pump and motor rotating groups",
        href: "/products/hydraulic-repair-kits/pump-motor-rotating-groups/",
        summary:
          "Matched cylinder block, valve plate and piston assembly routes.",
      },
      {
        title: "Hydraulic pump cross-reference",
        href: "/cross-reference/",
        summary:
          "Submit a complete code for replacement pump and parts review.",
      },
    ],
  },
  {
    slug: "hydraulic-repair-kits",
    title: "Hydraulic Repair Kits & Service Parts",
    seoTitle: "Hydraulic Seal Kit & Repair Parts Supplier | Hydraulic Match",
    h1Title: "Hydraulic Seal Kits & Repair Parts Supplier",
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    summary:
      "Hydraulic seal kits, pump and motor parts, cartridges, rotating groups, bearings and shafts supplied against the complete parent-unit reference.",
    intro:
      "A service part is identified from the complete pump, motor or valve code—not from appearance alone. Quotation scope distinguishes genuine, aftermarket and component-only routes when available.",
    parameterGroups: [
      "Parent component brand and complete code",
      "Original service-part number",
      "Part description and position",
      "Seal material and fluid",
      "Dimensions and identifying marks",
      "Repair symptoms and dismantled condition",
      "Required kit completeness",
      "Inspection and packing evidence",
    ],
    subcategories: [
      {
        title: "Hydraulic Seal Kits",
        slug: "hydraulic-seal-kits",
        summary:
          "Pump, motor, valve and cylinder seal-kit identification from the parent-unit code and seal requirement.",
      },
      {
        title: "Pump & Motor Rotating Groups",
        slug: "pump-motor-rotating-groups",
        summary:
          "Cylinder blocks, valve plates, piston assemblies and matched rotating groups for confirmed references.",
      },
      {
        title: "Vane Pump Cartridges",
        slug: "vane-pump-cartridges",
        summary:
          "Replacement cartridges reviewed by pump family, displacement, rotation and cover configuration.",
      },
      {
        title: "Hydraulic Motor Parts",
        slug: "hydraulic-motor-parts",
        summary:
          "Hydraulic motor parts, seal kits, shafts, bearings and rotating components identified from the complete motor code.",
      },
      {
        title: "Hydraulic Valve Parts",
        slug: "hydraulic-valve-parts",
        summary:
          "Hydraulic valve parts, solenoids, coils, seals and selected components identified from the parent-valve code.",
      },
    ],
    applications: [
      "Hydraulic repair shops",
      "Distributor stock programs",
      "Industrial MRO",
      "Mobile-equipment service",
      "Pump and motor rebuilders",
    ],
    brandReferences: [
      "Bosch Rexroth",
      "Eaton / Vickers",
      "Parker / Denison",
      "Danfoss",
      "Kawasaki",
      "Linde",
    ],
    verification: [
      "Provide the complete parent-unit nameplate.",
      "Use the original service-part number when available.",
      "Send dismantled-part photos and dimensions.",
      "Confirm whether a complete kit or individual components are required.",
    ],
    buyingGuidance: [
      {
        title: "Kit identification",
        text: "The parent-unit model, size and design revision determine the correct seal kit. Photos and dimensions help resolve units with incomplete or unreadable nameplates.",
      },
      {
        title: "Pump and motor parts",
        text: "Rotating groups, cartridges, shafts, bearings and individual service parts are quoted only when the required component can be tied to a confirmed parent reference.",
      },
      {
        title: "Stock, authenticity and warranty",
        text: "The offer states exact availability, supply route, kit contents, MOQ, lead time and any warranty period. Authorization or genuine status is claimed only when supported for that item.",
      },
    ],
    relatedLinks: [
      {
        title: "MCR03 hydraulic seal kit",
        href: "/models/poclain-mcr03-seal-kit/",
        summary:
          "Exact model record for the Poclain MCR03 service-kit requirement.",
      },
      {
        title: "Hydraulic pump parts",
        href: "/products/hydraulic-pump-parts/",
        summary:
          "Rotating groups, cylinder blocks, valve plates and pump components.",
      },
      {
        title: "Service-part series directory",
        href: "/series/",
        summary: "Find kits and parts through the pump or motor series.",
      },
    ],
  },
];
