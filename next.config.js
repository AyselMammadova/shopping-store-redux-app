/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/shopping-store-redux-app",
    domains: ["https://ayselmammadova.github.io/shopping-store-redux-app"]
  },
  basePath: "/shopping-store-redux-app",
  assetPrefix: "/shopping-store-redux-app"
}

module.exports = nextConfig
