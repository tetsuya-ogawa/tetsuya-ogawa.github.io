const path = require('path')

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {url: false}
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname)
  }
};
