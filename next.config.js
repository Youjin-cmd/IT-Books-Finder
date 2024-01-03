/** @type {import("next").NextConfig} */
const nextConfig = {
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
  async rewrites() {
    return [
      {
        source: "/search/:path*",
        destination: "https://api.itbook.store/1.0/search/:path*",
      },
      {
        source: "/books/:path*",
        destination: "https://api.itbook.store/1.0/books/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
