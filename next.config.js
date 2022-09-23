/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : { domains: ["www.didogram.com" , "fs.noorgram.ir"] },
}

module.exports = nextConfig
