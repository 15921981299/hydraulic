import { sortedPosts } from "../data/blog-posts";
import { site } from "../data/site";

export const prerender = true;

export async function GET() {
  const items = sortedPosts
    .filter((post) => !post.excludeFromIndex)
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${site.url}/resources/blog/${post.slug}/</link>
      <guid isPermaLink="true">${site.url}/resources/blog/${post.slug}/</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.published).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hydraulic Match — Sourcing &amp; Technical Blog</title>
    <link>${site.url}/resources/blog/</link>
    <description>Technical articles, sourcing guides and comparison resources for hydraulic component buyers — covering model-code identification, cross-referencing, supplier screening and pre-shipment inspection.</description>
    <language>en</language>
    <lastBuildDate>${new Date(sortedPosts[0]?.published ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
