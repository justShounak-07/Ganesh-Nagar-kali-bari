import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Disable image optimization for static export since we use raw URLs or optimized external assets
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
