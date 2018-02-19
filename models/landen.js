define([

	],function(){

	var collection = new webix.DataCollection({ 
		url: 'resources/php/get_landen.php'
	});

	return {
		data: collection
	};
});