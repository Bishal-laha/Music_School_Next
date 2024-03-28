/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    //THIS IS TO CONFIG hostname "images.unsplash.com" is not configured PROBLEM
    images:{
        domains:['images.unsplash.com']
    }
};

export default nextConfig;
