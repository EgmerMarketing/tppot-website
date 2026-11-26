import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/thank-you/', '/reviews'],
    },
    sitemap: 'https://thepostpartumot.com/sitemap.xml',
  };
}
