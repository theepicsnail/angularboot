var gulp = require('gulp');
var gutil = require('gulp-util');
var tinylr = require('tiny-lr');

var createServers = function (port, lrport) {
  var lr = tinylr();
  lr.listen(lrport, function () {
    gutil.log('LR Listening on', lrport);
  });

  var app = require('./server/main.js');
  app.use(require('connect-livereload')({port: 2001 }))
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

