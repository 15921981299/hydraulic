import { products } from "./products";

const seoOverrides: Record<
  string,
  {
    seoTitle: string;
    h1Title: string;
    description: string;
    summary?: string;
    selectionGuide?: { title: string; text: string }[];
    faqs?: { question: string; answer: string }[];
    relatedLinks?: { href: string; title: string }[];
  }
> = {
  "hydraulic-cylinders/custom-hydraulic-cylinders": {
    seoTitle: "Custom Hydraulic Cylinder Manufacturer | Hydraulic Match",
    h1Title: "Custom Hydraulic Cylinder Manufacturer",
    description:
      "Custom hydraulic cylinder inquiries prepared from drawings, samples or application specifications, with engineering review, first-article options and quotation-specific warranty terms.",
  },
  "hydraulic-cylinders/standard-industrial-cylinders": {
    seoTitle: "Industrial Replacement Hydraulic Cylinders",
    h1Title: "Industrial Replacement Hydraulic Cylinders",
    description:
      "Source replacement hydraulic cylinders by bore, rod, stroke, mounting, ports, pressure and duty, with compatibility status stated in the quotation.",
  },
  "hydraulic-pumps/axial-piston-pumps": {
    seoTitle: "Hydraulic Piston Pump Supplier",
    h1Title: "Hydraulic Piston Pump Supplier",
    description:
      "Source axial hydraulic piston pumps by complete model code, displacement, control, rotation, shaft, flange and ports for new or replacement requirements.",
    selectionGuide: [
      {
        title: "Open or closed circuit",
        text: "Confirm whether the unit works in an open circuit, closed hydrostatic loop or another application-specific arrangement.",
      },
      {
        title: "Control configuration",
        text: "Pressure, flow, load-sense, power and electronic controls are not interchangeable without a complete suffix review.",
      },
      {
        title: "Mechanical interface",
        text: "Rotation, shaft, mounting flange, ports and through-drive options must match the installed unit.",
      },
    ],
    faqs: [
      {
        question: "What information is needed to quote an axial piston pump?",
        answer:
          "Send the complete model code, nameplate, displacement, control, rotation, shaft, flange, ports, application, quantity and destination.",
      },
      {
        question: "Can an axial piston pump be replaced by series name alone?",
        answer:
          "No. Pumps within one series can differ in displacement, control, rotation, shaft, flange, ports and through-drive configuration.",
      },
      {
        question: "Does the quotation confirm compatibility?",
        answer:
          "It states the evidence-supported status for the exact offered item. Otherwise it lists the remaining differences or approvals required.",
      },
    ],
    relatedLinks: [
      {
        href: "/alternatives/rexroth/",
        title: "Rexroth piston pump alternatives",
      },
      {
        href: "/resources/hydraulic-pump-rotation-flange-and-shaft-identification/",
        title: "Pump rotation, flange and shaft guide",
      },
    ],
  },
  "hydraulic-pumps/gear-pumps": {
    seoTitle: "Hydraulic Gear Pump Manufacturer & Supplier",
    h1Title: "Hydraulic Gear Pump Manufacturer & Supplier",
    description:
      "Hydraulic gear pumps reviewed by displacement, rotation, mounting flange, shaft and port arrangement before price and compatibility confirmation.",
    selectionGuide: [
      {
        title: "Displacement and pressure",
        text: "Displacement sets theoretical flow per revolution; pressure rating and duty determine whether the pump suits the system.",
      },
      {
        title: "Rotation and construction",
        text: "Confirm clockwise, counter-clockwise or reversible duty, plus aluminum, cast-iron or other housing requirements.",
      },
      {
        title: "Flange, shaft and ports",
        text: "Pilot diameter, bolt pattern, shaft form and port threads must be checked from drawings or measured evidence.",
      },
    ],
    faqs: [
      {
        question: "How do I identify a replacement hydraulic gear pump?",
        answer:
          "Provide the complete code, displacement, rotation, flange, shaft, port size and position, pressure, speed and application.",
      },
      {
        question: "Can a gear pump with the same displacement fit directly?",
        answer:
          "Not necessarily. Rotation, pressure rating, mounting flange, shaft and ports can differ even when displacement is identical.",
      },
      {
        question: "How is hydraulic gear pump price confirmed?",
        answer:
          "Price is quoted for the exact displacement, construction, interfaces, quantity, inspection scope and destination.",
      },
    ],
    relatedLinks: [
      { href: "/brands/casappa/", title: "Casappa hydraulic pumps" },
      {
        href: "/resources/hydraulic-pump-sizing-flow-pressure-power/",
        title: "Pump flow, pressure and power guide",
      },
    ],
  },
  "hydraulic-pumps/vane-pumps": {
    seoTitle: "Hydraulic Vane Pump Supplier | Parker Denison",
    h1Title: "Hydraulic Vane Pump Supplier",
    description:
      "Source hydraulic vane pumps, cartridges and Parker Denison replacement routes by full model code, displacement, rotation and cover configuration.",
    selectionGuide: [
      {
        title: "Single, double or cartridge",
        text: "Identify the complete pump arrangement and whether the requirement is an assembly, section or replacement cartridge.",
      },
      {
        title: "Cartridge configuration",
        text: "Cam ring displacement, rotation, inlet and outlet relationship, cover and shaft-side configuration control selection.",
      },
      {
        title: "Installed interface",
        text: "Confirm shaft, flange, port orientation and section order for multi-pump assemblies.",
      },
    ],
    faqs: [
      {
        question: "What must match on a hydraulic vane pump replacement?",
        answer:
          "Confirm series, displacement, rotation, shaft, flange, ports, cover and section configuration from the complete code.",
      },
      {
        question: "Can a vane pump cartridge be quoted separately?",
        answer:
          "Yes, when the pump family, displacement, rotation and cartridge or cover configuration can be identified.",
      },
      {
        question: "Do you support Parker Denison vane pump references?",
        answer:
          "Yes. Parker Denison references are reviewed independently by complete model code and application before quotation.",
      },
    ],
    relatedLinks: [
      { href: "/brands/denison/", title: "Parker Denison coverage" },
      {
        href: "/products/hydraulic-repair-kits/vane-pump-cartridges/",
        title: "Vane pump cartridges",
      },
    ],
  },
  "hydraulic-valves/solenoid-directional-valves": {
    seoTitle: "Hydraulic Directional Valve Manufacturer",
    h1Title: "Hydraulic Directional Control Valve Manufacturer",
    description:
      "Hydraulic directional control valves supplied by spool function, CETOP or ISO mounting size, pressure, flow, voltage, connector and seal requirement.",
    selectionGuide: [
      {
        title: "Spool function",
        text: "Ways, positions, center condition, transition behavior and spring or detent arrangement determine circuit operation.",
      },
      {
        title: "Electrical configuration",
        text: "Confirm AC or DC voltage, connector, coil power, manual override and any rectifier or surge-suppression requirement.",
      },
      {
        title: "Mounting and performance",
        text: "CETOP or ISO interface, pressure, tank-port limit, rated flow, pressure drop and seals must suit the application.",
      },
    ],
    faqs: [
      {
        question: "What must match on a directional control valve replacement?",
        answer:
          "Match the complete spool function, operating method, mounting pattern, voltage, connector, pressure, flow, seals and port limits.",
      },
      {
        question: "Does the same CETOP size guarantee interchangeability?",
        answer:
          "No. A shared mounting pattern does not confirm spool function, electrical configuration, pressure, flow or tank-port rating.",
      },
      {
        question: "Can you quote a direct-compatible directional valve?",
        answer:
          "Yes, after the complete original code and required hydraulic, mechanical and electrical interfaces are verified.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/what-must-match-when-replacing-a-directional-valve/",
        title: "Directional valve replacement guide",
      },
      { href: "/series/4we6/", title: "4WE6 series records" },
    ],
  },
  "hydraulic-valves/pressure-control-valves": {
    seoTitle: "Hydraulic Pressure Control Valve Supplier",
    h1Title: "Hydraulic Pressure Control Valve Supplier",
    description:
      "Relief, reducing, sequence and unloading hydraulic pressure control valves reviewed by function, adjustment range, mounting, pressure and flow.",
    selectionGuide: [
      {
        title: "Pressure function",
        text: "Distinguish relief, reducing, sequence, unloading, counterbalance and other pressure-control functions before selecting a valve.",
      },
      {
        title: "Setting and pilot arrangement",
        text: "Confirm adjustment range, direct or pilot operation, internal or external pilot, drain routing and controlled port.",
      },
      {
        title: "Installation and stability",
        text: "Mounting style, flow, pressure, backpressure, leakage and dynamic response affect the final choice.",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between a relief valve and a reducing valve?",
        answer:
          "A relief valve limits upstream system pressure, while a reducing valve controls pressure in a downstream branch.",
      },
      {
        question:
          "What information is needed for a pressure control valve quote?",
        answer:
          "Send the complete code, valve function, setting range, pressure, flow, mounting, pilot and drain arrangement, fluid and application.",
      },
      {
        question: "Can a pressure valve be adjusted after installation?",
        answer:
          "Only under the equipment and valve manufacturer's commissioning procedure with appropriate gauges and safety controls.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/hydraulic-pressure-reducing-valve-adjustment/",
        title: "Pressure reducing valve adjustment guide",
      },
      {
        href: "/alternatives/rexroth/modular-valves/",
        title: "Modular pressure valve alternatives",
      },
    ],
  },
  "hydraulic-motors/radial-piston-motors": {
    seoTitle: "Radial Piston Motor Supplier | MCR Replacement",
    h1Title: "Radial Piston Hydraulic Motor Supplier",
    description:
      "Source high-torque radial piston hydraulic motors, including MCR replacement review, by exact code, displacement, shaft, flange, ports and duty.",
    selectionGuide: [
      {
        title: "Torque and speed duty",
        text: "Continuous and peak torque, minimum and maximum speed, pressure and duty cycle define the required motor size.",
      },
      {
        title: "Displacement and options",
        text: "Confirm fixed or variable displacement, brake, flushing, speed sensor and control options from the complete code.",
      },
      {
        title: "Mechanical installation",
        text: "Shaft, mounting, wheel or flange interface, ports, case drain and permitted external loads require review.",
      },
    ],
    faqs: [
      {
        question: "What is a radial piston hydraulic motor used for?",
        answer:
          "Radial piston motors are commonly selected for high-torque, low-speed duties such as winches, wheel drives, marine equipment and industrial drives.",
      },
      {
        question: "What is required for an MCR motor replacement?",
        answer:
          "Provide the complete MCR code, displacement, shaft, mounting, ports, brake, sensors, pressure, speed and machine duty.",
      },
      {
        question: "Can compatibility be confirmed before quotation?",
        answer:
          "The quotation states the supported status only after the complete original configuration and installed interfaces pass review.",
      },
    ],
    relatedLinks: [
      { href: "/series/mcr/", title: "MCR replacement motor hub" },
      { href: "/brands/poclain/", title: "Poclain hydraulic motor coverage" },
    ],
  },
  "hydraulic-motors/orbital-hydraulic-motors": {
    seoTitle: "Orbital Hydraulic Motor Manufacturer & Supplier",
    h1Title: "Orbital Hydraulic Motor Manufacturer & Supplier",
    description:
      "Orbital hydraulic motors for new and replacement requirements, reviewed by displacement, torque, speed, shaft, flange, ports and application duty.",
    selectionGuide: [
      {
        title: "Gerotor or geroler duty",
        text: "Motor construction, displacement, continuous and intermittent pressure determine torque capability and service life.",
      },
      {
        title: "Speed and flow",
        text: "Required speed, available flow, starting torque and expected duty cycle must be reviewed together.",
      },
      {
        title: "Shaft and mounting",
        text: "Confirm flange, pilot, bolt pattern, shaft, ports, case drain and permissible radial or axial load.",
      },
    ],
    faqs: [
      {
        question: "How do I select an orbital hydraulic motor?",
        answer:
          "Start with required torque, speed, flow and pressure, then confirm displacement, shaft, flange, ports, case drain and duty cycle.",
      },
      {
        question:
          "Can two orbital motors with the same displacement be interchanged?",
        answer:
          "Not automatically. Pressure rating, efficiency, shaft, mounting, ports, seal options and external-load capability may differ.",
      },
      {
        question:
          "Are single replacement and distributor quantities supported?",
        answer:
          "Yes. MOQ, current stock, production lead time, inspection scope and warranty are confirmed for the requested quantity.",
      },
    ],
    relatedLinks: [
      {
        href: "/brands/danfoss-sundstrand/",
        title: "Danfoss orbital motor references",
      },
      {
        href: "/resources/how-to-identify-a-hydraulic-motor/",
        title: "Hydraulic motor identification guide",
      },
    ],
  },
  "hydraulic-repair-kits/hydraulic-seal-kits": {
    seoTitle: "Hydraulic Seal Kit Supplier | Pump & Motor Kits",
    h1Title: "Hydraulic Seal Kit Supplier",
    description:
      "Hydraulic seal kits for pumps, motors, valves and cylinders identified from the complete parent-unit code, size, revision, fluid and seal material.",
  },
  "hydraulic-repair-kits/hydraulic-motor-parts": {
    seoTitle: "Hydraulic Motor Parts Supplier",
    h1Title: "Hydraulic Motor Parts Supplier",
    description:
      "Hydraulic motor replacement parts, seal kits, shafts, bearings and rotating components supplied by complete motor code, size and design revision.",
  },
  "hydraulic-repair-kits/hydraulic-valve-parts": {
    seoTitle: "Hydraulic Valve Parts Supplier",
    h1Title: "Hydraulic Valve Parts Supplier",
    description:
      "Hydraulic valve replacement parts, solenoids, coils, seals and selected service components identified from the complete parent-valve code.",
  },
};

export const productSubpages = products.flatMap((product) =>
  product.subcategories.map((subcategory) => {
    const override = seoOverrides[`${product.slug}/${subcategory.slug}`];
    return {
      productSlug: product.slug,
      slug: subcategory.slug,
      title: subcategory.title,
      seoTitle:
        override?.seoTitle ?? `${subcategory.title} Supplier | Hydraulic Match`,
      h1Title: override?.h1Title ?? subcategory.title,
      summary: override?.summary ?? subcategory.summary,
      description:
        override?.description ??
        `Review ${subcategory.title.toLowerCase()} by complete model code, technical parameters, application, quantity and destination before quotation.`,
      parameterGroups: product.parameterGroups,
      applications: product.applications,
      brandReferences: product.brandReferences,
      verification: product.verification,
      selectionGuide: override?.selectionGuide ?? [],
      faqs: override?.faqs ?? [],
      relatedLinks: override?.relatedLinks ?? [],
    };
  }),
);
