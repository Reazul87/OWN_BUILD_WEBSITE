/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // correct hostname
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true, // if you ever use SVGs
  },
};

export default nextConfig;
