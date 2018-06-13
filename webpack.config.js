'use strict';

const path = require('path');
const dotenv = require('dotenv-webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * [exports description]
 * @return {[type]} [description]
 */
module.exports = (env={}) => {

  return {
    mode: 'development',
    entry: [path.join(__dirname, 'src', 'index.js')],
    output: {
      filename: "index.js",
      path: path.join(__dirname, 'dist')
    },
    target: "web",
    module: {
      rules: [
        { test: /\.js?x$/, use: "babel-loader" },
        { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }]
        }
      ]
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        "~" : path.join(__dirname)
      }
    },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      }),
      new HtmlWebpackPlugin()
    ]
  };
};