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

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: createCard, createCardHeader, addQueryValueToCPB, addCircularProgressBar, cardClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCard\", function() { return createCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCardHeader\", function() { return createCardHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addQueryValueToCPB\", function() { return addQueryValueToCPB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCircularProgressBar\", function() { return addCircularProgressBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardClick\", function() { return cardClick; });\n/* harmony import */ var _res_global_declaration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res_global_declaration */ \"./src/js/res_global_declaration.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\n\nvar createCard = function createCard(header, rankPercentage, isTotQuery) {\n  var card = document.createElement('div');\n  card.setAttribute('class', 'card');\n  card.appendChild(createCardHeader(header));\n  if (!isTotQuery) card.appendChild(addCircularProgressBar(rankPercentage));else card.appendChild(addQueryValueToCPB(rankPercentage));\n  card.addEventListener('click', cardClick, true);\n  _res_global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"cards\"].appendChild(card);\n};\n\nvar createCardHeader = function createCardHeader(headerText) {\n  var cardHeader = document.createElement('h4');\n  var cardHeaderText = document.createTextNode(headerText.toUpperCase());\n  cardHeader.appendChild(cardHeaderText);\n  cardHeader.addEventListener('click', headerClick);\n  return cardHeader;\n};\n\nvar addQueryValueToCPB = function addQueryValueToCPB(queryCount) {\n  var progress = document.createElement('div');\n  progress.classList.add('c100'); // console.log(`p${percentageValue}`);\n\n  progress.classList.add('p100');\n  progress.classList.add('green');\n  var progressSpan = document.createElement('span');\n  var progressText = document.createTextNode(\"\".concat(queryCount, \"Q\"));\n  progressSpan.appendChild(progressText);\n  var progressSlice = document.createElement('div');\n  progressSlice.setAttribute('class', 'slice');\n  var progressBar = document.createElement('div');\n  progressBar.setAttribute('class', 'bar');\n  var progressFill = document.createElement('div');\n  progressFill.setAttribute('class', 'fill');\n  progressSlice.appendChild(progressBar);\n  progressSlice.appendChild(progressFill);\n  progress.appendChild(progressSpan);\n  progress.appendChild(progressSlice);\n  return progress;\n};\n\nvar addCircularProgressBar = function addCircularProgressBar(percentageValue) {\n  var progress = document.createElement('div');\n  progress.classList.add('c100'); // console.log(`p${percentageValue}`);\n\n  progress.classList.add(\"p\".concat(percentageValue));\n  if (percentageValue >= 80) progress.classList.add('green');else if (percentageValue >= 50) progress.classList.add('orange');else if (percentageValue >= 10) progress.classList.add('red');else {\n    progress.classList.add('red');\n    progress.classList.add('dark');\n  }\n  var progressSpan = document.createElement('span');\n  var progressText = document.createTextNode(\"\".concat(percentageValue, \"%\"));\n  progressSpan.appendChild(progressText);\n  var progressSlice = document.createElement('div');\n  progressSlice.setAttribute('class', 'slice');\n  var progressBar = document.createElement('div');\n  progressBar.setAttribute('class', 'bar');\n  var progressFill = document.createElement('div');\n  progressFill.setAttribute('class', 'fill');\n  progressSlice.appendChild(progressBar);\n  progressSlice.appendChild(progressFill);\n  progress.appendChild(progressSpan);\n  progress.appendChild(progressSlice);\n  return progress;\n};\n\nvar cardClick = function cardClick(e) {\n  e.stopPropagation();\n  alert(e.target.className);\n  var card = e.target;\n\n  while (!card.classList.contains('card')) {\n    card = card.parentElement;\n  }\n\n  console.log(card);\n  console.log(card.children);\n  console.log(card.children[0].textContent);\n  var selectedCardName = card.children[0].textContent.toLowerCase();\n  var resultObj = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getJSONData\"])('result');\n  var queries = resultObj[selectedCardName].queries;\n  console.log(queries);\n};\n\nvar headerClick = function headerClick(e) {\n  alert('Header Clicked');\n};\n\n\n\n//# sourceURL=webpack:///./src/js/card.js?");

/***/ }),

/***/ "./src/js/global_declaration.js":
/*!**************************************!*\
  !*** ./src/js/global_declaration.js ***!
  \**************************************/
/*! exports provided: localStoragePrefix, resultPage, navMenus, navMenu, nm, backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"localStoragePrefix\", function() { return localStoragePrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resultPage\", function() { return resultPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMenus\", function() { return navMenus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMenu\", function() { return navMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nm\", function() { return nm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backdrop\", function() { return backdrop; });\nvar navMenus = document.querySelector('.nav-menus');\nvar navMenu = document.querySelector('.nav-menu');\nvar nm = document.querySelector('#nav-menu-icon');\nvar backdrop = document.querySelector('.backdrop');\nvar resultPage = 'result.html';\nvar localStoragePrefix = 'rt';\n\n\n//# sourceURL=webpack:///./src/js/global_declaration.js?");

/***/ }),

/***/ "./src/js/process_result.js":
/*!**********************************!*\
  !*** ./src/js/process_result.js ***!
  \**********************************/
/*! exports provided: loadResult, getTotalQueries, iterateOverData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadResult\", function() { return loadResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTotalQueries\", function() { return getTotalQueries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterateOverData\", function() { return iterateOverData; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/js/card.js\");\n\n\n\nvar loadResult = function loadResult() {\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getJSONData\"])('result');\n};\n\nvar getTotalQueries = function getTotalQueries(obj) {\n  return obj['queries'].count;\n};\n\nvar iterateOverData = function iterateOverData(obj) {\n  var totalQueries = getTotalQueries(obj);\n\n  for (var doc in obj) {\n    if (doc.toUpperCase() !== 'QUERIES') {\n      var cntQueries = obj[doc].count;\n      console.log(doc.toUpperCase());\n      console.log(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getPercentage\"])(totalQueries - cntQueries, totalQueries));\n      Object(_card__WEBPACK_IMPORTED_MODULE_1__[\"createCard\"])(doc, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getPercentage\"])(totalQueries - cntQueries, totalQueries, false));\n    } else {\n      Object(_card__WEBPACK_IMPORTED_MODULE_1__[\"createCard\"])(doc, obj[doc].count, true);\n    }\n  }\n\n  return totalQueries;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/process_result.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_declaration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global_declaration */ \"./src/js/global_declaration.js\");\n/* harmony import */ var _process_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process_result */ \"./src/js/process_result.js\");\n\n\nvar totalQueries = Object(_process_result__WEBPACK_IMPORTED_MODULE_1__[\"iterateOverData\"])(Object(_process_result__WEBPACK_IMPORTED_MODULE_1__[\"loadResult\"])());\n_global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"navMenu\"].addEventListener('click', function () {\n  // alert('Clicked');\n  _global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"backdrop\"].style.display = \"block\";\n  _global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"navMenus\"].style.display = \"flex\";\n});\n\n//# sourceURL=webpack:///./src/js/result.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: saveJSONData, saveData, getJSONData, getData, getPercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveJSONData\", function() { return saveJSONData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveData\", function() { return saveData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getJSONData\", function() { return getJSONData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercentage\", function() { return getPercentage; });\n/* harmony import */ var _global_declaration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global_declaration */ \"./src/js/global_declaration.js\");\n\n\nvar saveJSONData = function saveJSONData(key, value) {\n  return window.localStorage.setItem(_global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1), JSON.stringify(value));\n};\n\nvar saveData = function saveData(key, value) {\n  return window.localStorage.setItem(_global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1), value);\n};\n\nvar getJSONData = function getJSONData(key) {\n  return JSON.parse(window.localStorage.getItem(_global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1)));\n};\n\nvar getData = function getData(key) {\n  return window.localStorage.setItem(_global_declaration__WEBPACK_IMPORTED_MODULE_0__[\"localStoragePrefix\"] + key.charAt(0).toUpperCase() + key.substr(1));\n};\n\nvar getPercentage = function getPercentage(x, y) {\n  return Math.round(x / y * 100);\n};\n\n // queries.forEach((query) => {\n//     if(query.source[0].hasOwnProperty('queryOperation')) {\n//         if(query.source[0].queryOperation.hasOwnProperty('setOperation')) {\n//             if (query.source[0].queryOperation.setOperation.trim() === 'UNION') {\n//                 ++cnt;\n//                 arrUnionQueries.push(query.$.name);\n//             }\n//         }\n//     }\n// });\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });