(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{331:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},332:function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var o={};function r(e){e.forEach((function(e){if(--o[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}}))}e.exports=function(e,t){for(var n,i=void 0===t?{}:t,a=i.replace,s=void 0!==a&&a,l=i.prepend,c=void 0!==l&&l,p=i.prefix,d=void 0===p?"s":p,u=[],f=0;f<e.length;f++){var m=e[f],v=m[0],h=m[1],g=m[2],b=m[3],x=""+d+v+"-"+f;if(u.push(x),!o[x]||s){o[x]=1;var y=document.getElementById(x),k=!1;y||(k=!0,(y=document.createElement("style")).setAttribute("type","text/css"),y.id=x,g&&y.setAttribute("media",g));var _=h;b&&"function"==typeof btoa&&(_+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(b),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)}))))+"*/",_+="\n/*# sourceURL="+b.file+"?"+x+"*/"),"textContent"in y?y.textContent=_:y.styleSheet.cssText=_,k&&(c?document.head.insertBefore(y,document.head.childNodes[0]):document.head.appendChild(y))}else o[x]++}return r.bind(null,u)}},333:function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var o=n(28),r=n(127),i=function(){return this&&"object"==typeof this.window}();e.exports=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=o.useContext(r).insertCss;if(!a)throw new Error('Please provide "insertCss" function by StyleContext.Provider');var s=function(){var e=a.apply(void 0,t);return function(){setTimeout(e,0)}};i?o.useEffect(s,[]):s()}},334:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,r=n(333),i=n.n(r),a=n(28),s=n.n(a),l=(n(130),n(339)),c=n.n(l);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t,n,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var s=new Array(a),l=0;l<a;l++)s[l]=arguments[l+3];t.children=s}if(t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function u(e){var t=e.title,n=e.html,o=e.tickets;i()(c.a);var r={};return o&&(r.id="aviasales"),d("div",{className:c.a.root},void 0,s.a.createElement("div",p({className:c.a.container},r),d("div",{dangerouslySetInnerHTML:{__html:t}}),d("div",{dangerouslySetInnerHTML:{__html:n}})))}u.defaultProps={tickets:!1}},335:function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},336:function(e,t,n){"use strict";var o=n(333),r=n.n(o),i=n(28),a=n.n(i),s=(n(130),n(341)),l=n.n(s),c=n(343),p=n.n(c),d=n(345),u=n.n(d),f=n(61);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e){var t=e.to,n=e.children,o=v(e,["to","children"]);return a.a.createElement("a",m({href:t},o,{onClick:function(t){return function(e,t){e.onClick&&e.onClick(t),!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)&&function(e){return 0===e.button}(t)&&!0!==t.defaultPrevented&&(t.preventDefault(),0===e.to.indexOf("http://")||0===e.to.indexOf("https://")?window.location.replace(e.to):f.a.push(e.to))}(e,t)}}),n)}h.defaultProps={onClick:null};var g,b,x=n(335),y=n.n(x),k=n(347),_=n.n(k);function w(e,t,n,o){g||(g="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),s=0;s<i;s++)a[s]=arguments[s+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:g,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function N(){return r()(_.a),w("div",{className:_.a.root,role:"navigation"},void 0,w(h,{className:_.a.link,to:"/about"},void 0,"About"),w(h,{className:_.a.link,to:"/contact"},void 0,"Contact"),w("span",{className:_.a.spacer},void 0," | "),w(h,{className:_.a.link,to:"/login"},void 0,"Log in"),w("span",{className:_.a.spacer},void 0,"or"),w(h,{className:y()(_.a.link,_.a.highlight),to:"/register"},void 0,"Sign up"))}function C(e,t,n,o){b||(b="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),s=0;s<i;s++)a[s]=arguments[s+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:b,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var S=C(N,{});function z(){return r()(u.a),C("div",{className:u.a.root},void 0,C("div",{className:u.a.container},void 0,S,C(h,{className:u.a.brand,to:"/"},void 0,C("span",{className:u.a.brandTxt},void 0,"КЁНИГтревел")),C("div",{className:u.a.banner,id:"header-banner"},void 0,C("h1",{className:u.a.bannerTitle},void 0,"Подборка лучших экскурсий по Калининграду и области"),C("p",{className:u.a.bannerDesc},void 0," "))))}var A,O=n(334),F=n(349),j=n.n(F);function H(e,t,n,o){A||(A="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),s=0;s<i;s++)a[s]=arguments[s+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:A,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function U(){return r()(j.a),H("div",{className:j.a.root},void 0,H("div",{className:j.a.container},void 0,H("a",{className:j.a.link,href:"https://gitter.im/koenigtravel/community"},void 0,"Задать вопрос"),H("span",{className:j.a.spacer},void 0,"|"),H("a",{className:j.a.link,href:"https://github.com/koenigtravel/www/issues/new"},void 0,"Сообщить об ошибке")))}var P,E,L=n(351),R=n.n(L);function T(e,t,n,o){P||(P="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),s=0;s<i;s++)a[s]=arguments[s+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:P,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function q(){return r()(R.a),T("header",{className:R.a.root},void 0,T("div",{className:y()(R.a.navContainer)},void 0,T("nav",{},void 0,T("div",{className:R.a.title},void 0,"Туры"),T("ul",{},void 0,T("li",{},void 0,T(h,{className:R.a.link,to:"https://c18.travelpayouts.com/click?shmarker=91556&promo_id=770&source_type=link&type=click"},void 0,"Travelata")),T("li",{},void 0,T(h,{className:R.a.link,to:"https://tp.media/r?marker=91556&p=660&u=https%3A%2F%2Flevel.travel%2Fsearch%2FMoscow-RU-to-Kaliningrad-RU-departure-25.05.2021-for-4-nights-2-adults-0-kids-1..5-stars"},void 0,"Level.travel")))),T("nav",{},void 0,T("div",{className:R.a.title},void 0,"Отели"),T("ul",{},void 0,T("li",{},void 0,T(h,{className:R.a.link,to:"https://tp.media/r?marker=91556&p=4953&u=https%3A%2F%2Fmirturbaz.ru%2Frussia%2Fkaliningradskaya%3Fcount_guests%3D2"},void 0,"Мир Турбаз")))),T("nav",{},void 0,T("div",{className:R.a.title},void 0,"Экскурсии"),T("ul",{},void 0,T("li",{},void 0,T(h,{className:R.a.link,to:"https://tp.media/r?marker=91556&p=652&u=https%3A%2F%2Fexperience.tripster.ru%2Fexperience%2FKaliningrad%2F"},void 0,"Tripster")),T("li",{},void 0,T(h,{className:R.a.link,to:"https://tp.media/r?marker=91556&p=656&u=https%3A%2F%2Fwww.sputnik8.com%2Fru%2Fkaliningrad"},void 0,"Sputnik")))),T("nav",{},void 0,T("div",{className:R.a.title},void 0,"Транспорт"),T("ul",{},void 0,T("li",{},void 0,T(h,{className:R.a.link,to:"https://c135.travelpayouts.com/click?shmarker=91556&promo_id=4070&source_type=link&type=click"},void 0,T("span",{className:R.a.spacer},void 0,"·"),"Poezd.ru"))))),T("div",{className:R.a.container},void 0,T("span",{className:R.a.text},void 0,"© koenigtravel.ru")))}function $(e,t,n,o){E||(E="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),s=0;s<i;s++)a[s]=arguments[s+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:E,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"a",(function(){return J}));var I=$(z,{}),M=$(O.a,{html:"",title:"<a href='https://c100.travelpayouts.com/click?shmarker=91556&promo_id=4732&source_type=link&type=click' target='_blank'><h2>Подберите лучшие билеты</h2></a>",tickets:!0}),K=$(U,{}),G=$(q,{});function J(e){var t=e.children;return r()(p.a,l.a),a.a.createElement(a.a.Fragment,null,I,t,M,K,G)}},339:function(e,t,n){var o=n(340),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},340:function(e,t,n){(t=e.exports=n(331)(!1)).push([e.i,':root{--font-family-base:"Open Sans","HelveticaNeue-Light",sans-serif;--max-content-width:1020px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1GRKg{background:#f5f5f5;color:#333}._1i8-u{margin:0 auto;padding:20px 8px;max-width:1020px;max-width:var(--max-content-width);text-align:center;font-size:1em}',""]),t.locals={root:"_1GRKg",container:"_1i8-u"}},341:function(e,t,n){var o=n(342),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},342:function(e,t,n){(e.exports=n(331)(!1)).push([e.i,"html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",""])},343:function(e,t,n){var o=n(344),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},344:function(e,t,n){(e.exports=n(331)(!1)).push([e.i,':root{--font-family-base:"Open Sans","HelveticaNeue-Light",sans-serif;--max-content-width:1020px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}html{color:#222;font-weight:100;font-size:1em;font-family:Open Sans,HelveticaNeue-Light,sans-serif;font-family:var(--font-family-base);line-height:1.375}body{margin:0}a{color:#5956f3;text-decoration:none}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:rgba(0,0,0,0)!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}',""])},345:function(e,t,n){var o=n(346),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},346:function(e,t,n){(t=e.exports=n(331)(!1)).push([e.i,':root{--font-family-base:"Open Sans","HelveticaNeue-Light",sans-serif;--max-content-width:1020px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}:root{--brand-color:#61dafb}.O9oW9{background:#373277;color:#fff}.qQ2mF{margin:0 auto;padding:20px 0;max-width:1020px;max-width:var(--max-content-width)}._2oS_y{text-decoration:none;font-size:1.75em}._230aH{margin-left:10px}._2AXOj{text-align:center;margin-top:28px}._3dmwX{margin:0;padding:5px;font-weight:400;font-size:1.3em;line-height:1em}.I2eY9{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}',""]),t.locals={root:"O9oW9",container:"qQ2mF",brand:"_2oS_y",brandTxt:"_230aH",banner:"_2AXOj",bannerTitle:"_3dmwX",bannerDesc:"I2eY9"}},347:function(e,t,n){var o=n(348),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},348:function(e,t,n){(t=e.exports=n(331)(!1)).push([e.i,"._2gcJx{float:right;margin:6px 0 0}.Ntl35{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}.Ntl35,.Ntl35:active,.Ntl35:visited{color:hsla(0,0%,100%,.6)}.Ntl35:hover{color:#fff}._2UNlq{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15);color:#fff}._2UNlq:hover{background:rgba(0,0,0,.3)}._3vZVG{color:hsla(0,0%,100%,.3)}",""]),t.locals={root:"_2gcJx",link:"Ntl35",highlight:"_2UNlq",spacer:"_3vZVG"}},349:function(e,t,n){var o=n(350),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},350:function(e,t,n){(t=e.exports=n(331)(!1)).push([e.i,':root{--font-family-base:"Open Sans","HelveticaNeue-Light",sans-serif;--max-content-width:1020px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1QFug{background:#f5f5f5;color:#333}._1aTkE{margin:0 auto;padding:20px 8px;max-width:1020px;max-width:var(--max-content-width);text-align:center;font-size:1em}._2iH7A,._2iH7A:active,._2iH7A:hover,._2iH7A:visited{color:#333;text-decoration:none}._2iH7A:hover{text-decoration:underline}._3GZrp{padding-right:15px;padding-left:15px}',""]),t.locals={root:"_1QFug",container:"_1aTkE",link:"_2iH7A",spacer:"_3GZrp"}},351:function(e,t,n){var o=n(352),r=n(332),i="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return i},t._getCss=function(){return""+o},t._insertCss=function(e){return r(i,e)}},352:function(e,t,n){(t=e.exports=n(331)(!1)).push([e.i,':root{--font-family-base:"Open Sans","HelveticaNeue-Light",sans-serif;--max-content-width:1020px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}._1UUMy{background:#333;color:#fff}._3dfAC{margin:0 auto;padding:20px 15px;max-width:1020px;max-width:var(--max-content-width);text-align:center}._7AOUA{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;background:#e7ecfe}._11Mp8{font-weight:500;font-size:13px;line-height:15px;text-transform:uppercase;color:#787888}._3ReUN{color:hsla(0,0%,100%,.5)}._297xE{color:hsla(0,0%,100%,.3)}._3qHjF,._3ReUN{padding:2px 5px;font-size:1em}._3qHjF,._3qHjF:active,._3qHjF:visited{color:rgba(155,155,182,.8);text-decoration:none;-webkit-transition:color .3s ease-in-out 0s;-o-transition:color .3s ease-in-out 0s;transition:color .3s ease-in-out 0s}._3qHjF:hover{color:#0074c2}nav{display:block;margin-right:88px;padding:44px 0}nav ul{list-style:none;margin:24px 0 0}nav ul,nav ul li{padding:0;border:0}nav ul li{margin:0}',""]),t.locals={root:"_1UUMy",container:"_3dfAC",navContainer:"_7AOUA",title:"_11Mp8",text:"_3ReUN",spacer:"_297xE",link:"_3qHjF"}}}]);
//# sourceMappingURL=home~not-found.ff80df80.chunk.js.map