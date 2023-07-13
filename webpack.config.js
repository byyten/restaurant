const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');

module.exports = {
    
  mode: 'development',
  entry: './src/index.js', 

devtool: 'inline-source-map',
// devServer: { static: './dist', },
plugins: [
    new HtmlWebpackPlugin({
      title: 'get filled up',
    }),
  ],
  output: {
    // filename: '[name].bundle.js',
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  module: {
    rules: [
        { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ] },
        { test: /\.(jpg|jpeg|png|svg|gif)$/, type: 'asset/resource' },
        { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', },
        // { test: /\.(csv|tsv)$/i, use: ['csv-loader'], },
        // { test: /\.xml$/i, use: ['xml-loader'], },
        // { test: /\.toml$/i,  type: 'json',  parser: {  parse: toml.parse,  },  },
        //   { test: /\.yaml$/i,  type: 'json', parser: { parse: yaml.parse, }, },
        //   { test: /\.json5$/i, type: 'json', parser: { parse: json5.parse, }, },
    ]
  },
//   optimization: {
//     runtimeChunk: 'single',
//   },
};