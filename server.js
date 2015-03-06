'use strict';

var express = require('express')
var app = express()
var async = require("async");
var _ = require('underscore');
var Wunderground = require('wundergroundnode');
var wunderground = new Wunderground("6979f77d44debfb0");
app.configure(function() {
  app.use(express.static('./public'))
  app.use(express.json())
  app.use(express.urlencoded())
})
app.get('/api', function (req, res) {  
  res.send('Weatherman API is running');  
});
app.get('/api/conditions/:coords', function (req, res){

	wunderground.conditions().request(req.params.coords, function(err, response){
    if (!err) {
      return res.send(response);
    } else {
      return console.log(err);
    }
});
	});
var server = require('http').createServer(app)

server.listen(3000, function() {
  console.log('server starter on port', 3000)
})
