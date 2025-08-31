/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'Crypto'; // замените на имя вашего репозитория

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProduction ? `/${repoName}/` : '',
  basePath: isProduction ? `/${repoName}` : '',
}

module.exports = nextConfig