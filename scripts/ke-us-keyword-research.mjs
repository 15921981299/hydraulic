import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { loadEnvFile } from "./lib/load-env.mjs";

loadEnvFile();

const API_ROOT = "https://api.keywordseverywhere.com/v1";
const apiKey = process.env.KEYWORDS_EVERYWHERE_API_KEY?.trim();
const budget = 500;
const country = "us";
const currency = "usd";
const domains = [
  "rexrothreplacements.com",
  "hydraulicpumpsupply.com",
  "restopower.com",
  "hydparts.com",
];

if (!apiKey) {
  throw new Error("KEYWORDS_EVERYWHERE_API_KEY is missing from .env");
}

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

async function api(endpoint, { method = "POST", body } = {}) {
  const response = await fetch(`${API_ROOT}${endpoint}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`KE ${endpoint} ${response.status}: ${message}`);
  }
  return response.json();
}

async function getBalance() {
  const data = await api("/account/credits", { method: "GET" });
  const balance = Array.isArray(data) ? Number(data[0]) : Number(data?.credits);
  if (!Number.isFinite(balance)) throw new Error("Unable to read KE credit balance");
  return balance;
}

function uniqueKeywords(values) {
  const seen = new Set();
  return values
    .map((value) => String(value ?? "").trim().toLowerCase().replace(/\s+/g, " "))
    .filter((value) => {
      if (!value || seen.has(value)) return false;
      seen.add(value);
      return true;
    });
}

function extractQuotedValues(text, field) {
  const pattern = new RegExp(`\\b${field}:\\s*["']([^"']+)["']`, "g");
  return [...text.matchAll(pattern)].map((match) => match[1].trim());
}

const startBalance = await getBalance();
if (startBalance < budget) {
  throw new Error(`KE balance ${startBalance} is below the authorized ${budget}-credit budget`);
}

let accountedSpend = 0;
const usage = [];
const recordUsage = (label, json) => {
  const credits = Number(json?.credits_consumed ?? 0);
  accountedSpend += credits;
  usage.push({ label, credits });
  if (accountedSpend > budget) {
    throw new Error(`Budget guard triggered after ${label}: ${accountedSpend}/${budget}`);
  }
};

const domainTrafficResponse = await api("/get_domain_traffic_metrics", {
  body: { domains, country },
});
recordUsage("domain traffic metrics", domainTrafficResponse);

const domainKeywordRows = [];
for (const domain of domains) {
  const maximumCost = 20 * 2;
  if (accountedSpend + maximumCost > budget) {
    throw new Error(`Budget guard blocked domain keywords for ${domain}`);
  }
  const response = await api("/get_domain_keywords", {
    body: { domain, country, num: 20 },
  });
  recordUsage(`domain keywords: ${domain}`, response);
  for (const row of response.data ?? []) {
    domainKeywordRows.push({
      domain,
      keyword: row.keyword ?? "",
      estimated_monthly_traffic: Number(row.estimated_monthly_traffic ?? 0),
      serp_position: Number(row.serp_position ?? 0),
    });
  }
}

const seriesText = await readFile("src/data/series-records.ts", "utf8");
const modelText = await readFile("src/data/model-records.ts", "utf8");
const seriesNames = uniqueKeywords([
  ...extractQuotedValues(seriesText, "series"),
  "a10vo",
  "a10vso",
  "a4vso",
  "aa10vo",
  "aa10vso",
  "a4vg",
  "a10v",
  "ap2d",
  "pvh",
  "mcr",
  "t6dc",
  "t6cc",
  "t6ccm",
  "t5d",
  "m1d",
  "tmb",
  "4we6",
  "4we10",
  "dg4v",
  "d1vw",
  "pavc",
]);
const modelNames = uniqueKeywords(extractQuotedValues(modelText, "model"));

const productSeeds = [
  "hydraulic pump",
  "hydraulic piston pump",
  "axial piston pump",
  "variable displacement pump",
  "hydraulic vane pump",
  "hydraulic gear pump",
  "hydraulic motor",
  "orbital hydraulic motor",
  "radial piston motor",
  "hydraulic valve",
  "directional control valve",
  "solenoid directional valve",
  "pressure control valve",
  "modular hydraulic valve",
  "hydraulic cylinder",
  "custom hydraulic cylinder",
  "hydraulic seal kit",
  "hydraulic repair kit",
  "hydraulic pump parts",
  "hydraulic motor parts",
  "hydraulic valve parts",
];
const productModifiers = [
  "",
  " supplier",
  " manufacturer",
  " replacement",
  " aftermarket",
  " in stock",
];
const brands = [
  "bosch rexroth",
  "eaton vickers",
  "parker",
  "danfoss sundstrand",
  "denison",
  "kawasaki",
  "yuken",
  "nachi",
  "linde",
  "atos",
  "hawe",
  "moog",
  "poclain",
  "bucher",
  "casappa",
  "hydac",
  "caterpillar",
];
const brandProducts = [
  " hydraulic pump",
  " hydraulic motor",
  " hydraulic valve",
  " replacement",
  " parts",
];
const seriesModifiers = [
  "",
  " replacement",
  " supplier",
  " parts",
  " seal kit",
  " equivalent",
];
const commercialExtras = [
  "hydraulic pump cross reference",
  "hydraulic motor cross reference",
  "hydraulic valve cross reference",
  "hydraulic pump equivalent",
  "hydraulic motor equivalent",
  "hydraulic valve equivalent",
  "obsolete hydraulic pump replacement",
  "obsolete hydraulic valve replacement",
  "discontinued hydraulic pump replacement",
  "aftermarket hydraulic pump supplier",
  "aftermarket hydraulic motor supplier",
  "aftermarket hydraulic valve supplier",
  "hydraulic pump distributor",
  "hydraulic motor distributor",
  "hydraulic valve distributor",
  "hydraulic pump price",
  "hydraulic motor price",
  "hydraulic valve price",
  "hydraulic pump quote",
  "hydraulic motor quote",
  "hydraulic valve quote",
  "hydraulic pump model identification",
  "hydraulic motor model identification",
  "hydraulic valve model identification",
  "how to identify hydraulic pump model",
  "how to read hydraulic valve model code",
  "hydraulic pump nameplate identification",
  "hydraulic pump rotation identification",
  "hydraulic pump flange identification",
  "hydraulic pump shaft identification",
  "hydraulic pump seal kit supplier",
  "hydraulic motor seal kit supplier",
  "hydraulic pump repair parts supplier",
  "hydraulic motor repair parts supplier",
];

const generatedCandidates = uniqueKeywords([
  ...productSeeds.flatMap((seed) => productModifiers.map((modifier) => `${seed}${modifier}`)),
  ...brands.flatMap((brand) => brandProducts.map((suffix) => `${brand}${suffix}`)),
  ...seriesNames.flatMap((series) => seriesModifiers.map((modifier) => `${series}${modifier}`)),
  ...modelNames.flatMap((model) => [
    model,
    `${model} replacement`,
    `${model} seal kit`,
    `${model} supplier`,
  ]),
  ...commercialExtras,
]);

const domainKeywordSet = new Set(domainKeywordRows.map((row) => row.keyword.toLowerCase()));
const remainingBudget = budget - accountedSpend;
const directCandidates = generatedCandidates
  .filter((keyword) => !domainKeywordSet.has(keyword))
  .slice(0, remainingBudget);

const keywordRows = [];
for (let i = 0; i < directCandidates.length; i += 100) {
  const batch = directCandidates.slice(i, i + 100);
  if (accountedSpend + batch.length > budget) {
    throw new Error(`Budget guard blocked keyword metrics batch at ${accountedSpend}/${budget}`);
  }
  const response = await api("/get_keyword_data", {
    body: { kw: batch, country, currency, dataSource: "gkp" },
  });
  recordUsage(`keyword metrics batch ${i / 100 + 1}`, response);
  for (const row of response.data ?? []) {
    keywordRows.push({
      keyword: row.keyword ?? "",
      volume: Number(row.vol ?? 0),
      cpc: Number(row.cpc?.value ?? 0),
      currency: row.cpc?.currency ?? "$",
      ads_competition: Number(row.competition ?? 0),
      trend: Array.isArray(row.trend) ? row.trend : [],
    });
  }
}

const endBalance = await getBalance();
const actualSpend = startBalance - endBalance;
if (actualSpend > budget) {
  throw new Error(`Actual KE spend ${actualSpend} exceeded authorized budget ${budget}`);
}

const outputDir = path.resolve(
  "outputs",
  "019f9822-178f-7111-bf18-920900df950f",
);
await mkdir(outputDir, { recursive: true });
const outputPath = path.join(outputDir, "ke-us-keyword-research.json");

await writeFile(
  outputPath,
  JSON.stringify(
    {
      market: { country, currency, dataSource: "gkp" },
      budget: { authorized: budget, startBalance, endBalance, actualSpend, accountedSpend },
      usage,
      domainTraffic: domainTrafficResponse.data ?? [],
      domainKeywords: domainKeywordRows,
      keywordMetrics: keywordRows,
      generatedCandidateCount: generatedCandidates.length,
      requestedDirectKeywordCount: directCandidates.length,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(
  JSON.stringify({
    outputPath,
    authorizedBudget: budget,
    actualSpend,
    accountedSpend,
    domainKeywordCount: domainKeywordRows.length,
    keywordMetricCount: keywordRows.length,
    generatedCandidateCount: generatedCandidates.length,
  }),
);
