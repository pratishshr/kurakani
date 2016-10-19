/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

var webpack = require('webpack');

// Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: '../public/dist',
    publicPath: '../public/dist',
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader', query: {name: 'fonts/[name].[ext]'}},
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
