type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | null {
  return typeof window.gtag === 'function' ? window.gtag : null;
}

function track(event: string, params: Record<string, unknown>): void {
  const fn = gtag();
  if (fn) fn('event', event, params);
}

/**
 * Site-wide outbound / contact-intent click tracking.
 * Captures email, phone, WhatsApp, file download and RFQ form interactions.
 */
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null;
  const link = target?.closest('a');
  if (!link) return;

  const href = link.getAttribute('href') ?? '';
  const path = window.location.pathname;

  if (href.startsWith('mailto:')) {
    track('click_email', {
      event_category: 'RFQ',
      event_label: path,
      destination: href.replace('mailto:', '').split('?')[0],
    });
    return;
  }

  if (href.startsWith('tel:')) {
    track('click_phone', {
      event_category: 'RFQ',
      event_label: path,
      destination: href.replace('tel:', ''),
    });
    return;
  }

  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
    if (link.id === 'whatsapp-button') return;
    track('click_whatsapp', {
      event_category: 'RFQ',
      event_label: path,
      whatsapp_source: 'content_link',
    });
    return;
  }

  // Track file downloads
  const downloadExtensions = [
    '.pdf', '.xlsx', '.xls', '.doc', '.docx', '.csv', '.zip',
  ];
  if (downloadExtensions.some((ext) => href.toLowerCase().endsWith(ext))) {
    track('file_download', {
      event_category: 'engagement',
      event_label: path,
      file_url: href,
    });
  }

  // Track RFQ form opens (modal triggers)
  if (
    link.hasAttribute('data-rfq-modal') ||
    link.getAttribute('href')?.includes('request-a-quote')
  ) {
    track('rfq_form_open', {
      event_category: 'RFQ',
      event_label: path,
      source: link.getAttribute('data-rfq-modal') ?? 'link',
    });
  }
});

/**
 * Scroll depth tracking for content pages (resources, blog, case studies).
 * Fires milestone events at 25%, 50%, 75%, and 100% of the article content.
 */
(function trackScrollDepth() {
  const path = window.location.pathname;
  const isContentPage =
    path.startsWith('/resources/') ||
    path.startsWith('/case-studies/') ||
    path.startsWith('/models/') ||
    path.startsWith('/industries/');
  if (!isContentPage) return;

  const milestones = new Set<number>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const ratio = Math.round(entry.intersectionRatio * 100);
        const milestone =
          ratio >= 90 ? 100 : ratio >= 70 ? 75 : ratio >= 45 ? 50 : ratio >= 20 ? 25 : 0;
        if (milestone > 0 && !milestones.has(milestone)) {
          milestones.add(milestone);
          track('content_scroll_depth', {
            event_category: 'engagement',
            event_label: path,
            scroll_percent: milestone,
          });
        }
      }
    },
    { threshold: [0.25, 0.5, 0.75, 0.9] },
  );

  // Observe the main article content area
  const content = document.querySelector('.resource-page, .blog-details-content-block, article');
  if (content) observer.observe(content);
})();

/**
 * Search tracking for the /search/ page.
 */
(function trackSearch() {
  const path = window.location.pathname;
  if (path !== '/search/' && !path.startsWith('/search')) return;
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q')?.trim();
  if (query) {
    track('search', {
      event_category: 'engagement',
      search_term: query,
    });
  }
})();
