import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '**', // هذا يعني السماح بجميع المسارات
      },
    ],
  },
};

export default nextConfig;
