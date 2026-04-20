/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  // Enable HTTPS redirect and security headers
  async headers() {
    return [
      // Security headers
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Cache static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache public images
      {
        source: '/Images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache SVGs and favicon
      {
        source: '/:path*.(svg|ico|webmanifest)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Global 301 redirects
  async redirects() {
    return [
      // HTTPS redirect is handled at the server/CDN level for better performance
      // These are URL redirects for page structure improvements
      {
        source: '/refundPolicy',
        destination: '/privacyPolicy#refund-policy',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/privacyPolicy#refund-policy',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacyPolicy',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/termConditions',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  
  images: {
    // Enable image optimization for better SEO and performance
    unoptimized: false,
    // Enable AVIF and WebP formats for modern browsers (better compression)
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
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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