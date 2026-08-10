import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repo lives inside a parent directory that has its own lockfile.
  turbopack: { root: __dirname },
  images: {
    qualities: [70, 75, 85],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
