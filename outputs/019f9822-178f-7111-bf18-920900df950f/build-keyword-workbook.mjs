import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const projectRoot = path.resolve("../..");
const outputDir = path.resolve(".");
const rawPath = path.join(outputDir, "ke-us-keyword-research.json");
const outputPath = path.join(outputDir, "Hydraulic-Match-KE-US-Keyword-Plan.xlsx");
const previewDir = path.join(outputDir, "previews");

const raw = JSON.parse(await fs.readFile(rawPath, "utf8"));
const sitemapXml = await fs.readFile(path.join(projectRoot, "dist/sitemap-0.xml"), "utf8");
const allOwnedDomains = [
  "rexrothreplacements.com",
  "hydraulicpumpsupply.com",
  "restopower.com",
  "hydparts.com",
];
const currentUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const url = new URL(match[1]);
  return url.pathname;
});

const COLORS = {
  navy: "#0F172A",
  slate: "#334155",
  blue: "#0369A1",
  blueLight: "#E0F2FE",
  green: "#15803D",
  greenLight: "#DCFCE7",
  amber: "#B45309",
  amberLight: "#FEF3C7",
  red: "#B91C1C",
  redLight: "#FEE2E2",
  gray: "#64748B",
  grayLight: "#F1F5F9",
  border: "#CBD5E1",
  white: "#FFFFFF",
  input: "#FFF7D6",
};

const seriesSlugs = [
  "a10vo", "a10vso", "a4vso", "aa10vo", "aa10vso", "a4vg", "a10v", "ap2d",
  "pvh", "mcr", "t6dc", "t6cc", "t6ccm", "t5d", "m1d", "tmb", "4we6", "4we10",
  "dg4v", "d1vw", "pavc", "cat-piston-pump",
];
const ambiguousStandalone = new Set([
  "mcr", "tmb", "pvh", "pavc", "m1d", "t5d", "a10v", "ap2d", "dg4v", "d1vw",
]);
const brandRoutes = [
  ["bosch rexroth", "/brands/bosch-rexroth/"],
  ["rexroth", "/brands/bosch-rexroth/"],
  ["eaton vickers", "/brands/eaton-vickers/"],
  ["vickers", "/brands/eaton-vickers/"],
  ["parker", "/brands/parker/"],
  ["danfoss sundstrand", "/brands/danfoss-sundstrand/"],
  ["sundstrand", "/brands/danfoss-sundstrand/"],
  ["denison", "/brands/denison/"],
  ["kawasaki", "/brands/kawasaki/"],
  ["yuken", "/brands/yuken/"],
  ["nachi", "/brands/nachi/"],
  ["linde", "/brands/linde/"],
  ["atos", "/brands/atos/"],
  ["hawe", "/brands/hawe/"],
  ["moog", "/brands/moog/"],
  ["poclain", "/brands/poclain/"],
  ["bucher", "/brands/bucher/"],
  ["casappa", "/brands/casappa/"],
  ["hydac", "/brands/hydac/"],
  ["caterpillar", "/brands/caterpillar/"],
];

const normalizeCompact = (value) => String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
const currentUrlSet = new Set(currentUrls);
const existingModelUrls = currentUrls.filter((url) => url.startsWith("/models/"));

function modelRoute(keyword) {
  const cleaned = keyword.replace(/\b(replacement|supplier|seal kit|parts|equivalent|price|quote)\b/gi, "");
  if (!/\d/.test(cleaned)) return "";
  const compact = normalizeCompact(cleaned);
  if (compact.length < 5) return "";
  return existingModelUrls.find((url) => normalizeCompact(url).includes(compact)) ?? "";
}

function seriesRoute(keyword) {
  const normalized = keyword.toLowerCase().replace(/[^a-z0-9]+/g, " ");
  const match = seriesSlugs
    .filter((slug) => slug !== "cat-piston-pump")
    .sort((a, b) => b.length - a.length)
    .find((slug) => new RegExp(`(^|\\s)${slug.replace(/-/g, " ")}(\\s|$)`, "i").test(normalized));
  if (match && currentUrlSet.has(`/series/${match}/`)) return `/series/${match}/`;
  if (/cat(er)?pillar.*(hydraulic|piston).*pump/i.test(keyword) && currentUrlSet.has("/series/cat-piston-pump/")) {
    return "/series/cat-piston-pump/";
  }
  return "";
}

function existingRoute(keyword) {
  const lower = keyword.toLowerCase();
  const model = modelRoute(lower);
  if (model) return model;
  const series = seriesRoute(lower);
  if (series) return series;
  if (/cross reference|model identification|model code|nameplate identification/i.test(lower)) return "/cross-reference/";
  if (/seal kit|repair kit|repair parts/i.test(lower)) return "/products/hydraulic-repair-kits/";
  if (/custom hydraulic cylinder/i.test(lower)) return "/products/hydraulic-cylinders/custom-hydraulic-cylinders/";
  if (/hydraulic cylinder/i.test(lower)) return "/products/hydraulic-cylinders/";
  if (/pressure control valve/i.test(lower)) return "/products/hydraulic-valves/pressure-control-valves/";
  if (/directional control valve|solenoid directional valve/i.test(lower)) {
    return "/products/hydraulic-valves/solenoid-directional-valves/";
  }
  if (/modular.*valve/i.test(lower)) return "/products/hydraulic-valves/modular-valves/";
  if (/hydraulic valve|valve parts|valve distributor|valve supplier|valve manufacturer/i.test(lower)) {
    return "/products/hydraulic-valves/";
  }
  if (/orbital hydraulic motor/i.test(lower)) return "/products/hydraulic-motors/orbital-hydraulic-motors/";
  if (/radial piston motor/i.test(lower)) return "/products/hydraulic-motors/radial-piston-motors/";
  if (/hydraulic motor|piston motor|motor parts|motor distributor|motor supplier|motor manufacturer/i.test(lower)) {
    return "/products/hydraulic-motors/";
  }
  if (/axial piston pump|hydraulic piston pump/i.test(lower)) {
    return "/products/hydraulic-pumps/axial-piston-pumps/";
  }
  if (/vane pump/i.test(lower)) return "/products/hydraulic-pumps/vane-pumps/";
  if (/gear pump/i.test(lower)) return "/products/hydraulic-pumps/gear-pumps/";
  if (/hydraulic pump|variable displacement pump|pump parts|pump supplier|pump manufacturer|pump distributor/i.test(lower)) {
    return "/products/hydraulic-pumps/";
  }
  for (const [brand, route] of brandRoutes) {
    if (lower.includes(brand) && currentUrlSet.has(route)) return route;
  }
  return "";
}

function intentFor(keyword) {
  if (/\b(supplier|manufacturer|distributor|price|quote|in stock)\b/i.test(keyword)) return "Transactional";
  if (/\b(replacement|alternative|equivalent|cross reference|aftermarket|compatible|parts|seal kit|repair kit)\b/i.test(keyword)) {
    return "Commercial";
  }
  if (/^(how|what|why|can)\b|identification|diagram|adjustment|freezing point|principle/i.test(keyword)) {
    return "Informational";
  }
  return "Product research";
}

function clusterFor(keyword) {
  const lower = keyword.toLowerCase();
  if (/seal kit|repair kit|repair parts/i.test(lower)) return "Repair Kits & Service Parts";
  if (/cross reference|replacement|alternative|equivalent|aftermarket|compatible/i.test(lower)) return "Replacement & Cross-reference";
  if (/cylinder/i.test(lower)) return "Hydraulic Cylinders";
  if (/motor/i.test(lower) || /\bmcr\b|\bm1d\b|\btmb\b/i.test(lower)) return "Hydraulic Motors";
  if (/valve/i.test(lower) || /\b4we6\b|\b4we10\b|\bdg4v\b|\bd1vw\b/i.test(lower)) return "Hydraulic Valves";
  if (/pump/i.test(lower) || /\ba10|\ba4v|\bpvh\b|\bpavc\b|\bt6/i.test(lower)) return "Hydraulic Pumps";
  if (brandRoutes.some(([brand]) => lower.includes(brand))) return "Brand Coverage";
  return "Technical / Other";
}

function relevanceFor(keyword) {
  const lower = keyword.toLowerCase().trim();
  if (ambiguousStandalone.has(lower) || /^[a-z]{2,4}$/.test(lower)) return 1;
  if (/^(caterpillar|kawasaki|parker|linde|moog|hydac|hawe|nachi|casappa|bucher|poclain|denison) (parts|replacement)$/i.test(lower)) {
    return 2;
  }
  if (/hydraulic|piston pump|vane pump|gear pump|directional control valve|pressure control valve|seal kit|repair kit/i.test(lower)) {
    return 5;
  }
  if (seriesRoute(lower) || modelRoute(lower)) return 5;
  if (brandRoutes.some(([brand]) => lower.includes(brand))) return 4;
  return 3;
}

function businessValueFor(keyword, intent, relevance) {
  if (relevance <= 2) return 1;
  if (intent === "Transactional" || intent === "Commercial") return 5;
  if (modelRoute(keyword) || seriesRoute(keyword)) return 5;
  if (intent === "Product research") return 4;
  return 2;
}

function trendStats(trend) {
  const values = (trend ?? []).map((point) => Number(point.value ?? 0)).filter(Number.isFinite);
  if (!values.length) return { latest: 0, average: 0, change: 0, history: "" };
  const latest = values.at(-1);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return {
    latest,
    average,
    change: average > 0 ? (latest - average) / average : 0,
    history: (trend ?? []).map((point) => `${point.month?.slice(0, 3)} ${point.year}:${point.value}`).join(" | "),
  };
}

function staticScore(row) {
  const volumeScore = row.volume >= 1000 ? 5 : row.volume >= 300 ? 4 : row.volume >= 100 ? 3 : row.volume >= 30 ? 2 : row.volume >= 10 ? 1 : 0;
  const cpcScore = row.cpc >= 5 ? 4 : row.cpc >= 2 ? 3 : row.cpc >= 1 ? 2 : row.cpc > 0 ? 1 : 0;
  return row.businessValue * 2 + volumeScore + cpcScore + (row.trendChange >= 0.2 ? 1 : 0) + (row.coverage === "Gap" ? 2 : 0) - (row.relevance <= 2 ? 5 : 0);
}

function priorityFromScore(score, relevance) {
  if (relevance <= 2) return "D";
  if (score >= 15) return "A";
  if (score >= 11) return "B";
  if (score >= 7) return "C";
  return "D";
}

function actionFor(row) {
  if (row.relevance <= 2) return "Exclude / qualify";
  if (row.existingUrl) return row.intent === "Informational" ? "Expand supporting content" : "Optimize existing page";
  if (row.intent === "Informational") return "Create supporting guide";
  return "Create commercial landing page";
}

function pageTypeFor(row) {
  if (row.existingUrl.startsWith("/models/") || modelRoute(row.keyword)) return "Model record";
  if (row.existingUrl.startsWith("/series/") || seriesRoute(row.keyword)) return "Series hub";
  if (row.existingUrl.startsWith("/brands/")) return "Brand hub";
  if (row.intent === "Informational") return "Technical guide";
  if (row.cluster === "Replacement & Cross-reference") return "Alternative / cross-reference";
  return "Product / category";
}

function noteFor(row) {
  if (row.relevance === 1) return "Ambiguous acronym; only target with hydraulic, brand or product qualifier.";
  if (row.relevance === 2) return "Broad brand term; narrow to a hydraulic product, series or exact part.";
  if (row.volume === 0 && row.businessValue === 5) return "Low-volume commercial long tail; retain only when real supply evidence is available.";
  if (row.existingUrl) return "Align title, evidence, internal links and RFQ CTA with this search intent.";
  return "Create only when the page can add unique specifications, compatibility evidence or stock proof.";
}

const planRows = raw.keywordMetrics.map((metric) => {
  const trend = trendStats(metric.trend);
  const intent = intentFor(metric.keyword);
  const relevance = relevanceFor(metric.keyword);
  const existingUrl = existingRoute(metric.keyword);
  const row = {
    keyword: metric.keyword,
    volume: Number(metric.volume ?? 0),
    cpc: Number(metric.cpc ?? 0),
    competition: Number(metric.ads_competition ?? 0),
    latestTrend: trend.latest,
    trendChange: trend.change,
    intent,
    cluster: clusterFor(metric.keyword),
    relevance,
    existingUrl,
    coverage: existingUrl ? "Covered" : "Gap",
    businessValue: businessValueFor(metric.keyword, intent, relevance),
  };
  row.action = actionFor(row);
  row.pageType = pageTypeFor(row);
  row.note = noteFor(row);
  row.staticScore = staticScore(row);
  row.priority = priorityFromScore(row.staticScore, row.relevance);
  return row;
}).sort((a, b) =>
  b.staticScore - a.staticScore ||
  b.volume - a.volume ||
  a.keyword.localeCompare(b.keyword),
);

const rawRows = raw.keywordMetrics.map((metric) => {
  const trend = trendStats(metric.trend);
  return [
    metric.keyword,
    Number(metric.volume ?? 0),
    Number(metric.cpc ?? 0),
    Number(metric.ads_competition ?? 0),
    trend.latest,
    trend.average,
    trend.change,
    trend.history,
  ];
});

const ownedRows = raw.domainKeywords
  .map((row) => {
    const route = existingRoute(row.keyword);
    const intent = intentFor(row.keyword);
    const relevance = relevanceFor(row.keyword);
    return {
      ...row,
      intent,
      relevance,
      existingUrl: route,
      recommendation:
        relevance <= 2
          ? "Do not copy blindly; qualify with hydraulic intent"
          : route
            ? "Protect and strengthen matching Hydraulic Match page"
            : "Review as a potential migration/content gap",
    };
  })
  .sort((a, b) => b.estimated_monthly_traffic - a.estimated_monthly_traffic);

const workbook = Workbook.create();
const dashboard = workbook.worksheets.add("Dashboard");
const keywordPlan = workbook.worksheets.add("Keyword Plan");
const ownedWins = workbook.worksheets.add("Owned Site Wins");
const rawSheet = workbook.worksheets.add("Raw KE Metrics");
const coverageSheet = workbook.worksheets.add("Current Coverage");
const methodology = workbook.worksheets.add("Methodology");

for (const sheet of [dashboard, keywordPlan, ownedWins, rawSheet, coverageSheet, methodology]) {
  sheet.showGridLines = false;
}

// Keyword Plan
const planHeaders = [
  "Keyword", "Volume", "CPC (USD)", "Ads Competition", "Latest Month", "Trend vs Avg",
  "Intent", "Cluster", "Relevance (1-5)", "Existing URL", "Coverage", "Recommended Action",
  "Page Type", "Business Value", "Volume Score", "CPC Score", "Priority Score", "Priority",
  "Est. Clicks @ Target CTR", "Est. Inquiries", "Recommendation Note",
];
keywordPlan.getRange(`A1:U${planRows.length + 1}`).values = [
  planHeaders,
  ...planRows.map((row) => [
    row.keyword, row.volume, row.cpc, row.competition, row.latestTrend, row.trendChange,
    row.intent, row.cluster, row.relevance, row.existingUrl, row.coverage, row.action,
    row.pageType, row.businessValue, null, null, null, null, null, null, row.note,
  ]),
];
const firstPlanDataRow = 2;
const lastPlanRow = planRows.length + 1;
keywordPlan.getRange(`O${firstPlanDataRow}`).formulas = [[`=IF(B${firstPlanDataRow}>=1000,5,IF(B${firstPlanDataRow}>=300,4,IF(B${firstPlanDataRow}>=100,3,IF(B${firstPlanDataRow}>=30,2,IF(B${firstPlanDataRow}>=10,1,0)))))`]];
keywordPlan.getRange(`O${firstPlanDataRow}:O${lastPlanRow}`).fillDown();
keywordPlan.getRange(`P${firstPlanDataRow}`).formulas = [[`=IF(C${firstPlanDataRow}>=5,4,IF(C${firstPlanDataRow}>=2,3,IF(C${firstPlanDataRow}>=1,2,IF(C${firstPlanDataRow}>0,1,0))))`]];
keywordPlan.getRange(`P${firstPlanDataRow}:P${lastPlanRow}`).fillDown();
keywordPlan.getRange(`Q${firstPlanDataRow}`).formulas = [[`=N${firstPlanDataRow}*2+O${firstPlanDataRow}+P${firstPlanDataRow}+IF(F${firstPlanDataRow}>=0.2,1,0)+IF(K${firstPlanDataRow}="Gap",2,0)-IF(I${firstPlanDataRow}<=2,5,0)`]];
keywordPlan.getRange(`Q${firstPlanDataRow}:Q${lastPlanRow}`).fillDown();
keywordPlan.getRange(`R${firstPlanDataRow}`).formulas = [[`=IF(I${firstPlanDataRow}<=2,"D",IF(Q${firstPlanDataRow}>=15,"A",IF(Q${firstPlanDataRow}>=11,"B",IF(Q${firstPlanDataRow}>=7,"C","D"))))`]];
keywordPlan.getRange(`R${firstPlanDataRow}:R${lastPlanRow}`).fillDown();
keywordPlan.getRange(`S${firstPlanDataRow}`).formulas = [[`=B${firstPlanDataRow}*'Dashboard'!$B$11`]];
keywordPlan.getRange(`S${firstPlanDataRow}:S${lastPlanRow}`).fillDown();
keywordPlan.getRange(`T${firstPlanDataRow}`).formulas = [[`=S${firstPlanDataRow}*'Dashboard'!$D$11`]];
keywordPlan.getRange(`T${firstPlanDataRow}:T${lastPlanRow}`).fillDown();
keywordPlan.tables.add(`A1:U${lastPlanRow}`, true, "KeywordPlanTable");
keywordPlan.freezePanes.freezeRows(1);
keywordPlan.freezePanes.freezeColumns(1);

// Owned site wins
const ownedHeaders = ["Domain", "Keyword", "Estimated US Traffic", "SERP Position", "Intent", "Relevance", "Matching Hydraulic Match URL", "Recommendation"];
ownedWins.getRange(`A1:H${ownedRows.length + 1}`).values = [
  ownedHeaders,
  ...ownedRows.map((row) => [
    row.domain, row.keyword, row.estimated_monthly_traffic, row.serp_position, row.intent,
    row.relevance, row.existingUrl, row.recommendation,
  ]),
];
ownedWins.tables.add(`A1:H${ownedRows.length + 1}`, true, "OwnedSiteWinsTable");
ownedWins.freezePanes.freezeRows(1);

// Raw KE data
const rawHeaders = ["Keyword", "Volume", "CPC (USD)", "Ads Competition", "Latest Month", "12M Average", "Trend vs Avg", "12-Month History"];
rawSheet.getRange(`A1:H${rawRows.length + 1}`).values = [rawHeaders, ...rawRows];
rawSheet.tables.add(`A1:H${rawRows.length + 1}`, true, "RawKEMetricsTable");
rawSheet.freezePanes.freezeRows(1);

// Current URL coverage
const coverageRows = currentUrls.map((url) => {
  const section = url === "/" ? "home" : url.split("/").filter(Boolean)[0];
  return [url, section, url.startsWith("/models/") ? "Model" : url.startsWith("/series/") ? "Series" : url.startsWith("/brands/") ? "Brand" : url.startsWith("/resources/") ? "Resource" : "Core / Other"];
});
coverageSheet.getRange(`A1:C${coverageRows.length + 1}`).values = [["Current URL", "Section", "Page Class"], ...coverageRows];
coverageSheet.tables.add(`A1:C${coverageRows.length + 1}`, true, "CurrentCoverageTable");
coverageSheet.freezePanes.freezeRows(1);

// Dashboard
dashboard.mergeCells("A1:H2");
dashboard.getRange("A1").values = [["Hydraulic Match - KE US Keyword Opportunity Dashboard"]];
dashboard.getRange("A3:H3").values = [["Market: United States | Data: Keywords Everywhere / Google Keyword Planner | Goal: qualified hydraulic RFQs", null, null, null, null, null, null, null]];
dashboard.getRange("A5:H5").values = [["Keywords Tested", null, "With Volume", null, "A/B Opportunities", null, "Commercial Gaps", null]];
dashboard.getRange("A6").formulas = [[`=COUNTA('Keyword Plan'!A2:A${lastPlanRow})`]];
dashboard.getRange("C6").formulas = [[`=COUNTIF('Keyword Plan'!B2:B${lastPlanRow},">0")`]];
dashboard.getRange("E6").formulas = [[`=COUNTIF('Keyword Plan'!R2:R${lastPlanRow},"A")+COUNTIF('Keyword Plan'!R2:R${lastPlanRow},"B")`]];
dashboard.getRange("G6").formulas = [[`=COUNTIFS('Keyword Plan'!K2:K${lastPlanRow},"Gap",'Keyword Plan'!R2:R${lastPlanRow},"A")+COUNTIFS('Keyword Plan'!K2:K${lastPlanRow},"Gap",'Keyword Plan'!R2:R${lastPlanRow},"B")`]];
dashboard.getRange("A8:H8").values = [["Credits Authorized", null, "Credits Used", null, "Owned-Site Ranking Terms", null, "Current Indexed URLs", null]];
dashboard.getRange("A9:H9").values = [[raw.budget.authorized, null, raw.budget.actualSpend, null, raw.domainKeywords.length, null, currentUrls.length, null]];
dashboard.getRange("A11").values = [["Target organic CTR"]];
dashboard.getRange("B11").values = [[0.1]];
dashboard.getRange("C11").values = [["Qualified inquiry rate"]];
dashboard.getRange("D11").values = [[0.02]];
dashboard.getRange("E11:H11").values = [["Editable planning assumptions; estimated clicks and inquiries are scenarios, not forecasts.", null, null, null]];

dashboard.getRange("A13:D13").values = [["Owned Domain", "Estimated US Traffic", "Top-30 Keywords", "Observation"]];
const domainRows = allOwnedDomains.map((domain) => {
  const row = raw.domainTraffic.find((item) => item.domain === domain);
  return [
    domain,
    Number(row?.estimated_monthly_traffic ?? 0),
    Number(row?.total_ranking_keywords ?? 0),
    Number(row?.estimated_monthly_traffic ?? 0) > 0
      ? "Existing authority to preserve during consolidation"
      : "No measurable US traffic returned in this snapshot",
  ];
});
dashboard.getRange(`A14:D${13 + domainRows.length}`).values = domainRows;

dashboard.getRange("A20:H20").values = [["Top Priority Opportunities", "Volume", "CPC", "Intent", "Cluster", "Coverage", "Action", "Target URL"]];
const topRows = planRows.filter((row) => row.priority === "A" && row.relevance >= 4).slice(0, 15);
dashboard.getRange(`A21:H${20 + topRows.length}`).values = topRows.map((row) => [
  row.keyword, row.volume, row.cpc, row.intent, row.cluster, row.coverage, row.action, row.existingUrl,
]);

// Methodology
const methodRows = [
  ["Scope", "United States; English; Google Keyword Planner data through Keywords Everywhere."],
  ["Authorized KE credits", raw.budget.authorized],
  ["Actual KE credits used", raw.budget.actualSpend],
  ["Owned domains analyzed", allOwnedDomains.join(", ")],
  ["Direct keyword metrics", raw.keywordMetrics.length],
  ["Owned-domain ranking terms returned", raw.domainKeywords.length],
  ["Competition definition", "Google Ads advertiser competition (0–1), not organic SEO difficulty."],
  ["Priority A", "Highest commercial value and measurable demand; act first."],
  ["Priority B", "Strong supporting opportunity; act after A items."],
  ["Priority C", "Useful coverage/supporting content; validate SERP before building."],
  ["Priority D", "Ambiguous, weak, irrelevant or currently too low-value."],
  ["Target CTR assumption", "Dashboard!B11; editable scenario input."],
  ["Inquiry-rate assumption", "Dashboard!D11; editable scenario input."],
  ["Traffic warning", "Search volumes overlap across close variants; do not sum them as unique market demand."],
  ["Zero-volume warning", "Exact industrial model queries may still produce valuable RFQs despite suppressed/zero tool volume."],
  ["Source", "https://api.keywordseverywhere.com/docs/"],
  ["Source", "https://keywordseverywhere.com/api-documentation.html"],
  ["Current site", "https://hydraulicmatch.com/"],
];
methodology.mergeCells("A1:F2");
methodology.getRange("A1").values = [["Methodology, Assumptions and Source Notes"]];
methodology.getRange(`A4:B${methodRows.length + 3}`).values = methodRows;
methodology.freezePanes.freezeRows(3);

// Shared styling
function styleTableSheet(sheet, headerRange, usedRange) {
  sheet.getRange(headerRange).format = {
    fill: COLORS.navy,
    font: { bold: true, color: COLORS.white },
    wrapText: true,
    verticalAlignment: "center",
    borders: { bottom: { style: "medium", color: COLORS.blue } },
  };
  sheet.getRange(usedRange).format.font = { name: "Arial", size: 10 };
}

styleTableSheet(keywordPlan, "A1:U1", `A1:U${lastPlanRow}`);
styleTableSheet(ownedWins, "A1:H1", `A1:H${ownedRows.length + 1}`);
styleTableSheet(rawSheet, "A1:H1", `A1:H${rawRows.length + 1}`);
styleTableSheet(coverageSheet, "A1:C1", `A1:C${coverageRows.length + 1}`);

keywordPlan.getRange(`B2:B${lastPlanRow}`).format.numberFormat = "#,##0";
keywordPlan.getRange(`C2:C${lastPlanRow}`).format.numberFormat = "$0.00";
keywordPlan.getRange(`D2:D${lastPlanRow}`).format.numberFormat = "0.00";
keywordPlan.getRange(`E2:E${lastPlanRow}`).format.numberFormat = "#,##0";
keywordPlan.getRange(`F2:F${lastPlanRow}`).format.numberFormat = "0.0%";
keywordPlan.getRange(`S2:S${lastPlanRow}`).format.numberFormat = "#,##0.0";
keywordPlan.getRange(`T2:T${lastPlanRow}`).format.numberFormat = "0.00";
keywordPlan.getRange(`R2:R${lastPlanRow}`).conditionalFormats.add("containsText", { text: "A", format: { fill: COLORS.greenLight, font: { bold: true, color: COLORS.green } } });
keywordPlan.getRange(`R2:R${lastPlanRow}`).conditionalFormats.add("containsText", { text: "B", format: { fill: COLORS.amberLight, font: { bold: true, color: COLORS.amber } } });
keywordPlan.getRange(`R2:R${lastPlanRow}`).conditionalFormats.add("containsText", { text: "C", format: { fill: COLORS.blueLight, font: { bold: true, color: COLORS.blue } } });
keywordPlan.getRange(`R2:R${lastPlanRow}`).conditionalFormats.add("containsText", { text: "D", format: { fill: COLORS.grayLight, font: { color: COLORS.gray } } });
keywordPlan.getRange(`K2:K${lastPlanRow}`).conditionalFormats.add("containsText", { text: "Gap", format: { fill: COLORS.redLight, font: { color: COLORS.red } } });

rawSheet.getRange(`B2:B${rawRows.length + 1}`).format.numberFormat = "#,##0";
rawSheet.getRange(`C2:C${rawRows.length + 1}`).format.numberFormat = "$0.00";
rawSheet.getRange(`D2:D${rawRows.length + 1}`).format.numberFormat = "0.00";
rawSheet.getRange(`E2:F${rawRows.length + 1}`).format.numberFormat = "#,##0.0";
rawSheet.getRange(`G2:G${rawRows.length + 1}`).format.numberFormat = "0.0%";
ownedWins.getRange(`C2:C${ownedRows.length + 1}`).format.numberFormat = "#,##0";
ownedWins.getRange(`D2:D${ownedRows.length + 1}`).format.numberFormat = "0";

dashboard.getRange("A1:H2").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white, size: 20 },
  horizontalAlignment: "left",
  verticalAlignment: "center",
};
dashboard.getRange("A3:H3").format = { fill: COLORS.blueLight, font: { color: COLORS.slate, italic: true } };
for (const range of ["A5:H5", "A8:H8", "A13:D13", "A20:H20"]) {
  dashboard.getRange(range).format = { fill: COLORS.slate, font: { bold: true, color: COLORS.white }, wrapText: true };
}
for (const cell of ["A6", "C6", "E6", "G6", "A9", "C9", "E9", "G9"]) {
  dashboard.getRange(cell).format = { fill: COLORS.grayLight, font: { bold: true, color: COLORS.blue, size: 16 }, numberFormat: "#,##0" };
}
dashboard.getRange("B11").format = { fill: COLORS.input, font: { bold: true, color: COLORS.navy }, numberFormat: "0.0%" };
dashboard.getRange("D11").format = { fill: COLORS.input, font: { bold: true, color: COLORS.navy }, numberFormat: "0.0%" };
dashboard.getRange(`B14:C${13 + domainRows.length}`).format.numberFormat = "#,##0";
dashboard.getRange(`B21:B${20 + topRows.length}`).format.numberFormat = "#,##0";
dashboard.getRange(`C21:C${20 + topRows.length}`).format.numberFormat = "$0.00";
dashboard.freezePanes.freezeRows(3);

methodology.getRange("A1:F2").format = {
  fill: COLORS.navy,
  font: { bold: true, color: COLORS.white, size: 18 },
  verticalAlignment: "center",
};
methodology.getRange(`A4:A${methodRows.length + 3}`).format = { fill: COLORS.grayLight, font: { bold: true, color: COLORS.navy } };
methodology.getRange(`A4:B${methodRows.length + 3}`).format.borders = { insideHorizontal: { style: "thin", color: COLORS.border } };
methodology.getRange(`B4:B${methodRows.length + 3}`).format.wrapText = true;

// Column widths
const widths = (sheet, map, rows) => {
  for (const [column, width] of Object.entries(map)) {
    sheet.getRange(`${column}1:${column}${rows}`).format.columnWidth = width;
  }
};
widths(keywordPlan, { A: 31, B: 10, C: 11, D: 13, E: 11, F: 12, G: 16, H: 27, I: 12, J: 42, K: 10, L: 28, M: 23, N: 12, O: 11, P: 10, Q: 12, R: 9, S: 17, T: 14, U: 48 }, lastPlanRow);
widths(ownedWins, { A: 27, B: 42, C: 17, D: 12, E: 16, F: 10, G: 44, H: 48 }, ownedRows.length + 1);
widths(rawSheet, { A: 42, B: 11, C: 11, D: 14, E: 12, F: 12, G: 12, H: 80 }, rawRows.length + 1);
widths(coverageSheet, { A: 70, B: 22, C: 20 }, coverageRows.length + 1);
widths(dashboard, { A: 32, B: 16, C: 19, D: 32, E: 26, F: 15, G: 31, H: 48 }, 40);
widths(methodology, { A: 28, B: 100 }, methodRows.length + 3);

keywordPlan.getRange(`A1:U${lastPlanRow}`).format.rowHeight = 19;
keywordPlan.getRange("A1:U1").format.rowHeight = 34;
ownedWins.getRange(`A1:H${ownedRows.length + 1}`).format.rowHeight = 21;
rawSheet.getRange(`A1:H${rawRows.length + 1}`).format.rowHeight = 19;
coverageSheet.getRange(`A1:C${coverageRows.length + 1}`).format.rowHeight = 19;
dashboard.getRange("A1:H40").format.font = { name: "Arial" };
methodology.getRange(`A1:B${methodRows.length + 3}`).format.font = { name: "Arial" };

// Compact verification and visual pass
await fs.mkdir(previewDir, { recursive: true });
const inspections = {
  dashboard: (await workbook.inspect({ kind: "table", range: "Dashboard!A1:H35", include: "values,formulas", tableMaxRows: 35, tableMaxCols: 8 })).ndjson,
  plan: (await workbook.inspect({ kind: "table", range: "Keyword Plan!A1:U12", include: "values,formulas", tableMaxRows: 12, tableMaxCols: 21 })).ndjson,
  errors: (await workbook.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 100 }, summary: "final formula error scan" })).ndjson,
};
await fs.writeFile(path.join(outputDir, "workbook-verification.json"), JSON.stringify(inspections, null, 2));

const renderSpecs = [
  ["Dashboard", "A1:H35"],
  ["Keyword Plan", "A1:U18"],
  ["Owned Site Wins", `A1:H${Math.min(ownedRows.length + 1, 24)}`],
  ["Raw KE Metrics", "A1:H20"],
  ["Current Coverage", "A1:C24"],
  ["Methodology", `A1:F${methodRows.length + 3}`],
];
for (const [sheetName, range] of renderSpecs) {
  const image = await workbook.render({ sheetName, range, scale: 1, format: "png" });
  await fs.writeFile(path.join(previewDir, `${sheetName.replace(/\s+/g, "-").toLowerCase()}.png`), new Uint8Array(await image.arrayBuffer()));
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(JSON.stringify({
  outputPath,
  sheets: 6,
  keywordRows: planRows.length,
  ownedKeywordRows: ownedRows.length,
  currentUrls: currentUrls.length,
  topPriorities: topRows.length,
}));
