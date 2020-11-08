const path = require('path');
const {merge} = require('webpack-merge');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');

const webpackDevConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    hot: true,
    hotOnly: true,
    overlay: {
      errors: true,
    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../template.html'),
      filename: 'index.html',
    }),
  ],
});

module.exports = webpackDevConfig;
