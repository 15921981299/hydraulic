import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const distDir = "E:/hydraulic/dist";
const pages = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name === "index.html" || entry.name === "404.html") {
      const html = await readFile(full, "utf8");
      const relative = path.relative(distDir, full).replaceAll("\\", "/");
      const pathname =
        relative === "index.html"
          ? "/"
          : relative === "404.html"
            ? "/404.html"
            : `/${relative.replace(/index\.html$/, "")}`;
      const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
      const text = main
        .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
        .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&[a-z0-9#]+;/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
      const words = text.match(/[A-Za-z0-9][A-Za-z0-9+./%-]*/g) ?? [];
      const type = pathname === "/"
        ? "home"
        : pathname.split("/").filter(Boolean)[0] ?? "other";
      const schemas = [...html.matchAll(
        /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
      )].flatMap((match) => {
        try {
          const parsed = JSON.parse(match[1]);
          const blocks = Array.isArray(parsed) ? parsed : [parsed];
          return blocks.map((block) => block?.["@type"]).filter(Boolean).flat();
        } catch {
          return [];
        }
      });
      pages.push({
        pathname,
        type,
        wordCount: words.length,
        bytes: (await stat(full)).size,
        noindex: /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html),
        schemas: [...new Set(schemas)],
        title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "",
      });
    }
  }
}

await walk(distDir);

const indexable = pages.filter((page) => !page.noindex && page.pathname !== "/404.html");
const groups = Object.groupBy(indexable, (page) => page.type);
const summary = Object.entries(groups)
  .map(([type, items]) => {
    const sortedWords = items.map((item) => item.wordCount).sort((a, b) => a - b);
    const median = sortedWords[Math.floor(sortedWords.length / 2)] ?? 0;
    return {
      type,
      count: items.length,
      minWords: sortedWords[0] ?? 0,
      medianWords: median,
      maxWords: sortedWords.at(-1) ?? 0,
    };
  })
  .sort((a, b) => b.count - a.count);

const thinnest = [...indexable]
  .sort((a, b) => a.wordCount - b.wordCount)
  .slice(0, 25);
const largest = [...indexable]
  .sort((a, b) => b.bytes - a.bytes)
  .slice(0, 15);
const schemaCounts = {};
for (const page of indexable) {
  for (const schema of page.schemas) schemaCounts[schema] = (schemaCounts[schema] ?? 0) + 1;
}

const sitemapFiles = (await readdir(distDir)).filter((file) => /^sitemap.*\.xml$/.test(file));
let sitemapUrls = [];
for (const file of sitemapFiles) {
  const xml = await readFile(path.join(distDir, file), "utf8");
  sitemapUrls.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));
}

console.log(JSON.stringify({
  totalPages: pages.length,
  indexablePages: indexable.length,
  noindexPages: pages.filter((page) => page.noindex).map((page) => page.pathname),
  sitemapFiles,
  sitemapUrlCount: sitemapUrls.length,
  typeSummary: summary,
  thinnest,
  largest,
  schemaCounts,
}, null, 2));
