/**
 * Structured data. Only confirmed facts go here: Melissa's OTR/L is the one
 * credential confirmed in the family-first plan (Nov 22, 2026). Years of
 * experience, community size, CDRAC, CBS, PCES and the Ability Village role stay
 * out until Melissa confirms them.
 */

export const BASE_URL = "https://thepostpartumot.com";

export const PODCAST = {
  name: "Functional Fourth Trimester",
  feed: "https://api.riverside.com/hosting/bAWbeIns.rss",
  apple: "https://podcasts.apple.com/us/podcast/functional-fourth-trimester/id1881077069",
  spotify: "https://open.spotify.com/show/0yuF6uerJGVWdhgysa7Ug3",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "The Postpartum OT",
    legalName: "Postpartum OT LLC",
    url: BASE_URL,
    founder: { "@id": `${BASE_URL}/#melissa-oneal` },
    description:
      "Postpartum support for new moms and dads from an occupational therapist: sleep, feeding, recovery, routines and daily life after a baby.",
    email: "hello@thepostpartumot.com",
    areaServed: "US",
    sameAs: [PODCAST.apple, PODCAST.spotify],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#melissa-oneal`,
    name: "Melissa O'Neal",
    honorificSuffix: "OTR/L",
    jobTitle: "Occupational Therapist",
    knowsAbout: [
      "Postpartum support",
      "Occupational therapy",
      "Fourth trimester",
      "Newborn daily routines",
      "Infant sleep",
      "Feeding routines",
    ],
    worksFor: { "@id": `${BASE_URL}/#organization` },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "The Postpartum OT",
    url: BASE_URL,
    inLanguage: "en-US",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

export function podcastSeriesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": `${BASE_URL}/#podcast`,
    name: PODCAST.name,
    url: `${BASE_URL}/podcast`,
    webFeed: PODCAST.feed,
    description:
      "Honest conversations about life after a baby, with occupational therapist Melissa O'Neal, OTR/L, and guests.",
    author: { "@id": `${BASE_URL}/#melissa-oneal` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    sameAs: [PODCAST.apple, PODCAST.spotify],
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

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: opts.url,
    author: { "@id": `${BASE_URL}/#melissa-oneal` },
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}
