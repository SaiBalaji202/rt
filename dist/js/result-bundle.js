/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/result.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/global_declaration.js":
/*!**************************************!*\
  !*** ./src/js/global_declaration.js ***!
  \**************************************/
/*! exports provided: localStoragePrefix, resultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localStoragePrefix\", function() { return localStoragePrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resultPage\", function() { return resultPage; });\nvar resultPage = 'result.html';\nvar localStoragePrefix = 'rt';\n\n\n//# sourceURL=webpack:///./src/js/global_declaration.js?");

/***/ }),

/***/ "./src/js/res_global_declaration.js":
/*!******************************************!*\
  !*** ./src/js/res_global_declaration.js ***!
  \******************************************/
/*! exports provided: cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cards\", function() { return cards; });\nvar cards = document.querySelector('.cards');\n\n\n//# sourceURL=webpack:///./src/js/res_global_declaration.js?");

/***/ }),

/***/ "./src/js/result.js":
/*!**************************!*\
  !*** ./src/js/result.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _res_global_declaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res_global_declaration.js */ \"./src/js/res_global_declaration.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n\n\nvar totalQueries = 0;\n\nvar loadResult = function loadResult() {\n  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getJSONData\"])('result');\n};\n\nvar getTotalQueries = function getTotalQueries(obj) {\n  return obj['queries'].count;\n};\n\nvar iterateOverData = function iterateOverData(obj) {\n  totalQueries = getTotalQueries(obj);\n\n  for (var doc in obj) {\n    if (doc.toUpperCase() !== 'QUERIES') {\n      var cntQueries = obj[doc].count;\n      console.log(doc.toUpperCase());\n      console.log(getPercentage(totalQueries - cntQueries, totalQueries));\n      createCard(doc, getPercentage(totalQueries - cntQueries, totalQueries));\n    }\n  }\n};\n\nvar createCard = function createCard(header, rankPercentage) {\n  var card = document.createElement('div');\n  card.setAttribute('class', 'card');\n  card.appendChild(createCardHeader(header));\n  card.appendChild(addCircularProgressBar(rankPercentage));\n  _res_global_declaration_js__WEBPACK_IMPORTED_MODULE_0__[\"cards\"].appendChild(card);\n};\n\nvar createCardHeader = function createCardHeader(headerText) {\n  var cardHeader = document.createElement('h4');\n  var cardHeaderText = document.createTextNode(headerText.toUpperCase());\n  cardHeader.appendChild(cardHeaderText);\n  return cardHeader;\n};\n\nvar addCircularProgressBar = function addCircularProgressBar(percentageValue) {\n  var progress = document.createElement('div');\n  progress.classList.add('c100'); // console.log(`p${percentageValue}`);\n\n  progress.classList.add(\"p\".concat(percentageValue));\n  if (percentageValue >= 80) progress.classList.add('green');else if (percentageValue >= 50) progress.classList.add('orange');else if (percentageValue >= 10) progress.classList.add('red');else {\n    progress.classList.add('red');\n    progress.classList.add('dark');\n  }\n  var progressSpan = document.createElement('span');\n  var progressText = document.createTextNode(\"\".concat(percentageValue, \"%\"));\n  progressSpan.appendChild(progressText);\n  var progressSlice = document.createElement('div');\n  progressSlice.setAttribute('class', 'slice');\n  var progressBar = document.createElement('div');\n  progressBar.setAttribute('class', 'bar');\n  var progressFill = document.createElement('div');\n  progressFill.setAttribute('class', 'fill');\n  progressSlice.appendChild(progressBar);\n  progressSlice.appendChild(progressFill);\n  progress.appendChild(progressSpan);\n  progress.appendChild(progressSlice);\n  return progress;\n};\n\nvar getPercentage = function getPercentage(x, y) {\n  return Math.round(x / y * 100);\n};\n\niterateOverData(loadResult()); // <div class=\"c100 p80 orange dark small\">\n//   <span>100%</span>\n//       <div class=\"slice\">\n//          <div class=\"bar\"></div>\n//           <div class=\"fill\"></div>\n//       </div>\n// </div>\n\n//# sourceURL=webpack:///./src/js/result.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: saveJSONData, saveData, getJSONData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveJSONData\", function() { return saveJSONData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveData\", function() { return saveData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getJSONData\", function() { return getJSONData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony import */ var _global_declaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global_declaration.js */ \"./src/js/global_declaration.js\");\n\n\nvar saveJSONData = function saveJSONData(key, value) {\n  return window.localStorage.setItem(_global_declaration_js__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1), JSON.stringify(value));\n};\n\nvar saveData = function saveData(key, value) {\n  return window.localStorage.setItem(_global_declaration_js__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1), value);\n};\n\nvar getJSONData = function getJSONData(key) {\n  return JSON.parse(window.localStorage.getItem(_global_declaration_js__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1)));\n};\n\nvar getData = function getData(key) {\n  return window.localStorage.setItem(_global_declaration_js__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1));\n};\n\n // queries.forEach((query) => {\n//     if(query.source[0].hasOwnProperty('queryOperation')) {\n//         if(query.source[0].queryOperation.hasOwnProperty('setOperation')) {\n//             if (query.source[0].queryOperation.setOperation.trim() === 'UNION') {\n//                 ++cnt;\n//                 arrUnionQueries.push(query.$.name);\n//             }\n//         }\n//     }\n// });\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });