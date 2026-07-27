import fs from "node:fs/promises";
import { Workbook } from "@oai/artifact-tool";

const sources = [
  ["Pages", "E:/hydraulic/Pages.csv"],
  ["Queries", "E:/hydraulic/Queries.csv"],
];

function number(value) {
  if (typeof value === "number") return value;
  const cleaned = String(value ?? "").replaceAll(",", "").replace("%", "").trim();
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function isPercent(value) {
  return String(value ?? "").includes("%");
}

for (const [name, path] of sources) {
  const csvText = await fs.readFile(path, "utf8");
  const workbook = await Workbook.fromCSV(csvText, { sheetName: name });
  const sheet = workbook.worksheets.getItem(name);
  const values = sheet.getUsedRange(true).values;
  const headers = values[0].map((value) => String(value ?? "").trim());
  const rows = values.slice(1).filter((row) => row.some((cell) => cell !== null && cell !== ""));
  const records = rows.map((row) =>
    Object.fromEntries(headers.map((header, index) => [header, row[index]])),
  );

  const metricHeader = (pattern) => headers.find((header) => pattern.test(header));
  const clicksKey = metricHeader(/click/i);
  const impressionsKey = metricHeader(/impression/i);
  const ctrKey = metricHeader(/ctr/i);
  const positionKey = metricHeader(/position/i);
  const dimensionKey = headers.find(
    (header) => ![clicksKey, impressionsKey, ctrKey, positionKey].includes(header),
  );

  const normalized = records.map((record) => ({
    dimension: String(record[dimensionKey] ?? ""),
    clicks: number(record[clicksKey]),
    impressions: number(record[impressionsKey]),
    ctr: isPercent(record[ctrKey]) ? number(record[ctrKey]) / 100 : number(record[ctrKey]),
    position: number(record[positionKey]),
  }));

  const totals = normalized.reduce(
    (acc, row) => {
      acc.clicks += row.clicks;
      acc.impressions += row.impressions;
      return acc;
    },
    { clicks: 0, impressions: 0 },
  );
  const weightedPositionNumerator = normalized.reduce(
    (sum, row) => sum + row.position * row.impressions,
    0,
  );
  const weightedCtr = totals.impressions ? totals.clicks / totals.impressions : 0;
  const weightedPosition = totals.impressions
    ? weightedPositionNumerator / totals.impressions
    : 0;

  const topClicks = [...normalized]
    .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
    .slice(0, 15);
  const topImpressions = [...normalized]
    .sort((a, b) => b.impressions - a.impressions || b.clicks - a.clicks)
    .slice(0, 15);
  const strikingDistance = normalized
    .filter((row) => row.impressions >= 20 && row.position >= 4 && row.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);
  const lowCtr = normalized
    .filter((row) => row.impressions >= 20 && row.position <= 10 && row.ctr < 0.03)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);

  console.log(
    JSON.stringify({
      name,
      headers,
      rowCount: normalized.length,
      totals: { ...totals, weightedCtr, weightedPosition },
      topClicks,
      topImpressions,
      strikingDistance,
      lowCtr,
    }),
  );
}
