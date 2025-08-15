const isProd = process.env.NODE_ENV === 'production'
const repo = 'CAFE_PRODUCCIONES'
export default {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  images: { unoptimized: true },
  trailingSlash: true,
}
