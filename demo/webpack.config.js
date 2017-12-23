/* eslint-env node */
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    default: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
          },
          preLoaders: {
            js: 'eslint-loader',
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?publicPath=/dist/&limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?publicPath=/dist/&limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?publicPath=/dist/&limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  devServer: {
    contentBase: './',
    port: 9001,
    publicPath: '/dist/',
  },
  resolve: {
    alias: {
      'projection-grid-vue': require.resolve('../src/index'),
    },
  },
};
