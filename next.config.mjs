/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["coventryloghomes.com", "supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // output: "export",
};

export default nextConfig;
