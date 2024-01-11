/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.recept.se",
        port: "", // Leave empty for default HTTPS port
        pathname: "/images/**", // Adjust the path pattern as needed
      },
    ],
  },
};
