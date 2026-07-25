/** Pathnames excluded from the public sitemap. */
const STATIC_EXCLUDES = new Set([
  '/401/',
  '/404/',
  '/thank-you/',
  '/llm-instructions/',
  '/certifications/',
  '/applications/',
  '/capabilities/',
  '/industries/',
  '/part-products/',
  '/terms/payment/',
  '/terms/samples/',
  '/terms/shipping/',
]);

const EXCLUDED_PREFIXES = ['/applications/', '/capabilities/', '/industries/', '/part-products/'];

export function isSitemapExcluded(pathname: string): boolean {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return STATIC_EXCLUDES.has(normalized) || EXCLUDED_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

export const sitemapExcludeStats = {
  static: STATIC_EXCLUDES.size,
  excludedPrefixes: EXCLUDED_PREFIXES.length,
  total: STATIC_EXCLUDES.size,
};
