/*! jquery-plugin to create popunder in major browsers., 0.3.1 https://github.com/hpbuniat/jquery-popunder
Copyright (c) 2019 Hans-Peter Buniat, BSD-3-Clause license */

!function(t,e,n,i,o){"use strict";t.popunder=function(n,i,o,r){var s=t.popunder.helper;if(s.init(),typeof Cookies!==s.u&&(s.c=Cookies.noConflict()),0===arguments.length?n=e.aPopunder:typeof n!==s.fu&&t(n).is("a")&&(r=t.Event("click",{target:n}),n=e.aPopunder),o||i)s.bindEvents(n,i,o);else if(n=typeof n===s.fu?n(r):n,s.reset(),typeof n!==s.u)do{s.queue(n,r),s.first=!1}while(n.length>0);return t},t.popunder.helper={TIMEOUT:"timeout",SWITCHER:"switcher",SIMPLE:"simple",_top:e.self,lastWin:null,lastTarget:null,last:!1,first:!0,b:"about:blank",u:"undefined",fu:"function",o:null,c:null,du:"__jqpu",ua:{ie:/msie|trident/i.test(i.userAgent),oldIE:/msie/i.test(i.userAgent),edge:/edge/i.test(i.userAgent),ff:/firefox/i.test(i.userAgent),o:/opera/i.test(i.userAgent),g:/chrome/i.test(i.userAgent),w:/webkit/i.test(i.userAgent),linux:/linux/i.test(i.userAgent),touch:"ontouchstart"in o.documentElement||/bada|blackberry|iemobile|android|iphone|ipod|ipad/i.test(i.userAgent)},m:!1,ns:"jqpu",def:{window:{toolbar:0,scrollbars:1,location:1,statusbar:1,menubar:0,resizable:1,width:(n.availWidth-122).toString(),height:(n.availHeight-122).toString(),screenX:0,screenY:0,left:0,top:0},name:"__pu",cookie:"__puc",blocktime:!1,skip:{},cb:null,popup:!1},testStack:function(t,e){var n,i=!1;for(n in t)t.hasOwnProperty(n)&&t[n]&&e[n]&&(i=t[n]);return i},init:function(){var t=this;return t.m||(t.m=t.testStack({ff:t.TIMEOUT,ie:t.SWITCHER,edge:t.SWITCHER,w:t.SWITCHER,g:t.SWITCHER,o:t.SWITCHER,linux:t.SWITCHER,touch:t.SWITCHER},t.ua)),t},queue:function(t,e){var n=!1,i=this;if(t.length>0)for(;!1===n;){var o=t.shift();n=!o||i.open(o[0],o[1]||{},t.length,e)}return 0===t.length&&(i.bg(),i.m!==i.TIMEOUT&&i.href(!0,i)),i},bindEvents:function(e,n,i){var o=this,r="string",s=function(e){return t.popunder(e.data.stack,!1,!1,e),!0};return n&&o.m!==o.SWITCHER&&(n=typeof n===r?t(n):n).on("submit."+o.ns,{stack:e},s),i&&(i=typeof i===r?t(i):i).on("click."+o.ns,{stack:e},s),o},cookieCheck:function(t,e){var n=this,i=n.rand(e.cookie,!1),o=n.c.get(i),r=!1;return o?-1===o.indexOf(t)?o+=t:r=!0:o=t,n.c.set(i,o,{expires:new Date((new Date).getTime()+6e4*e.blocktime)}),r},rand:function(t,e){var n=this;return(t||n.du)+(!1===e?"":Math.floor(89999999*Math.random()+1e7).toString()).replace(".","")},open:function(n,i,o,r){var s,u=this,a=t.extend(!0,{},u.def,i);if(u.o=n,top!==e.self)try{top.document.location.toString()&&(u._top=top)}catch(t){}return!u.testStack(a.skip,u.ua)&&((!a.blocktime||typeof u.c!==u.fu||!u.cookieCheck(n,a))&&(n!==u.du&&(u.lastTarget=n,!0===u.first&&u.m===u.SWITCHER?(r&&typeof r.target!==u.u&&(s=u.getElementUrl(r,void 0),r.preventDefault()),u.switcher.switchWindow(s,u.o,u.rand(a.name,!i.name))):!0!==u.first&&!0!==u.isMultiple()||(u.m===u.TIMEOUT?e.setTimeout(function(t){return function(){try{t.lastWin=e.open(t.o,t.rand(a.name,!i.name),t.getOptions(a.window))||t.lastWin,t.href(o,t),typeof a.cb===t.fu&&a.cb(t.lastWin)}catch(t){}}}(t.extend(!0,{},u)),0):u.lastWin=u._top.window.open(u.o,u.rand(a.name,!i.name),u.getOptions(a.window))||u.lastWin),u.m!==u.TIMEOUT&&(u.href(o,u),typeof a.cb===u.fu&&a.cb(u.lastWin))),!0))},bg:function(){var t=this;return(t.TIMEOUT===t.m||t.lastTarget)&&(t.m===t.SIMPLE?(t.switcher.simple(t),e.setTimeout(function(){t.switcher.simple(t)},500)):t.m===t.TIMEOUT&&t.switcher.timeout()),t},switcher:{simple:function(t){t.ua.oldIE?(t.lastWin.blur(),t.lastWin.opener.window.focus(),e.self.window.focus(),e.focus()):o.focus()},timeout:function(){e.setTimeout(function(){var t=e.open("","_self");t&&!t.closed&&t.focus()},0)},switchWindow:function(t,n,i){e.open(t,i),e.location.assign(n)}},isMultiple:function(){var t=this;return t.m===t.TIMEOUT||t.m===t.SIMPLE},href:function(t,e){return t&&e.lastTarget&&e.lastWin&&e.lastTarget!==e.b&&e.lastTarget!==e.o&&(e.lastWin.document.location.href=e.lastTarget),e},getElementUrl:function(e,n){var i,o,r=this,s=":submit, button",u=t(e.target),a=typeof n===r.u;return u.is("a")&&a?(i=u,o=u.attr("href")):!0!==u.is(s)?i=(u=u.parents(s)).parents("form"):(i=t(e.target.form),!u.is(s)||i&&i.length||(i=u.parents("form"))),o||0===u.length||0===i.length||"get"!==(i.prop("method")+"").toLowerCase()||"_blank"!==i.attr("target")&&!a||(o=i.attr("action")+"/?"+i.serialize()),o},reset:function(){var t=this;return t.last=!1,t.first=!0,t.lastTarget=t.lastWin=null,t},unbind:function(n,i){var o=this,r="string";return o.reset(),n&&(n=typeof n===r?t(n):n).off("submit."+o.ns),i&&((i=typeof i===r?t(i):i).off("click."+o.ns).next(".jq-pu object").remove(),i.unwrap()),e.aPopunder=[],o},getOptions:function(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&n.push(e+"="+t[e]);return n.join(",")}}}(jQuery,window,screen,navigator,document);
