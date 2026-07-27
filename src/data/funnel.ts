/** Six-stage B2B inquiry funnel mapped to hydraulic component sourcing pages. */
export type FunnelStage =
  | 'awareness'
  | 'comparison'
  | 'selection'
  | 'quote'
  | 'signing'
  | 'service';

export type BlogPostLike = {
  slug: string;
  title: string;
  intent?: 'informational' | 'commercial' | 'transactional';
  tags?: readonly string[];
};

const comparisonSlugPattern = /-vs-|-versus-/;
const selectionSlugPattern = /^(how-to-choose|best-|top-|guide-to-)/;
const selectionTitlePattern = /\b(best|how to choose|top \d+|which .+ (?:for|to choose))\b/i;

export function getPostFunnelStage(post: BlogPostLike): FunnelStage {
  if (comparisonSlugPattern.test(post.slug) || /\bvs\.?\b/i.test(post.title)) {
    return 'comparison';
  }
  if (
    selectionSlugPattern.test(post.slug) ||
    selectionTitlePattern.test(post.title) ||
    post.intent === 'commercial'
  ) {
    return 'selection';
  }
  return 'awareness';
}

export type FunnelCtaConfig = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  primaryEvent: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryEvent?: string;
};

export const funnelCtaByStage: Record<FunnelStage, FunnelCtaConfig> = {
  awareness: {
    title: 'Have a Hydraulic Component to Identify?',
    text: 'Send the original brand, complete model code, nameplate, quantity, and destination for a technical review.',
    primaryLabel: 'Request a Match',
    primaryHref: '/request-a-quote/?source=technical-guide',
    primaryEvent: 'rfq_cta_click',
    secondaryLabel: 'Inquiry Checklist',
    secondaryHref: '/resources/',
    secondaryEvent: 'resource_download',
  },
  comparison: {
    title: 'Need Help Comparing a Hydraulic Option?',
    text: 'We compare function, ratings, voltage, mounting, ports, shaft, rotation, and application details as applicable.',
    primaryLabel: 'Request Technical Review',
    primaryHref: '/request-a-quote/?source=comparison',
    primaryEvent: 'consultation_request',
    secondaryLabel: 'View Alternative Reviews',
    secondaryHref: '/alternatives/',
    secondaryEvent: 'parts_catalog_view',
  },
  selection: {
    title: 'Send a Complete Hydraulic Inquiry',
    text: 'Include the original brand, complete code, technical data, quantity, destination, and required delivery date.',
    primaryLabel: 'Submit Match Request',
    primaryHref: '/request-a-quote/?source=selection',
    primaryEvent: 'selection_consult_request',
    secondaryLabel: 'Browse Products',
    secondaryHref: '/products/',
    secondaryEvent: 'parts_catalog_view',
  },
  quote: {
    title: 'Ready for a Reviewable Quote?',
    text: 'Send the model code, application, quantity, destination, and available files. Open points will be stated in the quotation.',
    primaryLabel: 'Request a Match',
    primaryHref: '/request-a-quote/',
    primaryEvent: 'rfq_cta_click',
  },
  signing: {
    title: 'Ready to Confirm an Order?',
    text: 'Review the proposed model, known differences, inspection scope, commercial terms, and shipping route before approval.',
    primaryLabel: 'Request Order Support',
    primaryHref: '/request-a-quote/?source=order-support',
    primaryEvent: 'sample_request',
    secondaryLabel: 'Payment & Shipping Terms',
    secondaryHref: '/terms/',
    secondaryEvent: 'terms_view',
  },
  service: {
    title: 'Need Documentation Before Shipment?',
    text: 'State the model, inspection points, packing photos, and shipment documents required before the order is placed.',
    primaryLabel: 'Request a Match',
    primaryHref: '/request-a-quote/?source=resource',
    primaryEvent: 'rfq_cta_click',
    secondaryLabel: 'Quality & Verification',
    secondaryHref: '/quality/',
    secondaryEvent: 'certifications_view',
  },
};

/** GA4 event name per funnel stage (page-view tracking). */
export const funnelViewEventByStage: Record<FunnelStage, string> = {
  awareness: 'parts_info_view',
  comparison: 'parts_review_view',
  selection: 'selection_guide_view',
  quote: 'rfq_form_view',
  signing: 'order_support_view',
  service: 'resource_view',
};
