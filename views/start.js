define([
	"app",
	"views/zandList"
],function(app, zandList){

	// + + + + + + + + + + help + + + + + + + + + +
    var zandView = {	 

          	id:"zandView",
          	view:"accordion",
          	height: 696,
          	type: 'line',
          	rows:[
	            { 
	              	view:"accordionitem",
	              	header:"Zand ovberzicht", 
	              	minHeight: 374,
	              	body: {
	              		cols: [
	              	  		{
	              	  			view: 'template',
		                        template: '<div class="helpitem">Overzicht</div>'
	              	  		}
	              	  	]
	              	}
	            },
	            { 
	              	view:"accordionitem",
	              	header:"Zand details", 
	              	minHeight: 374,
	              	body: {
	              		cols: [
	              	  		{
	              	  			view: 'template',
		                        template: '<div class="helpitem">Details</div>'
	              	  		}
	              	  	]
	              	},
	              	collapsed: true
	            },
	            { 
	              	view:"accordionitem",
	              	header:"Zand vergelijken", 
	              	minHeight: 374,
	              	body: {
	              		cols: [
	              	  		{
	              	  			view: 'template',
		                        template: '<div class="helpitem">Vergelijken</div>'
	              	  		}
	              	  	]
	              	},
	              	collapsed: true
	            }

	        ]
	    }
		    //template: 'zand'
	//}

	return {
		$ui: zandView
	};
	
});
