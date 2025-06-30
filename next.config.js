/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable tracing to fix EPERM error on Windows
  outputFileTracingExcludes: {
    '*': [
      'node_modules/**',
    ],
  },
  // Prevent favicon.ico route error
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 