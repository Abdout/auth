import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Any additional configuration specific to your project can be added here.
  webpack: (config) => {
    config.resolve.alias["@prisma/client"] = "@prisma/client/index-browser"; // Alias fix for Prisma imports in browser
    return config;
  },
};

export default nextConfig;
