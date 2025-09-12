/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/thormars/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "@emotion/react",
      "framer-motion",
    ],
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
