define([
	'backbone',
	'hbs!tmpl/item/productitem_tmpl'
],
function( Backbone, ProductitemTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Productitem ItemView");
		},
		
    	template: ProductitemTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
