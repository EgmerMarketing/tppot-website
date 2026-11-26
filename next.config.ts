import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/for-professionals", statusCode: 301 },
      { source: "/services/:path*", destination: "/for-professionals", statusCode: 301 },
      { source: "/mom-baby-webinar-replay", destination: "/for-professionals", statusCode: 301 },
      { source: "/mom-baby-webinar-replay/:path*", destination: "/for-professionals", statusCode: 301 },
      { source: "/free-resources", destination: "/resources", statusCode: 301 },
      { source: "/free-resources/:path*", destination: "/resources", statusCode: 301 },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    domains: ['thepostpartumot.com'],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 828, 1200, 1920],
    formats: ["image/webp"],
  },
  async headers() {
    return [
      ...[
        "/resources/ot-adhd-postpartum-assessments.pdf",
        "/resources/adhd-postpartum-intake-questionnaire.pdf",
        "/resources/postpartum-care-conversation-starters.pdf",
        "/resources/night-weaning-guide.pdf",
      ].map((source) => ({
        source,
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      })),
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
