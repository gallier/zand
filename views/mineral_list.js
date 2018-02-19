define([
        "app",
        "resources/js/mineralFunctions",
        "resources/js/functions"
	 ],function(app, mineralFunctions, functions) {

        /*
            mediaList - media image list
        */



    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #


    // + + + + + + + + + + media image list + + + + + + + + + +
    var mineralList = {
        rows: [
            {
                view:"datatable", 
                id: 'mineralList',
                width: 640,
                height: 520,
                columns:[
                    { id:"mineraal_id",     header:"Id",            width: 50 },
                    { id:"mineraal",        header:"Naam",          width: 150 , sort: "string" },
                    { id:"formule",         header:"Formule",       width: 220 },
                    { id:"groep",           header:"Groep",        width: 110, sort: "string" },
                    { id:"systeem",         header:"Systeem",      width: 110, sort: "string" }
                ],
                select: 'row',
                autoConfig:true,
                on: {
                    // + + + + +  image to editor + + + + + 
                    "onAfterSelect": function (data, preserve){
                        var record = this.getItem(data.row);
                        functions.data.mineralRecord = record;
                        mineralFunctions.showMineral(record);

                        $$("mineralFormId").setValues(record);
                        var tmp = record.hardheid.indexOf('-');
                        if (tmp == -1) {
                            var minHardheid = parseFloat(record.hardheid);
                            var maxHardheid = parseFloat(record.hardheid);
                        }
                        else {
                            var minHardheid = parseFloat(record.hardheid.substr(0,tmp));
                            var maxHardheid = parseFloat(record.hardheid.substr(tmp + 1));
                        }
                        
                       $$('minHardheidId').setValue(minHardheid);
                        $$('maxHardheidId').setValue(maxHardheid);
                        $$("mineralFormId").refresh();

                        //console.log('minreal record', record, record.link, functions.data);
                    },
                    onAfterRender: function(data) {
                        data.each(function(record) {
                            var mineraalObj = {'mineraal_id': record.mineraal_id, 'mineraal': record.mineraal}
                            //functions.data.mineralen.push(mineraalObj);
                            functions.data.mineralen.push(record.mineraal);
                            //console.log(record.mineraal_id, record.mineraal, mineraalObj);
                        })
                        console.log('onAfterRender', functions.data.mineralen);
                    }
                }
            },
            {
                height: 40,
                view: "toolbar",
                elements:[
                    {                                       // mineraal formulier
                        view:"button", 
                        value:"Mineraal formulier", 
                        width:140, 
                        height: 24,
                        on: {
                            onItemClick: function() {
                                  /*
                                      refresh list
                                  */
                                  $$('mineralPreview').hide();
                                  $$('mineralInfo').hide();
                                  $$('mineralFormId').show();
                            }
                        }
                    },
                    {},
                    {                                       // reffresh mineral list
                        view:"button", 
                        value:"Refresh", 
                        width:140, 
                        height: 24,
                        on: {
                            onItemClick: function() {
                                  /*
                                      refresh list
                                  */
                                  console.log('refresh')
                            }
                        }
                    }
                ]
            }
        ]
    };

	 return mineralList;	
});
