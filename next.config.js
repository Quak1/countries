/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
