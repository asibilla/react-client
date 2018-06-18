'use strict';

const path = require('path');
const Dotenv = require('dotenv-webpack');
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
      filename: "index_bundle.js",
      path: path.join(__dirname, 'dist')
    },
    target: "web",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
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
      new HtmlWebpackPlugin({
        filename: "./index.html",
        template: path.join(__dirname, 'src', 'app.html')
      }),
      new Dotenv()
    ]
  };
};
