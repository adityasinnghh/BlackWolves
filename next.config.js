/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: '/BlackWolves.', // 👈 your GitHub repo name
  assetPrefix: '/BlackWolves./',
};

export default nextConfig;
