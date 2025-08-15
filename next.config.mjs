// next.config.mjs
const isProd = process.env.NODE_ENV === 'production'
// ¡Debe coincidir EXACTO con el nombre del repo en GitHub!
const repo = 'CAFE_PRODUCCIONES'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // genera /out para GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: { unoptimized: true },    // necesario con next export
  trailingSlash: true,              // evita 404 con Pages
}

export default nextConfig
