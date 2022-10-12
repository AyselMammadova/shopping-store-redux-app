/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: [
      'https://ayselmammadova.github.io/shopping-store-redux-app/',
    ],
  },
  basePath: "/shopping-store-redux-app/",
  assetPrefix: "/shopping-store-redux-app/"
}

module.exports = nextConfig
