!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy.a606d96c.js"],(function(t){"use strict";var n;return{setters:[function(e){n=e.e}],execute:function(){var r,o={exports:{}},i=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},s=i,a=Object.prototype.toString,u=(r=Object.create(null),function(e){var t=a.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function c(e){return e=e.toLowerCase(),function(t){return u(t)===e}}function f(e){return Array.isArray(e)}function l(e){return void 0===e}var p=c("ArrayBuffer");function d(t){return null!==t&&"object"===e(t)}function h(e){if("object"!==u(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var m=c("Date"),y=c("File"),v=c("Blob"),g=c("FileList");function E(e){return"[object Function]"===a.call(e)}var b=c("URLSearchParams");function w(t,n){if(null!=t)if("object"!==e(t)&&(t=[t]),f(t))for(var r=0,o=t.length;r<o;r++)n.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.call(null,t[i],i,t)}var O,R=(O="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return O&&e instanceof O}),S={isArray:f,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||E(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:h,isUndefined:l,isDate:m,isFile:y,isBlob:v,isFunction:E,isStream:function(e){return d(e)&&E(e.pipe)},isURLSearchParams:b,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:w,merge:function e(){var t={};function n(n,r){h(t[r])&&h(n)?t[r]=e(t[r],n):h(n)?t[r]=e({},n):f(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)w(arguments[r],n);return t},extend:function(e,t,n){return w(t,(function(t,r){e[r]=n&&"function"==typeof t?s(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:c,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(l(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:R,isFileList:g},A=S;function x(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var T=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(A.isURLSearchParams(t))r=t.toString();else{var o=[];A.forEach(t,(function(e,t){null!=e&&(A.isArray(e)?t+="[]":e=[e],A.forEach(e,(function(e){A.isDate(e)?e=e.toISOString():A.isObject(e)&&(e=JSON.stringify(e)),o.push(x(t)+"="+x(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},N=S;function j(){this.handlers=[]}j.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},j.prototype.forEach=function(e){N.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var C=j,_=S,P=S;function U(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var B=U.prototype,D={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){D[e]={value:e}})),Object.defineProperties(U,D),Object.defineProperty(B,"isAxiosError",{value:!0}),U.from=function(e,t,n,r,o,i){var s=Object.create(B);return P.toFlatObject(e,s,(function(e){return e!==Error.prototype})),U.call(s,e.message,t,n,r,o),s.name=e.name,i&&Object.assign(s,i),s};var L=U,k={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},F=S;var q=function(t,n){n=n||new FormData;var r=[];function o(e){return null===e?"":F.isDate(e)?e.toISOString():F.isArrayBuffer(e)||F.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function t(i,s){if(F.isPlainObject(i)||F.isArray(i)){if(-1!==r.indexOf(i))throw Error("Circular reference detected in "+s);r.push(i),F.forEach(i,(function(r,i){if(!F.isUndefined(r)){var a,u=s?s+"."+i:i;if(r&&!s&&"object"===e(r))if(F.endsWith(i,"{}"))r=JSON.stringify(r);else if(F.endsWith(i,"[]")&&(a=F.toArray(r)))return void a.forEach((function(e){!F.isUndefined(e)&&n.append(u,o(e))}));t(r,u)}})),r.pop()}else n.append(s,o(i))}(t),n},I=L,J=S,M=J.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),J.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),J.isString(r)&&s.push("path="+r),J.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},H=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},W=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},z=function(e,t){return e&&!H(t)?W(e,t):t},V=S,X=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],K=S,$=K.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=K.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},Q=L;function G(e){Q.call(this,null==e?"canceled":e,Q.ERR_CANCELED),this.name="CanceledError"}S.inherits(G,Q,{__CANCEL__:!0});var Y=G,Z=S,ee=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)},te=M,ne=T,re=z,oe=function(e){var t,n,r,o={};return e?(V.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=V.trim(e.substr(0,r)).toLowerCase(),n=V.trim(e.substr(r+1)),t){if(o[t]&&X.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},ie=$,se=k,ae=L,ue=Y,ce=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},fe=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}Z.isFormData(o)&&Z.isStandardBrowserEnv()&&delete i["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+f)}var l=re(e.baseURL,e.url);function p(){if(u){var r="getAllResponseHeaders"in u?oe(u.getAllResponseHeaders()):null,o={data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u};ee((function(e){t(e),a()}),(function(e){n(e),a()}),o),u=null}}if(u.open(e.method.toUpperCase(),ne(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(p)},u.onabort=function(){u&&(n(new ae("Request aborted",ae.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new ae("Network Error",ae.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||se;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new ae(t,r.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,e,u)),u=null},Z.isStandardBrowserEnv()){var d=(e.withCredentials||ie(l))&&e.xsrfCookieName?te.read(e.xsrfCookieName):void 0;d&&(i[e.xsrfHeaderName]=d)}"setRequestHeader"in u&&Z.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:u.setRequestHeader(t,e)})),Z.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new ue:e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null);var h=ce(l);h&&-1===["http","https","file"].indexOf(h)?n(new ae("Unsupported protocol "+h+":",ae.ERR_BAD_REQUEST,e)):u.send(o)}))},le=S,pe=function(e,t){_.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},de=L,he=q,me={"Content-Type":"application/x-www-form-urlencoded"};function ye(e,t){!le.isUndefined(e)&&le.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ve,ge={transitional:k,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ve=fe),ve),transformRequest:[function(e,t){if(pe(t,"Accept"),pe(t,"Content-Type"),le.isFormData(e)||le.isArrayBuffer(e)||le.isBuffer(e)||le.isStream(e)||le.isFile(e)||le.isBlob(e))return e;if(le.isArrayBufferView(e))return e.buffer;if(le.isURLSearchParams(e))return ye(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=le.isObject(e),o=t&&t["Content-Type"];if((n=le.isFileList(e))||r&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return he(n?{"files[]":e}:e,i&&new i)}return r||"application/json"===o?(ye(t,"application/json"),function(e,t,n){if(le.isString(e))try{return(t||JSON.parse)(e),le.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||ge.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&le.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw de.from(i,de.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};le.forEach(["delete","get","head"],(function(e){ge.headers[e]={}})),le.forEach(["post","put","patch"],(function(e){ge.headers[e]=le.merge(me)}));var Ee=ge,be=S,we=Ee,Oe=function(e){return!(!e||!e.__CANCEL__)},Re=S,Se=function(e,t,n){var r=this||we;return be.forEach(n,(function(n){e=n.call(r,e,t)})),e},Ae=Oe,xe=Ee,Te=Y;function Ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te}var je=S,Ce=function(e,t){t=t||{};var n={};function r(e,t){return je.isPlainObject(e)&&je.isPlainObject(t)?je.merge(e,t):je.isPlainObject(t)?je.merge({},t):je.isArray(t)?t.slice():t}function o(n){return je.isUndefined(t[n])?je.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!je.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return je.isUndefined(t[n])?je.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return je.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);je.isUndefined(r)&&t!==a||(n[e]=r)})),n},_e="0.27.2",Pe=_e,Ue=L,Be={};["object","boolean","number","function","string","symbol"].forEach((function(t,n){Be[t]=function(r){return e(r)===t||"a"+(n<1?"n ":" ")+t}}));var De={};Be.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Pe+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new Ue(r(o," has been removed"+(t?" in "+t:"")),Ue.ERR_DEPRECATED);return t&&!De[o]&&(De[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Le={assertOptions:function(t,n,r){if("object"!==e(t))throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(t),i=o.length;i-- >0;){var s=o[i],a=n[s];if(a){var u=t[s],c=void 0===u||a(u,s,t);if(!0!==c)throw new Ue("option "+s+" must be "+c,Ue.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Ue("Unknown option "+s,Ue.ERR_BAD_OPTION)}},validators:Be},ke=S,Fe=T,qe=C,Ie=function(e){return Ne(e),e.headers=e.headers||{},e.data=Se.call(e,e.data,e.headers,e.transformRequest),e.headers=Re.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Re.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||xe.adapter)(e).then((function(t){return Ne(e),t.data=Se.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Ae(t)||(Ne(e),t&&t.response&&(t.response.data=Se.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Je=Ce,Me=z,He=Le,We=He.validators;function ze(e){this.defaults=e,this.interceptors={request:new qe,response:new qe}}ze.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=Je(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&He.assertOptions(n,{silentJSONParsing:We.transitional(We.boolean),forcedJSONParsing:We.transitional(We.boolean),clarifyTimeoutError:We.transitional(We.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[Ie,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var u=t;r.length;){var c=r.shift(),f=r.shift();try{u=c(u)}catch(l){f(l);break}}try{i=Ie(u)}catch(l){return Promise.reject(l)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},ze.prototype.getUri=function(e){e=Je(this.defaults,e);var t=Me(e.baseURL,e.url);return Fe(t,e.params,e.paramsSerializer)},ke.forEach(["delete","get","head","options"],(function(e){ze.prototype[e]=function(t,n){return this.request(Je(n||{},{method:e,url:t,data:(n||{}).data}))}})),ke.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Je(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ze.prototype[e]=t(),ze.prototype[e+"Form"]=t(!0)}));var Ve=ze,Xe=Y;function Ke(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Xe(e),t(n.reason))}))}Ke.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ke.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Ke.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Ke.source=function(){var e;return{token:new Ke((function(t){e=t})),cancel:e}};var $e=Ke,Qe=S,Ge=S,Ye=i,Ze=Ve,et=Ce;var tt=function e(t){var n=new Ze(t),r=Ye(Ze.prototype.request,n);return Ge.extend(r,Ze.prototype,n),Ge.extend(r,n),r.create=function(n){return e(et(t,n))},r}(Ee);tt.Axios=Ze,tt.CanceledError=Y,tt.CancelToken=$e,tt.isCancel=Oe,tt.VERSION=_e,tt.toFormData=q,tt.AxiosError=L,tt.Cancel=tt.CanceledError,tt.all=function(e){return Promise.all(e)},tt.spread=function(e){return function(t){return e.apply(null,t)}},tt.isAxiosError=function(e){return Qe.isObject(e)&&!0===e.isAxiosError},o.exports=tt,o.exports.default=tt;var nt=o.exports,rt=t("s",nt.create({baseURL:"https://api.it120.cc/yixixi/"}));
/*
       * @author: SumO
       * @create: 2022-09-11 21:58 PM
       * @license: MIT
       * @lastAuthor: SumO
       * @lastEditTime: 2022-09-20 13:53 PM
       * @desc: 
       */rt.interceptors.request.use((function(e){var t=localStorage.getItem("token");return e&&e.data&&(e.data.token=t),e&&e.params&&(e.params.token=t),e}),(function(e){})),rt.interceptors.response.use((function(e){if(2e3===e.data.code){n.exports.Message({message:"登录失效，请重新登录",type:"error"});var t=window.location.origin+window.location.pathname;window.location.href=t+"#/login"}return e}),(function(e){}))}}}))}();
