/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-displaytable-picture-webp-setclasses !*/
!function(e,n,t){function a(e,n){return typeof e===n}function o(){var e,n,t,o,A,i,s;for(var r in d)if(d.hasOwnProperty(r)){if(e=[],n=d[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,A=0;A<e.length;A++)i=e[A],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),f.push((o?"":"no-")+s.join("-"))}}function A(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?p.className.baseVal=n:p.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)c(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var a=e.split("."),o=Modernizr[a[0]];if(2==a.length&&(o=o[a[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),A([(n&&0!=n?"":"no-")+a.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=s(h?"svg":"body"),e.fake=!0),e}function l(e,t,a,o){var A,i,l,f,d="modernizr",u=s("div"),c=r();if(parseInt(a,10))for(;a--;)l=s("div"),l.id=o?o[a]:d+(a+1),u.appendChild(l);return A=s("style"),A.type="text/css",A.id="s"+d,(c.fake?c:u).appendChild(A),c.appendChild(u),A.styleSheet?A.styleSheet.cssText=e:A.appendChild(n.createTextNode(e)),u.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=p.style.overflow,p.style.overflow="hidden",p.appendChild(c)),i=t(u,e),c.fake?(c.parentNode.removeChild(c),p.style.overflow=f,p.offsetHeight):u.parentNode.removeChild(u),!!i}var f=[],d=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr,Modernizr.addTest("picture","HTMLPictureElement"in e);var c,p=n.documentElement,h="svg"===p.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;c=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),u._l={},u.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},u._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,a;for(e=0;e<t.length;e++)(a=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){u.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,t){function a(n){var a=n&&"load"===n.type?1==o.width:!1,A="webp"===e;i(e,A&&a?new Boolean(a):a),t&&t(n)}var o=new Image;o.onerror=a,o.onload=a,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var a=0;a<n.length;a++)e(n[a].name,n[a].uri)})});var g=u.testStyles=l;g("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var n,t=e.childNodes;n=t[0].offsetLeft<t[1].offsetLeft,Modernizr.addTest("displaytable",n,{aliases:["display-table"]})},2),o(),A(f),delete u.addTest,delete u.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);