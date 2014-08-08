var gulp = require('gulp');
var gutil = require('gulp-util');
var tinylr = require('tiny-lr');

var createServers = function (port, lrport) {
  var lr = tinylr();
  lr.listen(lrport, function () {
    gutil.log('LR Listening on', lrport);
  });

  var sockjs = require('sockjs');
  var sjsserver = sockjs.createServer(
    { sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js" }
  );
  sjsserver.on('connection', function(conn) { 
    console.log('connect'); 
    conn.on('data', function(data) {
      console.log('data', data);
      conn.write(data);
    });
  });

  var http = require('http');
  var express = require('express');

  var app = express();
  var server = http.createServer(app);
  sjsserver.installHandlers(server, {prefix:'/sjs'});

  app.use(require('connect-livereload')({port: lrport}));
  app.use('/bower_components', express.static(__dirname + '/bower_components'));
  app.use('/',express.static(__dirname + '/app'));
  server.listen(port, function () {
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

