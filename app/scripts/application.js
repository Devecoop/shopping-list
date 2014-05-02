'use strict';
define(function(require) {
    var Backbone = require('backbone'),
        Communicator = require('communicator'),
        TitleView = require('views/title'),
        ProductsView = require('views/products'),
        HomeTpl = require('hbs!tmpl/home');

	var App = new Backbone.Marionette.Application();

    var MainLayout = Backbone.Marionette.Layout.extend({
        template: HomeTpl,
        regions: {
            title: '#home-title',
            contents: '#home-contents'
        }
    });
    
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
        mainLayout.contents.show(new ProductsView());
    

	});

	return App;
});
