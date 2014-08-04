root = __dirname + "/.."
var express = require('express');
app = express();
app.use(express.static(root+ '/app'));
app.use('/bower_components',  express.static(root + '/bower_components'));
app.get('/', function (req,res) { return res.render('index.html'); });
app.listen(3000);
