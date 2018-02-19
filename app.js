/*
	App configuration
*/

define([
	"libs/webix-mvc-core/core",
	"libs/webix-mvc-core/plugins/menu",
], function(
	core, menu
){

	//configuration
	var app = core.create({
		id:			"Zand-App", //change this line!
		name:		"Zand app",
		version:	"0.1.0",
		debug:		true,
		start:		"/top"
	});

	// function getImageInfo(id) {
	// 	console.log('getImageInfo', id);
	// };

	//app.use(menu);


	return app;
});