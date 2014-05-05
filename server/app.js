'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');
var backend = require('./backend');


// init express
var app = express(),
    port = process.env.PORT || 9000;
var apiPort = 9009;

app.configure(function(){
    app.set('port', port);

    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
});

// set logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// mount static
app.use(express.static( path.join( __dirname, '../app') ));
app.use(express.static( path.join( __dirname, '../.tmp') ));

// route index.html
app.get('/', function(req, res){
  res.sendfile( path.join( __dirname, '../app/index.html' ) );
});

// proxy
var apiProxy = require('http-proxy').createProxyServer({target: 'http://localhost:9009'});
app.use(function(req, res, next) {
    console.log('Proxying request!');
    apiProxy.web(req, res);
});

// start server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express App started!');
    backend.start();
});

