/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,       // keep your current setting
  output: 'export',           // important → enables static export
  images: {
    unoptimized: true,        // disable Next.js image optimization for Firebase
  },
};

export default nextConfig;