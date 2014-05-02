define(function(require) {
    var Backbone = require('backbone'),
        Communicator = require('communicator'),
        Welcome_tmpl = require('hbs!tmpl/welcome');
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
