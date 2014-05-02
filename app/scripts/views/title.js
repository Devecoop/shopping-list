'use strict';
define(function(require) {
    var Backbone = require('backbone'),
        TitleTpl = require('hbs!tmpl/title');

	return Backbone.Marionette.View.extend({
		initialize: function() {
			console.log("initialize a Title View");
		},

        render: function() {
            this.$el.html(TitleTpl());
            return this;
        }
	});
});
