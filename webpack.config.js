var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './js/main.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        },
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};