define([
        "app",
        "resources/js/mineralFunctions",
        "resources/js/functions"
     ],function(app, mineralFunctions, functions) {


	 	/*
		    mineral_form - edit mineralen, part of mineralen
		        - newMeniral:  handler - cleanup mineralForm
		        - saveMineral: handler - save mineraal to db
		        - mineralForm: view - mineraal-form
		    return
		        mineralForm
		        
		*/
		  

	  // # # # # # # # # # # # # # # # # # # # # HANDLERS # # # # # # # # # # # # # # # # # # # #

	  function newMineral() {
	    /*
	        newUser - cleanup userForm
	    */
	    $$("mineralFormId").clear();
        $$('minHardheidId').setValue(1);
	    $$('maxHardheidId').setValue(10);
        // $$('formuleId').setContent('<div id="formuleFld" class="formuleCls" contenteditable="true"></div>');
        // document.querySelector('.formuleCls').contentEditable = true;

        //console.log('newMineral', document.querySelector('.formuleCls').innerHTML);
	  }

	  function saveMineral() {
	      /*
	          saveMineral - save mineraal to db
	          - get form-values
	          ajax call:  insert_mineraal.php
	              callback
	              load mineraal-data:   get_menralen.php
	      */
	      // + + + + + get form-values + + + + +
	      var mineralData = $$('mineralFormId').getValues();
	      webix.ajax().post("resources/php/insert_mineraal.php", mineralData, function(response) {
	          //webix.message(response);
	          if (parseInt(response) != NaN && parseInt(response) > 0) {    // user is saved
	              $$('mineralList').clearAll();
	              $$('mineralList').load('resources/php/get_mineralen.php');
	              functions.setAlert('Opslaan mineraal', 'Het mineraal is opgeslagen.', false);
	          }
	          else {      
	          		webix.alert({ 			// error
					    type: 'alert-error',
					    title: '<h3>Opslaan mineralen</h3>',
					    text: "Er is een fout opgetreden waardoor het mineraal niet is opgeslagen.<br>Neem contact op met de maker van het programma.",
					    width: 440,
					    height: 200
					});                                                  
	          }
	          //console.log('saved Minaraal', mineralData, response);
	      });
	    //console.log('to save Minaraal', mineralData)
	  }




    // # # # # # # # # # # # # # # # # # # # # VIEW # # # # # # # # # # # # # # # # # # # #

    // + + + + + + + + + + media preview + + + + + + + + + +
    var mineralForm = {
        view     : 'form',
        id       : 'mineralFormId',
        width    : 560,
        height   : 560,
        hidden: true,
        on: {
            onValues: function() {
                webix.delay(function(){
                    var formule = functions.data.mineralRecord.formule;
                    if (formule) {
                        $$('formuleId').setHTML('<div id="formuleFld" class="formuleCls" contenteditable="true">'+ formule + '</div>');
                    }
                    //console.log('onValues',functions.data.mineralRecord, functions.data.mineralRecord.formule);
                }, 500);
            }
        },
        rows: [
            {                                      // naam
                view:"text", 
                id:"mineraalId",
                name: 'mineraal_id',
                hidden: true
            },
            {                                      // naam
                view:"text", 
                id:"mineraalNaamId",
                name: 'mineraal',
                label: "Naam", 
                labelWidth: 100, 
                width: 438
            },
            {     
                cols: [
                    {
                        view: 'label',
                        label: "Formule", 
                        width: 103
                    },
                    {
                        view: 'template',           // formule
                        id:"formuleId",
                        template: '<div id="formuleFld" class="formuleCls" contenteditable="true"></div>',
                        label: "Formule", 
                        labelWidth: 100, 
                        width: 332,
                        on: {
                            onBlur: function() {
                                var formuleTxt = document.querySelector('.formuleCls').innerHTML;
                                $$('formuleTxtId').setValue(formuleTxt);
                                //console.log('formule', formuleTxt);
                            }
                        }
                    },
                    {
                        width: 10
                    },
                    {
                        view: 'button',             // formule sup-button
                        name: 'supBtn',
                        label: 'Sup',
                        css: 'blueBtn',
                        width: 44,
                        height: 32,
                        on: {
                            'onItemClick': function() {
                                //document.designMode = "on";
                                var command = 'superscript'; //'<sup>'; 
                                var formuleTxt = document.querySelector('.formuleCls')
                                document.execCommand(command, false, null);
                                //console.log('sup', command, $$('formuleId').getNode(), formuleTxt.innerHTML);
                            }
                        }
                    },
                    {
                        view: 'button',             // formule sub-button
                        name: 'subBtn',
                        label: 'Sub',
                        css: 'blueBtn',
                        width: 44,
                        height: 32,
                        on: {
                            'onItemClick': function() {
                                //document.designMode = "on";
                                var command = 'subscript'; //'<sup>'; 
                                var formuleTxt = document.querySelector('.formuleCls')
                                document.execCommand(command, false, null);
                                //console.log('sub', command, $$('formuleId').getNode(), formuleTxt.innerHTML);
                            }
                        }
                    }
                ]                                   
            },
            {                                       // systeem
                view:"combo", 
                id: 'systeemComboId',
                name: 'systeem',
                label: "Systeem", 
                labelWidth: 100,
                width: 438,
                options:["kubisch", "tetragonaal", "orthorombisch", "hexagonaal", "monoklien", "trigonaal", "amorf"],
            },
            // {                           
            //     view:"text", 
            //     id:"groepId",
            //     name: 'groep',
            //     label: "Groep", 
            //     labelWidth: 100, 
            //     width: 438,
            // },
            {                                       // systeem
                view:"combo", 
                id: 'groepComboId',
                name: 'groep',
                label: "Groep", 
                labelWidth: 100,
                width: 438,
                options:["elementen", "sulfiden", "oxiden", "halogeniden", "carbonaten", "sulfaten", "silicaten"],
            },
            {
                cols: [                                 // hardheid      
                    {                           
                        view:"counter", 
                        id:"minHardheidId",
                        name: 'minHardheid',
                        label: "Hardheid", 
                        labelWidth: 100, 
                        width: 238,
                        value: 1,
                        step: 0.5,
                        min: 0.1,
                        max: 10,
                        on: {
                            onChange: function() {
                                var min = $$('minHardheidId').getValue();
                                var max = $$('maxHardheidId').getValue();
                                if (min >= max) {
                                    min = max;
                                    ////$$('minHardheidId').setValue(min);
                                    $$('hardheidId').setValue(min);
                                }
                                else {
                                    $$('hardheidId').setValue(min + '-' + max);
                                }
                                //console.log('min', min, max)
                            }
                        }
                    },
                    {
                    	view: 'label',
                    	label: 'min - max',
                    	width: 100
                    },
                    {                           
                        view:"counter", 
                        id:"maxHardheidId",
                        name: 'maxHardheid',
                        width: 204,
                        value: 10,
                        step: 0.5,
                        min: 0.1,
                        max: 10,
                        on: {
                            onChange: function() {
                                var min = $$('minHardheidId').getValue();
                                var max = $$('maxHardheidId').getValue();
                                if (min >= max) {
                                    max = min;
                                    $$('maxHardheidId').setValue(max);
                                    $$('hardheidId').setValue(max);
                                }
                                else {
                                    $$('hardheidId').setValue(min + '-' + max);
                                }
                                //console.log('max', min, max)
                            }
                        }
                    }
                ]
            },
            
            {                                      // kleur
                view:"text", 
                id:"kleurId",
                name: 'kleur',
                label: "Kleur", 
                labelWidth: 100, 
                width: 438
            },
            {                                      // info
                view:"textarea", 
                id:"infoId",
                name: 'info',
                label: "Extra info", 
                labelWidth: 100, 
                height: 78,
                width: 438
            },
            {                                      // kleur
                view:"text", 
                id:"mineralLinkId",
                name: 'link',
                label: "Link", 
                labelWidth: 100, 
                width: 438
            },
            {
                view: 'uploader',               // upload-button
                id: 'uploadMineralImg',  
                name: 'mineralUploader',
                inputName:"uploader",
                label: 'Selecteer een afbeelding',
                labelWidth: 100,
                accept: 'application/image',
                upload:"resources/php/upload_img.php",
                link: 'imgMineralUrlId',
                multiple: false,
                autosend: false,
                hidden: true,
                css: 'blueBtn',
                on: {
                    onAfterFileAdd: function(file) {
                        $$('uploadMineralImg').hide();
                        $$('uploadMineralImgCheckboxId').toggle();
                        $$('imageMineralUrlId').setValue(file.name);
                        //console.log('uploadPdf', file.name, file.size);
                    }
                }
            },
            {
                  view:"checkbox",
                  id: 'uploadMineralImgCheckboxId',
                  name: 'uploadMineralImgCheckbox',
                  label: 'Nieuwe afbeelding uploaden',
                  labelWidth: 150,
                  on: {
                    'onChange': function(){        // show/hide upload-frame
                      if (this.getValue() ===1) {
                        $$('uploadMineralImg').show();
                      }
                      else {
                        $$('uploadMineralImg').hide();
                      }
                    }
                  }
            },
            {
                  view: 'list',                   // url
                  id: 'imgMineralUrlId',
                  type:"uploader",
                  name: 'img_url',
                  readonly: true,
                  height: 33
            },
            {
                  view: 'text',                   // url-text
                  id: 'imageMineralUrlId',
                  name: 'imgurl',
                  label: 'Url',
                  labelWidth: 100,
                  hidden: true
            },
            {
            	height: 1
            },
            {
                cols: [
                    {
                        view: 'button',
                        name: 'saveBtn',
                        label: 'Opslaan',
                        css: 'btnSave',
                        width: 140,
                        height: 32,
                        on: {
                            'onItemClick': function() { 
                                webix.delay(function(){
                                    saveMineral();
                                    $$('mineralFormId').hide();
                                    $$('mineralPreview').show();
                                    $$('mineralInfo').show();
                                }, 500);  
                                //mineralFunctions.showMineral(functions.data.mineralRecord.formule);
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
                                newMineral(this);
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
                                $$('mineralFormId').hide();
                                $$('mineralPreview').show();
                                $$('mineralInfo').show();
                                if (functions.data.mineralRecord) {
                                    mineralFunctions.showMineral(functions.data.mineralRecord);
                                }     
                            }
                        }
                    }

                ]
            },
            {                                      // kleur
                view:"text", 
                id:"hardheidId",
                name: 'hardheid',
                type: 'hidden'
            },
            {
                view:"text", 
                id:"formuleTxtId",
                name: 'formule',
                type: 'hidden'
            }
        ]
    };

    return mineralForm;

});