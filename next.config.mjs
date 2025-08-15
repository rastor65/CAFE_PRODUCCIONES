const isProd = process.env.NODE_ENV === 'production'
const repo = 'CAFE_PRODUCCIONES'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  images: {
    unoptimized: true, // necesario con next export
  },
  trailingSlash: true,
}

export default nextConfig
