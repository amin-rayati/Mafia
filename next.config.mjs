/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // این گزینه باید فعال بشه برای استفاده از پوشه app
  },
};

export default nextConfig;
