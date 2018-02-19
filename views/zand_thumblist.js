define([
        "app",
        "models/zanden",
        "resources/js/functions",
        "resources/js/zandFunctions"
	 ],function(app, zanden, functions, zandFunctions) {

        /*
            mediaImgList - thumbnail list
        */



    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + thumbnail list + + + + + + + + + +
    var zandThumbList = {
        view: 'list',
        id: 'zandThumbs',
        css: 'zandThumbsCss',
        width: 118,
        height: 560,
        scroll   : true,
        data: {                                  
           src:"resources/ui_images/dot.gif"
        },
        template: function(obj) {                   // dynamic template
            if (functions.fileExists('user_resources/zanden/' + obj.imgurl) && obj.imgurl != undefined) {
                if (obj.naam.length > 14) {
                    var zandnaam = obj.naam.substr(0,14) + '...'
                }
                else {
                    var zandnaam = obj.naam;
                }
                return '<div class="zandThumb"><img src="user_resources/zanden/' + obj.imgurl + '" width="102" height="77" alt="zand"><br><span class="zandNaam">' + zandnaam + '</span></div>';
            }
            else {
                 return '<div class="zandThumb"><img src="resources/ui_images/no_thumb.png" width="80" alt="afbeelding niet gevonden"><br></div>';
            }    
        },
        //template: '<div class="zandThumb"><img src="user_resources/zanden/it_pozzuoli_solfatara_01.png" Failed to load resource: the server responded with a status of 404 (Not Found)" width="102" height="77" alt="zand"><br>#zand_id#</div>',
        select: true,
        on: {
            onItemClick: function(index) {
                var id = parseInt(index);
                var record = zanden.data.getItem(id);
                zandFunctions.showZand(record);
                $$('zandList').select(id);
                //console.log('thumb',id, record);
            }
        }
    };

	return zandThumbList;	
});
