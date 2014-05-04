define([
	'backbone',
	'hbs!tmpl/item/productitem_tmpl',
    'xeditable'
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
		onRender: function() {
            this.$el.find('a#name').editable().on('save', this.onEditedName);
        },


        onEditedName: function(e, params) {
            console.log('Saving name: %s', params.newValue);
        }
	});

});
