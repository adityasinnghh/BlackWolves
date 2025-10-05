/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: '/BlackWolves.', // 👈 your GitHub repo name
  assetPrefix: '/BlackWolves./',
};

export default nextConfig;
=======
  output: 'export',        // ✅ Export static HTML (for GitHub Pages)
  images: {
    unoptimized: true,     // ✅ Disable Next.js image optimization
  },
  basePath: '/WearwolvesCorp.',  // ✅ Repo name (must match GitHub repo exactly)
  assetPrefix: '/WearwolvesCorp.', // ✅ Ensures assets load correctly
};

module.exports = nextConfig;
>>>>>>> 3ff61cbf619b55e18c475e1848c55c92c2b13a3c
