var path = require('path');
var opn = require('opn');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware');
var webpack = require('webpack');
var devWebpackConfig = require('./webpack.dev.conf');
var config = require('./config');

var port = process.env.PORT || config.dev.port;

var autoOpenBrowser = config.dev.autoOpenBrowser;

var proxyTable = config.dev.proxyTable;

var app = express();

var compiler = webpack(devWebpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: devWebpackConfig.output.publicPath,
  quiet: true,
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000,
});

// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' });
//     cb();
//   });
// });

Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

app.use(hotMiddleware);

var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

var uri = 'http://localhost:' + port;

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve;
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  if (autoOpenBrowser) {
    opn(uri);
  }
  _resolve();
})

var server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  },
}
