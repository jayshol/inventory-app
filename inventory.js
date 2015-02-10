var _ = require('lodash');
var items = [];

exports.list = function(req, res){
	res.render('index', {items : items});
}

exports.show = function(req, res){
	var item = _.find(items, { id : req.params.id});
	res.render('show', item);
}

exports.add = function(req, res){
	res.render('add');
}

exports.create = function(req, res){
	var item = {
		id : _.uniqueId(),
		name: req.body.name,
		description:req.body.description
	};

	items.push(item);
	res.redirect('/');
}
