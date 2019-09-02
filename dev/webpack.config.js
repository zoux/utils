const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:  './dev/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/index.html'
    })
  ],
  devServer: {
    open: true,
    port: '10001'
  }
}
