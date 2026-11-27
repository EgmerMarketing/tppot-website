import { SITE_URL } from "@/lib/site";
import { APPLE_PODCAST_URL, FFT_SITE_URL, FFT_YOUTUBE_URL, SPOTIFY_PODCAST_URL, YOUTUBE_CHANNEL_URL } from "@/lib/podcast";

const BASE_URL = SITE_URL;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "The Postpartum OT",
    legalName: "Postpartum OT LLC",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo-long.png`,
    founder: {
      "@id": `${BASE_URL}/#melissa-oneal`,
    },
    description:
      "Educational postpartum support for moms, dads, and caregivers from Melissa O'Neal, OTR/L. Not medical advice.",
    email: "hello@thepostpartumot.com",
    areaServed: "US",
    sameAs: [YOUTUBE_CHANNEL_URL, "https://www.instagram.com/thepostpartumot/"],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#melissa-oneal`,
    name: "Melissa O'Neal",
    jobTitle: "Occupational Therapist",
    description:
      "Melissa O'Neal is an occupational therapist and the founder of The Postpartum OT. For more than 15 years she has helped parents through the weeks and months after birth. She is a Certified Disability Rights and Accessibility Consultant and Director of the Women's Health and Postpartum Hub on Ability Village.",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional license",
        name: "OTR/L",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certified Disability Rights and Accessibility Consultant",
      },
    ],
    affiliation: {
      "@type": "Organization",
      name: "Ability Village",
      url: "https://abilityvillage.com/",
    },
    knowsAbout: [
      "Postpartum daily routines",
      "Fourth trimester",
      "Infant sleep routines",
      "Feeding routines",
      "Occupational therapy",
    ],
    url: `${BASE_URL}/about`,
    sameAs: [YOUTUBE_CHANNEL_URL, "https://www.instagram.com/thepostpartumot/"],
    worksFor: {
      "@id": `${BASE_URL}/#organization`,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "The Postpartum OT",
    url: BASE_URL,
    description:
      "Postpartum support for new moms and dads from occupational therapist Melissa O'Neal, OTR/L.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
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

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    url: opts.url,
    mainEntityOfPage: opts.url,
    ...(opts.keywords && { keywords: opts.keywords }),
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#melissa-oneal`,
      name: "Melissa O'Neal",
      jobTitle: "Occupational Therapist",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };
}

export function videoObjectSchema(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  url: string;
  publisherName: string;
  publisherUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    embedUrl: opts.embedUrl,
    url: opts.url,
    publisher: {
      "@type": "Organization",
      name: opts.publisherName,
      url: opts.publisherUrl,
    },
  };
}

export function podcastSeriesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Functional Fourth Trimester",
    url: FFT_SITE_URL,
    image: `${BASE_URL}/images/fft/fft-cover-1600.webp`,
    description:
      "Functional Fourth Trimester is the podcast hosted by occupational therapist Melissa O'Neal, OTR/L, helping new parents figure out how daily life actually works after a baby arrives.",
    author: {
      "@id": `${BASE_URL}/#melissa-oneal`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    sameAs: [APPLE_PODCAST_URL, SPOTIFY_PODCAST_URL, FFT_YOUTUBE_URL, `${BASE_URL}/podcast`],
  };
}
