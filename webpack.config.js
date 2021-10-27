'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map', // better debug inspector, important to debug, shows more specif error messages and the file source
  entry: [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:3000',
	'webpack/hot/only-dev-server',
	path.join(__dirname, 'src', 'index')
  ],
   devServer: {
    port: 3000
  },
  output:{
	  path: path.join(__dirname, 'dist'),
	  filename: 'bundle.js',
	  publicPath: '/dist/'
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin()
  ],
  module:{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'babel-loader'
		}]
  }	
}	
