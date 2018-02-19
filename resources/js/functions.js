define([
	"app",
], function(app){

	//configuration
	var functions = {

		data: {
			version: 'v0.1.d - 18-09-2017',
			zandRecord: null,
			compare: 'left',
			zandLeft: null,
			zandRight: null,
			mineralRecord: null,
			mineralen: ['Onbekend'],
			imgInfo: ''
		},
		
		currenDate: function(mysqlFormat) {
			/*
				create curent data
				params
					mysqlFormat: boolean - use mysql-format or user-readable
				return: date - current date
			*/
			if (mysqlFormat) {
				var dataFormat = webix.Date.dateToStr("%Y-%m-%d");
			}
			else {
				var dataFormat = webix.Date.dateToStr("%d-%m-%Y");
			}
			return dataFormat(new Date());
		},

	    fileExists: function(url, callback){
	    	/*
				controls id an image exists
				params
					image_url: string - url of image to controlo
				return: int - http-status
	    	*/
		    var http = new XMLHttpRequest();

		    http.open('HEAD', url, false);
		    http.send();

		    return http.status != 404;
		},

		setAlert: function(title, msg, errorType) {
			/*
				webix alert-box
				params
					title: string - box-tilte
					msg: string - message
					type: bool - error or warning
			*/
			if (errorType) {
				var type = 'alert-error';
			}
			else {
				var type = 'alert-warning';
			}
			webix.alert({
				type: type,
				title: '<h3>' + title + '</h3>',
				text: msg,
				ok: '&nbsp;Ok&nbsp;',
				width: 440,
				height: 200
			});
		}

	}

	return functions;
});