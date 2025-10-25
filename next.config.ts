import { NextConfig } from 'next';

<<<<<<< HEAD
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL
  }
=======
const config: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Custom environment variables
  },
>>>>>>> 1ab5b9e33957497c30b251b5aec6c53f8b05942e
};

export default config;

