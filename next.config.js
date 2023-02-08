/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "pluralpost.com"],
  },
};
module.exports = nextConfig;
