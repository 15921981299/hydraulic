export const site = {
  name: "Hydraulic Match",
  company: {
    legalName: "Hydraulic Match",
    legalNameEn: "Hydraulic Match",
    /**
     * Verified contracting identity. Leave fields empty until they can be
     * supported by current company documents. Empty values are never rendered
     * as public company proof or emitted in Organization schema.
     */
    verifiedLegalName:
      (typeof import.meta.env.PUBLIC_LEGAL_ENTITY_NAME === "string" &&
        import.meta.env.PUBLIC_LEGAL_ENTITY_NAME.trim()) ||
      "",
    registrationNumber:
      (typeof import.meta.env.PUBLIC_COMPANY_REGISTRATION_NUMBER === "string" &&
        import.meta.env.PUBLIC_COMPANY_REGISTRATION_NUMBER.trim()) ||
      "",
    streetAddress:
      (typeof import.meta.env.PUBLIC_COMPANY_STREET_ADDRESS === "string" &&
        import.meta.env.PUBLIC_COMPANY_STREET_ADDRESS.trim()) ||
      "",
    addressLocality:
      (typeof import.meta.env.PUBLIC_COMPANY_CITY === "string" &&
        import.meta.env.PUBLIC_COMPANY_CITY.trim()) ||
      "",
    addressRegion:
      (typeof import.meta.env.PUBLIC_COMPANY_REGION === "string" &&
        import.meta.env.PUBLIC_COMPANY_REGION.trim()) ||
      "",
    postalCode:
      (typeof import.meta.env.PUBLIC_COMPANY_POSTAL_CODE === "string" &&
        import.meta.env.PUBLIC_COMPANY_POSTAL_CODE.trim()) ||
      "",
    addressCountry:
      (typeof import.meta.env.PUBLIC_COMPANY_COUNTRY_CODE === "string" &&
        import.meta.env.PUBLIC_COMPANY_COUNTRY_CODE.trim()) ||
      "CN",
  },
  url: "https://hydraulicmatch.com",
  email: "sales@hydraulicmatch.com",
  phone: "+8615921981299",
  whatsapp: "+8615921981299",
  tagline: "Chinese Hydraulic Alternatives, Matched to Your Application",
  logo: {
    default: "/hydraulic-match-logo.svg",
    compact: "/hydraulic-match-logo.svg",
    icon: "/favicon.svg",
    width: 516,
    height: 96,
  },
  /** Set your GA4 Measurement ID (e.g. G-XXXXXXXX) to enable analytics. Leave empty to disable. */
  gaMeasurementId:
    (typeof import.meta.env.PUBLIC_GA_MEASUREMENT_ID === "string" &&
      import.meta.env.PUBLIC_GA_MEASUREMENT_ID.trim()) ||
    "",
  /** Paste the content value from Google Search Console HTML verification. Leave empty to skip. */
  googleSiteVerification:
    (typeof import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION === "string" &&
      import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION.trim()) ||
    "",
  /** Google Tag Manager container ID (e.g. GTM-XXXXXXX). Leave empty to disable GTM. */
  gtmContainerId:
    (typeof import.meta.env.PUBLIC_GTM_CONTAINER_ID === "string" &&
      import.meta.env.PUBLIC_GTM_CONTAINER_ID.trim()) ||
    "",
  /** Public Turnstile site key. The matching secret stays in Worker secrets. */
  turnstileSiteKey:
    (typeof import.meta.env.PUBLIC_TURNSTILE_SITE_KEY === "string" &&
      import.meta.env.PUBLIC_TURNSTILE_SITE_KEY.trim()) ||
    "",
  social: {
    /** Company LinkedIn — set here or via PUBLIC_LINKEDIN_URL in .env. */
    linkedin:
      (typeof import.meta.env.PUBLIC_LINKEDIN_URL === "string" &&
        import.meta.env.PUBLIC_LINKEDIN_URL.trim()) ||
      "",
    /** Optional company video. */
    youtube: "",
  },
  /** Author external profiles — fill URLs when live; used in Person schema sameAs. */
  authorSocial: {
    weiChenLinkedIn:
      (typeof import.meta.env.PUBLIC_AUTHOR_WEI_CHEN_LINKEDIN === "string" &&
        import.meta.env.PUBLIC_AUTHOR_WEI_CHEN_LINKEDIN.trim()) ||
      "",
    lisaHuangLinkedIn:
      (typeof import.meta.env.PUBLIC_AUTHOR_LISA_HUANG_LINKEDIN === "string" &&
        import.meta.env.PUBLIC_AUTHOR_LISA_HUANG_LINKEDIN.trim()) ||
      "",
  },
  /** Publish a named reviewer only when the identity and background are verified. */
  technicalReviewer: {
    name:
      (typeof import.meta.env.PUBLIC_TECHNICAL_REVIEWER_NAME === "string" &&
        import.meta.env.PUBLIC_TECHNICAL_REVIEWER_NAME.trim()) ||
      "",
    jobTitle:
      (typeof import.meta.env.PUBLIC_TECHNICAL_REVIEWER_JOB_TITLE ===
        "string" &&
        import.meta.env.PUBLIC_TECHNICAL_REVIEWER_JOB_TITLE.trim()) ||
      "",
    background:
      (typeof import.meta.env.PUBLIC_TECHNICAL_REVIEWER_BACKGROUND ===
        "string" &&
        import.meta.env.PUBLIC_TECHNICAL_REVIEWER_BACKGROUND.trim()) ||
      "",
    linkedin:
      (typeof import.meta.env.PUBLIC_TECHNICAL_REVIEWER_LINKEDIN === "string" &&
        import.meta.env.PUBLIC_TECHNICAL_REVIEWER_LINKEDIN.trim()) ||
      "",
  },
  /**
   * Quality claims shown on site — keep wording accurate.
   * Set iso9001CertNumber / iso9001CertBody when you hold a direct certificate;
   * otherwise we state partner-facility ISO 9001 (default).
   */
  quality: {
    iso9001Label: "Reviewed Supplier Facilities",
    iso9001Description:
      "Hydraulic components are sourced through reviewed suppliers. We document model-code checks, supplier communication, packing requirements, and shipment details for qualified inquiries.",
    iso9001CertNumber: "",
    iso9001CertBody: "",
    /** Shown on certifications when no direct cert number is on file. */
    iso9001VerificationNote:
      "Available supplier documents and inspection notes can be requested for qualified hydraulic component inquiries.",
    /** Industry workflows we support. */
    industryPrograms: [
      {
        label: "Industrial machinery",
        href: "/industries/industrial-machinery/",
      },
      {
        label: "Construction equipment",
        href: "/industries/construction-equipment/",
      },
      { label: "Metal forming", href: "/industries/metal-forming/" },
      { label: "Plastics machinery", href: "/industries/plastics-machinery/" },
    ],
    /** Optional YouTube tour (fills VideoObject on proof pages). */
    inspectionMedia: {
      /** YouTube video ID only (not full URL). Leave empty to hide embed. */
      youtubeVideoId: "",
    },
  },
  defaultDescription:
    "Model-code review, parameter comparison and export sourcing for hydraulic valves, pumps and cylinders from China.",
};

const organizationLogoUrl = `${site.url}${site.logo.default}`;
const verifiedOrganizationName =
  site.company.verifiedLegalName || site.company.legalNameEn;
const verifiedAddress = site.company.streetAddress
  ? {
      "@type": "PostalAddress",
      streetAddress: site.company.streetAddress,
      addressLocality: site.company.addressLocality || undefined,
      addressRegion: site.company.addressRegion || undefined,
      postalCode: site.company.postalCode || undefined,
      addressCountry: site.company.addressCountry,
    }
  : undefined;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: verifiedOrganizationName,
  alternateName: [site.name, site.company.legalName],
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.defaultDescription,
  logo: organizationLogoUrl,
  areaServed: "Worldwide",
  ...(site.company.registrationNumber
    ? { identifier: site.company.registrationNumber }
    : {}),
  ...(verifiedAddress ? { address: verifiedAddress } : {}),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone,
      areaServed: "Worldwide",
      availableLanguage: ["English", "Chinese"],
    },
  ],
  knowsAbout: [
    "Hydraulic Valves",
    "Hydraulic Pumps",
    "Hydraulic Cylinders",
    "Model-Code Matching",
    "Hydraulic Component Cross-Reference",
    "Export Sourcing",
  ],
  // sameAs is populated only with non-empty social URLs to avoid emitting empty links.
  ...(Object.values(site.social).some(Boolean)
    ? { sameAs: Object.values(site.social).filter(Boolean) }
    : {}),
};

/** schema.org Service markup for capability/service detail pages. */
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.image ? { image: service.image } : {}),
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Worldwide",
  };
}

/** schema.org Product markup for quote-based hydraulic component inquiries. */
export function productSchema(product: {
  name: string;
  description: string;
  url: string;
  image: string;
  material?: string;
  sku?: string;
  model?: string;
  brandName?: string;
  manufacturerName?: string;
  category?: string;
  /** Only emit availability when it has been checked for this specific item. */
  availability?: string;
  /** Quote-led pages can omit an Offer until item-level price/availability is confirmed. */
  quoteOnly?: boolean;
}) {
  const description = product.material
    ? `${product.description} Reference groups: ${product.material}.`
    : product.description;
  const sku = product.sku ?? product.model;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description,
    url: product.url,
    image: product.image,
    ...(product.brandName
      ? {
          brand: {
            "@type": "Brand",
            name: product.brandName,
          },
        }
      : {}),
    ...(product.category ? { category: product.category } : {}),
    ...(product.manufacturerName
      ? {
          manufacturer: {
            "@type": "Organization",
            name: product.manufacturerName,
          },
        }
      : {}),
    ...(!product.quoteOnly
      ? {
          offers: {
            "@type": "Offer",
            url: product.url,
            priceCurrency: "USD",
            ...(product.availability
              ? { availability: product.availability }
              : {}),
            itemCondition: "https://schema.org/NewCondition",
            description:
              "Quote based on the complete hydraulic model code, technical parameters, quantity, supplier confirmation, and shipping destination.",
            seller: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
            },
          },
        }
      : {}),
    ...(sku
      ? {
          sku,
          mpn: sku,
          model: product.model ?? sku,
        }
      : {}),
  };
}

/** schema.org FAQPage markup for pages with Q&A sections. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** schema.org AboutPage for the company / E-E-A-T landing page. */
export function aboutPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    mainEntity: {
      "@type": "Organization",
      name: verifiedOrganizationName,
      alternateName: [site.name, site.company.legalName],
      url: site.url,
      email: site.email,
      telephone: site.phone,
      description: site.defaultDescription,
      ...(site.company.registrationNumber
        ? { identifier: site.company.registrationNumber }
        : {}),
      ...(verifiedAddress ? { address: verifiedAddress } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Chinese"],
      },
    },
  };
}

/** schema.org ContactPage for the RFQ / contact landing page. */
export function contactPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    about: {
      "@type": "Organization",
      name: verifiedOrganizationName,
      alternateName: [site.name, site.company.legalName],
      url: site.url,
      email: site.email,
      telephone: site.phone,
      ...(site.company.registrationNumber
        ? { identifier: site.company.registrationNumber }
        : {}),
      ...(verifiedAddress ? { address: verifiedAddress } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: site.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Chinese"],
      },
    },
  };
}

/** schema.org HowTo for inquiry / fulfillment process steps. */
export function howToSchema(howto: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howto.name,
    description: howto.description,
    step: howto.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/** schema.org ItemList for collection pages. */
export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/** schema.org VideoObject for embedded factory / process videos. */
export function videoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    ...(video.contentUrl ? { contentUrl: video.contentUrl } : {}),
    ...(video.embedUrl ? { embedUrl: video.embedUrl } : {}),
    ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: organizationLogoUrl,
      },
    },
  };
}

/** schema.org Article markup for customer case study detail pages. */
export function caseStudySchema(study: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  industry: string;
  authorName: string;
  authorUrl: string;
  authorJobTitle: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    image: study.image,
    datePublished: study.datePublished,
    ...(study.dateModified ? { dateModified: study.dateModified } : {}),
    articleSection: study.industry,
    about: {
      "@type": "Thing",
      name: `${study.industry} hydraulic components`,
    },
    author: {
      "@type": "Person",
      name: study.authorName,
      url: study.authorUrl,
      jobTitle: study.authorJobTitle,
      worksFor: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: organizationLogoUrl,
      },
    },
    mainEntityOfPage: study.url,
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  authorJobTitle?: string;
  authorSameAs?: string[];
  authorType?: "Person" | "Organization";
}) {
  const authorType = article.authorType ?? "Organization";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    ...(article.datePublished ? { datePublished: article.datePublished } : {}),
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
    author: {
      "@type": authorType,
      name: article.authorName,
      ...(article.authorUrl ? { url: article.authorUrl } : {}),
      ...(authorType === "Person" && article.authorJobTitle
        ? { jobTitle: article.authorJobTitle }
        : {}),
      ...(article.authorSameAs?.length ? { sameAs: article.authorSameAs } : {}),
      ...(authorType === "Person"
        ? {
            worksFor: {
              "@type": "Organization",
              name: site.name,
              url: site.url,
            },
          }
        : {}),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: organizationLogoUrl,
      },
    },
    mainEntityOfPage: article.url,
  };
}

export function personProfileSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs?: string[];
  knowsAbout?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: person.name,
    description: person.description,
    url: person.url,
    mainEntity: {
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      description: person.description,
      url: person.url,
      ...(person.sameAs?.length ? { sameAs: person.sameAs } : {}),
      ...(person.knowsAbout?.length ? { knowsAbout: person.knowsAbout } : {}),
      worksFor: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    },
  };
}
