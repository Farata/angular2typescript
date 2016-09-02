const path               = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'main'  : './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  output: {
    path    : './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}])
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'}
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};