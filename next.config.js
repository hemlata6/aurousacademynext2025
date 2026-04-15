/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable image optimization for better SEO and performance
    unoptimized: false,
    // Enable AVIF format for modern browsers (better compression)
    formats: ['image/avif', 'image/webp'],
    // Remote patterns for API images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Cache optimized images for 365 days
    minimumCacheTTL: 31536000,
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prodapi.classiolabs.com/',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Suppress url.parse deprecation warning from follow-redirects (axios dependency)
      const originalIgnoreWarnings = config.ignoreWarnings || [];
      config.ignoreWarnings = [
        ...originalIgnoreWarnings,
        {
          module: /node_modules\/(follow-redirects|proxy-from-env)/,
          message: /url\.parse\(\)/,
        },
      ];
    }
    return config;
  },
};

module.exports = nextConfig;