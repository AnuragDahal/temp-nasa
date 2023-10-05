/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
      "github-profile-summary-cards.vercel.app",
    ],
  },
};

module.exports = nextConfig;
