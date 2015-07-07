var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './app.js',
    html: './index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}