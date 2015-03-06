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

var server = require('http').createServer(app)

server.listen(3000, function() {
  console.log('server starter on port', 3000)
})
