import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  env: {
    SC_DISABLE_SPEEDY: 'false',
  },

  images: {
    remotePatterns: [new URL('https://cdn.sanity.io/**')],
    domains: ['cdn.sanity.io'],
  },

  async rewrites() {
    return [
      {
        source: '/studio',
        destination: '/studio/index.html',
      },
      {
        source: '/studio/:path*',
        destination: '/studio/:path*',
      },
    ]
  },
}

export default nextConfig
