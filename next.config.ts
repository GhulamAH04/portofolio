import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['localhost'], // Untuk development
    // Untuk production tambahkan domain hosting Anda
  },
}