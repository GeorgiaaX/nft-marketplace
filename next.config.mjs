/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gateway.pinata.cloud'], // Allow images from Pinata's IPFS gateway
  },
};

export default nextConfig;