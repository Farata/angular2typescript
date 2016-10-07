const path = require('path');

// Webpack and its plugins
const CommonsChunkPlugin       = require('webpack/lib/optimize/CommonsChunkPlugin');
const CompressionPlugin        = require('compression-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin        = require('copy-webpack-plugin');
const DedupePlugin             = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin             = require('webpack/lib/DefinePlugin');
const OccurrenceOrderPlugin    = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const UglifyJsPlugin           = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = 'production';
const metadata = {
  env: ENV
};

module.exports = {
  devtool: 'source-map',
  entry: {
    'main'  : './src/main.aot.ts',
    'vendor': './src/vendor.ts'
  },
  module: {
    loaders: [
      {test: /\.css$/,  loader: 'to-string!css', exclude: /node_modules/}, // Inline CSS into components
      {test: /\.css$/,  loader: 'style!css', exclude: /src/}, // Add CSS as style tag to index.html
      {test: /\.html$/, loader: 'html?caseSensitive=true'},
      {test: /\.ts$/,   loaders: [
        {loader: 'ts', query: {compilerOptions: {noEmit: false}}},
        {loader: 'angular2-template'}
      ]}
    ]
  },
  output: {
    path    : './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity}),
    new CompressionPlugin({regExp: /\.css$|\.html$|\.js$|\.map$/}),
    new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}]),
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname, 'src') // location of your src
    ),
    new DefinePlugin({'webpack': {'ENV': JSON.stringify(metadata.env)}}),
    new OccurrenceOrderPlugin(true),
    new UglifyJsPlugin({
      compress: {screw_ie8 : true},
      mangle: {screw_ie8 : true}
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
    // ,mainFields: ["module", "main", "browser"] // may be needed for tree shaking when implemented
  }
};
