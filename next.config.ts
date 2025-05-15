import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚨 Use with caution!
  },
};

export default nextConfig;
