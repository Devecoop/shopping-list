define([
	'backbone',
	'models/product'
],
function( Backbone, Product ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Products collection");
		},

		model: Product
		
	});
});
