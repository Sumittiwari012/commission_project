/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.sanishtech.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig