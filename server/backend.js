'use strict';
var express = require('express'),
    app = express();

var apiPort = 9009,
    DEBUG = 1;

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
            var p = this.products[id];
            p.id = id;
            products.push(p);
        }, this);
        callback(null, products);
    },

    // Create a new Product with the given data
    create: function(data, params, callback) {
        var id = Object.keys(this.products).length + 1;
        this.products[id] = data;
        data.id = id;
        callback(null, data);
    },

    // Retrieve a product by id
    get: function(id, params, callback) {
        id = parseInt(id, 10);
        var product = this.products[id];
        if (product) {
            product.id = id;
            callback(null, product);
        } else {
            callback('Cannot get the product');
        }
    },

    update: function(id, data, params, callback) {
        id = parseInt(id, 10);
        if (this.products[id]) {
            this.products[id] = data;
            callback(null, data);
        } else {
            callback('Cannot get the product');
        }
    }
};

var backend = {
    _server: null,

    start: function(options) {
        var feathers = require('feathers');
        this._server = feathers()
            .use(express.bodyParser())
            .use('/api/products', productService)
            .listen(apiPort, function() {
                if (DEBUG) console.log('Backend: listening on port ' + apiPort);
            });
    },

    stop: function() {
        this._server.close();
        this._server = null;
        this.data = null;
        if (DEBUG) console.log('Backend: has been shut down');
    }
};

module.exports = backend;

// Pythoners: this is equivalent to if __name__ == '__main__' ;-)
if (require.main === module) {
    backend.start();
}
