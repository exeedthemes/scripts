//Ссылка для редиректа пользователя в Play Market
const linkForPopUp = "https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US";
//Ссылка для перехода на новую страницу в браузере
const linkForPage = "https://webref.ru/course/html-basics";
document.addEventListener('click', () => {
	let popUnder = window.open(linkForPopUp, '_blank', "width=1360,height=720");
	window.location.assign(linkForPopUp);
	window.open().close();
	popUnder.focus();
});
