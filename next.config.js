/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itbook.store",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
