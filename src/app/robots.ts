import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/thank-you/',
        '/reviews',
        '/resources/ot-adhd-postpartum-assessments.pdf',
        '/resources/adhd-postpartum-intake-questionnaire.pdf',
        '/resources/postpartum-care-conversation-starters.pdf',
        '/resources/night-weaning-guide.pdf',
      ],
    },
    sitemap: 'https://thepostpartumot.com/sitemap.xml',
  };
}
