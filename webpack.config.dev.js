var path = require('path');
var webpack = require('webpack');
var postCSSConfig = require('./postcss.config.js');
var CompressionPlugin = require('compression-webpack-plugin');
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssCssnext = require('postcss-cssnext');


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: () => {
          return postCSSConfig;
        }
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 0.8
    }),
    // new ExtractTextPlugin('application.css')

  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.css$/,
        // use: [
        //   'style-loader',
        //   { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
        //   { 
        //     loader: 'postcss-loader', 
        //     options: {
        //       plugins: (loader) => [
        //         require('postcss-import')({ root: loader.resourcePath }),
        //         // require('postcss-cssnext')(),
        //         require('autoprefixer')(),
        //         // require('cssnano')()
        //       ]
        //     } 
        //   }
        // ]
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader',
        // loader: ExtractTextPlugin.extract(['style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader'])
      },
      // Font-Awesome
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: 'file-loader' 
      }
    ]
  },
  // postcss: function() {
  //   return postCSSConfig;
  // },
};

