function convert() {
    var ele1 = document.getElementById("somewhere1");
    var replaced;
    replaced = ele1.value;
    replaced = replaced.replace("&amp;" , /&/ig);
    replaced = replaced.replace("&lt;" , /</ig);
    replaced = replaced.replace("&gt;" , />/ig);
    replaced = replaced.replace("&quot;" , /"/ig);
    replaced = replaced.replace("&#039;" , /'/ig);
    replaced = replaced.replace("&plusmn;" , /&#177;/ig);
    replaced = replaced.replace("&copy;" , /&#169;/ig);
    replaced = replaced.replace("&reg;" , /&#174;/ig);
    replaced = replaced.replace("ya'll" , /ya'll/ig);
    ele1.value = replaced;
	document.getElementById("button-link1")
        .style.display = "inline-block";
    document.getElementById("btn_clear1")
        .style.display = "inline-block";
}
function cdClear() {
  var wtarea = document.getElementById('somewhere1');
  wtarea.value = '';
  document.getElementById("btnInfo1")
        .style.display = "none",document.getElementById("button-link1")
        .style.display = "none"
}
