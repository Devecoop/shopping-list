'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var async = require('async');
var hbs = require('express-hbs');
var baucis = require('baucis');



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

// proxy
var apiProxy = require('http-proxy').createProxyServer({target: 'http://localhost:9009'});
app.use(function(req, res, next) {
    console.log('Proxying request!');
    apiProxy.web(req, res);
});

// route index.html
app.get('/', function(req, res){
  res.sendfile( path.join( __dirname, '../app/index.html' ) );
});

/** Simple product service to expose as a rest api */
var productService = {
    products: {
        1: {
            name: "tomates",
            quantity: 3
        },
        2: {
            name: "papas",
            quantity: 5
        }
    },

    // Return all products from this service
    find: function(params, callback) {
        var products = [];
        Object.keys(this.products).forEach(function(id) {
            products.push(this.products[id]);
        }, this);
        callback(null, products);
    },

    // Create a new Product with the given data
    create: function(data, params, callback) {
        var id = Object.keys(this.products).length + 1;
        data.id = id;
        this.products[id] = data;
        callback(null, data);
    },

    // Retrieve a product by id
    get: function(id, params, callback) {
        id = parseInt(id, 10);
        var product = this.products[id];
        if (product) {
            callback(null, product);
        } else {
            callback('Cannot get the product');
        }
    },

    update: function(id, data, params, callback) {
        id = parseInt(id, 10);
        if (this.products[id]) {
            data.id = id;
            this.products[id] = data;
            callback(null, data);
        } else {
            callback('Cannot get the product');
        }
    }
};

var runApiServer = function() {
    var feathers = require('feathers');
    console.log('Api App listen on %s', apiPort);
    feathers().use('/api/products', productService).listen(apiPort);
};

// start server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express App started!');
    runApiServer();
});

