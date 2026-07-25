export type HydraulicProduct = {
  slug: string;
  title: string;
  seoTitle: string;
  h1Title: string;
  summary: string;
  intro: string;
  parameterGroups: string[];
  subcategories: { title: string; slug: string; summary: string }[];
  applications: string[];
  brandReferences: string[];
  verification: string[];
};

export const products: HydraulicProduct[] = [
  {
    slug: 'hydraulic-valves',
    title: 'Hydraulic Valves',
    seoTitle: 'Industrial Hydraulic Directional Valves from China | Hydraulic Match',
    h1Title: 'Industrial Hydraulic Valves from China',
    summary: 'Chinese sourcing options for industrial directional, pressure, flow, modular, check and selected proportional hydraulic valves.',
    intro: 'Hydraulic Match helps distributors, repair shops and MRO buyers review valve model codes and compare the technical details that affect function and installation.',
    parameterGroups: ['Valve type and nominal size', 'Spool function and control method', 'Rated and maximum pressure', 'Rated flow and pressure drop', 'Mounting interface and port pattern', 'Voltage, connector and coil options', 'Seal material and fluid compatibility', 'Application duty and environment'],
    subcategories: [
      { title: 'Solenoid Directional Valves', slug: 'solenoid-directional-valves', summary: 'Model-code review for solenoid-operated directional valves and common CETOP / ISO mounting patterns.' },
      { title: 'Pressure Control Valves', slug: 'pressure-control-valves', summary: 'Relief, reducing, sequence and unloading valve sourcing.' },
      { title: 'Flow Control Valves', slug: 'flow-control-valves', summary: 'Throttle, flow-regulating and pressure-compensated options.' },
      { title: 'Modular Valves', slug: 'modular-valves', summary: 'Sandwich-plate valves reviewed by size, function and stacking arrangement.' },
      { title: 'Check Valves', slug: 'check-valves', summary: 'Inline, sandwich and pilot-operated check valves.' },
      { title: 'Proportional & Servo Valves', slug: 'proportional-servo-valves', summary: 'Selected higher-risk series offered only when supply and verification data are available.' },
    ],
    applications: ['Industrial machinery', 'Plastic injection machinery', 'Metal forming and presses', 'Machine tools', 'Material handling', 'Construction equipment'],
    brandReferences: ['Bosch Rexroth', 'Eaton / Vickers', 'Parker', 'Yuken', 'Atos', 'Danfoss'],
    verification: ['Send the complete model code, not only the series name.', 'Confirm spool symbol, voltage and connector.', 'Provide a photo of the nameplate and mounting face when possible.', 'For proportional or servo valves, provide electronics and application details.'],
  },
  {
    slug: 'hydraulic-pumps',
    title: 'Hydraulic Pumps',
    seoTitle: 'Hydraulic Pump Alternatives and Sourcing from China | Hydraulic Match',
    h1Title: 'Hydraulic Pump Alternatives from China',
    summary: 'Axial piston, vane and gear pump sourcing with model-code, displacement, control, shaft and rotation review.',
    intro: 'A pump series name does not confirm interchangeability. We review the complete code and the mechanical and hydraulic details before proposing a sourcing route.',
    parameterGroups: ['Pump type and displacement', 'Working and peak pressure', 'Control or compensator type', 'Rotation direction', 'Mounting flange', 'Drive shaft and spline', 'Port position and thread', 'Through-drive and auxiliary options'],
    subcategories: [
      { title: 'Axial Piston Pumps', slug: 'axial-piston-pumps', summary: 'Variable and fixed displacement piston pump sourcing for industrial and mobile systems.' },
      { title: 'Vane Pumps', slug: 'vane-pumps', summary: 'Single, double and cartridge-type vane pump options.' },
      { title: 'Gear Pumps', slug: 'gear-pumps', summary: 'External gear pumps reviewed by displacement, flange, shaft and ports.' },
    ],
    applications: ['Industrial power units', 'Construction equipment', 'Mobile machinery', 'Plastic machinery', 'Presses and forming lines', 'Mining and material handling'],
    brandReferences: ['Bosch Rexroth', 'Eaton / Vickers', 'Parker', 'Danfoss', 'Yuken'],
    verification: ['Provide the complete model code and nameplate photo.', 'Confirm clockwise or counter-clockwise rotation as viewed from the shaft.', 'Share flange, shaft and port photos or dimensions.', 'State the application, pressure, fluid and replacement reason.'],
  },
  {
    slug: 'hydraulic-cylinders',
    title: 'Hydraulic Cylinders',
    seoTitle: 'Industrial and Custom Hydraulic Cylinders from China | Hydraulic Match',
    h1Title: 'Industrial & Custom Hydraulic Cylinders',
    summary: 'Standard and made-to-order hydraulic cylinders developed from technical drawings, samples and confirmed operating conditions.',
    intro: 'Cylinder requests are reviewed as engineering RFQs rather than a generic model search. A drawing or a complete dimensional and operating specification is required.',
    parameterGroups: ['Bore and rod diameter', 'Stroke and closed length', 'Working and test pressure', 'Mounting type and pin dimensions', 'Port position and thread', 'Seal material and fluid', 'Speed, load and duty cycle', 'Cushioning, sensors and surface finish'],
    subcategories: [
      { title: 'Standard Industrial Cylinders', slug: 'standard-industrial-cylinders', summary: 'Industrial tie-rod and welded cylinder sourcing against a confirmed specification.' },
      { title: 'Custom Hydraulic Cylinders', slug: 'custom-hydraulic-cylinders', summary: 'Made-to-order cylinders developed from a drawing, sample or full design brief.' },
    ],
    applications: ['Industrial presses', 'Steel and metal processing', 'Mining equipment', 'Construction machinery', 'Material handling', 'Special-purpose machinery'],
    brandReferences: ['Drawing-based replacement', 'Sample-based measurement', 'Application-specific design'],
    verification: ['Send a dimensioned drawing whenever possible.', 'Confirm pressure, load, speed and duty cycle.', 'State mounting, port, seal and environment requirements.', 'A sample or first-article review is recommended before batch production.'],
  },
  {
    slug: 'hydraulic-pump-parts',
    title: 'Hydraulic Pump Parts',
    seoTitle: 'Hydraulic Pump Replacement Parts Sourcing | Hydraulic Match',
    h1Title: 'Hydraulic Pump Replacement Parts',
    summary: 'Selected rotating groups, cylinder blocks, valve plates, piston shoes, shafts, seal kits and repair parts for confirmed pump references.',
    intro: 'Pump repair parts are quoted only when the pump series, complete model code and required component can be identified reliably.',
    parameterGroups: ['Original pump brand and series', 'Complete pump model code', 'Part number or component position', 'Dimensions and photos', 'Rotation and shaft details', 'Material or surface requirement', 'Quantity and repair scope', 'Required inspection documents'],
    subcategories: [],
    applications: ['Pump repair workshops', 'Hydraulic service companies', 'MRO warehouses', 'Distributor stock programs'],
    brandReferences: ['Bosch Rexroth', 'Eaton / Vickers', 'Parker', 'Danfoss'],
    verification: ['Provide pump nameplate and dismantled-part photos.', 'Use an original part number when available.', 'Confirm dimensions before shipment.', 'Repair outcome depends on the condition of the complete pump.'],
  },
];
