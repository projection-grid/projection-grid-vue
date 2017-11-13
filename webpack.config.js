var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.vue',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'VueProjectionGrid',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  }
}
