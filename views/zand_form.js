define([
        "app",
        "models/landen",
        "resources/js/functions"
	 ],function(app, landen, functions) {

	 	/*
		    mineral_form - edit mineralen, part of mineralen
		        - newMeniral:  handler - cleanup mineralForm
		        - saveMineral: handler - save mineraal to db
		        - mineralForm: view - mineraal-form
		    return
		        mineralForm
		        
		*/
		  

	  // # # # # # # # # # # # # # # # # # # # # HANDLERS # # # # # # # # # # # # # # # # # # # #

	  function newZand() {
	    /*
	        newZand - cleanup zandForm
	    */
	    $$("zandFormId").clear();

        // $$('formuleId').setContent('<div id="formuleFld" class="formuleCls" contenteditable="true"></div>');
        // document.querySelector('.formuleCls').contentEditable = true;

        //console.log('newMineral', document.querySelector('.formuleCls').innerHTML);
	  }

	  function saveZand() {
	      /*
	          saveMineral - save mineraal to db
	          - get form-values
	          ajax call:  insert_mineraal.php
	              callback
	              load mineraal-data:   get_menralen.php
	      */
	      // + + + + + get form-values + + + + +
	      var zandData = $$('zandFormId').getValues();
	      webix.ajax().post("resources/php/insert_zand.php", zandData, function(response) {
	          //webix.message(response);
	          if (parseInt(response) != NaN && parseInt(response) > 0) {    // user is saved
	              $$('zandList').clearAll();
	              $$('zandList').load('resources/php/get_zanden.php');
	              webix.alert({ 			// error
					    type: 'alert-error',
					    title: '<h3>Opslaan zand</h3>',
					    text: "Het zand is opgeslagen.",
					    width: 440,
					    height: 200
					}); 
	          }
	          else {      
	          		webix.alert({ 			// error
					    type: 'alert-error',
					    title: '<h3>Opslaan zand</h3>',
					    text: "Er is een fout opgetreden waardoor het zand niet is opgeslagen.<br>Neem contact op met de maker van het programma.",
					    width: 440,
					    height: 200
					});                                                  
	          }
	          //console.log('saved Minaraal', zandData, response);
	      });
	    //console.log('to save Zand', zandData)
	  }

    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + media preview + + + + + + + + + +
    var zandForm = {
        view     : 'form',
        id       : 'zandFormId',
        width	 : 458,
        height   : 560,
        hidden   : true,
        rows: [
            {                                      // naam
                view:"text", 
                id:"zandId",
                name: 'zand_id',
                hidden: true
            },
            {                                      // naam
                view:"text", 
                id:"zandNaamId",
                name: 'naam',
                label: "Naam", 
                labelWidth: 100, 
                width: 438
            },
            {										// zand-type
                view:"combo", 
                id: 'zandtypeComboId',
                name: 'zandtypeCombo',
                label: "Type", 
                labelWidth: 100,
                value: 'strand',
                options:["strand", "rivier", "vulkaan", "groeve", "anders"],
                on: {
                	onChange: function(item) {
                		if (item == 'anders') {
                			$$('zandtypeId').setValue('');
                			$$('zandtypeId').show();
                		}
                		else {
                			$$('zandtypeId').setValue(item);
                			$$('zandtypeId').hide();
                		}
                	},
                	"onAfterSelect": function(item) {
              	  		var type = this.getItem(item);
              	  		$$('typeId').setValue(type);
                      	//console.log('type', type);
                  	}
                }
            },
            {                           
                view:"text", 
                id:"zandtypeId",
                name: 'type',
                label: " ", 
                labelWidth: 100,
                hidden: true,
                value: 'strand'
            },
            {									// vindplaats
            	cols: [
            		{
            			view: 'label',
            			label: 'Land',
            			width: 103
            		},
            		{ 
			              view: "list", 
			              id: 'landListId',
			              name: 'landList',
			              height: 36,
			              options: "resources/php/get_landen.php",
			              template: "#land#",
			              css: 'landLst',
			              borderless: true,
			              select: true,
			              on: {
			              	  "onAfterSelect": function(item) {
			              	  		var record = this.getItem(item);
			              	  		$$('landId').setValue(record.land);
			                      	console.log('land', record);
			                  }
			              }
			        },
			        {
            			view: 'label',
            			label: '-->',
            			css: 'landLabelCsl',
            			width: 28
            		},
			        {                           
		                view:"text", 
		                id:"landId",
		                name: 'land'
		                //hidden: true
		            }
            	]
            },
            
            {									// vindplaats
            	cols: [
            		{                                      // locatie
		                view:"text", 
		                id:"vindplaatsId",
		                name: 'vindplaats',
		                label: "Vindplaats", 
		                labelWidth: 100, 
		                width: 338
	            	},
	            	{},
            		{ 
			              view: "button", 
			              id: 'mapsBtnId',
			              name: 'mapsBtn',
			              label: 'Maps',
			              css: 'mapsBtn',
			              width: 80,
			              on: {
			              	  	"onItemClick": function() {
			              	  		
			                      	console.log('maps');
			                  	}
			              }
			        }
            	]
            },
            {
            	cols: [
            		{                                      // code
		                view:"select", 
		                id:"zandMineraalId",
		                name: 'mineraal',
		                label: "Mineraal", 
		                options: [],
		                labelWidth: 100, 
		                width: 220,
		                on: {
		                	onAfterRender: function() {
		                		console.log('TMP AFTER', this,functions.data.mineralen);
		                		$$('zandMineraalId').define({
		                			options: functions.data.mineralen
		                		});
		                		webix.delay(function(){
								    $$('zandMineraalId').refresh();    
								}, 100);
		                	}
		                }
		            },
		            {
		            	width: 34
		            },
		            {                                      // diepte
		                view:"counter", 
                        id:"diepteId",
                        name: 'diepte',
                        label: "Diepte in cm", 
		                labelWidth: 70, 
		                width: 172,
                        value: 0,
                        step: 5,
                        min: 0,
                        max: 1000,
		            }
            	]
            },
            {                                      // info
                view:"textarea", 
                id:"zandInfoId",
                name: 'info',
                label: "Extra info", 
                labelWidth: 100, 
                height: 78,
                width: 438
            },
            {
	              view: 'uploader',               // upload-button
	              id: 'uploadImg',  
	              name: 'uploader',
	              inputName:"uploader",
	              label: 'Selecteer een afbeelding',
	              labelWidth: 100,
	              accept: 'application/image',
	              upload:"resources/php/upload_img.php",
	              link: 'imgUrlId',
	              multiple: false,
	              autosend: false,
	              hidden: true,
	              css: 'blueBtn',
	              on: {
	                  onAfterFileAdd: function(file) {
	                      $$('uploadImg').hide();
	                      $$('uploadImgCheckboxId').toggle();
	                      $$('imageUrlId').setValue(file.name);
	                      //console.log('uploadPdf', file.name, file.size);
	                  }
	              }
	        },
	        {
	              view:"checkbox",
	              id: 'uploadImgCheckboxId',
	              name: 'uploadImgCheckbox',
	              label: 'Nieuwe afbeelding uploaden',
	              labelWidth: 150,
	              on: {
	                'onChange': function(){        // show/hide upload-frame
	                  if (this.getValue() ===1) {
	                    $$('uploadImg').show();
	                  }
	                  else {
	                    $$('uploadImg').hide();
	                  }
	                }
	              }
	        },
	        {
	              view: 'list',                   // url
	              id: 'imgUrlId',
	              type:"uploader",
	              name: 'img_url',
	              readonly: true,
	              height: 33
	        },
	        {
	              view: 'text',                   // url-text
	              id: 'imageUrlId',
	              name: 'imgurl',
	              label: 'Url',
	              labelWidth: 100,
	              hidden: true
	        },
            {
            	cols: [
            		{
            			view: 'button',
		                name: 'saveBtn',
		                label: 'Opslaan',
		                width: 140,
		                height: 32,
		                css: 'btnSave',
		                on: {
		                    'onItemClick': function() {
		                        saveZand();
		                    }
		                }
		            },
		            {},
		            {
                        view: 'button',
                        name: 'newBtn',
                        label: 'Nieuw',
                        width: 140,
                        height: 32,
                        on: {
                            'onItemClick': function() {
                                newZand(this);
                            }
                        }
                    },
		            {
		            	view: 'button',
		                name: 'cancelBtn',
		                label: 'Cancel',
		                width: 140,
		                height: 32,
		                on: {
		                    'onItemClick': function() {
		                    	$$('zandFormId').hide();
		                        $$('zandPreview').show();
		                    }
		                }
		            }

            	]
            }
        ]
    };

    return {
    $ui: zandForm,
    $oninit:function(view){
      	var dataItem = landen.data;
      	$$('landListId').parse(landen.data);
      	// $$('landListId').define("value", 'Griekenland');
      	// $$('landListId').refresh();
      
      	//console.log('landen', landen.data);
    	}
  	};
});