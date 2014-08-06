root = __dirname + "/..";
var express = require('express');
var livereload = require('connect-livereload');
var body = require('body-parser');

app = express();
app.use(body());
app.use(livereload())
app.use(express.static(root+ '/app'));
app.use('/bower_components',  express.static(root + '/bower_components'));
app.get('/', function (req,res) { return res.render('index.html'); });

console.log("theepicsnail.net:3000");
app.listen(3000);
