(function() {
	'use strict';

	var root = this;

	root.define([
		'models/product'
		],
		function( Product ) {

			describe('Product Model', function () {

				it('should be an instance of Product Model', function () {
					var product = new Product();
					expect( product ).to.be.an.instanceof( Product );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );