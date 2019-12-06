const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.assign(
        {},
        {
          NODE_ENV: JSON.stringify('production')
        }
      )
    })
  ]
})
