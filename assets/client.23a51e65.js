!function(e){function r(r){for(var n,i,c=r[0],u=r[1],l=r[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(r);p.length;)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={2:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({0:"about~experiences~home~not-found",1:"about",3:"experiences",4:"home",5:"not-found"}[e]||e)+"."+{0:"3bcc7c14",1:"5edd0125",3:"3de96a62",4:"33f5f158",5:"9a19219b"}[e]+".chunk.js"}(e);var u=new Error;a=function(r){c.onerror=c.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,t[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(r)},i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/assets/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=r,c=c.slice();for(var l=0;l<c.length;l++)r(c[l]);var s=u;a.push([131,6]),t()}({131:function(e,r,t){t(132),e.exports=t(329)},329:function(e,r,t){"use strict";t.r(r);t(318);var n,o=t(28),a=t.n(o),i=t(91),c=t.n(i),u=(t(323),t(128)),l=t.n(u),s=t(62),f=(t(130),t(127)),p=t.n(f),d=a.a.createContext({fetch:function(){throw new Error("Fetch method not initialized.")}});function h(e,r,t,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(r||0===i||(r={children:void 0}),1===i)r.children=o;else if(i>1){for(var c=new Array(i),u=0;u<i;u++)c[u]=arguments[u+3];r.children=c}if(r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function v(e){var r=e.context,t=e.insertCss,n=e.children;return h(p.a.Provider,{value:{insertCss:t}},void 0,h(d.Provider,{value:{context:r}},void 0,a.a.Children.only(n)))}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var w=function(e,r){var t=r.baseUrl,n=r.cookie,o=r.schema,a=r.graphql,i={method:"POST",mode:t?"cors":"same-origin",credentials:t?"include":"same-origin",headers:b({Accept:"application/json","Content-Type":"application/json"},n?{Cookie:n}:null)};return function(r,n){var c,u,l;return regeneratorRuntime.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(c=r.startsWith("/graphql"),!(o&&a&&c)){s.next=7;break}return u=JSON.parse(n.body),s.next=5,regeneratorRuntime.awrap(a(o,u.query,{request:{}},null,u.variables));case 5:return l=s.sent,s.abrupt("return",Promise.resolve({status:l.errors?400:200,json:function(){return Promise.resolve(l)}}));case 7:return s.abrupt("return",c||r.startsWith("/api")?e("".concat(t).concat(r),b({},i,{},n,{headers:b({},i.headers,{},n&&n.headers)})):e(r,n));case 8:case"end":return s.stop()}}))}},g=t(61);function O(e,r,t,n,o){var a=document.head.querySelector("".concat(e,"[").concat(r,'="').concat(t,'"]'));if((!a||a.getAttribute(n)!==o)&&(a&&a.parentNode.removeChild(a),"string"==typeof o)){var i=document.createElement(e);i.setAttribute(r,t),i.setAttribute(n,o),document.head.appendChild(i)}}var P,j={path:"",children:[{path:"",load:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,360))}},{path:"/experiences",load:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,361))}},{path:"/about",load:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,362))}},{path:"(.*)",load:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,363))}}],action:function(e){var r,t;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.next,n.next=3,regeneratorRuntime.awrap(r());case 3:return(t=n.sent).title="".concat(t.title||"КЁНИГтревел"," - www.koenigtravel.ru"),t.description=t.description||"Экскурсии в Калининграде: достопримечательности, гастро, куршская коса.",n.abrupt("return",t);case 7:case"end":return n.stop()}}))}},x=new(t(129).a)(j,{resolveRoute:function(e,r){return"function"==typeof e.route.load?e.route.load().then((function(t){return t.default(e,r)})):"function"==typeof e.route.action?e.route.action(e,r):void 0}});function k(e,r,t,n){P||(P="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),1===a)r.children=n;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];r.children=i}if(r&&o)for(var u in o)void 0===r[u]&&(r[u]=o[u]);else r||(r=o||{});return{$$typeof:P,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}var S=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=r.map((function(e){return e._insertCss()}));return function(){n.forEach((function(e){return e()}))}},C={fetch:w(fetch,{baseUrl:window.App.apiUrl})},E=document.getElementById("app"),R=g.a.location,A={};function _(e,r){var t,n,o;return regeneratorRuntime.async((function(a){for(;;)switch(a.prev=a.next){case 0:return A[R.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===r&&delete A[e.key],R=e,t=!r,a.prev=4,C.pathname=e.pathname,C.query=l.a.parse(e.search),a.next=9,regeneratorRuntime.awrap(x.resolve(C));case 9:if(n=a.sent,R.key===e.key){a.next=12;break}return a.abrupt("return");case 12:if(!n.redirect){a.next=15;break}return g.a.replace(n.redirect),a.abrupt("return");case 15:o=t?c.a.hydrate:c.a.render,o(k(v,{context:C,insertCss:S},void 0,n.component),E,(function(){if(t){window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var r=document.getElementById("css");r&&r.parentNode.removeChild(r)}else{var o,a;document.title=n.title,o="description",a=n.description,O("meta","name",o,"content",a);var i=0,c=0,u=A[e.key];if(u)i=u.scrollX,c=u.scrollY;else{var l=e.hash.substr(1);if(l){var f=document.getElementById(l);f&&(c=window.pageYOffset+f.getBoundingClientRect().top)}}window.scrollTo(i,c),window.ga&&window.ga("send","pageview",Object(s.b)(e))}})),a.next=25;break;case 19:a.prev=19,a.t0=a.catch(4),a.next=23;break;case 23:console.error(a.t0),t||R.key!==e.key||(console.error("RSK will reload your page after error"),window.location.reload());case 25:case"end":return a.stop()}}),null,null,[[4,19]])}g.a.listen(_),_(R)},61:function(e,r,t){"use strict";var n=t(62);r.a=Object(n.a)()}});
//# sourceMappingURL=client.23a51e65.js.map