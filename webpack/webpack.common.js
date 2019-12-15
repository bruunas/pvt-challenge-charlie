const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const PATHS = require('./paths')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.resolve(PATHS.SRC, 'index.js'),

  output: {
    path: PATHS.OUTPUT,
    filename: 'js/[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather Charlie',
      favicon: path.resolve(PATHS.SRC, 'favicon.ico'),
      template: path.resolve(PATHS.SRC, 'index.html'),
      chunksSortMode: 'none',
      inject: true
    })
  ],

  resolve: {
    modules: [
      'src',
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [PATHS.SRC],
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        include: [PATHS.SRC],
        loader: 'file-loader??name=images/[name]-[hash].[ext]'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
      }
    ]
  }
}
