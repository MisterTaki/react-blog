var path = require('path');
var config = require('./config');

var entryDir = path.join(__dirname, '..', 'src');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: config.build.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': entryDir,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [entryDir],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [entryDir],
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join(config.build.assetsSubDirectory, 'img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join(config.build.assetsSubDirectory, 'media/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join(config.build.assetsSubDirectory, 'fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};
