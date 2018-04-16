var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.ts',
    mode: 'development',
    module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader' }
        ]
      },
  plugins: [new HtmlWebpackPlugin()]
}