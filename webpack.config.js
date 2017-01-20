var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		main: [
			'webpack/hot/dev-server',
			'webpack-hot-middleware/client',
			'./src/main.js'
		]
	},
	output: {
		path: __dirname + '/public/js',
		filename: '[name].js',
		publicPath: '/js'
	},
	devtool: 'source-map',
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				"window.jQuery": 'jquery',
			})
		],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel', 'webpack-module-hot-accept'],
				exclude: /node_modules/
			}
		]
	}
};