define([
        "app",
        "models/landen",
        "resources/js/functions",
        "resources/js/zandFunctions"
	 ],function(app, landen, functions, zandFunctions) {

        /*
            mediaList - media image list
        */



    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #


    // + + + + + + + + + + media image list + + + + + + + + + +
    var zandList = {
        rows: [
            {
                view:"datatable", 
                id: 'zandList',
                width: 640,
                columns:[
                    { id:"zand_id",     header:"Id",            width: 50 },
                    { id:"naam",        header:"Naam",          width: 190 , sort: "string"},
                    { id:"landcode",    header:"Land",          width: 40 },
                    { id:"vindplaats",  header:"Vindplaats",    width: 190, sort: "string" },
                    { id:"type",        header:"Type.",         width: 70, sort: "type" },
                    { id:"datum",       header:"Datum.",        width: 100, sort: "date" }
                ],
                select: 'row',
                autoConfig:true,
                on: {
                    // + + + + +  image to preview, data to form + + + + + 
                    "onAfterSelect": function (data, preserve){
                        var record = this.getItem(data.row);
                        functions.data.zand = record;
                        zandFunctions.showZand(record);

                        $$("zandFormId").setValues(record);
                        $$('zandtypeComboId').setValue(record.type);
                        // $$('landId').setValue(record.land_id);
                        // var landDataId = landen.data.getIdByIndex(record.land_id)
                        $$('landId').setValue(record.land);
                        $$("zandFormId").refresh();
                        
                        //console.log('record', data.row, record);
                    }
                }

            },
            {
                height: 40,
                view: "toolbar",
                elements:[
                    {                                       // mineraal formulier
                        view:"button", 
                        value:"Zand formulier", 
                        width:140, 
                        height: 24,
                        on: {
                            onItemClick: function() {
                                /*
                                      refresh list
                                */
                                $$('zandPreview').hide();
                                $$('zandFormId').show();
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

    return {
    $ui: zandList,
    $oninit:function(view){
        var dataItem = landen.data;
    

      
        //console.log('landen', landen.data);
        }
    };
});
