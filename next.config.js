const nextConfig = {
  devIndicators: false,
  trailingSlash: true,

  output: "export",   // ✅ REQUIRED for Firebase Hosting

  images: {
    unoptimized: true,
  },
};

export default nextConfig;