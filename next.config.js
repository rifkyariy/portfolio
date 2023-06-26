/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  basePath: 'https://rifkyariy.github.io/portfolio/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
