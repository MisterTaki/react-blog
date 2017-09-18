var path = require('path');

module.exports = {
  build: {
    env: {
      NODE_ENV: '"production"',
    },
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
    },
    port: 8080,
    autoOpenBrowser: true,
    proxyTable: {
      // '/api': {
      //   target: 'http://127.0.0.1:3000',
      //   changeOrigin: true,
      // },
    },
  },
}
