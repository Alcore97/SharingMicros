//@pilet v:1(pr_MF2)
(function webpackUniversalModuleDefinition(root, factory) {
	//
function define(d,k){delete pr_MF2_chunks;(typeof document!=='undefined')&&(document.currentScript.app=k.apply(null,d.map(window.pr_MF2)));}define.amd=!0;
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-router-dom"], factory);
	else if(typeof exports === 'object')
		exports["MF2"] = factory(require("react"), require("react-router-dom"));
	else
		root["MF2"] = factory(root["react"], root["react-router-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/piral-cli-webpack/lib/set-path.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-cli-webpack/lib/set-path.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function computePath() {
    try {
        throw new Error();
    }
    catch (t) {
        const e = ('' + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
        if (e) {
            return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/, '$1') + '/';
        }
    }
    return '/';
}
// tslint:disable-next-line:variable-name
const __bundleUrl__ = computePath();
__webpack_require__.p = __bundleUrl__;
//# sourceMappingURL=set-path.js.map

/***/ }),

/***/ "./src/LinkToMF2.tsx":
/*!***************************!*\
  !*** ./src/LinkToMF2.tsx ***!
  \***************************/
/*! exports provided: LinkToMF2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkToMF2", function() { return LinkToMF2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


var LinkToMF2 = function LinkToMF2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/MF1Page"
  }, "My MF2");
};

/***/ }),

/***/ "./src/MF2Page.tsx":
/*!*************************!*\
  !*** ./src/MF2Page.tsx ***!
  \*************************/
/*! exports provided: MF2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MF2Page", function() { return MF2Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var _window = window,
    worky = _window.worky;
var MF2Page = function MF2Page() {
  var handleSubmit = function handleSubmit(e) {
    var _a;

    e.preventDefault();
    var form = e.target;
    var input = (_a = form === null || form === void 0 ? void 0 : form.elements) === null || _a === void 0 ? void 0 : _a.something;
    worky.say(input.value);
    form.reset();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "MF"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, "Microfrontend 2\uFE0F\u20E3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u2328\uFE0F Use this form to communicate with the other microfrontend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    name: "something",
    placeholder: "Type something in here"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    type: "submit"
  }, "Communicate!")));
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
!(function webpackMissingModule() { var e = new Error("Cannot find module './App.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MF2Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MF2Page */ "./src/MF2Page.tsx");
/* harmony import */ var _LinkToMF2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkToMF2 */ "./src/LinkToMF2.tsx");



function setup(app) {
  app.registerPage('/MF2Page', _MF2Page__WEBPACK_IMPORTED_MODULE_1__["MF2Page"]);
  app.registerMenu('/LinkToMF2', _LinkToMF2__WEBPACK_IMPORTED_MODULE_2__["LinkToMF2"]);
}

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./node_modules/piral-cli-webpack/lib/set-path ./src/index.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Everis\MicroFrontEnds\Sharing Microfrontends\Web Worker\MF2\node_modules\piral-cli-webpack\lib\set-path */"./node_modules/piral-cli-webpack/lib/set-path.js");
module.exports = __webpack_require__(/*! ./src\index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map