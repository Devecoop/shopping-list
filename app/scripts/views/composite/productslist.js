define([
	'backbone',
	'views/item/productitem',
	'hbs!tmpl/composite/productslist_tmpl'
],
function( Backbone, Productitem, ProductslistTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Productslist CompositeView");
		},
		
    	itemView: Productitem,
    	
    	template: ProductslistTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views, see
         * templates/composite/productslist_tmpl.hbs */
        itemViewContainer: "#products-container",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
