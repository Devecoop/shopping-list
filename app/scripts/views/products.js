'use strict';
define(function(require) {
    var Backbone = require('backbone'),
        ProductsTpl = require('hbs!tmpl/products');

	return Backbone.Marionette.View.extend({
		initialize: function() {
			console.log("initialize a Products View");
		},

        render: function() {
            this.$el.html(ProductsTpl());
            return this;
        }
	});
});
