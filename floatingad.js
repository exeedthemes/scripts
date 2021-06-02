if(typeof jQuery === 'undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
   	jqTag.type = 'text/javascript';
   	jqTag.src = 'https://code.jquery.com/jquery-1.7.2.min.js';
    jqTag.onload = jq_show;
    headTag.appendChild(jqTag);
} else {
	jq_show();
}
function jq_show() {
	jQuery(document).ready(function() {
	if(typeof window.yxsc=='undefined') {
		jQuery('body').prepend('<div id="smx365" style="position:fixed;left:0px;width:100px;height:600px;box-sizing:content-box;border:2px solid #000;z-index:999999999999;background-color:#fff;padding:0;"><div style="display:block;font-family:Arial;font-size:13px;width:160px;height:15px;line-height:13px;border:none;margin:0;padding:0;background-color:#171258;color:#ffffff;z-index:999999999999;"><div style="float:left;text-align:center;width:145px;height:15px;border:none;margin:0;padding:0;display:table-cell;vertical-align:middle;font-family:Arial;font-size:13px;line-height:13px;"><a href="/p/contact.html" style="color:#fff;text-decoration:underline;border:none;margin:0;padding:0;" target="_blank">Advertise Here!</a></div><div style="float:right;width:15px;height:15px;border:none;margin:0;padding:0;display:table-cell;vertical-align:middle;line-height:13px;"><img src="//ylx-i.advertica-cdn2.com/but_close.png?1360094895" width="13" height="13" onclick="document.getElementById(\'smx365\').style.display=\'none\';" style="cursor:pointer;border:none;margin:0;padding:0;" /></a></div></div><iframe src="https://www.youtube.com/embed/5Xbs60BMeRU" frameborder="0" scrolling="no" width="160" height="600" marginwidth="0" marginheight="0"></iframe></div>');
			    	jQuery('#smx365').css('bottom', '-620px');
			var space;
	    	space=(jQuery(window).height() - 615) / 2;			jQuery('#smx365').animate({bottom: space}, 5000);
                window.yxsc=true;
	}
    });
}
