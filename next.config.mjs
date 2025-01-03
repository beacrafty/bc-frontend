/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PROD_URL: "https://backend.beacrafty.com/api",
    baseURL: "https://backend.beacrafty.com", // This represents the base URL for running our frontend project.
    URL: "https://backend.beacrafty.com/api", // Change only the domain part, keeping "/api" intact
    storageURL: "", // Change only the laravel primary domain
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "https",
        hostname: "backend.beacrafty.com"
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;