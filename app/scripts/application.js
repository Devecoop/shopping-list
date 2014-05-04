'use strict';
define(function(require) {
    var Backbone = require('backbone'),
        Communicator = require('communicator'),
        TitleView = require('views/title'),
        ProductsListView = require('views/composite/productslist'),
        MainLayout = require('views/layout/main'),
        ProductsCollection = require('collections/products');

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        mainRegion: '#main-region'
    });

	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");

        // Instantiate a main layout and show it on the main region
        var mainLayout = new MainLayout();
        App.mainRegion.show(mainLayout);

        mainLayout.title.show(new TitleView());

        var collection = new ProductsCollection();
        collection.fetch().done(function() {
            mainLayout.contents.show(new ProductsListView({
                collection: collection
            }));
        });
    

	});

	return App;
});
