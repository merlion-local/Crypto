/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'Crypto'; // имя вашего репозитория

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProduction ? `/${repoName}/` : '',
  basePath: isProduction ? `/${repoName}` : '',
  typescript: {
    ignoreBuildErrors: true, // временно для деплоя
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: process.cwd(),
}

module.exports = nextConfig