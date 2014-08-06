var gutil = require('gulp-util');
var express = require('express');
var path = require('path');

var app = express();
app.use(express.query())
  .use('/', express.static(path.resolve('./app')))
  .use('/bower_components',  express.static('./bower_components'))
;
module.exports = app; 
