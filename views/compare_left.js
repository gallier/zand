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
                id       : 'compareLeftId',
                css:        'compareCls',
                height: 540,
                scroll: true,
                template : '<div id="img_left"><img src="resources/ui_images/no_compare.png" width="600" alt="preview"></div><br><div id="info_left"></div>'

                // template : '<div id="img_left" class="magnifier" style="width: 600px; height: 400px;"><img id="smallImg" src="resources/ui_images/no_compare.png" class="maglarge" style="width: 2048px; height: 1536px;" /><div class="maglens"><img id="largeImg" src="resources/ui_images/no_compare.png" class="maglarge" style="width: 2048px; height: 1536px;" /></div></div><br><div id="info_left"></div>'
                
                // on: {
                //     onAfterRender: function() {
                //         document.querySelector('#img_left').addEventListener('click', function() {

                //             console.log('compareRLeftId', functions.data.zandLeft);
                //         })
                        
                //     }
                // }
            }
        ]
    };

	 return zandPreview;	
});
