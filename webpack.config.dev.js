var webpack = require('webpack');
var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = merge(baseConfig,{
  entry: path.resolve(__dirname,'./index.js'), 
  output: {
     path:path.resolve(__dirname,'./'),
     filename:'[name].[hash].bundle.js',
     publicPath: '/'
  },
  mode: 'development',
  devServer: {
     historyApiFallback: true,
     inline: true,
     port: 7778,
     proxy: {
      '/api': {
          target: 'http://api.douban.com/v2',
          changeOrigin: true,
          secure: false,
          pathRewrite: {'^/api' : ''}
      }
  }
  },
  devtool : 'source-map',
  resolve: {
      extensions: ['.css', '.js', '.jsx'],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
],
optimization: {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        chunks : 'initial',
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  },
  runtimeChunk: {
    "name": "manifest"
  }
}
});