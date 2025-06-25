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
};
export default nextConfig;
