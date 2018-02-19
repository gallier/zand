define([
	"app",

], function(app){

	//configuration
	var zandFunctions = {
	

		  showZand(record) {
          if ($$('zandFormId').isVisible()) {       // hide form if visVsible
                $$('zandFormId').hide(); 
                $$('zandPreview').show();    
          }

          var zandImgUrl = 'user_resources/zanden/'+ record.imgurl;
          var zandInfoStr = '<ul class="nobullet">';
          zandInfoStr += '<li><span class="label">Naam:</span> <span class="item">' + record.naam + '</span></li>';
          zandInfoStr += '<li><span class="label">Vindplaats:</span> <span class="item">' + record.land;
          zandInfoStr += ': ' + record.vindplaats + '</span></li>';
          zandInfoStr += '</ul>';

          webix.delay(function(){                   // delay to show preview
              if (record.imgurl) {
                  document.querySelector('#zandPreviewItem img').setAttribute('src', zandImgUrl);
              }
              document.querySelector('#zandInfo').innerHTML = zandInfoStr;
          }, 500);
          
          //console.log(zandImgUrl, zandInfoStr);
		  },

      showFullImg(record) {

          console.log('showFullImg', record, record.imgurl)
      }

	}

	return zandFunctions;
});