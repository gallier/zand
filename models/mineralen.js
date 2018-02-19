define([

	],function(){

	var collection = new webix.DataCollection({ 
		url: 'resources/php/get_mineralen.php'
	});

	return {
		data: collection
	};
});