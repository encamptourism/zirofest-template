/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['img.icons8.com','encampadventures.com','cachex.mounty.co','i.picsum.photos','encamp-media-files.s3.ap-south-1.amazonaws.com'],
  },
}

module.exports = nextConfig
