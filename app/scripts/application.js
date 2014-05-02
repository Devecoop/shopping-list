'use strict';
define(function(require) {
    var Backbone = require('backbone'),
        Communicator = require('communicator'),
        HomeView = require('views/home');

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        mainRegion: '#main-region'
    });

	/* Add initializers here */
	App.addInitializer( function () {
		Communicator.mediator.trigger("APP:START");
        App.mainRegion.show(new HomeView());
	});

	return App;
});
