import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["mjmade.tech"],
  },
};

module.exports = {
  productionBrowserSourceMaps: false,
};

export default nextConfig;
