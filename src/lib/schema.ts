const BASE_URL = 'https://thepostpartumot.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'The Postpartum OT',
    legalName: 'Postpartum OT LLC',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    founder: {
      '@id': `${BASE_URL}/#melissa-oneal`,
    },
    description:
      'Personal mentorship for occupational therapists building postpartum practices. 10+ years of clinical experience. 600+ OT community.',
    email: 'hello@thepostpartumot.com',
    areaServed: 'US',
    sameAs: [
      'https://www.instagram.com/thepostpartumot',
      'https://www.facebook.com/groups/1967522367025806',
      'https://www.linkedin.com/in/melissaonealot',
      'https://www.youtube.com/@thepostpartumot',
    ],
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#melissa-oneal`,
    name: 'Melissa O\'Neal',
    jobTitle: 'Occupational Therapist and Postpartum Specialist',
    credentials: ['OTR/L', 'PCES'],
    knowsAbout: [
      'Postpartum care',
      'Occupational therapy',
      'Maternal mental health',
      'Infant development',
      'Feeding support',
      'Matrescence',
      'Fourth trimester recovery',
      'Practice building for OTs',
    ],
    sameAs: [
      'https://www.instagram.com/thepostpartumot',
      'https://www.linkedin.com/in/melissaonealot',
    ],
    worksFor: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'The Postpartum OT',
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@id': `${BASE_URL}/#melissa-oneal`,
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    ...(opts.image && { image: opts.image }),
    ...(opts.keywords && { keywords: opts.keywords }),
    author: {
      '@id': `${BASE_URL}/#melissa-oneal`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}

export function podcastSeriesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: 'The Functional Fourth Trimester',
    url: `${BASE_URL}/podcast`,
    description:
      'Weekly conversations about building a postpartum occupational therapy practice.',
    author: {
      '@id': `${BASE_URL}/#melissa-oneal`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };
}
