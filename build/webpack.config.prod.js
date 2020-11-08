const path = require('path');
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

const webpackProdConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].thunk.[contenthash:8].js',
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../template.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
});

module.exports = webpackProdConfig;
