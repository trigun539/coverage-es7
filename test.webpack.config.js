var webpack     = require('webpack');
var path        = require('path');
var nodeModules = require('webpack-node-externals')();

module.exports = {
  target: 'node',
  externals: nodeModules,
	resolve: {
		modulesDirectories: ['node_modules', './src']
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
}
