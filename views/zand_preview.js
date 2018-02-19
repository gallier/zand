define([
        "app",
        "resources/js/functions",
        "resources/js/zandFunctions",
        "views/zand_form"
	 ],function(app, functions, zandFunctions, zand_form) {


    // # # # # # # # # # # # # # # # # # # # # HANDLERS # # # # # # # # # # # # # # # # # # # #

    function setCompareImg(compareView) {
        var zandData = functions.data.zand;
        var zandImgUrl = 'user_resources/zanden/'+ zandData.imgurl;
        var zandInfoStr = '<ul class="nobullet">';
        zandInfoStr += '<li><span class="label">Naam:</span> <span class="item">' + zandData.naam + '</span></li>';
        zandInfoStr += '<li><span class="label">Vindplaats:</span> <span class="item">' + zandData.land;
        zandInfoStr += ': ' + zandData.vindplaats + '</span></li>';
        zandInfoStr += '</ul>';

        if (compareView == 'left') {
            webix.delay(function(){                   // delay to show preview
                if (zandImgUrl) {
                    document.querySelector('#img_left img').setAttribute('src', zandImgUrl);

                    // document.querySelector('#img_left img#smallImg').setAttribute('src', zandImgUrl);
                    // document.querySelector('#img_left img#largeImg').setAttribute('src', zandImgUrl);
                }
                document.querySelector('#info_left').innerHTML = zandInfoStr;
                functions.data.compare = 'right';
                //console.log('LEFT', zandData, compareView, functions.data.compare);
            }, 1000);
        }
        else {
            webix.delay(function(){                   // delay to show preview
                if (zandImgUrl) {
                    document.querySelector('#img_right img').setAttribute('src', zandImgUrl);
                }
                document.querySelector('#info_right').innerHTML = zandInfoStr;
                functions.data.compare = 'left';
                //console.log('RIGHT', zandData, compareView, functions.data.compare);
            }, 1000);
        }
        //console.log('setCompareImg', compareView, zandData, zandImgUrl);
    }

    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + media preview + + + + + + + + + +
    var zandPreview = {
        rows: [

            {
                view     : 'template',
                id       : 'zandPreview',
                template : '<div id="zandPreviewItem"><img src="resources/ui_images/zand_preview.png" width="480" alt="preview"></div><br><div id="zandInfo">' + functions.data.version + '</div><div><button id="vergelijkBtnId">Vergelijk</button></div>',
                on: {
                    onAfterRender: function() {  
                        webix.delay(function(){
                            document.querySelector('#vergelijkBtnId').addEventListener('click', function() {
                                $$('vergelijkViewId').expand();
                                if (functions.data.compare == 'left') {
                                    functions.data.zandLeft = functions.data.zand;
                                    setCompareImg('left');
                                }
                                else {       
                                    functions.data.zandRight = functions.data.zand;  
                                    setCompareImg('right');
                                }
                                //console.log('vergelijk', functions.data.zand, functions.data.compare);
                            })

                            document.querySelector('#zandPreviewItem').addEventListener('click', function() {
                                zandFunctions.showFullImg(functions.data.zand);
                            });
                        }, 100); 
                    }
                }
            },
            {
                view     : 'form',
                id       : 'zoekFormId',
                height   : 166,
                hidden   : true,
                rows: [
                    {
                        view:"radio", 
                        name: 'mediatype',
                        label: "Type", 
                        labelWidth: 100,
                        value: 'zand',
                        options:["zand", "mineraal"]
                    },
                    {                                      // zoek op naam
                        view:"text", 
                        id:"zoekNaam",
                        name: 'zoekTekst',
                        label: "Zoek", 
                        labelWidth: 100, 
                        width: 465,
                        placeholder:"Naam"
                    },
                    {
                        view: 'button',
                        name: 'zoekZandBtn',
                        label: 'Zoek',
                        width: 140,
                        height: 32,
                        // on: {
                        //     'onItemClick': function() {
                        //         mediaHandlers.zoekMediaInDb();
                        //     }
                        // }
                    }
                ]
            },
            zand_form
        ]
    };

	 return zandPreview;	
});
