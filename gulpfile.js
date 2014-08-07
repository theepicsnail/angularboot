var gulp = require('gulp');
var gutil = require('gulp-util');
var tinylr = require('tiny-lr');

var createServers = function (port, lrport) {
  var lr = tinylr();
  lr.listen(lrport, function () {
    gutil.log('LR Listening on', lrport);
  });

  var express = require('express');
  var path = require('path');
  var app = express(app);

  var sockjs = require('sockjs');
  var sjsserver = sockjs.createServer({ sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js" });
  sjsserver.on('connection', function(conn) {
    console.log(conn);
  });

  sjsserver.installHandlers(app, {prefix:'/sjs'});
  app
    .get('/sjs/info', function(req, res) { console.log(req); })
    .use(express.query())
    .use(require('connect-livereload')({port: lrport}))
    .use('/', express.static(path.resolve('./app')))
    .use('/bower_components',  express.static('./bower_components'))
    .get('/', function(req, res) { res.sendfile('index.html'); })
  ;

  app.listen(port, function () {
      gutil.log('listening on', port);
    });

  return {
    lr: lr,
    app: app
  };
};

var servers = createServers(2000, 2001);
gulp.task('default', function () {
  gulp.watch(['./**/*', '!./node_modules/**/*'], function(evt) {
    gutil.log(gutil.colors.cyan(evt.path), 'changed');
    servers.lr.changed({
      body: {
        files: [evt.path]
      }
    });
  });
});

