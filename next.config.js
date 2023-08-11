/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "pluralpost.com"],
  },
  compiler: {
    removeConsole: false,
  },
};
module.exports = nextConfig;
