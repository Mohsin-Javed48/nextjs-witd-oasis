/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coventryloghomes.com",
      },
      {
        protocol: "https",
        hostname: "www.glamping.com",
      },
      {
        protocol: "https",
        hostname: "l.icdbcdn.com",
      },
      {
        protocol: "https",
        hostname: "theranchatrockcreek.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co", // For Supabase storage
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // output: "export", // Uncomment if using static export
};

export default nextConfig;
