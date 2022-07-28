/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  async headers() {
    return [
      {
        source: '/fund',
        headers: [
          {
            key: 'Cache-Control',
            value:'public, s-maxage=10, stale-while-revalidate=59',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
