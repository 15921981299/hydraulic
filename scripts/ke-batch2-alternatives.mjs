import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { loadEnvFile } from "./lib/load-env.mjs";

loadEnvFile();

const API_ROOT = "https://api.keywordseverywhere.com/v1";
const apiKey = process.env.KEYWORDS_EVERYWHERE_API_KEY?.trim();
const budget = 350;
const country = "us";
const currency = "usd";

if (!apiKey) throw new Error("KEYWORDS_EVERYWHERE_API_KEY missing");

const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

async function api(endpoint, { method = "POST", body } = {}) {
  const res = await fetch(`${API_ROOT}${endpoint}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!res.ok) throw new Error(`KE ${endpoint} ${res.status}: ${await res.text()}`);
  return res.json();
}

async function getBalance() {
  const data = await api("/account/credits", { method: "GET" });
  return Array.isArray(data) ? Number(data[0]) : Number(data?.credits);
}

const uniq = (arr) => [...new Set(arr.map((k) => k.toLowerCase().trim()).filter(Boolean))];

// Class A: brand + series (highest-intent mid-tail, never tested)
const brandSeries = {
  rexroth: ["a10vso", "a10vo", "a4vso", "a4vg", "a11vo", "a2fo", "4we6", "4we10"],
  vickers: ["pvh", "pvq", "dg4v", "dg5v", "25v", "35v", "45v"],
  parker: ["d1vw", "pavc", "pvp", "f12", "d3w"],
  denison: ["t6cc", "t6dc", "t6ec", "pv"],
  kawasaki: ["k3v", "k3vl", "k5v", "k7v"],
  danfoss: ["90r", "90l", "h1p", "omr", "oms"],
  poclain: ["mcr", "ms", "mk"],
  yuken: ["dsg", "ar"],
  nachi: ["pvs", "pvd"],
  linde: ["hpr", "bpv"],
};
const classA = Object.entries(brandSeries).flatMap(([brand, series]) =>
  series.map((s) => `${brand} ${s}`),
);

// Class B: "alternative" modifier — the site's core positioning word, never tested
const altSeeds = [
  "rexroth", "bosch rexroth", "vickers", "eaton vickers", "parker", "denison",
  "kawasaki", "danfoss", "poclain", "yuken", "nachi", "linde", "atos", "hawe",
  "a10vso", "a10vo", "a4vg", "4we6", "4we10", "pvh", "dg4v", "d1vw", "pavc",
  "mcr", "t6cc", "k3v", "90r", "h1p", "dsg",
];
const classB = [
  ...altSeeds.map((s) => `${s} alternative`),
  "hydraulic pump alternative",
  "hydraulic motor alternative",
  "hydraulic valve alternative",
  "rexroth pump alternative",
  "rexroth valve alternative",
  "vickers pump alternative",
  "parker valve alternative",
  "kawasaki pump alternative",
  "chinese hydraulic alternative",
  "china alternative hydraulic parts",
];

// Class C: brand + series + product type
const classC = [
  "rexroth a10vso pump", "rexroth a4vg pump", "rexroth 4we6 valve",
  "rexroth a10vso supplier", "rexroth a10vso price", "rexroth a10vso parts",
  "vickers pvh pump", "vickers dg4v valve", "vickers pvh parts",
  "parker d1vw valve", "parker pavc pump", "parker d1vw parts",
  "kawasaki k3v pump", "kawasaki k3v parts", "kawasaki k3v seal kit",
  "poclain mcr motor", "poclain mcr parts", "denison t6cc pump",
  "danfoss 90r pump", "linde hpr pump", "yuken dsg valve",
  "a10vso seal kit", "4we6 seal kit", "pvh seal kit", "a4vg seal kit",
  "a10vso parts", "4we6 parts", "pvh parts", "mcr seal kit",
];

// Class D: China sourcing intent
const classD = [
  "hydraulic parts china", "hydraulic pump china", "hydraulic valve china",
  "hydraulic motor china", "hydraulic cylinder china",
  "china hydraulic pump manufacturer", "china hydraulic valve manufacturer",
  "china hydraulic supplier", "china hydraulic parts supplier",
  "hydraulic components made in china", "hydraulic pump made in china",
  "buy hydraulic pump from china", "import hydraulic parts from china",
  "china hydraulic pump factory", "hydraulic parts wholesale china",
  "replacement hydraulic parts from china",
];

// Class E: model code fragments / truncated codes (how buyers actually search)
const classE = [
  "a10vso71", "a10vso45", "a10vso100", "a10vso28", "a10vso18",
  "a4vso71", "a4vso125", "a4vg90", "a4vg71",
  "4we6d", "4we6j", "4we10e", "dg4v3", "dg4v5",
  "pvh74", "pvh98", "pvh106", "pvh131",
  "d1vw020", "d1vw004", "pavc100", "pavc65",
  "mcr03", "mcr05", "mcr10", "t6ccm", "k3v112", "k3v63", "k5v80",
  "a10vso71dfr1", "4we6d6x", "dg4v-3-6c",
  "a10vso pump parts", "a10vso repair kit", "4we6 coil", "4we6 spool",
];

// Class F: purchase-intent generic
const classF = [
  "buy hydraulic pump", "buy hydraulic valve", "hydraulic pump for sale",
  "hydraulic valve for sale", "discount hydraulic parts",
  "hydraulic pump online", "hydraulic valve online",
  "oem hydraulic pump", "oem hydraulic parts", "oem hydraulic valve",
  "aftermarket rexroth parts", "aftermarket vickers parts", "aftermarket parker hydraulic",
  "rexroth compatible", "vickers compatible", "parker compatible",
  "hydraulic spare parts supplier", "hydraulic pump spare parts",
];

const all = uniq([...classA, ...classB, ...classC, ...classD, ...classE, ...classF]);
console.log(`candidate count: ${all.length}`);
if (all.length > budget) throw new Error(`candidates ${all.length} > budget ${budget}`);

const startBalance = await getBalance();
console.log(`KE balance before: ${startBalance}`);
if (startBalance < budget) throw new Error("insufficient KE balance");

let spent = 0;
const rows = [];
for (let i = 0; i < all.length; i += 100) {
  const batch = all.slice(i, i + 100);
  const res = await api("/get_keyword_data", {
    body: { kw: batch, country, currency, dataSource: "gkp" },
  });
  spent += Number(res?.credits_consumed ?? batch.length);
  for (const row of res.data ?? []) {
    rows.push({
      keyword: row.keyword ?? "",
      volume: Number(row.vol ?? 0),
      cpc: Number(row.cpc?.value ?? 0),
      competition: Number(row.competition ?? 0),
    });
  }
  console.log(`batch ${i / 100 + 1}: ${batch.length} keywords done`);
}

const endBalance = await getBalance();
const outDir = path.resolve("outputs", "ke-batch2-alternative-brand-series");
await mkdir(outDir, { recursive: true });
const outPath = path.join(outDir, "ke-batch2.json");
await writeFile(
  outPath,
  JSON.stringify(
    {
      market: { country, currency, dataSource: "gkp" },
      budget: { authorized: budget, startBalance, endBalance, spent },
      classes: {
        A_brand_series: classA.length,
        B_alternative: classB.length,
        C_brand_series_type: classC.length,
        D_china_sourcing: classD.length,
        E_model_fragments: classE.length,
        F_purchase_intent: classF.length,
      },
      keywordMetrics: rows,
    },
    null,
    2,
  ),
  "utf8",
);
console.log(JSON.stringify({ outPath, spent, startBalance, endBalance, rows: rows.length }));
