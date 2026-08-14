export type HydraulicBrandCoverage = {
  slug: string;
  name: string;
  aliases: string[];
  summary: string;
  positioning: string;
  image: string;
  productFamilies: string[];
  seriesReferences: {
    series: string;
    productType: string;
    reviewFocus: string;
  }[];
  applications: string[];
  requiredEvidence: string[];
  officialLabel: string;
  officialUrl: string;
  detailedHref?: string;
};

/**
 * Brand and series references accepted for identification review.
 *
 * Inclusion means Hydraulic Match can receive and structure an RFQ for the
 * reference. It does not claim authorization, current inventory, confirmed
 * interchangeability or an original-product supply route.
 */
export const brandCoverage: HydraulicBrandCoverage[] = [
  {
    slug: "bosch-rexroth",
    name: "Bosch Rexroth",
    aliases: ["Rexroth", "Bosch"],
    summary:
      "Industrial and mobile hydraulic valve, pump and motor references reviewed from the complete type code.",
    positioning:
      "Rexroth codes often combine function, size, control, rotation, shaft, flange, port and option details. Short family names are used only to route the inquiry.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Directional and modular valves",
      "Axial piston pumps",
      "Axial piston motors",
      "Pump parts and seal kits",
    ],
    seriesReferences: [
      {
        series: "4WE6 / 4WE10",
        productType: "Directional valves",
        reviewFocus: "Spool, voltage, connector and mounting interface",
      },
      {
        series: "Z2S / Z2FS",
        productType: "Modular valves",
        reviewFocus: "Stack function, size and sandwich interface",
      },
      {
        series: "A10VSO / A10VO",
        productType: "Open-circuit piston pumps",
        reviewFocus: "Displacement, control, rotation, shaft and flange",
      },
      {
        series: "A4VG",
        productType: "Closed-circuit piston pumps",
        reviewFocus: "Control, charge circuit and machine duty",
      },
      {
        series: "A11VO / A11VLO",
        productType: "Mobile piston pumps",
        reviewFocus: "Control, through-drive and application",
      },
      {
        series: "A2FO / A2FM / A6VM",
        productType: "Bent-axis pumps and motors",
        reviewFocus: "Function, displacement, mounting and speed",
      },
    ],
    applications: [
      "Industrial machinery",
      "Mobile equipment",
      "Machine tools",
      "Presses and power units",
    ],
    requiredEvidence: [
      "Complete type code and material number",
      "Nameplate and installed-unit photos",
      "Pressure, flow or displacement",
      "Electrical or pump-control details",
      "Machine and operating conditions",
    ],
    officialLabel: "Bosch Rexroth product portfolio",
    officialUrl: "https://www.boschrexroth.com/en/dc/products/",
    detailedHref: "/alternatives/rexroth/",
  },
  {
    slug: "eaton-vickers",
    name: "Eaton / Vickers",
    aliases: ["Vickers", "Eaton Hydraulics"],
    summary:
      "Directional, proportional and pressure-control valves plus vane and piston pump references.",
    positioning:
      "Legacy and current Vickers references may use different catalog generations. The original code, part number and installation evidence are kept together during review.",
    image: "/images/hydraulic/hydraulic-valves.webp",
    productFamilies: [
      "Directional and proportional valves",
      "Vane pumps and cartridges",
      "Piston pumps",
      "Seal kits and rotating parts",
    ],
    seriesReferences: [
      {
        series: "DG4V / DG5V",
        productType: "Directional valves",
        reviewFocus: "Frame, spool, pilot arrangement and solenoid",
      },
      {
        series: "KDG / KBDG",
        productType: "Proportional valves",
        reviewFocus: "Command signal, electronics and spool function",
      },
      {
        series: "V10 / V20",
        productType: "Vane pumps",
        reviewFocus: "Shaft, rotation, cover and ports",
      },
      {
        series: "20V–45V / VQ",
        productType: "Single and multiple vane pumps",
        reviewFocus: "Cartridge, cover and section configuration",
      },
      {
        series: "PVB / PVH / PVQ",
        productType: "Piston pumps",
        reviewFocus: "Displacement, control, mounting and shaft",
      },
    ],
    applications: [
      "Industrial power units",
      "Injection machinery",
      "Mobile hydraulics",
      "Repair and MRO",
    ],
    requiredEvidence: [
      "Complete model and part number",
      "Nameplate and connector or pump-side photos",
      "Required function and operating values",
      "Fluid and seal requirement",
      "Known replacement reason",
    ],
    officialLabel: "Danfoss PowerSource product information",
    officialUrl: "https://powersource.danfoss.com/",
    detailedHref: "/alternatives/vickers/",
  },
  {
    slug: "parker",
    name: "Parker",
    aliases: ["Parker Hannifin", "Parker Denison"],
    summary:
      "Industrial valve, piston pump, vane pump and bent-axis pump or motor references.",
    positioning:
      "Parker references span multiple hydraulic product groups. Review starts by separating the product family, exact code, mounting standard and installed options.",
    image: "/images/hydraulic/hydraulic-valves.webp",
    productFamilies: [
      "Industrial valves",
      "Piston and vane pumps",
      "Hydraulic motors",
      "Repair parts and seal kits",
    ],
    seriesReferences: [
      {
        series: "D1VW / D3W",
        productType: "Directional valves",
        reviewFocus: "Spool, size, voltage and mounting",
      },
      {
        series: "D41 / D91",
        productType: "Proportional valves",
        reviewFocus: "Signal, electronics, feedback and flow requirement",
      },
      {
        series: "PAVC / PVP",
        productType: "Piston pumps",
        reviewFocus: "Control, displacement, shaft and ports",
      },
      {
        series: "T6 / T7",
        productType: "Vane pumps",
        reviewFocus: "Cartridge, rotation and port arrangement",
      },
      {
        series: "F11 / F12",
        productType: "Bent-axis units",
        reviewFocus: "Pump or motor function, speed and mounting",
      },
    ],
    applications: [
      "Factory automation",
      "Mobile machinery",
      "Marine equipment",
      "Industrial MRO",
    ],
    requiredEvidence: [
      "Complete code and product label",
      "Hydraulic function or pump duty",
      "Electrical information when applicable",
      "Mounting, shaft and port evidence",
      "Quantity and destination",
    ],
    officialLabel: "Parker hydraulic products",
    officialUrl: "https://ph.parker.com/us/en/hydraulics",
    detailedHref: "/alternatives/parker/",
  },
  {
    slug: "danfoss-sundstrand",
    name: "Danfoss / Sauer-Sundstrand",
    aliases: ["Sauer-Danfoss", "Sundstrand", "Danfoss Power Solutions"],
    summary:
      "Hydrostatic pumps, motors, orbital motors and mobile control valve references.",
    positioning:
      "Hydrostatic components require machine, loop, charge-system and control information in addition to the nameplate. Legacy Sundstrand references receive an obsolescence check.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Hydrostatic pumps and motors",
      "Orbital motors",
      "Mobile valves",
      "Controls and service parts",
    ],
    seriesReferences: [
      {
        series: "Series 20 / 40 / 42",
        productType: "Hydrostatic pumps and motors",
        reviewFocus: "Legacy code, control and loop configuration",
      },
      {
        series: "Series 45",
        productType: "Open-circuit piston pumps",
        reviewFocus: "Frame, control, shaft and ports",
      },
      {
        series: "Series 51 / 90",
        productType: "Hydrostatic units",
        reviewFocus: "Frame, control and charge-system review",
      },
      {
        series: "H1",
        productType: "Hydrostatic pumps and motors",
        reviewFocus: "Electronic control and machine integration",
      },
      {
        series: "OMM / OMP / OMR",
        productType: "Orbital motors",
        reviewFocus: "Displacement, shaft, flange and ports",
      },
      {
        series: "PVG",
        productType: "Mobile valve platforms",
        reviewFocus: "Sections, actuation, flow and electronics",
      },
    ],
    applications: [
      "Agricultural machinery",
      "Construction equipment",
      "Material handling",
      "Off-highway vehicles",
    ],
    requiredEvidence: [
      "Complete model and serial information",
      "Machine make and model",
      "Pump or motor function",
      "Control and charge-circuit details",
      "Shaft, flange and port photos",
    ],
    officialLabel: "Danfoss Power Solutions products",
    officialUrl: "https://www.danfoss.com/en/products/dps/",
  },
  {
    slug: "denison",
    name: "Denison",
    aliases: ["Denison Hydraulics", "Parker Denison"],
    summary:
      "Vane pump and Gold Cup piston pump references, including legacy configurations.",
    positioning:
      "Denison reviews prioritize catalog generation, complete code, pump configuration and installed controls because short series references can cover materially different builds.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Single and multiple vane pumps",
      "Gold Cup piston pumps",
      "Legacy piston pumps",
      "Cartridges and repair kits",
    ],
    seriesReferences: [
      {
        series: "T6 / T7",
        productType: "Vane pumps",
        reviewFocus: "Single, double or triple configuration and porting",
      },
      {
        series: "P6 / P7 / P8",
        productType: "Gold Cup pumps",
        reviewFocus: "Control, displacement and system function",
      },
      {
        series: "P11 / P14 / P24 / P30",
        productType: "Gold Cup pumps",
        reviewFocus: "High-value control and installation review",
      },
      {
        series: "PV / PVT",
        productType: "Legacy piston pumps",
        reviewFocus: "Catalog generation, shaft, mounting and control",
      },
    ],
    applications: [
      "Industrial presses",
      "Marine systems",
      "Heavy machinery",
      "Pump repair",
    ],
    requiredEvidence: [
      "Full original code",
      "Existing pump photos",
      "Control and displacement requirement",
      "Rotation, shaft and mounting",
      "Repair history when known",
    ],
    officialLabel: "Parker hydraulic products",
    officialUrl: "https://ph.parker.com/us/en/hydraulics",
  },
  {
    slug: "kawasaki",
    name: "Kawasaki Precision Machinery",
    aliases: ["Kawasaki Hydraulics", "KPM"],
    summary:
      "Excavator pumps, swing motors, axial piston units and Staffa radial piston motor references.",
    positioning:
      "Mobile-equipment reviews link the hydraulic code to the machine make, model, regulator, brake and tandem configuration before a supply route is proposed.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Excavator piston pumps",
      "Swing motors",
      "Industrial piston pumps",
      "Radial piston motors",
    ],
    seriesReferences: [
      {
        series: "K3V / K5V / K7V",
        productType: "Excavator pumps",
        reviewFocus: "Machine, regulator and tandem configuration",
      },
      {
        series: "K3VL",
        productType: "Open-circuit piston pumps",
        reviewFocus: "Control, shaft and mounting",
      },
      {
        series: "M2X / M5X",
        productType: "Swing motors",
        reviewFocus: "Machine, brake and reduction interface",
      },
      {
        series: "HMB / HMC",
        productType: "Staffa radial piston motors",
        reviewFocus: "Displacement, mounting and duty",
      },
    ],
    applications: [
      "Excavators",
      "Cranes",
      "Marine winches",
      "Industrial drives",
    ],
    requiredEvidence: [
      "Complete pump or motor code",
      "Machine make, model and serial range",
      "Regulator or brake photos",
      "Failure and replacement reason",
      "Required shipment scope",
    ],
    officialLabel: "Kawasaki Precision Machinery products",
    officialUrl: "https://www.kpm-usa.com/products/",
  },
  {
    slug: "yuken",
    name: "Yuken",
    aliases: ["Yuken Kogyo"],
    summary:
      "Industrial pumps, directional valves, modular valves and proportional control references.",
    positioning:
      "Yuken industrial references are reviewed by product class, design number, pressure range, electrical option and subplate or modular interface.",
    image: "/images/hydraulic/hydraulic-valves.webp",
    productFamilies: [
      "Piston and vane pumps",
      "Directional and pressure valves",
      "Modular valves",
      "Proportional and servo controls",
    ],
    seriesReferences: [
      {
        series: "A / A3H / A3HG",
        productType: "Piston pumps",
        reviewFocus: "Displacement, pressure adjustment and control",
      },
      {
        series: "AR",
        productType: "Variable piston pumps",
        reviewFocus: "Design number, pressure range and mounting",
      },
      {
        series: "PV2R",
        productType: "Vane pumps",
        reviewFocus: "Single or double configuration and rotation",
      },
      {
        series: "DSG / DSHG",
        productType: "Directional valves",
        reviewFocus: "Size, spool, voltage and pilot arrangement",
      },
      {
        series: "EDG / EFBG",
        productType: "Proportional controls",
        reviewFocus: "Electronics, pressure or flow range and signal",
      },
    ],
    applications: [
      "Machine tools",
      "Plastic machinery",
      "Industrial power units",
      "Metal forming",
    ],
    requiredEvidence: [
      "Complete code including design number",
      "Nameplate and connector photos",
      "Pressure and flow requirement",
      "Subplate or mounting details",
      "Fluid and application",
    ],
    officialLabel: "Yuken hydraulic product information",
    officialUrl: "https://www.yuken.co.jp/en/",
  },
  {
    slug: "nachi",
    name: "NACHI",
    aliases: ["Nachi-Fujikoshi"],
    summary:
      "Industrial piston, vane and gear pumps plus modular and solenoid valve references.",
    positioning:
      "NACHI inquiries are separated by pump or valve family, complete design code and installation evidence before dimensional or functional comparison.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Piston, vane and gear pumps",
      "Solenoid valves",
      "Modular and pressure valves",
      "Hydraulic units",
    ],
    seriesReferences: [
      {
        series: "PVS / PZS / PZ",
        productType: "Piston pumps",
        reviewFocus: "Displacement, control, pressure and mounting",
      },
      {
        series: "VDS / VDR / VDC",
        productType: "Vane pumps",
        reviewFocus: "Pressure setting, design series and mounting",
      },
      {
        series: "IPH",
        productType: "Internal gear pumps",
        reviewFocus: "Pump size, section count and shaft",
      },
      {
        series: "G01 / G03 / G04",
        productType: "Modular valves",
        reviewFocus: "Function, stack size and mounting",
      },
      {
        series: "SA / SS / SL",
        productType: "Solenoid valves",
        reviewFocus: "Spool, voltage, connector and size",
      },
    ],
    applications: [
      "Machine tools",
      "Industrial machinery",
      "Compact power units",
      "Factory maintenance",
    ],
    requiredEvidence: [
      "Complete model and design code",
      "Nameplate and installation photos",
      "Pump adjustment or valve function",
      "Electrical data where applicable",
      "Operating pressure and fluid",
    ],
    officialLabel: "NACHI hydraulic equipment catalog",
    officialUrl:
      "https://www.nachi-fujikoshi.co.jp/eng/web/hydraulic/index.html",
  },
  {
    slug: "linde",
    name: "Linde Hydraulics",
    aliases: ["Linde"],
    summary:
      "Mobile piston pump and motor references for closed- and open-circuit applications.",
    positioning:
      "Linde mobile units are reviewed with the complete configuration, machine duty, electronic or hydraulic control and drive interface.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Open-circuit pumps",
      "Closed-circuit pumps",
      "Hydraulic motors",
      "Electronic controls and parts",
    ],
    seriesReferences: [
      {
        series: "HPR",
        productType: "Open-circuit piston pumps",
        reviewFocus: "Control, displacement and application",
      },
      {
        series: "HPV",
        productType: "Closed-circuit piston pumps",
        reviewFocus: "Control, charge system and machine",
      },
      {
        series: "HMV / HMF",
        productType: "Piston motors",
        reviewFocus: "Displacement, control, brake and mounting",
      },
      {
        series: "CMV",
        productType: "Variable motors",
        reviewFocus: "Control strategy and mobile duty",
      },
    ],
    applications: [
      "Construction machinery",
      "Agricultural equipment",
      "Mining machinery",
      "Mobile drives",
    ],
    requiredEvidence: [
      "Complete nameplate code",
      "Machine and circuit information",
      "Control type and settings",
      "Shaft and port arrangement",
      "Photos of installed interfaces",
    ],
    officialLabel: "Linde Hydraulics products",
    officialUrl: "https://www.linde-hydraulics.com/products/",
  },
  {
    slug: "atos",
    name: "Atos",
    aliases: ["Atos Hydraulics"],
    summary:
      "Industrial on-off, proportional and servo-proportional valves plus piston and fixed-displacement pumps.",
    positioning:
      "Atos electronic valve reviews require the complete valve and driver references, command signal, feedback option and machine-control context.",
    image: "/images/hydraulic/hydraulic-valves.webp",
    productFamilies: [
      "On-off valves",
      "Proportional and servo-proportional valves",
      "Pumps and servopumps",
      "Cylinders and controls",
    ],
    seriesReferences: [
      {
        series: "DHI / DHE",
        productType: "Directional valves",
        reviewFocus: "Spool, voltage, connector and mounting",
      },
      {
        series: "DHZO / DKZOR",
        productType: "Proportional valves",
        reviewFocus: "Signal, spool, electronics and flow",
      },
      {
        series: "DPZO",
        productType: "Pilot-operated proportional valves",
        reviewFocus: "Driver, feedback and system dynamics",
      },
      {
        series: "PVPC",
        productType: "Piston pumps",
        reviewFocus: "Control, displacement and pressure setting",
      },
      {
        series: "PFG / PFED",
        productType: "Fixed-displacement pumps",
        reviewFocus: "Displacement, shaft and pump combination",
      },
    ],
    applications: [
      "Metal forming",
      "Plastic machinery",
      "Test equipment",
      "Industrial automation",
    ],
    requiredEvidence: [
      "Complete valve and driver codes",
      "Electrical signal and supply",
      "Hydraulic schematic or required function",
      "Pressure and flow conditions",
      "Environment and certification requirement",
    ],
    officialLabel: "Atos product portfolio",
    officialUrl: "https://www.atos.com/en-it/",
  },
  {
    slug: "hawe",
    name: "HAWE Hydraulik",
    aliases: ["HAWE"],
    summary:
      "High-pressure pumps, compact power packs and mobile or industrial valve references.",
    positioning:
      "HAWE component and valve-bank reviews require the full configuration, section sequence, actuation and application pressure rather than a short type name.",
    image: "/images/hydraulic/hydraulic-valves.webp",
    productFamilies: [
      "High-pressure pumps",
      "Valve banks",
      "Pressure and directional valves",
      "Compact power packs",
    ],
    seriesReferences: [
      {
        series: "V30D / V30E / V60N",
        productType: "Variable piston pumps",
        reviewFocus: "Displacement, control and mounting",
      },
      {
        series: "R",
        productType: "Radial piston pumps",
        reviewFocus: "Pump elements, pressure and drive arrangement",
      },
      {
        series: "PSL / PSV",
        productType: "Mobile valve banks",
        reviewFocus: "Section sequence, control and flow sharing",
      },
      {
        series: "NBVP",
        productType: "Directional seated valves",
        reviewFocus: "Function, voltage and subplate",
      },
      {
        series: "HK / HKA",
        productType: "Compact power packs",
        reviewFocus: "Motor, pump, tank and valve configuration",
      },
    ],
    applications: [
      "Mobile machinery",
      "Hydraulic tools",
      "Test systems",
      "Compact industrial equipment",
    ],
    requiredEvidence: [
      "Full configuration code",
      "Valve-bank section order where applicable",
      "Pressure and flow requirement",
      "Electrical and actuation details",
      "Machine schematic or photos",
    ],
    officialLabel: "HAWE hydraulic products",
    officialUrl: "https://www.hawe.com/en-us/products/",
  },
  {
    slug: "moog",
    name: "Moog",
    aliases: ["Moog Industrial"],
    summary:
      "Servo, servo-proportional and high-response valve references plus radial piston pumps.",
    positioning:
      "Moog products are treated as high-risk motion-control components. No alternative is proposed without electronics, signal, feedback, cleanliness and dynamic-performance information.",
    image: "/images/hydraulic/hydraulic-valves.webp",
    productFamilies: [
      "Servo valves",
      "Servo-proportional valves",
      "Cartridge valves",
      "Radial piston pumps",
    ],
    seriesReferences: [
      {
        series: "G761",
        productType: "Mechanical-feedback servo valves",
        reviewFocus: "Flow rating, coil, null and mounting",
      },
      {
        series: "D633 / D634",
        productType: "Direct-drive servo valves",
        reviewFocus: "Signal, feedback and dynamic requirement",
      },
      {
        series: "D661 / D765",
        productType: "Servo-proportional valves",
        reviewFocus: "Pilot stage, electronics and fail-safe behavior",
      },
      {
        series: "RKP / RKP-D",
        productType: "Radial piston pumps",
        reviewFocus: "Displacement, control and electronics",
      },
    ],
    applications: [
      "Test systems",
      "Metal forming",
      "Power generation",
      "Closed-loop motion control",
    ],
    requiredEvidence: [
      "Complete valve or pump code",
      "Command signal and supply voltage",
      "Required dynamic performance",
      "Fluid cleanliness and filtration",
      "Machine control and safety behavior",
    ],
    officialLabel: "Moog industrial hydraulic products",
    officialUrl:
      "https://www.moog.com/products/servovalves-servo-proportional-valves/industrial.html",
  },
  {
    slug: "poclain",
    name: "Poclain Hydraulics",
    aliases: ["Poclain"],
    summary:
      "Radial piston motors, mobile pumps, valves and hydrostatic transmission references.",
    positioning:
      "Poclain motor reviews require the complete code, displacement or cam-lobe configuration, brake, wheel or shaft interface and vehicle duty.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Radial piston motors",
      "Mobile pumps",
      "Braking and control valves",
      "Hydrostatic systems",
    ],
    seriesReferences: [
      {
        series: "MS / MSE",
        productType: "Radial piston motors",
        reviewFocus: "Displacement, brake and mounting interface",
      },
      {
        series: "MI / MZ",
        productType: "Compact or wheel motors",
        reviewFocus: "Wheel or shaft interface and vehicle duty",
      },
      {
        series: "PM / PH",
        productType: "Mobile pumps",
        reviewFocus: "Control, displacement and circuit",
      },
      {
        series: "VB / VCT",
        productType: "Braking and control valves",
        reviewFocus: "Brake function, pilot pressure and vehicle circuit",
      },
    ],
    applications: [
      "Agricultural vehicles",
      "Construction machinery",
      "Material handling",
      "Mobile hydrostatic drives",
    ],
    requiredEvidence: [
      "Complete motor, pump or valve code",
      "Vehicle or machine model",
      "Brake and mounting configuration",
      "Operating speed and pressure",
      "Installed photos and replacement reason",
    ],
    officialLabel: "Poclain Hydraulics product information",
    officialUrl: "https://poclain-hydraulics.com/",
  },
  {
    slug: "bucher",
    name: "Bucher Hydraulics",
    aliases: ["Bucher"],
    summary:
      "Gear pumps, internal gear units, motors, cartridge valves and compact power-unit references.",
    positioning:
      "Bucher reviews separate standard product families from configured power units and manifold solutions; custom blocks require a circuit and interface record.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Gear and internal gear pumps",
      "Hydraulic motors",
      "Cartridge and manifold valves",
      "Power units",
    ],
    seriesReferences: [
      {
        series: "AP",
        productType: "External gear pumps",
        reviewFocus: "Group, displacement, flange, shaft and valves",
      },
      {
        series: "QX / QXM",
        productType: "Internal gear pumps and motors",
        reviewFocus: "Size, rotation, mounting and pressure duty",
      },
      {
        series: "UP",
        productType: "Compact power packs",
        reviewFocus: "Motor, pump, reservoir and circuit",
      },
      {
        series: "Cartridge valve families",
        productType: "Screw-in and slip-in valves",
        reviewFocus: "Cavity, function, pressure and actuation",
      },
    ],
    applications: [
      "Material handling",
      "Mobile equipment",
      "Industrial power units",
      "Special machinery",
    ],
    requiredEvidence: [
      "Complete model or manifold reference",
      "Hydraulic schematic for configured units",
      "Displacement, pressure and flow",
      "Electrical and motor data",
      "Mounting and port information",
    ],
    officialLabel: "Bucher Hydraulics products",
    officialUrl: "https://www.bucherhydraulics.com/en/products",
  },
  {
    slug: "casappa",
    name: "Casappa",
    aliases: ["Casappa Hydraulics"],
    summary:
      "External gear pumps, motors, flow dividers and selected piston pump references.",
    positioning:
      "Casappa pump and motor inquiries are reviewed by family, frame, displacement, flange, shaft, rotation, porting and integrated-valve options.",
    image: "/images/hydraulic/hydraulic-pumps.webp",
    productFamilies: [
      "Gear pumps and motors",
      "Piston pumps",
      "Flow dividers",
      "Multiple-pump configurations",
    ],
    seriesReferences: [
      {
        series: "Polaris PLP / PLM",
        productType: "Gear pumps and motors",
        reviewFocus: "Group, displacement, flange and shaft",
      },
      {
        series: "Whisper WSP",
        productType: "Low-noise gear pumps",
        reviewFocus: "Displacement, rotation and application noise target",
      },
      {
        series: "Kappa K / KM",
        productType: "Gear pumps and motors",
        reviewFocus: "Heavy-duty frame and drive interface",
      },
      {
        series: "Formula FP",
        productType: "Piston pumps",
        reviewFocus: "Control, displacement and mounting",
      },
      {
        series: "Magnum HDP / HDD",
        productType: "Heavy-duty gear pumps",
        reviewFocus: "Section configuration and integrated options",
      },
    ],
    applications: [
      "Agricultural machinery",
      "Construction equipment",
      "Material handling",
      "Commercial vehicles",
    ],
    requiredEvidence: [
      "Complete model code",
      "Displacement and rotation",
      "Flange, shaft and port photos",
      "Integrated-valve requirement",
      "Machine and duty",
    ],
    officialLabel: "Casappa product portfolio",
    officialUrl: "https://www.casappa.com/products/",
  },
  {
    slug: "hydac",
    name: "HYDAC",
    aliases: ["Hydac International"],
    summary:
      "Accumulator, filtration, valve, sensor and selected pump or cooling-system references.",
    positioning:
      "HYDAC reviews begin by identifying the product family and safety or cleanliness function. Accumulators, pressure equipment and electronic sensors require complete rating evidence.",
    image: "/images/hydraulic/hydraulic-inspection-packing.webp",
    productFamilies: [
      "Hydraulic accumulators",
      "Filters and elements",
      "Valves and manifolds",
      "Sensors and cooling products",
    ],
    seriesReferences: [
      {
        series: "Bladder / piston / diaphragm accumulators",
        productType: "Energy storage",
        reviewFocus: "Volume, pressure, gas side and certification",
      },
      {
        series: "Pressure / return / offline filters",
        productType: "Filtration",
        reviewFocus: "Element, rating, bypass and cleanliness target",
      },
      {
        series: "Pressure and flow valve families",
        productType: "Hydraulic valves",
        reviewFocus: "Function, cavity or interface and pressure",
      },
      {
        series: "Pressure / temperature / contamination sensors",
        productType: "Instrumentation",
        reviewFocus: "Range, output, connector and media",
      },
    ],
    applications: [
      "Industrial power units",
      "Mobile machinery",
      "Energy systems",
      "Filtration and maintenance",
    ],
    requiredEvidence: [
      "Complete part number and label",
      "Pressure, temperature and fluid",
      "Connection and electrical output",
      "Certification requirement",
      "System function and environment",
    ],
    officialLabel: "HYDAC products",
    officialUrl: "https://www.hydac.com/shop/en/",
  },
  {
    slug: "caterpillar",
    name: "Caterpillar",
    aliases: ["CAT", "Caterpillar Inc."],
    summary:
      "Construction and mobile equipment hydraulic piston pump and service-part references reviewed from complete part numbers and machine application.",
    positioning:
      "Caterpillar references often mix part numbers, machine serial ranges and revision codes. The review separates the installed component from the machine identity before any replacement route is proposed.",
    image: "/images/owned-network/cat-piston-pump.png",
    productFamilies: [
      "Variable displacement piston pumps",
      "Pump parts and seal kits",
      "Construction equipment hydraulics",
    ],
    seriesReferences: [
      {
        series: "CAT Piston Pump",
        productType: "Construction-equipment variable piston pump",
        reviewFocus:
          "Complete part numbers, machine model, displacement and installed evidence",
      },
    ],
    applications: [
      "Construction equipment",
      "Mobile machinery",
      "Excavator and loader service",
      "Industrial MRO",
    ],
    requiredEvidence: [
      "Complete Caterpillar part number(s) and revision",
      "Machine model, serial number and year",
      "Nameplate and installed-unit photos",
      "Pressure, flow or displacement details",
      "Application and operating conditions",
    ],
    officialLabel: "Caterpillar product information",
    officialUrl: "https://www.cat.com/en_US/products.html",
    detailedHref: "/series/cat-piston-pump/",
  },
];

export const brandCoverageStats = {
  brands: brandCoverage.length,
  seriesReferences: brandCoverage.reduce(
    (total, brand) => total + brand.seriesReferences.length,
    0,
  ),
  productFamilies: new Set(
    brandCoverage.flatMap((brand) => brand.productFamilies),
  ).size,
};
