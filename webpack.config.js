var path = require("path");
module.exports = {
  entry: {
    app: ["./src/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/bin/",
    filename: "app.bundle.js"
  },
  module: {
         loaders: [
             {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }
      ]
     }
  //     module: {
  //   loaders: [
  //     {
  //       test: path.join(__dirname, 'es6'),
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015']
  //       }
  //     }
  //   ]
  // }
};
//  var path = require('path');
// var webpack = require('webpack');
// // var autoprefixer = require('autoprefixer');
// // var precss = require('precss');
// // var px2rem = require('postcss-px2rem');

//  module.exports = {
//     //  entry: [
//     //     'webpack-dev-server/client?http://0.0.0.0:9090',//资源服务器地址
//     //     'webpack/hot/only-dev-server',
//     //     './src/app.js'
//     //  ],
//     entry: {
//         app: ["./src/app.js"]
//     },
//      output: { 
//          publicPath: "http://127.0.0.1:8080/bin/",
//          path: '/bin/',
//          filename: 'app.bundle.js'
//      },
//     // entry: {
//     //     app: ["./src/app.js"]
//     // },
//     // output: {
//     //     path: path.resolve(__dirname, "build"),
//     //     publicPath: "/bin/",
//     //     filename: "app.bundle.js"
//     // },
     
//      module: {
//          loaders: [
//              {
//              test: /\.js$/,
//              exclude: /node_modules/,
//              loader: 'babel-loader',
//          }
//       ]
//      },
//      devServer:{
//         historyApiFallback:true,
//         hot:true,
//         inline:true,
//         progress:true,
//     },
//     plugins:[
//         new webpack.DefinePlugin({
//         'process.env.NODE.ENV':"development"
//         }),
//         new webpack.HotModuleReplacementPlugin()
//     ]
//     // devServer: {
//     //    contentBase: __dirname,
//     // },
//     // plugins:[
//     //     new webpack.DefinePlugin({
//     //     'process.env.NODE.ENV':"development"
//     //     }),
//     //     new webpack.HotModuleReplacementPlugin()
//     // ]
//  };

// var WebpackDevServer = require("webpack-dev-server");
// var webpack = require("webpack");

// var compiler = webpack({
//   // configuration
// });
// var server = new WebpackDevServer(compiler, {
//   // webpack-dev-server options

//   contentBase: "/path/to/directory",
//   // or: contentBase: "http://localhost/",

//   hot: true,
//   // Enable special support for Hot Module Replacement
//   // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
//   // Use "webpack/hot/dev-server" as additional module in your entry point
//   // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 

//   // Set this as true if you want to access dev server from arbitrary url.
//   // This is handy if you are using a html5 router.
//   historyApiFallback: false,

//   // Set this if you want to enable gzip compression for assets
//   compress: true,

//   // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
//   // Use "*" to proxy all paths to the specified server.
//   // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
//   // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
//   proxy: {
//     "*": "http://localhost:9090"
//   },

//   // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
//   staticOptions: {
//   },

//   // webpack-dev-middleware options
//   quiet: false,
//   noInfo: false,
//   lazy: true,
//   filename: "app.bundle.js",
//   watchOptions: {
//     aggregateTimeout: 300,
//     poll: 1000
//   },
//   publicPath: "/bin/",
//   headers: { "X-Custom-Header": "yes" },
//   stats: { colors: true }
// });
// server.listen(8080, "localhost", function() {});
// // server.close();

//   "main": "index.js",
//   "scripts": {
//     "dev": "webpack-dev-server --inline --hot",
//     "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
//   },

// "scripts": {
//        "start": "webpack-dev-server --inline"//这里没有添加-hot
//     },