/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/shopping-store-redux-app",
  assetPrefix: "/shopping-store-redux-app"
}

module.exports = nextConfig
