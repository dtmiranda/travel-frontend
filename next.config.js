/** @type {import('next').NextConfig} */

require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env:{
    API_BASE_URL: process.env.API_BASE_URL,
  },

  images: {
    domains: ["dynamic-media-cdn.tripadvisor.com"],
  },


}

module.exports = nextConfig


