/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
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