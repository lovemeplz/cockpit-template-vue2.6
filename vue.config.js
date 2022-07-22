const path = require('path')
const isProd = process.env.VUE_APP_ENV === 'production'
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
  },
  devServer: {
  }
}