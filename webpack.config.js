var webpack     = require('webpack');
var path        = require('path');
var nodeModules = require('webpack-node-externals')();

module.exports = {
	entry: './src/app.js',
  target: 'node',
	output: {
		path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  externals: nodeModules,
	resolve: {
		modulesDirectories: ['node_modules', './src']
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['latest']
        }
      }
    ]
  }
}
