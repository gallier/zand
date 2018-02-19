define([
        "app",
        "resources/js/functions",
        "resources/js/zandFunctions"
	 ],function(app, functions, zand_form, zandFunctions) {



    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + media preview + + + + + + + + + +
    var zandPreview = {
        rows: [

            {
                view     : 'template',
                id       : 'compareRightId',
                css:        'compareCls',
                height: 540,
                scroll: true,
                template : '<div id="img_right"><img src="resources/ui_images/no_compare.png" width="600" alt="preview"></div><br><div id="info_right"></div>'
                // on: {
                //     onAfterRender: function() {
                //         document.querySelector('#img_right').addEventListener('click', function() {
                //             console.log('compareRightId', functions.data.zandRight);
                //         })
                        
                //     }
                // }
            }
        ]
    };

	 return zandPreview;	
});
