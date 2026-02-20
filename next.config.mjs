/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },

  basePath: "/Neha_Beauty_Parlour",
  assetPrefix: "/Neha_Beauty_Parlour/",
};

export default nextConfig;
