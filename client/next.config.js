/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzerPlugin = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Base Next.js configuration
const nextConfig = {
  // Configure Turbopack
  turbopack: {},
  // Disable Turbopack for production builds
  experimental: {
    // Disable Turbopack in production
    turbo: process.env.NODE_ENV === 'development' ? {} : false
  },
  // Configure webpack
  webpack: (config, { isServer, dev }) => {
    // Only apply these optimizations in production
    if (!dev) {
      // Disable source maps in production
      if (config.devtool) {
        config.devtool = false;
      }
      
      // Add Terser plugin for better minification
      const TerserPlugin = require('terser-webpack-plugin');
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true, // Remove console.log in production
            },
          },
        }),
      ];
    }
    
    return config;
  },

  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "www.gravatar.com", pathname: "/**" },
      { protocol: "https", hostname: "api.dicebear.com", pathname: "/**" },
      { protocol: "https", hostname: "i.pinimg.com", pathname: "/**" },
      { protocol: "https", hostname: "pinterest.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/**" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Performance optimizations
  webpack: (config, { isServer, dev }) => {
    // Only run these optimizations in production
    if (!dev) {
      // Disable source maps in production
      config.devtool = false;
      
      // Add Terser plugin for better minification
      const TerserPlugin = require('terser-webpack-plugin');
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true, // Remove console.log in production
            },
          },
        }),
      ];
    }

    return config;
  },
};

// Security headers configuration
const securityHeaders = [
  // Prevents clickjacking attacks
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Enables XSS protection in browsers that support it
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Prevents MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controls referrer information in HTTP headers
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Content Security Policy (CSP) - customize based on your needs
  // {
  //   key: 'Content-Security-Policy',
  //   value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;"
  // }
];

// Add bundle analyzer in development
const config = withBundleAnalyzerPlugin(nextConfig);

export default config;
