import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Permite testar o site pelo IP local (celular na mesma rede) em dev.
  allowedDevOrigins: ["192.168.1.12"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.mixkit.co" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
