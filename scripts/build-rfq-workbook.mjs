import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "outputs/seo-expansion";
const publicDir = "public/downloads";
await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(publicDir, { recursive: true });

const workbook = Workbook.create();
workbook.comments.setSelf({ displayName: "User" });

const navy = "#172033";
const blue = "#146EF5";
const lightBlue = "#EAF2FF";
const border = "#D8DEE8";
const text = "#273446";
const white = "#FFFFFF";

function titleBand(sheet, title, subtitle, endColumn) {
  sheet.showGridLines = false;
  sheet.getRange(`A1:${endColumn}1`).merge();
  sheet.getRange("A1").values = [[title]];
  sheet.getRange(`A1:${endColumn}1`).format = {
    fill: navy,
    font: { bold: true, color: white, size: 18 },
    verticalAlignment: "center",
  };
  sheet.getRange(`A1:${endColumn}1`).format.rowHeight = 32;
  sheet.getRange(`A2:${endColumn}2`).merge();
  sheet.getRange("A2").values = [[subtitle]];
  sheet.getRange(`A2:${endColumn}2`).format = {
    fill: lightBlue,
    font: { color: text, size: 10 },
    wrapText: true,
    verticalAlignment: "center",
  };
  sheet.getRange(`A2:${endColumn}2`).format.rowHeight = 34;
}

function formatHeader(range) {
  range.format = {
    fill: blue,
    font: { bold: true, color: white, size: 10 },
    wrapText: true,
    verticalAlignment: "center",
    borders: { preset: "outside", style: "thin", color: border },
  };
  range.format.rowHeight = 34;
}

function formatBody(range) {
  range.format = {
    font: { color: text, size: 10 },
    verticalAlignment: "top",
    wrapText: true,
    borders: {
      insideHorizontal: { style: "thin", color: border },
      bottom: { style: "thin", color: border },
    },
  };
  range.format.rowHeight = 32;
}

const instructions = workbook.worksheets.add("Instructions");
titleBand(
  instructions,
  "Hydraulic Match RFQ & Review Workbook",
  "Use this workbook to collect exact component references, review compatibility conditions and record pre-shipment evidence. It organizes information; it does not replace engineering approval.",
  "F",
);
instructions.getRange("A4:B9").values = [
  ["Step", "Action"],
  ["1", "Complete one row per requested component in the RFQ Items sheet."],
  [
    "2",
    "Keep the full model code exactly as shown, including slashes, hyphens and suffixes.",
  ],
  [
    "3",
    "Attach clear nameplate, product, shaft, flange, port and connector photos where applicable.",
  ],
  [
    "4",
    "Use Model Review to separate confirmed fields, differences and open questions.",
  ],
  ["5", "Agree the applicable Pre-Shipment Checks before order placement."],
];
formatHeader(instructions.getRange("A4:B4"));
formatBody(instructions.getRange("A5:B9"));
instructions.getRange("A11:F11").merge();
instructions.getRange("A11").values = [["Minimum useful RFQ information"]];
instructions.getRange("A11:F11").format = {
  fill: navy,
  font: { bold: true, color: white },
};
instructions.getRange("A12:F14").values = [
  [
    "Original brand",
    "Complete model",
    "Quantity",
    "Destination",
    "Application",
    "Reference files",
  ],
  [
    "Required",
    "Required or clear nameplate",
    "Required",
    "Required",
    "Recommended",
    "Recommended",
  ],
  [
    "Do not shorten",
    "Preserve every suffix",
    "Use pieces/sets",
    "Country and city",
    "Machine and duty",
    "Photos/drawing/RFQ list",
  ],
];
formatHeader(instructions.getRange("A12:F12"));
formatBody(instructions.getRange("A13:F14"));
instructions.getRange("A16:F18").merge();
instructions.getRange("A16").values = [
  [
    "Important: “Directly compatible” should be released only after the complete original code, proposed code and all required hydraulic, mechanical and electrical interfaces pass the documented review. Referenced trademarks identify the customer’s original requirement.",
  ],
];
instructions.getRange("A16:F18").format = {
  fill: "#FFF7E6",
  font: { color: "#6B4C00", size: 10 },
  wrapText: true,
  verticalAlignment: "center",
  borders: { preset: "outside", style: "thin", color: "#E5C66E" },
};
instructions.getRange("A:A").format.columnWidth = 12;
instructions.getRange("B:B").format.columnWidth = 58;
instructions.getRange("C:F").format.columnWidth = 20;
instructions.freezePanes.freezeRows(4);

const rfq = workbook.worksheets.add("RFQ Items");
titleBand(
  rfq,
  "Hydraulic Component RFQ Items",
  "Enter one requested component per row. Yellow fields are the minimum information needed to begin a useful review.",
  "T",
);
const rfqHeaders = [
  "Line",
  "Original Brand*",
  "Complete Model Code*",
  "Order / Part No.",
  "Product Type",
  "Quantity*",
  "Unit",
  "Destination Country*",
  "Required Date",
  "Machine / Application",
  "Working Pressure (bar)",
  "Flow (L/min)",
  "Displacement (cm³/rev)",
  "Voltage / Connector",
  "Rotation",
  "Mounting / Shaft / Ports",
  "Original or Alternative",
  "Inspection Requirements",
  "File Names",
  "Buyer Notes",
];
rfq.getRange("A4:T4").values = [rfqHeaders];
formatHeader(rfq.getRange("A4:T4"));
const rfqRows = Array.from({ length: 20 }, (_, index) => [
  index + 1,
  "",
  "",
  "",
  "",
  "",
  "pcs",
  "",
  null,
  "",
  null,
  null,
  null,
  "",
  "",
  "",
  "Alternative accepted",
  "",
  "",
  "",
]);
rfq.getRange("A5:T24").values = rfqRows;
formatBody(rfq.getRange("A5:T24"));
rfq.getRange("B5:C24").format.fill = "#FFF7D6";
rfq.getRange("F5:F24").format.fill = "#FFF7D6";
rfq.getRange("H5:H24").format.fill = "#FFF7D6";
rfq.getRange("A5:A24").format.numberFormat = "0";
rfq.getRange("F5:F24").format.numberFormat = "0";
rfq.getRange("I5:I24").format.numberFormat = "yyyy-mm-dd";
rfq.getRange("K5:M24").format.numberFormat = "0.00";
rfq.getRange("E5:E24").dataValidation = {
  rule: {
    type: "list",
    values: [
      "Hydraulic Valve",
      "Hydraulic Pump",
      "Hydraulic Pump Part",
      "Hydraulic Cylinder",
      "Hydraulic Motor",
      "Other",
    ],
  },
};
rfq.getRange("Q5:Q24").dataValidation = {
  rule: {
    type: "list",
    values: ["Original only", "Alternative accepted", "Quote both routes"],
  },
};
rfq.tables.add("A4:T24", true, "RfqItemsTable");
rfq.getRange("A:A").format.columnWidth = 7;
rfq.getRange("B:D").format.columnWidth = 21;
rfq.getRange("E:E").format.columnWidth = 20;
rfq.getRange("F:G").format.columnWidth = 10;
rfq.getRange("H:J").format.columnWidth = 20;
rfq.getRange("K:M").format.columnWidth = 16;
rfq.getRange("N:P").format.columnWidth = 21;
rfq.getRange("Q:T").format.columnWidth = 22;
rfq.freezePanes.freezeRows(4);
rfq.freezePanes.freezeColumns(3);

const review = workbook.worksheets.add("Model Review");
titleBand(
  review,
  "Model-Code and Compatibility Review",
  "Copy the original and proposed references exactly. Record evidence and use the status column to separate confirmed facts from open questions.",
  "G",
);
review.getRange("A4:G4").values = [
  [
    "Review Field",
    "Original Reference",
    "Proposed Supply",
    "Evidence / Source",
    "Status",
    "Difference / Risk",
    "Required Action",
  ],
];
formatHeader(review.getRange("A4:G4"));
const reviewFields = [
  "Product family / size",
  "Function / spool / control",
  "Pressure rating",
  "Flow or displacement",
  "Rotation",
  "Mounting flange / pattern",
  "Shaft / drive interface",
  "Port size / type / orientation",
  "Voltage / connector / signal",
  "Seal / fluid / temperature",
  "Dimensions / envelope",
  "Through-drive / auxiliary options",
  "Machine / application condition",
  "Supplier and authorization route",
  "Stock and lead time",
  "Warranty and inspection scope",
];
review.getRange("A5:G20").values = reviewFields.map((field) => [
  field,
  "",
  "",
  "",
  "Open",
  "",
  "",
]);
formatBody(review.getRange("A5:G20"));
review.getRange("E5:E20").dataValidation = {
  rule: {
    type: "list",
    values: ["Confirmed", "Conditional", "Different", "Open", "Not Applicable"],
  },
};
review.getRange("E5:E20").conditionalFormats.add("containsText", {
  text: "Confirmed",
  format: { fill: "#E7F6EC", font: { color: "#176B35", bold: true } },
});
review.getRange("E5:E20").conditionalFormats.add("containsText", {
  text: "Different",
  format: { fill: "#FDE8E7", font: { color: "#A12622", bold: true } },
});
review.getRange("E5:E20").conditionalFormats.add("containsText", {
  text: "Open",
  format: { fill: "#FFF7D6", font: { color: "#7A5A00", bold: true } },
});
review.tables.add("A4:G20", true, "ModelReviewTable");
review.getRange("A:A").format.columnWidth = 25;
review.getRange("B:D").format.columnWidth = 28;
review.getRange("E:E").format.columnWidth = 16;
review.getRange("F:G").format.columnWidth = 29;
review.freezePanes.freezeRows(4);

const inspection = workbook.worksheets.add("Pre-Shipment Checks");
titleBand(
  inspection,
  "Hydraulic Pre-Shipment Inspection Record",
  "Agree the applicable scope before purchase. Mark N/A where a check does not apply and link each result to a photograph, measurement or document when required.",
  "G",
);
inspection.getRange("A4:G4").values = [
  [
    "Check Group",
    "Inspection Item",
    "Required?",
    "Result",
    "Evidence Reference",
    "Inspector Notes",
    "Release Action",
  ],
];
formatHeader(inspection.getRange("A4:G4"));
const checkRows = [
  ["Order Identity", "Quotation and PO reference", "Yes"],
  [
    "Order Identity",
    "Original requested model and approved supplied model",
    "Yes",
  ],
  ["Order Identity", "Quantity and serial / batch information", "Yes"],
  ["Product Condition", "Nameplate and markings photographed", "Yes"],
  ["Product Condition", "Visible casting, machining and finish", "Yes"],
  ["Product Condition", "Ports and openings protected", "Yes"],
  ["Interfaces", "Mounting pattern or flange", "Conditional"],
  ["Interfaces", "Shaft or coupling interface", "Conditional"],
  ["Interfaces", "Port size, type and orientation", "Conditional"],
  ["Interfaces", "Voltage, connector or control assembly", "Conditional"],
  ["Interfaces", "Critical dimensions agreed in the quotation", "Conditional"],
  ["Packing", "Rust prevention and individual protection", "Yes"],
  ["Packing", "Outer packing suitable for weight and route", "Yes"],
  ["Packing", "Quantity matched to packing list", "Yes"],
  ["Documents", "Commercial invoice and packing list", "Yes"],
  [
    "Documents",
    "Inspection or test evidence included when agreed",
    "Conditional",
  ],
];
inspection.getRange("A5:G20").values = checkRows.map((row) => [
  ...row,
  "Open",
  "",
  "",
  "Hold",
]);
formatBody(inspection.getRange("A5:G20"));
inspection.getRange("C5:C20").dataValidation = {
  rule: { type: "list", values: ["Yes", "Conditional", "No"] },
};
inspection.getRange("D5:D20").dataValidation = {
  rule: {
    type: "list",
    values: ["Pass", "Conditional", "Fail", "Open", "N/A"],
  },
};
inspection.getRange("G5:G20").dataValidation = {
  rule: { type: "list", values: ["Release", "Correct", "Hold", "N/A"] },
};
inspection.getRange("D5:D20").conditionalFormats.add("containsText", {
  text: "Pass",
  format: { fill: "#E7F6EC", font: { color: "#176B35", bold: true } },
});
inspection.getRange("D5:D20").conditionalFormats.add("containsText", {
  text: "Fail",
  format: { fill: "#FDE8E7", font: { color: "#A12622", bold: true } },
});
inspection.tables.add("A4:G20", true, "PreShipmentTable");
inspection.getRange("A:A").format.columnWidth = 18;
inspection.getRange("B:B").format.columnWidth = 38;
inspection.getRange("C:D").format.columnWidth = 16;
inspection.getRange("E:G").format.columnWidth = 28;
inspection.freezePanes.freezeRows(4);

for (const sheetName of [
  "Instructions",
  "RFQ Items",
  "Model Review",
  "Pre-Shipment Checks",
]) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    `${outputDir}/${sheetName.replaceAll(" ", "-").toLowerCase()}.png`,
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const inspectionResult = await workbook.inspect({
  kind: "table",
  range: "RFQ Items!A1:T10",
  include: "values,formulas",
  tableMaxRows: 10,
  tableMaxCols: 20,
});
console.log(inspectionResult.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/Hydraulic-Match-RFQ-Template.xlsx`);
await fs.copyFile(
  `${outputDir}/Hydraulic-Match-RFQ-Template.xlsx`,
  `${publicDir}/Hydraulic-Match-RFQ-Template.xlsx`,
);
