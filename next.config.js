/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  
}