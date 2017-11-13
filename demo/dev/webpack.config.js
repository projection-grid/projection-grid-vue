var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
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
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:  [/node_modules/, /dist/],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: './',
    port: 9000,
    publicPath: '/dist/',
  },
};
