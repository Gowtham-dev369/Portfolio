/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'gowtz.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/project/**'
       },
    ],
  },

};

export default nextConfig;
