/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Load environment variables (ensure these are added securely)
        MONGO_URI: process.env.MONGO_URI,
    },
};

export default nextConfig;
