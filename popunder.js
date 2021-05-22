<script>
var popunder=new Array()


popunder[0]="http://www.lifietoday.us"

// Specify the width and height of new popunder window (in pixels).

var width = '700';
var height = '100';

var p = 'scrollbars=no,resizable=yes,toolbar=no,' + //these are obvious variables. set "yes" or "no".
'menubar=yes,status=yes,location=no,left=85,top=20,height=' + //the location on the user's screen
height + ',width=' + width;

// Load new PopUnder only once per browser session? (0=no, 1=yes)
// Putting 0 will cause the Popunder to load every time page is loaded
// Specifying 1 will cause it to load only once per session
var one_time=1

function get_cookie(Name) {
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { // if the cookie exists
offset += search.length
end = document.cookie.indexOf(";", offset); // set the index of beginning value
if (end == -1) // set the index of the end of cookie value
end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}
function loadornot(){
if (get_cookie('popunder')==''){
load_pop_power()
document.cookie="popunder=yes"
}
}
function load_pop_power(){
win2=window.open(popunder[Math.floor(Math.random()*(popunder.length))],"bw",p)
win2.blur()
window.focus()
}
if (one_time==0)
load_pop_power()
else
loadornot()
</script>
