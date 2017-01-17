const path = require('path');

module.exports = {
  entry:
  ['./src/index'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/javascripts')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: path.join(__dirname, 'src')
      }]
  }
};
