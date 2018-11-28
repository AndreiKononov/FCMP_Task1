const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //context: path.resolve(__dirname, 'src/js'),
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  //watch: true,
  //devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   //filename: './index.html'
    // })
    new HtmlWebpackPlugin()
  ]
};