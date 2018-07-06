const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin') // clean the specified repo
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.js'
    // vendor: ['axios', 'vue']
  },
  output: {
    path: path.join(__dirname, 'dist/src'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: ['file-loader']
    }, {
      test: /\.js$/,
      exclude: /(node_modules)|bower_components/,
      use: ['babel-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist'
    ], {
      root: __dirname
    }),
    new CopyWebpackPlugin([{
      from: 'assets/*.txt',
      to: 'assets/[name].[chunkhash:3].[ext]'
    }]),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(__dirname, 'src/template/index.html'),
      title: `这是title`,
      inject: true
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9527,
    historyApiFallback: true,
    noInfo: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devtool: '#eval-source-map',
  stats: 'errors-only',
  optimization: {
    minimize: process.env.NODE_ENV === 'production'
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'

  module.exports.plugins = module.exports.plugins.concat([
    new BundleAnalyzerPlugin()
  ])
  module.exports.optimization.splitChunks = {
    cacheGroups: {
      vendors: {
        test: 'all',
        name: 'haha',
        chunks: 'async'
      }
    }
  }
}
