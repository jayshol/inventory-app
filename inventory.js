var items = [
				{
					name :'Couch',
					description: 'Ikea this is comfortable!. Although oddly small and modular it may be the most wonderful couch of my life. Oh and so modern'				
				},
				{
					name : 'Laptop',
					description: 'Beep boop goes the laptop and I create a node awesomeness all day long'
				},
				{
					name: 'foobar',
					description :'This is a test for the inventory description system. It is only a test.'
				}

			];

exports.list = function(req, res){
	res.render('index', {items : items});
}