var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
var postCSSConfig = require('./postcss.config.js');
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    // https://github.com/webpack/webpack/issues/1964
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 0.8
    }),
    // new webpack.LoaderOptionsPlugin({
    //   test: /\.css$/,
    //   options: {
    //     postcss: function() {
    //       return postCSSConfig;
    //     }
    //   }
    // }),
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    })
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
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader'
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            // 'style-loader',
            { 
              loader: 'css-loader', 
              options: { 
                modules: true, 
                importLoaders: 1,
                localIdentName: '[name]---[local]---[hash:base64:5]' 
              } 
            },
            { 
              loader: 'postcss-loader', 
              options: {
                plugins: (loader) => postCSSConfig
              } 
            }
          ],
          publicPath: '/dist'
        }) 
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
  }
};