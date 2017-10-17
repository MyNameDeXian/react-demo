const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [ path.join(__dirname, '../src/index.js') ],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundle.js',
	},
	resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            Container: path.join(__dirname, '../src/Container')
        },
        extensions:['.js']
    },
	module: {
		rules:[
		{
			test: /\.js$/,
			use:['babel-loader?cacheDirectory=true'],
			exclude:/node_modules/,
		},
		{
			test: /\.css$/,
			exclude:/node_modules/,
			use: [{
				loader: 'style-loader'
			},{
				loader: 'css-loader',
				options: {
					modules: true
				}
			}]
		},
		{
			test: /\.scss$/,
			use: [{
				loader: 'style-loader'
			},{
				loader: 'css-loader'
			},{
				loader: 'sass-loader'
			}]
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../index.html'),
			title: 'react-demo'
	    }),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.join(__dirname, "../dist"),
		hot: true
	}
}