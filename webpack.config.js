const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  console.log(env)
  return {
    entry: './src/index.js',
    mode: env.mode,
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin(), 
      new webpack.ProgressPlugin()
    ]
  };
};