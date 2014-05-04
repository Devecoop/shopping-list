(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/productslist'
		],
		function( Productslist ) {

			describe('Productslist Compositeview', function () {

				it('should be an instance of Productslist Compositeview', function () {
					var productslist = new Productslist();
					expect( productslist ).to.be.an.instanceof( Productslist );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );