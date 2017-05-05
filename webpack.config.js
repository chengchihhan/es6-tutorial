const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        },
        exclude: /node_modules/,
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.join(__dirname, '/'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
};
