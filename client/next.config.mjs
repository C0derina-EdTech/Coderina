/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "vwebagency.onrender.com",
      "res.cloudinary.com",
      "cdn.sanity.io",
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Fix case sensitivity issues on Windows
    config.resolve.symlinks = false;
    
    // Ignore case sensitivity warnings
    config.infrastructureLogging = {
      level: 'error',
    };
    
    // Set case sensitivity to false for Windows compatibility
    if (config.resolve.plugins) {
      config.resolve.plugins = config.resolve.plugins.filter(
        plugin => plugin.constructor.name !== 'CaseSensitivePathsPlugin'
      );
    }
    
    return config;
  },
};
export default nextConfig;
