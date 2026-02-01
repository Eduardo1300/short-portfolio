/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:locale/fonts/:path*',
          destination: '/fonts/:path*',
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
