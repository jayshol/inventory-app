var deleteItem = require('../public/javascripts/main').deleteItem;
var sinon = require('sinon');
var chai = require('chai');
var chaiSinon = require('sinon-chai');
chai.use(chaiSinon);
var $ = require('jquery');

describe('test the ajax method', function(){
	
	after(function(){
		$.ajax.restore();
	});

	it('test deleteItem method', function(done){
		sinon.stub($, "ajax");
		deleteItem(1, sinon.spy());

		expect($.ajax).to.have.been.called;
		done();
	});
});

