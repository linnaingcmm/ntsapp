/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  optimizeFonts: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
