/**
 * Audit built HTML for indexability, metadata, headings, image alt text,
 * JSON-LD validity and internal-link coverage. Run after `npm run build`.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const siteOrigin = "https://hydraulicmatch.com";
const htmlFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(fullPath);
    else if (entry.name === "index.html" || entry.name === "404.html") {
      htmlFiles.push(fullPath);
    }
  }
}

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function pagePath(file) {
  const relative = path.relative(distDir, file).replaceAll("\\", "/");
  if (relative === "index.html") return "/";
  if (relative === "404.html") return "/404.html";
  return `/${relative.replace(/index\.html$/, "")}`;
}

function internalPath(href) {
  if (!href || href.startsWith("#")) return null;
  if (/^(mailto:|tel:|javascript:)/i.test(href)) return null;
  let pathname;
  if (/^https?:\/\//i.test(href)) {
    try {
      const url = new URL(href);
      if (url.origin !== siteOrigin) return null;
      pathname = url.pathname;
    } catch {
      return null;
    }
  } else if (href.startsWith("/")) {
    pathname = href.split(/[?#]/)[0];
  } else {
    return null;
  }
  if (/\.[a-z0-9]{2,5}$/i.test(pathname) && !pathname.endsWith(".html")) {
    return null;
  }
  if (pathname === "/index.html") return "/";
  return pathname.endsWith("/") || pathname.endsWith(".html")
    ? pathname
    : `${pathname}/`;
}

await walk(distDir);

const pages = [];
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const pathname = pagePath(file);
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim());
  const description = decode(
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.trim(),
  );
  const canonical = decode(
    html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1]?.trim(),
  );
  const noindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  const missingAlt = [...html.matchAll(/<img\b[^>]*>/gi)].filter(
    ([tag]) => !/\salt="[^"]*"/i.test(tag),
  ).length;
  const hrefs = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)]
    .map((match) => internalPath(match[1]))
    .filter(Boolean);
  const jsonLdErrors = [];
  for (const [index, match] of [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].entries()) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      jsonLdErrors.push(`block ${index + 1}: ${error.message}`);
    }
  }
  pages.push({
    file,
    pathname,
    title,
    description,
    canonical,
    noindex,
    h1Count,
    missingAlt,
    hrefs,
    jsonLdErrors,
  });
}

const sitemapFiles = (await readdir(distDir)).filter((file) =>
  /^sitemap.*\.xml$/i.test(file),
);
const sitemapXml = (
  await Promise.all(
    sitemapFiles.map((file) => readFile(path.join(distDir, file), "utf8")),
  )
).join("\n");

const paths = new Set(pages.map((page) => page.pathname));
const inbound = new Map([...paths].map((pathname) => [pathname, new Set()]));
for (const page of pages) {
  for (const href of page.hrefs) {
    if (paths.has(href) && href !== page.pathname)
      inbound.get(href).add(page.pathname);
  }
}

const errors = [];
const warnings = [];
const titleGroups = Map.groupBy(
  pages.filter((page) => page.title && !page.noindex),
  (page) => page.title.toLowerCase(),
);
const descriptionGroups = Map.groupBy(
  pages.filter((page) => page.description && !page.noindex),
  (page) => page.description.toLowerCase(),
);

for (const page of pages) {
  if (page.pathname === "/404.html") continue;
  if (!page.title) errors.push(`${page.pathname}: missing title`);
  if (!page.description)
    errors.push(`${page.pathname}: missing meta description`);
  if (!page.canonical) errors.push(`${page.pathname}: missing canonical`);
  else {
    const expected = `${siteOrigin}${page.pathname}`;
    if (page.canonical !== expected) {
      errors.push(
        `${page.pathname}: canonical is ${page.canonical}, expected ${expected}`,
      );
    }
  }
  if (page.h1Count !== 1)
    errors.push(`${page.pathname}: H1 count is ${page.h1Count}`);
  if (page.missingAlt) {
    errors.push(`${page.pathname}: ${page.missingAlt} image(s) missing alt`);
  }
  for (const issue of page.jsonLdErrors) {
    errors.push(`${page.pathname}: invalid JSON-LD ${issue}`);
  }
  if (
    !page.noindex &&
    page.pathname !== "/" &&
    inbound.get(page.pathname).size === 0
  ) {
    errors.push(`${page.pathname}: indexable orphan page`);
  }
  if (page.noindex && sitemapXml.includes(`${siteOrigin}${page.pathname}`)) {
    errors.push(`${page.pathname}: noindex URL is present in the sitemap`);
  }
  if (!page.noindex && page.title.length > 65) {
    warnings.push(`${page.pathname}: title length ${page.title.length}`);
  }
  if (
    !page.noindex &&
    (page.description.length < 90 || page.description.length > 170)
  ) {
    warnings.push(
      `${page.pathname}: description length ${page.description.length}`,
    );
  }
}

for (const group of titleGroups.values()) {
  if (group.length > 1) {
    errors.push(
      `duplicate title: ${group.map((page) => page.pathname).join(", ")}`,
    );
  }
}
for (const group of descriptionGroups.values()) {
  if (group.length > 1) {
    errors.push(
      `duplicate description: ${group.map((page) => page.pathname).join(", ")}`,
    );
  }
}

console.log(
  `SEO audit: ${pages.length} pages, ${errors.length} error(s), ${warnings.length} warning(s).`,
);
for (const error of errors) console.error(`ERROR ${error}`);
for (const warning of warnings) console.warn(`WARN  ${warning}`);
if (errors.length) process.exit(1);
