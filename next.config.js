/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      // Add a new entry here
      {
        protocol: "https",
        hostname: "prod-image-cdn.tensor.trade", // Replace this with your desired hostname
      },
      {
        protocol: "https",
        hostname: "shdw-drive.genesysgo.net", // Replace this with your desired hostname
      },
    ],
  },
};

module.exports = nextConfig;
