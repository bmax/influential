var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
      new webpack.NoEmitOnErrorsPlugin()
  ],
  stats: {
      colors: true
  },
  devtool: 'source-map',
  devServer: { contentBase: path.join(__dirname, "dist"), inline: true }
};