(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VideoTool"] = factory();
	else
		root["VideoTool"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}else(1===e._state?c:s)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,f(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new l(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,u,c,s,f,l=n(8),d=(i=function(e){return new Promise(function(t,n){e=u(e),(e=c(e)).beforeSend&&e.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(Math.min(r,100))},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(Math.min(r,100))},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=l.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};f(r.status)?t(i):n(i)}},r.send(e.data)})},a=function(e){return e.method="POST",i(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},c=function(e){switch(e.method){case"GET":var t=s(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(l.isFormData(e.data)||l.isFormElement(e.data))&&(n=o.FORM),e.data=s(e.data,n),n!==d.contentType.FORM&&(e.headers["content-type"]=n)}return e},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return l.urlEncode(e);case o.JSON:return l.jsonEncode(e);case o.FORM:return l.formEncode(e);default:return e}},f=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=u(e),l.selectFiles(e).then(function(t){for(var n=new FormData,r=0;r<t.length;r++)n.append(e.fieldName,t[r],t[r].name);l.isObject(e.data)&&Object.keys(e.data).forEach(function(t){var r=e.data[t];n.append(t,r)});var o=e.beforeSend;return e.beforeSend=function(){return o(t)},e.data=n,a(e)})},selectFiles:function(e){return delete(e=u(e)).beforeSend,l.selectFiles(e)}});e.exports=d},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,u,c=1,s={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete s[e]}function m(e){if(f)setTimeout(m,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),f=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=u(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",function(e){var n=e.target.files;t(n),document.body.removeChild(r)},!1),r.click()})}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach(function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)}),n}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var u,c,s=a;if(i&&(s=i+"["+s+"]"),"object"==typeof e[a]&&null!==e[a])u=r(e[a],null,o,s);else{t&&(c=s,s=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(s):s);var f=e[a];f=(f=0===(f=!1===(f=!0===f?"1":f)?"0":f)?"0":f)||"",u=n(s)+"="+n(f)}return u})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(22);

var iterableToArrayLimit = __webpack_require__(23);

var unsupportedIterableToArray = __webpack_require__(6);

var nonIterableRest = __webpack_require__(24);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(5);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(19);

var iterableToArray = __webpack_require__(20);

var unsupportedIterableToArray = __webpack_require__(6);

var nonIterableSpread = __webpack_require__(21);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<svg enable-background=\"new 0 0 50 50\" height=\"50px\" id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 50 50\" width=\"50px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><rect fill=\"none\" height=\"50\" width=\"50\"></rect><polygon fill=\"none\" points=\"49,14 36,21 36,29 49,36 \" stroke=\"#000000\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></polygon><path d=\"M36,36c0,2.209-1.791,4-4,4 H5c-2.209,0-4-1.791-4-4V14c0-2.209,1.791-4,4-4h27c2.209,0,4,1.791,4,4V36z\" fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\"></path></svg>"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z\"></path></svg>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z\"></path></svg>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"17\" height=\"10\" viewBox=\"0 0 17 10\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z\"></path></svg>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-image\" viewBox=\"0 0 16 16\"><path d=\"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"></path><path d=\"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z\"></path></svg>"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" class=\"bi bi-play-btn\" viewBox=\"0 0 16 16\"><path d=\"M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z\"></path><path d=\"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z\"></path></svg>"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(16);
            var content = __webpack_require__(17);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(18);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".video-tool {\r\n  --bg-color: #cdd1e0;\r\n  --front-color: #388ae5;\r\n  --border-color: #e8e8eb;\r\n}\r\n\r\n  .video-tool__video {\r\n    border-radius: 3px;\r\n    overflow: hidden;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .video-tool__video-picture {\r\n      width: 100%;\r\n      display: block;\r\n    }\r\n\r\n  .video-tool__video-preloader {\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n      background-size: cover;\r\n      margin: auto;\r\n      position: relative;\r\n      background-color: var(--bg-color);\r\n      background-position: center center;\r\n    }\r\n\r\n  .video-tool__video-preloader::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: 3;\r\n        width: 60px;\r\n        height: 60px;\r\n        border-radius: 50%;\r\n        border: 2px solid var(--bg-color);\r\n        border-top-color: var(--front-color);\r\n        left: 50%;\r\n        top: 50%;\r\n        margin-top: -30px;\r\n        margin-left: -30px;\r\n        animation: video-preloader-spin 2s infinite linear;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n  .video-tool__video-ratio-16-9 {\r\n      position: relative;\r\n      overflow: hidden;\r\n      padding-bottom: 56.25%;\r\n    }\r\n\r\n  .video-tool__video-ratio-16-9-picture {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        top: 0;\r\n        left: 0;\r\n      }\r\n\r\n  .video-tool__caption[contentEditable=\"true\"][data-placeholder]::before {\r\n      position: absolute !important;\r\n      content: attr(data-placeholder);\r\n      color: #707684;\r\n      font-weight: normal;\r\n      display: none;\r\n    }\r\n\r\n  .video-tool__caption[contentEditable=\"true\"][data-placeholder]:empty::before {\r\n        display: block;\r\n      }\r\n\r\n  .video-tool__caption[contentEditable=\"true\"][data-placeholder]:empty:focus::before {\r\n        display: none;\r\n      }\r\n\r\n  .video-tool--empty .video-tool__video {\r\n      display: none;\r\n    }\r\n\r\n  .video-tool--empty .video-tool__caption, .video-tool--loading .video-tool__caption {\r\n      display: none;\r\n    }\r\n\r\n  .video-tool--filled .cdx-button {\r\n      display: none;\r\n    }\r\n\r\n  .video-tool--filled .video-tool__video-preloader {\r\n        display: none;\r\n      }\r\n\r\n  .video-tool--loading .video-tool__video {\r\n      min-height: 200px;\r\n      display: flex;\r\n      border: 1px solid var(--border-color);\r\n      background-color: #fff;\r\n    }\r\n\r\n  .video-tool--loading .video-tool__video-picture {\r\n        display: none;\r\n      }\r\n\r\n  .video-tool--loading .cdx-button {\r\n      display: none;\r\n    }\r\n\r\n  /**\r\n   * Tunes\r\n   * ----------------\r\n   */\r\n\r\n  .video-tool--withBorder .video-tool__video {\r\n      border: 1px solid var(--border-color);\r\n    }\r\n\r\n  .video-tool--withBackground .video-tool__video {\r\n      padding: 15px;\r\n      background: var(--bg-color);\r\n    }\r\n\r\n  .video-tool--withBackground .video-tool__video-picture {\r\n        max-width: 60%;\r\n        margin: 0 auto;\r\n      }\r\n\r\n  .video-tool--stretched .video-tool__video-picture {\r\n        width: 100%;\r\n      }\r\n\r\n@keyframes video-preloader-spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(5);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_VideoTool; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(4);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(8);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./src/svg/button-icon.svg
var button_icon = __webpack_require__(9);
var button_icon_default = /*#__PURE__*/__webpack_require__.n(button_icon);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(3);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/services.js

/* eslint-disable no-useless-escape */
/* harmony default export */ var services = ({
  vimeo: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
    embedUrl: 'https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0',
    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
    height: 320,
    width: 580
  },
  youtube: {
    regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
    embedUrl: 'https://www.youtube.com/embed/<%= remote_id %>',
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    id: function id(_ref) {
      var _ref2 = slicedToArray_default()(_ref, 2),
        _id = _ref2[0],
        params = _ref2[1];
      if (!params && _id) {
        return _id;
      }
      var paramsMap = {
        start: 'start',
        end: 'end',
        t: 'start',
        // eslint-disable-next-line camelcase
        time_continue: 'start',
        list: 'list'
      };
      params = params.slice(1).split('&').map(function (param) {
        var _param$split = param.split('='),
          _param$split2 = slicedToArray_default()(_param$split, 2),
          name = _param$split2[0],
          value = _param$split2[1];
        if (!_id && name === 'v') {
          _id = value;
          return null;
        }
        if (!paramsMap[name]) {
          return null;
        }
        return "".concat(paramsMap[name], "=").concat(value);
      }).filter(function (param) {
        return !!param;
      });
      return _id + '?' + params.join('&');
    }
  },
  coub: {
    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
    embedUrl: 'https://coub.com/embed/<%= remote_id %>',
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  vine: {
    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
    embedUrl: 'https://vine.co/v/<%= remote_id %>/embed/simple/',
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  imgur: {
    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
    embedUrl: 'http://imgur.com/<%= remote_id %>/embed',
    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
    height: 500,
    width: 540
  },
  gfycat: {
    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
    embedUrl: 'https://gfycat.com/ifr/<%= remote_id %>',
    html: "<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",
    height: 436,
    width: 580
  },
  'twitch-channel': {
    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
    embedUrl: 'https://player.twitch.tv/?channel=<%= remote_id %>',
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  'twitch-video': {
    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
    embedUrl: 'https://player.twitch.tv/?video=v<%= remote_id %>',
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  'yandex-music-album': {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
    embedUrl: 'https://music\.yandex\.ru/iframe/#album/<%= remote_id %>/',
    html: '<iframe frameborder=\"0\" style=\"border:none;width:540px;height:400px;\" style=\"width:100%;\" height=\"400\"></iframe>',
    height: 400,
    width: 540
  },
  'yandex-music-track': {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
    embedUrl: 'https://music\.yandex\.ru/iframe/#track/<%= remote_id %>/',
    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
    height: 100,
    width: 540,
    id: function id(ids) {
      return ids.join('/');
    }
  },
  'yandex-music-playlist': {
    regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
    embedUrl: 'https://music\.yandex\.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/',
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
    height: 400,
    width: 540,
    id: function id(ids) {
      return ids.join('/');
    }
  },
  codepen: {
    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
    embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    height: 300,
    width: 600,
    id: function id(ids) {
      return ids.join('/embed/');
    }
  },
  instagram: {
    regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/,
    embedUrl: 'https://www.instagram.com/p/<%= remote_id %>/embed',
    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 505,
    width: 400
  },
  twitter: {
    regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/,
    embedUrl: 'https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>',
    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    id: function id(ids) {
      return ids.join('/status/');
    }
  },
  pinterest: {
    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
    embedUrl: 'https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>',
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
    id: function id(ids) {
      return ids[1];
    }
  },
  facebook: {
    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500',
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
    id: function id(ids) {
      return ids.join('/');
    }
  },
  aparat: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
    embedUrl: 'https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame',
    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600
  }
});
// CONCATENATED MODULE: ./src/ui.js






/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
var ui_Ui = /*#__PURE__*/function () {
  /**
   * @param {object} ui - video tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {VideoConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  function Ui(_ref) {
    var api = _ref.api,
      config = _ref.config,
      onSelectFile = _ref.onSelectFile,
      readOnly = _ref.readOnly;
    classCallCheck_default()(this, Ui);
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: ui_make("div", [this.CSS.baseClass, this.CSS.wrapper]),
      videoContainer: ui_make("div", [this.CSS.videoContainer]),
      fileButton: this.createFileButton(),
      videoEl: undefined,
      videoPreloader: ui_make("div", this.CSS.videoPreloader),
      caption: ui_make("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    };

    /**
     * Create base structure
     *  <wrapper>
     *    <video-container>
     *      <video-preloader />
     *    </video-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */
    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.videoContainer.appendChild(this.nodes.videoPreloader);
    this.nodes.wrapper.appendChild(this.nodes.videoContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }

  /**
   * CSS classes
   *
   * @returns {object}
   */
  return createClass_default()(Ui, [{
    key: "CSS",
    get: function get() {
      return {
        baseClass: this.api.styles.block,
        loading: this.api.styles.loader,
        input: this.api.styles.input,
        button: this.api.styles.button,
        /**
         * Tool's classes
         */
        wrapper: "video-tool",
        videoContainer: "video-tool__video",
        videoPreloader: "video-tool__video-preloader",
        videoEl: "video-tool__video-picture",
        caption: "video-tool__caption",
        iframeWrapper: "video-tool__video-ratio-16-9",
        iframeVideoEl: "video-tool__video-ratio-16-9-picture"
      };
    }

    /**
     * Ui statuses:
     * - empty
     * - uploading
     * - filled
     *
     * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
     */
  }, {
    key: "render",
    value:
    /**
     * Renders tool UI
     *
     * @param {VideoToolData} toolData - saved tool data
     * @returns {Element}
     */
    function render(toolData) {
      if (!toolData.file || Object.keys(toolData.file).length === 0) {
        this.toggleStatus(Ui.status.EMPTY);
      } else {
        this.toggleStatus(Ui.status.UPLOADING);
      }
      return this.nodes.wrapper;
    }

    /**
     * Creates upload-file button
     *
     * @returns {Element}
     */
  }, {
    key: "createFileButton",
    value: function createFileButton() {
      var _this = this;
      var button = ui_make("div", [this.CSS.button]);
      button.innerHTML = this.config.buttonContent || "".concat(button_icon_default.a, " ").concat(this.api.i18n.t("Select an Video"));
      button.addEventListener("click", function () {
        _this.onSelectFile();
      });
      return button;
    }

    /**
     * Shows uploading preloader
     *
     * @param {string} src - preview source
     * @returns {void}
     */
  }, {
    key: "showPreloader",
    value: function showPreloader(src) {
      this.nodes.videoPreloader.style.backgroundVideo = "url(".concat(src, ")");
      this.toggleStatus(Ui.status.UPLOADING);
    }

    /**
     * Hide uploading preloader
     *
     * @returns {void}
     */
  }, {
    key: "hidePreloader",
    value: function hidePreloader() {
      this.nodes.videoPreloader.style.backgroundVideo = "";
      this.toggleStatus(Ui.status.EMPTY);
    }

    /**
     * Shows an video
     *
     * @param {string} url - video source
     * @returns {void}
     */
  }, {
    key: "fillVideo",
    value: function fillVideo(_ref2) {
      var _this2 = this;
      var url = _ref2.url,
        service = _ref2.service;
      var eventName = "load";
      if (service) {
        var _SERVICES$service = services[service],
          regex = _SERVICES$service.regex,
          embedUrl = _SERVICES$service.embedUrl,
          width = _SERVICES$service.width,
          height = _SERVICES$service.height,
          _SERVICES$service$id = _SERVICES$service.id,
          id = _SERVICES$service$id === void 0 ? function (ids) {
            return ids.shift();
          } : _SERVICES$service$id;
        var result = regex.exec(url).slice(1);
        var embed = embedUrl.replace(/<%= remote_id %>/g, id(result));
        var tag = "iframe";
        var attributes = {
          src: embed,
          width: width,
          height: height
        };
        this.nodes.videoEl = ui_make(tag, this.CSS.iframeVideoEl, attributes);
      } else {
        /**
         * Check for a source extension to compose element correctly: video tag for mp4, img — for others
         */
        // const tag = /\.mp4$/.test(url.toLowerCase()) ? "VIDEO" : "IMG";
        /**
         *
         * Only use Video
         *
         */
        var _tag = "VIDEO";
        var _attributes = {
          src: url
        };

        /**
         * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
         * - IMG: load
         * - VIDEO: loadeddata
         *
         * @type {string}
         */

        /**
         * Update attributes and eventName if source is a mp4 video
         */
        if (_tag === "VIDEO") {
          /**
           * Add attributes for playing muted mp4 as a gif
           *
           * @type {boolean}
           */
          _attributes.autoplay = false;
          _attributes.loop = false;
          _attributes.muted = true;
          _attributes.playsinline = true;
          _attributes.controls = true;

          /**
           * Change event to be listened
           *
           * @type {string}
           */
          eventName = "loadeddata";
        }

        /**
         * Compose tag with defined attributes
         *
         * @type {Element}
         */
        this.nodes.videoEl = ui_make(_tag, this.CSS.videoEl, _attributes);
      }

      /**
       * Add load event listener
       */
      this.nodes.videoEl.addEventListener(eventName, function () {
        _this2.toggleStatus(Ui.status.FILLED);

        /**
         * Preloader does not exists on first rendering with presaved data
         */
        if (_this2.nodes.videoPreloader) {
          _this2.nodes.videoPreloader.style.backgroundVideo = "";
        }
      });
      var videoNode = this.nodes.videoEl;
      if (service) {
        var iframeWrapper = ui_make("div", this.CSS.iframeWrapper, {});
        iframeWrapper.appendChild(videoNode);
        videoNode = iframeWrapper;
      }
      this.nodes.videoContainer.appendChild(videoNode);
    }

    /**
     * Shows caption input
     *
     * @param {string} text - caption text
     * @returns {void}
     */
  }, {
    key: "fillCaption",
    value: function fillCaption(text) {
      if (this.nodes.caption) {
        this.nodes.caption.innerHTML = text;
      }
    }

    /**
     * Shows caption input
     *
     * @param {string} url - url poster image
     * @returns {void}
     */
  }, {
    key: "fillPoster",
    value: function fillPoster(url) {
      if (this.nodes.videoEl) {
        if (url) {
          this.nodes.videoEl.setAttribute("poster", url);
        } else {
          this.nodes.videoEl.removeAttribute("poster");
        }
      }
    }

    /**
     * Changes UI status
     *
     * @param {string} status - see {@link Ui.status} constants
     * @returns {void}
     */
  }, {
    key: "toggleStatus",
    value: function toggleStatus(status) {
      for (var statusType in Ui.status) {
        if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {
          this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(Ui.status[statusType]), status === Ui.status[statusType]);
        }
      }
    }

    /**
     * Apply visual representation of activated tune
     *
     * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
     * @param {boolean} status - true for enable, false for disable
     * @returns {void}
     */
  }, {
    key: "applyTune",
    value: function applyTune(tuneName, status) {
      this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(tuneName), status);
      if (tuneName === "withPoster") {
        this.fillPoster(status);
      }
    }
  }], [{
    key: "status",
    get: function get() {
      return {
        EMPTY: "empty",
        UPLOADING: "loading",
        FILLED: "filled"
      };
    }
  }]);
}();
/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */

var ui_make = function make(tagName) {
  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var el = document.createElement(tagName);
  if (Array.isArray(classNames)) {
    var _el$classList;
    (_el$classList = el.classList).add.apply(_el$classList, toConsumableArray_default()(classNames));
  } else if (classNames) {
    el.classList.add(classNames);
  }
  for (var attrName in attributes) {
    el[attrName] = attributes[attrName];
  }
  return el;
};
// EXTERNAL MODULE: ./src/svg/background.svg
var background = __webpack_require__(10);
var background_default = /*#__PURE__*/__webpack_require__.n(background);

// EXTERNAL MODULE: ./src/svg/border.svg
var border = __webpack_require__(11);
var border_default = /*#__PURE__*/__webpack_require__.n(border);

// EXTERNAL MODULE: ./src/svg/stretched.svg
var stretched = __webpack_require__(12);
var stretched_default = /*#__PURE__*/__webpack_require__.n(stretched);

// EXTERNAL MODULE: ./src/svg/thumbnail-icon.svg
var thumbnail_icon = __webpack_require__(13);
var thumbnail_icon_default = /*#__PURE__*/__webpack_require__.n(thumbnail_icon);

// CONCATENATED MODULE: ./src/tunes.js








/**
 * Working with Block Tunes
 */
var tunes_Tunes = /*#__PURE__*/function () {
  /**
   * @param {object} tune - video tool Tunes managers
   * @param {object} tune.api - Editor API
   * @param {object} tune.actions - list of user defined tunes
   * @param {Function} tune.onChange - tune toggling callback
   */
  function Tunes(_ref) {
    var api = _ref.api,
      actions = _ref.actions,
      onChange = _ref.onChange;
    classCallCheck_default()(this, Tunes);
    this.api = api;
    this.actions = actions;
    this.onChange = onChange;
    this.buttons = [];
  }

  /**
   * Available Video tunes
   *
   * @returns {{name: string, icon: string, title: string}[]}
   */
  return createClass_default()(Tunes, [{
    key: "CSS",
    get:
    /**
     * Styles
     *
     * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
     */
    function get() {
      return {
        wrapper: '',
        buttonBase: this.api.styles.settingsButton,
        button: 'video-tool__tune',
        buttonActive: this.api.styles.settingsButtonActive
      };
    }

    /**
     * Makes buttons with tunes: add background, add border, stretch video
     *
     * @param {VideoToolData} toolData - generate Elements of tunes
     * @returns {Element}
     */
  }, {
    key: "render",
    value: function render(toolData) {
      var _this = this;
      var wrapper = ui_make('div', this.CSS.wrapper);
      this.buttons = [];
      var tunes = Tunes.tunes.concat(this.actions);
      tunes.forEach(function (tune) {
        var title = _this.api.i18n.t(tune.title);
        var el = ui_make('div', [_this.CSS.buttonBase, _this.CSS.button], {
          innerHTML: tune.icon,
          title: title
        });
        el.addEventListener('click', function () {
          _this.tuneClicked(tune.name, tune.action);
        });
        el.dataset.tune = tune.name;
        el.classList.toggle(_this.CSS.buttonActive, toolData[tune.name]);
        _this.buttons.push(el);
        _this.api.tooltip.onHover(el, title, {
          placement: 'top'
        });
        wrapper.appendChild(el);
      });
      return wrapper;
    }

    /**
     * Clicks to one of the tunes
     *
     * @param {string} tuneName - clicked tune name
     * @param {Function} customFunction - function to execute on click
     */
  }, {
    key: "tuneClicked",
    value: function tuneClicked(tuneName, customFunction) {
      if (typeof customFunction === 'function') {
        if (!customFunction(tuneName)) {
          return false;
        }
      }
      var button = this.buttons.find(function (el) {
        return el.dataset.tune === tuneName;
      });
      button.classList.toggle(this.CSS.buttonActive, !button.classList.contains(this.CSS.buttonActive));
      this.onChange(tuneName);
    }
  }], [{
    key: "tunes",
    get: function get() {
      return [{
        name: 'withBorder',
        icon: border_default.a,
        title: 'With border'
      }, {
        name: 'stretched',
        icon: stretched_default.a,
        title: 'Stretch video'
      }, {
        name: 'withBackground',
        icon: background_default.a,
        title: 'With background'
      }, {
        name: 'withPoster',
        icon: thumbnail_icon_default.a,
        title: 'Poster'
      }];
    }
  }]);
}();

// EXTERNAL MODULE: ./src/svg/toolbox.svg
var toolbox = __webpack_require__(14);
var toolbox_default = /*#__PURE__*/__webpack_require__.n(toolbox);

// EXTERNAL MODULE: ./node_modules/@codexteam/ajax/dist/main.js
var main = __webpack_require__(2);
var main_default = /*#__PURE__*/__webpack_require__.n(main);

// CONCATENATED MODULE: ./src/uploader.js





/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */
var uploader_Uploader = /*#__PURE__*/function () {
  /**
   * @param {object} params - uploader module params
   * @param {VideoConfig} params.config - video tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  function Uploader(_ref) {
    var config = _ref.config,
      onUpload = _ref.onUpload,
      onUploadPoster = _ref.onUploadPoster,
      onError = _ref.onError;
    classCallCheck_default()(this, Uploader);
    this.config = config;
    this.onUpload = onUpload;
    this.onUploadPoster = onUploadPoster;
    this.onError = onError;
  }

  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  return createClass_default()(Uploader, [{
    key: "uploadSelectedFile",
    value: function uploadSelectedFile(_ref2) {
      var _this = this;
      var onPreview = _ref2.onPreview;
      var preparePreview = function preparePreview(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          onPreview(e.target.result);
        };
      };

      /**
       * Custom uploading
       * or default uploading
       */
      var upload;

      // custom uploading
      if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
        upload = main_default.a.selectFiles({
          accept: this.config.types
        }).then(function (files) {
          preparePreview(files[0]);
          var customUpload = _this.config.uploader.uploadByFile(files[0]);
          if (!isPromise(customUpload)) {
            console.warn('Custom uploader method uploadByFile should return a Promise');
          }
          return customUpload;
        });

        // default uploading
      } else {
        upload = main_default.a.transport({
          url: this.config.endpoints.byFile,
          data: this.config.additionalRequestData,
          accept: this.config.types,
          headers: this.config.additionalRequestHeaders,
          beforeSend: function beforeSend(files) {
            preparePreview(files[0]);
          },
          fieldName: this.config.field
        }).then(function (response) {
          return response.body;
        });
      }
      upload.then(function (response) {
        _this.onUpload(response);
      })["catch"](function (error) {
        _this.onError(error);
      });
    }

    /**
     * Handle clicks on the upload file button
     * Fires ajax.transport()
     *
     * @param {Function} handlePoster - callback fired when preview is ready
     */
  }, {
    key: "uploadSelectedPoster",
    value: function uploadSelectedPoster(_ref3) {
      var _this2 = this;
      var handlePoster = _ref3.handlePoster;
      var preparePreview = function preparePreview(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          handlePoster(e.target.result);
        };
      };
      var upload = main_default.a.selectFiles({
        accept: 'image/*'
      }).then(function (files) {
        preparePreview(files[0]);
        var customUpload = _this2.config.uploader.uploadByFile(files[0]);
        if (!isPromise(customUpload)) {
          console.warn('Custom uploader method uploadByFile should return a Promise');
        }
        return customUpload;
      });
      upload.then(function (response) {
        _this2.onUploadPoster(response);
      })["catch"](function (error) {
        _this2.onError(error);
      });
    }

    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     *
     * @param {string} url - video source url
     */
  }, {
    key: "uploadByUrl",
    value: function uploadByUrl(url) {
      var _this3 = this;
      var upload;

      /**
       * Custom uploading
       */
      if (this.config.uploader && typeof this.config.uploader.uploadByUrl === 'function') {
        upload = this.config.uploader.uploadByUrl(url);
        if (!isPromise(upload)) {
          console.warn('Custom uploader method uploadByUrl should return a Promise');
        }
      } else {
        /**
         * Default uploading
         */
        upload = main_default.a.post({
          url: this.config.endpoints.byUrl,
          data: Object.assign({
            url: url
          }, this.config.additionalRequestData),
          type: main_default.a.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then(function (response) {
          return response.body;
        });
      }
      upload.then(function (response) {
        _this3.onUpload(response);
      })["catch"](function (error) {
        _this3.onError(error);
      });
    }

    /**
     * Handle clicks on the upload file button
     * Fires ajax.post()
     *
     * @param {File} file - file pasted by drag-n-drop
     * @param {Function} onPreview - file pasted by drag-n-drop
     */
  }, {
    key: "uploadByFile",
    value: function uploadByFile(file, _ref4) {
      var _this4 = this;
      var onPreview = _ref4.onPreview;
      /**
       * Load file for preview
       *
       * @type {FileReader}
       */
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        onPreview(e.target.result);
      };
      var upload;

      /**
       * Custom uploading
       */
      if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
        upload = this.config.uploader.uploadByFile(file);
        if (!isPromise(upload)) {
          console.warn('Custom uploader method uploadByFile should return a Promise');
        }
      } else {
        /**
         * Default uploading
         */
        var formData = new FormData();
        formData.append(this.config.field, file);
        if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {
          Object.entries(this.config.additionalRequestData).forEach(function (_ref5) {
            var _ref6 = slicedToArray_default()(_ref5, 2),
              name = _ref6[0],
              value = _ref6[1];
            formData.append(name, value);
          });
        }
        upload = main_default.a.post({
          url: this.config.endpoints.byFile,
          data: formData,
          type: main_default.a.contentType.JSON,
          headers: this.config.additionalRequestHeaders
        }).then(function (response) {
          return response.body;
        });
      }
      upload.then(function (response) {
        _this4.onUpload(response);
      })["catch"](function (error) {
        _this4.onError(error);
      });
    }
  }]);
}();
/**
 * Check if passed object is a Promise
 *
 * @param  {*}  object - object to check
 * @returns {boolean}
 */

function isPromise(object) {
  return Promise.resolve(object) === object;
}
// CONCATENATED MODULE: ./src/index.js




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof_default()(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof_default()(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
/**
 * Video Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/video}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * video: {
 *   class: VideoTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} VideoToolData
 * @description Video Tool's input and output data format
 * @property {string} caption — video caption
 * @property {boolean} withBorder - should video be rendered with border
 * @property {boolean} withBackground - should video be rendered with background
 * @property {boolean} stretched - should video be stretched to full width of container
 * @property {boolean} withPoster - should video be stretched to full width of container
 * @property {object} file — Video file data returned from backend
 * @property {string} file.url — video URL
 */

// eslint-disable-next-line






/**
 * @typedef {object} VideoConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} endpoints.byUrl - upload by URL
 * @property {string} field - field name for uploaded video
 * @property {string} types - available mime-types
 * @property {string} captionPlaceholder - placeholder for Caption field
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload video by File
 * @property {function(string): Promise.<UploadResponseFormat>} [uploader.uploadByUrl] - method that upload video by URL
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] video source URL
 */
var src_VideoTool = /*#__PURE__*/function () {
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {VideoToolData} tool.data - previously saved data
   * @param {VideoConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  function VideoTool(_ref) {
    var _this = this;
    var data = _ref.data,
      config = _ref.config,
      api = _ref.api,
      readOnly = _ref.readOnly;
    classCallCheck_default()(this, VideoTool);
    this.api = api;
    this.readOnly = readOnly;

    /**
     * Tool's initial config
     */
    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'video',
      types: config.types || 'video/*',
      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Caption'),
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined,
      actions: config.actions || [],
      onSelectFile: config.onSelectFile
    };

    /**
     * Module for file uploading
     */
    this.uploader = new uploader_Uploader({
      config: this.config,
      onUpload: function onUpload(response) {
        return _this.onUpload(response);
      },
      onUploadPoster: function onUploadPoster(response) {
        return _this.onUploadPoster(response);
      },
      onError: function onError(error) {
        return _this.uploadingFailed(error);
      }
    });

    /**
     * Module for working with UI
     */
    this.ui = new ui_Ui({
      api: api,
      config: this.config,
      onSelectFile: function onSelectFile() {
        if (_this.config.onSelectFile) {
          _this.config.onSelectFile(_this);
        } else {
          _this.uploader.uploadSelectedFile({
            onPreview: function onPreview(src) {
              _this.ui.showPreloader(src);
            }
          });
        }
      },
      readOnly: readOnly
    });

    /**
     * Module for working with tunes
     */
    this.tunes = new tunes_Tunes({
      api: api,
      actions: this.config.actions,
      onChange: function onChange(tuneName) {
        return _this.tuneToggled(tuneName);
      }
    });

    /**
     * Set saved state
     */
    this._data = {};
    this.data = data;
  }

  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  return createClass_default()(VideoTool, [{
    key: "render",
    value: function render() {
      return this.ui.render(this.data);
    }

    /**
     * Return Block data
     *
     * @public
     *
     * @returns {VideoToolData}
     */
  }, {
    key: "save",
    value: function save() {
      var caption = this.ui.nodes.caption;
      this._data.caption = caption.innerHTML;
      return this.data;
    }

    /**
     * Makes buttons with tunes: add background, add border, stretch video
     *
     * @public
     *
     * @returns {Element}
     */
  }, {
    key: "renderSettings",
    value: function renderSettings() {
      return this.tunes.render(this.data);
    }

    /**
     * Fires after clicks on the Toolbox Video Icon
     * Initiates click on the Select File button
     *
     * @public
     */
  }, {
    key: "appendCallback",
    value: function appendCallback() {
      this.ui.nodes.fileButton.click();
    }

    /**
     * Specify paste substitutes
     *
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
     */
  }, {
    key: "onPaste",
    value: (
    /**
     * Specify paste handlers
     *
     * @public
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @param {CustomEvent} event - editor.js custom paste event
     *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
     * @returns {void}
     */
    function () {
      var _onPaste = asyncToGenerator_default()(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var video, response, file, url, _file;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = event.type;
              _context.next = _context.t0 === 'tag' ? 3 : _context.t0 === 'pattern' ? 15 : _context.t0 === 'file' ? 18 : 21;
              break;
            case 3:
              video = event.detail.data;
              /** Videos from PDF */
              if (!/^blob:/.test(video.src)) {
                _context.next = 13;
                break;
              }
              _context.next = 7;
              return fetch(video.src);
            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.blob();
            case 10:
              file = _context.sent;
              this.uploadFile(file);
              return _context.abrupt("break", 21);
            case 13:
              this.uploadUrl(video.src);
              return _context.abrupt("break", 21);
            case 15:
              url = event.detail.data;
              this.uploadUrl(url);
              return _context.abrupt("break", 21);
            case 18:
              _file = event.detail.file;
              this.uploadFile(_file);
              return _context.abrupt("break", 21);
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onPaste(_x) {
        return _onPaste.apply(this, arguments);
      }
      return onPaste;
    }()
    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */
    /**
     * Stores all Tool's data
     *
     * @private
     *
     * @param {VideoToolData} data - data in Video Tool format
     */
    )
  }, {
    key: "data",
    get:
    /**
     * Return Tool data
     *
     * @private
     *
     * @returns {VideoToolData}
     */
    function get() {
      return this._data;
    }

    /**
     * Set new video file
     *
     * @private
     *
     * @param {object} file - uploaded file data
     */,
    set: function set(data) {
      var _this2 = this;
      if (data.service) {
        this._data.service = data.service;
      }
      if (data.file) {
        this.video = data.file;
      }
      if (data.caption) {
        this._data.caption = data.caption || '';
        this.ui.fillCaption(this._data.caption);
      }
      tunes_Tunes.tunes.forEach(function (_ref2) {
        var tune = _ref2.name;
        var value;
        if (tune === 'withPoster') {
          value = typeof data[tune] !== 'undefined' ? data[tune] : false;
        } else {
          value = typeof data[tune] !== 'undefined' ? data[tune] === true || data[tune] === 'true' : false;
        }
        _this2.setTune(tune, value);
      });
    }
  }, {
    key: "video",
    set: function set(file) {
      this._data.file = file || {};
      if (file && file.url) {
        this.ui.fillVideo({
          url: file.url,
          service: this._data.service
        });
      }
    }

    /**
     * File uploading callback
     *
     * @private
     *
     * @param {UploadResponseFormat} response - uploading server response
     * @returns {void}
     */
  }, {
    key: "onUpload",
    value: function onUpload(response) {
      if (response.success && response.file) {
        this.video = response.file;
      } else {
        this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
      }
    }

    /**
     * File uploading callback
     *
     * @private
     *
     * @param {UploadResponseFormat} response - uploading server response
     * @returns {void}
     */
  }, {
    key: "onUploadPoster",
    value: function onUploadPoster(response) {
      if (response.success && response.file) {
        this.data = {
          withPoster: response.file.url
        };
      } else {
        this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
      }
    }

    /**
     * Handle uploader errors
     *
     * @private
     * @param {string} errorText - uploading error text
     * @returns {void}
     */
  }, {
    key: "uploadingFailed",
    value: function uploadingFailed(errorText) {
      console.log('Video Tool: uploading failed because of', errorText);
      this.api.notifier.show({
        message: this.api.i18n.t('Couldn’t upload video. Please try another.'),
        style: 'error'
      });
      this.ui.hidePreloader();
    }

    /**
     * Callback fired when Block Tune is activated
     *
     * @private
     *
     * @param {string} tuneName - tune that has been clicked
     * @returns {void}
     */
  }, {
    key: "tuneToggled",
    value: function tuneToggled(tuneName) {
      var _this3 = this;
      if (tuneName === 'withPoster') {
        if (!this._data[tuneName]) {
          // chưa có poster
          this.uploader.uploadSelectedPoster({
            handlePoster: function handlePoster(src) {
              if (_this3.ui.nodes.videoEl) {
                _this3.ui.nodes.videoEl.setAttribute('poster', src);
              }
            },
            types: 'image/*'
          });
        } else {
          // đã có poster
          this.setTune(tuneName, false);
        }
      } else {
        // inverse tune state
        this.setTune(tuneName, !this._data[tuneName]);
      }
    }

    /**
     * Set one tune
     *
     * @param {string} tuneName - {@link Tunes.tunes}
     * @param {boolean} value - tune state
     * @returns {void}
     */
  }, {
    key: "setTune",
    value: function setTune(tuneName, value) {
      var _this4 = this;
      this._data[tuneName] = value;
      this.ui.applyTune(tuneName, value);
      if (tuneName === 'stretched') {
        /**
         * Wait until the API is ready
         */
        Promise.resolve().then(function () {
          var blockId = _this4.api.blocks.getCurrentBlockIndex();
          _this4.api.blocks.stretchBlock(blockId, value);
        })["catch"](function (err) {
          console.error(err);
        });
      }
    }

    /**
     * Show preloader and upload video file
     *
     * @param {File} file - file that is currently uploading (from paste)
     * @returns {void}
     */
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      var _this5 = this;
      this.uploader.uploadByFile(file, {
        onPreview: function onPreview(src) {
          _this5.ui.showPreloader(src);
        }
      });
    }

    /**
     * Show preloader and upload video by target url
     *
     * @param {string} url - url pasted
     * @returns {void}
     */
  }, {
    key: "uploadUrl",
    value: function uploadUrl(url) {
      this.ui.showPreloader(url);
      this.uploader.uploadByUrl(url);
    }
  }], [{
    key: "isReadOnlySupported",
    get:
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    function get() {
      return true;
    }

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
  }, {
    key: "toolbox",
    get: function get() {
      return {
        icon: toolbox_default.a,
        title: 'Video'
      };
    }
  }, {
    key: "pasteConfig",
    get: function get() {
      return {
        /**
         * Paste HTML into Editor
         */
        tags: ['video'],
        /**
         * Paste URL of video into the Editor
         */
        patterns: {
          video: /https?:\/\/\S+\.(mp4)$/i
        },
        /**
         * Drag n drop file from into the Editor
         */
        files: {
          mimeTypes: ['video/*']
        }
      };
    }
  }]);
}();


/***/ })
/******/ ])["default"];
});