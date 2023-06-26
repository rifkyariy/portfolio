/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
