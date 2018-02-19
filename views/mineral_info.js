define([
        "app"
	 ],function(app) {



    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + media preview + + + + + + + + + +
    var mineralInfo = {
        rows: [
            {
                width : 458,
                height: 46,
                cols: [
                    {
                        view: 'button',
                        name: 'mineralFormBtn',
                        label: 'mineral formulier',
                        width: 140,
                        on: {
                            'onItemClick': function() {
                                $$('mineralPreview').hide();
                                //$$('mineralFormId').show();
                            }
                        }
                    },
                    {},
                    {
                        view: 'button',
                        name: 'mineralZoekBtn',
                        label: 'Zoek',
                        width: 140,
                        // on: {
                        //     'onItemClick': function() {
                        //         if ($$('zoekDbmineralId').isVisible()) {
                        //             $$('zoekDbmineralId').hide();
                        //         }
                        //         else {
                        //             $$('zoekDbmineralId').show();
                        //         }
                        //     }
                        // }
                    }
                ]
            },
            {
                view     : 'template',
                id       : 'mineralInfo',
                template : '<div id="mineralInfoItem"></div>'
            },
            {
                view     : 'form',
                id       : 'zoekMineralFormId',
                height   : 166,
                hidden   : true,
                rows: [
                    {                                      // zoek op naam
                        view:"text", 
                        id:"zoekMineral",
                        name: 'zoekTekst',
                        label: "Zoek", 
                        labelWidth: 100, 
                        width: 465,
                        placeholder:"Naam"
                    },
                    {
                        view: 'button',
                        name: 'zoekMineralBtn',
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
            }
        ]
    };

	 return mineralPreview;	
});
