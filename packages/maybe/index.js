/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Id :: Any -> Id
const Id = x => ({
  // chain :: ƒ -> Monad
  chain: f => f(x),
  // map :: ƒ -> Id
  map: f => Id(f(x)),
  // fold :: ƒ -> Any
  fold: f => f(x),
  // inspect :: Nothing -> String
  inspect: () => `Id(${x})`
})

// of :: Any -> Id
Id.of = x => Id(x)

/* harmony default export */ __webpack_exports__["a"] = Id;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// isNull :: Any -> Boolean
const isNull =
  value =>
    value === null || value === undefined

/* harmony default export */ __webpack_exports__["a"] = isNull;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Id__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_null__ = __webpack_require__(1);



// Nothing :: _ -> Nothing
const Nothing = () => ({
  // chain :: ƒ -> Nothing
  chain: f => Nothing(),
  // map :: ƒ -> Nothing
  map: f => Nothing(),
  // else :: ƒ -> Maybe
  else: f => Maybe(f()),
  // fold :: ƒ -> Any
  fold: f => f(),
  // inspect :: ƒ -> String
  inspect: () => `Nothing()`
})

// Maybe :: Any -> Maybe
const Maybe = x =>
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__Id__["a" /* default */])(x)
    .map(__WEBPACK_IMPORTED_MODULE_1__is_null__["a" /* default */])
    .fold(nulled => nulled
      ? Nothing()
      : ({
        // chain :: ƒ -> Any
        chain: f => f(x),
        // map :: ƒ -> Maybe
        map: f => Maybe(f(x)),
        // fold :: ƒ -> Any
        fold: f => f(x),
        // else :: ƒ -> Maybe
        else: f => Maybe(x),
        // inspect :: Nothing -> String
        inspect: () => `Maybe(${x})`
      }))

// Any -> Maybe
Maybe.of = x => Maybe(x)

/* harmony default export */ __webpack_exports__["default"] = Maybe;

/***/ })
/******/ ]);