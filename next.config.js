const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    disableStaticImages: true,
  },
    
  // your config for other plugins or the general next.js here...
});