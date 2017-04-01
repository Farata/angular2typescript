const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve('./dist'), 
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: '.'
  }
};
