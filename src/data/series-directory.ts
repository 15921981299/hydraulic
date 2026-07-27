import { brandCoverage } from "./brand-coverage";

export type HydraulicSeriesReference = {
  series: string;
  productType: string;
  reviewHref?: string;
  note: string;
};

export type HydraulicBrandGroup = {
  brand: string;
  brandHref: string;
  description: string;
  references: HydraulicSeriesReference[];
};

/**
 * Identification references customers frequently use in hydraulic RFQs.
 * Inclusion is not a stock, authorization, or compatibility claim.
 */
export const hydraulicSeriesDirectory: HydraulicBrandGroup[] = [
  {
    brand: "Bosch Rexroth",
    brandHref: "/brands/bosch-rexroth/",
    description:
      "Selected valve and axial-piston-pump families reviewed from complete customer references.",
    references: [
      {
        series: "4WE6",
        productType: "Directional valve",
        reviewHref: "/alternatives/rexroth/4we6/",
        note: "Spool, voltage and mounting review",
      },
      {
        series: "4WE10",
        productType: "Directional valve",
        reviewHref: "/alternatives/rexroth/4we10/",
        note: "Function, flow and electrical review",
      },
      {
        series: "Z2S / Z2FS",
        productType: "Modular valve",
        reviewHref: "/alternatives/rexroth/modular-valves/",
        note: "Stack function and sandwich interface",
      },
      {
        series: "A10VSO",
        productType: "Axial piston pump",
        reviewHref: "/alternatives/rexroth/a10vso/",
        note: "Open-circuit pump code review",
      },
      {
        series: "A4VG",
        productType: "Axial piston pump",
        reviewHref: "/alternatives/rexroth/a4vg/",
        note: "Closed-circuit pump code review",
      },
      {
        series: "A11VO",
        productType: "Axial piston pump",
        reviewHref: "/alternatives/rexroth/a11vo/",
        note: "Mobile open-circuit pump review",
      },
      {
        series: "A2FO",
        productType: "Fixed axial piston pump",
        reviewHref: "/alternatives/rexroth/a2fo/",
        note: "Bent-axis pump interface review",
      },
      {
        series: "A2FM",
        productType: "Fixed axial piston motor",
        note: "Complete code and application required",
      },
      {
        series: "A6VM",
        productType: "Variable axial piston motor",
        note: "Control and drive details required",
      },
    ],
  },
  {
    brand: "Eaton / Vickers",
    brandHref: "/brands/eaton-vickers/",
    description:
      "Directional valves, vane pumps and selected piston-pump references.",
    references: [
      {
        series: "DG4V",
        productType: "Directional valve",
        reviewHref: "/alternatives/vickers/dg4v/",
        note: "Frame, spool and solenoid review",
      },
      {
        series: "DG5V",
        productType: "Pilot-operated directional valve",
        note: "Pilot, drain and spool details required",
      },
      {
        series: "KDG / KBDG",
        productType: "Proportional valve",
        note: "Electronics and command signal required",
      },
      {
        series: "V10 / V20",
        productType: "Vane pump",
        note: "Shaft, rotation and port arrangement",
      },
      {
        series: "20V / 25V / 35V / 45V",
        productType: "Vane pump",
        note: "Cartridge and cover configuration",
      },
      {
        series: "2520VQ / 3525VQ / 4525VQ",
        productType: "Double vane pump",
        note: "Front and rear cartridge details",
      },
      {
        series: "PVB",
        productType: "Piston pump",
        note: "Displacement and control required",
      },
      {
        series: "PVH",
        productType: "Piston pump",
        reviewHref: "/alternatives/vickers/pvh/",
        note: "Control, mounting and port review",
      },
      {
        series: "PVQ",
        productType: "Piston pump",
        note: "Quiet-duty pump code review",
      },
    ],
  },
  {
    brand: "Parker",
    brandHref: "/brands/parker/",
    description:
      "Selected industrial valve, piston-pump, vane-pump and motor references.",
    references: [
      {
        series: "D1VW",
        productType: "Directional valve",
        reviewHref: "/alternatives/parker/d1vw/",
        note: "NG06 spool and electrical review",
      },
      {
        series: "D3W",
        productType: "Directional valve",
        note: "NG10 function and flow review",
      },
      {
        series: "D41 / D91",
        productType: "Proportional directional valve",
        note: "Signal, electronics and spool required",
      },
      {
        series: "PAVC",
        productType: "Piston pump",
        reviewHref: "/alternatives/parker/pavc/",
        note: "Control, shaft and mounting review",
      },
      {
        series: "PVP",
        productType: "Piston pump",
        note: "Displacement and control required",
      },
      {
        series: "T6 / T7",
        productType: "Vane pump",
        note: "Cartridge, rotation and porting review",
      },
      {
        series: "F11 / F12",
        productType: "Bent-axis pump or motor",
        note: "Function and complete code required",
      },
    ],
  },
  {
    brand: "Denison",
    brandHref: "/brands/denison/",
    description:
      "Legacy and current pump references that require full model and application evidence.",
    references: [
      {
        series: "T6 / T7",
        productType: "Vane pump",
        note: "Single, double or triple configuration",
      },
      {
        series: "P6 / P7 / P8",
        productType: "Gold Cup piston pump",
        note: "Control and system review required",
      },
      {
        series: "P11 / P14 / P24 / P30",
        productType: "Gold Cup piston pump",
        note: "High-value review; complete data required",
      },
      {
        series: "PV / PVT",
        productType: "Piston pump",
        note: "Legacy code and installation review",
      },
    ],
  },
  {
    brand: "Sauer-Danfoss / Sundstrand",
    brandHref: "/brands/danfoss-sundstrand/",
    description:
      "Hydrostatic pump and motor references where machine and control data are essential.",
    references: [
      {
        series: "Series 15 / 18 / 20 / 22 / 24",
        productType: "Hydrostatic pump or motor",
        note: "Legacy code and machine data required",
      },
      {
        series: "Series 40 / 42",
        productType: "Hydrostatic pump or motor",
        note: "Control and loop configuration required",
      },
      {
        series: "Series 90",
        productType: "Hydrostatic pump or motor",
        note: "Frame, control and charge-system review",
      },
      {
        series: "H1",
        productType: "Hydrostatic pump or motor",
        note: "Electronic and machine integration review",
      },
    ],
  },
  {
    brand: "Kawasaki",
    brandHref: "/brands/kawasaki/",
    description:
      "Selected mobile-equipment pump references reviewed with machine identification.",
    references: [
      {
        series: "K3V / K5V",
        productType: "Excavator piston pump",
        note: "Machine, regulator and tandem configuration",
      },
      {
        series: "K7V",
        productType: "Excavator piston pump",
        note: "Complete code and machine data required",
      },
      {
        series: "K3VL",
        productType: "Open-circuit piston pump",
        note: "Control, shaft and mounting review",
      },
      {
        series: "M2X / M5X",
        productType: "Swing motor",
        note: "Machine and brake configuration required",
      },
    ],
  },
  ...brandCoverage
    .filter(
      (brand) =>
        ![
          "bosch-rexroth",
          "eaton-vickers",
          "parker",
          "denison",
          "danfoss-sundstrand",
          "kawasaki",
        ].includes(brand.slug),
    )
    .map((brand) => ({
      brand: brand.name,
      brandHref: `/brands/${brand.slug}/`,
      description: brand.summary,
      references: brand.seriesReferences.map((reference) => ({
        series: reference.series,
        productType: reference.productType,
        note: reference.reviewFocus,
      })),
    })),
];
