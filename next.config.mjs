/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export",
    // //THIS IS TO CONFIG hostname "images.unsplash.com" is not configured PROBLEM
    // images:{
    //     domains:['images.unsplash.com']
    // }
    exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact':{page:'/contact'}
      // Add custom routes here
    };
  },
  export: true
};

export default nextConfig;
