'use strict';
define(function(require) {
    var Backbone = require('backbone'),
        HomeTpl = require('hbs!tmpl/home');

	return Backbone.View.extend({
		initialize: function() {
			console.log("initialize a Home View");
		},

        render: function() {
            this.$el.html(HomeTpl());
            return this;
        }
	});
});
