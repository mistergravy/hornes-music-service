var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      // {
      //   exclude: /node_modules/
      // },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif|woff|eot|ttf|woff2)$/, use: ['file-loader']}
    ]
  },
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
     hot: true
  }
};