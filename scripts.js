/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;/*!
 * Material Design for Bootstrap 4
 *   Version: MDB FREE 4.19.2
 * 
 * 
 *   Copyright: Material Design for Bootstrap
 *   https://mdbootstrap.com/
 * 
 *   Read the license: https://mdbootstrap.com/general/license/
 * 
 * 
 *   Documentation: https://mdbootstrap.com/
 * 
 *   Getting started: https://mdbootstrap.com/docs/jquery/getting-started/download/
 * 
 *   Tutorials: https://mdbootstrap.com/education/bootstrap/
 * 
 *   Templates: https://mdbootstrap.com/templates/
 * 
 *   Support: https://mdbootstrap.com/support/
 * 
 *   Contact: office@mdbootstrap.com
 * 
 *   Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js, jquery.easing.js, velocity.min.js, chart.js, wow.js, scrolling-navbar.js, waves.js, forms-free.js, enhanced-modals.js, treeview.js
 */!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=152)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(59))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0),i=n(15),o=n(28),a=n(50),s=r.Symbol,l=i("wks");t.exports=function(t){return l[t]||(l[t]=a&&s[t]||(a?s:o)("Symbol."+t))}},function(t,e,n){var r=n(0),i=n(26).f,o=n(6),a=n(14),s=n(25),l=n(47),u=n(51);t.exports=function(t,e){var n,c,d,f,h,p=t.target,g=t.global,v=t.stat;if(n=g?r:v?r[p]||s(p,{}):(r[p]||{}).prototype)for(c in e){if(f=e[c],d=t.noTargetGet?(h=i(n,c))&&h.value:n[c],!u(g?c:p+(v?".":"#")+c,t.forced)&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(t.sham||d&&d.sham)&&o(f,"sham",!0),a(n,c,f,t)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(9),i=n(8),o=n(17);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(9),i=n(36),o=n(7),a=n(19),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(31),i=n(13);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(12),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),i=n(15),o=n(6),a=n(4),s=n(25),l=n(37),u=n(21),c=u.get,d=u.enforce,f=String(l).split("toString");i("inspectSource",(function(t){return l.call(t)})),(t.exports=function(t,e,n,i){var l=!!i&&!!i.unsafe,u=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||o(n,"name",e),d(n).source=f.join("string"==typeof e?e:"")),t!==r?(l?!c&&t[e]&&(u=!0):delete t[e],u?t[e]=n:o(t,e,n)):u?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||l.call(this)}))},function(t,e,n){var r=n(24),i=n(61);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,n){var r,i,o,a=n(62),s=n(0),l=n(5),u=n(6),c=n(4),d=n(22),f=n(20),h=s.WeakMap;if(a){var p=new h,g=p.get,v=p.has,m=p.set;r=function(t,e){return m.call(p,t,e),e},i=function(t){return g.call(p,t)||{}},o=function(t){return v.call(p,t)}}else{var y=d("state");f[y]=!0,r=function(t,e){return u(t,y,e),e},i=function(t){return c(t,y)?t[y]:{}},o=function(t){return c(t,y)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(15),i=n(28),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var r=n(75),i=n(31),o=n(16),a=n(11),s=n(43),l=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,c=4==t,d=6==t,f=5==t||d;return function(h,p,g,v){for(var m,y,b=o(h),x=i(b),w=r(p,g,3),S=a(x.length),k=0,C=v||s,M=e?C(h,S):n?C(h,0):void 0;S>k;k++)if((f||k in x)&&(y=w(m=x[k],k,b),t))if(e)M[k]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:l.call(M,m)}else if(c)return!1;return d?-1:u||c?c:M}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),i=n(6);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(9),i=n(46),o=n(17),a=n(10),s=n(19),l=n(4),u=n(36),c=Object.getOwnPropertyDescriptor;e.f=r?c:function(t,e){if(t=a(t),e=s(e,!0),u)try{return c(t,e)}catch(t){}if(l(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e,n){var r=n(39),i=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(18);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(1),i=n(18),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(12),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e,n){var r=n(1),i=n(2)("species");t.exports=function(t){return!r((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(7),i=n(79),o=n(30),a=n(20),s=n(80),l=n(38),u=n(22)("IE_PROTO"),c=function(){},d=function(){var t,e=l("iframe"),n=o.length;for(e.style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),d=t.F;n--;)delete d.prototype[o[n]];return d()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=d(),void 0===e?n:i(n,e)},a[u]=!0},function(t,e,n){var r=n(48),i=n(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},function(t,e,n){var r=n(9),i=n(1),o=n(38);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(15);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(0),i=n(5),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(4),i=n(10),o=n(41).indexOf,a=n(20);t.exports=function(t,e){var n,s=i(t),l=0,u=[];for(n in s)!r(a,n)&&r(s,n)&&u.push(n);for(;e.length>l;)r(s,n=e[l++])&&(~o(u,n)||u.push(n));return u}},function(t,e){t.exports={}},function(t,e,n){var r=n(10),i=n(11),o=n(32),a=function(t){return function(e,n,a){var s,l=r(e),u=i(l.length),c=o(a,u);if(t&&n!=n){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===n)return t||c||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(8).f,i=n(4),o=n(2)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),i=n(29),o=n(2)("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r,i,o=n(68),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,u=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),c=void 0!==/()??/.exec("")[1];(u||c)&&(l=function(t){var e,n,r,i,l=this;return c&&(n=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),u&&(e=l.lastIndex),r=a.call(l,t),u&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),c&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=l},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(4),i=n(63),o=n(26),a=n(8);t.exports=function(t,e){for(var n=i(e),s=a.f,l=o.f,u=0;u<n.length;u++){var c=n[u];r(t,c)||s(t,c,l(e,c))}}},function(t,e,n){t.exports=n(0)},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(1),i=/#|\.prototype\./,o=function(t,e){var n=s[a(t)];return n==u||n!=l&&("function"==typeof e?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},function(t,e,n){var r=n(39),i=n(30);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(10),i=n(58),o=n(40),a=n(21),s=n(66),l=a.set,u=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){l(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,n){"use strict";var r,i=n(9),o=n(0),a=n(5),s=n(4),l=n(76),u=n(6),c=n(14),d=n(8).f,f=n(60),h=n(70),p=n(2),g=n(28),v=o.DataView,m=v&&v.prototype,y=o.Int8Array,b=y&&y.prototype,x=o.Uint8ClampedArray,w=x&&x.prototype,S=y&&f(y),k=b&&f(b),C=Object.prototype,M=C.isPrototypeOf,A=p("toStringTag"),P=g("TYPED_ARRAY_TAG"),_=!(!o.ArrayBuffer||!v),T=_&&!!h&&"Opera"!==l(o.opera),I=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F=function(t){return a(t)&&s(O,l(t))};for(r in O)o[r]||(T=!1);if((!T||"function"!=typeof S||S===Function.prototype)&&(S=function(){throw TypeError("Incorrect invocation")},T))for(r in O)o[r]&&h(o[r],S);if((!T||!k||k===C)&&(k=S.prototype,T))for(r in O)o[r]&&h(o[r].prototype,k);if(T&&f(w)!==k&&h(w,k),i&&!s(k,A))for(r in I=!0,d(k,A,{get:function(){return a(this)?this[P]:void 0}}),O)o[r]&&u(o[r],P,r);_&&h&&f(m)!==C&&h(m,C),t.exports={NATIVE_ARRAY_BUFFER:_,NATIVE_ARRAY_BUFFER_VIEWS:T,TYPED_ARRAY_TAG:I&&P,aTypedArray:function(t){if(F(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(h){if(M.call(S,t))return t}else for(var e in O)if(s(O,r)){var n=o[e];if(n&&(t===n||M.call(n,t)))return t}throw TypeError("Target is not a typed array constructor")},exportProto:function(t,e,n){if(i){if(n)for(var r in O){var a=o[r];a&&s(a.prototype,t)&&delete a.prototype[t]}k[t]&&!n||c(k,t,n?e:T&&b[t]||e)}},exportStatic:function(t,e,n){var r,a;if(i){if(h){if(n)for(r in O)(a=o[r])&&s(a,t)&&delete a[t];if(S[t]&&!n)return;try{return c(S,t,n?e:T&&y[t]||e)}catch(t){}}for(r in O)!(a=o[r])||a[t]&&!n||c(a,t,e)}},isView:function(t){var e=l(t);return"DataView"===e||s(O,e)},isTypedArray:F,TypedArray:S,TypedArrayPrototype:k}},function(t,e,n){"use strict";var r=n(19),i=n(8),o=n(17);t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},function(t,e,n){var r=n(2),i=n(34),o=n(6),a=r("unscopables"),s=Array.prototype;null==s[a]&&o(s,a,i(null)),t.exports=function(t){s[a][t]=!0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(4),i=n(16),o=n(22),a=n(94),s=o("IE_PROTO"),l=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=i(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},function(t,e,n){var r=n(0),i=n(25),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){var r=n(0),i=n(37),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i.call(o))},function(t,e,n){var r=n(35),i=n(27),o=n(49),a=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){e.f=n(2)},function(t,e,n){var r=n(48),i=n(4),o=n(64),a=n(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},function(t,e,n){"use strict";var r=n(3),i=n(93),o=n(60),a=n(70),s=n(42),l=n(6),u=n(14),c=n(2),d=n(24),f=n(40),h=n(67),p=h.IteratorPrototype,g=h.BUGGY_SAFARI_ITERATORS,v=c("iterator"),m=function(){return this};t.exports=function(t,e,n,c,h,y,b){i(n,e,c);var x,w,S,k=function(t){if(t===h&&_)return _;if(!g&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},C=e+" Iterator",M=!1,A=t.prototype,P=A[v]||A["@@iterator"]||h&&A[h],_=!g&&P||k(h),T="Array"==e&&A.entries||P;if(T&&(x=o(T.call(new t)),p!==Object.prototype&&x.next&&(d||o(x)===p||(a?a(x,p):"function"!=typeof x[v]&&l(x,v,m)),s(x,C,!0,!0),d&&(f[C]=m))),"values"==h&&P&&"values"!==P.name&&(M=!0,_=function(){return P.call(this)}),d&&!b||A[v]===_||l(A,v,_),f[e]=_,h)if(w={values:k("values"),keys:y?_:k("keys"),entries:k("entries")},b)for(S in w)!g&&!M&&S in A||u(A,S,w[S]);else r({target:e,proto:!0,forced:g||M},w);return w}},function(t,e,n){"use strict";var r,i,o,a=n(60),s=n(6),l=n(4),u=n(2),c=n(24),d=u("iterator"),f=!1;[].keys&&("next"in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(r=i):f=!0),null==r&&(r={}),c||l(r,d)||s(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(12),i=n(13),o=function(t){return function(e,n){var o,a,s=String(i(e)),l=r(n),u=s.length;return l<0||l>=u?t?"":void 0:(o=s.charCodeAt(l))<55296||o>56319||l+1===u||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):o:t?s.slice(l,l+2):a-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e,n){var r=n(7),i=n(88);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,o){return r(n),i(o),e?t.call(n,o):n.__proto__=o,n}}():void 0)},function(t,e,n){var r=n(14),i=n(89),o=Object.prototype;i!==o.toString&&r(o,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(6),i=n(14),o=n(1),a=n(2),s=n(45),l=a("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),c=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var f=a(t),h=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=h&&!o((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}));if(!h||!p||"replace"===t&&!u||"split"===t&&!c){var g=/./[f],v=n(f,""[t],(function(t,e,n,r,i){return e.exec===s?h&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=v[0],y=v[1];i(String.prototype,t,m),i(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),d&&r(RegExp.prototype[f],"sham",!0)}}},function(t,e,n){var r=n(18),i=n(45);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(18),i=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var r=n(69).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(3),i=n(0),o=n(24),a=n(9),s=n(50),l=n(1),u=n(4),c=n(29),d=n(5),f=n(7),h=n(16),p=n(10),g=n(19),v=n(17),m=n(34),y=n(52),b=n(27),x=n(92),w=n(49),S=n(26),k=n(8),C=n(46),M=n(6),A=n(14),P=n(15),_=n(22),T=n(20),I=n(28),O=n(2),F=n(64),D=n(65),E=n(42),L=n(21),R=n(23).forEach,N=_("hidden"),V=O("toPrimitive"),z=L.set,B=L.getterFor("Symbol"),W=Object.prototype,j=i.Symbol,H=i.JSON,q=H&&H.stringify,U=S.f,$=k.f,Y=x.f,G=C.f,Q=P("symbols"),X=P("op-symbols"),Z=P("string-to-symbol-registry"),J=P("symbol-to-string-registry"),K=P("wks"),tt=i.QObject,et=!tt||!tt.prototype||!tt.prototype.findChild,nt=a&&l((function(){return 7!=m($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=U(W,e);r&&delete W[e],$(t,e,n),r&&t!==W&&$(W,e,r)}:$,rt=function(t,e){var n=Q[t]=m(j.prototype);return z(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=s&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof j},ot=function(t,e,n){t===W&&ot(X,e,n),f(t);var r=g(e,!0);return f(n),u(Q,r)?(n.enumerable?(u(t,N)&&t[N][r]&&(t[N][r]=!1),n=m(n,{enumerable:v(0,!1)})):(u(t,N)||$(t,N,v(1,{})),t[N][r]=!0),nt(t,r,n)):$(t,r,n)},at=function(t,e){f(t);var n=p(e),r=y(n).concat(ct(n));return R(r,(function(e){a&&!st.call(n,e)||ot(t,e,n[e])})),t},st=function(t){var e=g(t,!0),n=G.call(this,e);return!(this===W&&u(Q,e)&&!u(X,e))&&(!(n||!u(this,e)||!u(Q,e)||u(this,N)&&this[N][e])||n)},lt=function(t,e){var n=p(t),r=g(e,!0);if(n!==W||!u(Q,r)||u(X,r)){var i=U(n,r);return!i||!u(Q,r)||u(n,N)&&n[N][r]||(i.enumerable=!0),i}},ut=function(t){var e=Y(p(t)),n=[];return R(e,(function(t){u(Q,t)||u(T,t)||n.push(t)})),n},ct=function(t){var e=t===W,n=Y(e?X:p(t)),r=[];return R(n,(function(t){!u(Q,t)||e&&!u(W,t)||r.push(Q[t])})),r};s||(A((j=function(){if(this instanceof j)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===W&&n.call(X,t),u(this,N)&&u(this[N],e)&&(this[N][e]=!1),nt(this,e,v(1,t))};return a&&et&&nt(W,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return B(this).tag})),C.f=st,k.f=ot,S.f=lt,b.f=x.f=ut,w.f=ct,a&&($(j.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),o||A(W,"propertyIsEnumerable",st,{unsafe:!0})),F.f=function(t){return rt(O(t),t)}),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:j}),R(y(K),(function(t){D(t)})),r({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(Z,e))return Z[e];var n=j(e);return Z[e]=n,J[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(J,t))return J[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!a},{create:function(t,e){return void 0===e?m(t):at(m(t),e)},defineProperty:ot,defineProperties:at,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ut,getOwnPropertySymbols:ct}),r({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),H&&r({target:"JSON",stat:!0,forced:!s||l((function(){var t=j();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(d(e)||void 0!==t)&&!it(t))return c(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),r[1]=e,q.apply(H,r)}}),j.prototype[V]||M(j.prototype,V,j.prototype.valueOf),E(j,"Symbol"),T[N]=!0},function(t,e,n){var r=n(9),i=n(8),o=n(7),a=n(52);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),s=r.length,l=0;s>l;)i.f(t,n=r[l++],e[n]);return t}},function(t,e,n){var r=n(35);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(3),i=n(9),o=n(0),a=n(4),s=n(5),l=n(8).f,u=n(47),c=o.Symbol;if(i&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new c(t):void 0===t?c():c(t);return""===t&&(d[e]=!0),e};u(f,c);var h=f.prototype=c.prototype;h.constructor=f;var p=h.toString,g="Symbol(test)"==String(c("test")),v=/^Symbol\((.*)\)[^)]+$/;l(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(d,t))return"";var n=g?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},function(t,e,n){n(65)("iterator")},function(t,e,n){"use strict";var r=n(3),i=n(45);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(t,e,n){"use strict";var r=n(69).charAt,i=n(21),o=n(66),a=i.set,s=i.getterFor("String Iterator");o(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(0),i=n(86),o=n(54),a=n(6),s=n(2),l=s("iterator"),u=s("toStringTag"),c=o.values;for(var d in i){var f=r[d],h=f&&f.prototype;if(h){if(h[l]!==c)try{a(h,l,c)}catch(t){h[l]=c}if(h[u]||a(h,u,d),i[d])for(var p in o)if(h[p]!==o[p])try{a(h,p,o[p])}catch(t){h[p]=o[p]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(76),i={};i[n(2)("toStringTag")]="z",t.exports="[object z]"!==String(i)?function(){return"[object "+r(this)+"]"}:i.toString},function(t,e,n){var r=n(13),i="["+n(74)+"]",o=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},function(t,e,n){"use strict";var r=n(3),i=n(41).indexOf,o=n(44),a=[].indexOf,s=!!a&&1/[1].indexOf(1,-0)<0,l=o("indexOf");r({target:"Array",proto:!0,forced:s||l},{indexOf:function(t){return s?a.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(10),i=n(27).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},function(t,e,n){"use strict";var r=n(67).IteratorPrototype,i=n(34),o=n(17),a=n(42),s=n(40),l=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:o(1,n)}),a(t,u,!1,!0),s[u]=l,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){"use strict";var r=n(3),i=n(23).map;r({target:"Array",proto:!0,forced:!n(33)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(5),o=n(29),a=n(32),s=n(11),l=n(10),u=n(57),c=n(33),d=n(2)("species"),f=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!c("slice")},{slice:function(t,e){var n,r,c,p=l(this),g=s(p.length),v=a(t,g),m=a(void 0===e?g:e,g);if(o(p)&&("function"!=typeof(n=p.constructor)||n!==Array&&!o(n.prototype)?i(n)&&null===(n=n[d])&&(n=void 0):n=void 0,n===Array||void 0===n))return f.call(p,v,m);for(r=new(void 0===n?Array:n)(h(m-v,0)),c=0;v<m;v++,c++)v in p&&u(r,c,p[v]);return r.length=c,r}})},function(t,e,n){"use strict";var r=n(3),i=n(32),o=n(12),a=n(11),s=n(16),l=n(43),u=n(57),c=n(33),d=Math.max,f=Math.min;r({target:"Array",proto:!0,forced:!c("splice")},{splice:function(t,e){var n,r,c,h,p,g,v=s(this),m=a(v.length),y=i(t,m),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=m-y):(n=b-2,r=f(d(o(e),0),m-y)),m+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(c=l(v,r),h=0;h<r;h++)(p=y+h)in v&&u(c,h,v[p]);if(c.length=r,n<r){for(h=y;h<m-r;h++)g=h+n,(p=h+r)in v?v[g]=v[p]:delete v[g];for(h=m;h>m-r+n;h--)delete v[h-1]}else if(n>r)for(h=m-r;h>y;h--)g=h+n-1,(p=h+r-1)in v?v[g]=v[p]:delete v[g];for(h=0;h<n;h++)v[h+y]=arguments[h+2];return v.length=m-r+n,c}})},function(t,e,n){"use strict";var r=n(72),i=n(7),o=n(16),a=n(11),s=n(12),l=n(13),u=n(77),c=n(73),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n){return[function(n,r){var i=l(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,o){var l=n(e,t,this,o);if(l.done)return l.value;var h=i(t),p=String(this),g="function"==typeof o;g||(o=String(o));var v=h.global;if(v){var m=h.unicode;h.lastIndex=0}for(var y=[];;){var b=c(h,p);if(null===b)break;if(y.push(b),!v)break;""===String(b[0])&&(h.lastIndex=u(p,a(h.lastIndex),m))}for(var x,w="",S=0,k=0;k<y.length;k++){b=y[k];for(var C=String(b[0]),M=d(f(s(b.index),p.length),0),A=[],P=1;P<b.length;P++)A.push(void 0===(x=b[P])?x:String(x));var _=b.groups;if(g){var T=[C].concat(A,M,p);void 0!==_&&T.push(_);var I=String(o.apply(void 0,T))}else I=r(C,p,M,A,_,o);M>=S&&(w+=p.slice(S,M)+I,S=M+C.length)}return w+p.slice(S)}];function r(t,n,r,i,a,s){var l=r+t.length,u=i.length,c=g;return void 0!==a&&(a=o(a),c=p),e.call(s,c,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(l);case"<":s=a[o.slice(1,-1)];break;default:var c=+o;if(0===c)return e;if(c>u){var d=h(c/10);return 0===d?e:d<=u?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):e}s=i[c-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var r=n(3),i=n(23).filter;r({target:"Array",proto:!0,forced:!n(33)("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(23).find,o=n(58),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},function(t,e,n){"use strict";var r=n(3),i=n(31),o=n(10),a=n(44),s=[].join,l=i!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:l||u},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var r=n(3),i=n(1),o=n(29),a=n(5),s=n(16),l=n(11),u=n(57),c=n(43),d=n(33),f=n(2)("isConcatSpreadable"),h=!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),p=d("concat"),g=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!h||!p},{concat:function(t){var e,n,r,i,o,a=s(this),d=c(a,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],g(o)){if(f+(i=l(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(d,f++,o)}return d.length=f,d}})},function(t,e,n){var r=n(7),i=n(53),o=n(2)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},function(t,e,n){var r=n(14),i=Date.prototype,o=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},function(t,e,n){var r=n(3),i=n(108);r({global:!0,forced:parseFloat!=i},{parseFloat:i})},function(t,e,n){"use strict";var r=n(14),i=n(7),o=n(1),a=n(68),s=RegExp.prototype,l=s.toString,u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),c="toString"!=l.name;(u||c)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n)}),{unsafe:!0})},function(t,e,n){var r=n(53),i=n(16),o=n(31),a=n(11),s=function(t){return function(e,n,s,l){r(n);var u=i(e),c=o(u),d=a(u.length),f=t?d-1:0,h=t?-1:1;if(s<2)for(;;){if(f in c){l=c[f],f+=h;break}if(f+=h,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=h)f in c&&(l=n(l,c[f],f,u));return l}};t.exports={left:s(!1),right:s(!0)}},function(t,e,n){var r=n(0),i=n(90).trim,o=n(74),a=r.parseFloat,s=1/a(o+"-0")!=-1/0;t.exports=s?function(t){var e=i(String(t)),n=a(e);return 0===n&&"-"==e.charAt(0)?-0:n}:a},function(t,e,n){"use strict";var r=n(72),i=n(110),o=n(7),a=n(13),s=n(103),l=n(77),u=n(11),c=n(73),d=n(45),f=n(1),h=[].push,p=Math.min,g=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var s,l,u,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,f+"g");(s=d.call(g,r))&&!((l=g.lastIndex)>p&&(c.push(r.slice(p,s.index)),s.length>1&&s.index<r.length&&h.apply(c,s.slice(1)),u=s[0].length,p=l,c.length>=o));)g.lastIndex===s.index&&g.lastIndex++;return p===r.length?!u&&g.test("")||c.push(""):c.push(r.slice(p)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var d=o(t),f=String(this),h=s(d,RegExp),v=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new h(g?d:"^(?:"+d.source+")",m),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===f.length)return null===c(y,f)?[f]:[];for(var x=0,w=0,S=[];w<f.length;){y.lastIndex=g?w:0;var k,C=c(y,g?f:f.slice(w));if(null===C||(k=p(u(y.lastIndex+(g?0:w)),f.length))===x)w=l(f,w,v);else{if(S.push(f.slice(x,w)),S.length===b)return S;for(var M=1;M<=C.length-1;M++)if(S.push(C[M]),S.length===b)return S;w=x=k}}return S.push(f.slice(x)),S}]}),!g)},function(t,e,n){var r=n(5),i=n(18),o=n(2)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(23).forEach,i=n(44);t.exports=i("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(5),i=n(70);t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},function(t,e,n){"use strict";var r=n(72),i=n(7),o=n(11),a=n(13),s=n(77),l=n(73);r("match",1,(function(t,e,n){return[function(e){var n=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var a=i(t),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var d,f=[],h=0;null!==(d=l(a,u));){var p=String(d[0]);f[h]=p,""===p&&(a.lastIndex=s(u,o(a.lastIndex),c)),h++}return 0===h?null:f}]}))},function(t,e,n){"use strict";var r=n(3),i=n(12),o=n(115),a=n(116),s=n(1),l=1..toFixed,u=Math.floor,c=function(t,e,n){return 0===e?n:e%2==1?c(t,e-1,n*t):c(t*t,e/2,n)};r({target:"Number",proto:!0,forced:l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}))},{toFixed:function(t){var e,n,r,s,l=o(this),d=i(t),f=[0,0,0,0,0,0],h="",p="0",g=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*f[n],f[n]=r%1e7,r=u(r/1e7)},v=function(t){for(var e=6,n=0;--e>=0;)n+=f[e],f[e]=u(n/t),n=n%t*1e7},m=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==f[t]){var n=String(f[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(h="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*c(2,69,1))-69)<0?l*c(2,-e,1):l/c(2,e,1),n*=4503599627370496,(e=52-e)>0){for(g(0,n),r=d;r>=7;)g(1e7,0),r-=7;for(g(c(10,r,1),0),r=e-1;r>=23;)v(1<<23),r-=23;v(1<<r),g(1,1),v(2),p=m()}else g(0,n),g(1<<-e,0),p=m()+a.call("0",d);return p=d>0?h+((s=p.length)<=d?"0."+a.call("0",d-s)+p:p.slice(0,s-d)+"."+p.slice(s-d)):h+p}})},function(t,e,n){var r=n(18);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},function(t,e,n){"use strict";var r=n(12),i=n(13);t.exports="".repeat||function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},,,function(t,e,n){"use strict";var r=n(3),i=n(111);r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},function(t,e,n){"use strict";var r=n(3),i=n(107).left;r({target:"Array",proto:!0,forced:n(44)("reduce")},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(3),i=n(29),o=[].reverse,a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),o.call(this)}})},function(t,e,n){"use strict";var r=n(3),i=n(53),o=n(16),a=n(1),s=n(44),l=[].sort,u=[1,2,3],c=a((function(){u.sort(void 0)})),d=a((function(){u.sort(null)})),f=s("sort");r({target:"Array",proto:!0,forced:c||!d||f},{sort:function(t){return void 0===t?l.call(o(this)):l.call(o(this),i(t))}})},function(t,e,n){"use strict";var r=n(9),i=n(0),o=n(51),a=n(14),s=n(4),l=n(18),u=n(112),c=n(19),d=n(1),f=n(34),h=n(27).f,p=n(26).f,g=n(8).f,v=n(90).trim,m=i.Number,y=m.prototype,b="Number"==l(f(y)),x=function(t){var e,n,r,i,o,a,s,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=v(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(a=(o=u.slice(2)).length,s=0;s<a;s++)if((l=o.charCodeAt(s))<48||l>i)return NaN;return parseInt(o,r)}return+u};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(b?d((function(){y.valueOf.call(n)})):"Number"!=l(n))?u(new m(x(e)),n,S):x(e)},k=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)s(m,w=k[C])&&!s(S,w)&&g(S,w,p(m,w));S.prototype=y,y.constructor=S,a(i,"Number",S)}},function(t,e,n){var r=n(3),i=n(128);r({global:!0,forced:parseInt!=i},{parseInt:i})},function(t,e,n){var r=n(0),i=n(86),o=n(111),a=n(6);for(var s in i){var l=r[s],u=l&&l.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(t){u.forEach=o}}},function(t,e,n){"use strict";var r=n(35),i=n(8),o=n(2),a=n(9),s=o("species");t.exports=function(t){var e=r(t),n=i.f;a&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(9),i=n(8).f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/;!r||"name"in o||i(o,"name",{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},function(t,e,n){var r=n(0),i=n(90).trim,o=n(74),a=r.parseInt,s=/^[+-]?0[Xx]/,l=8!==a(o+"08")||22!==a(o+"0x16");t.exports=l?function(t,e){var n=i(String(t));return a(n,e>>>0||(s.test(n)?16:10))}:a},function(t,e,n){var r=n(9),i=n(0),o=n(51),a=n(112),s=n(8).f,l=n(27).f,u=n(110),c=n(68),d=n(14),f=n(1),h=n(126),p=n(2)("match"),g=i.RegExp,v=g.prototype,m=/a/g,y=/a/g,b=new g(m)!==m;if(r&&o("RegExp",!b||f((function(){return y[p]=!1,g(m)!=m||g(y)==y||"/a/i"!=g(m,"i")})))){for(var x=function(t,e){var n=this instanceof x,r=u(t),i=void 0===e;return!n&&r&&t.constructor===x&&i?t:a(b?new g(r&&!i?t.source:t,e):g((r=t instanceof x)?t.source:t,r&&i?c.call(t):e),n?this:v,x)},w=function(t){t in x||s(x,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},S=l(g),k=0;S.length>k;)w(S[k++]);v.constructor=x,x.prototype=v,d(i,"RegExp",x)}h("RegExp")},function(t,e,n){"use strict";var r=n(10),i=n(12),o=n(11),a=n(44),s=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,c=a("lastIndexOf");t.exports=u||c?function(t){if(u)return l.apply(this,arguments)||0;var e=r(this),n=o(e.length),a=n-1;for(arguments.length>1&&(a=s(a,i(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:l},,function(t,e,n){"use strict";var r=n(16),i=n(32),o=n(11);t.exports=function(t){for(var e=r(this),n=o(e.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,u=void 0===l?n:i(l,n);u>s;)e[s++]=t;return e}},function(t,e,n){"use strict";n.r(e);n(100),n(101),n(95),n(123),n(83),n(98);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}jQuery((function(t){(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputSelector="".concat(["text","password","email","url","tel","number","search","search-md","date"].map((function(t){return"input[type=".concat(t,"]")})).join(", "),", textarea"),this.textAreaSelector=".materialize-textarea",this.$text=t(".md-textarea-auto"),this.$body=t("body"),this.$document=t(document)}var n,i,o;return n=e,(i=[{key:"init",value:function(){var e,n=this;this.$text.length&&(e=window.attachEvent?function(t,e,n){t.attachEvent("on".concat(e),n)}:function(t,e,n){t.addEventListener(e,n,!1)},this.$text.each((function(){var t=this;function n(){t.style.height="auto",t.style.height="".concat(t.scrollHeight,"px")}function r(){window.setTimeout(n,0)}e(t,"change",n),e(t,"cut",r),e(t,"paste",r),e(t,"drop",r),e(t,"keydown",r),n()}))),t(this.inputSelector).each((function(e,r){var i=t(r),o=r.validity.badInput;n.updateTextFields(i),o&&n.toggleActiveClass(i,"add")})),this.addOnFocusEvent(),this.addOnBlurEvent(),this.addOnChangeEvent(),this.addOnResetEvent(),this.appendHiddenDiv(),this.makeActiveAutofocus(),t(this.textAreaSelector).each(this.textAreaAutoResize),this.$body.on("keyup keydown",this.textAreaSelector,this.textAreaAutoResize)}},{key:"makeActiveAutofocus",value:function(){this.toggleActiveClass(t("input[autofocus]"),"add")}},{key:"toggleActiveClass",value:function(t,e){var n;e="".concat(e,"Class"),n=t.parent().hasClass("timepicker")?"label":"label, i, .input-prefix",t.siblings(n)[e]("active")}},{key:"addOnFocusEvent",value:function(){var e=this;this.$document.on("focus",this.inputSelector,(function(n){e.toggleActiveClass(t(n.target),"add"),"date"==t(n.target).attr("type")&&t(n.target).css("color","#495057")}))}},{key:"addOnBlurEvent",value:function(){var e=this;this.$document.on("blur",this.inputSelector,(function(n){var r=t(n.target),i=!r.val(),o=!n.target.validity.badInput,a=void 0===r.attr("placeholder");i&&o&&a&&(e.toggleActiveClass(r,"remove"),"date"==r.attr("type")&&r.css("color","transparent")),!i&&o&&a&&(r.siblings("i, .input-prefix").removeClass("active"),"date"==r.attr("type")&&r.css("color","#495057")),e.validateField(r)}))}},{key:"addOnChangeEvent",value:function(){var e=this;this.$document.on("change",this.inputSelector,(function(n){var r=t(n.target);e.updateTextFields(r),e.validateField(r)}))}},{key:"addOnResetEvent",value:function(){var e=this;this.$document.on("reset",(function(n){var r=t(n.target);r.is("form")&&(r.find(e.inputSelector).removeClass("valid invalid").each((function(n,r){var i=t(r),o=!i.val(),a=!i.attr("placeholder");o&&a&&e.toggleActiveClass(i,"remove")})),r.find("select.initialized").each((function(e,n){var r=t(n),i=r.siblings("input.select-dropdown"),o=r.children("[selected]").val();r.val(o),i.val(o)})))}))}},{key:"appendHiddenDiv",value:function(){if(!t(".hiddendiv").first().length){var e=t('<div class="hiddendiv common"></div>');this.$body.append(e)}}},{key:"updateTextFields",value:function(t){var e=Boolean(t.val()),n=Boolean(t.attr("placeholder")),r=e||n?"add":"remove";"date"!==t.attr("type")&&this.toggleActiveClass(t,r),"date"!=t.attr("type")||e?"date"==t.attr("type")&&e&&this.toggleActiveClass(t,r):t.css("color","transparent")}},{key:"validateField",value:function(t){if(t.hasClass("validate")){var e=t.val(),n=!e.length,r=!t[0].validity.badInput;if(n&&r)t.removeClass("valid").removeClass("invalid");else{var i=t[0].validity.valid,o=Number(t.attr("length"))||0;i&&(!o||o>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}}},{key:"textAreaAutoResize",value:function(){var e=t(this);if(e.val().length){var n=t(".hiddendiv"),r=e.css("font-family"),i=e.css("font-size");i&&n.css("font-size",i),r&&n.css("font-family",r),"off"===e.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text("".concat(e.val(),"\n"));var o=n.html().replace(/\n/g,"<br>");n.html(o),n.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",n.height())}}}])&&r(n.prototype,i),o&&r(n,o),e}())).init()}))},function(t,e){jQuery((function(t){t(window).on("scroll",(function(){var e=t(".navbar");e.length&&t(".scrolling-navbar")[e.offset().top>50?"addClass":"removeClass"]("top-nav-collapse")}))}))},function(t,e,n){"use strict";n.r(e);n(100);jQuery((function(t){t.fn.mdbTreeview=function(){var e=t(this);e.hasClass("treeview")&&function(e){e.find(".rotate").each((function(){var e=t(this);e.off("click"),e.on("click",(function(){var e=t(this);e.siblings(".nested").toggleClass("active"),e.toggleClass("down")}))}))}(e),e.hasClass("treeview-animated")&&function(e){var n=e.find(".treeview-animated-element"),r=e.find(".closed");e.find(".nested").hide(),r.off("click"),r.on("click",(function(){var e=t(this),n=e.siblings(".nested"),r=e.children(".fa-angle-right");e.toggleClass("open"),r.toggleClass("down"),n.hasClass("active")?n.removeClass("active").slideUp():n.addClass("active").slideDown()})),n.off("click"),n.on("click",(function(){var e=t(this);e.hasClass("opened")?e.removeClass("opened"):(n.removeClass("opened"),e.addClass("opened"))}))}(e),e.hasClass("treeview-colorful")&&function(e){var n=e.find(".treeview-colorful-element"),r=e.find(".treeview-colorful-items-header");e.find(".nested").hide(),r.off("click"),r.on("click",(function(){var e=t(this),n=e.siblings(".nested"),r=e.children(".fa-plus-circle"),i=e.children(".fa-minus-circle");e.toggleClass("open"),r.removeClass("fa-plus-circle"),r.addClass("fa-minus-circle"),i.removeClass("fa-minus-circle"),i.addClass("fa-plus-circle"),n.hasClass("active")?n.removeClass("active").slideUp():n.addClass("active").slideDown()})),n.off("click"),n.on("click",(function(){var e=t(this);e.hasClass("opened")?n.removeClass("opened"):(n.removeClass("opened"),e.addClass("opened"))}))}(e)}}))},function(t,e,n){"use strict";n.r(e);n(96),n(104),n(71),n(106);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}jQuery((function(t){var e=function(){function e(){r(this,e)}return o(e,[{key:"init",value:function(){t(".wow").wow()}}]),e}(),n=function(){function e(t,n){r(this,e),this.$wowElement=t,this.customization=n,this.animated=!0,this.options=this.assignElementCustomization()}return o(e,[{key:"init",value:function(){var e=this;t(window).scroll((function(){e.animated?e.hide():e.mdbWow()})),this.appear()}},{key:"assignElementCustomization",value:function(){return{animationName:this.$wowElement.css("animation-name"),offset:100,iteration:this.fallback().or(this.$wowElement.data("wow-iteration")).or(1).value(),duration:this.fallback().or(this.$wowElement.data("wow-duration")).or(1e3).value(),delay:this.fallback().or(this.$wowElement.data("wow-delay")).or(0).value()}}},{key:"mdbWow",value:function(){var t=this;"visible"!==this.$wowElement.css("visibility")&&this.shouldElementBeVisible(!0)&&(setTimeout((function(){return t.$wowElement.removeClass("animated")}),this.countRemoveTime()),this.appear())}},{key:"appear",value:function(){this.$wowElement.addClass("animated"),this.$wowElement.css({visibility:"visible","animation-name":this.options.animationName,"animation-iteration-count":this.options.iteration,"animation-duration":this.options.duration,"animation-delay":this.options.delay})}},{key:"hide",value:function(){var t=this;this.shouldElementBeVisible(!1)?(this.$wowElement.removeClass("animated"),this.$wowElement.css({"animation-name":"none",visibility:"hidden"})):setTimeout((function(){t.$wowElement.removeClass("animated")}),this.countRemoveTime()),this.mdbWow(),this.animated=!this.animated}},{key:"shouldElementBeVisible",value:function(e){var n=this.getOffset(this.$wowElement[0]),r=this.$wowElement.height(),i=t(document).height(),o=window.innerHeight,a=window.scrollY,s=o+a-this.options.offset>n,l=o+a-this.options.offset>n+r,u=a<n,c=a<n+r,d=o+a===i,f=n+this.options.offset>i,h=o+a-this.options.offset<n,p=a>n+this.options.offset,g=a<n+this.options.offset,v=n+r>i-this.options.offset;return e?s&&u||l&&c||d&&f:s&&p||h&&g||v}},{key:"countRemoveTime",value:function(){var t=1e3*this.$wowElement.css("animation-duration").slice(0,-1),e=0;return this.options.duration&&(e=t+this.checkOptionsStringFormat(this.options.duration)),this.options.delay&&(e+=this.checkOptionsStringFormat(this.options.delay)),e}},{key:"checkOptionsStringFormat",value:function(t){var e;if("s"===t.toString().slice(-1))e=t.toString().slice(0,-1);else{if(isNaN(t.toString().slice(-1)))return console.log("Not supported animation customization format.");e=t}return e}},{key:"getOffset",value:function(t){var e=t.getBoundingClientRect(),n=document.body,r=document.documentElement,i=window.pageYOffset||r.scrollTop||n.scrollTop,o=r.clientTop||n.clientTop||0,a=e.top+i-o;return Math.round(a)}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}}]),e}();t.fn.wow=function(e){this.each((function(){new n(t(this),e).init()}))},window.WOW=e}))},,,,,,,,function(t,e,n){var r=n(3),i=n(132),o=n(58);r({target:"Array",proto:!0},{fill:i}),o("fill")},function(t,e,n){n(3)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){n(3)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var r=n(3),i=n(16),o=n(52);r({target:"Object",stat:!0,forced:n(1)((function(){o(1)}))},{keys:function(t){return o(i(t))}})},function(t,e,n){"use strict";var r=n(0),i=n(9),o=n(56).NATIVE_ARRAY_BUFFER,a=n(6),s=n(171),l=n(1),u=n(149),c=n(12),d=n(11),f=n(150),h=n(27).f,p=n(8).f,g=n(132),v=n(42),m=n(21),y=m.get,b=m.set,x=r.ArrayBuffer,w=x,S=r.DataView,k=r.Math,C=r.RangeError,M=k.abs,A=k.pow,P=k.floor,_=k.log,T=k.LN2,I=function(t,e,n){var r,i,o,a=new Array(n),s=8*n-e-1,l=(1<<s)-1,u=l>>1,c=23===e?A(2,-24)-A(2,-77):0,d=t<0||0===t&&1/t<0?1:0,f=0;for((t=M(t))!=t||t===1/0?(i=t!=t?1:0,r=l):(r=P(_(t)/T),t*(o=A(2,-r))<1&&(r--,o*=2),(t+=r+u>=1?c/o:c*A(2,1-u))*o>=2&&(r++,o/=2),r+u>=l?(i=0,r=l):r+u>=1?(i=(t*o-1)*A(2,e),r+=u):(i=t*A(2,u-1)*A(2,e),r=0));e>=8;a[f++]=255&i,i/=256,e-=8);for(r=r<<e|i,s+=e;s>0;a[f++]=255&r,r/=256,s-=8);return a[--f]|=128*d,a},O=function(t,e){var n,r=t.length,i=8*r-e-1,o=(1<<i)-1,a=o>>1,s=i-7,l=r-1,u=t[l--],c=127&u;for(u>>=7;s>0;c=256*c+t[l],l--,s-=8);for(n=c&(1<<-s)-1,c>>=-s,s+=e;s>0;n=256*n+t[l],l--,s-=8);if(0===c)c=1-a;else{if(c===o)return n?NaN:u?-1/0:1/0;n+=A(2,e),c-=a}return(u?-1:1)*n*A(2,c-e)},F=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},D=function(t){return[255&t]},E=function(t){return[255&t,t>>8&255]},L=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},R=function(t){return I(t,23,4)},N=function(t){return I(t,52,8)},V=function(t,e){p(t.prototype,e,{get:function(){return y(this)[e]}})},z=function(t,e,n,r){var i=f(+n),o=y(t);if(i+e>o.byteLength)throw C("Wrong index");var a=y(o.buffer).bytes,s=i+o.byteOffset,l=a.slice(s,s+e);return r?l:l.reverse()},B=function(t,e,n,r,i,o){var a=f(+n),s=y(t);if(a+e>s.byteLength)throw C("Wrong index");for(var l=y(s.buffer).bytes,u=a+s.byteOffset,c=r(+i),d=0;d<e;d++)l[u+d]=c[o?d:e-d-1]};if(o){if(!l((function(){x(1)}))||!l((function(){new x(-1)}))||l((function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name}))){for(var W,j=(w=function(t){return u(this,w),new x(f(t))}).prototype=x.prototype,H=h(x),q=0;H.length>q;)(W=H[q++])in w||a(w,W,x[W]);j.constructor=w}var U=new S(new w(2)),$=S.prototype.setInt8;U.setInt8(0,2147483648),U.setInt8(1,2147483649),!U.getInt8(0)&&U.getInt8(1)||s(S.prototype,{setInt8:function(t,e){$.call(this,t,e<<24>>24)},setUint8:function(t,e){$.call(this,t,e<<24>>24)}},{unsafe:!0})}else w=function(t){u(this,w,"ArrayBuffer");var e=f(t);b(this,{bytes:g.call(new Array(e),0),byteLength:e}),i||(this.byteLength=e)},S=function(t,e,n){u(this,S,"DataView"),u(t,w,"DataView");var r=y(t).byteLength,o=c(e);if(o<0||o>r)throw C("Wrong offset");if(o+(n=void 0===n?r-o:d(n))>r)throw C("Wrong length");b(this,{buffer:t,byteLength:n,byteOffset:o}),i||(this.buffer=t,this.byteLength=n,this.byteOffset=o)},i&&(V(w,"byteLength"),V(S,"buffer"),V(S,"byteLength"),V(S,"byteOffset")),s(S.prototype,{getInt8:function(t){return z(this,1,t)[0]<<24>>24},getUint8:function(t){return z(this,1,t)[0]},getInt16:function(t){var e=z(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=z(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return F(z(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return O(z(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return O(z(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){B(this,1,t,D,e)},setUint8:function(t,e){B(this,1,t,D,e)},setInt16:function(t,e){B(this,2,t,E,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){B(this,2,t,E,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){B(this,4,t,L,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){B(this,4,t,L,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){B(this,4,t,R,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){B(this,8,t,N,e,arguments.length>2?arguments[2]:void 0)}});v(w,"ArrayBuffer"),v(S,"DataView"),t.exports={ArrayBuffer:w,DataView:S}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(12),i=n(11);t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length or index");return n}},function(t,e,n){var r=n(176);t.exports=function(t,e){var n=r(t);if(n%e)throw RangeError("Wrong offset");return n}},function(t,e,n){n(153),t.exports=n(154)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(155),n(156),n(162),n(167),n(168),n(169),n(204),n(133),n(134),n(135),n(136)},function(t,e,n){"use strict";(function(t){var e,r;n(78),n(81),n(82),n(99),n(91),n(54),n(101),n(95),n(96),n(127),n(71),n(83),n(84),n(109),n(85);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */e=void 0,r=function(){var t={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},e=function(e){var n="",r=e.parentNode.querySelector(t.CUSTOMFILELABEL);return r&&(n=r.innerHTML),n},n=function(t){if(t.childNodes.length>0)for(var e=[].slice.call(t.childNodes),n=0;n<e.length;n++){var r=e[n];if(3!==r.nodeType)return r}return t},r=function(e){var r=e.bsCustomFileInput.defaultText,i=e.parentNode.querySelector(t.CUSTOMFILELABEL);i&&(n(i).innerHTML=r)},i=!!window.File,o=function(t){if(t.hasAttribute("multiple")&&i)return[].slice.call(t.files).map((function(t){return t.name})).join(", ");if(-1!==t.value.indexOf("fakepath")){var e=t.value.split("\\");return e[e.length-1]}return t.value};function a(){var e=this.parentNode.querySelector(t.CUSTOMFILELABEL);if(e){var i=n(e),a=o(this);a.length?i.innerHTML=a:r(this)}}function s(){for(var e=[].slice.call(this.querySelectorAll(t.INPUT)).filter((function(t){return!!t.bsCustomFileInput})),n=0,i=e.length;n<i;n++)r(e[n])}var l="reset",u="change";return{init:function(n,r){void 0===n&&(n=t.CUSTOMFILE),void 0===r&&(r=t.FORM);for(var i=[].slice.call(document.querySelectorAll(n)),o=[].slice.call(document.querySelectorAll(r)),c=0,d=i.length;c<d;c++){var f=i[c];Object.defineProperty(f,"bsCustomFileInput",{value:{defaultText:e(f)},writable:!0}),a.call(f),f.addEventListener(u,a)}for(var h=0,p=o.length;h<p;h++)o[h].addEventListener(l,s),Object.defineProperty(o[h],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(t.FORM)).filter((function(t){return!!t.bsCustomFileInput})),n=[].slice.call(document.querySelectorAll(t.INPUT)).filter((function(t){return!!t.bsCustomFileInput})),i=0,o=n.length;i<o;i++){var c=n[i];r(c),c.bsCustomFileInput=void 0,c.removeEventListener(u,a)}for(var d=0,f=e.length;d<f;d++)e[d].removeEventListener(l,s),e[d].bsCustomFileInput=void 0}}},"object"===("undefined"==typeof exports?"undefined":i(exports))&&void 0!==t?t.exports=r():"function"==typeof define&&n(55)?define(r):(e=e||self).bsCustomFileInput=r(),document.addEventListener("DOMContentLoaded",(function(){bsCustomFileInput.init()}))}).call(this,n(87)(t))},function(t,e,n){"use strict";(function(t,e){var i;n(78),n(81),n(82),n(102),n(144),n(99),n(157),n(119),n(91),n(54),n(101),n(95),n(120),n(121),n(96),n(122),n(97),n(104),n(158),n(159),n(123),n(161),n(145),n(146),n(114),n(147),n(71),n(105),n(124),n(83),n(106),n(84),n(113),n(109),n(125),n(85);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.3
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */!function(r){if("object"===("undefined"==typeof exports?"undefined":o(exports))&&void 0!==t)t.exports=r();else if("function"==typeof define&&n(55))define([],r);else{("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:this).Chart=r()}}((function(){return function t(e,n,r){function o(s,l){if(!n[s]){if(!e[s]){if(!l&&"function"==typeof i&&i)return i(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};e[s][0].call(c.exports,(function(t){return o(e[s][1][t]||t)}),c,c.exports,t,e,n,r)}return n[s].exports}for(var a="function"==typeof i&&i,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){},{}],2:[function(t,e,n){var r=t(6);function i(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3})$/i);if(i){i=i[1];for(var o=0;o<e.length;o++)e[o]=parseInt(i[o]+i[o],16)}else if(i=t.match(/^#([a-fA-F0-9]{6})$/i)){i=i[1];for(o=0;o<e.length;o++)e[o]=parseInt(i.slice(2*o,2*o+2),16)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=parseInt(i[o+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=Math.round(2.55*parseFloat(i[o+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=r[i[1]]))return}for(o=0;o<e.length;o++)e[o]=c(e[o],0,255);return n=n||0==n?c(n,0,1):1,e[3]=n,e}}function o(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[c(parseInt(e[1]),0,360),c(parseFloat(e[2]),0,100),c(parseFloat(e[3]),0,100),c(isNaN(n)?1:n,0,1)]}}}function a(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[c(parseInt(e[1]),0,360),c(parseFloat(e[2]),0,100),c(parseFloat(e[3]),0,100),c(isNaN(n)?1:n,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function c(t,e,n){return Math.min(Math.max(e,t),n)}function d(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:i,getHsla:o,getRgb:function(t){var e=i(t);return e&&e.slice(0,3)},getHsl:function(t){var e=o(t);return e&&e.slice(0,3)},getHwb:a,getAlpha:function(t){var e=i(t);if(e)return e[3];if(e=o(t))return e[3];if(e=a(t))return e[3]},hexString:function(t){return"#"+d(t[0])+d(t[1])+d(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var n=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),i=Math.round(t[2]/255*100);return"rgb("+n+"%, "+r+"%, "+i+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return u(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:u,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return f[t.slice(0,3)]}};var f={};for(var h in r)f[r[h]]=h},{6:6}],3:[function(t,e,n){var r=t(5),i=t(2),a=function t(e){return e instanceof t?e:this instanceof t?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof e?(n=i.getRgba(e))?this.setValues("rgb",n):(n=i.getHsla(e))?this.setValues("hsl",n):(n=i.getHwb(e))&&this.setValues("hwb",n):"object"===o(e)&&(void 0!==(n=e).r||void 0!==n.red?this.setValues("rgb",n):void 0!==n.l||void 0!==n.lightness?this.setValues("hsl",n):void 0!==n.v||void 0!==n.value?this.setValues("hsv",n):void 0!==n.w||void 0!==n.whiteness?this.setValues("hwb",n):void 0===n.c&&void 0===n.cyan||this.setValues("cmyk",n)))):new t(e);var n};(a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return i.hexString(this.values.rgb)},rgbString:function(){return i.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return i.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return i.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return i.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return i.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return i.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return i.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var r=t[n]/255;e[n]=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=t,r=void 0===e?.5:e,i=2*r-1,o=this.alpha()-n.alpha(),a=((i*o==-1?i:(i+o)/(1+i*o))+1)/2,s=1-a;return this.rgb(a*this.red()+s*n.red(),a*this.green()+s*n.green(),a*this.blue()+s*n.blue()).alpha(this.alpha()*r+n.alpha()*(1-r))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new a,r=this.values,i=n.values;for(var o in r)r.hasOwnProperty(o)&&(t=r[o],"[object Array]"===(e={}.toString.call(t))?i[o]=t.slice(0):"[object Number]"===e?i[o]=t:console.error("unexpected color value:",t));return n}}).spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(t){for(var e=this.values,n={},r=0;r<t.length;r++)n[t.charAt(r)]=e[t][r];return 1!==e.alpha&&(n.a=e.alpha),n},a.prototype.setValues=function(t,e){var n,i,o=this.values,a=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)o[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)o[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[a[t][0]]){var u=a[t];for(n=0;n<t.length;n++)o[t][n]=e[u[n]];l=e.alpha}if(o.alpha=Math.max(0,Math.min(1,void 0===l?o.alpha:l)),"alpha"===t)return!1;for(n=0;n<t.length;n++)i=Math.max(0,Math.min(s[t][n],o[t][n])),o[t][n]=Math.round(i);for(var c in a)c!==t&&(o[c]=r[t][c](o[t]));return!0},a.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},a.prototype.setChannel=function(t,e,n){var r=this.values[t];return void 0===n?r[e]:n===r[e]?this:(r[e]=n,this.setValues(t,r),this)},"undefined"!=typeof window&&(window.Color=a),e.exports=a},{2:2,5:5}],4:[function(t,e,n){function i(t){var e,n,r=t[0]/255,i=t[1]/255,o=t[2]/255,a=Math.min(r,i,o),s=Math.max(r,i,o),l=s-a;return s==a?e=0:r==s?e=(i-o)/l:i==s?e=2+(o-r)/l:o==s&&(e=4+(r-i)/l),(e=Math.min(60*e,360))<0&&(e+=360),n=(a+s)/2,[e,100*(s==a?0:n<=.5?l/(s+a):l/(2-s-a)),100*n]}function o(t){var e,n,r=t[0],i=t[1],o=t[2],a=Math.min(r,i,o),s=Math.max(r,i,o),l=s-a;return n=0==s?0:l/s*1e3/10,s==a?e=0:r==s?e=(i-o)/l:i==s?e=2+(o-r)/l:o==s&&(e=4+(r-i)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,n,s/255*1e3/10]}function a(t){var e=t[0],n=t[1],r=t[2];return[i(t)[0],100*(1/255*Math.min(e,Math.min(n,r))),100*(r=1-1/255*Math.max(e,Math.max(n,r)))]}function s(t){var e,n=t[0]/255,r=t[1]/255,i=t[2]/255;return[100*((1-n-(e=Math.min(1-n,1-r,1-i)))/(1-e)||0),100*((1-r-e)/(1-e)||0),100*((1-i-e)/(1-e)||0),100*e]}function l(t){return M[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,r=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*e+.7152*n+.0722*r),100*(.0193*e+.1192*n+.9505*r)]}function c(t){var e=u(t),n=e[0],r=e[1],i=e[2];return r/=100,i/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(n-r),200*(r-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]}function d(t){var e,n,r,i,o,a=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[o=255*l,o,o];e=2*l-(n=l<.5?l*(1+s):l+s-l*s),i=[0,0,0];for(var u=0;u<3;u++)(r=a+1/3*-(u-1))<0&&r++,r>1&&r--,o=6*r<1?e+6*(n-e)*r:2*r<1?n:3*r<2?e+(n-e)*(2/3-r)*6:e,i[u]=255*o;return i}function f(t){var e=t[0]/60,n=t[1]/100,r=t[2]/100,i=Math.floor(e)%6,o=e-Math.floor(e),a=255*r*(1-n),s=255*r*(1-n*o),l=255*r*(1-n*(1-o));r*=255;switch(i){case 0:return[r,l,a];case 1:return[s,r,a];case 2:return[a,r,l];case 3:return[a,s,r];case 4:return[l,a,r];case 5:return[r,a,s]}}function h(t){var e,n,i,o,a=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),i=6*a-(e=Math.floor(6*a)),0!=(1&e)&&(i=1-i),o=s+i*((n=1-l)-s),e){default:case 6:case 0:r=n,g=o,b=s;break;case 1:r=o,g=n,b=s;break;case 2:r=s,g=n,b=o;break;case 3:r=s,g=o,b=n;break;case 4:r=o,g=s,b=n;break;case 5:r=n,g=s,b=o}return[255*r,255*g,255*b]}function p(t){var e=t[0]/100,n=t[1]/100,r=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i))]}function v(t){var e,n,r,i=t[0]/100,o=t[1]/100,a=t[2]/100;return n=-.9689*i+1.8758*o+.0415*a,r=.0557*i+-.204*o+1.057*a,e=(e=3.2406*i+-1.5372*o+-.4986*a)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]}function m(t){var e=t[0],n=t[1],r=t[2];return n/=100,r/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]}function y(t){var e,n,r,i,o=t[0],a=t[1],s=t[2];return o<=8?i=(n=100*o/903.3)/100*7.787+16/116:(n=100*Math.pow((o+16)/116,3),i=Math.pow(n/100,1/3)),[e=e/95.047<=.008856?e=95.047*(a/500+i-16/116)/7.787:95.047*Math.pow(a/500+i,3),n,r=r/108.883<=.008859?r=108.883*(i-s/200-16/116)/7.787:108.883*Math.pow(i-s/200,3)]}function x(t){var e,n=t[0],r=t[1],i=t[2];return(e=360*Math.atan2(i,r)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(r*r+i*i),e]}function w(t){return v(y(t))}function S(t){var e,n=t[0],r=t[1];return e=t[2]/360*2*Math.PI,[n,r*Math.cos(e),r*Math.sin(e)]}function k(t){return C[t]}e.exports={rgb2hsl:i,rgb2hsv:o,rgb2hwb:a,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:c,rgb2lch:function(t){return x(c(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],n=t[1]/100,r=t[2]/100;if(0===r)return[0,0,0];return[e,100*(2*(n*=(r*=2)<=1?r:2-r)/(r+n)),100*((r+n)/2)]},hsl2hwb:function(t){return a(d(t))},hsl2cmyk:function(t){return s(d(t))},hsl2keyword:function(t){return l(d(t))},hsv2rgb:f,hsv2hsl:function(t){var e,n,r=t[0],i=t[1]/100,o=t[2]/100;return e=i*o,[r,100*(e=(e/=(n=(2-i)*o)<=1?n:2-n)||0),100*(n/=2)]},hsv2hwb:function(t){return a(f(t))},hsv2cmyk:function(t){return s(f(t))},hsv2keyword:function(t){return l(f(t))},hwb2rgb:h,hwb2hsl:function(t){return i(h(t))},hwb2hsv:function(t){return o(h(t))},hwb2cmyk:function(t){return s(h(t))},hwb2keyword:function(t){return l(h(t))},cmyk2rgb:p,cmyk2hsl:function(t){return i(p(t))},cmyk2hsv:function(t){return o(p(t))},cmyk2hwb:function(t){return a(p(t))},cmyk2keyword:function(t){return l(p(t))},keyword2rgb:k,keyword2hsl:function(t){return i(k(t))},keyword2hsv:function(t){return o(k(t))},keyword2hwb:function(t){return a(k(t))},keyword2cmyk:function(t){return s(k(t))},keyword2lab:function(t){return c(k(t))},keyword2xyz:function(t){return u(k(t))},xyz2rgb:v,xyz2lab:m,xyz2lch:function(t){return x(m(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:S,lch2xyz:function(t){return y(S(t))},lch2rgb:function(t){return w(S(t))}};var C={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var A in C)M[JSON.stringify(C[A])]=A},{}],5:[function(t,e,n){var r=t(4),i=function(){return new u};for(var o in r){i[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),r[t](e)}}(o);var a=/(\w+)2(\w+)/.exec(o),s=a[1],l=a[2];(i[s]=i[s]||{})[l]=i[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=r[t](e);if("string"==typeof n||void 0===n)return n;for(var i=0;i<n.length;i++)n[i]=Math.round(n[i]);return n}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,r=this.convs[n];e=i[n][t](r),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}})),e.exports=i},{4:4}],6:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,n){var r=t(30)();r.helpers=t(46),t(28)(r),r.Animation=t(22),r.animationService=t(23),r.defaults=t(26),r.Element=t(27),r.elements=t(41),r.Interaction=t(29),r.layouts=t(31),r.platform=t(49),r.plugins=t(32),r.Scale=t(33),r.scaleService=t(34),r.Ticks=t(35),r.Tooltip=t(36),t(24)(r),t(25)(r),t(56)(r),t(54)(r),t(55)(r),t(57)(r),t(58)(r),t(59)(r),t(15)(r),t(16)(r),t(17)(r),t(18)(r),t(19)(r),t(20)(r),t(21)(r),t(8)(r),t(9)(r),t(10)(r),t(11)(r),t(12)(r),t(13)(r),t(14)(r);var i=t(50);for(var o in i)i.hasOwnProperty(o)&&r.plugins.register(i[o]);r.platform.initialize(),e.exports=r,"undefined"!=typeof window&&(window.Chart=r),r.Legend=i.legend._element,r.Title=i.title._element,r.pluginService=r.plugins,r.PluginBase=r.Element.extend({}),r.canvasHelpers=r.helpers.canvas,r.layoutService=r.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,41:41,46:46,49:49,50:50,54:54,55:55,56:56,57:57,58:58,59:59,8:8,9:9}],8:[function(t,e,n){e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){e.exports=function(t){t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),r._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:i.Rectangle,initialize:function(){var e,n=this;t.DatasetController.prototype.initialize.apply(n,arguments),(e=n.getMeta()).stack=n.getDataset().stack,e.bar=!0},update:function(t){var e,n,r=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,n=r.length;e<n;++e)this.updateElement(r[e],e,t)},updateElement:function(t,e,n){var r=this,i=r.chart,a=r.getMeta(),s=r.getDataset(),l=t.custom||{},u=i.options.elements.rectangle;t._xScale=r.getScaleForId(a.xAxisID),t._yScale=r.getScaleForId(a.yAxisID),t._datasetIndex=r.index,t._index=e,t._model={datasetLabel:s.label,label:i.data.labels[e],borderSkipped:l.borderSkipped?l.borderSkipped:u.borderSkipped,backgroundColor:l.backgroundColor?l.backgroundColor:o.valueAtIndexOrDefault(s.backgroundColor,e,u.backgroundColor),borderColor:l.borderColor?l.borderColor:o.valueAtIndexOrDefault(s.borderColor,e,u.borderColor),borderWidth:l.borderWidth?l.borderWidth:o.valueAtIndexOrDefault(s.borderWidth,e,u.borderWidth)},r.updateElementGeometry(t,e,n),t.pivot()},updateElementGeometry:function(t,e,n){var r=this,i=t._model,o=r.getValueScale(),a=o.getBasePixel(),s=o.isHorizontal(),l=r._ruler||r.getRuler(),u=r.calculateBarValuePixels(r.index,e),c=r.calculateBarIndexPixels(r.index,e,l);i.horizontal=s,i.base=n?a:u.base,i.x=s?n?a:u.head:c.center,i.y=s?c.center:n?a:u.head,i.height=s?c.size:void 0,i.width=s?void 0:c.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,n,r=this.chart,i=this.getIndexScale().options.stacked,o=void 0===t?r.data.datasets.length:t+1,a=[];for(e=0;e<o;++e)(n=r.getDatasetMeta(e)).bar&&r.isDatasetVisible(e)&&(!1===i||!0===i&&-1===a.indexOf(n.stack)||void 0===i&&(void 0===n.stack||-1===a.indexOf(n.stack)))&&a.push(n.stack);return a},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var n=this._getStacks(t),r=void 0!==e?n.indexOf(e):-1;return-1===r?n.length-1:r},getRuler:function(){var t,e,n=this.getIndexScale(),r=this.getStackCount(),i=this.index,a=n.isHorizontal(),s=a?n.left:n.top,l=s+(a?n.width:n.height),u=[];for(t=0,e=this.getMeta().data.length;t<e;++t)u.push(n.getPixelForValue(null,t,i));return{min:o.isNullOrUndef(n.options.barThickness)?function(t,e){var n,r,i,o,a=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(i=1,o=e.length;i<o;++i)a=Math.min(a,e[i]-e[i-1]);for(i=0,o=s.length;i<o;++i)r=t.getPixelForTick(i),a=i>0?Math.min(a,r-n):a,n=r;return a}(n,u):-1,pixels:u,start:s,end:l,stackCount:r,scale:n}},calculateBarValuePixels:function(t,e){var n,r,i,o,a,s,l=this.chart,u=this.getMeta(),c=this.getValueScale(),d=l.data.datasets,f=c.getRightValue(d[t].data[e]),h=c.options.stacked,p=u.stack,g=0;if(h||void 0===h&&void 0!==p)for(n=0;n<t;++n)(r=l.getDatasetMeta(n)).bar&&r.stack===p&&r.controller.getValueScaleId()===c.id&&l.isDatasetVisible(n)&&(i=c.getRightValue(d[n].data[e]),(f<0&&i<0||f>=0&&i>0)&&(g+=i));return o=c.getPixelForValue(g),{size:s=((a=c.getPixelForValue(g+f))-o)/2,base:o,head:a,center:a+s/2}},calculateBarIndexPixels:function(t,e,n){var r=n.scale.options,i="flex"===r.barThickness?function(t,e,n){var r,i=e.pixels,o=i[t],a=t>0?i[t-1]:null,s=t<i.length-1?i[t+1]:null,l=n.categoryPercentage;return null===a&&(a=o-(null===s?e.end-o:s-o)),null===s&&(s=o+o-a),r=o-(o-a)/2*l,{chunk:(s-a)/2*l/e.stackCount,ratio:n.barPercentage,start:r}}(e,n,r):function(t,e,n){var r,i,a=n.barThickness,s=e.stackCount,l=e.pixels[t];return o.isNullOrUndef(a)?(r=e.min*n.categoryPercentage,i=n.barPercentage):(r=a*s,i=1),{chunk:r/s,ratio:i,start:l-r/2}}(e,n,r),a=this.getStackIndex(t,this.getMeta().stack),s=i.start+i.chunk*a+i.chunk/2,l=Math.min(o.valueOrDefault(r.maxBarThickness,1/0),i.chunk*i.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}},draw:function(){var t=this.chart,e=this.getValueScale(),n=this.getMeta().data,r=this.getDataset(),i=n.length,a=0;for(o.canvas.clipArea(t.ctx,t.chartArea);a<i;++a)isNaN(e.getRightValue(r.data[a]))||n[a].draw();o.canvas.unclipArea(t.ctx)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{26:26,41:41,46:46}],16:[function(t,e,n){var r=t(26),i=t(41),a=t(46);r._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",r=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+r.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:i.Point,update:function(t){var e=this,n=e.getMeta().data;a.each(n,(function(n,r){e.updateElement(n,r,t)}))},updateElement:function(t,e,n){var r=this,i=r.getMeta(),a=t.custom||{},s=r.getScaleForId(i.xAxisID),l=r.getScaleForId(i.yAxisID),u=r._resolveElementOptions(t,e),c=r.getDataset().data[e],d=r.index,f=n?s.getPixelForDecimal(.5):s.getPixelForValue("object"===o(c)?c:NaN,e,d),h=n?l.getBasePixel():l.getPixelForValue(c,e,d);t._xScale=s,t._yScale=l,t._options=u,t._datasetIndex=d,t._index=e,t._model={backgroundColor:u.backgroundColor,borderColor:u.borderColor,borderWidth:u.borderWidth,hitRadius:u.hitRadius,pointStyle:u.pointStyle,rotation:u.rotation,radius:n?0:u.radius,skip:a.skip||isNaN(f)||isNaN(h),x:f,y:h},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=a.valueOrDefault(n.hoverBackgroundColor,a.getHoverColor(n.backgroundColor)),e.borderColor=a.valueOrDefault(n.hoverBorderColor,a.getHoverColor(n.borderColor)),e.borderWidth=a.valueOrDefault(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},_resolveElementOptions:function(t,e){var n,r,i,o=this.chart,s=o.data.datasets[this.index],l=t.custom||{},u=o.options.elements.point,c=a.options.resolve,d=s.data[e],f={},h={chart:o,dataIndex:e,dataset:s,datasetIndex:this.index},p=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"];for(n=0,r=p.length;n<r;++n)f[i=p[n]]=c([l[i],s[i],u[i]],h,e);return f.radius=c([l.radius,d?d.r:void 0,s.radius,u.radius],h,e),f}})}},{26:26,41:41,46:46}],17:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,r=n.datasets,i=n.labels;if(r.length)for(var o=0;o<r[0].data.length;++o)e.push('<li><span style="background-color:'+r[0].backgroundColor[o]+'"></span>'),i[o]&&e.push(i[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,r){var i=t.getDatasetMeta(0),a=e.datasets[0],s=i.data[r],l=s&&s.custom||{},u=o.valueAtIndexOrDefault,c=t.options.elements.arc;return{text:n,fillStyle:l.backgroundColor?l.backgroundColor:u(a.backgroundColor,r,c.backgroundColor),strokeStyle:l.borderColor?l.borderColor:u(a.borderColor,r,c.borderColor),lineWidth:l.borderWidth?l.borderWidth:u(a.borderWidth,r,c.borderWidth),hidden:isNaN(a.data[r])||i.data[r].hidden,index:r}})):[]}},onClick:function(t,e){var n,r,i,o=e.index,a=this.chart;for(n=0,r=(a.data.datasets||[]).length;n<r;++n)(i=a.getDatasetMeta(n)).data[o]&&(i.data[o].hidden=!i.data[o].hidden);a.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],r=": "+e.datasets[t.datasetIndex].data[t.index];return o.isArray(n)?(n=n.slice())[0]+=r:n+=r,n}}}}),r._set("pie",o.clone(r.doughnut)),r._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:i.Arc,linkScales:o.noop,getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e=this,n=e.chart,r=n.chartArea,i=n.options,a=i.elements.arc,s=r.right-r.left-a.borderWidth,l=r.bottom-r.top-a.borderWidth,u=Math.min(s,l),c={x:0,y:0},d=e.getMeta(),f=i.cutoutPercentage,h=i.circumference;if(h<2*Math.PI){var p=i.rotation%(2*Math.PI),g=(p+=2*Math.PI*(p>=Math.PI?-1:p<-Math.PI?1:0))+h,v={x:Math.cos(p),y:Math.sin(p)},m={x:Math.cos(g),y:Math.sin(g)},y=p<=0&&g>=0||p<=2*Math.PI&&2*Math.PI<=g,b=p<=.5*Math.PI&&.5*Math.PI<=g||p<=2.5*Math.PI&&2.5*Math.PI<=g,x=p<=-Math.PI&&-Math.PI<=g||p<=Math.PI&&Math.PI<=g,w=p<=.5*-Math.PI&&.5*-Math.PI<=g||p<=1.5*Math.PI&&1.5*Math.PI<=g,S=f/100,k={x:x?-1:Math.min(v.x*(v.x<0?1:S),m.x*(m.x<0?1:S)),y:w?-1:Math.min(v.y*(v.y<0?1:S),m.y*(m.y<0?1:S))},C={x:y?1:Math.max(v.x*(v.x>0?1:S),m.x*(m.x>0?1:S)),y:b?1:Math.max(v.y*(v.y>0?1:S),m.y*(m.y>0?1:S))},M={width:.5*(C.x-k.x),height:.5*(C.y-k.y)};u=Math.min(s/M.width,l/M.height),c={x:-.5*(C.x+k.x),y:-.5*(C.y+k.y)}}n.borderWidth=e.getMaxBorderWidth(d.data),n.outerRadius=Math.max((u-n.borderWidth)/2,0),n.innerRadius=Math.max(f?n.outerRadius/100*f:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=c.x*n.outerRadius,n.offsetY=c.y*n.outerRadius,d.total=e.calculateTotal(),e.outerRadius=n.outerRadius-n.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-n.radiusLength,0),o.each(d.data,(function(n,r){e.updateElement(n,r,t)}))},updateElement:function(t,e,n){var r=this,i=r.chart,a=i.chartArea,s=i.options,l=s.animation,u=(a.left+a.right)/2,c=(a.top+a.bottom)/2,d=s.rotation,f=s.rotation,h=r.getDataset(),p=n&&l.animateRotate?0:t.hidden?0:r.calculateCircumference(h.data[e])*(s.circumference/(2*Math.PI)),g=n&&l.animateScale?0:r.innerRadius,v=n&&l.animateScale?0:r.outerRadius,m=o.valueAtIndexOrDefault;o.extend(t,{_datasetIndex:r.index,_index:e,_model:{x:u+i.offsetX,y:c+i.offsetY,startAngle:d,endAngle:f,circumference:p,outerRadius:v,innerRadius:g,label:m(h.label,e,i.data.labels[e])}});var y=t._model,b=t.custom||{},x=o.valueAtIndexOrDefault,w=this.chart.options.elements.arc;y.backgroundColor=b.backgroundColor?b.backgroundColor:x(h.backgroundColor,e,w.backgroundColor),y.borderColor=b.borderColor?b.borderColor:x(h.borderColor,e,w.borderColor),y.borderWidth=b.borderWidth?b.borderWidth:x(h.borderWidth,e,w.borderWidth),n&&l.animateRotate||(y.startAngle=0===e?s.rotation:r.getMeta().data[e-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),r=0;return o.each(n.data,(function(n,i){t=e.data[i],isNaN(t)||n.hidden||(r+=Math.abs(t))})),r},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,n,r=0,i=this.index,o=t.length,a=0;a<o;a++)e=t[a]._model?t[a]._model.borderWidth:0,r=(n=t[a]._chart?t[a]._chart.config.data.datasets[i].hoverBorderWidth:0)>(r=e>r?e:r)?n:r;return r}})}},{26:26,41:41,46:46}],18:[function(t,e,n){var r=t(26),i=t(41),a=t(46);r._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return a.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:i.Line,dataElementType:i.Point,update:function(t){var n,r,i,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],c=o.chart.options,d=c.elements.line,f=o.getScaleForId(s.yAxisID),h=o.getDataset(),p=e(h,c);for(p&&(i=l.custom||{},void 0!==h.tension&&void 0===h.lineTension&&(h.lineTension=h.tension),l._scale=f,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:h.spanGaps?h.spanGaps:c.spanGaps,tension:i.tension?i.tension:a.valueOrDefault(h.lineTension,d.tension),backgroundColor:i.backgroundColor?i.backgroundColor:h.backgroundColor||d.backgroundColor,borderWidth:i.borderWidth?i.borderWidth:h.borderWidth||d.borderWidth,borderColor:i.borderColor?i.borderColor:h.borderColor||d.borderColor,borderCapStyle:i.borderCapStyle?i.borderCapStyle:h.borderCapStyle||d.borderCapStyle,borderDash:i.borderDash?i.borderDash:h.borderDash||d.borderDash,borderDashOffset:i.borderDashOffset?i.borderDashOffset:h.borderDashOffset||d.borderDashOffset,borderJoinStyle:i.borderJoinStyle?i.borderJoinStyle:h.borderJoinStyle||d.borderJoinStyle,fill:i.fill?i.fill:void 0!==h.fill?h.fill:d.fill,steppedLine:i.steppedLine?i.steppedLine:a.valueOrDefault(h.steppedLine,d.stepped),cubicInterpolationMode:i.cubicInterpolationMode?i.cubicInterpolationMode:a.valueOrDefault(h.cubicInterpolationMode,d.cubicInterpolationMode)},l.pivot()),n=0,r=u.length;n<r;++n)o.updateElement(u[n],n,t);for(p&&0!==l._model.tension&&o.updateBezierControlPoints(),n=0,r=u.length;n<r;++n)u[n].pivot()},getPointBackgroundColor:function(t,e){var n=this.chart.options.elements.point.backgroundColor,r=this.getDataset(),i=t.custom||{};return i.backgroundColor?n=i.backgroundColor:r.pointBackgroundColor?n=a.valueAtIndexOrDefault(r.pointBackgroundColor,e,n):r.backgroundColor&&(n=r.backgroundColor),n},getPointBorderColor:function(t,e){var n=this.chart.options.elements.point.borderColor,r=this.getDataset(),i=t.custom||{};return i.borderColor?n=i.borderColor:r.pointBorderColor?n=a.valueAtIndexOrDefault(r.pointBorderColor,e,n):r.borderColor&&(n=r.borderColor),n},getPointBorderWidth:function(t,e){var n=this.chart.options.elements.point.borderWidth,r=this.getDataset(),i=t.custom||{};return isNaN(i.borderWidth)?!isNaN(r.pointBorderWidth)||a.isArray(r.pointBorderWidth)?n=a.valueAtIndexOrDefault(r.pointBorderWidth,e,n):isNaN(r.borderWidth)||(n=r.borderWidth):n=i.borderWidth,n},getPointRotation:function(t,e){var n=this.chart.options.elements.point.rotation,r=this.getDataset(),i=t.custom||{};return isNaN(i.rotation)?isNaN(r.pointRotation)&&!a.isArray(r.pointRotation)||(n=a.valueAtIndexOrDefault(r.pointRotation,e,n)):n=i.rotation,n},updateElement:function(t,e,n){var r,i,s=this,l=s.getMeta(),u=t.custom||{},c=s.getDataset(),d=s.index,f=c.data[e],h=s.getScaleForId(l.yAxisID),p=s.getScaleForId(l.xAxisID),g=s.chart.options.elements.point;void 0!==c.radius&&void 0===c.pointRadius&&(c.pointRadius=c.radius),void 0!==c.hitRadius&&void 0===c.pointHitRadius&&(c.pointHitRadius=c.hitRadius),r=p.getPixelForValue("object"===o(f)?f:NaN,e,d),i=n?h.getBasePixel():s.calculatePointY(f,e,d),t._xScale=p,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:r,y:i,skip:u.skip||isNaN(r)||isNaN(i),radius:u.radius||a.valueAtIndexOrDefault(c.pointRadius,e,g.radius),pointStyle:u.pointStyle||a.valueAtIndexOrDefault(c.pointStyle,e,g.pointStyle),rotation:s.getPointRotation(t,e),backgroundColor:s.getPointBackgroundColor(t,e),borderColor:s.getPointBorderColor(t,e),borderWidth:s.getPointBorderWidth(t,e),tension:l.dataset._model?l.dataset._model.tension:0,steppedLine:!!l.dataset._model&&l.dataset._model.steppedLine,hitRadius:u.hitRadius||a.valueAtIndexOrDefault(c.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var r,i,o,a=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),u=0,c=0;if(l.options.stacked){for(r=0;r<n;r++)if(i=a.data.datasets[r],"line"===(o=a.getDatasetMeta(r)).type&&o.yAxisID===l.id&&a.isDatasetVisible(r)){var d=Number(l.getRightValue(i.data[e]));d<0?c+=d||0:u+=d||0}var f=Number(l.getRightValue(t));return f<0?l.getPixelForValue(c+f):l.getPixelForValue(u+f)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,n,r,i=this.getMeta(),o=this.chart.chartArea,s=i.data||[];function l(t,e,n){return Math.max(Math.min(t,n),e)}if(i.dataset._model.spanGaps&&(s=s.filter((function(t){return!t._model.skip}))),"monotone"===i.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(s);else for(t=0,e=s.length;t<e;++t)n=s[t]._model,r=a.splineCurve(a.previousItem(s,t)._model,n,a.nextItem(s,t)._model,i.dataset._model.tension),n.controlPointPreviousX=r.previous.x,n.controlPointPreviousY=r.previous.y,n.controlPointNextX=r.next.x,n.controlPointNextY=r.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=s.length;t<e;++t)(n=s[t]._model).controlPointPreviousX=l(n.controlPointPreviousX,o.left,o.right),n.controlPointPreviousY=l(n.controlPointPreviousY,o.top,o.bottom),n.controlPointNextX=l(n.controlPointNextX,o.left,o.right),n.controlPointNextY=l(n.controlPointNextY,o.top,o.bottom)},draw:function(){var t,n=this.chart,r=this.getMeta(),i=r.data||[],o=n.chartArea,s=i.length,l=0;for(e(this.getDataset(),n.options)&&(t=(r.dataset._model.borderWidth||0)/2,a.canvas.clipArea(n.ctx,{left:o.left,right:o.right,top:o.top-t,bottom:o.bottom+t}),r.dataset.draw(),a.canvas.unclipArea(n.ctx));l<s;++l)i[l].draw(o)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,r=t.custom||{},i=t._model;t.$previousStyle={backgroundColor:i.backgroundColor,borderColor:i.borderColor,borderWidth:i.borderWidth,radius:i.radius},i.backgroundColor=r.hoverBackgroundColor||a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,a.getHoverColor(i.backgroundColor)),i.borderColor=r.hoverBorderColor||a.valueAtIndexOrDefault(e.pointHoverBorderColor,n,a.getHoverColor(i.borderColor)),i.borderWidth=r.hoverBorderWidth||a.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,i.borderWidth),i.radius=r.hoverRadius||a.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius)}})}},{26:26,41:41,46:46}],19:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,r=n.datasets,i=n.labels;if(r.length)for(var o=0;o<r[0].data.length;++o)e.push('<li><span style="background-color:'+r[0].backgroundColor[o]+'"></span>'),i[o]&&e.push(i[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(n,r){var i=t.getDatasetMeta(0),a=e.datasets[0],s=i.data[r].custom||{},l=o.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:n,fillStyle:s.backgroundColor?s.backgroundColor:l(a.backgroundColor,r,u.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(a.borderColor,r,u.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(a.borderWidth,r,u.borderWidth),hidden:isNaN(a.data[r])||i.data[r].hidden,index:r}})):[]}},onClick:function(t,e){var n,r,i,o=e.index,a=this.chart;for(n=0,r=(a.data.datasets||[]).length;n<r;++n)(i=a.getDatasetMeta(n)).data[o].hidden=!i.data[o].hidden;a.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:i.Arc,linkScales:o.noop,update:function(t){var e,n,r,i=this,a=i.getDataset(),s=i.getMeta(),l=i.chart.options.startAngle||0,u=i._starts=[],c=i._angles=[];for(i._updateRadius(),s.count=i.countVisibleElements(),e=0,n=a.data.length;e<n;e++)u[e]=l,r=i._computeAngle(e),c[e]=r,l+=r;o.each(s.data,(function(e,n){i.updateElement(e,n,t)}))},_updateRadius:function(){var t=this,e=t.chart,n=e.chartArea,r=e.options,i=r.elements.arc,o=Math.min(n.right-n.left,n.bottom-n.top);e.outerRadius=Math.max((o-i.borderWidth/2)/2,0),e.innerRadius=Math.max(r.cutoutPercentage?e.outerRadius/100*r.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,n){var r=this,i=r.chart,a=r.getDataset(),s=i.options,l=s.animation,u=i.scale,c=i.data.labels,d=u.xCenter,f=u.yCenter,h=s.startAngle,p=t.hidden?0:u.getDistanceFromCenterForValue(a.data[e]),g=r._starts[e],v=g+(t.hidden?0:r._angles[e]),m=l.animateScale?0:u.getDistanceFromCenterForValue(a.data[e]);o.extend(t,{_datasetIndex:r.index,_index:e,_scale:u,_model:{x:d,y:f,innerRadius:0,outerRadius:n?m:p,startAngle:n&&l.animateRotate?h:g,endAngle:n&&l.animateRotate?h:v,label:o.valueAtIndexOrDefault(c,e,c[e])}});var y=this.chart.options.elements.arc,b=t.custom||{},x=o.valueAtIndexOrDefault,w=t._model;w.backgroundColor=b.backgroundColor?b.backgroundColor:x(a.backgroundColor,e,y.backgroundColor),w.borderColor=b.borderColor?b.borderColor:x(a.borderColor,e,y.borderColor),w.borderWidth=b.borderWidth?b.borderWidth:x(a.borderWidth,e,y.borderWidth),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return o.each(e.data,(function(e,r){isNaN(t.data[r])||e.hidden||n++})),n},_computeAngle:function(t){var e=this,n=this.getMeta().count,r=e.getDataset(),i=e.getMeta();if(isNaN(r.data[t])||i.data[t].hidden)return 0;var a={chart:e.chart,dataIndex:t,dataset:r,datasetIndex:e.index};return o.options.resolve([e.chart.options.elements.arc.angle,2*Math.PI/n],a,t)}})}},{26:26,41:41,46:46}],20:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:i.Line,dataElementType:i.Point,linkScales:o.noop,update:function(t){var e=this,n=e.getMeta(),r=n.dataset,i=n.data,a=r.custom||{},s=e.getDataset(),l=e.chart.options.elements.line,u=e.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),o.extend(n.dataset,{_datasetIndex:e.index,_scale:u,_children:i,_loop:!0,_model:{tension:a.tension?a.tension:o.valueOrDefault(s.lineTension,l.tension),backgroundColor:a.backgroundColor?a.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:s.borderWidth||l.borderWidth,borderColor:a.borderColor?a.borderColor:s.borderColor||l.borderColor,fill:a.fill?a.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:a.borderCapStyle?a.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:a.borderDash?a.borderDash:s.borderDash||l.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),n.dataset.pivot(),o.each(i,(function(n,r){e.updateElement(n,r,t)}),e),e.updateBezierControlPoints()},updateElement:function(t,e,n){var r=this,i=t.custom||{},a=r.getDataset(),s=r.chart.scale,l=r.chart.options.elements.point,u=s.getPointPositionForValue(e,a.data[e]);void 0!==a.radius&&void 0===a.pointRadius&&(a.pointRadius=a.radius),void 0!==a.hitRadius&&void 0===a.pointHitRadius&&(a.pointHitRadius=a.hitRadius),o.extend(t,{_datasetIndex:r.index,_index:e,_scale:s,_model:{x:n?s.xCenter:u.x,y:n?s.yCenter:u.y,tension:i.tension?i.tension:o.valueOrDefault(a.lineTension,r.chart.options.elements.line.tension),radius:i.radius?i.radius:o.valueAtIndexOrDefault(a.pointRadius,e,l.radius),backgroundColor:i.backgroundColor?i.backgroundColor:o.valueAtIndexOrDefault(a.pointBackgroundColor,e,l.backgroundColor),borderColor:i.borderColor?i.borderColor:o.valueAtIndexOrDefault(a.pointBorderColor,e,l.borderColor),borderWidth:i.borderWidth?i.borderWidth:o.valueAtIndexOrDefault(a.pointBorderWidth,e,l.borderWidth),pointStyle:i.pointStyle?i.pointStyle:o.valueAtIndexOrDefault(a.pointStyle,e,l.pointStyle),rotation:i.rotation?i.rotation:o.valueAtIndexOrDefault(a.pointRotation,e,l.rotation),hitRadius:i.hitRadius?i.hitRadius:o.valueAtIndexOrDefault(a.pointHitRadius,e,l.hitRadius)}}),t._model.skip=i.skip?i.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();o.each(e.data,(function(n,r){var i=n._model,a=o.splineCurve(o.previousItem(e.data,r,!0)._model,i,o.nextItem(e.data,r,!0)._model,i.tension);i.controlPointPreviousX=Math.max(Math.min(a.previous.x,t.right),t.left),i.controlPointPreviousY=Math.max(Math.min(a.previous.y,t.bottom),t.top),i.controlPointNextX=Math.max(Math.min(a.next.x,t.right),t.left),i.controlPointNextY=Math.max(Math.min(a.next.y,t.bottom),t.top),n.pivot()}))},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},r=t._index,i=t._model;t.$previousStyle={backgroundColor:i.backgroundColor,borderColor:i.borderColor,borderWidth:i.borderWidth,radius:i.radius},i.radius=n.hoverRadius?n.hoverRadius:o.valueAtIndexOrDefault(e.pointHoverRadius,r,this.chart.options.elements.point.hoverRadius),i.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,r,o.getHoverColor(i.backgroundColor)),i.borderColor=n.hoverBorderColor?n.hoverBorderColor:o.valueAtIndexOrDefault(e.pointHoverBorderColor,r,o.getHoverColor(i.borderColor)),i.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o.valueAtIndexOrDefault(e.pointHoverBorderWidth,r,i.borderWidth)}})}},{26:26,41:41,46:46}],21:[function(t,e,n){t(26)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{26:26}],22:[function(t,e,n){var r=t(27);n=e.exports=r.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null});Object.defineProperty(n.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(n.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})},{27:27}],23:[function(t,e,n){var r=t(26),i=t(46);r._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:i.noop,onComplete:i.noop}}),e.exports={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,r){var i,o,a=this.animations;for(e.chart=t,r||(t.animating=!0),i=0,o=a.length;i<o;++i)if(a[i].chart===t)return void(a[i]=e);a.push(e),1===a.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=i.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=i.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+n);var r=Date.now();t.dropFrames+=(r-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,n,r=this.animations,o=0;o<r.length;)n=(e=r[o]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),i.callback(e.render,[n,e],n),i.callback(e.onAnimationProgress,[e],n),e.currentStep>=e.numSteps?(i.callback(e.onAnimationComplete,[e],n),n.animating=!1,r.splice(o,1)):++o}}},{26:26,46:46}],24:[function(t,e,n){var r=t(22),i=t(23),a=t(26),s=t(46),l=t(29),u=t(31),c=t(49),d=t(32),f=t(34),h=t(36);e.exports=function(t){function e(e){var n=e.options;s.each(e.scales,(function(t){u.removeBox(e,t)})),n=s.configMerge(t.defaults.global,t.defaults[e.config.type],n),e.options=e.config.options=n,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.tooltip._options=n.tooltips,e.tooltip.initialize()}function n(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},s.extend(t.prototype,{construct:function(e,n){var r=this;n=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=s.configMerge(a.global,a[t.type],t.options||{}),t}(n);var i=c.acquireContext(e,n),o=i&&i.canvas,l=o&&o.height,u=o&&o.width;r.id=s.uid(),r.ctx=i,r.canvas=o,r.config=n,r.width=u,r.height=l,r.aspectRatio=l?u/l:null,r.options=n.options,r._bufferedRender=!1,r.chart=r,r.controller=r,t.instances[r.id]=r,Object.defineProperty(r,"data",{get:function(){return r.config.data},set:function(t){r.config.data=t}}),i&&o?(r.initialize(),r.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return d.notify(t,"beforeInit"),s.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),d.notify(t,"afterInit"),t},clear:function(){return s.canvas.clear(this),this},stop:function(){return i.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,r=e.canvas,i=n.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(s.getMaximumWidth(r))),a=Math.max(0,Math.floor(i?o/i:s.getMaximumHeight(r)));if((e.width!==o||e.height!==a)&&(r.width=e.width=o,r.height=e.height=a,r.style.width=o+"px",r.style.height=a+"px",s.retinaScale(e,n.devicePixelRatio),!t)){var l={width:o,height:a};d.notify(e,"resize",[l]),e.options.onResize&&e.options.onResize(e,l),e.stop(),e.update({duration:e.options.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;s.each(e.xAxes,(function(t,e){t.id=t.id||"x-axis-"+e})),s.each(e.yAxes,(function(t,e){t.id=t.id||"y-axis-"+e})),n&&(n.id=n.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,r=t.scales||{},i=[],o=Object.keys(r).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(i=i.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&i.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),s.each(i,(function(e){var i=e.options,a=i.id,l=s.valueOrDefault(i.type,e.dtype);n(i.position)!==n(e.dposition)&&(i.position=e.dposition),o[a]=!0;var u=null;if(a in r&&r[a].type===l)(u=r[a]).options=i,u.ctx=t.ctx,u.chart=t;else{var c=f.getScaleConstructor(l);if(!c)return;u=new c({id:a,type:l,options:i,ctx:t.ctx,chart:t}),r[u.id]=u}u.mergeTicksOptions(),e.isDefault&&(t.scale=u)})),s.each(o,(function(t,e){t||delete r[e]})),t.scales=r,f.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],r=[];return s.each(e.data.datasets,(function(i,o){var a=e.getDatasetMeta(o),s=i.type||e.config.type;if(a.type&&a.type!==s&&(e.destroyDatasetMeta(o),a=e.getDatasetMeta(o)),a.type=s,n.push(a.type),a.controller)a.controller.updateIndex(o),a.controller.linkScales();else{var l=t.controllers[a.type];if(void 0===l)throw new Error('"'+a.type+'" is not a chart type.');a.controller=new l(e,o),r.push(a.controller)}}),e),r},resetElements:function(){var t=this;s.each(t.data.datasets,(function(e,n){t.getDatasetMeta(n).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var n=this;if(t&&"object"===o(t)||(t={duration:t,lazy:arguments[1]}),e(n),d._invalidate(n),!1!==d.notify(n,"beforeUpdate")){n.tooltip._data=n.data;var r=n.buildOrUpdateControllers();s.each(n.data.datasets,(function(t,e){n.getDatasetMeta(e).controller.buildOrUpdateElements()}),n),n.updateLayout(),n.options.animation&&n.options.animation.duration&&s.each(r,(function(t){t.reset()})),n.updateDatasets(),n.tooltip.initialize(),n.lastActive=[],d.notify(n,"afterUpdate"),n._bufferedRender?n._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:n.render(t)}},updateLayout:function(){!1!==d.notify(this,"beforeLayout")&&(u.update(this,this.width,this.height),d.notify(this,"afterScaleUpdate"),d.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==d.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);d.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==d.notify(this,"beforeDatasetUpdate",[n])&&(e.controller.update(),d.notify(this,"afterDatasetUpdate",[n]))},render:function(t){var e=this;t&&"object"===o(t)||(t={duration:t,lazy:arguments[1]});var n=t.duration,a=t.lazy;if(!1!==d.notify(e,"beforeRender")){var l=e.options.animation,u=function(t){d.notify(e,"afterRender"),s.callback(l&&l.onComplete,[t],e)};if(l&&(void 0!==n&&0!==n||void 0===n&&0!==l.duration)){var c=new r({numSteps:(n||l.duration)/16.66,easing:t.easing||l.easing,render:function(t,e){var n=s.easing.effects[e.easing],r=e.currentStep,i=r/e.numSteps;t.draw(n(i),i,r)},onAnimationProgress:l.onProgress,onAnimationComplete:u});i.addAnimation(e,c,n,a)}else e.draw(),u(new r({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),s.isNullOrUndef(t)&&(t=1),e.transition(t),e.width<=0||e.height<=0||!1!==d.notify(e,"beforeDraw",[t])&&(s.each(e.boxes,(function(t){t.draw(e.chartArea)}),e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),d.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,n=(this.data.datasets||[]).length;e<n;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==d.notify(e,"beforeDatasetsDraw",[t])){for(var n=(e.data.datasets||[]).length-1;n>=0;--n)e.isDatasetVisible(n)&&e.drawDataset(n,t);d.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this.getDatasetMeta(t),r={meta:n,index:t,easingValue:e};!1!==d.notify(this,"beforeDatasetDraw",[r])&&(n.controller.draw(e),d.notify(this,"afterDatasetDraw",[r]))},_drawTooltip:function(t){var e=this.tooltip,n={tooltip:e,easingValue:t};!1!==d.notify(this,"beforeTooltipDraw",[n])&&(e.draw(),d.notify(this,"afterTooltipDraw",[n]))},getElementAtEvent:function(t){return l.modes.single(this,t)},getElementsAtEvent:function(t){return l.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return l.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var r=l.modes[e];return"function"==typeof r?r(this,t,n):[]},getDatasetAtEvent:function(t){return l.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var n=e._meta[this.id];return n||(n=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),n},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],r=n._meta&&n._meta[e];r&&(r.controller.destroy(),delete n._meta[e])},destroy:function(){var e,n,r=this,i=r.canvas;for(r.stop(),e=0,n=r.data.datasets.length;e<n;++e)r.destroyDatasetMeta(e);i&&(r.unbindEvents(),s.canvas.clear(r),c.releaseContext(r.ctx),r.canvas=null,r.ctx=null),d.notify(r,"destroy"),delete t.instances[r.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new h({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};s.each(t.options.events,(function(r){c.addEventListener(t,r,n),e[r]=n})),t.options.responsive&&(n=function(){t.resize()},c.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,s.each(e,(function(e,n){c.removeEventListener(t,n,e)})))},updateHoverStyle:function(t,e,n){var r,i,o,a=n?"setHoverStyle":"removeHoverStyle";for(i=0,o=t.length;i<o;++i)(r=t[i])&&this.getDatasetMeta(r._datasetIndex).controller[a](r)},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==d.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var r=e.handleEvent(t);n&&(r=n._start?n.handleEvent(t):r|n.handleEvent(t)),d.notify(e,"afterEvent",[t]);var i=e._bufferedRequest;return i?e.render(i):r&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,n=this,r=n.options||{},i=r.hover;return n.lastActive=n.lastActive||[],"mouseout"===t.type?n.active=[]:n.active=n.getElementsAtEventForMode(t,i.mode,i),s.callback(r.onHover||r.hover.onHover,[t.native,n.active],n),"mouseup"!==t.type&&"click"!==t.type||r.onClick&&r.onClick.call(n,t.native,n.active),n.lastActive.length&&n.updateHoverStyle(n.lastActive,i.mode,!1),n.active.length&&i.mode&&n.updateHoverStyle(n.active,i.mode,!0),e=!s.arrayEquals(n.active,n.lastActive),n.lastActive=n.active,e}}),t.Controller=t}},{22:22,23:23,26:26,29:29,31:31,32:32,34:34,36:36,46:46,49:49}],25:[function(t,e,n){var r=t(46);e.exports=function(t){var e=["push","pop","shift","splice","unshift"];function n(t,n){var r=t._chartjs;if(r){var i=r.listeners,o=i.indexOf(n);-1!==o&&i.splice(o,1),i.length>0||(e.forEach((function(e){delete t[e]})),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},r.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,n=this.getMeta(),r=this.getDataset().data||[],i=n.data;for(t=0,e=r.length;t<e;++t)i[t]=i[t]||this.createMetaData(t);n.dataset=n.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,i,o=this,a=o.getDataset(),s=a.data||(a.data=[]);o._data!==s&&(o._data&&n(o._data,o),i=o,(t=s)._chartjs?t._chartjs.listeners.push(i):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[i]}}),e.forEach((function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=i.apply(this,e);return r.each(t._chartjs.listeners,(function(t){"function"==typeof t[n]&&t[n].apply(t,e)})),o}})}))),o._data=s),o.resyncElements()},update:r.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],r=n.length,i=0;i<r;++i)n[i].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,r=0;for(t.dataset&&t.dataset.draw();r<n;++r)e[r].draw()},removeHoverStyle:function(t){r.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},o=r.valueAtIndexOrDefault,a=r.getHoverColor,s=t._model;t.$previousStyle={backgroundColor:s.backgroundColor,borderColor:s.borderColor,borderWidth:s.borderWidth},s.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:o(e.hoverBackgroundColor,n,a(s.backgroundColor)),s.borderColor=i.hoverBorderColor?i.hoverBorderColor:o(e.hoverBorderColor,n,a(s.borderColor)),s.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:o(e.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,n=t.data.length,r=e.length;r<n?t.data.splice(r,n-r):r>n&&this.insertElements(n,r-n)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=r.inherits}},{46:46}],26:[function(t,e,n){var r=t(46);e.exports={_set:function(t,e){return r.merge(this[t]||(this[t]={}),e)}}},{46:46}],27:[function(t,e,n){var r=t(3),i=t(46);var a=function(t){i.extend(this,t),this.initialize.apply(this,arguments)};i.extend(a.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=i.clone(t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,i=e._start,a=e._view;return n&&1!==t?(a||(a=e._view={}),i||(i=e._start={}),function(t,e,n,i){var a,s,l,u,c,d,f,h,p,g=Object.keys(n);for(a=0,s=g.length;a<s;++a)if(d=n[l=g[a]],e.hasOwnProperty(l)||(e[l]=d),(u=e[l])!==d&&"_"!==l[0]){if(t.hasOwnProperty(l)||(t[l]=u),c=t[l],(f=o(d))===o(c))if("string"===f){if((h=r(c)).valid&&(p=r(d)).valid){e[l]=p.mix(h,i).rgbString();continue}}else if("number"===f&&isFinite(c)&&isFinite(d)){e[l]=c+(d-c)*i;continue}e[l]=d}}(i,a,n,t),e):(e._view=n,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return i.isNumber(this._model.x)&&i.isNumber(this._model.y)}}),a.extend=i.inherits,e.exports=a},{3:3,46:46}],28:[function(t,e,n){var r=t(3),i=t(26),o=t(46),a=t(34);e.exports=function(){function t(t,e,n){var r;return"string"==typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}function e(t){return null!=t&&"none"!==t}function n(n,r,i){var a=document.defaultView,s=o._getParentNode(n),l=a.getComputedStyle(n)[r],u=a.getComputedStyle(s)[r],c=e(l),d=e(u),f=Number.POSITIVE_INFINITY;return c||d?Math.min(c?t(l,n,i):f,d?t(u,s,i):f):"none"}o.configMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,n,r){var i=e[t]||{},s=n[t];"scales"===t?e[t]=o.scaleMerge(i,s):"scale"===t?e[t]=o.merge(i,[a.getScaleDefaults(s.type),s]):o._merger(t,e,n,r)}})},o.scaleMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,n,r){if("xAxes"===t||"yAxes"===t){var i,s,l,u=n[t].length;for(e[t]||(e[t]=[]),i=0;i<u;++i)l=n[t][i],s=o.valueOrDefault(l.type,"xAxes"===t?"category":"linear"),i>=e[t].length&&e[t].push({}),!e[t][i].type||l.type&&l.type!==e[t][i].type?o.merge(e[t][i],[a.getScaleDefaults(s),l]):o.merge(e[t][i],l)}else o._merger(t,e,n,r)}})},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return o.each(t,(function(t){e(t)&&n.push(t)})),n},o.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var r=0,i=t.length;r<i;++r)if(e.call(n,t[r],r,t))return r;return-1},o.findNextWhere=function(t,e,n){o.isNullOrUndef(n)&&(n=-1);for(var r=n+1;r<t.length;r++){var i=t[r];if(e(i))return i}},o.findPreviousWhere=function(t,e,n){o.isNullOrUndef(n)&&(n=t.length);for(var r=n-1;r>=0;r--){var i=t[r];if(e(i))return i}},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,n){return Math.abs(t-e)<n},o.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},o.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,n=Math.round(e);return t===Math.pow(10,n)?n:e},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r),o=Math.atan2(r,n);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:i}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2==0?0:.5},o.splineCurve=function(t,e,n,r){var i=t.skip?e:t,o=e,a=n.skip?e:n,s=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)),l=Math.sqrt(Math.pow(a.x-o.x,2)+Math.pow(a.y-o.y,2)),u=s/(s+l),c=l/(s+l),d=r*(u=isNaN(u)?0:u),f=r*(c=isNaN(c)?0:c);return{previous:{x:o.x-d*(a.x-i.x),y:o.y-d*(a.y-i.y)},next:{x:o.x+f*(a.x-i.x),y:o.y+f*(a.y-i.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,n,r,i,a,s,l,u,c,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),f=d.length;for(e=0;e<f;++e)if(!(r=d[e]).model.skip){if(n=e>0?d[e-1]:null,(i=e<f-1?d[e+1]:null)&&!i.model.skip){var h=i.model.x-r.model.x;r.deltaK=0!==h?(i.model.y-r.model.y)/h:0}!n||n.model.skip?r.mK=r.deltaK:!i||i.model.skip?r.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(r.deltaK)?r.mK=0:r.mK=(n.deltaK+r.deltaK)/2}for(e=0;e<f-1;++e)r=d[e],i=d[e+1],r.model.skip||i.model.skip||(o.almostEquals(r.deltaK,0,this.EPSILON)?r.mK=i.mK=0:(a=r.mK/r.deltaK,s=i.mK/r.deltaK,(u=Math.pow(a,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(u),r.mK=a*l*r.deltaK,i.mK=s*l*r.deltaK)));for(e=0;e<f;++e)(r=d[e]).model.skip||(n=e>0?d[e-1]:null,i=e<f-1?d[e+1]:null,n&&!n.model.skip&&(c=(r.model.x-n.model.x)/3,r.model.controlPointPreviousX=r.model.x-c,r.model.controlPointPreviousY=r.model.y-c*r.mK),i&&!i.model.skip&&(c=(i.model.x-r.model.x)/3,r.model.controlPointNextX=r.model.x+c,r.model.controlPointNextY=r.model.y+c*r.mK))},o.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var n=Math.floor(o.log10(t)),r=t/Math.pow(10,n);return(e?r<1.5?1:r<3?2:r<7?5:10:r<=1?1:r<=2?2:r<=5?5:10)*Math.pow(10,n)},o.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o.getRelativePosition=function(t,e){var n,r,i=t.originalEvent||t,a=t.target||t.srcElement,s=a.getBoundingClientRect(),l=i.touches;l&&l.length>0?(n=l[0].clientX,r=l[0].clientY):(n=i.clientX,r=i.clientY);var u=parseFloat(o.getStyle(a,"padding-left")),c=parseFloat(o.getStyle(a,"padding-top")),d=parseFloat(o.getStyle(a,"padding-right")),f=parseFloat(o.getStyle(a,"padding-bottom")),h=s.right-s.left-u-d,p=s.bottom-s.top-c-f;return{x:n=Math.round((n-s.left-u)/h*a.width/e.currentDevicePixelRatio),y:r=Math.round((r-s.top-c)/p*a.height/e.currentDevicePixelRatio)}},o.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},o._calculatePadding=function(t,e,n){return(e=o.getStyle(t,e)).indexOf("%")>-1?n/parseInt(e,10):parseInt(e,10)},o._getParentNode=function(t){var e=t.parentNode;return e&&e.host&&(e=e.host),e},o.getMaximumWidth=function(t){var e=o._getParentNode(t);if(!e)return t.clientWidth;var n=e.clientWidth,r=n-o._calculatePadding(e,"padding-left",n)-o._calculatePadding(e,"padding-right",n),i=o.getConstraintWidth(t);return isNaN(i)?r:Math.min(r,i)},o.getMaximumHeight=function(t){var e=o._getParentNode(t);if(!e)return t.clientHeight;var n=e.clientHeight,r=n-o._calculatePadding(e,"padding-top",n)-o._calculatePadding(e,"padding-bottom",n),i=o.getConstraintHeight(t);return isNaN(i)?r:Math.min(r,i)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==n){var r=t.canvas,i=t.height,o=t.width;r.height=i*n,r.width=o*n,t.ctx.scale(n,n),r.style.height||r.style.width||(r.style.height=i+"px",r.style.width=o+"px")}},o.fontString=function(t,e,n){return e+" "+t+"px "+n},o.longestText=function(t,e,n,r){var i=(r=r||{}).data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},a=r.garbageCollect=[],r.font=e),t.font=e;var s=0;o.each(n,(function(e){null!=e&&!0!==o.isArray(e)?s=o.measureText(t,i,a,s,e):o.isArray(e)&&o.each(e,(function(e){null==e||o.isArray(e)||(s=o.measureText(t,i,a,s,e))}))}));var l=a.length/2;if(l>n.length){for(var u=0;u<l;u++)delete i[a[u]];a.splice(0,l)}return s},o.measureText=function(t,e,n,r,i){var o=e[i];return o||(o=e[i]=t.measureText(i).width,n.push(i)),o>r&&(r=o),r},o.numberOfLabelLines=function(t){var e=1;return o.each(t,(function(t){o.isArray(t)&&t.length>e&&(e=t.length)})),e},o.color=r?function(t){return t instanceof CanvasGradient&&(t=i.global.defaultColor),r(t)}:function(t){return console.error("Color.js not found!"),t},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{26:26,3:3,34:34,46:46}],29:[function(t,e,n){var r=t(46);function i(t,e){return t.native?{x:t.x,y:t.y}:r.getRelativePosition(t,e)}function o(t,e){var n,r,i,o,a;for(r=0,o=t.data.datasets.length;r<o;++r)if(t.isDatasetVisible(r))for(i=0,a=(n=t.getDatasetMeta(r)).data.length;i<a;++i){var s=n.data[i];s._view.skip||e(s)}}function a(t,e){var n=[];return o(t,(function(t){t.inRange(e.x,e.y)&&n.push(t)})),n}function s(t,e,n,r){var i=Number.POSITIVE_INFINITY,a=[];return o(t,(function(t){if(!n||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=r(e,o);s<i?(a=[t],i=s):s===i&&a.push(t)}})),a}function l(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,r){var i=e?Math.abs(t.x-r.x):0,o=n?Math.abs(t.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}function u(t,e,n){var r=i(e,t);n.axis=n.axis||"x";var o=l(n.axis),u=n.intersect?a(t,r):s(t,r,!1,o),c=[];return u.length?(t.data.datasets.forEach((function(e,n){if(t.isDatasetVisible(n)){var r=t.getDatasetMeta(n).data[u[0]._index];r&&!r._view.skip&&c.push(r)}})),c):[]}e.exports={modes:{single:function(t,e){var n=i(e,t),r=[];return o(t,(function(t){if(t.inRange(n.x,n.y))return r.push(t),r})),r.slice(0,1)},label:u,index:u,dataset:function(t,e,n){var r=i(e,t);n.axis=n.axis||"xy";var o=l(n.axis),u=n.intersect?a(t,r):s(t,r,!1,o);return u.length>0&&(u=t.getDatasetMeta(u[0]._datasetIndex).data),u},"x-axis":function(t,e){return u(t,e,{intersect:!1})},point:function(t,e){return a(t,i(e,t))},nearest:function(t,e,n){var r=i(e,t);n.axis=n.axis||"xy";var o=l(n.axis),a=s(t,r,n.intersect,o);return a.length>1&&a.sort((function(t,e){var n=t.getArea()-e.getArea();return 0===n&&(n=t._datasetIndex-e._datasetIndex),n})),a.slice(0,1)},x:function(t,e,n){var r=i(e,t),a=[],s=!1;return o(t,(function(t){t.inXRange(r.x)&&a.push(t),t.inRange(r.x,r.y)&&(s=!0)})),n.intersect&&!s&&(a=[]),a},y:function(t,e,n){var r=i(e,t),a=[],s=!1;return o(t,(function(t){t.inYRange(r.y)&&a.push(t),t.inRange(r.x,r.y)&&(s=!0)})),n.intersect&&!s&&(a=[]),a}}}},{46:46}],30:[function(t,e,n){t(26)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{26:26}],31:[function(t,e,n){var r=t(46);function i(t,e){return r.where(t,(function(t){return t.position===e}))}function o(t,e){t.forEach((function(t,e){return t._tmpIndex_=e,t})),t.sort((function(t,n){var r=e?n:t,i=e?t:n;return r.weight===i.weight?r._tmpIndex_-i._tmpIndex_:r.weight-i.weight})),t.forEach((function(t){delete t._tmpIndex_}))}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var r,i=["fullWidth","position","weight"],o=i.length,a=0;a<o;++a)r=i[a],n.hasOwnProperty(r)&&(e[r]=n[r])},update:function(t,e,n){if(t){var a=t.options.layout||{},s=r.options.toPadding(a.padding),l=s.left,u=s.right,c=s.top,d=s.bottom,f=i(t.boxes,"left"),h=i(t.boxes,"right"),p=i(t.boxes,"top"),g=i(t.boxes,"bottom"),v=i(t.boxes,"chartArea");o(f,!0),o(h,!1),o(p,!0),o(g,!1);var m=e-l-u,y=n-c-d,b=y/2,x=(e-m/2)/(f.length+h.length),w=(n-b)/(p.length+g.length),S=m,k=y,C=[];r.each(f.concat(h,p,g),(function(t){var e,n=t.isHorizontal();n?(e=t.update(t.fullWidth?m:S,w),k-=e.height):(e=t.update(x,k),S-=e.width),C.push({horizontal:n,minSize:e,box:t})}));var M=0,A=0,P=0,_=0;r.each(p.concat(g),(function(t){if(t.getPadding){var e=t.getPadding();M=Math.max(M,e.left),A=Math.max(A,e.right)}})),r.each(f.concat(h),(function(t){if(t.getPadding){var e=t.getPadding();P=Math.max(P,e.top),_=Math.max(_,e.bottom)}}));var T=l,I=u,O=c,F=d;r.each(f.concat(h),z),r.each(f,(function(t){T+=t.width})),r.each(h,(function(t){I+=t.width})),r.each(p.concat(g),z),r.each(p,(function(t){O+=t.height})),r.each(g,(function(t){F+=t.height})),r.each(f.concat(h),(function(t){var e=r.findNextWhere(C,(function(e){return e.box===t})),n={left:0,right:0,top:O,bottom:F};e&&t.update(e.minSize.width,k,n)})),T=l,I=u,O=c,F=d,r.each(f,(function(t){T+=t.width})),r.each(h,(function(t){I+=t.width})),r.each(p,(function(t){O+=t.height})),r.each(g,(function(t){F+=t.height}));var D=Math.max(M-T,0);T+=D,I+=Math.max(A-I,0);var E=Math.max(P-O,0);O+=E,F+=Math.max(_-F,0);var L=n-O-F,R=e-T-I;R===S&&L===k||(r.each(f,(function(t){t.height=L})),r.each(h,(function(t){t.height=L})),r.each(p,(function(t){t.fullWidth||(t.width=R)})),r.each(g,(function(t){t.fullWidth||(t.width=R)})),k=L,S=R);var N=l+D,V=c+E;r.each(f.concat(p),B),N+=S,V+=k,r.each(h,B),r.each(g,B),t.chartArea={left:T,top:O,right:T+S,bottom:O+k},r.each(v,(function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(S,k)}))}function z(t){var e=r.findNextWhere(C,(function(e){return e.box===t}));if(e)if(t.isHorizontal()){var n={left:Math.max(T,M),right:Math.max(I,A),top:0,bottom:0};t.update(t.fullWidth?m:S,y/2,n)}else t.update(e.minSize.width,k)}function B(t){t.isHorizontal()?(t.left=t.fullWidth?l:T,t.right=t.fullWidth?e-u:T+S,t.top=V,t.bottom=V+t.height,V=t.bottom):(t.left=N,t.right=N+t.width,t.top=O,t.bottom=O+k,N=t.right)}}}},{46:46}],32:[function(t,e,n){var r=t(26),i=t(46);r._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var r,i,o,a,s,l=this.descriptors(t),u=l.length;for(r=0;r<u;++r)if("function"==typeof(s=(o=(i=l[r]).plugin)[e])&&((a=[t].concat(n||[])).push(i.options),!1===s.apply(o,a)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],o=[],a=t&&t.config||{},s=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===n.indexOf(t)){var e=t.id,a=s[e];!1!==a&&(!0===a&&(a=i.clone(r.global.plugins[e])),n.push(t),o.push({plugin:t,options:a||{}}))}})),e.descriptors=o,e.id=this._cacheId,o},_invalidate:function(t){delete t.$plugins}}},{26:26,46:46}],33:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=t(35);function s(t){var e,n,r=[];for(e=0,n=t.length;e<n;++e)r.push(t[e].label);return r}function l(t,e,n){var r=t.getPixelForTick(e);return n&&(r-=0===e?(t.getPixelForTick(1)-r)/2:(r-t.getPixelForTick(e-1))/2),r}function u(t,e,n){return o.isArray(e)?o.longestText(t,n,e):t.measureText(e).width}function c(t){var e=o.valueOrDefault,n=r.global,i=e(t.fontSize,n.defaultFontSize),a=e(t.fontStyle,n.defaultFontStyle),s=e(t.fontFamily,n.defaultFontFamily);return{size:i,style:a,family:s,font:o.fontString(i,a,s)}}function d(t){return o.options.toLineHeight(o.valueOrDefault(t.lineHeight,1.2),o.valueOrDefault(t.fontSize,r.global.defaultFontSize))}r._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:a.formatters.values,minor:{},major:{}}}),e.exports=i.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){o.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var r,i,a,s,l,u,c=this;for(c.beforeUpdate(),c.maxWidth=t,c.maxHeight=e,c.margins=o.extend({left:0,right:0,top:0,bottom:0},n),c.longestTextCache=c.longestTextCache||{},c.beforeSetDimensions(),c.setDimensions(),c.afterSetDimensions(),c.beforeDataLimits(),c.determineDataLimits(),c.afterDataLimits(),c.beforeBuildTicks(),l=c.buildTicks()||[],c.afterBuildTicks(),c.beforeTickToLabelConversion(),a=c.convertTicksToLabels(l)||c.ticks,c.afterTickToLabelConversion(),c.ticks=a,r=0,i=a.length;r<i;++r)s=a[r],(u=l[r])?u.label=s:l.push(u={label:s,major:!1});return c._ticks=l,c.beforeCalculateTickRotation(),c.calculateTickRotation(),c.afterCalculateTickRotation(),c.beforeFit(),c.fit(),c.afterFit(),c.afterUpdate(),c.minSize},afterUpdate:function(){o.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){o.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){o.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){o.callback(this.options.beforeDataLimits,[this])},determineDataLimits:o.noop,afterDataLimits:function(){o.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){o.callback(this.options.beforeBuildTicks,[this])},buildTicks:o.noop,afterBuildTicks:function(){o.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){o.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){o.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){o.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,n=t.options.ticks,r=s(t._ticks),i=c(n);e.font=i.font;var a=n.minRotation||0;if(r.length&&t.options.display&&t.isHorizontal())for(var l,u=o.longestText(e,i.font,r,t.longestTextCache),d=u,f=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>f&&a<n.maxRotation;){var h=o.toRadians(a);if(l=Math.cos(h),Math.sin(h)*u>t.maxHeight){a--;break}a++,d=l*u}t.labelRotation=a},afterCalculateTickRotation:function(){o.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){o.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},n=s(t._ticks),r=t.options,i=r.ticks,a=r.scaleLabel,l=r.gridLines,f=r.display,h=t.isHorizontal(),p=c(i),g=r.gridLines.tickMarkLength;if(e.width=h?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:f&&l.drawTicks?g:0,e.height=h?f&&l.drawTicks?g:0:t.maxHeight,a.display&&f){var v=d(a)+o.options.toPadding(a.padding).height;h?e.height+=v:e.width+=v}if(i.display&&f){var m=o.longestText(t.ctx,p.font,n,t.longestTextCache),y=o.numberOfLabelLines(n),b=.5*p.size,x=t.options.ticks.padding;if(h){t.longestLabelWidth=m;var w=o.toRadians(t.labelRotation),S=Math.cos(w),k=Math.sin(w)*m+p.size*y+b*(y-1)+b;e.height=Math.min(t.maxHeight,e.height+k+x),t.ctx.font=p.font;var C=u(t.ctx,n[0],p.font),M=u(t.ctx,n[n.length-1],p.font);0!==t.labelRotation?(t.paddingLeft="bottom"===r.position?S*C+3:S*b+3,t.paddingRight="bottom"===r.position?S*b+3:S*M+3):(t.paddingLeft=C/2+3,t.paddingRight=M/2+3)}else i.mirror?m=0:m+=x+b,e.width=Math.min(t.maxWidth,e.width+m),t.paddingTop=p.size/2,t.paddingBottom=p.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){o.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(o.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:o.noop,getPixelForValue:o.noop,getValueForPixel:o.noop,getPixelForTick:function(t){var e=this,n=e.options.offset;if(e.isHorizontal()){var r=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(n?0:1),1),i=r*t+e.paddingLeft;n&&(i+=r/2);var o=e.left+Math.round(i);return o+=e.isFullWidth()?e.margins.left:0}var a=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(a/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,r=e.left+Math.round(n);return r+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,n,r,i,a=this,s=a.isHorizontal(),l=a.options.ticks.minor,u=t.length,c=o.toRadians(a.labelRotation),d=Math.cos(c),f=a.longestLabelWidth*d,h=[];for(l.maxTicksLimit&&(i=l.maxTicksLimit),s&&(e=!1,(f+l.autoSkipPadding)*u>a.width-(a.paddingLeft+a.paddingRight)&&(e=1+Math.floor((f+l.autoSkipPadding)*u/(a.width-(a.paddingLeft+a.paddingRight)))),i&&u>i&&(e=Math.max(e,Math.floor(u/i)))),n=0;n<u;n++)r=t[n],(e>1&&n%e>0||n%e==0&&n+e>=u)&&n!==u-1&&delete r.label,h.push(r);return h},draw:function(t){var e=this,n=e.options;if(n.display){var i=e.ctx,a=r.global,s=n.ticks.minor,u=n.ticks.major||s,f=n.gridLines,h=n.scaleLabel,p=0!==e.labelRotation,g=e.isHorizontal(),v=s.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),m=o.valueOrDefault(s.fontColor,a.defaultFontColor),y=c(s),b=o.valueOrDefault(u.fontColor,a.defaultFontColor),x=c(u),w=f.drawTicks?f.tickMarkLength:0,S=o.valueOrDefault(h.fontColor,a.defaultFontColor),k=c(h),C=o.options.toPadding(h.padding),M=o.toRadians(e.labelRotation),A=[],P=e.options.gridLines.lineWidth,_="right"===n.position?e.left:e.right-P-w,T="right"===n.position?e.left+w:e.right,I="bottom"===n.position?e.top+P:e.bottom-w-P,O="bottom"===n.position?e.top+P+w:e.bottom+P;if(o.each(v,(function(r,i){if(!o.isNullOrUndef(r.label)){var u,c,d,h,m,y,b,x,S,k,C,F,D,E,L=r.label;i===e.zeroLineIndex&&n.offset===f.offsetGridLines?(u=f.zeroLineWidth,c=f.zeroLineColor,d=f.zeroLineBorderDash,h=f.zeroLineBorderDashOffset):(u=o.valueAtIndexOrDefault(f.lineWidth,i),c=o.valueAtIndexOrDefault(f.color,i),d=o.valueOrDefault(f.borderDash,a.borderDash),h=o.valueOrDefault(f.borderDashOffset,a.borderDashOffset));var R="middle",N="middle",V=s.padding;if(g){var z=w+V;"bottom"===n.position?(N=p?"middle":"top",R=p?"right":"center",E=e.top+z):(N=p?"middle":"bottom",R=p?"left":"center",E=e.bottom-z);var B=l(e,i,f.offsetGridLines&&v.length>1);B<e.left&&(c="rgba(0,0,0,0)"),B+=o.aliasPixel(u),D=e.getPixelForTick(i)+s.labelOffset,m=b=S=C=B,y=I,x=O,k=t.top,F=t.bottom+P}else{var W,j="left"===n.position;s.mirror?(R=j?"left":"right",W=V):(R=j?"right":"left",W=w+V),D=j?e.right-W:e.left+W;var H=l(e,i,f.offsetGridLines&&v.length>1);H<e.top&&(c="rgba(0,0,0,0)"),H+=o.aliasPixel(u),E=e.getPixelForTick(i)+s.labelOffset,m=_,b=T,S=t.left,C=t.right+P,y=x=k=F=H}A.push({tx1:m,ty1:y,tx2:b,ty2:x,x1:S,y1:k,x2:C,y2:F,labelX:D,labelY:E,glWidth:u,glColor:c,glBorderDash:d,glBorderDashOffset:h,rotation:-1*M,label:L,major:r.major,textBaseline:N,textAlign:R})}})),o.each(A,(function(t){if(f.display&&(i.save(),i.lineWidth=t.glWidth,i.strokeStyle=t.glColor,i.setLineDash&&(i.setLineDash(t.glBorderDash),i.lineDashOffset=t.glBorderDashOffset),i.beginPath(),f.drawTicks&&(i.moveTo(t.tx1,t.ty1),i.lineTo(t.tx2,t.ty2)),f.drawOnChartArea&&(i.moveTo(t.x1,t.y1),i.lineTo(t.x2,t.y2)),i.stroke(),i.restore()),s.display){i.save(),i.translate(t.labelX,t.labelY),i.rotate(t.rotation),i.font=t.major?x.font:y.font,i.fillStyle=t.major?b:m,i.textBaseline=t.textBaseline,i.textAlign=t.textAlign;var n=t.label;if(o.isArray(n))for(var r=n.length,a=1.5*y.size,l=e.isHorizontal()?0:-a*(r-1)/2,u=0;u<r;++u)i.fillText(""+n[u],0,l),l+=a;else i.fillText(n,0,0);i.restore()}})),h.display){var F,D,E=0,L=d(h)/2;if(g)F=e.left+(e.right-e.left)/2,D="bottom"===n.position?e.bottom-L-C.bottom:e.top+L+C.top;else{var R="left"===n.position;F=R?e.left+L+C.top:e.right-L-C.top,D=e.top+(e.bottom-e.top)/2,E=R?-.5*Math.PI:.5*Math.PI}i.save(),i.translate(F,D),i.rotate(E),i.textAlign="center",i.textBaseline="middle",i.fillStyle=S,i.font=k.font,i.fillText(h.labelString,0,0),i.restore()}if(f.drawBorder){i.lineWidth=o.valueAtIndexOrDefault(f.lineWidth,0),i.strokeStyle=o.valueAtIndexOrDefault(f.color,0);var N=e.left,V=e.right+P,z=e.top,B=e.bottom+P,W=o.aliasPixel(i.lineWidth);g?(z=B="top"===n.position?e.bottom:e.top,z+=W,B+=W):(N=V="left"===n.position?e.right:e.left,N+=W,V+=W),i.beginPath(),i.moveTo(N,z),i.lineTo(V,B),i.stroke()}}}})},{26:26,27:27,35:35,46:46}],34:[function(t,e,n){var r=t(26),i=t(46),o=t(31);e.exports={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=i.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?i.merge({},[r.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=i.extend(this.defaults[t],e))},addScalesToLayout:function(t){i.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,o.addBox(t,e)}))}}},{26:26,31:31,46:46}],35:[function(t,e,n){var r=t(46);e.exports={formatters:{values:function(t){return r.isArray(t)?t:""+t},linear:function(t,e,n){var i=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(i)>1&&t!==Math.floor(t)&&(i=t-Math.floor(t));var o=r.log10(Math.abs(i)),a="";if(0!==t)if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var s=r.log10(Math.abs(t));a=t.toExponential(Math.floor(s)-Math.floor(o))}else{var l=-1*Math.floor(o);l=Math.max(Math.min(l,20),0),a=t.toFixed(l)}else a="0";return a},logarithmic:function(t,e,n){var i=t/Math.pow(10,Math.floor(r.log10(t)));return 0===t?"0":1===i||2===i||5===i||0===e||e===n.length-1?t.toExponential():""}}}},{46:46}],36:[function(t,e,n){var r=t(26),i=t(27),o=t(46);r._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:o.noop,title:function(t,e){var n="",r=e.labels,i=r?r.length:0;if(t.length>0){var o=t[0];o.xLabel?n=o.xLabel:i>0&&o.index<i&&(n=r[o.index])}return n},afterTitle:o.noop,beforeBody:o.noop,beforeLabel:o.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+=t.yLabel,n},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:o.noop,afterBody:o.noop,beforeFooter:o.noop,footer:o.noop,afterFooter:o.noop}}});var a={average:function(t){if(!t.length)return!1;var e,n,r=0,i=0,o=0;for(e=0,n=t.length;e<n;++e){var a=t[e];if(a&&a.hasValue()){var s=a.tooltipPosition();r+=s.x,i+=s.y,++o}}return{x:Math.round(r/o),y:Math.round(i/o)}},nearest:function(t,e){var n,r,i,a=e.x,s=e.y,l=Number.POSITIVE_INFINITY;for(n=0,r=t.length;n<r;++n){var u=t[n];if(u&&u.hasValue()){var c=u.getCenterPoint(),d=o.distanceBetweenPoints(e,c);d<l&&(l=d,i=u)}}if(i){var f=i.tooltipPosition();a=f.x,s=f.y}return{x:a,y:s}}};function s(t,e){var n=o.color(t);return n.alpha(e*n.alpha()).rgbaString()}function l(t,e){return e&&(o.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function u(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function c(t){var e=r.global,n=o.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:n(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:n(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:n(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:n(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:n(t.titleFontStyle,e.defaultFontStyle),titleFontSize:n(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:n(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:n(t.footerFontStyle,e.defaultFontStyle),footerFontSize:n(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function d(t){return l([],u(t))}(e.exports=i.extend({initialize:function(){this._model=c(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,n=e.callbacks,r=n.beforeTitle.apply(t,arguments),i=n.title.apply(t,arguments),o=n.afterTitle.apply(t,arguments),a=[];return a=l(a,u(r)),a=l(a,u(i)),a=l(a,u(o))},getBeforeBody:function(){return d(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var n=this,r=n._options.callbacks,i=[];return o.each(t,(function(t){var o={before:[],lines:[],after:[]};l(o.before,u(r.beforeLabel.call(n,t,e))),l(o.lines,r.label.call(n,t,e)),l(o.after,u(r.afterLabel.call(n,t,e))),i.push(o)})),i},getAfterBody:function(){return d(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,n=e.beforeFooter.apply(t,arguments),r=e.footer.apply(t,arguments),i=e.afterFooter.apply(t,arguments),o=[];return o=l(o,u(n)),o=l(o,u(r)),o=l(o,u(i))},update:function(t){var e,n,r,i,s,l,u,d=this,f=d._options,h=d._model,p=d._model=c(f),g=d._active,v=d._data,m={xAlign:h.xAlign,yAlign:h.yAlign},y={x:h.x,y:h.y},b={width:h.width,height:h.height},x={x:h.caretX,y:h.caretY};if(g.length){p.opacity=1;var w=[],S=[];x=a[f.position].call(d,g,d._eventPosition);var k=[];for(e=0,n=g.length;e<n;++e)k.push((r=g[e],i=void 0,s=void 0,l=void 0,u=void 0,i=r._xScale,s=r._yScale||r._scale,l=r._index,u=r._datasetIndex,{xLabel:i?i.getLabelForIndex(l,u):"",yLabel:s?s.getLabelForIndex(l,u):"",index:l,datasetIndex:u,x:r._model.x,y:r._model.y}));f.filter&&(k=k.filter((function(t){return f.filter(t,v)}))),f.itemSort&&(k=k.sort((function(t,e){return f.itemSort(t,e,v)}))),o.each(k,(function(t){w.push(f.callbacks.labelColor.call(d,t,d._chart)),S.push(f.callbacks.labelTextColor.call(d,t,d._chart))})),p.title=d.getTitle(k,v),p.beforeBody=d.getBeforeBody(k,v),p.body=d.getBody(k,v),p.afterBody=d.getAfterBody(k,v),p.footer=d.getFooter(k,v),p.x=Math.round(x.x),p.y=Math.round(x.y),p.caretPadding=f.caretPadding,p.labelColors=w,p.labelTextColors=S,p.dataPoints=k,b=function(t,e){var n=t._chart.ctx,r=2*e.yPadding,i=0,a=e.body,s=a.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);s+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,u=e.footer.length,c=e.titleFontSize,d=e.bodyFontSize,f=e.footerFontSize;r+=l*c,r+=l?(l-1)*e.titleSpacing:0,r+=l?e.titleMarginBottom:0,r+=s*d,r+=s?(s-1)*e.bodySpacing:0,r+=u?e.footerMarginTop:0,r+=u*f,r+=u?(u-1)*e.footerSpacing:0;var h=0,p=function(t){i=Math.max(i,n.measureText(t).width+h)};return n.font=o.fontString(c,e._titleFontStyle,e._titleFontFamily),o.each(e.title,p),n.font=o.fontString(d,e._bodyFontStyle,e._bodyFontFamily),o.each(e.beforeBody.concat(e.afterBody),p),h=e.displayColors?d+2:0,o.each(a,(function(t){o.each(t.before,p),o.each(t.lines,p),o.each(t.after,p)})),h=0,n.font=o.fontString(f,e._footerFontStyle,e._footerFontFamily),o.each(e.footer,p),{width:i+=2*e.xPadding,height:r}}(this,p),y=function(t,e,n,r){var i=t.x,o=t.y,a=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=n.xAlign,c=n.yAlign,d=a+s,f=l+s;return"right"===u?i-=e.width:"center"===u&&((i-=e.width/2)+e.width>r.width&&(i=r.width-e.width),i<0&&(i=0)),"top"===c?o+=d:o-="bottom"===c?e.height+d:e.height/2,"center"===c?"left"===u?i+=d:"right"===u&&(i-=d):"left"===u?i-=f:"right"===u&&(i+=f),{x:i,y:o}}(p,b,m=function(t,e){var n,r,i,o,a,s=t._model,l=t._chart,u=t._chart.chartArea,c="center",d="center";s.y<e.height?d="top":s.y>l.height-e.height&&(d="bottom");var f=(u.left+u.right)/2,h=(u.top+u.bottom)/2;"center"===d?(n=function(t){return t<=f},r=function(t){return t>f}):(n=function(t){return t<=e.width/2},r=function(t){return t>=l.width-e.width/2}),i=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},o=function(t){return t-e.width-s.caretSize-s.caretPadding<0},a=function(t){return t<=h?"top":"bottom"},n(s.x)?(c="left",i(s.x)&&(c="center",d=a(s.y))):r(s.x)&&(c="right",o(s.x)&&(c="center",d=a(s.y)));var p=t._options;return{xAlign:p.xAlign?p.xAlign:c,yAlign:p.yAlign?p.yAlign:d}}(this,b),d._chart)}else p.opacity=0;return p.xAlign=m.xAlign,p.yAlign=m.yAlign,p.x=y.x,p.y=y.y,p.width=b.width,p.height=b.height,p.caretX=x.x,p.caretY=x.y,d._model=p,t&&f.custom&&f.custom.call(d,p),d},drawCaret:function(t,e){var n=this._chart.ctx,r=this._view,i=this.getCaretPosition(t,e,r);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)},getCaretPosition:function(t,e,n){var r,i,o,a,s,l,u=n.caretSize,c=n.cornerRadius,d=n.xAlign,f=n.yAlign,h=t.x,p=t.y,g=e.width,v=e.height;if("center"===f)s=p+v/2,"left"===d?(i=(r=h)-u,o=r,a=s+u,l=s-u):(i=(r=h+g)+u,o=r,a=s-u,l=s+u);else if("left"===d?(r=(i=h+c+u)-u,o=i+u):"right"===d?(r=(i=h+g-c-u)-u,o=i+u):(r=(i=n.caretX)-u,o=i+u),"top"===f)s=(a=p)-u,l=a;else{s=(a=p+v)+u,l=a;var m=o;o=r,r=m}return{x1:r,x2:i,x3:o,y1:a,y2:s,y3:l}},drawTitle:function(t,e,n,r){var i=e.title;if(i.length){n.textAlign=e._titleAlign,n.textBaseline="top";var a,l,u=e.titleFontSize,c=e.titleSpacing;for(n.fillStyle=s(e.titleFontColor,r),n.font=o.fontString(u,e._titleFontStyle,e._titleFontFamily),a=0,l=i.length;a<l;++a)n.fillText(i[a],t.x,t.y),t.y+=u+c,a+1===i.length&&(t.y+=e.titleMarginBottom-c)}},drawBody:function(t,e,n,r){var i=e.bodyFontSize,a=e.bodySpacing,l=e.body;n.textAlign=e._bodyAlign,n.textBaseline="top",n.font=o.fontString(i,e._bodyFontStyle,e._bodyFontFamily);var u=0,c=function(e){n.fillText(e,t.x+u,t.y),t.y+=i+a};n.fillStyle=s(e.bodyFontColor,r),o.each(e.beforeBody,c);var d=e.displayColors;u=d?i+2:0,o.each(l,(function(a,l){var u=s(e.labelTextColors[l],r);n.fillStyle=u,o.each(a.before,c),o.each(a.lines,(function(o){d&&(n.fillStyle=s(e.legendColorBackground,r),n.fillRect(t.x,t.y,i,i),n.lineWidth=1,n.strokeStyle=s(e.labelColors[l].borderColor,r),n.strokeRect(t.x,t.y,i,i),n.fillStyle=s(e.labelColors[l].backgroundColor,r),n.fillRect(t.x+1,t.y+1,i-2,i-2),n.fillStyle=u),c(o)})),o.each(a.after,c)})),u=0,o.each(e.afterBody,c),t.y-=a},drawFooter:function(t,e,n,r){var i=e.footer;i.length&&(t.y+=e.footerMarginTop,n.textAlign=e._footerAlign,n.textBaseline="top",n.fillStyle=s(e.footerFontColor,r),n.font=o.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),o.each(i,(function(r){n.fillText(r,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})))},drawBackground:function(t,e,n,r,i){n.fillStyle=s(e.backgroundColor,i),n.strokeStyle=s(e.borderColor,i),n.lineWidth=e.borderWidth;var o=e.xAlign,a=e.yAlign,l=t.x,u=t.y,c=r.width,d=r.height,f=e.cornerRadius;n.beginPath(),n.moveTo(l+f,u),"top"===a&&this.drawCaret(t,r),n.lineTo(l+c-f,u),n.quadraticCurveTo(l+c,u,l+c,u+f),"center"===a&&"right"===o&&this.drawCaret(t,r),n.lineTo(l+c,u+d-f),n.quadraticCurveTo(l+c,u+d,l+c-f,u+d),"bottom"===a&&this.drawCaret(t,r),n.lineTo(l+f,u+d),n.quadraticCurveTo(l,u+d,l,u+d-f),"center"===a&&"left"===o&&this.drawCaret(t,r),n.lineTo(l,u+f),n.quadraticCurveTo(l,u,l+f,u),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},r={x:e.x,y:e.y},i=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(this.drawBackground(r,e,t,n,i),r.x+=e.xPadding,r.y+=e.yPadding,this.drawTitle(r,e,t,i),this.drawBody(r,e,t,i),this.drawFooter(r,e,t,i))}},handleEvent:function(t){var e,n=this,r=n._options;return n._lastActive=n._lastActive||[],"mouseout"===t.type?n._active=[]:n._active=n._chart.getElementsAtEventForMode(t,r.mode,r),(e=!o.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(r.enabled||r.custom)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0),n.pivot())),e}})).positioners=a},{26:26,27:27,46:46}],37:[function(t,e,n){var r=t(26),i=t(27),o=t(46);r._set("global",{elements:{arc:{backgroundColor:r.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=i.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var r=o.getAngleFromPoint(n,{x:t,y:e}),i=r.angle,a=r.distance,s=n.startAngle,l=n.endAngle;l<s;)l+=2*Math.PI;for(;i>l;)i-=2*Math.PI;for(;i<s;)i+=2*Math.PI;var u=i>=s&&i<=l,c=a>=n.innerRadius&&a<=n.outerRadius;return u&&c}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,r=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,r),t.arc(e.x,e.y,e.innerRadius,r,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{26:26,27:27,46:46}],38:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=r.global;r._set("global",{elements:{line:{tension:.4,backgroundColor:a.defaultColor,borderWidth:3,borderColor:a.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=i.extend({draw:function(){var t,e,n,r,i=this._view,s=this._chart.ctx,l=i.spanGaps,u=this._children.slice(),c=a.elements.line,d=-1;for(this._loop&&u.length&&u.push(u[0]),s.save(),s.lineCap=i.borderCapStyle||c.borderCapStyle,s.setLineDash&&s.setLineDash(i.borderDash||c.borderDash),s.lineDashOffset=i.borderDashOffset||c.borderDashOffset,s.lineJoin=i.borderJoinStyle||c.borderJoinStyle,s.lineWidth=i.borderWidth||c.borderWidth,s.strokeStyle=i.borderColor||a.defaultColor,s.beginPath(),d=-1,t=0;t<u.length;++t)e=u[t],n=o.previousItem(u,t),r=e._view,0===t?r.skip||(s.moveTo(r.x,r.y),d=t):(n=-1===d?n:u[d],r.skip||(d!==t-1&&!l||-1===d?s.moveTo(r.x,r.y):o.canvas.lineTo(s,n._view,e._view),d=t));s.stroke(),s.restore()}})},{26:26,27:27,46:46}],39:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=r.global.defaultColor;function s(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}r._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:a,borderColor:a,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=i.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:s,inXRange:s,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._model,i=this._chart.ctx,s=e.pointStyle,l=e.rotation,u=e.radius,c=e.x,d=e.y;e.skip||(void 0===t||n.x>=t.left&&1.01*t.right>=n.x&&n.y>=t.top&&1.01*t.bottom>=n.y)&&(i.strokeStyle=e.borderColor||a,i.lineWidth=o.valueOrDefault(e.borderWidth,r.global.elements.point.borderWidth),i.fillStyle=e.backgroundColor||a,o.canvas.drawPoint(i,s,u,c,d,l))}})},{26:26,27:27,46:46}],40:[function(t,e,n){var r=t(26),i=t(27);function o(t){return void 0!==t._view.width}function a(t){var e,n,r,i,a=t._view;if(o(t)){var s=a.width/2;e=a.x-s,n=a.x+s,r=Math.min(a.y,a.base),i=Math.max(a.y,a.base)}else{var l=a.height/2;e=Math.min(a.x,a.base),n=Math.max(a.x,a.base),r=a.y-l,i=a.y+l}return{left:e,top:r,right:n,bottom:i}}r._set("global",{elements:{rectangle:{backgroundColor:r.global.defaultColor,borderColor:r.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=i.extend({draw:function(){var t,e,n,r,i,o,a,s=this._chart.ctx,l=this._view,u=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,n=l.y-l.height/2,r=l.y+l.height/2,i=e>t?1:-1,o=1,a=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,n=l.y,i=1,o=(r=l.base)>n?1:-1,a=l.borderSkipped||"bottom"),u){var c=Math.min(Math.abs(t-e),Math.abs(n-r)),d=(u=u>c?c:u)/2,f=t+("left"!==a?d*i:0),h=e+("right"!==a?-d*i:0),p=n+("top"!==a?d*o:0),g=r+("bottom"!==a?-d*o:0);f!==h&&(n=p,r=g),p!==g&&(t=f,e=h)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var v=[[t,r],[t,n],[e,n],[e,r]],m=["bottom","left","top","right"].indexOf(a,0);function y(t){return v[(m+t)%4]}-1===m&&(m=0);var b=y(0);s.moveTo(b[0],b[1]);for(var x=1;x<4;x++)b=y(x),s.lineTo(b[0],b[1]);s.fill(),u&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var n=!1;if(this._view){var r=a(this);n=t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom}return n},inLabelRange:function(t,e){if(!this._view)return!1;var n=a(this);return o(this)?t>=n.left&&t<=n.right:e>=n.top&&e<=n.bottom},inXRange:function(t){var e=a(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=a(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,n=this._view;return o(this)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{26:26,27:27}],41:[function(t,e,n){e.exports={},e.exports.Arc=t(37),e.exports.Line=t(38),e.exports.Point=t(39),e.exports.Rectangle=t(40)},{37:37,38:38,39:39,40:40}],42:[function(t,e,n){var r=t(43);n=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,r,i,o){if(o){var a=Math.min(o,i/2-1e-7,r/2-1e-7);t.moveTo(e+a,n),t.lineTo(e+r-a,n),t.arcTo(e+r,n,e+r,n+a,a),t.lineTo(e+r,n+i-a),t.arcTo(e+r,n+i,e+r-a,n+i,a),t.lineTo(e+a,n+i),t.arcTo(e,n+i,e,n+i-a,a),t.lineTo(e,n+a),t.arcTo(e,n,e+a,n,a),t.closePath(),t.moveTo(e,n)}else t.rect(e,n,r,i)},drawPoint:function(t,e,n,r,i,a){var s,l,u,c,d,f;if(a=a||0,!e||"object"!==o(e)||"[object HTMLImageElement]"!==(s=e.toString())&&"[object HTMLCanvasElement]"!==s){if(!(isNaN(n)||n<=0)){switch(t.save(),t.translate(r,i),t.rotate(a*Math.PI/180),t.beginPath(),e){default:t.arc(0,0,n,0,2*Math.PI),t.closePath();break;case"triangle":d=(l=3*n/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(-l/2,d/3),t.lineTo(l/2,d/3),t.lineTo(0,-2*d/3),t.closePath();break;case"rect":f=1/Math.SQRT2*n,t.rect(-f,-f,2*f,2*f);break;case"rectRounded":var h=n/Math.SQRT2,p=-h,g=-h,v=Math.SQRT2*n;this.roundedRect(t,p,g,v,v,.425*n);break;case"rectRot":f=1/Math.SQRT2*n,t.moveTo(-f,0),t.lineTo(0,f),t.lineTo(f,0),t.lineTo(0,-f),t.closePath();break;case"cross":t.moveTo(0,n),t.lineTo(0,-n),t.moveTo(-n,0),t.lineTo(n,0);break;case"crossRot":u=Math.cos(Math.PI/4)*n,c=Math.sin(Math.PI/4)*n,t.moveTo(-u,-c),t.lineTo(u,c),t.moveTo(-u,c),t.lineTo(u,-c);break;case"star":t.moveTo(0,n),t.lineTo(0,-n),t.moveTo(-n,0),t.lineTo(n,0),u=Math.cos(Math.PI/4)*n,c=Math.sin(Math.PI/4)*n,t.moveTo(-u,-c),t.lineTo(u,c),t.moveTo(-u,c),t.lineTo(u,-c);break;case"line":t.moveTo(-n,0),t.lineTo(n,0);break;case"dash":t.moveTo(0,0),t.lineTo(n,0)}t.fill(),t.stroke(),t.restore()}}else t.drawImage(e,r-e.width/2,i-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,r){if(n.steppedLine)return"after"===n.steppedLine&&!r||"after"!==n.steppedLine&&r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y),void t.lineTo(n.x,n.y);n.tension?t.bezierCurveTo(r?e.controlPointPreviousX:e.controlPointNextX,r?e.controlPointPreviousY:e.controlPointNextY,r?n.controlPointNextX:n.controlPointPreviousX,r?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}};r.clear=n.clear,r.drawRoundedRectangle=function(t){t.beginPath(),n.roundedRect.apply(n,arguments)}},{43:43}],43:[function(t,e,n){var r,i={noop:function(){},uid:(r=0,function(){return r++}),isNullOrUndef:function(t){return null==t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return i.valueOrDefault(i.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,r){var o,a,s;if(i.isArray(t))if(a=t.length,r)for(o=a-1;o>=0;o--)e.call(n,t[o],o);else for(o=0;o<a;o++)e.call(n,t[o],o);else if(i.isObject(t))for(a=(s=Object.keys(t)).length,o=0;o<a;o++)e.call(n,t[s[o]],s[o])},arrayEquals:function(t,e){var n,r,o,a;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(o=t[n],a=e[n],o instanceof Array&&a instanceof Array){if(!i.arrayEquals(o,a))return!1}else if(o!==a)return!1;return!0},clone:function(t){if(i.isArray(t))return t.map(i.clone);if(i.isObject(t)){for(var e={},n=Object.keys(t),r=n.length,o=0;o<r;++o)e[n[o]]=i.clone(t[n[o]]);return e}return t},_merger:function(t,e,n,r){var o=e[t],a=n[t];i.isObject(o)&&i.isObject(a)?i.merge(o,a,r):e[t]=i.clone(a)},_mergerIf:function(t,e,n){var r=e[t],o=n[t];i.isObject(r)&&i.isObject(o)?i.mergeIf(r,o):e.hasOwnProperty(t)||(e[t]=i.clone(o))},merge:function(t,e,n){var r,o,a,s,l,u=i.isArray(e)?e:[e],c=u.length;if(!i.isObject(t))return t;for(r=(n=n||{}).merger||i._merger,o=0;o<c;++o)if(e=u[o],i.isObject(e))for(l=0,s=(a=Object.keys(e)).length;l<s;++l)r(a[l],t,e,n);return t},mergeIf:function(t,e){return i.merge(t,e,{merger:i._mergerIf})},extend:function(t){for(var e=function(e,n){t[n]=e},n=1,r=arguments.length;n<r;++n)i.each(arguments[n],e);return t},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},r=function(){this.constructor=n};return r.prototype=e.prototype,n.prototype=new r,n.extend=i.inherits,t&&i.extend(n.prototype,t),n.__super__=e.prototype,n}};e.exports=i,i.callCallback=i.callback,i.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},i.getValueOrDefault=i.valueOrDefault,i.getValueAtIndexOrDefault=i.valueAtIndexOrDefault},{}],44:[function(t,e,n){var r=t(43),i={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,r=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-i.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*i.easeInBounce(2*t):.5*i.easeOutBounce(2*t-1)+.5}};e.exports={effects:i},r.easingEffects=i},{43:43}],45:[function(t,e,n){var r=t(43);e.exports={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,i,o;return r.isObject(t)?(e=+t.top||0,n=+t.right||0,i=+t.bottom||0,o=+t.left||0):e=n=i=o=+t||0,{top:e,right:n,bottom:i,left:o,height:e+i,width:o+n}},resolve:function(t,e,n){var i,o,a;for(i=0,o=t.length;i<o;++i)if(void 0!==(a=t[i])&&(void 0!==e&&"function"==typeof a&&(a=a(e)),void 0!==n&&r.isArray(a)&&(a=a[n]),void 0!==a))return a}}},{43:43}],46:[function(t,e,n){e.exports=t(43),e.exports.easing=t(44),e.exports.canvas=t(42),e.exports.options=t(45)},{42:42,43:43,44:44,45:45}],47:[function(t,e,n){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],48:[function(t,e,n){var r=t(46),i="$chartjs",o="chartjs-",a=o+"render-monitor",s=o+"render-animation",l=["animationstart","webkitAnimationStart"],u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function c(t,e){var n=r.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}var d=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function f(t,e,n){t.addEventListener(e,n,d)}function h(t,e,n){t.removeEventListener(e,n,d)}function p(t,e,n,r,i){return{type:t,chart:e,native:i||null,x:void 0!==n?n:null,y:void 0!==r?r:null}}function g(t,e,n){var u,c,d,h,g=t[i]||(t[i]={}),v=g.resizer=function(t){var e=document.createElement("div"),n=o+"size-monitor",r="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=r,e.className=n,e.innerHTML='<div class="'+n+'-expand" style="'+r+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+n+'-shrink" style="'+r+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var i=e.childNodes[0],a=e.childNodes[1];e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,a.scrollLeft=1e6,a.scrollTop=1e6};var s=function(){e._reset(),t()};return f(i,"scroll",s.bind(i,"expand")),f(a,"scroll",s.bind(a,"shrink")),e}((u=function(){if(g.resizer)return e(p("resize",n))},d=!1,h=[],function(){h=Array.prototype.slice.call(arguments),c=c||this,d||(d=!0,r.requestAnimFrame.call(window,(function(){d=!1,u.apply(c,h)})))}));!function(t,e){var n=t[i]||(t[i]={}),o=n.renderProxy=function(t){t.animationName===s&&e()};r.each(l,(function(e){f(t,e,o)})),n.reflow=!!t.offsetParent,t.classList.add(a)}(t,(function(){if(g.resizer){var e=t.parentNode;e&&e!==v.parentNode&&e.insertBefore(v,e.firstChild),v._reset()}}))}function v(t){var e=t[i]||{},n=e.resizer;delete e.resizer,function(t){var e=t[i]||{},n=e.renderProxy;n&&(r.each(l,(function(e){h(t,e,n)})),delete e.renderProxy),t.classList.remove(a)}(t),n&&n.parentNode&&n.parentNode.removeChild(n)}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,n,r="from{opacity:0.99}to{opacity:1}";e="@-webkit-keyframes "+s+"{"+r+"}@keyframes "+s+"{"+r+"}."+a+"{-webkit-animation:"+s+" 0.001s;animation:"+s+" 0.001s;}",n=(t=this)._style||document.createElement("style"),t._style||(t._style=n,e="/* Chart.js */\n"+e,n.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(n)),n.appendChild(document.createTextNode(e))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(function(t,e){var n=t.style,r=t.getAttribute("height"),o=t.getAttribute("width");if(t[i]={initial:{height:r,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===o||""===o){var a=c(t,"width");void 0!==a&&(t.width=a)}if(null===r||""===r)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=c(t,"height");void 0!==a&&(t.height=s)}}(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[i]){var n=e[i].initial;["height","width"].forEach((function(t){var i=n[t];r.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)})),r.each(n.style||{},(function(t,n){e.style[n]=t})),e.width=e.width,delete e[i]}},addEventListener:function(t,e,n){var o=t.canvas;if("resize"!==e){var a=n[i]||(n[i]={});f(o,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(function(t,e){var n=u[t.type]||t.type,i=r.getRelativePosition(t,e);return p(n,e,i.x,i.y,t)}(e,t))})}else g(o,n,t)},removeEventListener:function(t,e,n){var r=t.canvas;if("resize"!==e){var o=((n[i]||{}).proxies||{})[t.id+"_"+e];o&&h(r,e,o)}else v(r)}},r.addEvent=f,r.removeEvent=h},{46:46}],49:[function(t,e,n){var r=t(46),i=t(47),o=t(48),a=o._enabled?o:i;e.exports=r.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},a)},{46:46,47:47,48:48}],50:[function(t,e,n){e.exports={},e.exports.filler=t(51),e.exports.legend=t(52),e.exports.title=t(53)},{51:51,52:52,53:53}],51:[function(t,e,n){var r=t(26),i=t(41),o=t(46);r._set("global",{plugins:{filler:{propagate:!0}}});var a={dataset:function(t){var e=t.fill,n=t.chart,r=n.getDatasetMeta(e),i=r&&n.isDatasetVisible(e)&&r.dataset._children||[],o=i.length||0;return o?function(t,e){return e<o&&i[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,r=e?e.y:null;return function(t){return{x:null===n?t.x:n,y:null===r?t.y:r}}}};function s(t,e,n){var r,i=t._model||{},o=i.fill;if(void 0===o&&(o=!!i.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(r=parseFloat(o,10),isFinite(r)&&Math.floor(r)===r)return"-"!==o[0]&&"+"!==o[0]||(r=e+r),!(r===e||r<0||r>=n)&&r;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function l(t){var e,n=t.el._model||{},r=t.el._scale||{},i=t.fill,o=null;if(isFinite(i))return null;if("start"===i?o=void 0===n.scaleBottom?r.bottom:n.scaleBottom:"end"===i?o=void 0===n.scaleTop?r.top:n.scaleTop:void 0!==n.scaleZero?o=n.scaleZero:r.getBasePosition?o=r.getBasePosition():r.getBasePixel&&(o=r.getBasePixel()),null!=o){if(void 0!==o.x&&void 0!==o.y)return o;if("number"==typeof o&&isFinite(o))return{x:(e=r.isHorizontal())?o:null,y:e?null:o}}return null}function u(t,e,n){var r,i=t[e].fill,o=[e];if(!n)return i;for(;!1!==i&&-1===o.indexOf(i);){if(!isFinite(i))return i;if(!(r=t[i]))return!1;if(r.visible)return i;o.push(i),i=r.fill}return!1}function c(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),a[n](t))}function d(t){return t&&!t.skip}function f(t,e,n,r,i){var a;if(r&&i){for(t.moveTo(e[0].x,e[0].y),a=1;a<r;++a)o.canvas.lineTo(t,e[a-1],e[a]);for(t.lineTo(n[i-1].x,n[i-1].y),a=i-1;a>0;--a)o.canvas.lineTo(t,n[a],n[a-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var n,r,o,a,d=(t.data.datasets||[]).length,f=e.propagate,h=[];for(r=0;r<d;++r)a=null,(o=(n=t.getDatasetMeta(r)).dataset)&&o._model&&o instanceof i.Line&&(a={visible:t.isDatasetVisible(r),fill:s(o,r,d),chart:t,el:o}),n.$filler=a,h.push(a);for(r=0;r<d;++r)(a=h[r])&&(a.fill=u(h,r,f),a.boundary=l(a),a.mapper=c(a))},beforeDatasetDraw:function(t,e){var n=e.meta.$filler;if(n){var i=t.ctx,a=n.el,s=a._view,l=a._children||[],u=n.mapper,c=s.backgroundColor||r.global.defaultColor;u&&c&&l.length&&(o.canvas.clipArea(i,t.chartArea),function(t,e,n,r,i,o){var a,s,l,u,c,h,p,g=e.length,v=r.spanGaps,m=[],y=[],b=0,x=0;for(t.beginPath(),a=0,s=g+!!o;a<s;++a)c=n(u=e[l=a%g]._view,l,r),h=d(u),p=d(c),h&&p?(b=m.push(u),x=y.push(c)):b&&x&&(v?(h&&m.push(u),p&&y.push(c)):(f(t,m,y,b,x),b=x=0,m=[],y=[]));f(t,m,y,b,x),t.closePath(),t.fillStyle=i,t.fill()}(i,l,u,s,c,a._loop),o.canvas.unclipArea(i))}}}},{26:26,41:41,46:46}],52:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=t(31),s=o.noop;function l(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}r._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,r=this.chart,i=r.getDatasetMeta(n);i.hidden=null===i.hidden?!r.data.datasets[n].hidden:null,r.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return o.isArray(e.datasets)?e.datasets.map((function(e,n){return{text:e.label,fillStyle:o.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:n}}),this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var u=i.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:s,update:function(t,e,n){var r=this;return r.beforeUpdate(),r.maxWidth=t,r.maxHeight=e,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:function(){var t=this,e=t.options.labels||{},n=o.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter((function(n){return e.filter(n,t.chart.data)}))),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=t.options,n=e.labels,i=e.display,a=t.ctx,s=r.global,u=o.valueOrDefault,c=u(n.fontSize,s.defaultFontSize),d=u(n.fontStyle,s.defaultFontStyle),f=u(n.fontFamily,s.defaultFontFamily),h=o.fontString(c,d,f),p=t.legendHitBoxes=[],g=t.minSize,v=t.isHorizontal();if(v?(g.width=t.maxWidth,g.height=i?10:0):(g.width=i?10:0,g.height=t.maxHeight),i)if(a.font=h,v){var m=t.lineWidths=[0],y=t.legendItems.length?c+n.padding:0;a.textAlign="left",a.textBaseline="top",o.each(t.legendItems,(function(e,r){var i=l(n,c)+c/2+a.measureText(e.text).width;m[m.length-1]+i+n.padding>=t.width&&(y+=c+n.padding,m[m.length]=t.left),p[r]={left:0,top:0,width:i,height:c},m[m.length-1]+=i+n.padding})),g.height+=y}else{var b=n.padding,x=t.columnWidths=[],w=n.padding,S=0,k=0,C=c+b;o.each(t.legendItems,(function(t,e){var r=l(n,c)+c/2+a.measureText(t.text).width;k+C>g.height&&(w+=S+n.padding,x.push(S),S=0,k=0),S=Math.max(S,r),k+=C,p[e]={left:0,top:0,width:r,height:c}})),w+=S,x.push(S),g.width+=w}t.width=g.width,t.height=g.height},afterFit:s,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,n=e.labels,i=r.global,a=i.elements.line,s=t.width,u=t.lineWidths;if(e.display){var c,d=t.ctx,f=o.valueOrDefault,h=f(n.fontColor,i.defaultFontColor),p=f(n.fontSize,i.defaultFontSize),g=f(n.fontStyle,i.defaultFontStyle),v=f(n.fontFamily,i.defaultFontFamily),m=o.fontString(p,g,v);d.textAlign="left",d.textBaseline="middle",d.lineWidth=.5,d.strokeStyle=h,d.fillStyle=h,d.font=m;var y=l(n,p),b=t.legendHitBoxes,x=t.isHorizontal();c=x?{x:t.left+(s-u[0])/2,y:t.top+n.padding,line:0}:{x:t.left+n.padding,y:t.top+n.padding,line:0};var w=p+n.padding;o.each(t.legendItems,(function(r,l){var h=d.measureText(r.text).width,g=y+p/2+h,v=c.x,m=c.y;x?v+g>=s&&(m=c.y+=w,c.line++,v=c.x=t.left+(s-u[c.line])/2):m+w>t.bottom&&(v=c.x=v+t.columnWidths[c.line]+n.padding,m=c.y=t.top+n.padding,c.line++),function(t,n,r){if(!(isNaN(y)||y<=0)){d.save(),d.fillStyle=f(r.fillStyle,i.defaultColor),d.lineCap=f(r.lineCap,a.borderCapStyle),d.lineDashOffset=f(r.lineDashOffset,a.borderDashOffset),d.lineJoin=f(r.lineJoin,a.borderJoinStyle),d.lineWidth=f(r.lineWidth,a.borderWidth),d.strokeStyle=f(r.strokeStyle,i.defaultColor);var s=0===f(r.lineWidth,a.borderWidth);if(d.setLineDash&&d.setLineDash(f(r.lineDash,a.borderDash)),e.labels&&e.labels.usePointStyle){var l=p*Math.SQRT2/2,u=l/Math.SQRT2,c=t+u,h=n+u;o.canvas.drawPoint(d,r.pointStyle,l,c,h)}else s||d.strokeRect(t,n,y,p),d.fillRect(t,n,y,p);d.restore()}}(v,m,r),b[l].left=v,b[l].top=m,function(t,e,n,r){var i=p/2,o=y+i+t,a=e+i;d.fillText(n.text,o,a),n.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(o,a),d.lineTo(o+r,a),d.stroke())}(v,m,r,h),x?c.x+=g+n.padding:c.y+=w}))}},handleEvent:function(t){var e=this,n=e.options,r="mouseup"===t.type?"click":t.type,i=!1;if("mousemove"===r){if(!n.onHover)return}else{if("click"!==r)return;if(!n.onClick)return}var o=t.x,a=t.y;if(o>=e.left&&o<=e.right&&a>=e.top&&a<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(o>=u.left&&o<=u.left+u.width&&a>=u.top&&a<=u.top+u.height){if("click"===r){n.onClick.call(e,t.native,e.legendItems[l]),i=!0;break}if("mousemove"===r){n.onHover.call(e,t.native,e.legendItems[l]),i=!0;break}}}return i}});function c(t,e){var n=new u({ctx:t.ctx,options:e,chart:t});a.configure(t,n,e),a.addBox(t,n),t.legend=n}e.exports={id:"legend",_element:u,beforeInit:function(t){var e=t.options.legend;e&&c(t,e)},beforeUpdate:function(t){var e=t.options.legend,n=t.legend;e?(o.mergeIf(e,r.global.legend),n?(a.configure(t,n,e),n.options=e):c(t,e)):n&&(a.removeBox(t,n),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}}},{26:26,27:27,31:31,46:46}],53:[function(t,e,n){var r=t(26),i=t(27),o=t(46),a=t(31),s=o.noop;r._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var l=i.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:s,update:function(t,e,n){var r=this;return r.beforeUpdate(),r.maxWidth=t,r.maxHeight=e,r.margins=n,r.beforeSetDimensions(),r.setDimensions(),r.afterSetDimensions(),r.beforeBuildLabels(),r.buildLabels(),r.afterBuildLabels(),r.beforeFit(),r.fit(),r.afterFit(),r.afterUpdate(),r.minSize},afterUpdate:s,beforeSetDimensions:s,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:s,beforeBuildLabels:s,buildLabels:s,afterBuildLabels:s,beforeFit:s,fit:function(){var t=this,e=o.valueOrDefault,n=t.options,i=n.display,a=e(n.fontSize,r.global.defaultFontSize),s=t.minSize,l=o.isArray(n.text)?n.text.length:1,u=o.options.toLineHeight(n.lineHeight,a),c=i?l*u+2*n.padding:0;t.isHorizontal()?(s.width=t.maxWidth,s.height=c):(s.width=c,s.height=t.maxHeight),t.width=s.width,t.height=s.height},afterFit:s,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=o.valueOrDefault,i=t.options,a=r.global;if(i.display){var s,l,u,c=n(i.fontSize,a.defaultFontSize),d=n(i.fontStyle,a.defaultFontStyle),f=n(i.fontFamily,a.defaultFontFamily),h=o.fontString(c,d,f),p=o.options.toLineHeight(i.lineHeight,c),g=p/2+i.padding,v=0,m=t.top,y=t.left,b=t.bottom,x=t.right;e.fillStyle=n(i.fontColor,a.defaultFontColor),e.font=h,t.isHorizontal()?(l=y+(x-y)/2,u=m+g,s=x-y):(l="left"===i.position?y+g:x-g,u=m+(b-m)/2,s=b-m,v=Math.PI*("left"===i.position?-.5:.5)),e.save(),e.translate(l,u),e.rotate(v),e.textAlign="center",e.textBaseline="middle";var w=i.text;if(o.isArray(w))for(var S=0,k=0;k<w.length;++k)e.fillText(w[k],0,S,s),S+=p;else e.fillText(w,0,0,s);e.restore()}}});function u(t,e){var n=new l({ctx:t.ctx,options:e,chart:t});a.configure(t,n,e),a.addBox(t,n),t.titleBlock=n}e.exports={id:"title",_element:l,beforeInit:function(t){var e=t.options.title;e&&u(t,e)},beforeUpdate:function(t){var e=t.options.title,n=t.titleBlock;e?(o.mergeIf(e,r.global.title),n?(a.configure(t,n,e),n.options=e):u(t,e)):n&&(a.removeBox(t,n),delete t.titleBlock)}}},{26:26,27:27,31:31,46:46}],54:[function(t,e,n){var r=t(33),i=t(34);e.exports=function(){var t=r.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,n=e.getLabels();e.minIndex=0,e.maxIndex=n.length-1,void 0!==e.options.ticks.min&&(t=n.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=n.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=n[e.minIndex],e.max=n[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,r=n.chart.data,i=n.isHorizontal();return r.yLabels&&!i?n.getRightValue(r.datasets[e].data[t]):n.ticks[t-n.minIndex]},getPixelForValue:function(t,e){var n,r=this,i=r.options.offset,o=Math.max(r.maxIndex+1-r.minIndex-(i?0:1),1);if(null!=t&&(n=r.isHorizontal()?t.x:t.y),void 0!==n||void 0!==t&&isNaN(e)){t=n||t;var a=r.getLabels().indexOf(t);e=-1!==a?a:e}if(r.isHorizontal()){var s=r.width/o,l=s*(e-r.minIndex);return i&&(l+=s/2),r.left+Math.round(l)}var u=r.height/o,c=u*(e-r.minIndex);return i&&(c+=u/2),r.top+Math.round(c)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,n=e.options.offset,r=Math.max(e._ticks.length-(n?0:1),1),i=e.isHorizontal(),o=(i?e.width:e.height)/r;return t-=i?e.left:e.top,n&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}});i.registerScaleType("category",t,{position:"bottom"})}},{33:33,34:34}],55:[function(t,e,n){var r=t(26),i=t(46),o=t(34),a=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.linear}},n=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,e=t.options,n=t.chart,r=n.data.datasets,o=t.isHorizontal();function a(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=e.stacked;if(void 0===s&&i.each(r,(function(t,e){if(!s){var r=n.getDatasetMeta(e);n.isDatasetVisible(e)&&a(r)&&void 0!==r.stack&&(s=!0)}})),e.stacked||s){var l={};i.each(r,(function(r,o){var s=n.getDatasetMeta(o),u=[s.type,void 0===e.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===l[u]&&(l[u]={positiveValues:[],negativeValues:[]});var c=l[u].positiveValues,d=l[u].negativeValues;n.isDatasetVisible(o)&&a(s)&&i.each(r.data,(function(n,r){var i=+t.getRightValue(n);isNaN(i)||s.data[r].hidden||(c[r]=c[r]||0,d[r]=d[r]||0,e.relativePoints?c[r]=100:i<0?d[r]+=i:c[r]+=i)}))})),i.each(l,(function(e){var n=e.positiveValues.concat(e.negativeValues),r=i.min(n),o=i.max(n);t.min=null===t.min?r:Math.min(t.min,r),t.max=null===t.max?o:Math.max(t.max,o)}))}else i.each(r,(function(e,r){var o=n.getDatasetMeta(r);n.isDatasetVisible(r)&&a(o)&&i.each(e.data,(function(e,n){var r=+t.getRightValue(e);isNaN(r)||o.data[n].hidden||(null===t.min?t.min=r:r<t.min&&(t.min=r),null===t.max?t.max=r:r>t.max&&(t.max=r))}))}));t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var n=i.valueOrDefault(e.fontSize,r.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*n)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,n=e.start,r=+e.getRightValue(t),i=e.end-n;return e.isHorizontal()?e.left+e.width/i*(r-n):e.bottom-e.height/i*(r-n)},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),r=n?e.width:e.height,i=(n?t-e.left:e.bottom-t)/r;return e.start+(e.end-e.start)*i},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});o.registerScaleType("linear",n,e)}},{26:26,34:34,35:35,46:46}],56:[function(t,e,n){var r=t(46),i=t(33);e.exports=function(t){var e=r.noop;t.LinearScaleBase=i.extend({getRightValue:function(t){return"string"==typeof t?+t:i.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=r.sign(t.min),i=r.sign(t.max);n<0&&i<0?t.max=0:n>0&&i>0&&(t.min=0)}var o=void 0!==e.min||void 0!==e.suggestedMin,a=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),o!==a&&t.min>=t.max&&(o?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),i={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,precision:e.precision,stepSize:r.valueOrDefault(e.fixedStepSize,e.stepSize)},o=t.ticks=function(t,e){var n,i,o,a=[];if(t.stepSize&&t.stepSize>0)o=t.stepSize;else{var s=r.niceNum(e.max-e.min,!1);o=r.niceNum(s/(t.maxTicks-1),!0),void 0!==(i=t.precision)&&(n=Math.pow(10,i),o=Math.ceil(o*n)/n)}var l=Math.floor(e.min/o)*o,u=Math.ceil(e.max/o)*o;r.isNullOrUndef(t.min)||r.isNullOrUndef(t.max)||!t.stepSize||r.almostWhole((t.max-t.min)/t.stepSize,o/1e3)&&(l=t.min,u=t.max);var c=(u-l)/o;c=r.almostEquals(c,Math.round(c),o/1e3)?Math.round(c):Math.ceil(c),i=1,o<1&&(i=Math.pow(10,1-Math.floor(r.log10(o))),l=Math.round(l*i)/i,u=Math.round(u*i)/i),a.push(void 0!==t.min?t.min:l);for(var d=1;d<c;++d)a.push(Math.round((l+d*o)*i)/i);return a.push(void 0!==t.max?t.max:u),a}(i,t);t.handleDirectionalChanges(),t.max=r.max(o),t.min=r.min(o),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),i.prototype.convertTicksToLabels.call(t)}})}},{33:33,46:46}],57:[function(t,e,n){var r=t(46),i=t(33),o=t(34),a=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.logarithmic}},n=i.extend({determineDataLimits:function(){var t=this,e=t.options,n=t.chart,i=n.data.datasets,o=t.isHorizontal();function a(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var s=e.stacked;if(void 0===s&&r.each(i,(function(t,e){if(!s){var r=n.getDatasetMeta(e);n.isDatasetVisible(e)&&a(r)&&void 0!==r.stack&&(s=!0)}})),e.stacked||s){var l={};r.each(i,(function(i,o){var s=n.getDatasetMeta(o),u=[s.type,void 0===e.stacked&&void 0===s.stack?o:"",s.stack].join(".");n.isDatasetVisible(o)&&a(s)&&(void 0===l[u]&&(l[u]=[]),r.each(i.data,(function(e,n){var r=l[u],i=+t.getRightValue(e);isNaN(i)||s.data[n].hidden||i<0||(r[n]=r[n]||0,r[n]+=i)})))})),r.each(l,(function(e){if(e.length>0){var n=r.min(e),i=r.max(e);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?i:Math.max(t.max,i)}}))}else r.each(i,(function(e,i){var o=n.getDatasetMeta(i);n.isDatasetVisible(i)&&a(o)&&r.each(e.data,(function(e,n){var r=+t.getRightValue(e);isNaN(r)||o.data[n].hidden||r<0||(null===t.min?t.min=r:r<t.min&&(t.min=r),null===t.max?t.max=r:r>t.max&&(t.max=r),0!==r&&(null===t.minNotZero||r<t.minNotZero)&&(t.minNotZero=r))}))}));this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,n=r.valueOrDefault;t.min=n(e.min,t.min),t.max=n(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(r.log10(t.min))-1),t.max=Math.pow(10,Math.floor(r.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(r.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(r.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(r.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,n=!t.isHorizontal(),i={min:e.min,max:e.max},o=t.ticks=function(t,e){var n,i,o=[],a=r.valueOrDefault,s=a(t.min,Math.pow(10,Math.floor(r.log10(e.min)))),l=Math.floor(r.log10(e.max)),u=Math.ceil(e.max/Math.pow(10,l));0===s?(n=Math.floor(r.log10(e.minNotZero)),i=Math.floor(e.minNotZero/Math.pow(10,n)),o.push(s),s=i*Math.pow(10,n)):(n=Math.floor(r.log10(s)),i=Math.floor(s/Math.pow(10,n)));var c=n<0?Math.pow(10,Math.abs(n)):1;do{o.push(s),10===++i&&(i=1,c=++n>=0?1:c),s=Math.round(i*Math.pow(10,n)*c)/c}while(n<l||n===l&&i<u);var d=a(t.max,s);return o.push(d),o}(i,t);t.max=r.max(o),t.min=r.min(o),e.reverse?(n=!n,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),n&&o.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),i.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(r.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var n,i,o,a,s,l=this,u=l.options.ticks.reverse,c=r.log10,d=l._getFirstTickValue(l.minNotZero),f=0;return e=+l.getRightValue(e),u?(o=l.end,a=l.start,s=-1):(o=l.start,a=l.end,s=1),l.isHorizontal()?(n=l.width,i=u?l.right:l.left):(n=l.height,s*=-1,i=u?l.top:l.bottom),e!==o&&(0===o&&(n-=f=r.getValueOrDefault(l.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=d),0!==e&&(f+=n/(c(a)-c(o))*(c(e)-c(o))),i+=s*f),i},getValueForPixel:function(e){var n,i,o,a,s=this,l=s.options.ticks.reverse,u=r.log10,c=s._getFirstTickValue(s.minNotZero);if(l?(i=s.end,o=s.start):(i=s.start,o=s.end),s.isHorizontal()?(n=s.width,a=l?s.right-e:e-s.left):(n=s.height,a=l?e-s.top:s.bottom-e),a!==i){if(0===i){var d=r.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize);a-=d,n-=d,i=c}a*=u(o)-u(i),a/=n,a=Math.pow(10,u(i)+a)}return a}});o.registerScaleType("logarithmic",n,e)}},{33:33,34:34,35:35,46:46}],58:[function(t,e,n){var r=t(26),i=t(46),o=t(34),a=t(35);e.exports=function(t){var e=r.global,n={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:a.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function s(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function l(t){var n=t.options.pointLabels,r=i.valueOrDefault(n.fontSize,e.defaultFontSize),o=i.valueOrDefault(n.fontStyle,e.defaultFontStyle),a=i.valueOrDefault(n.fontFamily,e.defaultFontFamily);return{size:r,style:o,family:a,font:i.fontString(r,o,a)}}function u(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n-5,end:e}:{start:e,end:e+n+5}}function c(t){return 0===t||180===t?"center":t<180?"left":"right"}function d(t,e,n,r){if(i.isArray(e))for(var o=n.y,a=1.5*r,s=0;s<e.length;++s)t.fillText(e[s],n.x,o),o+=a;else t.fillText(e,n.x,n.y)}function f(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function h(t){return i.isNumber(t)?t:0}var p=t.LinearScaleBase.extend({setDimensions:function(){var t=this,n=t.options,r=n.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=i.min([t.height,t.width]),a=i.valueOrDefault(r.fontSize,e.defaultFontSize);t.drawingArea=n.display?o/2-(a/2+r.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;i.each(e.data.datasets,(function(o,a){if(e.isDatasetVisible(a)){var s=e.getDatasetMeta(a);i.each(o.data,(function(e,i){var o=+t.getRightValue(e);isNaN(o)||s.data[i].hidden||(n=Math.min(o,n),r=Math.max(o,r))}))}})),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=r===Number.NEGATIVE_INFINITY?0:r,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,n=i.valueOrDefault(t.fontSize,e.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*n)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,e;this.options.pointLabels.display?function(t){var e,n,r,o=l(t),a=Math.min(t.height/2,t.width/2),c={r:t.width,l:0,t:t.height,b:0},d={};t.ctx.font=o.font,t._pointLabelSizes=[];var f,h,p,g=s(t);for(e=0;e<g;e++){r=t.getPointPosition(e,a),f=t.ctx,h=o.size,p=t.pointLabels[e]||"",n=i.isArray(p)?{w:i.longestText(f,f.font,p),h:p.length*h+1.5*(p.length-1)*h}:{w:f.measureText(p).width,h:h},t._pointLabelSizes[e]=n;var v=t.getIndexAngle(e),m=i.toDegrees(v)%360,y=u(m,r.x,n.w,0,180),b=u(m,r.y,n.h,90,270);y.start<c.l&&(c.l=y.start,d.l=v),y.end>c.r&&(c.r=y.end,d.r=v),b.start<c.t&&(c.t=b.start,d.t=v),b.end>c.b&&(c.b=b.end,d.b=v)}t.setReductions(a,c,d)}(this):(t=this,e=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,n){var r=e.l/Math.sin(n.l),i=Math.max(e.r-this.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),a=-Math.max(e.b-this.height,0)/Math.cos(n.b);r=h(r),i=h(i),o=h(o),a=h(a),this.drawingArea=Math.min(Math.round(t-(r+i)/2),Math.round(t-(o+a)/2)),this.setCenterPoint(r,i,o,a)},setCenterPoint:function(t,e,n,r){var i=this,o=i.width-e-i.drawingArea,a=t+i.drawingArea,s=n+i.drawingArea,l=i.height-r-i.drawingArea;i.xCenter=Math.round((a+o)/2+i.left),i.yCenter=Math.round((s+l)/2+i.top)},getIndexAngle:function(t){return t*(2*Math.PI/s(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(n)*e)+this.xCenter,y:Math.round(Math.sin(n)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,n=t.options,r=n.gridLines,o=n.ticks,a=i.valueOrDefault;if(n.display){var u=t.ctx,h=this.getIndexAngle(0),p=a(o.fontSize,e.defaultFontSize),g=a(o.fontStyle,e.defaultFontStyle),v=a(o.fontFamily,e.defaultFontFamily),m=i.fontString(p,g,v);i.each(t.ticks,(function(n,l){if(l>0||o.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);if(r.display&&0!==l&&function(t,e,n,r){var o=t.ctx;if(o.strokeStyle=i.valueAtIndexOrDefault(e.color,r-1),o.lineWidth=i.valueAtIndexOrDefault(e.lineWidth,r-1),t.options.gridLines.circular)o.beginPath(),o.arc(t.xCenter,t.yCenter,n,0,2*Math.PI),o.closePath(),o.stroke();else{var a=s(t);if(0===a)return;o.beginPath();var l=t.getPointPosition(0,n);o.moveTo(l.x,l.y);for(var u=1;u<a;u++)l=t.getPointPosition(u,n),o.lineTo(l.x,l.y);o.closePath(),o.stroke()}}(t,r,c,l),o.display){var d=a(o.fontColor,e.defaultFontColor);if(u.font=m,u.save(),u.translate(t.xCenter,t.yCenter),u.rotate(h),o.showLabelBackdrop){var f=u.measureText(n).width;u.fillStyle=o.backdropColor,u.fillRect(-f/2-o.backdropPaddingX,-c-p/2-o.backdropPaddingY,f+2*o.backdropPaddingX,p+2*o.backdropPaddingY)}u.textAlign="center",u.textBaseline="middle",u.fillStyle=d,u.fillText(n,0,-c),u.restore()}}})),(n.angleLines.display||n.pointLabels.display)&&function(t){var n=t.ctx,r=t.options,o=r.angleLines,a=r.pointLabels;n.lineWidth=o.lineWidth,n.strokeStyle=o.color;var u=t.getDistanceFromCenterForValue(r.ticks.reverse?t.min:t.max),h=l(t);n.textBaseline="top";for(var p=s(t)-1;p>=0;p--){if(o.display){var g=t.getPointPosition(p,u);n.beginPath(),n.moveTo(t.xCenter,t.yCenter),n.lineTo(g.x,g.y),n.stroke(),n.closePath()}if(a.display){var v=t.getPointPosition(p,u+5),m=i.valueAtIndexOrDefault(a.fontColor,p,e.defaultFontColor);n.font=h.font,n.fillStyle=m;var y=t.getIndexAngle(p),b=i.toDegrees(y);n.textAlign=c(b),f(b,t._pointLabelSizes[p],v),d(n,t.pointLabels[p]||"",v,h.size)}}}(t)}}});o.registerScaleType("radialLinear",p,n)}},{26:26,34:34,35:35,46:46}],59:[function(t,e,n){var r=t(1);r="function"==typeof r?r:window.moment;var i=t(26),o=t(46),a=t(33),s=t(34),l=Number.MIN_SAFE_INTEGER||-9007199254740991,u=Number.MAX_SAFE_INTEGER||9007199254740991,c={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,15,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,15,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},d=Object.keys(c);function f(t,e){return t-e}function h(t){var e,n,r,i={},o=[];for(e=0,n=t.length;e<n;++e)i[r=t[e]]||(i[r]=!0,o.push(r));return o}function p(t,e,n,r){var i=function(t,e,n){for(var r,i,o,a=0,s=t.length-1;a>=0&&a<=s;){if(i=t[(r=a+s>>1)-1]||null,o=t[r],!i)return{lo:null,hi:o};if(o[e]<n)a=r+1;else{if(!(i[e]>n))return{lo:i,hi:o};s=r-1}}return{lo:o,hi:null}}(t,e,n),o=i.lo?i.hi?i.lo:t[t.length-2]:t[0],a=i.lo?i.hi?i.hi:t[t.length-1]:t[1],s=a[e]-o[e],l=s?(n-o[e])/s:0,u=(a[r]-o[r])*l;return o[r]+u}function g(t,e){var n=e.parser,i=e.parser||e.format;return"function"==typeof n?n(t):"string"==typeof t&&"string"==typeof i?r(t,i):(t instanceof r||(t=r(t)),t.isValid()?t:"function"==typeof i?i(t):t)}function v(t,e){if(o.isNullOrUndef(t))return null;var n=e.options.time,r=g(e.getRightValue(t),n);return r.isValid()?(n.round&&r.startOf(n.round),r.valueOf()):null}function m(t){for(var e=d.indexOf(t)+1,n=d.length;e<n;++e)if(c[d[e]].common)return d[e]}function y(t,e,n,i){var a,s=i.time,l=s.unit||function(t,e,n,r){var i,o,a,s=d.length;for(i=d.indexOf(t);i<s-1;++i)if(a=(o=c[d[i]]).steps?o.steps[o.steps.length-1]:u,o.common&&Math.ceil((n-e)/(a*o.size))<=r)return d[i];return d[s-1]}(s.minUnit,t,e,n),f=m(l),h=o.valueOrDefault(s.stepSize,s.unitStepSize),p="week"===l&&s.isoWeekday,g=i.ticks.major.enabled,v=c[l],y=r(t),b=r(e),x=[];for(h||(h=function(t,e,n,r){var i,o,a,s=e-t,l=c[n],u=l.size,d=l.steps;if(!d)return Math.ceil(s/(r*u));for(i=0,o=d.length;i<o&&(a=d[i],!(Math.ceil(s/(u*a))<=r));++i);return a}(t,e,l,n)),p&&(y=y.isoWeekday(p),b=b.isoWeekday(p)),y=y.startOf(p?"day":l),(b=b.startOf(p?"day":l))<e&&b.add(1,l),a=r(y),g&&f&&!p&&!s.round&&(a.startOf(f),a.add(~~((y-a)/(v.size*h))*h,l));a<b;a.add(h,l))x.push(+a);return x.push(+a),x}e.exports=function(){var t=a.extend({initialize:function(){if(!r)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),a.prototype.initialize.call(this)},update:function(){var t=this,e=t.options;return e.time&&e.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),a.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),a.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,n,i,a,s,c=this,d=c.chart,p=c.options.time,g=p.unit||"day",m=u,y=l,b=[],x=[],w=[];for(t=0,n=d.data.labels.length;t<n;++t)w.push(v(d.data.labels[t],c));for(t=0,n=(d.data.datasets||[]).length;t<n;++t)if(d.isDatasetVisible(t))if(a=d.data.datasets[t].data,o.isObject(a[0]))for(x[t]=[],e=0,i=a.length;e<i;++e)s=v(a[e],c),b.push(s),x[t][e]=s;else b.push.apply(b,w),x[t]=w.slice(0);else x[t]=[];w.length&&(w=h(w).sort(f),m=Math.min(m,w[0]),y=Math.max(y,w[w.length-1])),b.length&&(b=h(b).sort(f),m=Math.min(m,b[0]),y=Math.max(y,b[b.length-1])),m=v(p.min,c)||m,y=v(p.max,c)||y,m=m===u?+r().startOf(g):m,y=y===l?+r().endOf(g)+1:y,c.min=Math.min(m,y),c.max=Math.max(m+1,y),c._horizontal=c.isHorizontal(),c._table=[],c._timestamps={data:b,datasets:x,labels:w}},buildTicks:function(){var t,e,n,i=this,o=i.min,a=i.max,s=i.options,l=s.time,u=[],f=[];switch(s.ticks.source){case"data":u=i._timestamps.data;break;case"labels":u=i._timestamps.labels;break;case"auto":default:u=y(o,a,i.getLabelCapacity(o),s)}for("ticks"===s.bounds&&u.length&&(o=u[0],a=u[u.length-1]),o=v(l.min,i)||o,a=v(l.max,i)||a,t=0,e=u.length;t<e;++t)(n=u[t])>=o&&n<=a&&f.push(n);return i.min=o,i.max=a,i._unit=l.unit||function(t,e,n,i){var o,a,s=r.duration(r(i).diff(r(n)));for(o=d.length-1;o>=d.indexOf(e);o--)if(a=d[o],c[a].common&&s.as(a)>=t.length)return a;return d[e?d.indexOf(e):0]}(f,l.minUnit,i.min,i.max),i._majorUnit=m(i._unit),i._table=function(t,e,n,r){if("linear"===r||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var i,o,a,s,l,u=[],c=[e];for(i=0,o=t.length;i<o;++i)(s=t[i])>e&&s<n&&c.push(s);for(c.push(n),i=0,o=c.length;i<o;++i)l=c[i+1],a=c[i-1],s=c[i],void 0!==a&&void 0!==l&&Math.round((l+a)/2)===s||u.push({time:s,pos:i/(o-1)});return u}(i._timestamps.data,o,a,s.distribution),i._offsets=function(t,e,n,r,i){var o,a,s=0,l=0;return i.offset&&e.length&&(i.time.min||(o=e.length>1?e[1]:r,a=e[0],s=(p(t,"time",o,"pos")-p(t,"time",a,"pos"))/2),i.time.max||(o=e[e.length-1],a=e.length>1?e[e.length-2]:n,l=(p(t,"time",o,"pos")-p(t,"time",a,"pos"))/2)),{left:s,right:l}}(i._table,f,o,a,s),i._labelFormat=function(t,e){var n,r,i,o=t.length;for(n=0;n<o;n++){if(0!==(r=g(t[n],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===r.second()&&0===r.minute()&&0===r.hour()||(i=!0)}return i?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(i._timestamps.data,l),function(t,e){var n,i,o,a,s=[];for(n=0,i=t.length;n<i;++n)o=t[n],a=!!e&&o===+r(o).startOf(e),s.push({value:o,major:a});return s}(f,i._majorUnit)},getLabelForIndex:function(t,e){var n=this.chart.data,r=this.options.time,i=n.labels&&t<n.labels.length?n.labels[t]:"",a=n.datasets[e].data[t];return o.isObject(a)&&(i=this.getRightValue(a)),r.tooltipFormat?g(i,r).format(r.tooltipFormat):"string"==typeof i?i:g(i,r).format(this._labelFormat)},tickFormatFunction:function(t,e,n,r){var i=this.options,a=t.valueOf(),s=i.time.displayFormats,l=s[this._unit],u=this._majorUnit,c=s[u],d=t.clone().startOf(u).valueOf(),f=i.ticks.major,h=f.enabled&&u&&c&&a===d,p=t.format(r||(h?c:l)),g=h?f:i.ticks.minor,v=o.valueOrDefault(g.callback,g.userCallback);return v?v(p,e,n):p},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(r(t[e].value),e,t));return i},getPixelForOffset:function(t){var e=this,n=e._horizontal?e.width:e.height,r=e._horizontal?e.left:e.top,i=p(e._table,"time",t,"pos");return r+n*(e._offsets.left+i)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,n){var r=null;if(void 0!==e&&void 0!==n&&(r=this._timestamps.datasets[n][e]),null===r&&(r=v(t,this)),null!==r)return this.getPixelForOffset(r)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,n=e._horizontal?e.width:e.height,i=e._horizontal?e.left:e.top,o=(n?(t-i)/n:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,a=p(e._table,"pos",o,"time");return r(a)},getLabelWidth:function(t){var e=this.options.ticks,n=this.ctx.measureText(t).width,r=o.toRadians(e.maxRotation),a=Math.cos(r),s=Math.sin(r);return n*a+o.valueOrDefault(e.fontSize,i.global.defaultFontSize)*s},getLabelCapacity:function(t){var e=this,n=e.options.time.displayFormats.millisecond,i=e.tickFormatFunction(r(t),0,[],n),o=e.getLabelWidth(i),a=e.isHorizontal()?e.width:e.height,s=Math.floor(a/o);return s>0?s:1}});s.registerScaleType("time",t,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,26:26,33:33,34:34,46:46}]},{},[7])(7)}))}).call(this,n(87)(t),n(59))},function(t,e,n){"use strict";var r=n(3),i=n(23).findIndex,o=n(58),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},function(t,e,n){var r=n(3),i=Math.log,o=Math.LOG10E;r({target:"Math",stat:!0},{log10:function(t){return i(t)*o}})},function(t,e,n){n(3)({target:"Math",stat:!0},{sign:n(160)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,n){n(3)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},function(t,e,n){"use strict";(function(t){var e,r;n(78),n(81),n(82),n(102),n(144),n(119),n(91),n(54),n(120),n(96),n(122),n(97),n(123),n(145),n(146),n(147),n(71),n(83),n(84),n(109),n(163),n(125),n(85);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */e=void 0,r=function(t){var e=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,n=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),r={toTextLines:function(t){var n,r=[];for(t=[].concat(t);t.length;)"string"==typeof(n=t.pop())?r.unshift.apply(r,n.split("\n")):Array.isArray(n)?t.push.apply(t,n):e.isNullOrUndef(t)||r.unshift(""+n);return r},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,e,n){var r,i=[].concat(e),o=i.length,a=t.font,s=0;for(t.font=n.string,r=0;r<o;++r)s=Math.max(t.measureText(i[r]).width,s);return t.font=a,{height:o*n.lineHeight,width:s}},parseFont:function(n){var i=t.defaults.global,o=e.valueOrDefault(n.size,i.defaultFontSize),a={family:e.valueOrDefault(n.family,i.defaultFontFamily),lineHeight:e.options.toLineHeight(n.lineHeight,o),size:o,style:e.valueOrDefault(n.style,i.defaultFontStyle),weight:e.valueOrDefault(n.weight,null),string:""};return a.string=r.toFontString(a),a},bound:function(t,e,n){return Math.max(t,Math.min(e,n))},arrayDiff:function(t,e){var n,r,i,o,a=t.slice(),s=[];for(n=0,i=e.length;n<i;++n)o=e[n],-1===(r=a.indexOf(o))?s.push([o,1]):a.splice(r,1);for(n=0,i=a.length;n<i;++n)s.push([a[n],-1]);return s},rasterize:function(t){return Math.round(t*n)/n}};function i(t,e){var n=e.x,r=e.y;if(null===n)return{x:0,y:-1};if(null===r)return{x:1,y:0};var i=t.x-n,o=t.y-r,a=Math.sqrt(i*i+o*o);return{x:a?i/a:0,y:a?o/a:-1}}var o=0,a=1,s=2,l=4,u=8;function c(t,e,n){var r=o;return t<n.left?r|=a:t>n.right&&(r|=s),e<n.top?r|=u:e>n.bottom&&(r|=l),r}function d(t,e){var n,r,i=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var n,r,i,o=t.x0,d=t.y0,f=t.x1,h=t.y1,p=c(o,d,e),g=c(f,h,e);p|g&&!(p&g);)(n=p||g)&u?(r=o+(f-o)*(e.top-d)/(h-d),i=e.top):n&l?(r=o+(f-o)*(e.bottom-d)/(h-d),i=e.bottom):n&s?(i=d+(h-d)*(e.right-o)/(f-o),r=e.right):n&a&&(i=d+(h-d)*(e.left-o)/(f-o),r=e.left),n===p?p=c(o=r,d=i,e):g=c(f=r,h=i,e);return{x0:o,x1:f,y0:d,y1:h}}(o,e.area)),"start"===i?(n=o.x0,r=o.y0):"end"===i?(n=o.x1,r=o.y1):(n=(o.x0+o.x1)/2,r=(o.y0+o.y1)/2),function(t,e,n,r,i){switch(i){case"center":n=r=0;break;case"bottom":n=0,r=1;break;case"right":n=1,r=0;break;case"left":n=-1,r=0;break;case"top":n=0,r=-1;break;case"start":n=-n,r=-r;break;case"end":break;default:i*=Math.PI/180,n=Math.cos(i),r=Math.sin(i)}return{x:t,y:e,vx:n,vy:r}}(n,r,t.vx,t.vy,e.align)}var f={arc:function(t,e){var n=(t.startAngle+t.endAngle)/2,r=Math.cos(n),i=Math.sin(n),o=t.innerRadius,a=t.outerRadius;return d({x0:t.x+r*o,y0:t.y+i*o,x1:t.x+r*a,y1:t.y+i*a,vx:r,vy:i},e)},point:function(t,e){var n=i(t,e.origin),r=n.x*t.radius,o=n.y*t.radius;return d({x0:t.x-r,y0:t.y-o,x1:t.x+r,y1:t.y+o,vx:n.x,vy:n.y},e)},rect:function(t,e){var n=i(t,e.origin),r=t.x,o=t.y,a=0,s=0;return t.horizontal?(r=Math.min(t.x,t.base),a=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),s=Math.abs(t.base-t.y)),d({x0:r,y0:o+s,x1:r+a,y1:o,vx:n.x,vy:n.y},e)},fallback:function(t,e){var n=i(t,e.origin);return d({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:n.x,vy:n.y},e)}},h=t.helpers,p=r.rasterize;function g(t){var e=t._model.horizontal,n=t._scale||e&&t._xScale||t._yScale;if(!n)return null;if(void 0!==n.xCenter&&void 0!==n.yCenter)return{x:n.xCenter,y:n.yCenter};var r=n.getBasePixel();return e?{x:r,y:null}:{x:null,y:r}}function v(t,e,n){var r=t.shadowBlur,i=n.stroked,o=p(n.x),a=p(n.y),s=p(n.w);i&&t.strokeText(e,o,a,s),n.filled&&(r&&i&&(t.shadowBlur=0),t.fillText(e,o,a,s),r&&i&&(t.shadowBlur=r))}var m=function(t,e,n,r){var i=this;i._config=t,i._index=r,i._model=null,i._rects=null,i._ctx=e,i._el=n};h.extend(m.prototype,{_modelize:function(e,n,i,o){var a,s=this._index,l=h.options.resolve,u=r.parseFont(l([i.font,{}],o,s)),c=l([i.color,t.defaults.global.defaultFontColor],o,s);return{align:l([i.align,"center"],o,s),anchor:l([i.anchor,"center"],o,s),area:o.chart.chartArea,backgroundColor:l([i.backgroundColor,null],o,s),borderColor:l([i.borderColor,null],o,s),borderRadius:l([i.borderRadius,0],o,s),borderWidth:l([i.borderWidth,0],o,s),clamp:l([i.clamp,!1],o,s),clip:l([i.clip,!1],o,s),color:c,display:e,font:u,lines:n,offset:l([i.offset,0],o,s),opacity:l([i.opacity,1],o,s),origin:g(this._el),padding:h.options.toPadding(l([i.padding,0],o,s)),positioner:(a=this._el,a instanceof t.elements.Arc?f.arc:a instanceof t.elements.Point?f.point:a instanceof t.elements.Rectangle?f.rect:f.fallback),rotation:l([i.rotation,0],o,s)*(Math.PI/180),size:r.textSize(this._ctx,n,u),textAlign:l([i.textAlign,"start"],o,s),textShadowBlur:l([i.textShadowBlur,0],o,s),textShadowColor:l([i.textShadowColor,c],o,s),textStrokeColor:l([i.textStrokeColor,c],o,s),textStrokeWidth:l([i.textStrokeWidth,0],o,s)}},update:function(t){var e,n,i,o=this,a=null,s=null,l=o._index,u=o._config,c=h.options.resolve([u.display,!0],t,l);c&&(e=t.dataset.data[l],n=h.valueOrDefault(h.callback(u.formatter,[e,t]),e),(i=h.isNullOrUndef(n)?[]:r.toTextLines(n)).length&&(s=function(t){var e=t.borderWidth||0,n=t.padding,r=t.size.height,i=t.size.width,o=-i/2,a=-r/2;return{frame:{x:o-n.left-e,y:a-n.top-e,w:i+n.width+2*e,h:r+n.height+2*e},text:{x:o,y:a,w:i,h:r}}}(a=o._modelize(c,i,u,t)))),o._model=a,o._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var n,i=t.ctx,o=this._model,a=this._rects;this.visible()&&(i.save(),o.clip&&(n=o.area,i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()),i.globalAlpha=r.bound(0,o.opacity,1),i.translate(p(e.x),p(e.y)),i.rotate(o.rotation),function(t,e,n){var r=n.backgroundColor,i=n.borderColor,o=n.borderWidth;(r||i&&o)&&(t.beginPath(),h.canvas.roundedRect(t,p(e.x)+o/2,p(e.y)+o/2,p(e.w)-o,p(e.h)-o,n.borderRadius),t.closePath(),r&&(t.fillStyle=r,t.fill()),i&&o&&(t.strokeStyle=i,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}(i,a.frame,o),function(t,e,n,r){var i,o=r.textAlign,a=r.color,s=!!a,l=r.font,u=e.length,c=r.textStrokeColor,d=r.textStrokeWidth,f=c&&d;if(u&&(s||f))for(n=function(t,e,n){var r=n.lineHeight,i=t.w,o=t.x;return"center"===e?o+=i/2:"end"!==e&&"right"!==e||(o+=i),{h:r,w:i,x:o,y:t.y+r/2}}(n,o,l),t.font=l.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=r.textShadowBlur,t.shadowColor=r.textShadowColor,s&&(t.fillStyle=a),f&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=c),i=0,u=e.length;i<u;++i)v(t,e[i],{stroked:f,filled:s,w:n.w,x:n.x,y:n.y+n.h*i})}(i,o.lines,a.text,o),i.restore())}});var y=t.helpers,b=Number.MIN_SAFE_INTEGER||-9007199254740991,x=Number.MAX_SAFE_INTEGER||9007199254740991;function w(t,e,n){var r=Math.cos(n),i=Math.sin(n),o=e.x,a=e.y;return{x:o+r*(t.x-o)-i*(t.y-a),y:a+i*(t.x-o)+r*(t.y-a)}}function S(t,e){var n,r,i,o,a,s=x,l=b,u=e.origin;for(n=0;n<t.length;++n)i=(r=t[n]).x-u.x,o=r.y-u.y,a=e.vx*i+e.vy*o,s=Math.min(s,a),l=Math.max(l,a);return{min:s,max:l}}function k(t,e){var n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);return{vx:(e.x-t.x)/i,vy:(e.y-t.y)/i,origin:t,ln:i}}var C=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function M(t,e,n){var r=e.positioner(t,e),i=r.vx,o=r.vy;if(!i&&!o)return{x:r.x,y:r.y};var a=n.w,s=n.h,l=e.rotation,u=Math.abs(a/2*Math.cos(l))+Math.abs(s/2*Math.sin(l)),c=Math.abs(a/2*Math.sin(l))+Math.abs(s/2*Math.cos(l)),d=1/Math.max(Math.abs(i),Math.abs(o));return u*=i*d,c*=o*d,u+=e.offset*i,c+=e.offset*o,{x:r.x+u,y:r.y+c}}y.extend(C.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,n){this._rotation=n,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this._rect;return!((t=w(t,this.center(),-this._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var e,n,r,i=this._points(),o=t._points(),a=[k(i[0],i[1]),k(i[0],i[3])];for(this._rotation!==t._rotation&&a.push(k(o[0],o[1]),k(o[0],o[3])),e=0;e<a.length;++e)if(n=S(i,a[e]),r=S(o,a[e]),n.max<r.min||r.max<n.min)return!1;return!0},_points:function(){var t=this._rect,e=this._rotation,n=this.center();return[w({x:t.x,y:t.y},n,e),w({x:t.x+t.w,y:t.y},n,e),w({x:t.x+t.w,y:t.y+t.h},n,e),w({x:t.x,y:t.y+t.h},n,e)]}});var A={prepare:function(t){var e,n,r,i,o,a=[];for(e=0,r=t.length;e<r;++e)for(n=0,i=t[e].length;n<i;++n)o=t[e][n],a.push(o),o.$layout={_box:new C,_hidable:!1,_visible:!0,_set:e,_idx:n};return a.sort((function(t,e){var n=t.$layout,r=e.$layout;return n._idx===r._idx?r._set-n._set:r._idx-n._idx})),this.update(a),a},update:function(t){var e,n,r,i,o,a=!1;for(e=0,n=t.length;e<n;++e)i=(r=t[e]).model(),(o=r.$layout)._hidable=i&&"auto"===i.display,o._visible=r.visible(),a|=o._hidable;a&&function(t){var e,n,r,i,o,a;for(e=0,n=t.length;e<n;++e)(i=(r=t[e]).$layout)._visible&&(o=r.geometry(),a=M(r._el._model,r.model(),o),i._box.update(a,o,r.rotation()));!function(t,e){var n,r,i,o;for(n=t.length-1;n>=0;--n)for(i=t[n].$layout,r=n-1;r>=0&&i._visible;--r)(o=t[r].$layout)._visible&&i._box.intersects(o._box)&&e(i,o)}(t,(function(t,e){var n=t._hidable,r=e._hidable;n&&r||r?e._visible=!1:n&&(t._visible=!1)}))}(t)},lookup:function(t,e){var n,r;for(n=t.length-1;n>=0;--n)if((r=t[n].$layout)&&r._visible&&r._box.contains(e))return t[n];return null},draw:function(t,e){var n,r,i,o,a,s;for(n=0,r=e.length;n<r;++n)(o=(i=e[n]).$layout)._visible&&(a=i.geometry(),s=M(i._el._view,i.model(),a),o._box.update(s,a,i.rotation()),i.draw(t,s))}},P=t.helpers,_={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(P.isNullOrUndef(t))return null;var e,n,r,i=t;if(P.isObject(t))if(P.isNullOrUndef(t.label))if(P.isNullOrUndef(t.r))for(i="",r=0,n=(e=Object.keys(t)).length;r<n;++r)i+=(0!==r?", ":"")+e[r]+": "+t[e[r]];else i=t.r;else i=t.label;return""+i},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},T=t.helpers,I="$datalabels",O="$default";function F(t,e,n){if(e){var r,i=n.$context,o=n.$groups;e[o._set]&&(r=e[o._set][o._key])&&!0===T.callback(r,[i])&&(t[I]._dirty=!0,n.update(i))}}function D(t,e){var n,r,i=t[I],o=i._listeners;if(o.enter||o.leave){if("mousemove"===e.type)r=A.lookup(i._labels,e);else if("mouseout"!==e.type)return;n=i._hovered,i._hovered=r,function(t,e,n,r){var i,o;(n||r)&&(n?r?n!==r&&(o=i=!0):o=!0:i=!0,o&&F(t,e.leave,n),i&&F(t,e.enter,r))}(t,o,n,r)}}t.defaults.global.plugins.datalabels=_;var E={id:"datalabels",beforeInit:function(t){t[I]={_actives:[]}},beforeUpdate:function(t){var e=t[I];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,n){var r,i,o,a,s,l,u,c,d=e.index,f=t[I],h=f._datasets[d]=[],p=t.isDatasetVisible(d),g=t.data.datasets[d],v=function(t,e){var n,r,i,o=t.datalabels,a=[];return!1===o?null:(!0===o&&(o={}),e=T.merge({},[e,o]),r=e.labels||{},i=Object.keys(r),delete e.labels,i.length?i.forEach((function(t){r[t]&&a.push(T.merge({},[e,r[t],{_key:t}]))})):a.push(e),n=a.reduce((function(t,e){return T.each(e.listeners||{},(function(n,r){t[r]=t[r]||{},t[r][e._key||O]=n})),delete e.listeners,t}),{}),{labels:a,listeners:n})}(g,n),y=e.meta.data||[],b=t.ctx;for(b.save(),r=0,o=y.length;r<o;++r)if((u=y[r])[I]=[],p&&u&&!u.hidden&&!u._model.skip)for(i=0,a=v.labels.length;i<a;++i)l=(s=v.labels[i])._key,(c=new m(s,b,u,r)).$groups={_set:d,_key:l||O},c.$context={active:!1,chart:t,dataIndex:r,dataset:g,datasetIndex:d},c.update(c.$context),u[I].push(c),h.push(c);b.restore(),T.merge(f._listeners,v.listeners,{merger:function(t,n,r){n[t]=n[t]||{},n[t][e.index]=r[t],f._listened=!0}})},afterUpdate:function(t,e){t[I]._labels=A.prepare(t[I]._datasets,e)},afterDatasetsDraw:function(t){A.draw(t,t[I]._labels)},beforeEvent:function(t,e){if(t[I]._listened)switch(e.type){case"mousemove":case"mouseout":D(t,e);break;case"click":!function(t,e){var n=t[I],r=n._listeners.click,i=r&&A.lookup(n._labels,e);i&&F(t,r,i)}(t,e)}},afterEvent:function(e){var n,i,o,a,s,l,u,c=e[I],d=c._actives,f=c._actives=e.lastActive||[],h=r.arrayDiff(d,f);for(n=0,i=h.length;n<i;++n)if((s=h[n])[1])for(o=0,a=(u=s[0][I]||[]).length;o<a;++o)(l=u[o]).$context.active=1===s[1],l.update(l.$context);(c._dirty||h.length)&&(A.update(c._labels),function(e){if(!e.animating){for(var n=t.animationService.animations,r=0,i=n.length;r<i;++r)if(n[r].chart===e)return;e.render({duration:1,lazy:!0})}}(e)),delete c._dirty}};return t.plugins.unregister(E),E},"object"===("undefined"==typeof exports?"undefined":i(exports))&&void 0!==t?t.exports=r(n(166)):"function"==typeof define&&n(55)?define(["chart.js"],r):(e=e||self).ChartDataLabels=r(e.Chart)}).call(this,n(87)(t))},function(t,e,n){"use strict";var r=n(3),i=n(164);r({target:"String",proto:!0,forced:n(165)("anchor")},{anchor:function(t){return i(this,"a","name",t)}})},function(t,e,n){var r=n(13),i=/"/g;t.exports=function(t,e,n,o){var a=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),s+">"+a+"</"+e+">"}},function(t,e,n){var r=n(1);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},function(t,e){t.exports=chart},function(t,e){!function(t){t("body").on("shown.bs.modal",".modal",(function(){t(".modal-backdrop").length||($modal_dialog=t(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&(t(this).addClass("modal-scrolling"),t("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&(t(this).addClass("modal-content-clickable"),t("body").addClass("scrollable")))})),t("body").on("hidden.bs.modal",".modal",(function(){t("body").removeClass("scrollable")}))}(jQuery)},function(t,e){jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,r,i){return jQuery.easing[jQuery.easing.def](t,e,n,r,i)},easeInQuad:function(t,e,n,r,i){return r*(e/=i)*e+n},easeOutQuad:function(t,e,n,r,i){return-r*(e/=i)*(e-2)+n},easeInOutQuad:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e+n:-r/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,r,i){return r*(e/=i)*e*e+n},easeOutCubic:function(t,e,n,r,i){return r*((e=e/i-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e+n:r/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,r,i){return r*(e/=i)*e*e*e+n},easeOutQuart:function(t,e,n,r,i){return-r*((e=e/i-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e*e+n:-r/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,r,i){return r*(e/=i)*e*e*e*e+n},easeOutQuint:function(t,e,n,r,i){return r*((e=e/i-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,r,i){return(e/=i/2)<1?r/2*e*e*e*e*e+n:r/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,r,i){return-r*Math.cos(e/i*(Math.PI/2))+r+n},easeOutSine:function(t,e,n,r,i){return r*Math.sin(e/i*(Math.PI/2))+n},easeInOutSine:function(t,e,n,r,i){return-r/2*(Math.cos(Math.PI*e/i)-1)+n},easeInExpo:function(t,e,n,r,i){return 0==e?n:r*Math.pow(2,10*(e/i-1))+n},easeOutExpo:function(t,e,n,r,i){return e==i?n+r:r*(1-Math.pow(2,-10*e/i))+n},easeInOutExpo:function(t,e,n,r,i){return 0==e?n:e==i?n+r:(e/=i/2)<1?r/2*Math.pow(2,10*(e-1))+n:r/2*(2-Math.pow(2,-10*--e))+n},easeInCirc:function(t,e,n,r,i){return-r*(Math.sqrt(1-(e/=i)*e)-1)+n},easeOutCirc:function(t,e,n,r,i){return r*Math.sqrt(1-(e=e/i-1)*e)+n},easeInOutCirc:function(t,e,n,r,i){return(e/=i/2)<1?-r/2*(Math.sqrt(1-e*e)-1)+n:r/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,r,i){var o=1.70158,a=0,s=r;if(0==e)return n;if(1==(e/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*i-o)*(2*Math.PI)/a)+n},easeOutElastic:function(t,e,n,r,i){var o=1.70158,a=0,s=r;if(0==e)return n;if(1==(e/=i))return n+r;if(a||(a=.3*i),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return s*Math.pow(2,-10*e)*Math.sin((e*i-o)*(2*Math.PI)/a)+r+n},easeInOutElastic:function(t,e,n,r,i){var o=1.70158,a=0,s=r;if(0==e)return n;if(2==(e/=i/2))return n+r;if(a||(a=i*(.3*1.5)),s<Math.abs(r)){s=r;o=a/4}else o=a/(2*Math.PI)*Math.asin(r/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*i-o)*(2*Math.PI)/a)*-.5+n:s*Math.pow(2,-10*(e-=1))*Math.sin((e*i-o)*(2*Math.PI)/a)*.5+r+n},easeInBack:function(t,e,n,r,i,o){return null==o&&(o=1.70158),r*(e/=i)*e*((o+1)*e-o)+n},easeOutBack:function(t,e,n,r,i,o){return null==o&&(o=1.70158),r*((e=e/i-1)*e*((o+1)*e+o)+1)+n},easeInOutBack:function(t,e,n,r,i,o){return null==o&&(o=1.70158),(e/=i/2)<1?r/2*(e*e*((1+(o*=1.525))*e-o))+n:r/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+n},easeInBounce:function(t,e,n,r,i){return r-jQuery.easing.easeOutBounce(t,i-e,0,r,i)+n},easeOutBounce:function(t,e,n,r,i){return(e/=i)<1/2.75?r*(7.5625*e*e)+n:e<2/2.75?r*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?r*(7.5625*(e-=2.25/2.75)*e+.9375)+n:r*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,r,i){return e<i/2?.5*jQuery.easing.easeInBounce(t,2*e,0,r,i)+n:.5*jQuery.easing.easeOutBounce(t,2*e-i,0,r,i)+.5*r+n}})},function(t,e,n){"use strict";(function(t){var e;n(78),n(81),n(82),n(102),n(54),n(101),n(121),n(96),n(170),n(104),n(71),n(105),n(124),n(129),n(83),n(106),n(84),n(113),n(98),n(109),n(172),n(180),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(85);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,r=n.type(t);return"function"!==r&&!n.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===r||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var n=function t(e,n){return new t.fn.init(e,n)};n.isWindow=function(t){return null!=t&&t==t.window},n.type=function(t){return null==t?t+"":"object"==r(t)||"function"==typeof t?o[s.call(t)]||"object":r(t)},n.isArray=Array.isArray||function(t){return"array"===n.type(t)},n.isPlainObject=function(t){var e;if(!t||"object"!==n.type(t)||t.nodeType||n.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},n.each=function(t,n,r){var i=0,o=t.length,a=e(t);if(r){if(a)for(;o>i&&!1!==n.apply(t[i],r);i++);else for(i in t)if(!1===n.apply(t[i],r))break}else if(a)for(;o>i&&!1!==n.call(t[i],i,t[i]);i++);else for(i in t)if(!1===n.call(t[i],i,t[i]))break;return t},n.data=function(t,e,r){if(void 0===r){var o=(a=t[n.expando])&&i[a];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var a=t[n.expando]||(t[n.expando]=++n.uuid);return i[a]=i[a]||{},i[a][e]=r,r}},n.removeData=function(t,e){var r=t[n.expando],o=r&&i[r];o&&n.each(e,(function(t,e){delete o[e]}))},n.extend=function(){var t,e,i,o,a,s,l=arguments[0]||{},u=1,c=arguments.length,d=!1;for("boolean"==typeof l&&(d=l,l=arguments[u]||{},u++),"object"!=r(l)&&"function"!==n.type(l)&&(l={}),u===c&&(l=this,u--);c>u;u++)if(null!=(a=arguments[u]))for(o in a)t=l[o],l!==(i=a[o])&&(d&&i&&(n.isPlainObject(i)||(e=n.isArray(i)))?(e?(e=!1,s=t&&n.isArray(t)?t:[]):s=t&&n.isPlainObject(t)?t:{},l[o]=n.extend(d,s,i)):void 0!==i&&(l[o]=i));return l},n.queue=function(t,r,i){if(t){r=(r||"fx")+"queue";var o=n.data(t,r);return i?(!o||n.isArray(i)?o=n.data(t,r,function(t,n){var r=n||[];return null!=t&&(e(Object(t))?function(t,e){for(var n=+e.length,r=0,i=t.length;n>r;)t[i++]=e[r++];if(n!=n)for(;void 0!==e[r];)t[i++]=e[r++];t.length=i}(r,"string"==typeof t?[t]:t):[].push.call(r,t)),r}(i)):o.push(i),o):o||[]}},n.dequeue=function(t,e){n.each(t.nodeType?[t]:t,(function(t,r){e=e||"fx";var i=n.queue(r,e),o=i.shift();"inprogress"===o&&(o=i.shift()),o&&("fx"===e&&i.unshift("inprogress"),o.call(r,(function(){n.dequeue(r,e)})))}))},n.fn=n.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),r=this.offset(),i=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:n(t).offset();return r.top-=parseFloat(e.style.marginTop)||0,r.left-=parseFloat(e.style.marginLeft)||0,t.style&&(i.top+=parseFloat(t.style.borderTopWidth)||0,i.left+=parseFloat(t.style.borderLeftWidth)||0),{top:r.top-i.top,left:r.left-i.left}}};var i={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var o={},a=o.hasOwnProperty,s=o.toString,l="Boolean Number String Function Array Date RegExp Object Error".split(" "),u=0;u<l.length;u++)o["[object "+l[u]+"]"]=l[u].toLowerCase();n.fn.init.prototype=n.fn,t.Velocity={Utilities:n}}}(window),e=function(){return function(t,e,n,i){function o(t){return g.isWrapped(t)?t=[].slice.call(t):g.isNode(t)&&(t=[t]),t}function a(t){var e=f.data(t,"velocity");return null===e?i:e}function s(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,n,r,i){function o(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,n){return((o(e,n)*t+a(e,n))*t+s(e))*t}function u(t,e,n){return 3*o(e,n)*t*t+2*a(e,n)*t+s(e)}function c(e,n){for(var i=0;h>i;++i){var o=u(n,t,r);if(0===o)return n;n-=(l(n,t,r)-e)/o}return n}function d(e,n,i){var o,a,s=0;do{(o=l(a=n+(i-n)/2,t,r)-e)>0?i=a:n=a}while(Math.abs(o)>g&&++s<v);return a}function f(){S=!0,(t!=n||r!=i)&&function(){for(var e=0;m>e;++e)w[e]=l(e*y,t,r)}()}var h=4,p=.001,g=1e-7,v=10,m=11,y=1/(m-1),b="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),r=Math.min(r,1),t=Math.max(t,0),r=Math.max(r,0);var w=b?new Float32Array(m):new Array(m),S=!1,k=function(e){return S||f(),t===n&&r===i?e:0===e?0:1===e?1:l(function(e){for(var n=0,i=1,o=m-1;i!=o&&w[i]<=e;++i)n+=y;var a=n+(e-w[--i])/(w[i+1]-w[i])*y,s=u(a,t,r);return s>=p?c(e,a):0==s?a:d(e,n,n+y)}(e),n,i)};k.getControlPoints=function(){return[{x:t,y:n},{x:r,y:i}]};var C="generateBezier("+[t,n,r,i]+")";return k.toString=function(){return C},k}function u(t,e){var n=t;return g.isString(t)?b.Easings[t]||(n=!1):n=g.isArray(t)&&1===t.length?s.apply(null,t):g.isArray(t)&&2===t.length?x.apply(null,t.concat([e])):!(!g.isArray(t)||4!==t.length)&&l.apply(null,t),!1===n&&(n=b.Easings[b.defaults.easing]?b.defaults.easing:y),n}function c(t){if(t){var e=(new Date).getTime(),n=b.State.calls.length;n>1e4&&(b.State.calls=function(t){for(var e=-1,n=t?t.length:0,r=[];++e<n;){var i=t[e];i&&r.push(i)}return r}(b.State.calls));for(var r=0;n>r;r++)if(b.State.calls[r]){var o=b.State.calls[r],s=o[0],l=o[2],u=o[3],h=!!u,p=null;u||(u=b.State.calls[r][3]=e-16);for(var v=Math.min((e-u)/l.duration,1),m=0,y=s.length;y>m;m++){var x=s[m],S=x.element;if(a(S)){var C=!1;for(var M in l.display!==i&&null!==l.display&&"none"!==l.display&&("flex"===l.display&&f.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],(function(t,e){w.setPropertyValue(S,"display",e)})),w.setPropertyValue(S,"display",l.display)),l.visibility!==i&&"hidden"!==l.visibility&&w.setPropertyValue(S,"visibility",l.visibility),x)if("element"!==M){var A,P=x[M],_=g.isString(P.easing)?b.Easings[P.easing]:P.easing;if(1===v)A=P.endValue;else{var T=P.endValue-P.startValue;if(A=P.startValue+T*_(v,l,T),!h&&A===P.currentValue)continue}if(P.currentValue=A,"tween"===M)p=A;else{if(w.Hooks.registered[M]){var I=w.Hooks.getRoot(M),O=a(S).rootPropertyValueCache[I];O&&(P.rootPropertyValue=O)}var F=w.setPropertyValue(S,M,P.currentValue+(0===parseFloat(A)?"":P.unitType),P.rootPropertyValue,P.scrollData);w.Hooks.registered[M]&&(a(S).rootPropertyValueCache[I]=w.Normalizations.registered[I]?w.Normalizations.registered[I]("extract",null,F[1]):F[1]),"transform"===F[0]&&(C=!0)}}l.mobileHA&&a(S).transformCache.translate3d===i&&(a(S).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&w.flushTransformCache(S)}}l.display!==i&&"none"!==l.display&&(b.State.calls[r][2].display=!1),l.visibility!==i&&"hidden"!==l.visibility&&(b.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],v,Math.max(0,u+l.duration-e),u,p),1===v&&d(r)}}b.State.isTicking&&k(c)}function d(t,e){if(!b.State.calls[t])return!1;for(var n=b.State.calls[t][0],r=b.State.calls[t][1],o=b.State.calls[t][2],s=b.State.calls[t][4],l=!1,u=0,c=n.length;c>u;u++){var d=n[u].element;if(e||o.loop||("none"===o.display&&w.setPropertyValue(d,"display",o.display),"hidden"===o.visibility&&w.setPropertyValue(d,"visibility",o.visibility)),!0!==o.loop&&(f.queue(d)[1]===i||!/\.velocityQueueEntryFlag/i.test(f.queue(d)[1]))&&a(d)){a(d).isAnimating=!1,a(d).rootPropertyValueCache={};var h=!1;f.each(w.Lists.transforms3D,(function(t,e){var n=/^scale/.test(e)?1:0,r=a(d).transformCache[e];a(d).transformCache[e]!==i&&new RegExp("^\\("+n+"[^.]").test(r)&&(h=!0,delete a(d).transformCache[e])})),o.mobileHA&&(h=!0,delete a(d).transformCache.translate3d),h&&w.flushTransformCache(d),w.Values.removeClass(d,"velocity-animating")}if(!e&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(r,r)}catch(t){setTimeout((function(){throw t}),1)}s&&!0!==o.loop&&s(r),a(d)&&!0===o.loop&&!e&&(f.each(a(d).tweensContainer,(function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)})),b(d,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&f.dequeue(d,o.queue)}b.State.calls[t]=!1;for(var p=0,g=b.State.calls.length;g>p;p++)if(!1!==b.State.calls[p]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,h=function(){if(n.documentMode)return n.documentMode;for(var t=7;t>4;t--){var e=n.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return i}(),p=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var n,r=(new Date).getTime();return n=Math.max(0,16-(r-t)),t=r+n,setTimeout((function(){e(r+n)}),n)}}(),g={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==r(t)&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==i&&(0===t.length||"object"==r(t[0])&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},v=!1;if(t.fn&&t.fn.jquery?(f=t,v=!0):f=e.Velocity.Utilities,8>=h&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=h)){var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:i,complete:i,progress:i,display:i,visibility:i,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){f.data(t,"velocity",{isSVG:g.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==i?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,n,r){var i={x:e.x+r.dx*n,v:e.v+r.dv*n,tension:e.tension,friction:e.friction};return{dx:i.v,dv:t(i)}}function n(n,r){var i={dx:n.v,dv:t(n)},o=e(n,.5*r,i),a=e(n,.5*r,o),s=e(n,r,a),l=1/6*(i.dx+2*(o.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(o.dv+a.dv)+s.dv);return n.x=n.x+l*r,n.v=n.v+u*r,n}return function t(e,r,i){var o,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(e=parseFloat(e)||500,r=parseFloat(r)||20,i=i||null,l.tension=e,l.friction=r,a=(o=null!==i)?(c=t(e,r))/i*.016:.016;s=n(s||l,a),u.push(1+s.x),c+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return o?function(t){return u[t*(u.length-1)|0]}:c}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(t,e){b.Easings[e[0]]=l.apply(null,e[1])}));var w=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<w.Lists.colors.length;t++){var e="color"===w.Lists.colors[t]?"0 0 0 1":"255 255 255 1";w.Hooks.templates[w.Lists.colors[t]]=["Red Green Blue Alpha",e]}var n,r,i;if(h)for(n in w.Hooks.templates){i=(r=w.Hooks.templates[n])[0].split(" ");var o=r[1].match(w.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),o.push(o.shift()),w.Hooks.templates[n]=[i.join(" "),o.join(" ")])}for(n in w.Hooks.templates)for(var t in i=(r=w.Hooks.templates[n])[0].split(" ")){var a=n+i[t],s=t;w.Hooks.registered[a]=[n,s]}},getRoot:function(t){var e=w.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return w.RegEx.valueUnwrap.test(e)&&(e=e.match(w.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(e)&&(e=w.Hooks.templates[t][1]),e},extractValue:function(t,e){var n=w.Hooks.registered[t];if(n){var r=n[0],i=n[1];return(e=w.Hooks.cleanRootPropertyValue(r,e)).toString().match(w.RegEx.valueSplit)[i]}return e},injectValue:function(t,e,n){var r=w.Hooks.registered[t];if(r){var i,o=r[0],a=r[1];return(i=(n=w.Hooks.cleanRootPropertyValue(o,n)).toString().match(w.RegEx.valueSplit))[a]=e,i.join(" ")}return n}},Normalizations:{registered:{clip:function(t,e,n){switch(t){case"name":return"clip";case"extract":var r;return r=w.RegEx.wrappedValueAlreadyExtracted.test(n)?n:(r=n.toString().match(w.RegEx.valueUnwrap))?r[1].replace(/,(\s+)?/g," "):n;case"inject":return"rect("+n+")"}},blur:function(t,e,n){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r=i?i[1]:0}return r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(t,e,n){if(8>=h)switch(t){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return r?r[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){9>=h||b.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D));for(var t=0;t<w.Lists.transformsBase.length;t++)!function(){var e=w.Lists.transformsBase[t];w.Normalizations.registered[e]=function(t,n,r){switch(t){case"name":return"transform";case"extract":return a(n)===i||a(n).transformCache[e]===i?/^scale/i.test(e)?1:0:a(n).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case"scal":case"scale":b.State.isAndroid&&a(n).transformCache[e]===i&&1>r&&(r=1),o=!/(\d)$/i.test(r);break;case"skew":o=!/(deg|\d)$/i.test(r);break;case"rotate":o=!/(deg|\d)$/i.test(r)}return o||(a(n).transformCache[e]="("+r+")"),a(n).transformCache[e]}}}();for(t=0;t<w.Lists.colors.length;t++)!function(){var e=w.Lists.colors[t];w.Normalizations.registered[e]=function(t,n,r){switch(t){case"name":return e;case"extract":var o;if(w.RegEx.wrappedValueAlreadyExtracted.test(r))o=r;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(r)?a=s[r]!==i?s[r]:s.black:w.RegEx.isHex.test(r)?a="rgb("+w.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(a=s.black),o=(a||r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=h?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(8>=h?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}))},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],n=0,r=e.length;r>n;n++){var i;if(i=0===n?t:e[n]+t.replace(/^\w/,(function(t){return t.toUpperCase()})),g.isString(b.State.prefixElement.style[i]))return b.State.prefixMatches[t]=i,[i,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,n,r,o){function s(t,n){function r(){c&&w.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=f.css(t,n);else{var u,c=!1;if(/^(width|height)$/.test(n)&&0===w.getPropertyValue(t,"display")&&(c=!0,w.setPropertyValue(t,"display",w.Values.getDisplayType(t))),!o){if("height"===n&&"border-box"!==w.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetHeight-(parseFloat(w.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(t,"paddingBottom"))||0);return r(),d}if("width"===n&&"border-box"!==w.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var p=t.offsetWidth-(parseFloat(w.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(t,"paddingRight"))||0);return r(),p}}u=a(t)===i?e.getComputedStyle(t,null):a(t).computedStyle?a(t).computedStyle:a(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===n&&(n="borderTopColor"),(""===(l=9===h&&"filter"===n?u.getPropertyValue(n):u[n])||null===l)&&(l=t.style[n]),r()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var g=s(t,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(n))&&(l=f(t).position()[n]+"px")}return l}var l;if(w.Hooks.registered[n]){var u=n,c=w.Hooks.getRoot(u);r===i&&(r=w.getPropertyValue(t,w.Names.prefixCheck(c)[0])),w.Normalizations.registered[c]&&(r=w.Normalizations.registered[c]("extract",t,r)),l=w.Hooks.extractValue(u,r)}else if(w.Normalizations.registered[n]){var d,p;"transform"!==(d=w.Normalizations.registered[n]("name",t))&&(p=s(t,w.Names.prefixCheck(d)[0]),w.Values.isCSSNullValue(p)&&w.Hooks.templates[n]&&(p=w.Hooks.templates[n][1])),l=w.Normalizations.registered[n]("extract",t,p)}if(!/^[\d-]/.test(l))if(a(t)&&a(t).isSVG&&w.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=t.getBBox()[n]}catch(t){l=0}else l=t.getAttribute(n);else l=s(t,w.Names.prefixCheck(n)[0]);return w.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(t,n,r,i,o){var s=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?e.scrollTo(r,o.alternateValue):e.scrollTo(o.alternateValue,r);else if(w.Normalizations.registered[n]&&"transform"===w.Normalizations.registered[n]("name",t))w.Normalizations.registered[n]("inject",t,r),s="transform",r=a(t).transformCache[n];else{if(w.Hooks.registered[n]){var l=n,u=w.Hooks.getRoot(n);i=i||w.getPropertyValue(t,u),r=w.Hooks.injectValue(l,r,i),n=u}if(w.Normalizations.registered[n]&&(r=w.Normalizations.registered[n]("inject",t,r),n=w.Normalizations.registered[n]("name",t)),s=w.Names.prefixCheck(n)[0],8>=h)try{t.style[s]=r}catch(t){b.debug&&console.log("Browser does not support ["+r+"] for ["+s+"]")}else a(t)&&a(t).isSVG&&w.Names.SVGAttribute(n)?t.setAttribute(n,r):t.style[s]=r;b.debug>=2&&console.log("Set "+n+" ("+s+"): "+r)}return[s,r]},flushTransformCache:function(t){function e(e){return parseFloat(w.getPropertyValue(t,e))}var n="";if((h||b.State.isAndroid&&!b.State.isChrome)&&a(t).isSVG){var r={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};f.each(a(t).transformCache,(function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),r[t]&&(n+=t+"("+r[t].join(" ")+") ",delete r[t])}))}else{var i,o;f.each(a(t).transformCache,(function(e){return i=a(t).transformCache[e],"transformPerspective"===e?(o=i,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(n+=e+i+" "))})),o&&(n="perspective"+o+" "+n)}w.setPropertyValue(t,"transform",n)}};w.Hooks.register(),w.Normalizations.register(),b.hook=function(t,e,n){var r=i;return t=o(t),f.each(t,(function(t,o){if(a(o)===i&&b.init(o),n===i)r===i&&(r=b.CSS.getPropertyValue(o,e));else{var s=b.CSS.setPropertyValue(o,e,n);"transform"===s[0]&&b.CSS.flushTransformCache(o),r=s}})),r};var S=function t(){function r(){return l?_.promise||null:h}function s(){function t(t){function d(t,e){var n=i,r=i,a=i;return g.isArray(t)?(n=t[0],!g.isArray(t[1])&&/^[\d-]/.test(t[1])||g.isFunction(t[1])||w.RegEx.isHex.test(t[1])?a=t[1]:(g.isString(t[1])&&!w.RegEx.isHex.test(t[1])||g.isArray(t[1]))&&(r=e?t[1]:u(t[1],s.duration),t[2]!==i&&(a=t[2]))):n=t,e||(r=r||s.easing),g.isFunction(n)&&(n=n.call(o,C,k)),g.isFunction(a)&&(a=a.call(o,C,k)),[n||0,r,a]}function h(t,e){var n,r;return r=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,(function(t){return n=t,""})),n||(n=w.Values.getUnitType(t)),[r,n]}function p(){var t={myParent:o.parentNode||n.body,position:w.getPropertyValue(o,"position"),fontSize:w.getPropertyValue(o,"fontSize")},r=t.position===L.lastPosition&&t.myParent===L.lastParent,i=t.fontSize===L.lastFontSize;L.lastParent=t.myParent,L.lastPosition=t.position,L.lastFontSize=t.fontSize;var s=100,l={};if(i&&r)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=a(o).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");b.init(u),t.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],(function(t,e){b.CSS.setPropertyValue(u,e,"hidden")})),b.CSS.setPropertyValue(u,"position",t.position),b.CSS.setPropertyValue(u,"fontSize",t.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(t,e){b.CSS.setPropertyValue(u,e,s+"%")})),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(w.getPropertyValue(u,"paddingLeft"))||1)/s,t.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(w.getPropertyValue(n.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(e.innerWidth)/100,L.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===C)try{s.begin.call(v,v)}catch(t){setTimeout((function(){throw t}),1)}if("scroll"===P){var m,S,M,A=/^x$/i.test(s.axis)?"Left":"Top",T=parseFloat(s.offset)||0;s.container?g.isWrapped(s.container)||g.isNode(s.container)?(s.container=s.container[0]||s.container,M=(m=s.container["scroll"+A])+f(o).position()[A.toLowerCase()]+T):s.container=null:(m=b.State.scrollAnchor[b.State["scrollProperty"+A]],S=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===A?"Top":"Left")]],M=f(o).offset()[A.toLowerCase()]+T),l={scroll:{rootPropertyValue:!1,startValue:m,currentValue:m,endValue:M,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:A,alternateValue:S}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===P){if(!a(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===a(o).opts.display&&(a(o).opts.display="auto"),"hidden"===a(o).opts.visibility&&(a(o).opts.visibility="visible"),a(o).opts.loop=!1,a(o).opts.begin=null,a(o).opts.complete=null,x.easing||delete s.easing,x.duration||delete s.duration,s=f.extend({},a(o).opts,s);var I=f.extend(!0,{},a(o).tweensContainer);for(var O in I)if("element"!==O){var F=I[O].startValue;I[O].startValue=I[O].currentValue=I[O].endValue,I[O].endValue=F,g.isEmptyObject(x)||(I[O].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+O+"): "+JSON.stringify(I[O]),o)}l=I}else if("start"===P){for(var D in a(o).tweensContainer&&!0===a(o).isAnimating&&(I=a(o).tweensContainer),f.each(y,(function(t,e){if(RegExp("^"+w.Lists.colors.join("$|^")+"$").test(t)){var n=d(e,!0),r=n[0],o=n[1],a=n[2];if(w.RegEx.isHex.test(r)){for(var s=["Red","Green","Blue"],l=w.Values.hexToRgb(r),u=a?w.Values.hexToRgb(a):i,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==i&&f.push(u[c]),y[t+s[c]]=f}delete y[t]}}})),y){var E=d(y[D]),N=E[0],V=E[1],z=E[2];D=w.Names.camelCase(D);var B=w.Hooks.getRoot(D),W=!1;if(a(o).isSVG||"tween"===B||!1!==w.Names.prefixCheck(B)[1]||w.Normalizations.registered[B]!==i){(s.display!==i&&null!==s.display&&"none"!==s.display||s.visibility!==i&&"hidden"!==s.visibility)&&/opacity|filter/.test(D)&&!z&&0!==N&&(z=0),s._cacheValues&&I&&I[D]?(z===i&&(z=I[D].endValue+I[D].unitType),W=a(o).rootPropertyValueCache[B]):w.Hooks.registered[D]?z===i?(W=w.getPropertyValue(o,B),z=w.getPropertyValue(o,D,W)):W=w.Hooks.templates[B][1]:z===i&&(z=w.getPropertyValue(o,D));var j,H,q,U=!1;if(z=(j=h(D,z))[0],q=j[1],N=(j=h(D,N))[0].replace(/^([+-\/*])=/,(function(t,e){return U=e,""})),H=j[1],z=parseFloat(z)||0,N=parseFloat(N)||0,"%"===H&&(/^(fontSize|lineHeight)$/.test(D)?(N/=100,H="em"):/^scale/.test(D)?(N/=100,H=""):/(Red|Green|Blue)$/i.test(D)&&(N=N/100*255,H="")),/[\/*]/.test(U))H=q;else if(q!==H&&0!==z)if(0===N)H=q;else{r=r||p();var $=/margin|padding|left|right|width|text|word|letter/i.test(D)||/X$/.test(D)||"x"===D?"x":"y";switch(q){case"%":z*="x"===$?r.percentToPxWidth:r.percentToPxHeight;break;case"px":break;default:z*=r[q+"ToPx"]}switch(H){case"%":z*=1/("x"===$?r.percentToPxWidth:r.percentToPxHeight);break;case"px":break;default:z*=1/r[H+"ToPx"]}}switch(U){case"+":N=z+N;break;case"-":N=z-N;break;case"*":N*=z;break;case"/":N=z/N}l[D]={rootPropertyValue:W,startValue:z,currentValue:z,endValue:N,unitType:H,easing:V},b.debug&&console.log("tweensContainer ("+D+"): "+JSON.stringify(l[D]),o)}else b.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=o}l.element&&(w.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(a(o).tweensContainer=l,a(o).opts=s),a(o).isAnimating=!0,C===k-1?(b.State.calls.push([R,v,s,null,_.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,c())):C++)}var r,o=this,s=f.extend({},b.defaults,x),l={};switch(a(o)===i&&b.init(o),parseFloat(s.delay)&&!1!==s.queue&&f.queue(o,s.queue,(function(t){b.velocityQueueEntryFlag=!0,a(o).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:t}})),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=m;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}!1!==b.mock&&(!0===b.mock?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!g.isFunction(s.begin)&&(s.begin=null),s.progress&&!g.isFunction(s.progress)&&(s.progress=null),s.complete&&!g.isFunction(s.complete)&&(s.complete=null),s.display!==i&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==i&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===s.queue?s.delay?setTimeout(t,s.delay):t():f.queue(o,s.queue,(function(e,n){return!0===n?(_.promise&&_.resolver(v),!0):(b.velocityQueueEntryFlag=!0,void t())})),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var l,h,p,v,y,x,S=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties));if(g.isWrapped(this)?(l=!1,p=0,v=this,h=this):(l=!0,p=1,v=S?arguments[0].elements||arguments[0].e:arguments[0]),v=o(v)){S?(y=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(y=arguments[p],x=arguments[p+1]);var k=v.length,C=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(x)){var M=p+1;x={};for(var A=M;A<arguments.length;A++)g.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?g.isString(arguments[A])||g.isArray(arguments[A])?x.easing=arguments[A]:g.isFunction(arguments[A])&&(x.complete=arguments[A]):x.duration=arguments[A]}var P,_={promise:null,resolver:null,rejecter:null};switch(l&&b.Promise&&(_.promise=new b.Promise((function(t,e){_.resolver=t,_.rejecter=e}))),y){case"scroll":P="scroll";break;case"reverse":P="reverse";break;case"finish":case"stop":f.each(v,(function(t,e){a(e)&&a(e).delayTimer&&(clearTimeout(a(e).delayTimer.setTimeout),a(e).delayTimer.next&&a(e).delayTimer.next(),delete a(e).delayTimer)}));var T=[];return f.each(b.State.calls,(function(t,e){e&&f.each(e[1],(function(n,r){var o=x===i?"":x;return!0!==o&&e[2].queue!==o&&(x!==i||!1!==e[2].queue)||void f.each(v,(function(n,i){i===r&&((!0===x||g.isString(x))&&(f.each(f.queue(i,g.isString(x)?x:""),(function(t,e){g.isFunction(e)&&e(null,!0)})),f.queue(i,g.isString(x)?x:"",[])),"stop"===y?(a(i)&&a(i).tweensContainer&&!1!==o&&f.each(a(i).tweensContainer,(function(t,e){e.endValue=e.currentValue})),T.push(t)):"finish"===y&&(e[2].duration=1))}))}))})),"stop"===y&&(f.each(T,(function(t,e){d(e,!0)})),_.promise&&_.resolver(v)),r();default:if(!f.isPlainObject(y)||g.isEmptyObject(y)){if(g.isString(y)&&b.Redirects[y]){var I=(E=f.extend({},x)).duration,O=E.delay||0;return!0===E.backwards&&(v=f.extend(!0,[],v).reverse()),f.each(v,(function(t,e){parseFloat(E.stagger)?E.delay=O+parseFloat(E.stagger)*t:g.isFunction(E.stagger)&&(E.delay=O+E.stagger.call(e,t,k)),E.drag&&(E.duration=parseFloat(I)||(/^(callout|transition)/.test(y)?1e3:m),E.duration=Math.max(E.duration*(E.backwards?1-t/k:(t+1)/k),.75*E.duration,200)),b.Redirects[y].call(e,e,E||{},t,k,v,_.promise?_:i)})),r()}var F="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return _.promise?_.rejecter(new Error(F)):console.log(F),r()}P="start"}var D,E,L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];if(f.each(v,(function(t,e){g.isNode(e)&&s.call(e)})),(E=f.extend({},b.defaults,x)).loop=parseInt(E.loop),D=2*E.loop-1,E.loop)for(var N=0;D>N;N++){var V={delay:E.delay,progress:E.progress};N===D-1&&(V.display=E.display,V.visibility=E.visibility,V.complete=E.complete),t(v,"reverse",V)}return r()}};(b=f.extend(S,b)).animate=S;var k=e.requestAnimationFrame||p;return b.State.isMobile||n.hidden===i||n.addEventListener("visibilitychange",(function(){n.hidden?(k=function(t){return setTimeout((function(){t(!0)}),16)},c()):k=e.requestAnimationFrame||p})),t.Velocity=b,t!==e&&(t.fn.velocity=S,t.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],(function(t,e){b.Redirects["slide"+e]=function(t,n,r,o,a,s){var l=f.extend({},n),u=l.begin,c=l.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},h={};l.display===i&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){for(var n in u&&u.call(a,a),d){h[n]=t.style[n];var r=b.CSS.getPropertyValue(t,n);d[n]="Down"===e?[r,0]:[0,r]}h.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in h)t.style[e]=h[e];c&&c.call(a,a),s&&s.resolver(a)},b(t,d,l)}})),f.each(["In","Out"],(function(t,e){b.Redirects["fade"+e]=function(t,n,r,o,a,s){var l=f.extend({},n),u={opacity:"In"===e?1:0},c=l.complete;l.complete=r!==o-1?l.begin=null:function(){c&&c.call(a,a),s&&s.resolver(a)},l.display===i&&(l.display="In"===e?"auto":"none"),b(this,u,l)}})),b}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)},"object"==r(t)&&"object"==r(t.exports)?t.exports=e():"function"==typeof define&&n(55)?define(e):e())}).call(this,n(87)(t))},function(t,e,n){"use strict";var r=n(3),i=n(1),o=n(148),a=n(7),s=n(32),l=n(11),u=n(103),c=o.ArrayBuffer,d=o.DataView,f=c.prototype.slice;r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:i((function(){return!new c(2).slice(1,void 0).byteLength}))},{slice:function(t,e){if(void 0!==f&&void 0===e)return f.call(a(this),t);for(var n=a(this).byteLength,r=s(t,n),i=s(void 0===e?n:e,n),o=new(u(this,c))(l(i-r)),h=new d(this),p=new d(o),g=0;r<i;)p.setUint8(g++,h.getUint8(r++));return o}})},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},function(t,e,n){n(173)("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){"use strict";var r=n(3),i=n(0),o=n(9),a=n(174),s=n(56),l=n(148),u=n(149),c=n(17),d=n(6),f=n(11),h=n(150),p=n(151),g=n(19),v=n(4),m=n(76),y=n(5),b=n(34),x=n(70),w=n(27).f,S=n(177),k=n(23).forEach,C=n(126),M=n(8),A=n(26),P=n(21),_=P.get,T=P.set,I=M.f,O=A.f,F=Math.round,D=i.RangeError,E=l.ArrayBuffer,L=l.DataView,R=s.NATIVE_ARRAY_BUFFER_VIEWS,N=s.TYPED_ARRAY_TAG,V=s.TypedArray,z=s.TypedArrayPrototype,B=s.aTypedArrayConstructor,W=s.isTypedArray,j=function(t,e){for(var n=0,r=e.length,i=new(B(t))(r);r>n;)i[n]=e[n++];return i},H=function(t,e){I(t,e,{get:function(){return _(this)[e]}})},q=function(t){var e;return t instanceof E||"ArrayBuffer"==(e=m(t))||"SharedArrayBuffer"==e},U=function(t,e){return W(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},$=function(t,e){return U(t,e=g(e,!0))?c(2,t[e]):O(t,e)},Y=function(t,e,n){return!(U(t,e=g(e,!0))&&y(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?I(t,e,n):(t[e]=n.value,t)};o?(R||(A.f=$,M.f=Y,H(z,"buffer"),H(z,"byteOffset"),H(z,"byteLength"),H(z,"length")),r({target:"Object",stat:!0,forced:!R},{getOwnPropertyDescriptor:$,defineProperty:Y}),t.exports=function(t,e,n,o){var s=t+(o?"Clamped":"")+"Array",l="get"+t,c="set"+t,g=i[s],v=g,m=v&&v.prototype,M={},A=function(t,n){I(t,n,{get:function(){return function(t,n){var r=_(t);return r.view[l](n*e+r.byteOffset,!0)}(this,n)},set:function(t){return function(t,n,r){var i=_(t);o&&(r=(r=F(r))<0?0:r>255?255:255&r),i.view[c](n*e+i.byteOffset,r,!0)}(this,n,t)},enumerable:!0})};R?a&&(v=n((function(t,n,r,i){return u(t,v,s),y(n)?q(n)?void 0!==i?new g(n,p(r,e),i):void 0!==r?new g(n,p(r,e)):new g(n):W(n)?j(v,n):S.call(v,n):new g(h(n))})),x&&x(v,V),k(w(g),(function(t){t in v||d(v,t,g[t])})),v.prototype=m):(v=n((function(t,n,r,i){u(t,v,s);var o,a,l,c=0,d=0;if(y(n)){if(!q(n))return W(n)?j(v,n):S.call(v,n);o=n,d=p(r,e);var g=n.byteLength;if(void 0===i){if(g%e)throw D("Wrong length");if((a=g-d)<0)throw D("Wrong length")}else if((a=f(i)*e)+d>g)throw D("Wrong length");l=a/e}else l=h(n),o=new E(a=l*e);for(T(t,{buffer:o,byteOffset:d,byteLength:a,length:l,view:new L(o)});c<l;)A(t,c++)})),x&&x(v,V),m=v.prototype=b(z)),m.constructor!==v&&d(m,"constructor",v),N&&d(m,N,s),M[s]=v,r({global:!0,forced:v!=g,sham:!R},M),"BYTES_PER_ELEMENT"in v||d(v,"BYTES_PER_ELEMENT",e),"BYTES_PER_ELEMENT"in m||d(m,"BYTES_PER_ELEMENT",e),C(s)}):t.exports=function(){}},function(t,e,n){var r=n(0),i=n(1),o=n(175),a=n(56).NATIVE_ARRAY_BUFFER_VIEWS,s=r.ArrayBuffer,l=r.Int8Array;t.exports=!a||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!o((function(t){new l,new l(null),new l(1.5),new l(t)}),!0)||i((function(){return 1!==new l(new s(2),1,void 0).length}))},function(t,e,n){var r=n(2)("iterator"),i=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){i=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},t(o)}catch(t){}return n}},function(t,e,n){var r=n(12);t.exports=function(t){var e=r(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},function(t,e,n){var r=n(16),i=n(11),o=n(178),a=n(179),s=n(75),l=n(56).aTypedArrayConstructor;t.exports=function(t){var e,n,u,c,d,f,h=r(t),p=arguments.length,g=p>1?arguments[1]:void 0,v=void 0!==g,m=o(h);if(null!=m&&!a(m))for(f=(d=m.call(h)).next,h=[];!(c=f.call(d)).done;)h.push(c.value);for(v&&p>2&&(g=s(g,arguments[2],2)),n=i(h.length),u=new(l(this))(n),e=0;n>e;e++)u[e]=v?g(h[e],e):h[e];return u}},function(t,e,n){var r=n(76),i=n(40),o=n(2)("iterator");t.exports=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(2),i=n(40),o=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||a[o]===t)}},function(t,e,n){"use strict";var r=n(56),i=n(181),o=r.aTypedArray;r.exportProto("copyWithin",(function(t,e){return i.call(o(this),t,e,arguments.length>2?arguments[2]:void 0)}))},function(t,e,n){"use strict";var r=n(16),i=n(32),o=n(11),a=Math.min;t.exports=[].copyWithin||function(t,e){var n=r(this),s=o(n.length),l=i(t,s),u=i(e,s),c=arguments.length>2?arguments[2]:void 0,d=a((void 0===c?s:i(c,s))-u,s-l),f=1;for(u<l&&l<u+d&&(f=-1,u+=d-1,l+=d-1);d-- >0;)u in n?n[l]=n[u]:delete n[l],l+=f,u+=f;return n}},function(t,e,n){"use strict";var r=n(56),i=n(23).every,o=r.aTypedArray;r.exportProto("every",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(132),o=r.aTypedArray;r.exportProto("fill",(function(t){return i.apply(o(this),arguments)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).filter,o=n(103),a=r.aTypedArray,s=r.aTypedArrayConstructor;r.exportProto("filter",(function(t){for(var e=i(a(this),t,arguments.length>1?arguments[1]:void 0),n=o(this,this.constructor),r=0,l=e.length,u=new(s(n))(l);l>r;)u[r]=e[r++];return u}))},function(t,e,n){"use strict";var r=n(56),i=n(23).find,o=r.aTypedArray;r.exportProto("find",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).findIndex,o=r.aTypedArray;r.exportProto("findIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).forEach,o=r.aTypedArray;r.exportProto("forEach",(function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(41).includes,o=r.aTypedArray;r.exportProto("includes",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(41).indexOf,o=r.aTypedArray;r.exportProto("indexOf",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(0),i=n(56),o=n(54),a=n(2)("iterator"),s=r.Uint8Array,l=o.values,u=o.keys,c=o.entries,d=i.aTypedArray,f=i.exportProto,h=s&&s.prototype[a],p=!!h&&("values"==h.name||null==h.name),g=function(){return l.call(d(this))};f("entries",(function(){return c.call(d(this))})),f("keys",(function(){return u.call(d(this))})),f("values",g,!p),f(a,g,!p)},function(t,e,n){"use strict";var r=n(56),i=r.aTypedArray,o=[].join;r.exportProto("join",(function(t){return o.apply(i(this),arguments)}))},function(t,e,n){"use strict";var r=n(56),i=n(130),o=r.aTypedArray;r.exportProto("lastIndexOf",(function(t){return i.apply(o(this),arguments)}))},function(t,e,n){"use strict";var r=n(56),i=n(23).map,o=n(103),a=r.aTypedArray,s=r.aTypedArrayConstructor;r.exportProto("map",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(s(o(t,t.constructor)))(e)}))}))},function(t,e,n){"use strict";var r=n(56),i=n(107).left,o=r.aTypedArray;r.exportProto("reduce",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=n(107).right,o=r.aTypedArray;r.exportProto("reduceRight",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=r.aTypedArray,o=Math.floor;r.exportProto("reverse",(function(){for(var t,e=i(this).length,n=o(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this}))},function(t,e,n){"use strict";var r=n(56),i=n(11),o=n(151),a=n(16),s=n(1),l=r.aTypedArray,u=s((function(){new Int8Array(1).set({})}));r.exportProto("set",(function(t){l(this);var e=o(arguments.length>1?arguments[1]:void 0,1),n=this.length,r=a(t),s=i(r.length),u=0;if(s+e>n)throw RangeError("Wrong length");for(;u<s;)this[e+u]=r[u++]}),u)},function(t,e,n){"use strict";var r=n(56),i=n(103),o=n(1),a=r.aTypedArray,s=r.aTypedArrayConstructor,l=[].slice,u=o((function(){new Int8Array(1).slice()}));r.exportProto("slice",(function(t,e){for(var n=l.call(a(this),t,e),r=i(this,this.constructor),o=0,u=n.length,c=new(s(r))(u);u>o;)c[o]=n[o++];return c}),u)},function(t,e,n){"use strict";var r=n(56),i=n(23).some,o=r.aTypedArray;r.exportProto("some",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,n){"use strict";var r=n(56),i=r.aTypedArray,o=[].sort;r.exportProto("sort",(function(t){return o.call(i(this),t)}))},function(t,e,n){"use strict";var r=n(56),i=n(11),o=n(32),a=n(103),s=r.aTypedArray;r.exportProto("subarray",(function(t,e){var n=s(this),r=n.length,l=o(t,r);return new(a(n,n.constructor))(n.buffer,n.byteOffset+l*n.BYTES_PER_ELEMENT,i((void 0===e?r:o(e,r))-l))}))},function(t,e,n){"use strict";var r=n(0),i=n(56),o=n(1),a=r.Int8Array,s=i.aTypedArray,l=[].toLocaleString,u=[].slice,c=!!a&&o((function(){l.call(new a(1))})),d=o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])}));i.exportProto("toLocaleString",(function(){return l.apply(c?u.call(s(this)):s(this),arguments)}),d)},function(t,e,n){"use strict";var r=n(0),i=n(56),o=n(1),a=r.Uint8Array,s=a&&a.prototype,l=[].toString,u=[].join;o((function(){l.call({})}))&&(l=function(){return u.call(this)}),i.exportProto("toString",l,(s||{}).toString!=l)},function(t,e,n){"use strict";(function(t){n(78),n(81),n(82),n(91),n(54),n(101),n(104),n(123),n(71),n(106),n(84),n(85);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */!function(r,i){"function"==typeof define&&n(55)?define([],(function(){return r.Waves=i.call(r),r.Waves})):"object"===("undefined"==typeof exports?"undefined":e(exports))?t.exports=i.call(r):r.Waves=i.call(r)}("object"===("undefined"==typeof window?"undefined":e(window))?window:void 0,(function(){var t=t||{},n=document.querySelectorAll.bind(document),r=Object.prototype.toString,i="ontouchstart"in window;function o(t){var n=e(t);return"function"===n||"object"===n&&!!t}function a(t){var e,i=r.call(t);return"[object String]"===i?n(t):o(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i)&&t.hasOwnProperty("length")?t:o(e=t)&&e.nodeType>0?[t]:[]}function s(t){var n,r,i={top:0,left:0},o=t&&t.ownerDocument;return n=o.documentElement,"undefined"!==e(t.getBoundingClientRect)&&(i=t.getBoundingClientRect()),r=function(t){return null!==(e=t)&&e===e.window?t:9===t.nodeType&&t.defaultView;var e}(o),{top:i.top+r.pageYOffset-n.clientTop,left:i.left+r.pageXOffset-n.clientLeft}}function l(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}var u={duration:750,delay:200,show:function(t,e,n){if(2===t.button)return!1;e=e||this;var r=document.createElement("div");r.className="waves-ripple waves-rippling",e.appendChild(r);var i=s(e),o=0,a=0;"touches"in t&&t.touches.length?(o=t.touches[0].pageY-i.top,a=t.touches[0].pageX-i.left):(o=t.pageY-i.top,a=t.pageX-i.left),a=a>=0?a:0,o=o>=0?o:0;var c="scale("+e.clientWidth/100*3+")",d="translate(0,0)";n&&(d="translate("+n.x+"px, "+n.y+"px)"),r.setAttribute("data-hold",Date.now()),r.setAttribute("data-x",a),r.setAttribute("data-y",o),r.setAttribute("data-scale",c),r.setAttribute("data-translate",d);var f={top:o+"px",left:a+"px"};r.classList.add("waves-notransition"),r.setAttribute("style",l(f)),r.classList.remove("waves-notransition"),f["-webkit-transform"]=c+" "+d,f["-moz-transform"]=c+" "+d,f["-ms-transform"]=c+" "+d,f["-o-transform"]=c+" "+d,f.transform=c+" "+d,f.opacity="1";var h="mousemove"===t.type?2500:u.duration;f["-webkit-transition-duration"]=h+"ms",f["-moz-transition-duration"]=h+"ms",f["-o-transition-duration"]=h+"ms",f["transition-duration"]=h+"ms",r.setAttribute("style",l(f))},hide:function(t,e){for(var n=(e=e||this).getElementsByClassName("waves-rippling"),r=0,o=n.length;r<o;r++)d(t,e,n[r]);i&&(e.removeEventListener("touchend",u.hide),e.removeEventListener("touchcancel",u.hide)),e.removeEventListener("mouseup",u.hide),e.removeEventListener("mouseleave",u.hide)}},c={input:function(t){var e=t.parentNode;if("span"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("span");n.className="waves-input-wrapper",e.replaceChild(n,t),n.appendChild(t)}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var n=document.createElement("i");e.replaceChild(n,t),n.appendChild(t)}}};function d(t,e,n){if(n){n.classList.remove("waves-rippling");var r=n.getAttribute("data-x"),i=n.getAttribute("data-y"),o=n.getAttribute("data-scale"),a=n.getAttribute("data-translate"),s=350-(Date.now()-Number(n.getAttribute("data-hold")));s<0&&(s=0),"mousemove"===t.type&&(s=150);var c="mousemove"===t.type?2500:u.duration;setTimeout((function(){var t={top:i+"px",left:r+"px",opacity:"0","-webkit-transition-duration":c+"ms","-moz-transition-duration":c+"ms","-o-transition-duration":c+"ms","transition-duration":c+"ms","-webkit-transform":o+" "+a,"-moz-transform":o+" "+a,"-ms-transform":o+" "+a,"-o-transform":o+" "+a,transform:o+" "+a};n.setAttribute("style",l(t)),setTimeout((function(){try{e.removeChild(n)}catch(t){return!1}}),c)}),s)}}var f={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&f.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?f.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout((function(){f.touches&&(f.touches-=1)}),500)}};function h(t){var e=function(t){if(!1===f.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;n.parentElement;){if(!(n instanceof SVGElement)&&n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(f.registerEvent(t),"touchstart"===t.type&&u.delay){var n=!1,r=setTimeout((function(){r=null,u.show(t,e)}),u.delay),o=function(i){r&&(clearTimeout(r),r=null,u.show(t,e)),n||(n=!0,u.hide(i,e)),s()},a=function(t){r&&(clearTimeout(r),r=null),o(t),s()};e.addEventListener("touchmove",a,!1),e.addEventListener("touchend",o,!1),e.addEventListener("touchcancel",o,!1);var s=function(){e.removeEventListener("touchmove",a),e.removeEventListener("touchend",o),e.removeEventListener("touchcancel",o)}}else u.show(t,e),i&&(e.addEventListener("touchend",u.hide,!1),e.addEventListener("touchcancel",u.hide,!1)),e.addEventListener("mouseup",u.hide,!1),e.addEventListener("mouseleave",u.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(u.duration=t.duration),"delay"in t&&(u.delay=t.delay),i&&(e.addEventListener("touchstart",h,!1),e.addEventListener("touchcancel",f.registerEvent,!1),e.addEventListener("touchend",f.registerEvent,!1)),e.addEventListener("mousedown",h,!1)},t.attach=function(t,e){var n,i;t=a(t),"[object Array]"===r.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var o=0,s=t.length;o<s;o++)i=(n=t[o]).tagName.toLowerCase(),-1!==["input","img"].indexOf(i)&&(c[i](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},t.ripple=function(t,e){var n=(t=a(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,n)for(var r,i,o,l={},c=0,d={type:"mousedown",button:1},f=function(t,e){return function(){u.hide(t,e)}};c<n;c++)if(r=t[c],i=e.position||{x:r.clientWidth/2,y:r.clientHeight/2},o=s(r),l.x=o.left+i.x,l.y=o.top+i.y,d.pageX=l.x,d.pageY=l.y,u.show(d,r),e.wait>=0&&null!==e.wait){setTimeout(f({type:"mouseup",button:1},r),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},n=0,r=(t=a(t)).length;n<r;n++)u.hide(e,t[n])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t})),$(document).ready((function(){Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat"),Waves.attach(".chip"),Waves.attach(".view a .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link"),Waves.init()}))}).call(this,n(87)(t))}]);
//# sourceMappingURL=mdb.min.js.map
;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
;/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.5.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */
var colorNames = require(6);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"6":6}],3:[function(require,module,exports){
/* MIT license */
var convert = require(5);
var string = require(2);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = convert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

module.exports = Color;

},{"2":2,"5":5}],4:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],5:[function(require,module,exports){
var conversions = require(4);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"4":4}],6:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(28)();

require(26)(Chart);
require(42)(Chart);
require(22)(Chart);
require(31)(Chart);
require(25)(Chart);
require(21)(Chart);
require(23)(Chart);
require(24)(Chart);
require(29)(Chart);
require(33)(Chart);
require(34)(Chart);
require(32)(Chart);
require(35)(Chart);
require(30)(Chart);
require(27)(Chart);
require(36)(Chart);

require(37)(Chart);
require(38)(Chart);
require(39)(Chart);
require(40)(Chart);

require(45)(Chart);
require(43)(Chart);
require(44)(Chart);
require(46)(Chart);
require(47)(Chart);
require(48)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

window.Chart = module.exports = Chart;

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38,"39":39,"40":40,"42":42,"43":43,"44":44,"45":45,"46":46,"47":47,"48":48,"8":8,"9":9}],8:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	};

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Doughnut = function(context, config) {
		config.type = 'doughnut';

		return new Chart(context, config);
	};

};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	};

};

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	};

};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Radar = function(context, config) {
		config.type = 'radar';

		return new Chart(context, config);
	};

};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var defaultConfig = {
		hover: {
			mode: 'single'
		},

		scales: {
			xAxes: [{
				type: 'linear', // scatter should not use a category axis
				position: 'bottom',
				id: 'x-axis-1' // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: 'linear',
				position: 'left',
				id: 'y-axis-1'
			}]
		},

		tooltips: {
			callbacks: {
				title: function() {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem) {
					return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
				}
			}
		}
	};

	// Register the default config for this type
	Chart.defaults.scatter = defaultConfig;

	// Scatter charts use line controllers
	Chart.controllers.scatter = Chart.controllers.line;

	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};

};

},{}],15:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bar = {
		hover: {
			mode: 'label'
		},

		scales: {
			xAxes: [{
				type: 'category',

				// Specific to Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}],
			yAxes: [{
				type: 'linear'
			}]
		}
	};

	Chart.controllers.bar = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Rectangle,

		initialize: function(chart, datasetIndex) {
			Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);

			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			meta.stack = dataset.stack;
			// Use this to indicate that this is a bar dataset.
			meta.bar = true;
		},

		// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
		getStackCount: function() {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);

			var stacks = [];
			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var dsMeta = me.chart.getDatasetMeta(datasetIndex);
				if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
					(yScale.options.stacked === false ||
					(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}, me);

			return stacks.length;
		},

		update: function(reset) {
			var me = this;
			helpers.each(me.getMeta().data, function(rectangle, index) {
				me.updateElement(rectangle, index, reset);
			}, me);
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var scaleBase = yScale.getBasePixel();
			var rectangleElementOptions = me.chart.options.elements.rectangle;
			var custom = rectangle.custom || {};
			var dataset = me.getDataset();

			rectangle._xScale = xScale;
			rectangle._yScale = yScale;
			rectangle._datasetIndex = me.index;
			rectangle._index = index;

			var ruler = me.getRuler(index); // The index argument for compatible
			rectangle._model = {
				x: me.calculateBarX(index, me.index, ruler),
				y: reset ? scaleBase : me.calculateBarY(index, me.index),

				// Tooltip
				label: me.chart.data.labels[index],
				datasetLabel: dataset.label,

				// Appearance
				horizontal: false,
				base: reset ? scaleBase : me.calculateBarBase(me.index, index),
				width: me.calculateBarWidth(ruler),
				backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
				borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
				borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
				borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
			};

			rectangle.pivot();
		},

		calculateBarBase: function(datasetIndex, index) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var base = yScale.getBaseValue();
			var original = base;

			if ((yScale.options.stacked === true) ||
				(yScale.options.stacked === undefined && meta.stack !== undefined)) {
				var chart = me.chart;
				var datasets = chart.data.datasets;
				var value = Number(datasets[datasetIndex].data[index]);

				for (var i = 0; i < datasetIndex; i++) {
					var currentDs = datasets[i];
					var currentDsMeta = chart.getDatasetMeta(i);
					if (currentDsMeta.bar && currentDsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i) &&
						meta.stack === currentDsMeta.stack) {
						var currentVal = Number(currentDs.data[index]);
						base += value < 0 ? Math.min(currentVal, original) : Math.max(currentVal, original);
					}
				}

				return yScale.getPixelForValue(base);
			}

			return yScale.getBasePixel();
		},

		getRuler: function() {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var stackCount = me.getStackCount();

			var tickWidth = xScale.width / xScale.ticks.length;
			var categoryWidth = tickWidth * xScale.options.categoryPercentage;
			var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
			var fullBarWidth = categoryWidth / stackCount;

			var barWidth = fullBarWidth * xScale.options.barPercentage;
			var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);

			return {
				stackCount: stackCount,
				tickWidth: tickWidth,
				categoryWidth: categoryWidth,
				categorySpacing: categorySpacing,
				fullBarWidth: fullBarWidth,
				barWidth: barWidth,
				barSpacing: barSpacing
			};
		},

		calculateBarWidth: function(ruler) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			if (xScale.options.barThickness) {
				return xScale.options.barThickness;
			}
			return ruler.barWidth;
		},

		// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
		getStackIndex: function(datasetIndex) {
			var me = this;
			var meta = me.chart.getDatasetMeta(datasetIndex);
			var yScale = me.getScaleForId(meta.yAxisID);
			var dsMeta, j;
			var stacks = [meta.stack];

			for (j = 0; j < datasetIndex; ++j) {
				dsMeta = this.chart.getDatasetMeta(j);
				if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
					(yScale.options.stacked === false ||
					(yScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(yScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}

			return stacks.length - 1;
		},

		calculateBarX: function(index, datasetIndex, ruler) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var stackIndex = me.getStackIndex(datasetIndex);
			var leftTick = xScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
			leftTick -= me.chart.isCombo ? (ruler.tickWidth / 2) : 0;

			return leftTick +
				(ruler.barWidth / 2) +
				ruler.categorySpacing +
				(ruler.barWidth * stackIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * stackIndex);
		},

		calculateBarY: function(index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var value = Number(me.getDataset().data[index]);

			if (yScale.options.stacked ||
				(yScale.options.stacked === undefined && meta.stack !== undefined)) {
				var base = yScale.getBaseValue();
				var sumPos = base,
					sumNeg = base;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = me.chart.data.datasets[i];
					var dsMeta = me.chart.getDatasetMeta(i);
					if (dsMeta.bar && dsMeta.yAxisID === yScale.id && me.chart.isDatasetVisible(i) &&
						meta.stack === dsMeta.stack) {
						var stackedVal = Number(ds.data[index]);
						if (stackedVal < 0) {
							sumNeg += stackedVal || 0;
						} else {
							sumPos += stackedVal || 0;
						}
					}
				}

				if (value < 0) {
					return yScale.getPixelForValue(sumNeg + value);
				}
				return yScale.getPixelForValue(sumPos + value);
			}

			return yScale.getPixelForValue(value);
		},

		draw: function(ease) {
			var me = this;
			var easingDecimal = ease || 1;
			var metaData = me.getMeta().data;
			var dataset = me.getDataset();
			var i, len;

			Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
			for (i = 0, len = metaData.length; i < len; ++i) {
				var d = dataset.data[i];
				if (d !== null && d !== undefined && !isNaN(d)) {
					metaData[i].transition(easingDecimal).draw();
				}
			}
			Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);
		},

		setHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;

			var custom = rectangle.custom || {};
			var model = rectangle._model;
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;
			var rectangleElementOptions = this.chart.options.elements.rectangle;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
		}

	});


	// including horizontalBar in the bar file, instead of a file of its own
	// it extends bar (like pie extends doughnut)
	Chart.defaults.horizontalBar = {
		hover: {
			mode: 'label'
		},

		scales: {
			xAxes: [{
				type: 'linear',
				position: 'bottom'
			}],
			yAxes: [{
				position: 'left',
				type: 'category',

				// Specific to Horizontal Bar Controller
				categoryPercentage: 0.8,
				barPercentage: 0.9,

				// grid line settings
				gridLines: {
					offsetGridLines: true
				}
			}]
		},
		elements: {
			rectangle: {
				borderSkipped: 'left'
			}
		},
		tooltips: {
			callbacks: {
				title: function(tooltipItems, data) {
					// Pick first xLabel for now
					var title = '';

					if (tooltipItems.length > 0) {
						if (tooltipItems[0].yLabel) {
							title = tooltipItems[0].yLabel;
						} else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
							title = data.labels[tooltipItems[0].index];
						}
					}

					return title;
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					return datasetLabel + ': ' + tooltipItem.xLabel;
				}
			}
		}
	};

	Chart.controllers.horizontalBar = Chart.controllers.bar.extend({

		// Correctly calculate the bar width accounting for stacks and the fact that not all bars are visible
		getStackCount: function() {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);

			var stacks = [];
			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var dsMeta = me.chart.getDatasetMeta(datasetIndex);
				if (dsMeta.bar && me.chart.isDatasetVisible(datasetIndex) &&
					(xScale.options.stacked === false ||
					(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}, me);

			return stacks.length;
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var scaleBase = xScale.getBasePixel();
			var custom = rectangle.custom || {};
			var dataset = me.getDataset();
			var rectangleElementOptions = me.chart.options.elements.rectangle;

			rectangle._xScale = xScale;
			rectangle._yScale = yScale;
			rectangle._datasetIndex = me.index;
			rectangle._index = index;

			var ruler = me.getRuler(index); // The index argument for compatible
			rectangle._model = {
				x: reset ? scaleBase : me.calculateBarX(index, me.index),
				y: me.calculateBarY(index, me.index, ruler),

				// Tooltip
				label: me.chart.data.labels[index],
				datasetLabel: dataset.label,

				// Appearance
				horizontal: true,
				base: reset ? scaleBase : me.calculateBarBase(me.index, index),
				height: me.calculateBarHeight(ruler),
				backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor),
				borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleElementOptions.borderSkipped,
				borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor),
				borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth)
			};

			rectangle.pivot();
		},

		calculateBarBase: function(datasetIndex, index) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var base = xScale.getBaseValue();
			var originalBase = base;

			if (xScale.options.stacked ||
				(xScale.options.stacked === undefined && meta.stack !== undefined)) {
				var chart = me.chart;
				var datasets = chart.data.datasets;
				var value = Number(datasets[datasetIndex].data[index]);

				for (var i = 0; i < datasetIndex; i++) {
					var currentDs = datasets[i];
					var currentDsMeta = chart.getDatasetMeta(i);
					if (currentDsMeta.bar && currentDsMeta.xAxisID === xScale.id && chart.isDatasetVisible(i) &&
						meta.stack === currentDsMeta.stack) {
						var currentVal = Number(currentDs.data[index]);
						base += value < 0 ? Math.min(currentVal, originalBase) : Math.max(currentVal, originalBase);
					}
				}

				return xScale.getPixelForValue(base);
			}

			return xScale.getBasePixel();
		},

		getRuler: function() {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var stackCount = me.getStackCount();

			var tickHeight = yScale.height / yScale.ticks.length;
			var categoryHeight = tickHeight * yScale.options.categoryPercentage;
			var categorySpacing = (tickHeight - (tickHeight * yScale.options.categoryPercentage)) / 2;
			var fullBarHeight = categoryHeight / stackCount;

			var barHeight = fullBarHeight * yScale.options.barPercentage;
			var barSpacing = fullBarHeight - (fullBarHeight * yScale.options.barPercentage);

			return {
				stackCount: stackCount,
				tickHeight: tickHeight,
				categoryHeight: categoryHeight,
				categorySpacing: categorySpacing,
				fullBarHeight: fullBarHeight,
				barHeight: barHeight,
				barSpacing: barSpacing
			};
		},

		calculateBarHeight: function(ruler) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			if (yScale.options.barThickness) {
				return yScale.options.barThickness;
			}
			return ruler.barHeight;
		},

		// Get stack index from the given dataset index accounting for stacks and the fact that not all bars are visible
		getStackIndex: function(datasetIndex) {
			var me = this;
			var meta = me.chart.getDatasetMeta(datasetIndex);
			var xScale = me.getScaleForId(meta.xAxisID);
			var dsMeta, j;
			var stacks = [meta.stack];

			for (j = 0; j < datasetIndex; ++j) {
				dsMeta = this.chart.getDatasetMeta(j);
				if (dsMeta.bar && this.chart.isDatasetVisible(j) &&
					(xScale.options.stacked === false ||
					(xScale.options.stacked === true && stacks.indexOf(dsMeta.stack) === -1) ||
					(xScale.options.stacked === undefined && (dsMeta.stack === undefined || stacks.indexOf(dsMeta.stack) === -1)))) {
					stacks.push(dsMeta.stack);
				}
			}

			return stacks.length - 1;
		},

		calculateBarX: function(index, datasetIndex) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var value = Number(me.getDataset().data[index]);

			if (xScale.options.stacked ||
				(xScale.options.stacked === undefined && meta.stack !== undefined)) {
				var base = xScale.getBaseValue();
				var sumPos = base,
					sumNeg = base;

				for (var i = 0; i < datasetIndex; i++) {
					var ds = me.chart.data.datasets[i];
					var dsMeta = me.chart.getDatasetMeta(i);
					if (dsMeta.bar && dsMeta.xAxisID === xScale.id && me.chart.isDatasetVisible(i) &&
						meta.stack === dsMeta.stack) {
						var stackedVal = Number(ds.data[index]);
						if (stackedVal < 0) {
							sumNeg += stackedVal || 0;
						} else {
							sumPos += stackedVal || 0;
						}
					}
				}

				if (value < 0) {
					return xScale.getPixelForValue(sumNeg + value);
				}
				return xScale.getPixelForValue(sumPos + value);
			}

			return xScale.getPixelForValue(value);
		},

		calculateBarY: function(index, datasetIndex, ruler) {
			var me = this;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var stackIndex = me.getStackIndex(datasetIndex);
			var topTick = yScale.getPixelForValue(null, index, datasetIndex, me.chart.isCombo);
			topTick -= me.chart.isCombo ? (ruler.tickHeight / 2) : 0;

			return topTick +
				(ruler.barHeight / 2) +
				ruler.categorySpacing +
				(ruler.barHeight * stackIndex) +
				(ruler.barSpacing / 2) +
				(ruler.barSpacing * stackIndex);
		}
	});
};

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.bubble = {
		hover: {
			mode: 'single'
		},

		scales: {
			xAxes: [{
				type: 'linear', // bubble should probably use a linear scale by default
				position: 'bottom',
				id: 'x-axis-0' // need an ID so datasets can reference the scale
			}],
			yAxes: [{
				type: 'linear',
				position: 'left',
				id: 'y-axis-0'
			}]
		},

		tooltips: {
			callbacks: {
				title: function() {
					// Title doesn't make sense for scatter since we format the data as a point
					return '';
				},
				label: function(tooltipItem, data) {
					var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
					var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
					return datasetLabel + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ', ' + dataPoint.r + ')';
				}
			}
		}
	};

	Chart.controllers.bubble = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Point,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data;

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			});
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);

			var custom = point.custom || {};
			var dataset = me.getDataset();
			var data = dataset.data[index];
			var pointElementOptions = me.chart.options.elements.point;
			var dsIndex = me.index;

			helpers.extend(point, {
				// Utility
				_xScale: xScale,
				_yScale: yScale,
				_datasetIndex: dsIndex,
				_index: index,

				// Desired view properties
				_model: {
					x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex, me.chart.isCombo),
					y: reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex),
					// Appearance
					radius: reset ? 0 : custom.radius ? custom.radius : me.getRadius(data),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
				}
			});

			// Trick to reset the styles of the point
			Chart.DatasetController.prototype.removeHoverStyle.call(me, point, pointElementOptions);

			var model = point._model;
			model.skip = custom.skip ? custom.skip : (isNaN(model.x) || isNaN(model.y));

			point.pivot();
		},

		getRadius: function(value) {
			return value.r || this.chart.options.elements.point.radius;
		},

		setHoverStyle: function(point) {
			var me = this;
			Chart.DatasetController.prototype.setHoverStyle.call(me, point);

			// Radius
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;
			model.radius = custom.hoverRadius ? custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, me.chart.options.elements.point.hoverRadius)) + me.getRadius(dataset.data[index]);
		},

		removeHoverStyle: function(point) {
			var me = this;
			Chart.DatasetController.prototype.removeHoverStyle.call(me, point, me.chart.options.elements.point);

			var dataVal = me.chart.data.datasets[point._datasetIndex].data[point._index];
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.radius ? custom.radius : me.getRadius(dataVal);
		}
	});
};

},{}],17:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		defaults = Chart.defaults;

	defaults.doughnut = {
		animation: {
			// Boolean - Whether we animate the rotation of the Doughnut
			animateRotate: true,
			// Boolean - Whether we animate scaling the Doughnut from the centre
			animateScale: false
		},
		aspectRatio: 1,
		hover: {
			mode: 'single'
		},
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			var data = chart.data;
			var datasets = data.datasets;
			var labels = data.labels;

			if (datasets.length) {
				for (var i = 0; i < datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
					if (labels[i]) {
						text.push(labels[i]);
					}
					text.push('</li>');
				}
			}

			text.push('</ul>');
			return text.join('');
		},
		legend: {
			labels: {
				generateLabels: function(chart) {
					var data = chart.data;
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							var meta = chart.getDatasetMeta(0);
							var ds = data.datasets[0];
							var arc = meta.data[i];
							var custom = arc && arc.custom || {};
							var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
							var arcOpts = chart.options.elements.arc;
							var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
							var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
							var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

							return {
								text: label,
								fillStyle: fill,
								strokeStyle: stroke,
								lineWidth: bw,
								hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

								// Extra data used for toggling the correct item
								index: i
							};
						});
					}
					return [];
				}
			},

			onClick: function(e, legendItem) {
				var index = legendItem.index;
				var chart = this.chart;
				var i, ilen, meta;

				for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i);
					// toggle visibility of index if exists
					if (meta.data[index]) {
						meta.data[index].hidden = !meta.data[index].hidden;
					}
				}

				chart.update();
			}
		},

		// The percentage of the chart that we cut out of the middle.
		cutoutPercentage: 50,

		// The rotation of the chart, where the first data arc begins.
		rotation: Math.PI * -0.5,

		// The total circumference of the chart.
		circumference: Math.PI * 2.0,

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					var dataLabel = data.labels[tooltipItem.index];
					var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

					if (helpers.isArray(dataLabel)) {
						// show value on first line of multiline label
						// need to clone because we are changing the value
						dataLabel = dataLabel.slice();
						dataLabel[0] += value;
					} else {
						dataLabel += value;
					}

					return dataLabel;
				}
			}
		}
	};

	defaults.pie = helpers.clone(defaults.doughnut);
	helpers.extend(defaults.pie, {
		cutoutPercentage: 0
	});


	Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Arc,

		linkScales: helpers.noop,

		// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
		getRingIndex: function(datasetIndex) {
			var ringIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (this.chart.isDatasetVisible(j)) {
					++ringIndex;
				}
			}

			return ringIndex;
		},

		update: function(reset) {
			var me = this;
			var chart = me.chart,
				chartArea = chart.chartArea,
				opts = chart.options,
				arcOpts = opts.elements.arc,
				availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth,
				availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth,
				minSize = Math.min(availableWidth, availableHeight),
				offset = {
					x: 0,
					y: 0
				},
				meta = me.getMeta(),
				cutoutPercentage = opts.cutoutPercentage,
				circumference = opts.circumference;

			// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
			if (circumference < Math.PI * 2.0) {
				var startAngle = opts.rotation % (Math.PI * 2.0);
				startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
				var endAngle = startAngle + circumference;
				var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
				var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
				var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
				var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
				var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
				var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
				var cutout = cutoutPercentage / 100.0;
				var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
				var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
				var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
				minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
				offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
			}

			chart.borderWidth = me.getMaxBorderWidth(meta.data);
			chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
			chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
			chart.offsetX = offset.x * chart.outerRadius;
			chart.offsetY = offset.y * chart.outerRadius;

			meta.total = me.calculateTotal();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
			me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart,
				chartArea = chart.chartArea,
				opts = chart.options,
				animationOpts = opts.animation,
				centerX = (chartArea.left + chartArea.right) / 2,
				centerY = (chartArea.top + chartArea.bottom) / 2,
				startAngle = opts.rotation, // non reset case handled later
				endAngle = opts.rotation, // non reset case handled later
				dataset = me.getDataset(),
				circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI)),
				innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius,
				outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius,
				valueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: centerX + chart.offsetX,
					y: centerY + chart.offsetY,
					startAngle: startAngle,
					endAngle: endAngle,
					circumference: circumference,
					outerRadius: outerRadius,
					innerRadius: innerRadius,
					label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
				}
			});

			var model = arc._model;
			// Resets the visual styles
			this.removeHoverStyle(arc);

			// Set correct angles if not resetting
			if (!reset || !animationOpts.animateRotate) {
				if (index === 0) {
					model.startAngle = opts.rotation;
				} else {
					model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
				}

				model.endAngle = model.startAngle + model.circumference;
			}

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		calculateTotal: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var total = 0;
			var value;

			helpers.each(meta.data, function(element, index) {
				value = dataset.data[index];
				if (!isNaN(value) && !element.hidden) {
					total += Math.abs(value);
				}
			});

			/* if (total === 0) {
				total = NaN;
			}*/

			return total;
		},

		calculateCircumference: function(value) {
			var total = this.getMeta().total;
			if (total > 0 && !isNaN(value)) {
				return (Math.PI * 2.0) * (value / total);
			}
			return 0;
		},

		// gets the max border or hover width to properly scale pie charts
		getMaxBorderWidth: function(elements) {
			var max = 0,
				index = this.index,
				length = elements.length,
				borderWidth,
				hoverWidth;

			for (var i = 0; i < length; i++) {
				borderWidth = elements[i]._model ? elements[i]._model.borderWidth : 0;
				hoverWidth = elements[i]._chart ? elements[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
			return max;
		}
	});
};

},{}],18:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.line = {
		showLines: true,
		spanGaps: false,

		hover: {
			mode: 'label'
		},

		scales: {
			xAxes: [{
				type: 'category',
				id: 'x-axis-0'
			}],
			yAxes: [{
				type: 'linear',
				id: 'y-axis-0'
			}]
		}
	};

	function lineEnabled(dataset, options) {
		return helpers.getValueOrDefault(dataset.showLine, options.showLines);
	}

	Chart.controllers.line = Chart.DatasetController.extend({

		datasetElementType: Chart.elements.Line,

		dataElementType: Chart.elements.Point,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data || [];
			var options = me.chart.options;
			var lineElementOptions = options.elements.line;
			var scale = me.getScaleForId(meta.yAxisID);
			var i, ilen, custom;
			var dataset = me.getDataset();
			var showLine = lineEnabled(dataset, options);

			// Update Line
			if (showLine) {
				custom = line.custom || {};

				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}

				// Utility
				line._scale = scale;
				line._datasetIndex = me.index;
				// Data
				line._children = points;
				// Model
				line._model = {
					// Appearance
					// The default behavior of lines is to break at null values, according
					// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
					// This option gives lines the ability to span gaps
					spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					steppedLine: custom.steppedLine ? custom.steppedLine : helpers.getValueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
					cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.getValueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scale.getBasePixel()
				};

				line.pivot();
			}

			// Update Points
			for (i=0, ilen=points.length; i<ilen; ++i) {
				me.updateElement(points[i], i, reset);
			}

			if (showLine && line._model.tension !== 0) {
				me.updateBezierControlPoints();
			}

			// Now pivot the point for animation
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].pivot();
			}
		},

		getPointBackgroundColor: function(point, index) {
			var backgroundColor = this.chart.options.elements.point.backgroundColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.backgroundColor) {
				backgroundColor = custom.backgroundColor;
			} else if (dataset.pointBackgroundColor) {
				backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
			} else if (dataset.backgroundColor) {
				backgroundColor = dataset.backgroundColor;
			}

			return backgroundColor;
		},

		getPointBorderColor: function(point, index) {
			var borderColor = this.chart.options.elements.point.borderColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.borderColor) {
				borderColor = custom.borderColor;
			} else if (dataset.pointBorderColor) {
				borderColor = helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
			} else if (dataset.borderColor) {
				borderColor = dataset.borderColor;
			}

			return borderColor;
		},

		getPointBorderWidth: function(point, index) {
			var borderWidth = this.chart.options.elements.point.borderWidth;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (!isNaN(custom.borderWidth)) {
				borderWidth = custom.borderWidth;
			} else if (!isNaN(dataset.pointBorderWidth)) {
				borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
			} else if (!isNaN(dataset.borderWidth)) {
				borderWidth = dataset.borderWidth;
			}

			return borderWidth;
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var datasetIndex = me.index;
			var value = dataset.data[index];
			var yScale = me.getScaleForId(meta.yAxisID);
			var xScale = me.getScaleForId(meta.xAxisID);
			var pointOptions = me.chart.options.elements.point;
			var x, y;
			var labels = me.chart.data.labels || [];
			var includeOffset = (labels.length === 1 || dataset.data.length === 1) || me.chart.isCombo;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex, includeOffset);
			y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

			// Utility
			point._xScale = xScale;
			point._yScale = yScale;
			point._datasetIndex = datasetIndex;
			point._index = index;

			// Desired view properties
			point._model = {
				x: x,
				y: y,
				skip: custom.skip || isNaN(x) || isNaN(y),
				// Appearance
				radius: custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
				pointStyle: custom.pointStyle || helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
				backgroundColor: me.getPointBackgroundColor(point, index),
				borderColor: me.getPointBorderColor(point, index),
				borderWidth: me.getPointBorderWidth(point, index),
				tension: meta.dataset._model ? meta.dataset._model.tension : 0,
				steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
				// Tooltip
				hitRadius: custom.hitRadius || helpers.getValueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
			};
		},

		calculatePointY: function(value, index, datasetIndex) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var sumPos = 0;
			var sumNeg = 0;
			var i, ds, dsMeta;

			if (yScale.options.stacked) {
				for (i = 0; i < datasetIndex; i++) {
					ds = chart.data.datasets[i];
					dsMeta = chart.getDatasetMeta(i);
					if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
						var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
						if (stackedRightValue < 0) {
							sumNeg += stackedRightValue || 0;
						} else {
							sumPos += stackedRightValue || 0;
						}
					}
				}

				var rightValue = Number(yScale.getRightValue(value));
				if (rightValue < 0) {
					return yScale.getPixelForValue(sumNeg + rightValue);
				}
				return yScale.getPixelForValue(sumPos + rightValue);
			}

			return yScale.getPixelForValue(value);
		},

		updateBezierControlPoints: function() {
			var me = this;
			var meta = me.getMeta();
			var area = me.chart.chartArea;
			var points = (meta.data || []);
			var i, ilen, point, model, controlPoints;

			// Only consider points that are drawn in case the spanGaps option is used
			if (meta.dataset._model.spanGaps) {
				points = points.filter(function(pt) {
					return !pt._model.skip;
				});
			}

			function capControlPoint(pt, min, max) {
				return Math.max(Math.min(pt, max), min);
			}

			if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
				helpers.splineCurveMonotone(points);
			} else {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					point = points[i];
					model = point._model;
					controlPoints = helpers.splineCurve(
						helpers.previousItem(points, i)._model,
						model,
						helpers.nextItem(points, i)._model,
						meta.dataset._model.tension
					);
					model.controlPointPreviousX = controlPoints.previous.x;
					model.controlPointPreviousY = controlPoints.previous.y;
					model.controlPointNextX = controlPoints.next.x;
					model.controlPointNextY = controlPoints.next.y;
				}
			}

			if (me.chart.options.elements.line.capBezierPoints) {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					model = points[i]._model;
					model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
					model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
					model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
				}
			}
		},

		draw: function(ease) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data || [];
			var easingDecimal = ease || 1;
			var i, ilen;

			// Transition Point Locations
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].transition(easingDecimal);
			}

			Chart.canvasHelpers.clipArea(me.chart.chart.ctx, me.chart.chartArea);
			// Transition and Draw the line
			if (lineEnabled(me.getDataset(), me.chart.options)) {
				meta.dataset.transition(easingDecimal).draw();
			}
			Chart.canvasHelpers.unclipArea(me.chart.chart.ctx);

			// Draw the points
			for (i=0, ilen=points.length; i<ilen; ++i) {
				points[i].draw(me.chart.chartArea);
			}
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.hoverRadius || helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth || helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var me = this;
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}

			model.radius = custom.radius || helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
			model.backgroundColor = me.getPointBackgroundColor(point, index);
			model.borderColor = me.getPointBorderColor(point, index);
			model.borderWidth = me.getPointBorderWidth(point, index);
		}
	});
};

},{}],19:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.polarArea = {

		scale: {
			type: 'radialLinear',
			lineArc: true, // so that lines are circular
			ticks: {
				beginAtZero: true
			}
		},

		// Boolean - Whether to animate the rotation of the chart
		animation: {
			animateRotate: true,
			animateScale: true
		},

		startAngle: -0.5 * Math.PI,
		aspectRatio: 1,
		legendCallback: function(chart) {
			var text = [];
			text.push('<ul class="' + chart.id + '-legend">');

			var data = chart.data;
			var datasets = data.datasets;
			var labels = data.labels;

			if (datasets.length) {
				for (var i = 0; i < datasets[0].data.length; ++i) {
					text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
					if (labels[i]) {
						text.push(labels[i]);
					}
					text.push('</li>');
				}
			}

			text.push('</ul>');
			return text.join('');
		},
		legend: {
			labels: {
				generateLabels: function(chart) {
					var data = chart.data;
					if (data.labels.length && data.datasets.length) {
						return data.labels.map(function(label, i) {
							var meta = chart.getDatasetMeta(0);
							var ds = data.datasets[0];
							var arc = meta.data[i];
							var custom = arc.custom || {};
							var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
							var arcOpts = chart.options.elements.arc;
							var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
							var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
							var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

							return {
								text: label,
								fillStyle: fill,
								strokeStyle: stroke,
								lineWidth: bw,
								hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

								// Extra data used for toggling the correct item
								index: i
							};
						});
					}
					return [];
				}
			},

			onClick: function(e, legendItem) {
				var index = legendItem.index;
				var chart = this.chart;
				var i, ilen, meta;

				for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
					meta = chart.getDatasetMeta(i);
					meta.data[index].hidden = !meta.data[index].hidden;
				}

				chart.update();
			}
		},

		// Need to override these to give a nice default
		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem, data) {
					return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
				}
			}
		}
	};

	Chart.controllers.polarArea = Chart.DatasetController.extend({

		dataElementType: Chart.elements.Arc,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var meta = me.getMeta();
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
			chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
			chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
			me.innerRadius = me.outerRadius - chart.radiusLength;

			meta.count = me.countVisibleElements();

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var dataset = me.getDataset();
			var opts = chart.options;
			var animationOpts = opts.animation;
			var scale = chart.scale;
			var getValueAtIndexOrDefault = helpers.getValueAtIndexOrDefault;
			var labels = chart.data.labels;

			var circumference = me.calculateCircumference(dataset.data[index]);
			var centerX = scale.xCenter;
			var centerY = scale.yCenter;

			// If there is NaN data before us, we need to calculate the starting angle correctly.
			// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
			var visibleCount = 0;
			var meta = me.getMeta();
			for (var i = 0; i < index; ++i) {
				if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
					++visibleCount;
				}
			}

			// var negHalfPI = -0.5 * Math.PI;
			var datasetStartAngle = opts.startAngle;
			var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
			var startAngle = datasetStartAngle + (circumference * visibleCount);
			var endAngle = startAngle + (arc.hidden ? 0 : circumference);

			var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: centerX,
					y: centerY,
					innerRadius: 0,
					outerRadius: reset ? resetRadius : distance,
					startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
					endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
					label: getValueAtIndexOrDefault(labels, index, labels[index])
				}
			});

			// Apply border and fill style
			me.removeHoverStyle(arc);

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		countVisibleElements: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var count = 0;

			helpers.each(meta.data, function(element, index) {
				if (!isNaN(dataset.data[index]) && !element.hidden) {
					count++;
				}
			});

			return count;
		},

		calculateCircumference: function(value) {
			var count = this.getMeta().count;
			if (count > 0 && !isNaN(value)) {
				return (2 * Math.PI) / count;
			}
			return 0;
		}
	});
};

},{}],20:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.radar = {
		aspectRatio: 1,
		scale: {
			type: 'radialLinear'
		},
		elements: {
			line: {
				tension: 0 // no bezier in radar
			}
		}
	};

	Chart.controllers.radar = Chart.DatasetController.extend({

		datasetElementType: Chart.elements.Line,

		dataElementType: Chart.elements.Point,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data;
			var custom = line.custom || {};
			var dataset = me.getDataset();
			var lineElementOptions = me.chart.options.elements.line;
			var scale = me.chart.scale;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
				dataset.lineTension = dataset.tension;
			}

			helpers.extend(meta.dataset, {
				// Utility
				_datasetIndex: me.index,
				// Data
				_children: points,
				_loop: true,
				// Model
				_model: {
					// Appearance
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),

					// Scale
					scaleTop: scale.top,
					scaleBottom: scale.bottom,
					scaleZero: scale.getBasePosition()
				}
			});

			meta.dataset.pivot();

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			}, me);

			// Update bezier control points
			me.updateBezierControlPoints();
		},
		updateElement: function(point, index, reset) {
			var me = this;
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var scale = me.chart.scale;
			var pointElementOptions = me.chart.options.elements.point;
			var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

			helpers.extend(point, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
					y: reset ? scale.yCenter : pointPosition.y,

					// Appearance
					tension: custom.tension ? custom.tension : helpers.getValueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
					radius: custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
					borderColor: custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
					pointStyle: custom.pointStyle ? custom.pointStyle : helpers.getValueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.getValueAtIndexOrDefault(dataset.hitRadius, index, pointElementOptions.hitRadius)
				}
			});

			point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},
		updateBezierControlPoints: function() {
			var chartArea = this.chart.chartArea;
			var meta = this.getMeta();

			helpers.each(meta.data, function(point, index) {
				var model = point._model;
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(meta.data, index, true)._model,
					model,
					helpers.nextItem(meta.data, index, true)._model,
					model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
				model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

				model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
				model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			});
		},

		draw: function(ease) {
			var meta = this.getMeta();
			var easingDecimal = ease || 1;

			// Transition Point Locations
			helpers.each(meta.data, function(point) {
				point.transition(easingDecimal);
			});

			// Transition and Draw the line
			meta.dataset.transition(easingDecimal).draw();

			// Draw the points
			helpers.each(meta.data, function(point) {
				point.draw();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;

			model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;
			var pointElementOptions = this.chart.options.elements.point;

			model.radius = custom.radius ? custom.radius : helpers.getValueAtIndexOrDefault(dataset.radius, index, pointElementOptions.radius);
			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.getValueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
		}
	});
};

},{}],21:[function(require,module,exports){
/* global window: false */
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.animation = {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers.noop,
		onComplete: helpers.noop
	};

	Chart.Animation = Chart.Element.extend({
		currentStep: null, // the current animation step
		numSteps: 60, // default number of steps
		easing: '', // the easing to use for this animation
		render: null, // render function used by the animation service

		onAnimationProgress: null, // user specified callback to fire on each step of the animation
		onAnimationComplete: null // user specified callback to fire when the animation finishes
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,

		/**
		 * @function Chart.animationService.addAnimation
		 * @param chartInstance {ChartController} the chart to animate
		 * @param animationObject {IAnimation} the animation that we will animate
		 * @param duration {Number} length of animation in ms
		 * @param lazy {Boolean} if true, the chart is not marked as animating to enable more responsive interactions
		 */
		addAnimation: function(chartInstance, animationObject, duration, lazy) {
			var me = this;

			if (!lazy) {
				chartInstance.animating = true;
			}

			for (var index = 0; index < me.animations.length; ++index) {
				if (me.animations[index].chartInstance === chartInstance) {
					// replacing an in progress animation
					me.animations[index].animationObject = animationObject;
					return;
				}
			}

			me.animations.push({
				chartInstance: chartInstance,
				animationObject: animationObject
			});

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (me.animations.length === 1) {
				me.requestAnimationFrame();
			}
		},
		// Cancel the animation for a given chart instance
		cancelAnimation: function(chartInstance) {
			var index = helpers.findIndex(this.animations, function(animationWrapper) {
				return animationWrapper.chartInstance === chartInstance;
			});

			if (index !== -1) {
				this.animations.splice(index, 1);
				chartInstance.animating = false;
			}
		},
		requestAnimationFrame: function() {
			var me = this;
			if (me.request === null) {
				// Skip animation frame requests until the active one is executed.
				// This can happen when processing mouse events, e.g. 'mousemove'
				// and 'mouseout' events will trigger multiple renders.
				me.request = helpers.requestAnimFrame.call(window, function() {
					me.request = null;
					me.startDigest();
				});
			}
		},
		startDigest: function() {
			var me = this;

			var startTime = Date.now();
			var framesToDrop = 0;

			if (me.dropFrames > 1) {
				framesToDrop = Math.floor(me.dropFrames);
				me.dropFrames = me.dropFrames % 1;
			}

			var i = 0;
			while (i < me.animations.length) {
				if (me.animations[i].animationObject.currentStep === null) {
					me.animations[i].animationObject.currentStep = 0;
				}

				me.animations[i].animationObject.currentStep += 1 + framesToDrop;

				if (me.animations[i].animationObject.currentStep > me.animations[i].animationObject.numSteps) {
					me.animations[i].animationObject.currentStep = me.animations[i].animationObject.numSteps;
				}

				me.animations[i].animationObject.render(me.animations[i].chartInstance, me.animations[i].animationObject);
				if (me.animations[i].animationObject.onAnimationProgress && me.animations[i].animationObject.onAnimationProgress.call) {
					me.animations[i].animationObject.onAnimationProgress.call(me.animations[i].chartInstance, me.animations[i]);
				}

				if (me.animations[i].animationObject.currentStep === me.animations[i].animationObject.numSteps) {
					if (me.animations[i].animationObject.onAnimationComplete && me.animations[i].animationObject.onAnimationComplete.call) {
						me.animations[i].animationObject.onAnimationComplete.call(me.animations[i].chartInstance, me.animations[i]);
					}

					// executed the last frame. Remove the animation.
					me.animations[i].chartInstance.animating = false;

					me.animations.splice(i, 1);
				} else {
					++i;
				}
			}

			var endTime = Date.now();
			var dropFrames = (endTime - startTime) / me.frameDuration;

			me.dropFrames += dropFrames;

			// Do we have more stuff to animate?
			if (me.animations.length > 0) {
				me.requestAnimationFrame();
			}
		}
	};
};

},{}],22:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
	// Global Chart canvas helpers object for drawing items to canvas
	var helpers = Chart.canvasHelpers = {};

	helpers.drawPoint = function(ctx, pointStyle, radius, x, y) {
		var type, edgeLength, xOffset, yOffset, height, size;

		if (typeof pointStyle === 'object') {
			type = pointStyle.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.drawImage(pointStyle, x - pointStyle.width / 2, y - pointStyle.height / 2);
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		switch (pointStyle) {
		// Default includes circle
		default:
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
			break;
		case 'triangle':
			ctx.beginPath();
			edgeLength = 3 * radius / Math.sqrt(3);
			height = edgeLength * Math.sqrt(3) / 2;
			ctx.moveTo(x - edgeLength / 2, y + height / 3);
			ctx.lineTo(x + edgeLength / 2, y + height / 3);
			ctx.lineTo(x, y - 2 * height / 3);
			ctx.closePath();
			ctx.fill();
			break;
		case 'rect':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
			ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
			break;
		case 'rectRounded':
			var offset = radius / Math.SQRT2;
			var leftX = x - offset;
			var topY = y - offset;
			var sideSize = Math.SQRT2 * radius;
			Chart.helpers.drawRoundedRectangle(ctx, leftX, topY, sideSize, sideSize, radius / 2);
			ctx.fill();
			break;
		case 'rectRot':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.moveTo(x - size, y);
			ctx.lineTo(x, y + size);
			ctx.lineTo(x + size, y);
			ctx.lineTo(x, y - size);
			ctx.closePath();
			ctx.fill();
			break;
		case 'cross':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'crossRot':
			ctx.beginPath();
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'star':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'line':
			ctx.beginPath();
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'dash':
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		}

		ctx.stroke();
	};

	helpers.clipArea = function(ctx, clipArea) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(clipArea.left, clipArea.top, clipArea.right - clipArea.left, clipArea.bottom - clipArea.top);
		ctx.clip();
	};

	helpers.unclipArea = function(ctx) {
		ctx.restore();
	};

};

},{}],23:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var plugins = Chart.plugins;
	var platform = Chart.platform;

	// Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	// Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	// Controllers available for dataset visualization eg. bar, line, slice, etc.
	Chart.controllers = {};

	/**
	 * Initializes the given config with global and chart default values.
	 */
	function initConfig(config) {
		config = config || {};

		// Do NOT use configMerge() for the data object because this method merges arrays
		// and so would change references to labels and datasets, preventing data updates.
		var data = config.data = config.data || {};
		data.datasets = data.datasets || [];
		data.labels = data.labels || [];

		config.options = helpers.configMerge(
			Chart.defaults.global,
			Chart.defaults[config.type],
			config.options || {});

		return config;
	}

	/**
	 * Updates the config of the chart
	 * @param chart {Chart.Controller} chart to update the options for
	 */
	function updateConfig(chart) {
		var newOptions = chart.options;

		// Update Scale(s) with options
		if (newOptions.scale) {
			chart.scale.options = newOptions.scale;
		} else if (newOptions.scales) {
			newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
				chart.scales[scaleOptions.id].options = scaleOptions;
			});
		}

		// Tooltip
		chart.tooltip._options = newOptions.tooltips;
	}

	/**
	 * @class Chart.Controller
	 * The main controller of a chart.
	 */
	Chart.Controller = function(item, config, instance) {
		var me = this;

		config = initConfig(config);

		var context = platform.acquireContext(item, config);
		var canvas = context && context.canvas;
		var height = canvas && canvas.height;
		var width = canvas && canvas.width;

		instance.ctx = context;
		instance.canvas = canvas;
		instance.config = config;
		instance.width = width;
		instance.height = height;
		instance.aspectRatio = height? width / height : null;

		me.id = helpers.uid();
		me.chart = instance;
		me.config = config;
		me.options = config.options;
		me._bufferedRender = false;

		// Add the chart instance to the global namespace
		Chart.instances[me.id] = me;

		Object.defineProperty(me, 'data', {
			get: function() {
				return me.config.data;
			}
		});

		if (!context || !canvas) {
			// The given item is not a compatible context2d element, let's return before finalizing
			// the chart initialization but after setting basic chart / controller properties that
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
			// https://github.com/chartjs/Chart.js/issues/2807
			console.error("Failed to create chart: can't acquire context from the given item");
			return me;
		}

		me.initialize();
		me.update();

		return me;
	};

	helpers.extend(Chart.Controller.prototype, /** @lends Chart.Controller.prototype */ {
		initialize: function() {
			var me = this;

			// Before init plugin notification
			plugins.notify(me, 'beforeInit');

			helpers.retinaScale(me.chart);

			me.bindEvents();

			if (me.options.responsive) {
				// Initial resize before chart draws (must be silent to preserve initial animations).
				me.resize(true);
			}

			// Make sure scales have IDs and are built before we build any controllers.
			me.ensureScalesHaveIDs();
			me.buildScales();
			me.initToolTip();

			// After init plugin notification
			plugins.notify(me, 'afterInit');

			return me;
		},

		clear: function() {
			helpers.clear(this.chart);
			return this;
		},

		stop: function() {
			// Stops any current animation loop occurring
			Chart.animationService.cancelAnimation(this);
			return this;
		},

		resize: function(silent) {
			var me = this;
			var chart = me.chart;
			var options = me.options;
			var canvas = chart.canvas;
			var aspectRatio = (options.maintainAspectRatio && chart.aspectRatio) || null;

			// the canvas render width and height will be casted to integers so make sure that
			// the canvas display style uses the same integer values to avoid blurring effect.
			var newWidth = Math.floor(helpers.getMaximumWidth(canvas));
			var newHeight = Math.floor(aspectRatio? newWidth / aspectRatio : helpers.getMaximumHeight(canvas));

			if (chart.width === newWidth && chart.height === newHeight) {
				return;
			}

			canvas.width = chart.width = newWidth;
			canvas.height = chart.height = newHeight;
			canvas.style.width = newWidth + 'px';
			canvas.style.height = newHeight + 'px';

			helpers.retinaScale(chart);

			if (!silent) {
				// Notify any plugins about the resize
				var newSize = {width: newWidth, height: newHeight};
				plugins.notify(me, 'resize', [newSize]);

				// Notify of resize
				if (me.options.onResize) {
					me.options.onResize(me, newSize);
				}

				me.stop();
				me.update(me.options.responsiveAnimationDuration);
			}
		},

		ensureScalesHaveIDs: function() {
			var options = this.options;
			var scalesOptions = options.scales || {};
			var scaleOptions = options.scale;

			helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
				xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
			});

			helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
				yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
			});

			if (scaleOptions) {
				scaleOptions.id = scaleOptions.id || 'scale';
			}
		},

		/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
		buildScales: function() {
			var me = this;
			var options = me.options;
			var scales = me.scales = {};
			var items = [];

			if (options.scales) {
				items = items.concat(
					(options.scales.xAxes || []).map(function(xAxisOptions) {
						return {options: xAxisOptions, dtype: 'category'};
					}),
					(options.scales.yAxes || []).map(function(yAxisOptions) {
						return {options: yAxisOptions, dtype: 'linear'};
					})
				);
			}

			if (options.scale) {
				items.push({options: options.scale, dtype: 'radialLinear', isDefault: true});
			}

			helpers.each(items, function(item) {
				var scaleOptions = item.options;
				var scaleType = helpers.getValueOrDefault(scaleOptions.type, item.dtype);
				var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}

				var scale = new scaleClass({
					id: scaleOptions.id,
					options: scaleOptions,
					ctx: me.chart.ctx,
					chart: me
				});

				scales[scale.id] = scale;

				// TODO(SB): I think we should be able to remove this custom case (options.scale)
				// and consider it as a regular scale part of the "scales"" map only! This would
				// make the logic easier and remove some useless? custom code.
				if (item.isDefault) {
					me.scale = scale;
				}
			});

			Chart.scaleService.addScalesToLayout(this);
		},

		buildOrUpdateControllers: function() {
			var me = this;
			var types = [];
			var newControllers = [];

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				var meta = me.getDatasetMeta(datasetIndex);
				if (!meta.type) {
					meta.type = dataset.type || me.config.type;
				}

				types.push(meta.type);

				if (meta.controller) {
					meta.controller.updateIndex(datasetIndex);
				} else {
					meta.controller = new Chart.controllers[meta.type](me, datasetIndex);
					newControllers.push(meta.controller);
				}
			}, me);

			if (types.length > 1) {
				for (var i = 1; i < types.length; i++) {
					if (types[i] !== types[i - 1]) {
						me.isCombo = true;
						break;
					}
				}
			}

			return newControllers;
		},

		/**
		 * Reset the elements of all datasets
		 * @private
		 */
		resetElements: function() {
			var me = this;
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.reset();
			}, me);
		},

		/**
		* Resets the chart back to it's state before the initial animation
		*/
		reset: function() {
			this.resetElements();
			this.tooltip.initialize();
		},

		update: function(animationDuration, lazy) {
			var me = this;

			updateConfig(me);

			if (plugins.notify(me, 'beforeUpdate') === false) {
				return;
			}

			// In case the entire data object changed
			me.tooltip._data = me.data;

			// Make sure dataset controllers are updated and new controllers are reset
			var newControllers = me.buildOrUpdateControllers();

			// Make sure all dataset controllers have correct meta data counts
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
			}, me);

			me.updateLayout();

			// Can only reset the new controllers after the scales have been updated
			helpers.each(newControllers, function(controller) {
				controller.reset();
			});

			me.updateDatasets();

			// Do this before render so that any plugins that need final scale updates can use it
			plugins.notify(me, 'afterUpdate');

			if (me._bufferedRender) {
				me._bufferedRequest = {
					lazy: lazy,
					duration: animationDuration
				};
			} else {
				me.render(animationDuration, lazy);
			}
		},

		/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */
		updateLayout: function() {
			var me = this;

			if (plugins.notify(me, 'beforeLayout') === false) {
				return;
			}

			Chart.layoutService.update(this, this.chart.width, this.chart.height);

			/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 */
			plugins.notify(me, 'afterScaleUpdate');
			plugins.notify(me, 'afterLayout');
		},

		/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */
		updateDatasets: function() {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
				return;
			}

			for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				me.getDatasetMeta(i).controller.update();
			}

			plugins.notify(me, 'afterDatasetsUpdate');
		},

		render: function(duration, lazy) {
			var me = this;

			if (plugins.notify(me, 'beforeRender') === false) {
				return;
			}

			var animationOptions = me.options.animation;
			var onComplete = function() {
				plugins.notify(me, 'afterRender');
				var callback = animationOptions && animationOptions.onComplete;
				if (callback && callback.call) {
					callback.call(me);
				}
			};

			if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
				var animation = new Chart.Animation();
				animation.numSteps = (duration || animationOptions.duration) / 16.66; // 60 fps
				animation.easing = animationOptions.easing;

				// render function
				animation.render = function(chartInstance, animationObject) {
					var easingFunction = helpers.easingEffects[animationObject.easing];
					var stepDecimal = animationObject.currentStep / animationObject.numSteps;
					var easeDecimal = easingFunction(stepDecimal);

					chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
				};

				// user events
				animation.onAnimationProgress = animationOptions.onProgress;
				animation.onAnimationComplete = onComplete;

				Chart.animationService.addAnimation(me, animation, duration, lazy);
			} else {
				me.draw();
				onComplete();
			}

			return me;
		},

		draw: function(easingValue) {
			var me = this;

			me.clear();

			if (easingValue === undefined || easingValue === null) {
				easingValue = 1;
			}

			if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
				return;
			}

			// Draw all the scales
			helpers.each(me.boxes, function(box) {
				box.draw(me.chartArea);
			}, me);

			if (me.scale) {
				me.scale.draw();
			}

			me.drawDatasets(easingValue);

			// Finally draw the tooltip
			me.tooltip.transition(easingValue).draw();

			plugins.notify(me, 'afterDraw', [easingValue]);
		},

		/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */
		drawDatasets: function(easingValue) {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
				return;
			}

			// Draw each dataset via its respective controller (reversed to support proper line stacking)
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				if (me.isDatasetVisible(datasetIndex)) {
					me.getDatasetMeta(datasetIndex).controller.draw(easingValue);
				}
			}, me, true);

			plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
		},

		// Get the single element that was clicked on
		// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		getElementAtEvent: function(e) {
			return Chart.Interaction.modes.single(this, e);
		},

		getElementsAtEvent: function(e) {
			return Chart.Interaction.modes.label(this, e, {intersect: true});
		},

		getElementsAtXAxis: function(e) {
			return Chart.Interaction.modes['x-axis'](this, e, {intersect: true});
		},

		getElementsAtEventForMode: function(e, mode, options) {
			var method = Chart.Interaction.modes[mode];
			if (typeof method === 'function') {
				return method(this, e, options);
			}

			return [];
		},

		getDatasetAtEvent: function(e) {
			return Chart.Interaction.modes.dataset(this, e, {intersect: true});
		},

		getDatasetMeta: function(datasetIndex) {
			var me = this;
			var dataset = me.data.datasets[datasetIndex];
			if (!dataset._meta) {
				dataset._meta = {};
			}

			var meta = dataset._meta[me.id];
			if (!meta) {
				meta = dataset._meta[me.id] = {
					type: null,
					data: [],
					dataset: null,
					controller: null,
					hidden: null,			// See isDatasetVisible() comment
					xAxisID: null,
					yAxisID: null
				};
			}

			return meta;
		},

		getVisibleDatasetCount: function() {
			var count = 0;
			for (var i = 0, ilen = this.data.datasets.length; i<ilen; ++i) {
				if (this.isDatasetVisible(i)) {
					count++;
				}
			}
			return count;
		},

		isDatasetVisible: function(datasetIndex) {
			var meta = this.getDatasetMeta(datasetIndex);

			// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
			// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
			return typeof meta.hidden === 'boolean'? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
		},

		generateLegend: function() {
			return this.options.legendCallback(this);
		},

		destroy: function() {
			var me = this;
			var canvas = me.chart.canvas;
			var meta, i, ilen;

			me.stop();

			// dataset controllers need to cleanup associated data
			for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				meta = me.getDatasetMeta(i);
				if (meta.controller) {
					meta.controller.destroy();
					meta.controller = null;
				}
			}

			if (canvas) {
				me.unbindEvents();
				helpers.clear(me.chart);
				platform.releaseContext(me.chart.ctx);
				me.chart.canvas = null;
				me.chart.ctx = null;
			}

			plugins.notify(me, 'destroy');

			delete Chart.instances[me.id];
		},

		toBase64Image: function() {
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
		},

		initToolTip: function() {
			var me = this;
			me.tooltip = new Chart.Tooltip({
				_chart: me.chart,
				_chartInstance: me,
				_data: me.data,
				_options: me.options.tooltips
			}, me);
			me.tooltip.initialize();
		},

		/**
		 * @private
		 */
		bindEvents: function() {
			var me = this;
			var listeners = me._listeners = {};
			var listener = function() {
				me.eventHandler.apply(me, arguments);
			};

			helpers.each(me.options.events, function(type) {
				platform.addEventListener(me, type, listener);
				listeners[type] = listener;
			});

			// Responsiveness is currently based on the use of an iframe, however this method causes
			// performance issues and could be troublesome when used with ad blockers. So make sure
			// that the user is still able to create a chart without iframe when responsive is false.
			// See https://github.com/chartjs/Chart.js/issues/2210
			if (me.options.responsive) {
				listener = function() {
					me.resize();
				};

				platform.addEventListener(me, 'resize', listener);
				listeners.resize = listener;
			}
		},

		/**
		 * @private
		 */
		unbindEvents: function() {
			var me = this;
			var listeners = me._listeners;
			if (!listeners) {
				return;
			}

			delete me._listeners;
			helpers.each(listeners, function(listener, type) {
				platform.removeEventListener(me, type, listener);
			});
		},

		updateHoverStyle: function(elements, mode, enabled) {
			var method = enabled? 'setHoverStyle' : 'removeHoverStyle';
			var element, i, ilen;

			for (i=0, ilen=elements.length; i<ilen; ++i) {
				element = elements[i];
				if (element) {
					this.getDatasetMeta(element._datasetIndex).controller[method](element);
				}
			}
		},

		/**
		 * @private
		 */
		eventHandler: function(e) {
			var me = this;
			var tooltip = me.tooltip;

			if (plugins.notify(me, 'beforeEvent', [e]) === false) {
				return;
			}

			// Buffer any update calls so that renders do not occur
			me._bufferedRender = true;
			me._bufferedRequest = null;

			var changed = me.handleEvent(e);
			changed |= tooltip && tooltip.handleEvent(e);

			plugins.notify(me, 'afterEvent', [e]);

			var bufferedRequest = me._bufferedRequest;
			if (bufferedRequest) {
				// If we have an update that was triggered, we need to do a normal render
				me.render(bufferedRequest.duration, bufferedRequest.lazy);
			} else if (changed && !me.animating) {
				// If entering, leaving, or changing elements, animate the change via pivot
				me.stop();

				// We only need to render at this point. Updating will cause scales to be
				// recomputed generating flicker & using more memory than necessary.
				me.render(me.options.hover.animationDuration, true);
			}

			me._bufferedRender = false;
			me._bufferedRequest = null;

			return me;
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me.options || {};
			var hoverOptions = options.hover;
			var changed = false;

			me.lastActive = me.lastActive || [];

			// Find Active Elements for hover and tooltips
			if (e.type === 'mouseout') {
				me.active = [];
			} else {
				me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
			}

			// On Hover hook
			if (hoverOptions.onHover) {
				// Need to call with native event here to not break backwards compatibility
				hoverOptions.onHover.call(me, e.native, me.active);
			}

			if (e.type === 'mouseup' || e.type === 'click') {
				if (options.onClick) {
					// Use e.native here for backwards compatibility
					options.onClick.call(me, e.native, me.active);
				}
			}

			// Remove styling for last active (even if it may still be active)
			if (me.lastActive.length) {
				me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
			}

			// Built in hover styling
			if (me.active.length && hoverOptions.mode) {
				me.updateHoverStyle(me.active, hoverOptions.mode, true);
			}

			changed = !helpers.arrayEquals(me.active, me.lastActive);

			// Remember Last Actives
			me.lastActive = me.active;

			return changed;
		}
	});
};

},{}],24:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

	/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */
	function listenArrayEvents(array, listener) {
		if (array._chartjs) {
			array._chartjs.listeners.push(listener);
			return;
		}

		Object.defineProperty(array, '_chartjs', {
			configurable: true,
			enumerable: false,
			value: {
				listeners: [listener]
			}
		});

		arrayEvents.forEach(function(key) {
			var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
			var base = array[key];

			Object.defineProperty(array, key, {
				configurable: true,
				enumerable: false,
				value: function() {
					var args = Array.prototype.slice.call(arguments);
					var res = base.apply(this, args);

					helpers.each(array._chartjs.listeners, function(object) {
						if (typeof object[method] === 'function') {
							object[method].apply(object, args);
						}
					});

					return res;
				}
			});
		});
	}

	/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */
	function unlistenArrayEvents(array, listener) {
		var stub = array._chartjs;
		if (!stub) {
			return;
		}

		var listeners = stub.listeners;
		var index = listeners.indexOf(listener);
		if (index !== -1) {
			listeners.splice(index, 1);
		}

		if (listeners.length > 0) {
			return;
		}

		arrayEvents.forEach(function(key) {
			delete array[key];
		});

		delete array._chartjs;
	}

	// Base class for all dataset controllers (line, bar, etc)
	Chart.DatasetController = function(chart, datasetIndex) {
		this.initialize(chart, datasetIndex);
	};

	helpers.extend(Chart.DatasetController.prototype, {

		/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
		datasetElementType: null,

		/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
		dataElementType: null,

		initialize: function(chart, datasetIndex) {
			var me = this;
			me.chart = chart;
			me.index = datasetIndex;
			me.linkScales();
			me.addElements();
		},

		updateIndex: function(datasetIndex) {
			this.index = datasetIndex;
		},

		linkScales: function() {
			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			if (meta.xAxisID === null) {
				meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
			}
			if (meta.yAxisID === null) {
				meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
			}
		},

		getDataset: function() {
			return this.chart.data.datasets[this.index];
		},

		getMeta: function() {
			return this.chart.getDatasetMeta(this.index);
		},

		getScaleForId: function(scaleID) {
			return this.chart.scales[scaleID];
		},

		reset: function() {
			this.update(true);
		},

		/**
		 * @private
		 */
		destroy: function() {
			if (this._data) {
				unlistenArrayEvents(this._data, this);
			}
		},

		createMetaDataset: function() {
			var me = this;
			var type = me.datasetElementType;
			return type && new type({
				_chart: me.chart.chart,
				_datasetIndex: me.index
			});
		},

		createMetaData: function(index) {
			var me = this;
			var type = me.dataElementType;
			return type && new type({
				_chart: me.chart.chart,
				_datasetIndex: me.index,
				_index: index
			});
		},

		addElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data || [];
			var metaData = meta.data;
			var i, ilen;

			for (i=0, ilen=data.length; i<ilen; ++i) {
				metaData[i] = metaData[i] || me.createMetaData(i);
			}

			meta.dataset = meta.dataset || me.createMetaDataset();
		},

		addElementAndReset: function(index) {
			var element = this.createMetaData(index);
			this.getMeta().data.splice(index, 0, element);
			this.updateElement(element, index, true);
		},

		buildOrUpdateElements: function() {
			var me = this;
			var dataset = me.getDataset();
			var data = dataset.data || (dataset.data = []);

			// In order to correctly handle data addition/deletion animation (an thus simulate
			// real-time charts), we need to monitor these data modifications and synchronize
			// the internal meta data accordingly.
			if (me._data !== data) {
				if (me._data) {
					// This case happens when the user replaced the data array instance.
					unlistenArrayEvents(me._data, me);
				}

				listenArrayEvents(data, me);
				me._data = data;
			}

			// Re-sync meta data in case the user replaced the data array or if we missed
			// any updates and so make sure that we handle number of datapoints changing.
			me.resyncElements();
		},

		update: helpers.noop,

		draw: function(ease) {
			var easingDecimal = ease || 1;
			var i, len;
			var metaData = this.getMeta().data;
			for (i = 0, len = metaData.length; i < len; ++i) {
				metaData[i].transition(easingDecimal).draw();
			}
		},

		removeHoverStyle: function(element, elementOpts) {
			var dataset = this.chart.data.datasets[element._datasetIndex],
				index = element._index,
				custom = element.custom || {},
				valueOrDefault = helpers.getValueAtIndexOrDefault,
				model = element._model;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
		},

		setHoverStyle: function(element) {
			var dataset = this.chart.data.datasets[element._datasetIndex],
				index = element._index,
				custom = element.custom || {},
				valueOrDefault = helpers.getValueAtIndexOrDefault,
				getHoverColor = helpers.getHoverColor,
				model = element._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		/**
		 * @private
		 */
		resyncElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data;
			var numMeta = meta.data.length;
			var numData = data.length;

			if (numData < numMeta) {
				meta.data.splice(numData, numMeta - numData);
			} else if (numData > numMeta) {
				me.insertElements(numMeta, numData - numMeta);
			}
		},

		/**
		 * @private
		 */
		insertElements: function(start, count) {
			for (var i=0; i<count; ++i) {
				this.addElementAndReset(start + i);
			}
		},

		/**
		 * @private
		 */
		onDataPush: function() {
			this.insertElements(this.getDataset().data.length-1, arguments.length);
		},

		/**
		 * @private
		 */
		onDataPop: function() {
			this.getMeta().data.pop();
		},

		/**
		 * @private
		 */
		onDataShift: function() {
			this.getMeta().data.shift();
		},

		/**
		 * @private
		 */
		onDataSplice: function(start, count) {
			this.getMeta().data.splice(start, count);
			this.insertElements(start, arguments.length - 2);
		},

		/**
		 * @private
		 */
		onDataUnshift: function() {
			this.insertElements(0, arguments.length);
		}
	});

	Chart.DatasetController.extend = helpers.inherits;
};

},{}],25:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.elements = {};

	Chart.Element = function(configuration) {
		helpers.extend(this, configuration);
		this.initialize.apply(this, arguments);
	};

	helpers.extend(Chart.Element.prototype, {

		initialize: function() {
			this.hidden = false;
		},

		pivot: function() {
			var me = this;
			if (!me._view) {
				me._view = helpers.clone(me._model);
			}
			me._start = helpers.clone(me._view);
			return me;
		},

		transition: function(ease) {
			var me = this;

			if (!me._view) {
				me._view = helpers.clone(me._model);
			}

			// No animation -> No Transition
			if (ease === 1) {
				me._view = me._model;
				me._start = null;
				return me;
			}

			if (!me._start) {
				me.pivot();
			}

			helpers.each(me._model, function(value, key) {

				if (key[0] === '_') {
					// Only non-underscored properties
				// Init if doesn't exist
				} else if (!me._view.hasOwnProperty(key)) {
					if (typeof value === 'number' && !isNaN(me._view[key])) {
						me._view[key] = value * ease;
					} else {
						me._view[key] = value;
					}
				// No unnecessary computations
				} else if (value === me._view[key]) {
					// It's the same! Woohoo!
				// Color transitions if possible
				} else if (typeof value === 'string') {
					try {
						var color = helpers.color(me._model[key]).mix(helpers.color(me._start[key]), ease);
						me._view[key] = color.rgbString();
					} catch (err) {
						me._view[key] = value;
					}
				// Number transitions
				} else if (typeof value === 'number') {
					var startVal = me._start[key] !== undefined && isNaN(me._start[key]) === false ? me._start[key] : 0;
					me._view[key] = ((me._model[key] - startVal) * ease) + startVal;
				// Everything else
				} else {
					me._view[key] = value;
				}
			}, me);

			return me;
		},

		tooltipPosition: function() {
			return {
				x: this._model.x,
				y: this._model.y
			};
		},

		hasValue: function() {
			return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
		}
	});

	Chart.Element.extend = helpers.inherits;

};

},{}],26:[function(require,module,exports){
/* global window: false */
/* global document: false */
'use strict';

var color = require(3);

module.exports = function(Chart) {
	// Global Chart helpers object for utility methods and classes
	var helpers = Chart.helpers = {};

	// -- Basic js utility methods
	helpers.each = function(loopable, callback, self, reverse) {
		// Check to see if null or undefined firstly.
		var i, len;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					callback.call(self, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					callback.call(self, loopable[i], i);
				}
			}
		} else if (typeof loopable === 'object') {
			var keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				callback.call(self, loopable[keys[i]], keys[i]);
			}
		}
	};
	helpers.clone = function(obj) {
		var objClone = {};
		helpers.each(obj, function(value, key) {
			if (helpers.isArray(value)) {
				objClone[key] = value.slice(0);
			} else if (typeof value === 'object' && value !== null) {
				objClone[key] = helpers.clone(value);
			} else {
				objClone[key] = value;
			}
		});
		return objClone;
	};
	helpers.extend = function(base) {
		var setFn = function(value, key) {
			base[key] = value;
		};
		for (var i = 1, ilen = arguments.length; i < ilen; i++) {
			helpers.each(arguments[i], setFn);
		}
		return base;
	};
	// Need a special merge function to chart configs since they are now grouped
	helpers.configMerge = function(_base) {
		var base = helpers.clone(_base);
		helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
			helpers.each(extension, function(value, key) {
				var baseHasProperty = base.hasOwnProperty(key);
				var baseVal = baseHasProperty ? base[key] : {};

				if (key === 'scales') {
					// Scale config merging is complex. Add our own function here for that
					base[key] = helpers.scaleMerge(baseVal, value);
				} else if (key === 'scale') {
					// Used in polar area & radar charts since there is only one scale
					base[key] = helpers.configMerge(baseVal, Chart.scaleService.getScaleDefaults(value.type), value);
				} else if (baseHasProperty
						&& typeof baseVal === 'object'
						&& !helpers.isArray(baseVal)
						&& baseVal !== null
						&& typeof value === 'object'
						&& !helpers.isArray(value)) {
					// If we are overwriting an object with an object, do a merge of the properties.
					base[key] = helpers.configMerge(baseVal, value);
				} else {
					// can just overwrite the value in this case
					base[key] = value;
				}
			});
		});

		return base;
	};
	helpers.scaleMerge = function(_base, extension) {
		var base = helpers.clone(_base);

		helpers.each(extension, function(value, key) {
			if (key === 'xAxes' || key === 'yAxes') {
				// These properties are arrays of items
				if (base.hasOwnProperty(key)) {
					helpers.each(value, function(valueObj, index) {
						var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
						var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
						if (index >= base[key].length || !base[key][index].type) {
							base[key].push(helpers.configMerge(axisDefaults, valueObj));
						} else if (valueObj.type && valueObj.type !== base[key][index].type) {
							// Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
							base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
						} else {
							// Type is the same
							base[key][index] = helpers.configMerge(base[key][index], valueObj);
						}
					});
				} else {
					base[key] = [];
					helpers.each(value, function(valueObj) {
						var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
						base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
					});
				}
			} else if (base.hasOwnProperty(key) && typeof base[key] === 'object' && base[key] !== null && typeof value === 'object') {
				// If we are overwriting an object with an object, do a merge of the properties.
				base[key] = helpers.configMerge(base[key], value);

			} else {
				// can just overwrite the value in this case
				base[key] = value;
			}
		});

		return base;
	};
	helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
		if (value === undefined || value === null) {
			return defaultValue;
		}

		if (helpers.isArray(value)) {
			return index < value.length ? value[index] : defaultValue;
		}

		return value;
	};
	helpers.getValueOrDefault = function(value, defaultValue) {
		return value === undefined ? defaultValue : value;
	};
	helpers.indexOf = Array.prototype.indexOf?
		function(array, item) {
			return array.indexOf(item);
		}:
		function(array, item) {
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (array[i] === item) {
					return i;
				}
			}
			return -1;
		};
	helpers.where = function(collection, filterCallback) {
		if (helpers.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers.findIndex = Array.prototype.findIndex?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (startIndex === undefined || startIndex === null) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.inherits = function(extensions) {
		// Basic javascript inheritance based on the model created in Backbone.js
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};
		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();

		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;

		return ChartElement;
	};
	helpers.noop = function() {};
	helpers.uid = (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}());
	// -- Math methods
	helpers.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
	};
	helpers.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers.sign = Math.sign?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers.log10 = Math.log10?
		function(x) {
			return Math.log10(x);
		} :
		function(x) {
			return Math.log(x) / Math.LN10;
		};
	helpers.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};
	// Gets the angle from vertical upright to the point about a centre.
	helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x,
			distanceFromYCenter = anglePoint.y - centrePoint.y,
			radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};
	helpers.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};
	helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint,
			current = middlePoint,
			next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers.EPSILON = Number.EPSILON || 1e-14;
	helpers.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers.niceNum = function(range, round) {
		var exponent = Math.floor(helpers.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Easing functions adapted from Robert Penner's easing equations
	// http://www.robertpenner.com/easing/
	var easingEffects = helpers.easingEffects = {
		linear: function(t) {
			return t;
		},
		easeInQuad: function(t) {
			return t * t;
		},
		easeOutQuad: function(t) {
			return -1 * t * (t - 2);
		},
		easeInOutQuad: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t;
			}
			return -1 / 2 * ((--t) * (t - 2) - 1);
		},
		easeInCubic: function(t) {
			return t * t * t;
		},
		easeOutCubic: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t + 1);
		},
		easeInOutCubic: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t + 2);
		},
		easeInQuart: function(t) {
			return t * t * t * t;
		},
		easeOutQuart: function(t) {
			return -1 * ((t = t / 1 - 1) * t * t * t - 1);
		},
		easeInOutQuart: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t;
			}
			return -1 / 2 * ((t -= 2) * t * t * t - 2);
		},
		easeInQuint: function(t) {
			return 1 * (t /= 1) * t * t * t * t;
		},
		easeOutQuint: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
		},
		easeInOutQuint: function(t) {
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * t * t * t * t * t;
			}
			return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
		},
		easeInSine: function(t) {
			return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
		},
		easeOutSine: function(t) {
			return 1 * Math.sin(t / 1 * (Math.PI / 2));
		},
		easeInOutSine: function(t) {
			return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
		},
		easeInExpo: function(t) {
			return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
		},
		easeOutExpo: function(t) {
			return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
		},
		easeInOutExpo: function(t) {
			if (t === 0) {
				return 0;
			}
			if (t === 1) {
				return 1;
			}
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * Math.pow(2, 10 * (t - 1));
			}
			return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
		},
		easeInCirc: function(t) {
			if (t >= 1) {
				return t;
			}
			return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
		},
		easeOutCirc: function(t) {
			return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
		},
		easeInOutCirc: function(t) {
			if ((t /= 1 / 2) < 1) {
				return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
			}
			return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
		},
		easeInElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
		},
		easeOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1) === 1) {
				return 1;
			}
			if (!p) {
				p = 1 * 0.3;
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
		},
		easeInOutElastic: function(t) {
			var s = 1.70158;
			var p = 0;
			var a = 1;
			if (t === 0) {
				return 0;
			}
			if ((t /= 1 / 2) === 2) {
				return 1;
			}
			if (!p) {
				p = 1 * (0.3 * 1.5);
			}
			if (a < Math.abs(1)) {
				a = 1;
				s = p / 4;
			} else {
				s = p / (2 * Math.PI) * Math.asin(1 / a);
			}
			if (t < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
			}
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
		},
		easeInBack: function(t) {
			var s = 1.70158;
			return 1 * (t /= 1) * t * ((s + 1) * t - s);
		},
		easeOutBack: function(t) {
			var s = 1.70158;
			return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
		},
		easeInOutBack: function(t) {
			var s = 1.70158;
			if ((t /= 1 / 2) < 1) {
				return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
			}
			return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
		},
		easeInBounce: function(t) {
			return 1 - easingEffects.easeOutBounce(1 - t);
		},
		easeOutBounce: function(t) {
			if ((t /= 1) < (1 / 2.75)) {
				return 1 * (7.5625 * t * t);
			} else if (t < (2 / 2.75)) {
				return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
			} else if (t < (2.5 / 2.75)) {
				return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
			}
			return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
		},
		easeInOutBounce: function(t) {
			if (t < 1 / 2) {
				return easingEffects.easeInBounce(t * 2) * 0.5;
			}
			return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
		}
	};
	// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt,
			canvas = evt.currentTarget || evt.srcElement,
			boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};
	helpers.addEvent = function(node, eventType, method) {
		if (node.addEventListener) {
			node.addEventListener(eventType, method);
		} else if (node.attachEvent) {
			node.attachEvent('on' + eventType, method);
		} else {
			node['on' + eventType] = method;
		}
	};
	helpers.removeEvent = function(node, eventType, handler) {
		if (node.removeEventListener) {
			node.removeEventListener(eventType, handler, false);
		} else if (node.detachEvent) {
			node.detachEvent('on' + eventType, handler);
		} else {
			node['on' + eventType] = helpers.noop;
		}
	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof(styleValue) === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	// Private helper to get a constraint dimension
	// @param domNode : the node to check the constraint on
	// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
	// @param percentageProperty : property of parent to use when calculating width as a percentage
	// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = domNode.parentNode;
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	helpers.getMaximumWidth = function(domNode) {
		var container = domNode.parentNode;
		var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
		var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
		var w = container.clientWidth - paddingLeft - paddingRight;
		var cw = helpers.getConstraintWidth(domNode);
		return isNaN(cw)? w : Math.min(w, cw);
	};
	helpers.getMaximumHeight = function(domNode) {
		var container = domNode.parentNode;
		var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
		var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
		var h = container.clientHeight - paddingTop - paddingBottom;
		var ch = helpers.getConstraintHeight(domNode);
		return isNaN(ch)? h : Math.min(h, ch);
	};
	helpers.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers.retinaScale = function(chart) {
		var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		canvas.style.height = height + 'px';
		canvas.style.width = width + 'px';
	};
	// -- Canvas methods
	helpers.clear = function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	};
	helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers.each(arrayOfThings, function(thing) {
			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
				longest = helpers.measureText(ctx, data, gc, longest, thing);
			} else if (helpers.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				helpers.each(thing, function(nestedThing) {
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
						longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
					}
				});
			}
		});

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};
	helpers.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers.each(arrayOfThings, function(thing) {
			if (helpers.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};
	helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();
	};
	helpers.color = function(c) {
		if (!color) {
			console.error('Color.js not found!');
			return c;
		}

		/* global CanvasGradient */
		if (c instanceof CanvasGradient) {
			return color(Chart.defaults.global.defaultColor);
		}

		return color(c);
	};
	helpers.isArray = Array.isArray?
		function(obj) {
			return Array.isArray(obj);
		} :
		function(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		};
	// ! @see http://stackoverflow.com/a/14853974
	helpers.arrayEquals = function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen=a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	};
	helpers.callCallback = function(fn, args, _tArg) {
		if (fn && typeof fn.call === 'function') {
			fn.apply(_tArg, args);
		}
	};
	helpers.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern) ?
			colorValue :
			helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

},{"3":3}],27:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
	var helpers = Chart.helpers;

	/**
	 * Helper function to get relative position for an event
	 * @param {Event|IEvent} event - The event to get the position for
	 * @param {Chart} chart - The chart
	 * @returns {Point} the event position
	 */
	function getRelativePosition(e, chart) {
		if (e.native) {
			return {
				x: e.x,
				y: e.y
			};
		}

		return helpers.getRelativePosition(e, chart);
	}

	/**
	 * Helper function to traverse all of the visible elements in the chart
	 * @param chart {chart} the chart
	 * @param handler {Function} the callback to execute for each visible item
	 */
	function parseVisibleItems(chart, handler) {
		var datasets = chart.data.datasets;
		var meta, i, j, ilen, jlen;

		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			if (!chart.isDatasetVisible(i)) {
				continue;
			}

			meta = chart.getDatasetMeta(i);
			for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
				var element = meta.data[j];
				if (!element._view.skip) {
					handler(element);
				}
			}
		}
	}

	/**
	 * Helper function to get the items that intersect the event position
	 * @param items {ChartElement[]} elements to filter
	 * @param position {Point} the point to be nearest to
	 * @return {ChartElement[]} the nearest items
	 */
	function getIntersectItems(chart, position) {
		var elements = [];

		parseVisibleItems(chart, function(element) {
			if (element.inRange(position.x, position.y)) {
				elements.push(element);
			}
		});

		return elements;
	}

	/**
	 * Helper function to get the items nearest to the event position considering all visible items in teh chart
	 * @param chart {Chart} the chart to look at elements from
	 * @param position {Point} the point to be nearest to
	 * @param intersect {Boolean} if true, only consider items that intersect the position
	 * @param distanceMetric {Function} Optional function to provide the distance between
	 * @return {ChartElement[]} the nearest items
	 */
	function getNearestItems(chart, position, intersect, distanceMetric) {
		var minDistance = Number.POSITIVE_INFINITY;
		var nearestItems = [];

		if (!distanceMetric) {
			distanceMetric = helpers.distanceBetweenPoints;
		}

		parseVisibleItems(chart, function(element) {
			if (intersect && !element.inRange(position.x, position.y)) {
				return;
			}

			var center = element.getCenterPoint();
			var distance = distanceMetric(position, center);

			if (distance < minDistance) {
				nearestItems = [element];
				minDistance = distance;
			} else if (distance === minDistance) {
				// Can have multiple items at the same distance in which case we sort by size
				nearestItems.push(element);
			}
		});

		return nearestItems;
	}

	function indexMode(chart, e, options) {
		var position = getRelativePosition(e, chart.chart);
		var distanceMetric = function(pt1, pt2) {
			return Math.abs(pt1.x - pt2.x);
		};
		var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
		var elements = [];

		if (!items.length) {
			return [];
		}

		chart.data.datasets.forEach(function(dataset, datasetIndex) {
			if (chart.isDatasetVisible(datasetIndex)) {
				var meta = chart.getDatasetMeta(datasetIndex),
					element = meta.data[items[0]._index];

				// don't count items that are skipped (null data)
				if (element && !element._view.skip) {
					elements.push(element);
				}
			}
		});

		return elements;
	}

	/**
	 * @interface IInteractionOptions
	 */
	/**
	 * If true, only consider items that intersect the point
	 * @name IInterfaceOptions#boolean
	 * @type Boolean
	 */

	/**
	 * Contains interaction related functions
	 * @namespace Chart.Interaction
	 */
	Chart.Interaction = {
		// Helper function for different modes
		modes: {
			single: function(chart, e) {
				var position = getRelativePosition(e, chart.chart);
				var elements = [];

				parseVisibleItems(chart, function(element) {
					if (element.inRange(position.x, position.y)) {
						elements.push(element);
						return elements;
					}
				});

				return elements.slice(0, 1);
			},

			/**
			 * @function Chart.Interaction.modes.label
			 * @deprecated since version 2.4.0
			 */
			label: indexMode,

			/**
			 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
			 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
			 * @function Chart.Interaction.modes.index
			 * @since v2.4.0
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use during interaction
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			index: indexMode,

			/**
			 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
			 * If the options.intersect is false, we find the nearest item and return the items in that dataset
			 * @function Chart.Interaction.modes.dataset
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use during interaction
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			dataset: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false);

				if (items.length > 0) {
					items = chart.getDatasetMeta(items[0]._datasetIndex).data;
				}

				return items;
			},

			/**
			 * @function Chart.Interaction.modes.x-axis
			 * @deprecated since version 2.4.0. Use index mode and intersect == true
			 */
			'x-axis': function(chart, e) {
				return indexMode(chart, e, true);
			},

			/**
			 * Point mode returns all elements that hit test based on the event position
			 * of the event
			 * @function Chart.Interaction.modes.intersect
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			point: function(chart, e) {
				var position = getRelativePosition(e, chart.chart);
				return getIntersectItems(chart, position);
			},

			/**
			 * nearest mode returns the element closest to the point
			 * @function Chart.Interaction.modes.intersect
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			nearest: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var nearestItems = getNearestItems(chart, position, options.intersect);

				// We have multiple items at the same distance from the event. Now sort by smallest
				if (nearestItems.length > 1) {
					nearestItems.sort(function(a, b) {
						var sizeA = a.getArea();
						var sizeB = b.getArea();
						var ret = sizeA - sizeB;

						if (ret === 0) {
							// if equal sort by dataset index
							ret = a._datasetIndex - b._datasetIndex;
						}

						return ret;
					});
				}

				// Return only 1 item
				return nearestItems.slice(0, 1);
			},

			/**
			 * x mode returns the elements that hit-test at the current x coordinate
			 * @function Chart.Interaction.modes.x
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			x: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var items = [];
				var intersectsItem = false;

				parseVisibleItems(chart, function(element) {
					if (element.inXRange(position.x)) {
						items.push(element);
					}

					if (element.inRange(position.x, position.y)) {
						intersectsItem = true;
					}
				});

				// If we want to trigger on an intersect and we don't have any items
				// that intersect the position, return nothing
				if (options.intersect && !intersectsItem) {
					items = [];
				}
				return items;
			},

			/**
			 * y mode returns the elements that hit-test at the current y coordinate
			 * @function Chart.Interaction.modes.y
			 * @param chart {chart} the chart we are returning items from
			 * @param e {Event} the event we are find things at
			 * @param options {IInteractionOptions} options to use
			 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			 */
			y: function(chart, e, options) {
				var position = getRelativePosition(e, chart.chart);
				var items = [];
				var intersectsItem = false;

				parseVisibleItems(chart, function(element) {
					if (element.inYRange(position.y)) {
						items.push(element);
					}

					if (element.inRange(position.x, position.y)) {
						intersectsItem = true;
					}
				});

				// If we want to trigger on an intersect and we don't have any items
				// that intersect the position, return nothing
				if (options.intersect && !intersectsItem) {
					items = [];
				}
				return items;
			}
		}
	};
};

},{}],28:[function(require,module,exports){
'use strict';

module.exports = function() {

	// Occupy the global variable of Chart, and create a simple base class
	var Chart = function(item, config) {
		this.controller = new Chart.Controller(item, config, this);
		return this.controller;
	};

	// Globally expose the defaults to allow for user updating/changing
	Chart.defaults = {
		global: {
			responsive: true,
			responsiveAnimationDuration: 0,
			maintainAspectRatio: true,
			events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
			hover: {
				onHover: null,
				mode: 'nearest',
				intersect: true,
				animationDuration: 400
			},
			onClick: null,
			defaultColor: 'rgba(0,0,0,0.1)',
			defaultFontColor: '#666',
			defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			defaultFontSize: 12,
			defaultFontStyle: 'normal',
			showLines: true,

			// Element defaults defined in element extensions
			elements: {},

			// Legend callback string
			legendCallback: function(chart) {
				var text = [];
				text.push('<ul class="' + chart.id + '-legend">');
				for (var i = 0; i < chart.data.datasets.length; i++) {
					text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
					if (chart.data.datasets[i].label) {
						text.push(chart.data.datasets[i].label);
					}
					text.push('</li>');
				}
				text.push('</ul>');

				return text.join('');
			}
		}
	};

	Chart.Chart = Chart;

	return Chart;
};

},{}],29:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	// The layout service is very self explanatory.  It's responsible for the layout within a chart.
	// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
	// It is this service's responsibility of carrying out that layout.
	Chart.layoutService = {
		defaults: {},

		// Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
		addBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				chartInstance.boxes = [];
			}
			chartInstance.boxes.push(box);
		},

		removeBox: function(chartInstance, box) {
			if (!chartInstance.boxes) {
				return;
			}
			chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
		},

		// The most important function
		update: function(chartInstance, width, height) {

			if (!chartInstance) {
				return;
			}

			var layoutOptions = chartInstance.options.layout;
			var padding = layoutOptions ? layoutOptions.padding : null;

			var leftPadding = 0;
			var rightPadding = 0;
			var topPadding = 0;
			var bottomPadding = 0;

			if (!isNaN(padding)) {
				// options.layout.padding is a number. assign to all
				leftPadding = padding;
				rightPadding = padding;
				topPadding = padding;
				bottomPadding = padding;
			} else {
				leftPadding = padding.left || 0;
				rightPadding = padding.right || 0;
				topPadding = padding.top || 0;
				bottomPadding = padding.bottom || 0;
			}

			var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'left';
			});
			var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'right';
			});
			var topBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'top';
			});
			var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'bottom';
			});

			// Boxes that overlay the chartarea such as the radialLinear scale
			var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
				return box.options.position === 'chartArea';
			});

			// Ensure that full width boxes are at the very top / bottom
			topBoxes.sort(function(a, b) {
				return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
			});
			bottomBoxes.sort(function(a, b) {
				return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
			});

			// Essentially we now have any number of boxes on each of the 4 sides.
			// Our canvas looks like the following.
			// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
			// B1 is the bottom axis
			// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
			// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
			// an error will be thrown.
			//
			// |----------------------------------------------------|
			// |                  T1 (Full Width)                   |
			// |----------------------------------------------------|
			// |    |    |                 T2                  |    |
			// |    |----|-------------------------------------|----|
			// |    |    | C1 |                           | C2 |    |
			// |    |    |----|                           |----|    |
			// |    |    |                                     |    |
			// | L1 | L2 |           ChartArea (C0)            | R1 |
			// |    |    |                                     |    |
			// |    |    |----|                           |----|    |
			// |    |    | C3 |                           | C4 |    |
			// |    |----|-------------------------------------|----|
			// |    |    |                 B1                  |    |
			// |----------------------------------------------------|
			// |                  B2 (Full Width)                   |
			// |----------------------------------------------------|
			//
			// What we do to find the best sizing, we do the following
			// 1. Determine the minimum size of the chart area.
			// 2. Split the remaining width equally between each vertical axis
			// 3. Split the remaining height equally between each horizontal axis
			// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
			// 5. Adjust the sizes of each axis based on it's minimum reported size.
			// 6. Refit each axis
			// 7. Position each axis in the final location
			// 8. Tell the chart the final location of the chart area
			// 9. Tell any axes that overlay the chart area the positions of the chart area

			// Step 1
			var chartWidth = width - leftPadding - rightPadding;
			var chartHeight = height - topPadding - bottomPadding;
			var chartAreaWidth = chartWidth / 2; // min 50%
			var chartAreaHeight = chartHeight / 2; // min 50%

			// Step 2
			var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

			// Step 3
			var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

			// Step 4
			var maxChartAreaWidth = chartWidth;
			var maxChartAreaHeight = chartHeight;
			var minBoxSizes = [];

			function getMinimumBoxSize(box) {
				var minSize;
				var isHorizontal = box.isHorizontal();

				if (isHorizontal) {
					minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
					maxChartAreaHeight -= minSize.height;
				} else {
					minSize = box.update(verticalBoxWidth, chartAreaHeight);
					maxChartAreaWidth -= minSize.width;
				}

				minBoxSizes.push({
					horizontal: isHorizontal,
					minSize: minSize,
					box: box,
				});
			}

			helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

			// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
			var maxHorizontalLeftPadding = 0;
			var maxHorizontalRightPadding = 0;
			var maxVerticalTopPadding = 0;
			var maxVerticalBottomPadding = 0;

			helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
				if (horizontalBox.getPadding) {
					var boxPadding = horizontalBox.getPadding();
					maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
					maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
				}
			});

			helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
				if (verticalBox.getPadding) {
					var boxPadding = verticalBox.getPadding();
					maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
					maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
				}
			});

			// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
			// be if the axes are drawn at their minimum sizes.
			// Steps 5 & 6
			var totalLeftBoxesWidth = leftPadding;
			var totalRightBoxesWidth = rightPadding;
			var totalTopBoxesHeight = topPadding;
			var totalBottomBoxesHeight = bottomPadding;

			// Function to fit a box
			function fitBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
					return minBox.box === box;
				});

				if (minBoxSize) {
					if (box.isHorizontal()) {
						var scaleMargin = {
							left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
							right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
							top: 0,
							bottom: 0
						};

						// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
						// on the margin. Sometimes they need to increase in size slightly
						box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
					} else {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight);
					}
				}
			}

			// Update, and calculate the left and right margins for the horizontal boxes
			helpers.each(leftBoxes.concat(rightBoxes), fitBox);

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			// Set the Left and Right margins for the horizontal boxes
			helpers.each(topBoxes.concat(bottomBoxes), fitBox);

			// Figure out how much margin is on the top and bottom of the vertical boxes
			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});

			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			function finalFitVerticalBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
					return minSize.box === box;
				});

				var scaleMargin = {
					left: 0,
					right: 0,
					top: totalTopBoxesHeight,
					bottom: totalBottomBoxesHeight
				};

				if (minBoxSize) {
					box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
				}
			}

			// Let the left layout know the final margin
			helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

			// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
			totalLeftBoxesWidth = leftPadding;
			totalRightBoxesWidth = rightPadding;
			totalTopBoxesHeight = topPadding;
			totalBottomBoxesHeight = bottomPadding;

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});
			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// We may be adding some padding to account for rotated x axis labels
			var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
			totalLeftBoxesWidth += leftPaddingAddition;
			totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);

			var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
			totalTopBoxesHeight += topPaddingAddition;
			totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);

			// Figure out if our chart area changed. This would occur if the dataset layout label rotation
			// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
			// without calling `fit` again
			var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
			var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

			if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
				helpers.each(leftBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(rightBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(topBoxes, function(box) {
					if (!box.options.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				helpers.each(bottomBoxes, function(box) {
					if (!box.options.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				maxChartAreaHeight = newMaxChartAreaHeight;
				maxChartAreaWidth = newMaxChartAreaWidth;
			}

			// Step 7 - Position the boxes
			var left = leftPadding + leftPaddingAddition;
			var top = topPadding + topPaddingAddition;

			function placeBox(box) {
				if (box.isHorizontal()) {
					box.left = box.options.fullWidth ? leftPadding : totalLeftBoxesWidth;
					box.right = box.options.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
					box.top = top;
					box.bottom = top + box.height;

					// Move to next point
					top = box.bottom;

				} else {

					box.left = left;
					box.right = left + box.width;
					box.top = totalTopBoxesHeight;
					box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

					// Move to next point
					left = box.right;
				}
			}

			helpers.each(leftBoxes.concat(topBoxes), placeBox);

			// Account for chart width and height
			left += maxChartAreaWidth;
			top += maxChartAreaHeight;

			helpers.each(rightBoxes, placeBox);
			helpers.each(bottomBoxes, placeBox);

			// Step 8
			chartInstance.chartArea = {
				left: totalLeftBoxesWidth,
				top: totalTopBoxesHeight,
				right: totalLeftBoxesWidth + maxChartAreaWidth,
				bottom: totalTopBoxesHeight + maxChartAreaHeight
			};

			// Step 9
			helpers.each(chartAreaBoxes, function(box) {
				box.left = chartInstance.chartArea.left;
				box.top = chartInstance.chartArea.top;
				box.right = chartInstance.chartArea.right;
				box.bottom = chartInstance.chartArea.bottom;

				box.update(maxChartAreaWidth, maxChartAreaHeight);
			});
		}
	};
};

},{}],30:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var noop = helpers.noop;

	Chart.defaults.global.legend = {

		display: true,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
		reverse: false,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var data = chart.data;
				return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
						hidden: !chart.isDatasetVisible(i),
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,
						pointStyle: dataset.pointStyle,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	};

	/**
	 * Helper function to get the box width based on the usePointStyle option
	 * @param labelopts {Object} the label options on the legend
	 * @param fontSize {Number} the label font size
	 * @return {Number} width of the color box area
	 */
	function getBoxWidth(labelOpts, fontSize) {
		return labelOpts.usePointStyle ?
			fontSize * Math.SQRT2 :
			labelOpts.boxWidth;
	}

	Chart.Legend = Chart.Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];

			// Are we in doughnut mode which has a different data type
			this.doughnutMode = false;
		},

		// These methods are ordered by lifecycle. Utilities then follow.
		// Any function defined here is inherited by all legend types.
		// Any function can be extended by the legend type

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;
		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: function() {
			var me = this;
			var labelOpts = me.options.labels;
			var legendItems = labelOpts.generateLabels.call(me, me.chart);

			if (labelOpts.filter) {
				legendItems = legendItems.filter(function(item) {
					return labelOpts.filter(item, me.chart.data);
				});
			}

			if (me.options.reverse) {
				legendItems.reverse();
			}

			me.legendItems = legendItems;
		},
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var display = opts.display;

			var ctx = me.ctx;

			var globalDefault = Chart.defaults.global,
				itemOrDefault = helpers.getValueOrDefault,
				fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
				fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
				fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
				labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Reset hit boxes
			var hitboxes = me.legendHitBoxes = [];

			var minSize = me.minSize;
			var isHorizontal = me.isHorizontal();

			if (isHorizontal) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? 10 : 0;
			} else {
				minSize.width = display ? 10 : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (display) {
				ctx.font = labelFont;

				if (isHorizontal) {
					// Labels

					// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
					var lineWidths = me.lineWidths = [0];
					var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
							totalHeight += fontSize + (labelOpts.padding);
							lineWidths[lineWidths.length] = me.left;
						}

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: width,
							height: fontSize
						};

						lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
					});

					minSize.height += totalHeight;

				} else {
					var vPadding = labelOpts.padding;
					var columnWidths = me.columnWidths = [];
					var totalWidth = labelOpts.padding;
					var currentColWidth = 0;
					var currentColHeight = 0;
					var itemHeight = fontSize + vPadding;

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						// If too tall, go to new column
						if (currentColHeight + itemHeight > minSize.height) {
							totalWidth += currentColWidth + labelOpts.padding;
							columnWidths.push(currentColWidth); // previous column width

							currentColWidth = 0;
							currentColHeight = 0;
						}

						// Get max width
						currentColWidth = Math.max(currentColWidth, itemWidth);
						currentColHeight += itemHeight;

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: itemWidth,
							height: fontSize
						};
					});

					totalWidth += currentColWidth;
					columnWidths.push(currentColWidth);
					minSize.width += totalWidth;
				}
			}

			me.width = minSize.width;
			me.height = minSize.height;
		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},

		// Actually draw the legend on the canvas
		draw: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var globalDefault = Chart.defaults.global,
				lineDefault = globalDefault.elements.line,
				legendWidth = me.width,
				lineWidths = me.lineWidths;

			if (opts.display) {
				var ctx = me.ctx,
					cursor,
					itemOrDefault = helpers.getValueOrDefault,
					fontColor = itemOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor),
					fontSize = itemOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize),
					fontStyle = itemOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle),
					fontFamily = itemOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily),
					labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

				// Canvas setup
				ctx.textAlign = 'left';
				ctx.textBaseline = 'top';
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = fontColor; // for strikethrough effect
				ctx.fillStyle = fontColor; // render in correct colour
				ctx.font = labelFont;

				var boxWidth = getBoxWidth(labelOpts, fontSize),
					hitboxes = me.legendHitBoxes;

				// current position
				var drawLegendBox = function(x, y, legendItem) {
					if (isNaN(boxWidth) || boxWidth <= 0) {
						return;
					}

					// Set the ctx for the box
					ctx.save();

					ctx.fillStyle = itemOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
					ctx.lineCap = itemOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
					ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
					ctx.lineJoin = itemOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
					ctx.lineWidth = itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
					ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
					var isLineWidthZero = (itemOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

					if (ctx.setLineDash) {
						// IE 9 and 10 do not support line dash
						ctx.setLineDash(itemOrDefault(legendItem.lineDash, lineDefault.borderDash));
					}

					if (opts.labels && opts.labels.usePointStyle) {
						// Recalculate x and y for drawPoint() because its expecting
						// x and y to be center of figure (instead of top left)
						var radius = fontSize * Math.SQRT2 / 2;
						var offSet = radius / Math.SQRT2;
						var centerX = x + offSet;
						var centerY = y + offSet;

						// Draw pointStyle as legend symbol
						Chart.canvasHelpers.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
					} else {
						// Draw box as legend symbol
						if (!isLineWidthZero) {
							ctx.strokeRect(x, y, boxWidth, fontSize);
						}
						ctx.fillRect(x, y, boxWidth, fontSize);
					}

					ctx.restore();
				};
				var fillText = function(x, y, legendItem, textWidth) {
					ctx.fillText(legendItem.text, boxWidth + (fontSize / 2) + x, y);

					if (legendItem.hidden) {
						// Strikethrough the text if hidden
						ctx.beginPath();
						ctx.lineWidth = 2;
						ctx.moveTo(boxWidth + (fontSize / 2) + x, y + (fontSize / 2));
						ctx.lineTo(boxWidth + (fontSize / 2) + x + textWidth, y + (fontSize / 2));
						ctx.stroke();
					}
				};

				// Horizontal
				var isHorizontal = me.isHorizontal();
				if (isHorizontal) {
					cursor = {
						x: me.left + ((legendWidth - lineWidths[0]) / 2),
						y: me.top + labelOpts.padding,
						line: 0
					};
				} else {
					cursor = {
						x: me.left + labelOpts.padding,
						y: me.top + labelOpts.padding,
						line: 0
					};
				}

				var itemHeight = fontSize + labelOpts.padding;
				helpers.each(me.legendItems, function(legendItem, i) {
					var textWidth = ctx.measureText(legendItem.text).width,
						width = boxWidth + (fontSize / 2) + textWidth,
						x = cursor.x,
						y = cursor.y;

					if (isHorizontal) {
						if (x + width >= legendWidth) {
							y = cursor.y += itemHeight;
							cursor.line++;
							x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
						}
					} else if (y + itemHeight > me.bottom) {
						x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
						y = cursor.y = me.top + labelOpts.padding;
						cursor.line++;
					}

					drawLegendBox(x, y, legendItem);

					hitboxes[i].left = x;
					hitboxes[i].top = y;

					// Fill the actual label
					fillText(x, y, legendItem, textWidth);

					if (isHorizontal) {
						cursor.x += width + (labelOpts.padding);
					} else {
						cursor.y += itemHeight;
					}

				});
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @return {Boolean} true if a change occured
		 */
		handleEvent: function(e) {
			var me = this;
			var opts = me.options;
			var type = e.type === 'mouseup' ? 'click' : e.type;
			var changed = false;

			if (type === 'mousemove') {
				if (!opts.onHover) {
					return;
				}
			} else if (type === 'click') {
				if (!opts.onClick) {
					return;
				}
			} else {
				return;
			}

			// Chart event already has relative position in it
			var x = e.x,
				y = e.y;

			if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
				// See if we are touching one of the dataset boxes
				var lh = me.legendHitBoxes;
				for (var i = 0; i < lh.length; ++i) {
					var hitBox = lh[i];

					if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
						// Touching an element
						if (type === 'click') {
							// use e.native for backwards compatibility
							opts.onClick.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						} else if (type === 'mousemove') {
							// use e.native for backwards compatibility
							opts.onHover.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						}
					}
				}
			}

			return changed;
		}
	});

	function createNewLegendAndAttach(chartInstance, legendOpts) {
		var legend = new Chart.Legend({
			ctx: chartInstance.chart.ctx,
			options: legendOpts,
			chart: chartInstance
		});
		chartInstance.legend = legend;
		Chart.layoutService.addBox(chartInstance, legend);
	}

	// Register the legend plugin
	Chart.plugins.register({
		beforeInit: function(chartInstance) {
			var legendOpts = chartInstance.options.legend;

			if (legendOpts) {
				createNewLegendAndAttach(chartInstance, legendOpts);
			}
		},
		beforeUpdate: function(chartInstance) {
			var legendOpts = chartInstance.options.legend;

			if (legendOpts) {
				legendOpts = helpers.configMerge(Chart.defaults.global.legend, legendOpts);

				if (chartInstance.legend) {
					chartInstance.legend.options = legendOpts;
				} else {
					createNewLegendAndAttach(chartInstance, legendOpts);
				}
			} else {
				Chart.layoutService.removeBox(chartInstance, chartInstance.legend);
				delete chartInstance.legend;
			}
		},
		afterEvent: function(chartInstance, e) {
			var legend = chartInstance.legend;
			if (legend) {
				legend.handleEvent(e);
			}
		}
	});
};

},{}],31:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.plugins = {};

	/**
	 * The plugin service singleton
	 * @namespace Chart.plugins
	 * @since 2.1.0
	 */
	Chart.plugins = {
		/**
		 * Globally registered plugins.
		 * @private
		 */
		_plugins: [],

		/**
		 * This identifier is used to invalidate the descriptors cache attached to each chart
		 * when a global plugin is registered or unregistered. In this case, the cache ID is
		 * incremented and descriptors are regenerated during following API calls.
		 * @private
		 */
		_cacheId: 0,

		/**
		 * Registers the given plugin(s) if not already registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		register: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				if (p.indexOf(plugin) === -1) {
					p.push(plugin);
				}
			});

			this._cacheId++;
		},

		/**
		 * Unregisters the given plugin(s) only if registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		unregister: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				var idx = p.indexOf(plugin);
				if (idx !== -1) {
					p.splice(idx, 1);
				}
			});

			this._cacheId++;
		},

		/**
		 * Remove all registered plugins.
		 * @since 2.1.5
		 */
		clear: function() {
			this._plugins = [];
			this._cacheId++;
		},

		/**
		 * Returns the number of registered plugins?
		 * @returns {Number}
		 * @since 2.1.5
		 */
		count: function() {
			return this._plugins.length;
		},

		/**
		 * Returns all registered plugin instances.
		 * @returns {Array} array of plugin objects.
		 * @since 2.1.5
		 */
		getAll: function() {
			return this._plugins;
		},

		/**
		 * Calls enabled plugins for `chart` on the specified hook and with the given args.
		 * This method immediately returns as soon as a plugin explicitly returns false. The
		 * returned value can be used, for instance, to interrupt the current action.
		 * @param {Object} chart - The chart instance for which plugins should be called.
		 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
		 * @param {Array} [args] - Extra arguments to apply to the hook call.
		 * @returns {Boolean} false if any of the plugins return false, else returns true.
		 */
		notify: function(chart, hook, args) {
			var descriptors = this.descriptors(chart);
			var ilen = descriptors.length;
			var i, descriptor, plugin, params, method;

			for (i=0; i<ilen; ++i) {
				descriptor = descriptors[i];
				plugin = descriptor.plugin;
				method = plugin[hook];
				if (typeof method === 'function') {
					params = [chart].concat(args || []);
					params.push(descriptor.options);
					if (method.apply(plugin, params) === false) {
						return false;
					}
				}
			}

			return true;
		},

		/**
		 * Returns descriptors of enabled plugins for the given chart.
		 * @returns {Array} [{ plugin, options }]
		 * @private
		 */
		descriptors: function(chart) {
			var cache = chart._plugins || (chart._plugins = {});
			if (cache.id === this._cacheId) {
				return cache.descriptors;
			}

			var plugins = [];
			var descriptors = [];
			var config = (chart && chart.config) || {};
			var defaults = Chart.defaults.global.plugins;
			var options = (config.options && config.options.plugins) || {};

			this._plugins.concat(config.plugins || []).forEach(function(plugin) {
				var idx = plugins.indexOf(plugin);
				if (idx !== -1) {
					return;
				}

				var id = plugin.id;
				var opts = options[id];
				if (opts === false) {
					return;
				}

				if (opts === true) {
					opts = helpers.clone(defaults[id]);
				}

				plugins.push(plugin);
				descriptors.push({
					plugin: plugin,
					options: opts || {}
				});
			});

			cache.descriptors = descriptors;
			cache.id = this._cacheId;
			return descriptors;
		}
	};

	/**
	 * Plugin extension hooks.
	 * @interface IPlugin
	 * @since 2.1.0
	 */
	/**
	 * @method IPlugin#beforeInit
	 * @desc Called before initializing `chart`.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterInit
	 * @desc Called after `chart` has been initialized and before the first update.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeUpdate
	 * @desc Called before updating `chart`. If any plugin returns `false`, the update
	 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart update.
	 */
	/**
	 * @method IPlugin#afterUpdate
	 * @desc Called after `chart` has been updated and before rendering. Note that this
	 * hook will not be called if the chart update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsUpdate
 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
	 * the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} false to cancel the datasets update.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#afterDatasetsUpdate
	 * @desc Called after the `chart` datasets have been updated. Note that this hook
	 * will not be called if the datasets update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#beforeLayout
	 * @desc Called before laying out `chart`. If any plugin returns `false`,
	 * the layout update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart layout.
	 */
	/**
	 * @method IPlugin#afterLayout
	 * @desc Called after the `chart` has been layed out. Note that this hook will not
	 * be called if the layout update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeRender
	 * @desc Called before rendering `chart`. If any plugin returns `false`,
	 * the rendering is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart rendering.
	 */
	/**
	 * @method IPlugin#afterRender
	 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
	 * that this hook will not be called if the rendering has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDraw
	 * @desc Called before drawing `chart` at every animation frame specified by the given
	 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
	 * another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart drawing.
	 */
	/**
	 * @method IPlugin#afterDraw
	 * @desc Called after the `chart` has been drawn for the specific easing value. Note
	 * that this hook will not be called if the drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsDraw
 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
	 * the datasets drawing is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetsDraw
	 * @desc Called after the `chart` datasets have been drawn. Note that this hook
	 * will not be called if the datasets drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeEvent
 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
	 * the event will be discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterEvent
	 * @desc Called after the `event` has been consumed. Note that this hook
	 * will not be called if the `event` has been previously discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#resize
	 * @desc Called after the chart as been resized.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#destroy
	 * @desc Called after the chart as been destroyed.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */

	/**
	 * Provided for backward compatibility, use Chart.plugins instead
	 * @namespace Chart.pluginService
	 * @deprecated since version 2.1.5
	 * @todo remove at version 3
	 * @private
	 */
	Chart.pluginService = Chart.plugins;

	/**
	 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
	 * effect, instead simply create/register plugins via plain JavaScript objects.
	 * @interface Chart.PluginBase
	 * @deprecated since version 2.5.0
	 * @todo remove at version 3
	 * @private
	 */
	Chart.PluginBase = helpers.inherits({});
};

},{}],32:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.scale = {
		display: true,
		position: 'left',

		// grid line settings
		gridLines: {
			display: true,
			color: 'rgba(0, 0, 0, 0.1)',
			lineWidth: 1,
			drawBorder: true,
			drawOnChartArea: true,
			drawTicks: true,
			tickMarkLength: 10,
			zeroLineWidth: 1,
			zeroLineColor: 'rgba(0,0,0,0.25)',
			offsetGridLines: false,
			borderDash: [],
			borderDashOffset: 0.0
		},

		// scale label
		scaleLabel: {
			// actual label
			labelString: '',

			// display property
			display: false
		},

		// label settings
		ticks: {
			beginAtZero: false,
			minRotation: 0,
			maxRotation: 50,
			mirror: false,
			padding: 0,
			reverse: false,
			display: true,
			autoSkip: true,
			autoSkipPadding: 0,
			labelOffset: 0,
			// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
			callback: Chart.Ticks.formatters.values
		}
	};

	function computeTextSize(context, tick, font) {
		return helpers.isArray(tick) ?
			helpers.longestText(context, font, tick) :
			context.measureText(tick).width;
	}

	function parseFontOptions(options) {
		var getValueOrDefault = helpers.getValueOrDefault;
		var globalDefaults = Chart.defaults.global;
		var size = getValueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var style = getValueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
		var family = getValueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);

		return {
			size: size,
			style: style,
			family: family,
			font: helpers.fontString(size, style, family)
		};
	}

	Chart.Scale = Chart.Element.extend({
		/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */
		getPadding: function() {
			var me = this;
			return {
				left: me.paddingLeft || 0,
				top: me.paddingTop || 0,
				right: me.paddingRight || 0,
				bottom: me.paddingBottom || 0
			};
		},

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all scale types.
		// Any function can be extended by the scale type

		beforeUpdate: function() {
			helpers.callCallback(this.options.beforeUpdate, [this]);
		},
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = helpers.extend({
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, margins);
			me.longestTextCache = me.longestTextCache || {};

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();

			// Data min/max
			me.beforeDataLimits();
			me.determineDataLimits();
			me.afterDataLimits();

			// Ticks
			me.beforeBuildTicks();
			me.buildTicks();
			me.afterBuildTicks();

			me.beforeTickToLabelConversion();
			me.convertTicksToLabels();
			me.afterTickToLabelConversion();

			// Tick Rotation
			me.beforeCalculateTickRotation();
			me.calculateTickRotation();
			me.afterCalculateTickRotation();
			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: function() {
			helpers.callCallback(this.options.afterUpdate, [this]);
		},

		//

		beforeSetDimensions: function() {
			helpers.callCallback(this.options.beforeSetDimensions, [this]);
		},
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;
		},
		afterSetDimensions: function() {
			helpers.callCallback(this.options.afterSetDimensions, [this]);
		},

		// Data limits
		beforeDataLimits: function() {
			helpers.callCallback(this.options.beforeDataLimits, [this]);
		},
		determineDataLimits: helpers.noop,
		afterDataLimits: function() {
			helpers.callCallback(this.options.afterDataLimits, [this]);
		},

		//
		beforeBuildTicks: function() {
			helpers.callCallback(this.options.beforeBuildTicks, [this]);
		},
		buildTicks: helpers.noop,
		afterBuildTicks: function() {
			helpers.callCallback(this.options.afterBuildTicks, [this]);
		},

		beforeTickToLabelConversion: function() {
			helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
		},
		convertTicksToLabels: function() {
			var me = this;
			// Convert ticks to strings
			var tickOpts = me.options.ticks;
			me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback);
		},
		afterTickToLabelConversion: function() {
			helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
		},

		//

		beforeCalculateTickRotation: function() {
			helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
		},
		calculateTickRotation: function() {
			var me = this;
			var context = me.ctx;
			var tickOpts = me.options.ticks;

			// Get the width of each grid by calculating the difference
			// between x offsets between 0 and 1.
			var tickFont = parseFontOptions(tickOpts);
			context.font = tickFont.font;

			var labelRotation = tickOpts.minRotation || 0;

			if (me.options.display && me.isHorizontal()) {
				var originalLabelWidth = helpers.longestText(context, tickFont.font, me.ticks, me.longestTextCache);
				var labelWidth = originalLabelWidth;
				var cosRotation;
				var sinRotation;

				// Allow 3 pixels x2 padding either side for label readability
				var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

				// Max label rotation can be set or default to 90 - also act as a loop counter
				while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
					var angleRadians = helpers.toRadians(labelRotation);
					cosRotation = Math.cos(angleRadians);
					sinRotation = Math.sin(angleRadians);

					if (sinRotation * originalLabelWidth > me.maxHeight) {
						// go back one step
						labelRotation--;
						break;
					}

					labelRotation++;
					labelWidth = cosRotation * originalLabelWidth;
				}
			}

			me.labelRotation = labelRotation;
		},
		afterCalculateTickRotation: function() {
			helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
		},

		//

		beforeFit: function() {
			helpers.callCallback(this.options.beforeFit, [this]);
		},
		fit: function() {
			var me = this;
			// Reset
			var minSize = me.minSize = {
				width: 0,
				height: 0
			};

			var opts = me.options;
			var tickOpts = opts.ticks;
			var scaleLabelOpts = opts.scaleLabel;
			var gridLineOpts = opts.gridLines;
			var display = opts.display;
			var isHorizontal = me.isHorizontal();

			var tickFont = parseFontOptions(tickOpts);
			var scaleLabelFontSize = parseFontOptions(scaleLabelOpts).size * 1.5;
			var tickMarkLength = opts.gridLines.tickMarkLength;

			// Width
			if (isHorizontal) {
				// subtract the margins to line up with the chartArea if we are a full width scale
				minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
			} else {
				minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			}

			// height
			if (isHorizontal) {
				minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			} else {
				minSize.height = me.maxHeight; // fill all the height
			}

			// Are we showing a title for the scale?
			if (scaleLabelOpts.display && display) {
				if (isHorizontal) {
					minSize.height += scaleLabelFontSize;
				} else {
					minSize.width += scaleLabelFontSize;
				}
			}

			// Don't bother fitting the ticks if we are not showing them
			if (tickOpts.display && display) {
				var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, me.ticks, me.longestTextCache);
				var tallestLabelHeightInLines = helpers.numberOfLabelLines(me.ticks);
				var lineSpace = tickFont.size * 0.5;

				if (isHorizontal) {
					// A horizontal axis is more constrained by the height.
					me.longestLabelWidth = largestTextWidth;

					var angleRadians = helpers.toRadians(me.labelRotation);
					var cosRotation = Math.cos(angleRadians);
					var sinRotation = Math.sin(angleRadians);

					// TODO - improve this calculation
					var labelHeight = (sinRotation * largestTextWidth)
						+ (tickFont.size * tallestLabelHeightInLines)
						+ (lineSpace * tallestLabelHeightInLines);

					minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight);
					me.ctx.font = tickFont.font;

					var firstTick = me.ticks[0];
					var firstLabelWidth = computeTextSize(me.ctx, firstTick, tickFont.font);

					var lastTick = me.ticks[me.ticks.length - 1];
					var lastLabelWidth = computeTextSize(me.ctx, lastTick, tickFont.font);

					// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
					// by the font height
					if (me.labelRotation !== 0) {
						me.paddingLeft = opts.position === 'bottom'? (cosRotation * firstLabelWidth) + 3: (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
						me.paddingRight = opts.position === 'bottom'? (cosRotation * lineSpace) + 3: (cosRotation * lastLabelWidth) + 3;
					} else {
						me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
						me.paddingRight = lastLabelWidth / 2 + 3;
					}
				} else {
					// A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
					// Account for padding

					if (tickOpts.mirror) {
						largestTextWidth = 0;
					} else {
						largestTextWidth += me.options.ticks.padding;
					}
					minSize.width += largestTextWidth;
					me.paddingTop = tickFont.size / 2;
					me.paddingBottom = tickFont.size / 2;
				}
			}

			me.handleMargins();

			me.width = minSize.width;
			me.height = minSize.height;
		},

		/**
		 * Handle margins and padding interactions
		 * @private
		 */
		handleMargins: function() {
			var me = this;
			if (me.margins) {
				me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
				me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
				me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
				me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
			}
		},

		afterFit: function() {
			helpers.callCallback(this.options.afterFit, [this]);
		},

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},
		isFullWidth: function() {
			return (this.options.fullWidth);
		},

		// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
		getRightValue: function(rawValue) {
			// Null and undefined values first
			if (rawValue === null || typeof(rawValue) === 'undefined') {
				return NaN;
			}
			// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
			if (typeof(rawValue) === 'number' && !isFinite(rawValue)) {
				return NaN;
			}
			// If it is in fact an object, dive in one more level
			if (typeof(rawValue) === 'object') {
				if ((rawValue instanceof Date) || (rawValue.isValid)) {
					return rawValue;
				}
				return this.getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
			}

			// Value is good, return it
			return rawValue;
		},

		// Used to get the value to display in the tooltip for the data at the given index
		// function getLabelForIndex(index, datasetIndex)
		getLabelForIndex: helpers.noop,

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: helpers.noop,

		// Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		getValueForPixel: helpers.noop,

		// Used for tick location, should
		getPixelForTick: function(index, includeOffset) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var tickWidth = innerWidth / Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
				var pixel = (tickWidth * index) + me.paddingLeft;

				if (includeOffset) {
					pixel += tickWidth / 2;
				}

				var finalVal = me.left + Math.round(pixel);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
			return me.top + (index * (innerHeight / (me.ticks.length - 1)));
		},

		// Utility for getting the pixel location of a percentage of scale
		getPixelForDecimal: function(decimal /* , includeOffset*/) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var valueOffset = (innerWidth * decimal) + me.paddingLeft;

				var finalVal = me.left + Math.round(valueOffset);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			return me.top + (decimal * me.height);
		},

		getBasePixel: function() {
			return this.getPixelForValue(this.getBaseValue());
		},

		getBaseValue: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.beginAtZero ? 0:
				min < 0 && max < 0? max :
				min > 0 && max > 0? min :
				0;
		},

		// Actually draw the scale on the canvas
		// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
		draw: function(chartArea) {
			var me = this;
			var options = me.options;
			if (!options.display) {
				return;
			}

			var context = me.ctx;
			var globalDefaults = Chart.defaults.global;
			var optionTicks = options.ticks;
			var gridLines = options.gridLines;
			var scaleLabel = options.scaleLabel;

			var isRotated = me.labelRotation !== 0;
			var skipRatio;
			var useAutoskipper = optionTicks.autoSkip;
			var isHorizontal = me.isHorizontal();

			// figure out the maximum number of gridlines to show
			var maxTicks;
			if (optionTicks.maxTicksLimit) {
				maxTicks = optionTicks.maxTicksLimit;
			}

			var tickFontColor = helpers.getValueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
			var tickFont = parseFontOptions(optionTicks);

			var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;
			var borderDash = helpers.getValueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
			var borderDashOffset = helpers.getValueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);

			var scaleLabelFontColor = helpers.getValueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
			var scaleLabelFont = parseFontOptions(scaleLabel);

			var labelRotationRadians = helpers.toRadians(me.labelRotation);
			var cosRotation = Math.cos(labelRotationRadians);
			var longestRotatedLabel = me.longestLabelWidth * cosRotation;

			// Make sure we draw text in the correct color and font
			context.fillStyle = tickFontColor;

			var itemsToDraw = [];

			if (isHorizontal) {
				skipRatio = false;

				// Only calculate the skip ratio with the half width of longestRotateLabel if we got an actual rotation
				// See #2584
				if (isRotated) {
					longestRotatedLabel /= 2;
				}

				if ((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length > (me.width - (me.paddingLeft + me.paddingRight))) {
					skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * me.ticks.length) / (me.width - (me.paddingLeft + me.paddingRight)));
				}

				// if they defined a max number of optionTicks,
				// increase skipRatio until that number is met
				if (maxTicks && me.ticks.length > maxTicks) {
					while (!skipRatio || me.ticks.length / (skipRatio || 1) > maxTicks) {
						if (!skipRatio) {
							skipRatio = 1;
						}
						skipRatio += 1;
					}
				}

				if (!useAutoskipper) {
					skipRatio = false;
				}
			}


			var xTickStart = options.position === 'right' ? me.left : me.right - tl;
			var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
			var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
			var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;

			helpers.each(me.ticks, function(label, index) {
				// If the callback returned a null or undefined value, do not draw this line
				if (label === undefined || label === null) {
					return;
				}

				var isLastTick = me.ticks.length === index + 1;

				// Since we always show the last tick,we need may need to hide the last shown one before
				var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio >= me.ticks.length);
				if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
					return;
				}

				var lineWidth, lineColor;
				if (index === (typeof me.zeroLineIndex !== 'undefined' ? me.zeroLineIndex : 0)) {
					// Draw the first index specially
					lineWidth = gridLines.zeroLineWidth;
					lineColor = gridLines.zeroLineColor;
				} else {
					lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, index);
					lineColor = helpers.getValueAtIndexOrDefault(gridLines.color, index);
				}

				// Common properties
				var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
				var textAlign = 'middle';
				var textBaseline = 'middle';

				if (isHorizontal) {

					if (options.position === 'bottom') {
						// bottom
						textBaseline = !isRotated? 'top':'middle';
						textAlign = !isRotated? 'center': 'right';
						labelY = me.top + tl;
					} else {
						// top
						textBaseline = !isRotated? 'bottom':'middle';
						textAlign = !isRotated? 'center': 'left';
						labelY = me.bottom - tl;
					}

					var xLineValue = me.getPixelForTick(index) + helpers.aliasPixel(lineWidth); // xvalues for grid lines
					labelX = me.getPixelForTick(index, gridLines.offsetGridLines) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)

					tx1 = tx2 = x1 = x2 = xLineValue;
					ty1 = yTickStart;
					ty2 = yTickEnd;
					y1 = chartArea.top;
					y2 = chartArea.bottom;
				} else {
					var isLeft = options.position === 'left';
					var tickPadding = optionTicks.padding;
					var labelXOffset;

					if (optionTicks.mirror) {
						textAlign = isLeft ? 'left' : 'right';
						labelXOffset = tickPadding;
					} else {
						textAlign = isLeft ? 'right' : 'left';
						labelXOffset = tl + tickPadding;
					}

					labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;

					var yLineValue = me.getPixelForTick(index); // xvalues for grid lines
					yLineValue += helpers.aliasPixel(lineWidth);
					labelY = me.getPixelForTick(index, gridLines.offsetGridLines);

					tx1 = xTickStart;
					tx2 = xTickEnd;
					x1 = chartArea.left;
					x2 = chartArea.right;
					ty1 = ty2 = y1 = y2 = yLineValue;
				}

				itemsToDraw.push({
					tx1: tx1,
					ty1: ty1,
					tx2: tx2,
					ty2: ty2,
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2,
					labelX: labelX,
					labelY: labelY,
					glWidth: lineWidth,
					glColor: lineColor,
					glBorderDash: borderDash,
					glBorderDashOffset: borderDashOffset,
					rotation: -1 * labelRotationRadians,
					label: label,
					textBaseline: textBaseline,
					textAlign: textAlign
				});
			});

			// Draw all of the tick labels, tick marks, and grid lines at the correct places
			helpers.each(itemsToDraw, function(itemToDraw) {
				if (gridLines.display) {
					context.save();
					context.lineWidth = itemToDraw.glWidth;
					context.strokeStyle = itemToDraw.glColor;
					if (context.setLineDash) {
						context.setLineDash(itemToDraw.glBorderDash);
						context.lineDashOffset = itemToDraw.glBorderDashOffset;
					}

					context.beginPath();

					if (gridLines.drawTicks) {
						context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
						context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
					}

					if (gridLines.drawOnChartArea) {
						context.moveTo(itemToDraw.x1, itemToDraw.y1);
						context.lineTo(itemToDraw.x2, itemToDraw.y2);
					}

					context.stroke();
					context.restore();
				}

				if (optionTicks.display) {
					context.save();
					context.translate(itemToDraw.labelX, itemToDraw.labelY);
					context.rotate(itemToDraw.rotation);
					context.font = tickFont.font;
					context.textBaseline = itemToDraw.textBaseline;
					context.textAlign = itemToDraw.textAlign;

					var label = itemToDraw.label;
					if (helpers.isArray(label)) {
						for (var i = 0, y = 0; i < label.length; ++i) {
							// We just make sure the multiline element is a string here..
							context.fillText('' + label[i], 0, y);
							// apply same lineSpacing as calculated @ L#320
							y += (tickFont.size * 1.5);
						}
					} else {
						context.fillText(label, 0, 0);
					}
					context.restore();
				}
			});

			if (scaleLabel.display) {
				// Draw the scale label
				var scaleLabelX;
				var scaleLabelY;
				var rotation = 0;

				if (isHorizontal) {
					scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
					scaleLabelY = options.position === 'bottom' ? me.bottom - (scaleLabelFont.size / 2) : me.top + (scaleLabelFont.size / 2);
				} else {
					var isLeft = options.position === 'left';
					scaleLabelX = isLeft ? me.left + (scaleLabelFont.size / 2) : me.right - (scaleLabelFont.size / 2);
					scaleLabelY = me.top + ((me.bottom - me.top) / 2);
					rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
				}

				context.save();
				context.translate(scaleLabelX, scaleLabelY);
				context.rotate(rotation);
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = scaleLabelFontColor; // render in correct colour
				context.font = scaleLabelFont.font;
				context.fillText(scaleLabel.labelString, 0, 0);
				context.restore();
			}

			if (gridLines.drawBorder) {
				// Draw the line at the edge of the axis
				context.lineWidth = helpers.getValueAtIndexOrDefault(gridLines.lineWidth, 0);
				context.strokeStyle = helpers.getValueAtIndexOrDefault(gridLines.color, 0);
				var x1 = me.left,
					x2 = me.right,
					y1 = me.top,
					y2 = me.bottom;

				var aliasPixel = helpers.aliasPixel(context.lineWidth);
				if (isHorizontal) {
					y1 = y2 = options.position === 'top' ? me.bottom : me.top;
					y1 += aliasPixel;
					y2 += aliasPixel;
				} else {
					x1 = x2 = options.position === 'left' ? me.right : me.left;
					x1 += aliasPixel;
					x2 += aliasPixel;
				}

				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.stroke();
			}
		}
	});
};

},{}],33:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.scaleService = {
		// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
		// use the new chart options to grab the correct scale
		constructors: {},
		// Use a registration function so that we can move to an ES6 map when we no longer need to support
		// old browsers

		// Scale config defaults
		defaults: {},
		registerScaleType: function(type, scaleConstructor, defaults) {
			this.constructors[type] = scaleConstructor;
			this.defaults[type] = helpers.clone(defaults);
		},
		getScaleConstructor: function(type) {
			return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
		},
		getScaleDefaults: function(type) {
			// Return the scale defaults merged with the global settings so that we always use the latest ones
			return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
		},
		updateScaleDefaults: function(type, additions) {
			var defaults = this.defaults;
			if (defaults.hasOwnProperty(type)) {
				defaults[type] = helpers.extend(defaults[type], additions);
			}
		},
		addScalesToLayout: function(chartInstance) {
			// Adds each scale to the chart.boxes array to be sized accordingly
			helpers.each(chartInstance.scales, function(scale) {
				Chart.layoutService.addBox(chartInstance, scale);
			});
		}
	};
};

},{}],34:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	/**
	 * Namespace to hold static tick generation functions
	 * @namespace Chart.Ticks
	 */
	Chart.Ticks = {
		/**
		 * Namespace to hold generators for different types of ticks
		 * @namespace Chart.Ticks.generators
		 */
		generators: {
			/**
			 * Interface for the options provided to the numeric tick generator
			 * @interface INumericTickGenerationOptions
			 */
			/**
			 * The maximum number of ticks to display
			 * @name INumericTickGenerationOptions#maxTicks
			 * @type Number
			 */
			/**
			 * The distance between each tick.
			 * @name INumericTickGenerationOptions#stepSize
			 * @type Number
			 * @optional
			 */
			/**
			 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
			 * @name INumericTickGenerationOptions#min
			 * @type Number
			 * @optional
			 */
			/**
			 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
			 * @name INumericTickGenerationOptions#max
			 * @type Number
			 * @optional
			 */

			/**
			 * Generate a set of linear ticks
			 * @method Chart.Ticks.generators.linear
			 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
			 * @param dataRange {IRange} the range of the data
			 * @returns {Array<Number>} array of tick values
			 */
			linear: function(generationOptions, dataRange) {
				var ticks = [];
				// To get a "nice" value for the tick spacing, we will use the appropriately named
				// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
				// for details.

				var spacing;
				if (generationOptions.stepSize && generationOptions.stepSize > 0) {
					spacing = generationOptions.stepSize;
				} else {
					var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
					spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
				}
				var niceMin = Math.floor(dataRange.min / spacing) * spacing;
				var niceMax = Math.ceil(dataRange.max / spacing) * spacing;

				// If min, max and stepSize is set and they make an evenly spaced scale use it.
				if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
					// If very close to our whole number, use it.
					if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
						niceMin = generationOptions.min;
						niceMax = generationOptions.max;
					}
				}

				var numSpaces = (niceMax - niceMin) / spacing;
				// If very close to our rounded value, use it.
				if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
					numSpaces = Math.round(numSpaces);
				} else {
					numSpaces = Math.ceil(numSpaces);
				}

				// Put the values into the ticks array
				ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
				for (var j = 1; j < numSpaces; ++j) {
					ticks.push(niceMin + (j * spacing));
				}
				ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);

				return ticks;
			},

			/**
			 * Generate a set of logarithmic ticks
			 * @method Chart.Ticks.generators.logarithmic
			 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
			 * @param dataRange {IRange} the range of the data
			 * @returns {Array<Number>} array of tick values
			 */
			logarithmic: function(generationOptions, dataRange) {
				var ticks = [];
				var getValueOrDefault = helpers.getValueOrDefault;

				// Figure out what the max number of ticks we can support it is based on the size of
				// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
				// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
				// the graph
				var tickVal = getValueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));

				var endExp = Math.floor(helpers.log10(dataRange.max));
				var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
				var exp;
				var significand;

				if (tickVal === 0) {
					exp = Math.floor(helpers.log10(dataRange.minNotZero));
					significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

					ticks.push(tickVal);
					tickVal = significand * Math.pow(10, exp);
				} else {
					exp = Math.floor(helpers.log10(tickVal));
					significand = Math.floor(tickVal / Math.pow(10, exp));
				}

				do {
					ticks.push(tickVal);

					++significand;
					if (significand === 10) {
						significand = 1;
						++exp;
					}

					tickVal = significand * Math.pow(10, exp);
				} while (exp < endExp || (exp === endExp && significand < endSignificand));

				var lastTick = getValueOrDefault(generationOptions.max, tickVal);
				ticks.push(lastTick);

				return ticks;
			}
		},

		/**
		 * Namespace to hold formatters for different types of ticks
		 * @namespace Chart.Ticks.formatters
		 */
		formatters: {
			/**
			 * Formatter for value labels
			 * @method Chart.Ticks.formatters.values
			 * @param value the value to display
			 * @return {String|Array} the label to display
			 */
			values: function(value) {
				return helpers.isArray(value) ? value : '' + value;
			},

			/**
			 * Formatter for linear numeric ticks
			 * @method Chart.Ticks.formatters.linear
			 * @param tickValue {Number} the value to be formatted
			 * @param index {Number} the position of the tickValue parameter in the ticks array
			 * @param ticks {Array<Number>} the list of ticks being converted
			 * @return {String} string representation of the tickValue parameter
			 */
			linear: function(tickValue, index, ticks) {
				// If we have lots of ticks, don't use the ones
				var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

				// If we have a number like 2.5 as the delta, figure out how many decimal places we need
				if (Math.abs(delta) > 1) {
					if (tickValue !== Math.floor(tickValue)) {
						// not an integer
						delta = tickValue - Math.floor(tickValue);
					}
				}

				var logDelta = helpers.log10(Math.abs(delta));
				var tickString = '';

				if (tickValue !== 0) {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				} else {
					tickString = '0'; // never show decimal places for 0
				}

				return tickString;
			},

			logarithmic: function(tickValue, index, ticks) {
				var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

				if (tickValue === 0) {
					return '0';
				} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
					return tickValue.toExponential();
				}
				return '';
			}
		}
	};
};

},{}],35:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	Chart.defaults.global.title = {
		display: false,
		position: 'top',
		fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)

		fontStyle: 'bold',
		padding: 10,

		// actual title
		text: ''
	};

	var noop = helpers.noop;
	Chart.Title = Chart.Element.extend({

		initialize: function(config) {
			var me = this;
			helpers.extend(me, config);

			// Contains hit boxes for each dataset (in dataset order)
			me.legendHitBoxes = [];
		},

		// These methods are ordered by lifecycle. Utilities then follow.

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: noop,
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this,
				valueOrDefault = helpers.getValueOrDefault,
				opts = me.options,
				globalDefaults = Chart.defaults.global,
				display = opts.display,
				fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
				minSize = me.minSize;

			if (me.isHorizontal()) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? fontSize + (opts.padding * 2) : 0;
			} else {
				minSize.width = display ? fontSize + (opts.padding * 2) : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			me.width = minSize.width;
			me.height = minSize.height;

		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			var pos = this.options.position;
			return pos === 'top' || pos === 'bottom';
		},

		// Actually draw the title block on the canvas
		draw: function() {
			var me = this,
				ctx = me.ctx,
				valueOrDefault = helpers.getValueOrDefault,
				opts = me.options,
				globalDefaults = Chart.defaults.global;

			if (opts.display) {
				var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize),
					fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle),
					fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily),
					titleFont = helpers.fontString(fontSize, fontStyle, fontFamily),
					rotation = 0,
					titleX,
					titleY,
					top = me.top,
					left = me.left,
					bottom = me.bottom,
					right = me.right,
					maxWidth;

				ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
				ctx.font = titleFont;

				// Horizontal
				if (me.isHorizontal()) {
					titleX = left + ((right - left) / 2); // midpoint of the width
					titleY = top + ((bottom - top) / 2); // midpoint of the height
					maxWidth = right - left;
				} else {
					titleX = opts.position === 'left' ? left + (fontSize / 2) : right - (fontSize / 2);
					titleY = top + ((bottom - top) / 2);
					maxWidth = bottom - top;
					rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
				}

				ctx.save();
				ctx.translate(titleX, titleY);
				ctx.rotate(rotation);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText(opts.text, 0, 0, maxWidth);
				ctx.restore();
			}
		}
	});

	function createNewTitleBlockAndAttach(chartInstance, titleOpts) {
		var title = new Chart.Title({
			ctx: chartInstance.chart.ctx,
			options: titleOpts,
			chart: chartInstance
		});
		chartInstance.titleBlock = title;
		Chart.layoutService.addBox(chartInstance, title);
	}

	// Register the title plugin
	Chart.plugins.register({
		beforeInit: function(chartInstance) {
			var titleOpts = chartInstance.options.title;

			if (titleOpts) {
				createNewTitleBlockAndAttach(chartInstance, titleOpts);
			}
		},
		beforeUpdate: function(chartInstance) {
			var titleOpts = chartInstance.options.title;

			if (titleOpts) {
				titleOpts = helpers.configMerge(Chart.defaults.global.title, titleOpts);

				if (chartInstance.titleBlock) {
					chartInstance.titleBlock.options = titleOpts;
				} else {
					createNewTitleBlockAndAttach(chartInstance, titleOpts);
				}
			} else {
				Chart.layoutService.removeBox(chartInstance, chartInstance.titleBlock);
				delete chartInstance.titleBlock;
			}
		}
	});
};

},{}],36:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	/**
 	 * Helper method to merge the opacity into a color
 	 */
	function mergeOpacity(colorString, opacity) {
		var color = helpers.color(colorString);
		return color.alpha(opacity * color.alpha()).rgbaString();
	}

	Chart.defaults.global.tooltips = {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers.noop,
			title: function(tooltipItems, data) {
				// Pick first xLabel for now
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];

					if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers.noop,
			label: function(tooltipItem, data) {
				var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
				return datasetLabel + ': ' + tooltipItem.yLabel;
			},
			labelColor: function(tooltipItem, chartInstance) {
				var meta = chartInstance.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			afterLabel: helpers.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers.noop,
			footer: helpers.noop,
			afterFooter: helpers.noop
		}
	};

	// Helper to push or concat based on if the 2nd parameter is an array or not
	function pushOrConcat(base, toPush) {
		if (toPush) {
			if (helpers.isArray(toPush)) {
				// base = base.concat(toPush);
				Array.prototype.push.apply(base, toPush);
			} else {
				base.push(toPush);
			}
		}

		return base;
	}

	// Private helper to create a tooltip item model
	// @param element : the chart element (point, arc, bar) to create the tooltip item for
	// @return : new tooltip item
	function createTooltipItem(element) {
		var xScale = element._xScale;
		var yScale = element._yScale || element._scale; // handle radar || polarArea charts
		var index = element._index,
			datasetIndex = element._datasetIndex;

		return {
			xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
			yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
			index: index,
			datasetIndex: datasetIndex,
			x: element._model.x,
			y: element._model.y
		};
	}

	/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */
	function getBaseModel(tooltipOpts) {
		var globalDefaults = Chart.defaults.global;
		var getValueOrDefault = helpers.getValueOrDefault;

		return {
			// Positioning
			xPadding: tooltipOpts.xPadding,
			yPadding: tooltipOpts.yPadding,
			xAlign: tooltipOpts.xAlign,
			yAlign: tooltipOpts.yAlign,

			// Body
			bodyFontColor: tooltipOpts.bodyFontColor,
			_bodyFontFamily: getValueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
			_bodyFontStyle: getValueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
			_bodyAlign: tooltipOpts.bodyAlign,
			bodyFontSize: getValueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
			bodySpacing: tooltipOpts.bodySpacing,

			// Title
			titleFontColor: tooltipOpts.titleFontColor,
			_titleFontFamily: getValueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
			_titleFontStyle: getValueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
			titleFontSize: getValueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
			_titleAlign: tooltipOpts.titleAlign,
			titleSpacing: tooltipOpts.titleSpacing,
			titleMarginBottom: tooltipOpts.titleMarginBottom,

			// Footer
			footerFontColor: tooltipOpts.footerFontColor,
			_footerFontFamily: getValueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
			_footerFontStyle: getValueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
			footerFontSize: getValueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
			_footerAlign: tooltipOpts.footerAlign,
			footerSpacing: tooltipOpts.footerSpacing,
			footerMarginTop: tooltipOpts.footerMarginTop,

			// Appearance
			caretSize: tooltipOpts.caretSize,
			cornerRadius: tooltipOpts.cornerRadius,
			backgroundColor: tooltipOpts.backgroundColor,
			opacity: 0,
			legendColorBackground: tooltipOpts.multiKeyBackground,
			displayColors: tooltipOpts.displayColors
		};
	}

	/**
	 * Get the size of the tooltip
	 */
	function getTooltipSize(tooltip, model) {
		var ctx = tooltip._chart.ctx;

		var height = model.yPadding * 2; // Tooltip Padding
		var width = 0;

		// Count of all lines in the body
		var body = model.body;
		var combinedBodyLength = body.reduce(function(count, bodyItem) {
			return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
		}, 0);
		combinedBodyLength += model.beforeBody.length + model.afterBody.length;

		var titleLineCount = model.title.length;
		var footerLineCount = model.footer.length;
		var titleFontSize = model.titleFontSize,
			bodyFontSize = model.bodyFontSize,
			footerFontSize = model.footerFontSize;

		height += titleLineCount * titleFontSize; // Title Lines
		height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
		height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
		height += combinedBodyLength * bodyFontSize; // Body Lines
		height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
		height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
		height += footerLineCount * (footerFontSize); // Footer Lines
		height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

		// Title width
		var widthPadding = 0;
		var maxLineWidth = function(line) {
			width = Math.max(width, ctx.measureText(line).width + widthPadding);
		};

		ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
		helpers.each(model.title, maxLineWidth);

		// Body width
		ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
		helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

		// Body lines may include some extra width due to the color box
		widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
		helpers.each(body, function(bodyItem) {
			helpers.each(bodyItem.before, maxLineWidth);
			helpers.each(bodyItem.lines, maxLineWidth);
			helpers.each(bodyItem.after, maxLineWidth);
		});

		// Reset back to 0
		widthPadding = 0;

		// Footer width
		ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
		helpers.each(model.footer, maxLineWidth);

		// Add padding
		width += 2 * model.xPadding;

		return {
			width: width,
			height: height
		};
	}

	/**
	 * Helper to get the alignment of a tooltip given the size
	 */
	function determineAlignment(tooltip, size) {
		var model = tooltip._model;
		var chart = tooltip._chart;
		var chartArea = tooltip._chartInstance.chartArea;
		var xAlign = 'center';
		var yAlign = 'center';

		if (model.y < size.height) {
			yAlign = 'top';
		} else if (model.y > (chart.height - size.height)) {
			yAlign = 'bottom';
		}

		var lf, rf; // functions to determine left, right alignment
		var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
		var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
		var midX = (chartArea.left + chartArea.right) / 2;
		var midY = (chartArea.top + chartArea.bottom) / 2;

		if (yAlign === 'center') {
			lf = function(x) {
				return x <= midX;
			};
			rf = function(x) {
				return x > midX;
			};
		} else {
			lf = function(x) {
				return x <= (size.width / 2);
			};
			rf = function(x) {
				return x >= (chart.width - (size.width / 2));
			};
		}

		olf = function(x) {
			return x + size.width > chart.width;
		};
		orf = function(x) {
			return x - size.width < 0;
		};
		yf = function(y) {
			return y <= midY ? 'top' : 'bottom';
		};

		if (lf(model.x)) {
			xAlign = 'left';

			// Is tooltip too wide and goes over the right side of the chart.?
			if (olf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		} else if (rf(model.x)) {
			xAlign = 'right';

			// Is tooltip too wide and goes outside left edge of canvas?
			if (orf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		}

		var opts = tooltip._options;
		return {
			xAlign: opts.xAlign ? opts.xAlign : xAlign,
			yAlign: opts.yAlign ? opts.yAlign : yAlign
		};
	}

	/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */
	function getBackgroundPoint(vm, size, alignment) {
		// Background Position
		var x = vm.x;
		var y = vm.y;

		var caretSize = vm.caretSize,
			caretPadding = vm.caretPadding,
			cornerRadius = vm.cornerRadius,
			xAlign = alignment.xAlign,
			yAlign = alignment.yAlign,
			paddingAndSize = caretSize + caretPadding,
			radiusAndPadding = cornerRadius + caretPadding;

		if (xAlign === 'right') {
			x -= size.width;
		} else if (xAlign === 'center') {
			x -= (size.width / 2);
		}

		if (yAlign === 'top') {
			y += paddingAndSize;
		} else if (yAlign === 'bottom') {
			y -= size.height + paddingAndSize;
		} else {
			y -= (size.height / 2);
		}

		if (yAlign === 'center') {
			if (xAlign === 'left') {
				x += paddingAndSize;
			} else if (xAlign === 'right') {
				x -= paddingAndSize;
			}
		} else if (xAlign === 'left') {
			x -= radiusAndPadding;
		} else if (xAlign === 'right') {
			x += radiusAndPadding;
		}

		return {
			x: x,
			y: y
		};
	}

	Chart.Tooltip = Chart.Element.extend({
		initialize: function() {
			this._model = getBaseModel(this._options);
		},

		// Get the title
		// Args are: (tooltipItem, data)
		getTitle: function() {
			var me = this;
			var opts = me._options;
			var callbacks = opts.callbacks;

			var beforeTitle = callbacks.beforeTitle.apply(me, arguments),
				title = callbacks.title.apply(me, arguments),
				afterTitle = callbacks.afterTitle.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeTitle);
			lines = pushOrConcat(lines, title);
			lines = pushOrConcat(lines, afterTitle);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getBeforeBody: function() {
			var lines = this._options.callbacks.beforeBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Args are: (tooltipItem, data)
		getBody: function(tooltipItems, data) {
			var me = this;
			var callbacks = me._options.callbacks;
			var bodyItems = [];

			helpers.each(tooltipItems, function(tooltipItem) {
				var bodyItem = {
					before: [],
					lines: [],
					after: []
				};
				pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

				bodyItems.push(bodyItem);
			});

			return bodyItems;
		},

		// Args are: (tooltipItem, data)
		getAfterBody: function() {
			var lines = this._options.callbacks.afterBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Get the footer and beforeFooter and afterFooter lines
		// Args are: (tooltipItem, data)
		getFooter: function() {
			var me = this;
			var callbacks = me._options.callbacks;

			var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
			var footer = callbacks.footer.apply(me, arguments);
			var afterFooter = callbacks.afterFooter.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeFooter);
			lines = pushOrConcat(lines, footer);
			lines = pushOrConcat(lines, afterFooter);

			return lines;
		},

		update: function(changed) {
			var me = this;
			var opts = me._options;

			// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
			// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
			// which breaks any animations.
			var existingModel = me._model;
			var model = me._model = getBaseModel(opts);
			var active = me._active;

			var data = me._data;
			var chartInstance = me._chartInstance;

			// In the case where active.length === 0 we need to keep these at existing values for good animations
			var alignment = {
				xAlign: existingModel.xAlign,
				yAlign: existingModel.yAlign
			};
			var backgroundPoint = {
				x: existingModel.x,
				y: existingModel.y
			};
			var tooltipSize = {
				width: existingModel.width,
				height: existingModel.height
			};
			var tooltipPosition = {
				x: existingModel.caretX,
				y: existingModel.caretY
			};

			var i, len;

			if (active.length) {
				model.opacity = 1;

				var labelColors = [];
				tooltipPosition = Chart.Tooltip.positioners[opts.position](active, me._eventPosition);

				var tooltipItems = [];
				for (i = 0, len = active.length; i < len; ++i) {
					tooltipItems.push(createTooltipItem(active[i]));
				}

				// If the user provided a filter function, use it to modify the tooltip items
				if (opts.filter) {
					tooltipItems = tooltipItems.filter(function(a) {
						return opts.filter(a, data);
					});
				}

				// If the user provided a sorting function, use it to modify the tooltip items
				if (opts.itemSort) {
					tooltipItems = tooltipItems.sort(function(a, b) {
						return opts.itemSort(a, b, data);
					});
				}

				// Determine colors for boxes
				helpers.each(tooltipItems, function(tooltipItem) {
					labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, chartInstance));
				});

				// Build the Text Lines
				model.title = me.getTitle(tooltipItems, data);
				model.beforeBody = me.getBeforeBody(tooltipItems, data);
				model.body = me.getBody(tooltipItems, data);
				model.afterBody = me.getAfterBody(tooltipItems, data);
				model.footer = me.getFooter(tooltipItems, data);

				// Initial positioning and colors
				model.x = Math.round(tooltipPosition.x);
				model.y = Math.round(tooltipPosition.y);
				model.caretPadding = helpers.getValueOrDefault(tooltipPosition.padding, 2);
				model.labelColors = labelColors;

				// data points
				model.dataPoints = tooltipItems;

				// We need to determine alignment of the tooltip
				tooltipSize = getTooltipSize(this, model);
				alignment = determineAlignment(this, tooltipSize);
				// Final Size and Position
				backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
			} else {
				model.opacity = 0;
			}

			model.xAlign = alignment.xAlign;
			model.yAlign = alignment.yAlign;
			model.x = backgroundPoint.x;
			model.y = backgroundPoint.y;
			model.width = tooltipSize.width;
			model.height = tooltipSize.height;

			// Point where the caret on the tooltip points to
			model.caretX = tooltipPosition.x;
			model.caretY = tooltipPosition.y;

			me._model = model;

			if (changed && opts.custom) {
				opts.custom.call(me, model);
			}

			return me;
		},
		drawCaret: function(tooltipPoint, size, opacity) {
			var vm = this._view;
			var ctx = this._chart.ctx;
			var x1, x2, x3;
			var y1, y2, y3;
			var caretSize = vm.caretSize;
			var cornerRadius = vm.cornerRadius;
			var xAlign = vm.xAlign,
				yAlign = vm.yAlign;
			var ptX = tooltipPoint.x,
				ptY = tooltipPoint.y;
			var width = size.width,
				height = size.height;

			if (yAlign === 'center') {
				// Left or right side
				if (xAlign === 'left') {
					x1 = ptX;
					x2 = x1 - caretSize;
					x3 = x1;
				} else {
					x1 = ptX + width;
					x2 = x1 + caretSize;
					x3 = x1;
				}

				y2 = ptY + (height / 2);
				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			} else {
				if (xAlign === 'left') {
					x1 = ptX + cornerRadius;
					x2 = x1 + caretSize;
					x3 = x2 + caretSize;
				} else if (xAlign === 'right') {
					x1 = ptX + width - cornerRadius;
					x2 = x1 - caretSize;
					x3 = x2 - caretSize;
				} else {
					x2 = ptX + (width / 2);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				}

				if (yAlign === 'top') {
					y1 = ptY;
					y2 = y1 - caretSize;
					y3 = y1;
				} else {
					y1 = ptY + height;
					y2 = y1 + caretSize;
					y3 = y1;
				}
			}

			ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x3, y3);
			ctx.closePath();
			ctx.fill();
		},
		drawTitle: function(pt, vm, ctx, opacity) {
			var title = vm.title;

			if (title.length) {
				ctx.textAlign = vm._titleAlign;
				ctx.textBaseline = 'top';

				var titleFontSize = vm.titleFontSize,
					titleSpacing = vm.titleSpacing;

				ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
				ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

				var i, len;
				for (i = 0, len = title.length; i < len; ++i) {
					ctx.fillText(title[i], pt.x, pt.y);
					pt.y += titleFontSize + titleSpacing; // Line Height and spacing

					if (i + 1 === title.length) {
						pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
					}
				}
			}
		},
		drawBody: function(pt, vm, ctx, opacity) {
			var bodyFontSize = vm.bodyFontSize;
			var bodySpacing = vm.bodySpacing;
			var body = vm.body;

			ctx.textAlign = vm._bodyAlign;
			ctx.textBaseline = 'top';

			var textColor = mergeOpacity(vm.bodyFontColor, opacity);
			ctx.fillStyle = textColor;
			ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

			// Before Body
			var xLinePadding = 0;
			var fillLineOfText = function(line) {
				ctx.fillText(line, pt.x + xLinePadding, pt.y);
				pt.y += bodyFontSize + bodySpacing;
			};

			// Before body lines
			helpers.each(vm.beforeBody, fillLineOfText);

			var drawColorBoxes = vm.displayColors;
			xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

			// Draw body lines now
			helpers.each(body, function(bodyItem, i) {
				helpers.each(bodyItem.before, fillLineOfText);

				helpers.each(bodyItem.lines, function(line) {
					// Draw Legend-like boxes if needed
					if (drawColorBoxes) {
						// Fill a white rect so that colours merge nicely if the opacity is < 1
						ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
						ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Border
						ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
						ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Inner square
						ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
						ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);

						ctx.fillStyle = textColor;
					}

					fillLineOfText(line);
				});

				helpers.each(bodyItem.after, fillLineOfText);
			});

			// Reset back to 0 for after body
			xLinePadding = 0;

			// After body lines
			helpers.each(vm.afterBody, fillLineOfText);
			pt.y -= bodySpacing; // Remove last body spacing
		},
		drawFooter: function(pt, vm, ctx, opacity) {
			var footer = vm.footer;

			if (footer.length) {
				pt.y += vm.footerMarginTop;

				ctx.textAlign = vm._footerAlign;
				ctx.textBaseline = 'top';

				ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
				ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

				helpers.each(footer, function(line) {
					ctx.fillText(line, pt.x, pt.y);
					pt.y += vm.footerFontSize + vm.footerSpacing;
				});
			}
		},
		drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
			ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
			helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
			ctx.fill();
		},
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			if (vm.opacity === 0) {
				return;
			}

			var tooltipSize = {
				width: vm.width,
				height: vm.height
			};
			var pt = {
				x: vm.x,
				y: vm.y
			};

			// IE11/Edge does not like very small opacities, so snap to 0
			var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

			if (this._options.enabled) {
				// Draw Background
				this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

				// Draw Caret
				this.drawCaret(pt, tooltipSize, opacity);

				// Draw Title, Body, and Footer
				pt.x += vm.xPadding;
				pt.y += vm.yPadding;

				// Titles
				this.drawTitle(pt, vm, ctx, opacity);

				// Body
				this.drawBody(pt, vm, ctx, opacity);

				// Footer
				this.drawFooter(pt, vm, ctx, opacity);
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me._options;
			var changed = false;

			me._lastActive = me._lastActive || [];

			// Find Active Elements for tooltips
			if (e.type === 'mouseout') {
				me._active = [];
			} else {
				me._active = me._chartInstance.getElementsAtEventForMode(e, options.mode, options);
			}

			// Remember Last Actives
			changed = !helpers.arrayEquals(me._active, me._lastActive);
			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				var model = me._model;
				me.update(true);
				me.pivot();

				// See if our tooltip position changed
				changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
			}

			return changed;
		}
	});

	/**
	 * @namespace Chart.Tooltip.positioners
	 */
	Chart.Tooltip.positioners = {
		/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */
		average: function(elements) {
			if (!elements.length) {
				return false;
			}

			var i, len;
			var x = 0;
			var y = 0;
			var count = 0;

			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var pos = el.tooltipPosition();
					x += pos.x;
					y += pos.y;
					++count;
				}
			}

			return {
				x: Math.round(x / count),
				y: Math.round(y / count)
			};
		},

		/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */
		nearest: function(elements, eventPosition) {
			var x = eventPosition.x;
			var y = eventPosition.y;

			var nearestElement;
			var minDistance = Number.POSITIVE_INFINITY;
			var i, len;
			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var center = el.getCenterPoint();
					var d = helpers.distanceBetweenPoints(eventPosition, center);

					if (d < minDistance) {
						minDistance = d;
						nearestElement = el;
					}
				}
			}

			if (nearestElement) {
				var tp = nearestElement.tooltipPosition();
				x = tp.x;
				y = tp.y;
			}

			return {
				x: x,
				y: y
			};
		}
	};
};

},{}],37:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		globalOpts = Chart.defaults.global;

	globalOpts.elements.arc = {
		backgroundColor: globalOpts.defaultColor,
		borderColor: '#fff',
		borderWidth: 2
	};

	Chart.elements.Arc = Chart.Element.extend({
		inLabelRange: function(mouseX) {
			var vm = this._view;

			if (vm) {
				return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
			}
			return false;
		},
		inRange: function(chartX, chartY) {
			var vm = this._view;

			if (vm) {
				var pointRelativePosition = helpers.getAngleFromPoint(vm, {
						x: chartX,
						y: chartY
					}),
					angle = pointRelativePosition.angle,
					distance = pointRelativePosition.distance;

				// Sanitise angle range
				var startAngle = vm.startAngle;
				var endAngle = vm.endAngle;
				while (endAngle < startAngle) {
					endAngle += 2.0 * Math.PI;
				}
				while (angle > endAngle) {
					angle -= 2.0 * Math.PI;
				}
				while (angle < startAngle) {
					angle += 2.0 * Math.PI;
				}

				// Check if within the range of the open/close angle
				var betweenAngles = (angle >= startAngle && angle <= endAngle),
					withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

				return (betweenAngles && withinRadius);
			}
			return false;
		},
		getCenterPoint: function() {
			var vm = this._view;
			var halfAngle = (vm.startAngle + vm.endAngle) / 2;
			var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
			return {
				x: vm.x + Math.cos(halfAngle) * halfRadius,
				y: vm.y + Math.sin(halfAngle) * halfRadius
			};
		},
		getArea: function() {
			var vm = this._view;
			return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
		},
		tooltipPosition: function() {
			var vm = this._view;

			var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
				rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
			return {
				x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
				y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
			};
		},
		draw: function() {

			var ctx = this._chart.ctx,
				vm = this._view,
				sA = vm.startAngle,
				eA = vm.endAngle;

			ctx.beginPath();

			ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
			ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

			ctx.closePath();
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = vm.borderWidth;

			ctx.fillStyle = vm.backgroundColor;

			ctx.fill();
			ctx.lineJoin = 'bevel';

			if (vm.borderWidth) {
				ctx.stroke();
			}
		}
	});
};

},{}],38:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var globalDefaults = Chart.defaults.global;

	Chart.defaults.global.elements.line = {
		tension: 0.4,
		backgroundColor: globalDefaults.defaultColor,
		borderWidth: 3,
		borderColor: globalDefaults.defaultColor,
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		capBezierPoints: true,
		fill: true, // do we fill in the area between the line and its base axis
	};

	Chart.elements.Line = Chart.Element.extend({
		draw: function() {
			var me = this;
			var vm = me._view;
			var spanGaps = vm.spanGaps;
			var fillPoint = vm.scaleZero;
			var loop = me._loop;

			// Handle different fill modes for cartesian lines
			if (!loop) {
				if (vm.fill === 'top') {
					fillPoint = vm.scaleTop;
				} else if (vm.fill === 'bottom') {
					fillPoint = vm.scaleBottom;
				}
			}

			var ctx = me._chart.ctx;
			ctx.save();

			// Helper function to draw a line to a point
			function lineToPoint(previousPoint, point) {
				var pointVM = point._view;
				if (point._view.steppedLine === true) {
					ctx.lineTo(pointVM.x, previousPoint._view.y);
					ctx.lineTo(pointVM.x, pointVM.y);
				} else if (point._view.tension === 0) {
					ctx.lineTo(pointVM.x, pointVM.y);
				} else {
					ctx.bezierCurveTo(
						previousPoint._view.controlPointNextX,
						previousPoint._view.controlPointNextY,
						pointVM.controlPointPreviousX,
						pointVM.controlPointPreviousY,
						pointVM.x,
						pointVM.y
					);
				}
			}

			var points = me._children.slice(); // clone array
			var lastDrawnIndex = -1;

			// If we are looping, adding the first point again
			if (loop && points.length) {
				points.push(points[0]);
			}

			var index, current, previous, currentVM;

			// Fill Line
			if (points.length && vm.fill) {
				ctx.beginPath();

				for (index = 0; index < points.length; ++index) {
					current = points[index];
					previous = helpers.previousItem(points, index);
					currentVM = current._view;

					// First point moves to it's starting position no matter what
					if (index === 0) {
						if (loop) {
							ctx.moveTo(fillPoint.x, fillPoint.y);
						} else {
							ctx.moveTo(currentVM.x, fillPoint);
						}

						if (!currentVM.skip) {
							lastDrawnIndex = index;
							ctx.lineTo(currentVM.x, currentVM.y);
						}
					} else {
						previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

						if (currentVM.skip) {
							// Only do this if this is the first point that is skipped
							if (!spanGaps && lastDrawnIndex === (index - 1)) {
								if (loop) {
									ctx.lineTo(fillPoint.x, fillPoint.y);
								} else {
									ctx.lineTo(previous._view.x, fillPoint);
								}
							}
						} else {
							if (lastDrawnIndex !== (index - 1)) {
								// There was a gap and this is the first point after the gap. If we've never drawn a point, this is a special case.
								// If the first data point is NaN, then there is no real gap to skip
								if (spanGaps && lastDrawnIndex !== -1) {
									// We are spanning the gap, so simple draw a line to this point
									lineToPoint(previous, current);
								} else if (loop) {
									ctx.lineTo(currentVM.x, currentVM.y);
								} else {
									ctx.lineTo(currentVM.x, fillPoint);
									ctx.lineTo(currentVM.x, currentVM.y);
								}
							} else {
								// Line to next point
								lineToPoint(previous, current);
							}
							lastDrawnIndex = index;
						}
					}
				}

				if (!loop && lastDrawnIndex !== -1) {
					ctx.lineTo(points[lastDrawnIndex]._view.x, fillPoint);
				}

				ctx.fillStyle = vm.backgroundColor || globalDefaults.defaultColor;
				ctx.closePath();
				ctx.fill();
			}

			// Stroke Line Options
			var globalOptionLineElements = globalDefaults.elements.line;
			ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

			// IE 9 and 10 do not support line dash
			if (ctx.setLineDash) {
				ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
			}

			ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
			ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
			ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
			ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

			// Stroke Line
			ctx.beginPath();
			lastDrawnIndex = -1;

			for (index = 0; index < points.length; ++index) {
				current = points[index];
				previous = helpers.previousItem(points, index);
				currentVM = current._view;

				// First point moves to it's starting position no matter what
				if (index === 0) {
					if (!currentVM.skip) {
						ctx.moveTo(currentVM.x, currentVM.y);
						lastDrawnIndex = index;
					}
				} else {
					previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

					if (!currentVM.skip) {
						if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
							// There was a gap and this is the first point after the gap
							ctx.moveTo(currentVM.x, currentVM.y);
						} else {
							// Line to next point
							lineToPoint(previous, current);
						}
						lastDrawnIndex = index;
					}
				}
			}

			ctx.stroke();
			ctx.restore();
		}
	});
};

},{}],39:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		globalOpts = Chart.defaults.global,
		defaultColor = globalOpts.defaultColor;

	globalOpts.elements.point = {
		radius: 3,
		pointStyle: 'circle',
		backgroundColor: defaultColor,
		borderWidth: 1,
		borderColor: defaultColor,
		// Hover
		hitRadius: 1,
		hoverRadius: 4,
		hoverBorderWidth: 1
	};

	function xRange(mouseX) {
		var vm = this._view;
		return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
	}

	function yRange(mouseY) {
		var vm = this._view;
		return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
	}

	Chart.elements.Point = Chart.Element.extend({
		inRange: function(mouseX, mouseY) {
			var vm = this._view;
			return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
		},

		inLabelRange: xRange,
		inXRange: xRange,
		inYRange: yRange,

		getCenterPoint: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y
			};
		},
		getArea: function() {
			return Math.PI * Math.pow(this._view.radius, 2);
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y,
				padding: vm.radius + vm.borderWidth
			};
		},
		draw: function(chartArea) {
			var vm = this._view;
			var model = this._model;
			var ctx = this._chart.ctx;
			var pointStyle = vm.pointStyle;
			var radius = vm.radius;
			var x = vm.x;
			var y = vm.y;
			var color = Chart.helpers.color;
			var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
			var ratio = 0;

			if (vm.skip) {
				return;
			}

			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, globalOpts.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;

			// Cliping for Points.
			// going out from inner charArea?
			if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right*errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom*errMargin < model.y))) {
				// Point fade out
				if (model.x < chartArea.left) {
					ratio = (x - model.x) / (chartArea.left - model.x);
				} else if (chartArea.right*errMargin < model.x) {
					ratio = (model.x - x) / (model.x - chartArea.right);
				} else if (model.y < chartArea.top) {
					ratio = (y - model.y) / (chartArea.top - model.y);
				} else if (chartArea.bottom*errMargin < model.y) {
					ratio = (model.y - y) / (model.y - chartArea.bottom);
				}
				ratio = Math.round(ratio*100) / 100;
				ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
				ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
			}

			Chart.canvasHelpers.drawPoint(ctx, pointStyle, radius, x, y);
		}
	});
};

},{}],40:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var globalOpts = Chart.defaults.global;

	globalOpts.elements.rectangle = {
		backgroundColor: globalOpts.defaultColor,
		borderWidth: 0,
		borderColor: globalOpts.defaultColor,
		borderSkipped: 'bottom'
	};

	function isVertical(bar) {
		return bar._view.width !== undefined;
	}

	/**
	 * Helper function to get the bounds of the bar regardless of the orientation
	 * @private
	 * @param bar {Chart.Element.Rectangle} the bar
	 * @return {Bounds} bounds of the bar
	 */
	function getBarBounds(bar) {
		var vm = bar._view;
		var x1, x2, y1, y2;

		if (isVertical(bar)) {
			// vertical
			var halfWidth = vm.width / 2;
			x1 = vm.x - halfWidth;
			x2 = vm.x + halfWidth;
			y1 = Math.min(vm.y, vm.base);
			y2 = Math.max(vm.y, vm.base);
		} else {
			// horizontal bar
			var halfHeight = vm.height / 2;
			x1 = Math.min(vm.x, vm.base);
			x2 = Math.max(vm.x, vm.base);
			y1 = vm.y - halfHeight;
			y2 = vm.y + halfHeight;
		}

		return {
			left: x1,
			top: y1,
			right: x2,
			bottom: y2
		};
	}

	Chart.elements.Rectangle = Chart.Element.extend({
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;
			var left, right, top, bottom, signX, signY, borderSkipped;
			var borderWidth = vm.borderWidth;

			if (!vm.horizontal) {
				// bar
				left = vm.x - vm.width / 2;
				right = vm.x + vm.width / 2;
				top = vm.y;
				bottom = vm.base;
				signX = 1;
				signY = bottom > top? 1: -1;
				borderSkipped = vm.borderSkipped || 'bottom';
			} else {
				// horizontal bar
				left = vm.base;
				right = vm.x;
				top = vm.y - vm.height / 2;
				bottom = vm.y + vm.height / 2;
				signX = right > left? 1: -1;
				signY = 1;
				borderSkipped = vm.borderSkipped || 'left';
			}

			// Canvas doesn't allow us to stroke inside the width so we can
			// adjust the sizes to fit if we're setting a stroke on the line
			if (borderWidth) {
				// borderWidth shold be less than bar width and bar height.
				var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
				borderWidth = borderWidth > barSize? barSize: borderWidth;
				var halfStroke = borderWidth / 2;
				// Adjust borderWidth when bar top position is near vm.base(zero).
				var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
				var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
				var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
				var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
				// not become a vertical line?
				if (borderLeft !== borderRight) {
					top = borderTop;
					bottom = borderBottom;
				}
				// not become a horizontal line?
				if (borderTop !== borderBottom) {
					left = borderLeft;
					right = borderRight;
				}
			}

			ctx.beginPath();
			ctx.fillStyle = vm.backgroundColor;
			ctx.strokeStyle = vm.borderColor;
			ctx.lineWidth = borderWidth;

			// Corner points, from bottom-left to bottom-right clockwise
			// | 1 2 |
			// | 0 3 |
			var corners = [
				[left, bottom],
				[left, top],
				[right, top],
				[right, bottom]
			];

			// Find first (starting) corner with fallback to 'bottom'
			var borders = ['bottom', 'left', 'top', 'right'];
			var startCorner = borders.indexOf(borderSkipped, 0);
			if (startCorner === -1) {
				startCorner = 0;
			}

			function cornerAt(index) {
				return corners[(startCorner + index) % 4];
			}

			// Draw rectangle from 'startCorner'
			var corner = cornerAt(0);
			ctx.moveTo(corner[0], corner[1]);

			for (var i = 1; i < 4; i++) {
				corner = cornerAt(i);
				ctx.lineTo(corner[0], corner[1]);
			}

			ctx.fill();
			if (borderWidth) {
				ctx.stroke();
			}
		},
		height: function() {
			var vm = this._view;
			return vm.base - vm.y;
		},
		inRange: function(mouseX, mouseY) {
			var inRange = false;

			if (this._view) {
				var bounds = getBarBounds(this);
				inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
			}

			return inRange;
		},
		inLabelRange: function(mouseX, mouseY) {
			var me = this;
			if (!me._view) {
				return false;
			}

			var inRange = false;
			var bounds = getBarBounds(me);

			if (isVertical(me)) {
				inRange = mouseX >= bounds.left && mouseX <= bounds.right;
			} else {
				inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
			}

			return inRange;
		},
		inXRange: function(mouseX) {
			var bounds = getBarBounds(this);
			return mouseX >= bounds.left && mouseX <= bounds.right;
		},
		inYRange: function(mouseY) {
			var bounds = getBarBounds(this);
			return mouseY >= bounds.top && mouseY <= bounds.bottom;
		},
		getCenterPoint: function() {
			var vm = this._view;
			var x, y;
			if (isVertical(this)) {
				x = vm.x;
				y = (vm.y + vm.base) / 2;
			} else {
				x = (vm.x + vm.base) / 2;
				y = vm.y;
			}

			return {x: x, y: y};
		},
		getArea: function() {
			var vm = this._view;
			return vm.width * Math.abs(vm.y - vm.base);
		},
		tooltipPosition: function() {
			var vm = this._view;
			return {
				x: vm.x,
				y: vm.y
			};
		}
	});

};

},{}],41:[function(require,module,exports){
'use strict';

// Chart.Platform implementation for targeting a web browser
module.exports = function(Chart) {
	var helpers = Chart.helpers;

	// DOM event types -> Chart.js event types.
	// Note: only events with different types are mapped.
	// https://developer.mozilla.org/en-US/docs/Web/Events
	var eventTypeMap = {
		// Touch events
		touchstart: 'mousedown',
		touchmove: 'mousemove',
		touchend: 'mouseup',

		// Pointer events
		pointerenter: 'mouseenter',
		pointerdown: 'mousedown',
		pointermove: 'mousemove',
		pointerup: 'mouseup',
		pointerleave: 'mouseout',
		pointerout: 'mouseout'
	};

	/**
	 * The "used" size is the final value of a dimension property after all calculations have
	 * been performed. This method uses the computed style of `element` but returns undefined
	 * if the computed style is not expressed in pixels. That can happen in some cases where
	 * `element` has a size relative to its parent and this last one is not yet displayed,
	 * for example because of `display: none` on a parent node.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
	 * @returns {Number} Size in pixels or undefined if unknown.
	 */
	function readUsedSize(element, property) {
		var value = helpers.getStyle(element, property);
		var matches = value && value.match(/(\d+)px/);
		return matches? Number(matches[1]) : undefined;
	}

	/**
	 * Initializes the canvas style and render size without modifying the canvas display size,
	 * since responsiveness is handled by the controller.resize() method. The config is used
	 * to determine the aspect ratio to apply in case no explicit height has been specified.
	 */
	function initCanvas(canvas, config) {
		var style = canvas.style;

		// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
		// returns null or '' if no explicit value has been set to the canvas attribute.
		var renderHeight = canvas.getAttribute('height');
		var renderWidth = canvas.getAttribute('width');

		// Chart.js modifies some canvas values that we want to restore on destroy
		canvas._chartjs = {
			initial: {
				height: renderHeight,
				width: renderWidth,
				style: {
					display: style.display,
					height: style.height,
					width: style.width
				}
			}
		};

		// Force canvas to display as block to avoid extra space caused by inline
		// elements, which would interfere with the responsive resize process.
		// https://github.com/chartjs/Chart.js/issues/2538
		style.display = style.display || 'block';

		if (renderWidth === null || renderWidth === '') {
			var displayWidth = readUsedSize(canvas, 'width');
			if (displayWidth !== undefined) {
				canvas.width = displayWidth;
			}
		}

		if (renderHeight === null || renderHeight === '') {
			if (canvas.style.height === '') {
				// If no explicit render height and style height, let's apply the aspect ratio,
				// which one can be specified by the user but also by charts as default option
				// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
				canvas.height = canvas.width / (config.options.aspectRatio || 2);
			} else {
				var displayHeight = readUsedSize(canvas, 'height');
				if (displayWidth !== undefined) {
					canvas.height = displayHeight;
				}
			}
		}

		return canvas;
	}

	function createEvent(type, chart, x, y, native) {
		return {
			type: type,
			chart: chart,
			native: native || null,
			x: x !== undefined? x : null,
			y: y !== undefined? y : null,
		};
	}

	function fromNativeEvent(event, chart) {
		var type = eventTypeMap[event.type] || event.type;
		var pos = helpers.getRelativePosition(event, chart);
		return createEvent(type, chart, pos.x, pos.y, event);
	}

	function createResizer(handler) {
		var iframe = document.createElement('iframe');
		iframe.className = 'chartjs-hidden-iframe';
		iframe.style.cssText =
			'display:block;'+
			'overflow:hidden;'+
			'border:0;'+
			'margin:0;'+
			'top:0;'+
			'left:0;'+
			'bottom:0;'+
			'right:0;'+
			'height:100%;'+
			'width:100%;'+
			'position:absolute;'+
			'pointer-events:none;'+
			'z-index:-1;';

		// Prevent the iframe to gain focus on tab.
		// https://github.com/chartjs/Chart.js/issues/3090
		iframe.tabIndex = -1;

		// If the iframe is re-attached to the DOM, the resize listener is removed because the
		// content is reloaded, so make sure to install the handler after the iframe is loaded.
		// https://github.com/chartjs/Chart.js/issues/3521
		helpers.addEvent(iframe, 'load', function() {
			helpers.addEvent(iframe.contentWindow || iframe, 'resize', handler);

			// The iframe size might have changed while loading, which can also
			// happen if the size has been changed while detached from the DOM.
			handler();
		});

		return iframe;
	}

	function addResizeListener(node, listener, chart) {
		var stub = node._chartjs = {
			ticking: false
		};

		// Throttle the callback notification until the next animation frame.
		var notify = function() {
			if (!stub.ticking) {
				stub.ticking = true;
				helpers.requestAnimFrame.call(window, function() {
					if (stub.resizer) {
						stub.ticking = false;
						return listener(createEvent('resize', chart));
					}
				});
			}
		};

		// Let's keep track of this added iframe and thus avoid DOM query when removing it.
		stub.resizer = createResizer(notify);

		node.insertBefore(stub.resizer, node.firstChild);
	}

	function removeResizeListener(node) {
		if (!node || !node._chartjs) {
			return;
		}

		var resizer = node._chartjs.resizer;
		if (resizer) {
			resizer.parentNode.removeChild(resizer);
			node._chartjs.resizer = null;
		}

		delete node._chartjs;
	}

	return {
		acquireContext: function(item, config) {
			if (typeof item === 'string') {
				item = document.getElementById(item);
			} else if (item.length) {
				// Support for array based queries (such as jQuery)
				item = item[0];
			}

			if (item && item.canvas) {
				// Support for any object associated to a canvas (including a context2d)
				item = item.canvas;
			}

			if (item instanceof HTMLCanvasElement) {
				// To prevent canvas fingerprinting, some add-ons undefine the getContext
				// method, for example: https://github.com/kkapsner/CanvasBlocker
				// https://github.com/chartjs/Chart.js/issues/2807
				var context = item.getContext && item.getContext('2d');
				if (context instanceof CanvasRenderingContext2D) {
					initCanvas(item, config);
					return context;
				}
			}

			return null;
		},

		releaseContext: function(context) {
			var canvas = context.canvas;
			if (!canvas._chartjs) {
				return;
			}

			var initial = canvas._chartjs.initial;
			['height', 'width'].forEach(function(prop) {
				var value = initial[prop];
				if (value === undefined || value === null) {
					canvas.removeAttribute(prop);
				} else {
					canvas.setAttribute(prop, value);
				}
			});

			helpers.each(initial.style || {}, function(value, key) {
				canvas.style[key] = value;
			});

			// The canvas render size might have been changed (and thus the state stack discarded),
			// we can't use save() and restore() to restore the initial state. So make sure that at
			// least the canvas context is reset to the default state by setting the canvas width.
			// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
			canvas.width = canvas.width;

			delete canvas._chartjs;
		},

		addEventListener: function(chart, type, listener) {
			var canvas = chart.chart.canvas;
			if (type === 'resize') {
				// Note: the resize event is not supported on all browsers.
				addResizeListener(canvas.parentNode, listener, chart.chart);
				return;
			}

			var stub = listener._chartjs || (listener._chartjs = {});
			var proxies = stub.proxies || (stub.proxies = {});
			var proxy = proxies[chart.id + '_' + type] = function(event) {
				listener(fromNativeEvent(event, chart.chart));
			};

			helpers.addEvent(canvas, type, proxy);
		},

		removeEventListener: function(chart, type, listener) {
			var canvas = chart.chart.canvas;
			if (type === 'resize') {
				// Note: the resize event is not supported on all browsers.
				removeResizeListener(canvas.parentNode, listener);
				return;
			}

			var stub = listener._chartjs || {};
			var proxies = stub.proxies || {};
			var proxy = proxies[chart.id + '_' + type];
			if (!proxy) {
				return;
			}

			helpers.removeEvent(canvas, type, proxy);
		}
	};
};

},{}],42:[function(require,module,exports){
'use strict';

// By default, select the browser (DOM) platform.
// @TODO Make possible to select another platform at build time.
var implementation = require(41);

module.exports = function(Chart) {
	/**
	 * @namespace Chart.platform
	 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
	 * @since 2.4.0
	 */
	Chart.platform = {
		/**
		 * Called at chart construction time, returns a context2d instance implementing
		 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
		 * @param {*} item - The native item from which to acquire context (platform specific)
		 * @param {Object} options - The chart options
		 * @returns {CanvasRenderingContext2D} context2d instance
		 */
		acquireContext: function() {},

		/**
		 * Called at chart destruction time, releases any resources associated to the context
		 * previously returned by the acquireContext() method.
		 * @param {CanvasRenderingContext2D} context - The context2d instance
		 * @returns {Boolean} true if the method succeeded, else false
		 */
		releaseContext: function() {},

		/**
		 * Registers the specified listener on the given chart.
		 * @param {Chart} chart - Chart from which to listen for event
		 * @param {String} type - The ({@link IEvent}) type to listen for
		 * @param {Function} listener - Receives a notification (an object that implements
		 * the {@link IEvent} interface) when an event of the specified type occurs.
		 */
		addEventListener: function() {},

		/**
		 * Removes the specified listener previously registered with addEventListener.
		 * @param {Chart} chart -Chart from which to remove the listener
		 * @param {String} type - The ({@link IEvent}) type to remove
		 * @param {Function} listener - The listener function to remove from the event target.
		 */
		removeEventListener: function() {}
	};

	/**
	 * @interface IPlatform
	 * Allows abstracting platform dependencies away from the chart
	 * @borrows Chart.platform.acquireContext as acquireContext
	 * @borrows Chart.platform.releaseContext as releaseContext
	 * @borrows Chart.platform.addEventListener as addEventListener
	 * @borrows Chart.platform.removeEventListener as removeEventListener
	 */

	/**
	 * @interface IEvent
	 * @prop {String} type - The event type name, possible values are:
	 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
	 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
	 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
	 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
	 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
	 */

	Chart.helpers.extend(Chart.platform, implementation(Chart));
};

},{"41":41}],43:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	// Default config for a category scale
	var defaultConfig = {
		position: 'bottom'
	};

	var DatasetScale = Chart.Scale.extend({
		/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/
		getLabels: function() {
			var data = this.chart.data;
			return (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
		},
		// Implement this so that
		determineDataLimits: function() {
			var me = this;
			var labels = me.getLabels();
			me.minIndex = 0;
			me.maxIndex = labels.length - 1;
			var findIndex;

			if (me.options.ticks.min !== undefined) {
				// user specified min value
				findIndex = helpers.indexOf(labels, me.options.ticks.min);
				me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
			}

			if (me.options.ticks.max !== undefined) {
				// user specified max value
				findIndex = helpers.indexOf(labels, me.options.ticks.max);
				me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
			}

			me.min = labels[me.minIndex];
			me.max = labels[me.maxIndex];
		},

		buildTicks: function() {
			var me = this;
			var labels = me.getLabels();
			// If we are viewing some subset of labels, slice the original array
			me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
		},

		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var data = me.chart.data;
			var isHorizontal = me.isHorizontal();

			if (data.yLabels && !isHorizontal) {
				return me.getRightValue(data.datasets[datasetIndex].data[index]);
			}
			return me.ticks[index - me.minIndex];
		},

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: function(value, index, datasetIndex, includeOffset) {
			var me = this;
			// 1 is added because we need the length but we have the indexes
			var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

			if (value !== undefined && isNaN(index)) {
				var labels = me.getLabels();
				var idx = labels.indexOf(value);
				index = idx !== -1 ? idx : index;
			}

			if (me.isHorizontal()) {
				var valueWidth = me.width / offsetAmt;
				var widthOffset = (valueWidth * (index - me.minIndex));

				if (me.options.gridLines.offsetGridLines && includeOffset || me.maxIndex === me.minIndex && includeOffset) {
					widthOffset += (valueWidth / 2);
				}

				return me.left + Math.round(widthOffset);
			}
			var valueHeight = me.height / offsetAmt;
			var heightOffset = (valueHeight * (index - me.minIndex));

			if (me.options.gridLines.offsetGridLines && includeOffset) {
				heightOffset += (valueHeight / 2);
			}

			return me.top + Math.round(heightOffset);
		},
		getPixelForTick: function(index, includeOffset) {
			return this.getPixelForValue(this.ticks[index], index + this.minIndex, null, includeOffset);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var value;
			var offsetAmt = Math.max((me.ticks.length - ((me.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
			var horz = me.isHorizontal();
			var valueDimension = (horz ? me.width : me.height) / offsetAmt;

			pixel -= horz ? me.left : me.top;

			if (me.options.gridLines.offsetGridLines) {
				pixel -= (valueDimension / 2);
			}

			if (pixel <= 0) {
				value = 0;
			} else {
				value = Math.round(pixel / valueDimension);
			}

			return value;
		},
		getBasePixel: function() {
			return this.bottom;
		}
	});

	Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);

};

},{}],44:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: 'left',
		ticks: {
			callback: Chart.Ticks.formatters.linear
		}
	};

	var LinearScale = Chart.LinearScaleBase.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var isHorizontal = me.isHorizontal();

			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// First Calculate the range
			me.min = null;
			me.max = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = {
							positiveValues: [],
							negativeValues: []
						};
					}

					// Store these per type
					var positiveValues = valuesPerStack[key].positiveValues;
					var negativeValues = valuesPerStack[key].negativeValues;

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							positiveValues[index] = positiveValues[index] || 0;
							negativeValues[index] = negativeValues[index] || 0;

							if (opts.relativePoints) {
								positiveValues[index] = 100;
							} else if (value < 0) {
								negativeValues[index] += value;
							} else {
								positiveValues[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
					var minVal = helpers.min(values);
					var maxVal = helpers.max(values);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}
						});
					}
				});
			}

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			this.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var maxTicks;
			var me = this;
			var tickOpts = me.options.ticks;

			if (me.isHorizontal()) {
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
			} else {
				// The factor of 2 used to scale the font size has been experimentally determined.
				var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, Chart.defaults.global.defaultFontSize);
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
			}

			return maxTicks;
		},
		// Called after the ticks are built. We need
		handleDirectionalChanges: function() {
			if (!this.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		// Utils
		getPixelForValue: function(value) {
			// This must be called after fit has been run so that
			// this.left, this.top, this.right, and this.bottom have been defined
			var me = this;
			var start = me.start;

			var rightValue = +me.getRightValue(value);
			var pixel;
			var range = me.end - start;

			if (me.isHorizontal()) {
				pixel = me.left + (me.width / range * (rightValue - start));
				return Math.round(pixel);
			}

			pixel = me.bottom - (me.height / range * (rightValue - start));
			return Math.round(pixel);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var isHorizontal = me.isHorizontal();
			var innerDimension = isHorizontal ? me.width : me.height;
			var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
			return me.start + ((me.end - me.start) * offset);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.ticksAsNumbers[index]);
		}
	});
	Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);

};

},{}],45:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers,
		noop = helpers.noop;

	Chart.LinearScaleBase = Chart.Scale.extend({
		handleTickRangeOptions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (tickOpts.beginAtZero) {
				var minSign = helpers.sign(me.min);
				var maxSign = helpers.sign(me.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					me.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the bottom down to 0
					me.min = 0;
				}
			}

			if (tickOpts.min !== undefined) {
				me.min = tickOpts.min;
			} else if (tickOpts.suggestedMin !== undefined) {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}

			if (tickOpts.max !== undefined) {
				me.max = tickOpts.max;
			} else if (tickOpts.suggestedMax !== undefined) {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}

			if (me.min === me.max) {
				me.max++;

				if (!tickOpts.beginAtZero) {
					me.min--;
				}
			}
		},
		getTickLimit: noop,
		handleDirectionalChanges: noop,

		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph. Make sure we always have at least 2 ticks
			var maxTicks = me.getTickLimit();
			maxTicks = Math.max(2, maxTicks);

			var numericGeneratorOptions = {
				maxTicks: maxTicks,
				min: tickOpts.min,
				max: tickOpts.max,
				stepSize: helpers.getValueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
			};
			var ticks = me.ticks = Chart.Ticks.generators.linear(numericGeneratorOptions, me);

			me.handleDirectionalChanges();

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			var me = this;
			me.ticksAsNumbers = me.ticks.slice();
			me.zeroLineIndex = me.ticks.indexOf(0);

			Chart.Scale.prototype.convertTicksToLabels.call(me);
		}
	});
};

},{}],46:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;

	var defaultConfig = {
		position: 'left',

		// label settings
		ticks: {
			callback: Chart.Ticks.formatters.logarithmic
		}
	};

	var LogarithmicScale = Chart.Scale.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var getValueOrDefault = helpers.getValueOrDefault;
			var isHorizontal = me.isHorizontal();
			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// Calculate Range
			me.min = null;
			me.max = null;
			me.minNotZero = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						if (valuesPerStack[key] === undefined) {
							valuesPerStack[key] = [];
						}

						helpers.each(dataset.data, function(rawValue, index) {
							var values = valuesPerStack[key];
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							values[index] = values[index] || 0;

							if (opts.relativePoints) {
								values[index] = 100;
							} else {
								// Don't need to split positive and negative since the log scale can't handle a 0 crossing
								values[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var minVal = helpers.min(valuesForType);
					var maxVal = helpers.max(valuesForType);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}

							if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
								me.minNotZero = value;
							}
						});
					}
				});
			}

			me.min = getValueOrDefault(tickOpts.min, me.min);
			me.max = getValueOrDefault(tickOpts.max, me.max);

			if (me.min === me.max) {
				if (me.min !== 0 && me.min !== null) {
					me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
					me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
				} else {
					me.min = 1;
					me.max = 10;
				}
			}
		},
		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			var generationOptions = {
				min: tickOpts.min,
				max: tickOpts.max
			};
			var ticks = me.ticks = Chart.Ticks.generators.logarithmic(generationOptions, me);

			if (!me.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			this.tickValues = this.ticks.slice();

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Get the correct tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.tickValues[index]);
		},
		getPixelForValue: function(value) {
			var me = this;
			var innerDimension;
			var pixel;

			var start = me.start;
			var newVal = +me.getRightValue(value);
			var range;
			var opts = me.options;
			var tickOpts = opts.ticks;

			if (me.isHorizontal()) {
				range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
				if (newVal === 0) {
					pixel = me.left;
				} else {
					innerDimension = me.width;
					pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			} else {
				// Bottom - top since pixels increase downward on a screen
				innerDimension = me.height;
				if (start === 0 && !tickOpts.reverse) {
					range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
					if (newVal === start) {
						pixel = me.bottom;
					} else if (newVal === me.minNotZero) {
						pixel = me.bottom - innerDimension * 0.02;
					} else {
						pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
					}
				} else if (me.end === 0 && tickOpts.reverse) {
					range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
					if (newVal === me.end) {
						pixel = me.top;
					} else if (newVal === me.minNotZero) {
						pixel = me.top + innerDimension * 0.02;
					} else {
						pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98/ range * (helpers.log10(newVal)-helpers.log10(me.minNotZero)));
					}
				} else {
					range = helpers.log10(me.end) - helpers.log10(start);
					innerDimension = me.height;
					pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			}
			return pixel;
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var range = helpers.log10(me.end) - helpers.log10(me.start);
			var value, innerDimension;

			if (me.isHorizontal()) {
				innerDimension = me.width;
				value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
			} else {  // todo: if start === 0
				innerDimension = me.height;
				value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
			}
			return value;
		}
	});
	Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);

};

},{}],47:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var globalDefaults = Chart.defaults.global;

	var defaultConfig = {
		display: true,

		// Boolean - Whether to animate scaling the chart from the centre
		animate: true,
		lineArc: false,
		position: 'chartArea',

		angleLines: {
			display: true,
			color: 'rgba(0, 0, 0, 0.1)',
			lineWidth: 1
		},

		// label settings
		ticks: {
			// Boolean - Show a backdrop to the scale label
			showLabelBackdrop: true,

			// String - The colour of the label backdrop
			backdropColor: 'rgba(255,255,255,0.75)',

			// Number - The backdrop padding above & below the label in pixels
			backdropPaddingY: 2,

			// Number - The backdrop padding to the side of the label in pixels
			backdropPaddingX: 2,

			callback: Chart.Ticks.formatters.linear
		},

		pointLabels: {
			// Number - Point label font size in pixels
			fontSize: 10,

			// Function - Used to convert point labels
			callback: function(label) {
				return label;
			}
		}
	};

	function getValueCount(scale) {
		return !scale.options.lineArc ? scale.chart.data.labels.length : 0;
	}

	function getPointLabelFontOptions(scale) {
		var pointLabelOptions = scale.options.pointLabels;
		var fontSize = helpers.getValueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
		var fontStyle = helpers.getValueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
		var fontFamily = helpers.getValueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
		var font = helpers.fontString(fontSize, fontStyle, fontFamily);

		return {
			size: fontSize,
			style: fontStyle,
			family: fontFamily,
			font: font
		};
	}

	function measureLabelSize(ctx, fontSize, label) {
		if (helpers.isArray(label)) {
			return {
				w: helpers.longestText(ctx, ctx.font, label),
				h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
			};
		}

		return {
			w: ctx.measureText(label).width,
			h: fontSize
		};
	}

	function determineLimits(angle, pos, size, min, max) {
		if (angle === min || angle === max) {
			return {
				start: pos - (size / 2),
				end: pos + (size / 2)
			};
		} else if (angle < min || angle > max) {
			return {
				start: pos - size - 5,
				end: pos
			};
		}

		return {
			start: pos,
			end: pos + size + 5
		};
	}

	/**
	 * Helper function to fit a radial linear scale with point labels
	 */
	function fitWithPointLabels(scale) {
		/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */

		var plFont = getPointLabelFontOptions(scale);

		// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
		// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		var furthestLimits = {
			l: scale.width,
			r: 0,
			t: scale.height,
			b: 0
		};
		var furthestAngles = {};
		var i;
		var textSize;
		var pointPosition;

		scale.ctx.font = plFont.font;
		scale._pointLabelSizes = [];

		var valueCount = getValueCount(scale);
		for (i = 0; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, largestPossibleRadius);
			textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
			scale._pointLabelSizes[i] = textSize;

			// Add quarter circle to make degree 0 mean top of circle
			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers.toDegrees(angleRadians) % 360;
			var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
			var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

			if (hLimits.start < furthestLimits.l) {
				furthestLimits.l = hLimits.start;
				furthestAngles.l = angleRadians;
			}

			if (hLimits.end > furthestLimits.r) {
				furthestLimits.r = hLimits.end;
				furthestAngles.r = angleRadians;
			}

			if (vLimits.start < furthestLimits.t) {
				furthestLimits.t = vLimits.start;
				furthestAngles.t = angleRadians;
			}

			if (vLimits.end > furthestLimits.b) {
				furthestLimits.b = vLimits.end;
				furthestAngles.b = angleRadians;
			}
		}

		scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
	}

	/**
	 * Helper function to fit a radial linear scale with no point labels
	 */
	function fit(scale) {
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		scale.drawingArea = Math.round(largestPossibleRadius);
		scale.setCenterPoint(0, 0, 0, 0);
	}

	function getTextAlignForAngle(angle) {
		if (angle === 0 || angle === 180) {
			return 'center';
		} else if (angle < 180) {
			return 'left';
		}

		return 'right';
	}

	function fillText(ctx, text, position, fontSize) {
		if (helpers.isArray(text)) {
			var y = position.y;
			var spacing = 1.5 * fontSize;

			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], position.x, y);
				y+= spacing;
			}
		} else {
			ctx.fillText(text, position.x, position.y);
		}
	}

	function adjustPointPositionForLabelHeight(angle, textSize, position) {
		if (angle === 90 || angle === 270) {
			position.y -= (textSize.h / 2);
		} else if (angle > 270 || angle < 90) {
			position.y -= textSize.h;
		}
	}

	function drawPointLabels(scale) {
		var ctx = scale.ctx;
		var getValueOrDefault = helpers.getValueOrDefault;
		var opts = scale.options;
		var angleLineOpts = opts.angleLines;
		var pointLabelOpts = opts.pointLabels;

		ctx.lineWidth = angleLineOpts.lineWidth;
		ctx.strokeStyle = angleLineOpts.color;

		var outerDistance = scale.getDistanceFromCenterForValue(opts.reverse ? scale.min : scale.max);

		// Point Label Font
		var plFont = getPointLabelFontOptions(scale);

		ctx.textBaseline = 'top';

		for (var i = getValueCount(scale) - 1; i >= 0; i--) {
			if (angleLineOpts.display) {
				var outerPosition = scale.getPointPosition(i, outerDistance);
				ctx.beginPath();
				ctx.moveTo(scale.xCenter, scale.yCenter);
				ctx.lineTo(outerPosition.x, outerPosition.y);
				ctx.stroke();
				ctx.closePath();
			}
			// Extra 3px out for some label spacing
			var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);

			// Keep this in loop since we may support array properties here
			var pointLabelFontColor = getValueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
			ctx.font = plFont.font;
			ctx.fillStyle = pointLabelFontColor;

			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers.toDegrees(angleRadians);
			ctx.textAlign = getTextAlignForAngle(angle);
			adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
			fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
		}
	}

	function drawRadiusLine(scale, gridLineOpts, radius, index) {
		var ctx = scale.ctx;
		ctx.strokeStyle = helpers.getValueAtIndexOrDefault(gridLineOpts.color, index - 1);
		ctx.lineWidth = helpers.getValueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

		if (scale.options.lineArc) {
			// Draw circular arcs between the points
			ctx.beginPath();
			ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.stroke();
		} else {
			// Draw straight lines connecting each index
			var valueCount = getValueCount(scale);

			if (valueCount === 0) {
				return;
			}

			ctx.beginPath();
			var pointPosition = scale.getPointPosition(0, radius);
			ctx.moveTo(pointPosition.x, pointPosition.y);

			for (var i = 1; i < valueCount; i++) {
				pointPosition = scale.getPointPosition(i, radius);
				ctx.lineTo(pointPosition.x, pointPosition.y);
			}

			ctx.closePath();
			ctx.stroke();
		}
	}

	function numberOrZero(param) {
		return helpers.isNumber(param) ? param : 0;
	}

	var LinearRadialScale = Chart.LinearScaleBase.extend({
		setDimensions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			// Set the unconstrained dimension before label rotation
			me.width = me.maxWidth;
			me.height = me.maxHeight;
			me.xCenter = Math.round(me.width / 2);
			me.yCenter = Math.round(me.height / 2);

			var minSize = helpers.min([me.height, me.width]);
			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
		},
		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			var min = Number.POSITIVE_INFINITY;
			var max = Number.NEGATIVE_INFINITY;

			helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex);

					helpers.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						min = Math.min(value, min);
						max = Math.max(value, max);
					});
				}
			});

			me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
			me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			me.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var tickOpts = this.options.ticks;
			var tickFontSize = helpers.getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
		},
		convertTicksToLabels: function() {
			var me = this;
			Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

			// Point labels
			me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		fit: function() {
			if (this.options.lineArc) {
				fit(this);
			} else {
				fitWithPointLabels(this);
			}
		},
		/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */
		setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
			var me = this;
			var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
			var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
			var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
			var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);

			radiusReductionLeft = numberOrZero(radiusReductionLeft);
			radiusReductionRight = numberOrZero(radiusReductionRight);
			radiusReductionTop = numberOrZero(radiusReductionTop);
			radiusReductionBottom = numberOrZero(radiusReductionBottom);

			me.drawingArea = Math.min(
				Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
				Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
			me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
		},
		setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
			var me = this;
			var maxRight = me.width - rightMovement - me.drawingArea,
				maxLeft = leftMovement + me.drawingArea,
				maxTop = topMovement + me.drawingArea,
				maxBottom = me.height - bottomMovement - me.drawingArea;

			me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
			me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
		},

		getIndexAngle: function(index) {
			var angleMultiplier = (Math.PI * 2) / getValueCount(this);
			var startAngle = this.chart.options && this.chart.options.startAngle ?
				this.chart.options.startAngle :
				0;

			var startAngleRadians = startAngle * Math.PI * 2 / 360;

			// Start from the top instead of right, so remove a quarter of the circle
			return index * angleMultiplier + startAngleRadians;
		},
		getDistanceFromCenterForValue: function(value) {
			var me = this;

			if (value === null) {
				return 0; // null always in center
			}

			// Take into account half font size + the yPadding of the top value
			var scalingFactor = me.drawingArea / (me.max - me.min);
			if (me.options.reverse) {
				return (me.max - value) * scalingFactor;
			}
			return (value - me.min) * scalingFactor;
		},
		getPointPosition: function(index, distanceFromCenter) {
			var me = this;
			var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
			return {
				x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
				y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
			};
		},
		getPointPositionForValue: function(index, value) {
			return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		},

		getBasePosition: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.getPointPositionForValue(0,
				me.beginAtZero? 0:
				min < 0 && max < 0? max :
				min > 0 && max > 0? min :
				0);
		},

		draw: function() {
			var me = this;
			var opts = me.options;
			var gridLineOpts = opts.gridLines;
			var tickOpts = opts.ticks;
			var getValueOrDefault = helpers.getValueOrDefault;

			if (opts.display) {
				var ctx = me.ctx;

				// Tick Font
				var tickFontSize = getValueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				var tickFontStyle = getValueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
				var tickFontFamily = getValueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

				helpers.each(me.ticks, function(label, index) {
					// Don't draw a centre value (if it is minimum)
					if (index > 0 || opts.reverse) {
						var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
						var yHeight = me.yCenter - yCenterOffset;

						// Draw circular lines around the scale
						if (gridLineOpts.display && index !== 0) {
							drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
						}

						if (tickOpts.display) {
							var tickFontColor = getValueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
							ctx.font = tickLabelFont;

							if (tickOpts.showLabelBackdrop) {
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = tickOpts.backdropColor;
								ctx.fillRect(
									me.xCenter - labelWidth / 2 - tickOpts.backdropPaddingX,
									yHeight - tickFontSize / 2 - tickOpts.backdropPaddingY,
									labelWidth + tickOpts.backdropPaddingX * 2,
									tickFontSize + tickOpts.backdropPaddingY * 2
								);
							}

							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillStyle = tickFontColor;
							ctx.fillText(label, me.xCenter, yHeight);
						}
					}
				});

				if (!opts.lineArc) {
					drawPointLabels(me);
				}
			}
		}
	});
	Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);

};

},{}],48:[function(require,module,exports){
/* global window: false */
'use strict';

var moment = require(1);
moment = typeof(moment) === 'function' ? moment : window.moment;

module.exports = function(Chart) {

	var helpers = Chart.helpers;
	var time = {
		units: [{
			name: 'millisecond',
			steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
		}, {
			name: 'second',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'minute',
			steps: [1, 2, 5, 10, 30]
		}, {
			name: 'hour',
			steps: [1, 2, 3, 6, 12]
		}, {
			name: 'day',
			steps: [1, 2, 5]
		}, {
			name: 'week',
			maxStep: 4
		}, {
			name: 'month',
			maxStep: 3
		}, {
			name: 'quarter',
			maxStep: 4
		}, {
			name: 'year',
			maxStep: false
		}]
	};

	var defaultConfig = {
		position: 'bottom',

		time: {
			parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
			format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
			unit: false, // false == automatic or override with week, month, year, etc.
			round: false, // none, or override with week, month, year, etc.
			displayFormat: false, // DEPRECATED
			isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
			minUnit: 'millisecond',

			// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
			displayFormats: {
				millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
				second: 'h:mm:ss a', // 11:20:01 AM
				minute: 'h:mm:ss a', // 11:20:01 AM
				hour: 'MMM D, hA', // Sept 4, 5PM
				day: 'll', // Sep 4 2015
				week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
				month: 'MMM YYYY', // Sept 2015
				quarter: '[Q]Q - YYYY', // Q3
				year: 'YYYY' // 2015
			}
		},
		ticks: {
			autoSkip: false
		}
	};

	var TimeScale = Chart.Scale.extend({
		initialize: function() {
			if (!moment) {
				throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
			}

			Chart.Scale.prototype.initialize.call(this);
		},
		getLabelMoment: function(datasetIndex, index) {
			if (datasetIndex === null || index === null) {
				return null;
			}

			if (typeof this.labelMoments[datasetIndex] !== 'undefined') {
				return this.labelMoments[datasetIndex][index];
			}

			return null;
		},
		getLabelDiff: function(datasetIndex, index) {
			var me = this;
			if (datasetIndex === null || index === null) {
				return null;
			}

			if (me.labelDiffs === undefined) {
				me.buildLabelDiffs();
			}

			if (typeof me.labelDiffs[datasetIndex] !== 'undefined') {
				return me.labelDiffs[datasetIndex][index];
			}

			return null;
		},
		getMomentStartOf: function(tick) {
			var me = this;
			if (me.options.time.unit === 'week' && me.options.time.isoWeekday !== false) {
				return tick.clone().startOf('isoWeek').isoWeekday(me.options.time.isoWeekday);
			}
			return tick.clone().startOf(me.tickUnit);
		},
		determineDataLimits: function() {
			var me = this;
			me.labelMoments = [];

			// Only parse these once. If the dataset does not have data as x,y pairs, we will use
			// these
			var scaleLabelMoments = [];
			if (me.chart.data.labels && me.chart.data.labels.length > 0) {
				helpers.each(me.chart.data.labels, function(label) {
					var labelMoment = me.parseTime(label);

					if (labelMoment.isValid()) {
						if (me.options.time.round) {
							labelMoment.startOf(me.options.time.round);
						}
						scaleLabelMoments.push(labelMoment);
					}
				}, me);

				me.firstTick = moment.min.call(me, scaleLabelMoments);
				me.lastTick = moment.max.call(me, scaleLabelMoments);
			} else {
				me.firstTick = null;
				me.lastTick = null;
			}

			helpers.each(me.chart.data.datasets, function(dataset, datasetIndex) {
				var momentsForDataset = [];
				var datasetVisible = me.chart.isDatasetVisible(datasetIndex);

				if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
					helpers.each(dataset.data, function(value) {
						var labelMoment = me.parseTime(me.getRightValue(value));

						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							momentsForDataset.push(labelMoment);

							if (datasetVisible) {
								// May have gone outside the scale ranges, make sure we keep the first and last ticks updated
								me.firstTick = me.firstTick !== null ? moment.min(me.firstTick, labelMoment) : labelMoment;
								me.lastTick = me.lastTick !== null ? moment.max(me.lastTick, labelMoment) : labelMoment;
							}
						}
					}, me);
				} else {
					// We have no labels. Use the ones from the scale
					momentsForDataset = scaleLabelMoments;
				}

				me.labelMoments.push(momentsForDataset);
			}, me);

			// Set these after we've done all the data
			if (me.options.time.min) {
				me.firstTick = me.parseTime(me.options.time.min);
			}

			if (me.options.time.max) {
				me.lastTick = me.parseTime(me.options.time.max);
			}

			// We will modify these, so clone for later
			me.firstTick = (me.firstTick || moment()).clone();
			me.lastTick = (me.lastTick || moment()).clone();
		},
		buildLabelDiffs: function() {
			var me = this;
			me.labelDiffs = [];
			var scaleLabelDiffs = [];
			// Parse common labels once
			if (me.chart.data.labels && me.chart.data.labels.length > 0) {
				helpers.each(me.chart.data.labels, function(label) {
					var labelMoment = me.parseTime(label);

					if (labelMoment.isValid()) {
						if (me.options.time.round) {
							labelMoment.startOf(me.options.time.round);
						}
						scaleLabelDiffs.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
					}
				}, me);
			}

			helpers.each(me.chart.data.datasets, function(dataset) {
				var diffsForDataset = [];

				if (typeof dataset.data[0] === 'object' && dataset.data[0] !== null) {
					helpers.each(dataset.data, function(value) {
						var labelMoment = me.parseTime(me.getRightValue(value));

						if (labelMoment.isValid()) {
							if (me.options.time.round) {
								labelMoment.startOf(me.options.time.round);
							}
							diffsForDataset.push(labelMoment.diff(me.firstTick, me.tickUnit, true));
						}
					}, me);
				} else {
					// We have no labels. Use common ones
					diffsForDataset = scaleLabelDiffs;
				}

				me.labelDiffs.push(diffsForDataset);
			}, me);
		},
		buildTicks: function() {
			var me = this;

			me.ctx.save();
			var tickFontSize = helpers.getValueOrDefault(me.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
			var tickFontStyle = helpers.getValueOrDefault(me.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
			var tickFontFamily = helpers.getValueOrDefault(me.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
			var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
			me.ctx.font = tickLabelFont;

			me.ticks = [];
			me.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
			me.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)

			// Set unit override if applicable
			if (me.options.time.unit) {
				me.tickUnit = me.options.time.unit || 'day';
				me.displayFormat = me.options.time.displayFormats[me.tickUnit];
				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, 1);
			} else {
				// Determine the smallest needed unit of the time
				var innerWidth = me.isHorizontal() ? me.width : me.height;

				// Crude approximation of what the label length might be
				var tempFirstLabel = me.tickFormatFunction(me.firstTick, 0, []);
				var tickLabelWidth = me.ctx.measureText(tempFirstLabel).width;
				var cosRotation = Math.cos(helpers.toRadians(me.options.ticks.maxRotation));
				var sinRotation = Math.sin(helpers.toRadians(me.options.ticks.maxRotation));
				tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
				var labelCapacity = innerWidth / (tickLabelWidth);

				// Start as small as possible
				me.tickUnit = me.options.time.minUnit;
				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				me.displayFormat = me.options.time.displayFormats[me.tickUnit];

				var unitDefinitionIndex = 0;
				var unitDefinition = time.units[unitDefinitionIndex];

				// While we aren't ideal and we don't have units left
				while (unitDefinitionIndex < time.units.length) {
					// Can we scale this unit. If `false` we can scale infinitely
					me.unitScale = 1;

					if (helpers.isArray(unitDefinition.steps) && Math.ceil(me.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
						// Use one of the predefined steps
						for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
							if (unitDefinition.steps[idx] >= Math.ceil(me.scaleSizeInUnits / labelCapacity)) {
								me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, unitDefinition.steps[idx]);
								break;
							}
						}

						break;
					} else if ((unitDefinition.maxStep === false) || (Math.ceil(me.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
						// We have a max step. Scale this unit
						me.unitScale = helpers.getValueOrDefault(me.options.time.unitStepSize, Math.ceil(me.scaleSizeInUnits / labelCapacity));
						break;
					} else {
						// Move to the next unit up
						++unitDefinitionIndex;
						unitDefinition = time.units[unitDefinitionIndex];

						me.tickUnit = unitDefinition.name;
						var leadingUnitBuffer = me.firstTick.diff(me.getMomentStartOf(me.firstTick), me.tickUnit, true);
						var trailingUnitBuffer = me.getMomentStartOf(me.lastTick.clone().add(1, me.tickUnit)).diff(me.lastTick, me.tickUnit, true);
						me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true) + leadingUnitBuffer + trailingUnitBuffer;
						me.displayFormat = me.options.time.displayFormats[unitDefinition.name];
					}
				}
			}

			var roundedStart;

			// Only round the first tick if we have no hard minimum
			if (!me.options.time.min) {
				me.firstTick = me.getMomentStartOf(me.firstTick);
				roundedStart = me.firstTick;
			} else {
				roundedStart = me.getMomentStartOf(me.firstTick);
			}

			// Only round the last tick if we have no hard maximum
			if (!me.options.time.max) {
				var roundedEnd = me.getMomentStartOf(me.lastTick);
				var delta = roundedEnd.diff(me.lastTick, me.tickUnit, true);
				if (delta < 0) {
					// Do not use end of because we need me to be in the next time unit
					me.lastTick = me.getMomentStartOf(me.lastTick.add(1, me.tickUnit));
				} else if (delta >= 0) {
					me.lastTick = roundedEnd;
				}

				me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
			}

			// Tick displayFormat override
			if (me.options.time.displayFormat) {
				me.displayFormat = me.options.time.displayFormat;
			}

			// first tick. will have been rounded correctly if options.time.min is not specified
			me.ticks.push(me.firstTick.clone());

			// For every unit in between the first and last moment, create a moment and add it to the ticks tick
			for (var i = me.unitScale; i <= me.scaleSizeInUnits; i += me.unitScale) {
				var newTick = roundedStart.clone().add(i, me.tickUnit);

				// Are we greater than the max time
				if (me.options.time.max && newTick.diff(me.lastTick, me.tickUnit, true) >= 0) {
					break;
				}

				me.ticks.push(newTick);
			}

			// Always show the right tick
			var diff = me.ticks[me.ticks.length - 1].diff(me.lastTick, me.tickUnit);
			if (diff !== 0 || me.scaleSizeInUnits === 0) {
				// this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
				// but the last tick was not rounded.
				if (me.options.time.max) {
					me.ticks.push(me.lastTick.clone());
					me.scaleSizeInUnits = me.lastTick.diff(me.ticks[0], me.tickUnit, true);
				} else {
					me.ticks.push(me.lastTick.clone());
					me.scaleSizeInUnits = me.lastTick.diff(me.firstTick, me.tickUnit, true);
				}
			}

			me.ctx.restore();

			// Invalidate label diffs cache
			me.labelDiffs = undefined;
		},
		// Get tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var label = me.chart.data.labels && index < me.chart.data.labels.length ? me.chart.data.labels[index] : '';
			var value = me.chart.data.datasets[datasetIndex].data[index];

			if (value !== null && typeof value === 'object') {
				label = me.getRightValue(value);
			}

			// Format nicely
			if (me.options.time.tooltipFormat) {
				label = me.parseTime(label).format(me.options.time.tooltipFormat);
			}

			return label;
		},
		// Function to format an individual tick mark
		tickFormatFunction: function(tick, index, ticks) {
			var formattedTick = tick.format(this.displayFormat);
			var tickOpts = this.options.ticks;
			var callback = helpers.getValueOrDefault(tickOpts.callback, tickOpts.userCallback);

			if (callback) {
				return callback(formattedTick, index, ticks);
			}
			return formattedTick;
		},
		convertTicksToLabels: function() {
			var me = this;
			me.tickMoments = me.ticks;
			me.ticks = me.ticks.map(me.tickFormatFunction, me);
		},
		getPixelForValue: function(value, index, datasetIndex) {
			var me = this;
			var offset = null;
			if (index !== undefined && datasetIndex !== undefined) {
				offset = me.getLabelDiff(datasetIndex, index);
			}

			if (offset === null) {
				if (!value || !value.isValid) {
					// not already a moment object
					value = me.parseTime(me.getRightValue(value));
				}
				if (value && value.isValid && value.isValid()) {
					offset = value.diff(me.firstTick, me.tickUnit, true);
				}
			}

			if (offset !== null) {
				var decimal = offset !== 0 ? offset / me.scaleSizeInUnits : offset;

				if (me.isHorizontal()) {
					var valueOffset = (me.width * decimal);
					return me.left + Math.round(valueOffset);
				}

				var heightOffset = (me.height * decimal);
				return me.top + Math.round(heightOffset);
			}
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.tickMoments[index], null, null);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var innerDimension = me.isHorizontal() ? me.width : me.height;
			var offset = (pixel - (me.isHorizontal() ? me.left : me.top)) / innerDimension;
			offset *= me.scaleSizeInUnits;
			return me.firstTick.clone().add(moment.duration(offset, me.tickUnit).asSeconds(), 'seconds');
		},
		parseTime: function(label) {
			var me = this;
			if (typeof me.options.time.parser === 'string') {
				return moment(label, me.options.time.parser);
			}
			if (typeof me.options.time.parser === 'function') {
				return me.options.time.parser(label);
			}
			// Date objects
			if (typeof label.getMonth === 'function' || typeof label === 'number') {
				return moment(label);
			}
			// Moment support
			if (label.isValid && label.isValid()) {
				return label;
			}
			// Custom parsing (return an instance of moment)
			if (typeof me.options.time.format !== 'string' && me.options.time.format.call) {
				console.warn('options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale');
				return me.options.time.format(label);
			}
			// Moment format parsing
			return moment(label, me.options.time.format);
		}
	});
	Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);

};

},{"1":1}]},{},[7])(7)
});
;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.7",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
;
//# sourceMappingURL=scripts.js.map