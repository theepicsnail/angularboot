'use strict'
require('express-namespace')
var express = require('express'),
    config = require('./libs/config'),
    app = express()

app.namespace('/' + config.app.namespace, function(){
  app.get('/', function(req,res){
    res.send('200 OK')
  })
})

app.listen(config.app.port)
console.log('Listening on port ' + config.app.port)
