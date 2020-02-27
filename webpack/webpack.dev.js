const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: '/minutes/',
    port: 2712,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0'
  },
});