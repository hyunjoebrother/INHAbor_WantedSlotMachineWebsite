/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

moduel.exports = {
  images: {
    loader: "akamai",
    path: "/",
  },
};
