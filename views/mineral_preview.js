define([
        "app",
        "views/mineral_form",
        "resources/js/mineralFunctions"
	 ],function(app, mineral_form, mineralFunctions) {



    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + media preview + + + + + + + + + +
    var mineralPreview = {
        width : 580,
        rows: [
            {
                view     : 'template',
                id       : 'mineralPreview',
                scroll   : true,
                template : '<div id="mineralPreviewItem"><img src="resources/ui_images/mineral_preview.png" width="560" alt="preview"></div>',
                height: 360
            },
            {
                view     : 'template',
                id       : 'mineralInfo',
                scroll   : true,
                template : '<div id="mineralInfoItem"></div>',
                width: 560,
                height: 200
            },
            mineral_form
        ]
    };

	 return mineralPreview;	
});
