/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ✅ Export static HTML (for GitHub Pages)
  images: {
    unoptimized: true,     // ✅ Disable Next.js image optimization
  },
  basePath: '/WearwolvesCorp.',  // ✅ Repo name (must match GitHub repo exactly)
  assetPrefix: '/WearwolvesCorp.', // ✅ Ensures assets load correctly
};

module.exports = nextConfig;
