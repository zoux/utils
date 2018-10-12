const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './examples/index.js',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    open: true
  }
}
