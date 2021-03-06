/** @type {import('next').NextConfig} */
const securityHeaders = [{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
}, {
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
}, {
  key: 'X-XSS-Protection',
  value: '1; mode=block'
}, {
  key: 'X-Frame-Options',
  value: 'SAMEORIGIN'
}, {
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
}, {
  key: 'X-Content-Type-Options',
  value: 'nosniff'
}, {
  key: 'Referrer-Policy',
  value: 'origin-when-cross-origin'
}];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      }
    ]
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
