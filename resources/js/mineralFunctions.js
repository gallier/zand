define([
	"app",
  "resources/js/functions"
], function(app, functions){

	//configuration
	var mineralFunctions = {
	
	   showMineral(record) {
			    var mineralImgUrl = 'user_resources/mineralen/'+ record.imgurl;
          var mineralInfoStr = '<ul class="nobullet mineralInfoUl">';
          mineralInfoStr += '<li><span class="label">Naam:</span> <span class="mineralItem"><b>' + record.mineraal + '</b></span></li>';
          mineralInfoStr += '<li><span class="label">Formule:</span> <span class="mineralItem">' + record.formule + '</span></li>';
          mineralInfoStr += '<li><span class="label">Groep:</span> <span class="mineralItem">' + record.groep + '</span></li>';
          mineralInfoStr += '<li><span class="label">Systeem:</span> <span class="mineralItem">' + record.systeem + '</span></li>';
          mineralInfoStr += '<li><span class="label">Hardheid:</span> <span class="mineralItem">' + record.hardheid + '</span></li>';
          mineralInfoStr += '<li><span class="label">Kleur:</span> <span class="mineralItem">' + record.kleur + '</span></li>';
          var info = record.info.replace(/[\r\n]/g, '<br />');
          mineralInfoStr += '<li><span class="label">Extra info:</span> <span class="mineralItem">' + info + '</span></li>';
          if (record.link) {
                if (record.link.length > 64) {
                    var link = record.link.substr(0,60) + '...';
                }
                else {
                    var link = record.link;
                }
          }
          else {
                var link = '&nbsp;';
          }
          mineralInfoStr += '<li><span class="label">Externe link:</span> <span class="mineralItem"><a href="' + record.link + '" target="_blank">' + link + '</a></span></li>';
          mineralInfoStr += '<li><span class="label">Afb. info:</span> <span class="mineralItem" title=' + record.mineraal_id + '><input class="imgInfoBtn" type="button" value="Informatie over de afbeelding"></span></li>';
          mineralInfoStr += '</ul>';

          if ($$('mineralPreview').isVisible()) {
                // + + + + + + + + + + + image & info + + + + + + + + + + 
                document.querySelector('#mineralPreviewItem img').setAttribute('src', mineralImgUrl); 
                $$('mineralInfo').setHTML(mineralInfoStr);

                // + + + + + + + + + + + image info + + + + + + + + + + 
                document.querySelector('.imgInfoBtn').addEventListener('click', function() {
                    if (record.mineraal_id > 0) {
                        webix.ajax().post('resources/php/get_imginfo.php?mineraal_id=' + record.mineraal_id, function (jsondata){
                            functions.data.imgInfo = JSON.parse(jsondata);
                            if (functions.data.imgInfo != null) {
                                webix.alert({
                                    title:"Informatie over de afbeelding",
                                    ok:"Sluiten",
                                    text: functions.data.imgInfo,
                                    width: 420
                                });
                            }
                            else {
                                webix.message("Geen informatie over de afbeelding.");
                            }
                            //console.log('getImageInfo', record.mineraal_id, jsondata, functions.data.imgInfo) 
                        });
                    }
                });
          }     
		  }


	}

	return mineralFunctions;
});