const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
  mode: 'development',

  entry: {
    index: './src/index.js', 
    menu: './src/menu.js', 
    contact: './src/contact.js', 
  },

  devtool: 'inline-source-map',
  devServer: { static: './dist', },

  plugins:  [
    new HtmlWebpackPlugin({
      title: "Sid's Diner",
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
        { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ] },
        { test: /\.(jpg|jpeg|png|svg|gif)$/, type: 'asset/resource' },
        { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', },
 
    ]
  },
  optimization: {
    runtimeChunk: 'single',
  },
};