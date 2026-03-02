/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:locale/fonts/:path*',
          destination: '/fonts/:path*',
        },
        {
          source: '/:locale/manifest.json',
          destination: '/manifest.json',
        },
      ],
    };
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig
