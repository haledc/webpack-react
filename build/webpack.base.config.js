const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const webpackBaseConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].thunk.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'eslint-loader',
        include: /src/,
        enforce: 'pre'
      },
      {
        test: /\.(git|png|jpe?g|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[hash:8].[ext]',
          outputPath: 'images/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[hash:8].[ext]',
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[hash:8].[ext]',
          outputPath: 'media/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/static'),
        to: path.resolve(__dirname, '../dist/static'),
        ignore: ['.*']
      }
    ])
  ]
}

module.exports = webpackBaseConfig
