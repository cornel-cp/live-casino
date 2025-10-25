import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Custom environment variables
  },
};

export default config;

