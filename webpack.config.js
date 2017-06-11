// Plugins and utils
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Parameter from command line
const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isTestWatch = ENV === 'test-watch';
const isBuild = ENV === 'build';
const isDevServer = ENV === 'start';


module.exports = function makeWebpackConfig() {
  const clientConfig = {
    entry: isTest ? void 0 : {
        'app': './src/app.js'
      },
    target: 'web',
    context: __dirname,
    output: isTest ? {} : {
        filename: '[name].[hash].js',
        publicPath: '',
        path: path.resolve(__dirname, './build')
      },
    externals: isTest ? {} : {},

    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
        {
          // JS loader
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },

    plugins: [],

    resolve: {
      alias: {}
    },

    devServer: {
      proxy: {},
      compress: true, // enable gzip compression
      https: false,
      noInfo: true, // only errors & warns on hot reload
      port: 8080,
      publicPath: '/scheme'
    }
  };

  if (isTest) {
    if (isTestWatch) {
      clientConfig.devtool = 'inline-source-map';
    } else {
      clientConfig.devtool = 'eval';
    }
  } else if (isBuild || isDevServer) {
    clientConfig.devtool = 'source-map';
  } else {
    clientConfig.devtool = 'eval-source-map';
  }

  // Skip rendering index.html in test mode
  if (!isTest) {
    clientConfig.plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        inject: 'body',
        chunks: ['app']
      })
    );
  }

  return clientConfig;
}();

