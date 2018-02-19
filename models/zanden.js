define([

	],function(){

	var collection = new webix.DataCollection({ 
		url: 'resources/php/get_zanden.php'
	});

	return {
		data: collection
	};
});