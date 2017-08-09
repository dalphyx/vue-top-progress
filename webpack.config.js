const webpack = require('webpack')
const path = require('path')
const pokore = require('pokore')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const postcssPlugins = [
  pokore.import,
  pokore.colorAlpha,
  pokore.extend,
  pokore.size,
  pokore.reset,
  pokore.propertylookup,
  pokore.autoprefixer,
  pokore.nested,
  pokore.sorting({ 'sort-order': pokore.cssortie })
]

const webpackConfig = {
  entry: {
    app: './docs/client/main.js',
    vendor: [
      'vue'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /(node_modules|vue-top-progress)/
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|vue-top-progress)/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: {
            plugins: postcssPlugins,
            options: {
              parser: pokore.sugarss
            }
          },
          loaders: {
            js: 'babel-loader!eslint-loader'
          }
        }
      },
      {
        test: /\.sss$/,
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },

  resolveLoader: {
    modules: [path.resolve('.', 'node_modules')]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "./css/[name].css",
      disable: false,
      allChunks: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnWarning: false,
          failOnError: true
        },
        postcss: (_webpack) => {
          return {
            plugins: postcssPlugins,
            parser: pokore.sugarss
          }
        }
      }
    })
  ]
}

module.exports = webpackConfig