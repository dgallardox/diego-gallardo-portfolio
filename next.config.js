/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://www.google.com',
        permanent: false,
      },
    ]
  }
};

module.exports = nextConfig
