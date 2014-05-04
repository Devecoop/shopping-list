(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/productitem'
		],
		function( Productitem ) {

			describe('Productitem Itemview', function () {

				it('should be an instance of Productitem Itemview', function () {
					var productitem = new Productitem();
					expect( productitem ).to.be.an.instanceof( Productitem );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );