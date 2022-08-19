/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /**
   * Add the code below if you are nesting your application under Xcelerator. 
   * For the example below, appliction name is NextTest and nested under Xcelerator on IIS
   */
  /*
  basePath: '/Xcelerator/NextTest',
  images: {
      path: `Xcelerator/NextTest/_next/image`,
    },
  async rewrites() {
      return [
        {
          source: '/Xcelerator/NextTest/',
          destination: '/Xcelerator/NextTest/index'           
        },
      ]
    }*/
}

module.exports = nextConfig
