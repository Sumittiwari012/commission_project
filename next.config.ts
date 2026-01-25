/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.sanishtech.com"],
    unoptimized: true // for Netlify
  }
};

module.exports = nextConfig;
