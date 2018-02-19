define([
	"app",
	"models/zanden",
	"views/zand_thumblist",
	"views/zand_list",
	"views/zand_preview",
	"views/compare_left",
	"views/compare_right",
	"models/mineralen",
	"views/mineral_list",
	"views/mineral_preview"
],function(app, 
	zanden, zand_thumblist, zand_list, zand_preview,
	compare_left, compare_right,
	mineralen, mineral_list, mineral_preview
	 ) {

	var ui = {	 

          	id:"zandView",
          	view:"accordion",

          	height: 696,
          	type: 'line',
          	rows:[
	            { 
	              	view:"accordionitem",
	              	id: "zandViewId",
	              	header:"Zand overzicht", 
	              	minHeight: 374,
	              	body: {
              	  		cols: [
	              	  		zand_thumblist,
	              	  		zand_list,
	              	  		zand_preview     
			            ]

	              	}
	            },
	            { 
	              	view:"accordionitem",
	              	id: "vergelijkViewId",
	              	header:"Zanden vergelijken", 
	              	minHeight: 374,
	              	body: {
	              		cols: [
	              	  		compare_left,
	              	  		compare_right
	              	  	]
	              	},
	              	collapsed: true
	            },
	            { 
	              	view:"accordionitem",
	              	id: "mineralViewId",
	              	header:"Mineralen", 
	              	//minHeight: 374,
	              	height: 620,
	              	body: {
	              		cols: [
	              	  		mineral_list,
			            	mineral_preview
	              	  	]
	              	},
	              	collapsed: true
	            }

	        ]
	    }

	return {
		$ui: ui,
		$oninit:function(view){
		    var dataItem = zanden.data;
		    $$('zandList').parse(zanden.data);
		    $$('zandThumbs').parse(zanden.data);
		    $$('mineralList').parse(mineralen.data);

		    //document.designMode = "on";

	      
	      	//console.log('mineralen', mineralen.data);
	    }
	};
});