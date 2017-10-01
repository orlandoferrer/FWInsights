const path = require('path');

module.exports = {
  context: __dirname,
  entry: './scripts/components/next-gen-dining.jsx',
  output: {
    filename: './scripts/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};
