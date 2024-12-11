/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PROD_URL: "http://127.0.0.1:8000/api",
    baseURL: "http://127.0.0.1:8000", // This represents the base URL for running our frontend project.
    URL: "http://127.0.0.1:8000/api", // Change only the domain part, keeping "/api" intact
    storageURL: "http://127.0.0.1:8000", // Change only the laravel primary domain
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
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