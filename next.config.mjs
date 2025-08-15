const isProd = process.env.NODE_ENV === 'production';
const repo = 'CAFE_PRODUCCIONES';

export default {
  output: 'export',              // genera /out automáticamente
  images: { unoptimized: true }, // evitar optimización en server
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};
