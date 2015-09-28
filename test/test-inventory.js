var inventory = require('../inventory');
var chai = require('chai');
var expect = chai.expect;

describe('Tests the inventory app', function(){
	
	it('Tests the create method', function(done){
		var obj = inventory.create('Table', 'Side table');
		expect(obj.name).to.be.string;
		expect(obj.description).to.equal('Side table');
		done();
	});

});