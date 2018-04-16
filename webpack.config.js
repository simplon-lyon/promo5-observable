module.exports = {
    entry: './src/scripts/index.ts',
    mode: 'development',
    module: {
        rules: [
          { test: /\.ts$/, use: 'ts-loader' }
        ]
      }
}