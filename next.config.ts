import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['thepostpartumot.com'],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 828, 1200, 1920],
    formats: ["image/webp"],
  },
  async headers() {
    return [
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
