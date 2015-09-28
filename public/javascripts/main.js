
$(".items").on('click','.delete', function(evt){	
	if(confirm('Do you really want to delete this item?')){
		deleteItem($(evt.target).data('id'));
	}
});

function deleteItem(id){
	$.ajax('/'+ id, { 
		type:'DELETE'}).fail( function(err){
			console.error(err);
		}).done(function(){
			location.reload;
		});

}

/*function callBack(err,success){
	if(err){
		console.log(err);
	}else if(success === true){
		location.reload();
	}	
}*/

exports.deleteItem = deleteItem;