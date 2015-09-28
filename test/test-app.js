var inventory = require('../inventory');
var app = require('../app');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var server = require('../bin/www');
chai.use(chaiHttp);

describe('Suite01', function(){
	before(function(){
		server.listen(3000);
	});
	
	after(function(){
		server.close();
	});

	it.skip('Tests the list route', function(done){
		chai.request('http://localhost:3000').get('/').end(function(err, res){
			expect(res).to.have.status(200);
			expect(res.text).to.be.string;
			done();
		});
	});

	it('Tests the add route', function(done){
		chai.request('http://localhost:3000').post('/').end(function(err, res){
			//console.log(res);
			//expect(res.req).to.have.param('name');
			//expect(res).to.redirectTo('http://www.yahoo.com');
			expect(res.redirects[0]).to.equal('http://www.yahoo.com');
			done();
		});
	});

});