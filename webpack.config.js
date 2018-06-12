var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, '/dist');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif|woff|eot|ttf|woff2)$/, loader: ['file-loader']}
    ]
  },
  resolve: {
    extensions: ['*','.js','.jsx']
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