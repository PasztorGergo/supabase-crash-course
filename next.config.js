/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SUPABASE_SECRET: process.env.SUPABASE_SECRET,
    SUPABASE_PUBLIC: process.env.SUPABASE_PUBLIC,
    API_URL: process.env.API_URL,
    REVALIDATE: process.env.REVALIDATE,
  },
  images: { domains: ["pbs.twimg.com"] },
};

module.exports = nextConfig;
