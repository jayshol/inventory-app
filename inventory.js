var _ = require('lodash');
var items = [];

function findOne(req){
	return _.find(items, { id: req.params.id});
}

exports.list = function(id){
	//res.render('index', {items : items});
	return {items : items};
}

exports.show = function(req, res){
	//var item = _.find(items, { id : req.params.id});
	res.render('show', findOne(req));
}

exports.add = function(req, res){
	res.render('add');
}

exports.create = function(name, description){
/*	var item = {
		id : _.uniqueId(),
		name: req.body.name,
		description:req.body.description
	};
*/
	var item = {
		id: _.uniqueId(),
		name: name,
		description: description
	};

	items.push(item);
	//res.redirect('/');
	return item;
}

exports.edit = function(req, res){
	res.render('edit',findOne(req));
}

exports.update = function(req, res){
	var id= req.params.id;
	var index = _.findIndex(items, {id: id});
	var item = {
		id:id,
		name:req.body.name,
		description:req.body.description
	};

	items[index] = item;
	res.redirect("/" + id);
}

exports.delete = function(req, res){
	_.remove(items, {id:req.params.id});
	res.json({success:true});
}
