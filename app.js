'use strict';
var express = require('express'),
  db = require('./lib/db'),
  path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
  res.send(db.getName().full);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});