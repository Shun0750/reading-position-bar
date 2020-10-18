/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 61:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _eventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventHandler */ "./src/eventHandler.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");




HTMLElement.prototype.addReadingPositionBar = function (options) {
  _dom__WEBPACK_IMPORTED_MODULE_2__.default.createDoms(this);
  _eventHandler__WEBPACK_IMPORTED_MODULE_0__.default.setEvent();

  if ('bgColor' in options) {
    _dom__WEBPACK_IMPORTED_MODULE_2__.default.setBgColor(options.bgColor);
  }

  if ('showText' in options && options.showText === false) {
    _dom__WEBPACK_IMPORTED_MODULE_2__.default.disableText();
  }

  if ('barWidth' in options) {
    _dom__WEBPACK_IMPORTED_MODULE_2__.default.setBarWidth(options.barWidth);
  }

  if ('right' in options) {
    _dom__WEBPACK_IMPORTED_MODULE_2__.default.setBarRight(options.right);
  }

  if ('zIndex' in options) {
    _dom__WEBPACK_IMPORTED_MODULE_2__.default.setZIndex(options.zIndex);
  }
};

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Dom
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom = /*#__PURE__*/function () {
  function Dom() {
    _classCallCheck(this, Dom);
  }

  _createClass(Dom, null, [{
    key: "createDoms",
    value: function createDoms(elem) {
      var wrapper = document.createElement('div');
      wrapper.className = 'reading-position-bar__wrapper';
      wrapper.style.setProperty("--barWidth", '10px');
      wrapper.style.setProperty("--barRight", '0');
      wrapper.style.setProperty("--zIndex", '1000');
      var indicator = document.createElement('div');
      indicator.className = 'reading-position-bar__wrapper__indicator';
      indicator.style.setProperty("--bgColor", "black");
      wrapper.append(indicator);
      var text = document.createElement('div');
      text.className = 'reading-position-bar__wrapper__text';
      text.style.setProperty("--bgColor", "black");
      wrapper.append(text);
      elem.setAttribute('data-reading-position-bar-wrapper', 'true');
      elem.append(wrapper);
    }
  }, {
    key: "setBgColor",
    value: function setBgColor(color) {
      var indicator = document.querySelector(".reading-position-bar__wrapper__indicator");
      indicator.style.setProperty("--bgColor", color);
      var text = document.querySelector(".reading-position-bar__wrapper__text");
      text.style.setProperty("--bgColor", color);
    }
  }, {
    key: "disableText",
    value: function disableText() {
      var text = document.querySelector(".reading-position-bar__wrapper__text");
      text.parentNode.removeChild(text);
    }
  }, {
    key: "setBarWidth",
    value: function setBarWidth(width) {
      var barWidth = parseInt(width);
      var wrapper = document.querySelector(".reading-position-bar__wrapper");
      wrapper.style.setProperty("--barWidth", barWidth + 'px');
    }
  }, {
    key: "setBarRight",
    value: function setBarRight(right) {
      var barRight = parseInt(right);
      var wrapper = document.querySelector(".reading-position-bar__wrapper");
      wrapper.style.setProperty("--barRight", barRight + 'px');
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(zIndex) {
      var barZIndex = parseInt(zIndex);
      var wrapper = document.querySelector(".reading-position-bar__wrapper");
      wrapper.style.setProperty("--zIndex", barZIndex);
    }
  }]);

  return Dom;
}();



/***/ }),

/***/ "./src/eventHandler.js":
/*!*****************************!*\
  !*** ./src/eventHandler.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ EventHandler
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EventHandler = /*#__PURE__*/function () {
  function EventHandler() {
    _classCallCheck(this, EventHandler);
  }

  _createClass(EventHandler, null, [{
    key: "setEvent",
    value: function setEvent() {
      document.addEventListener("scroll", function () {
        var parent = document.querySelector("[data-reading-position-bar-wrapper=true]");
        var indicator = document.querySelector(".reading-position-bar__wrapper__indicator");

        if (!indicator || typeof indicator === 'undefined') {
          return;
        } // 対象DOMの位置を取得


        var elementYPos = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getElementYPos(parent);
        var wrapper = document.querySelector(".reading-position-bar__wrapper");
        wrapper.style.top = elementYPos + 'px';
        wrapper.style.display = 'block';
        var readRate = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getReadRate(parent);
        var elemBottomY = parent.offsetTop + parent.getBoundingClientRect().height;
        var barHeight = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getBarHeight(readRate, elementYPos, elemBottomY);
        indicator.style.height = barHeight + "px";
        var text = document.querySelector(".reading-position-bar__wrapper__text");
        text.innerHTML = readRate + "%";

        if (barHeight === 0) {
          text.style.marginTop = "-32px";
        } else {
          text.style.marginTop = "-20px";
        }

        if (readRate === 100) {
          wrapper.style.height = barHeight + "px";
        } else {
          wrapper.style.height = "100%";
        }
      });
    }
  }]);

  return EventHandler;
}();



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Utils
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getReadRate",
    value: function getReadRate(elem) {
      var windowHeight = window.innerHeight;
      var yOffSet = window.pageYOffset;
      var pageHeight = Math.max(elem.scrollHeight, elem.offsetHeight);
      var rate = (window.scrollY + windowHeight - elem.offsetTop) * 100 / pageHeight;
      var intRate = parseInt(rate.toString(), 10);

      if (intRate > 100) {
        intRate = 100;
      }

      return intRate;
    }
  }, {
    key: "getBarHeight",
    value: function getBarHeight(rate, elemYPos, elemBottomY) {
      var elemVisibleHeight = window.innerHeight - elemYPos;
      var height = elemVisibleHeight * rate / 100;
      var intHeight = parseInt(height.toString(), 10);

      if (window.innerHeight + window.scrollY > elemBottomY) {
        intHeight -= parseInt(window.innerHeight + window.scrollY - elemBottomY, 10);
      }

      if (intHeight < 0) {
        intHeight = 0;
      }

      return intHeight;
    }
  }, {
    key: "getElementYPos",
    value: function getElementYPos(elem) {
      var relativeY = elem.offsetTop - window.scrollY;

      if (relativeY < 0) {
        relativeY = 0;
      }

      return relativeY;
    }
  }]);

  return Utils;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scss/style.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scss/style.scss ***!
  \******************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  barRight: 0;\n  bgColor: rebeccapurple;\n  barWidth: 8px;\n  zIndex: 1000;\n}\n\n.reading-position-bar__wrapper {\n  display: none;\n  position: fixed;\n  right: var(--barRight);\n  top: 0;\n  width: var(--barWidth);\n  height: 100%;\n  background: #DDD;\n  z-index: 1000;\n}\n\n.reading-position-bar__wrapper__indicator {\n  background: var(--bgColor);\n  height: 0;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.reading-position-bar__wrapper__text {\n  position: absolute;\n  right: 0px;\n  margin-top: -20px;\n  padding: 5px;\n  width: 40px;\n  background: var(--bgColor);\n  color: white;\n  text-align: right;\n  font-size: 12px;\n}\n", "",{"version":3,"sources":["webpack://src/scss/style.scss"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;;AAGE;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,MAAM;EACN,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AAAjB;;AAEI;EACE,0BAA0B;EAC1B,SAAS;EACT,8BAA8B;EAC9B,+BAA+B;AACrC;;AAEI;EACE,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACrB","sourcesContent":[":root {\n  barRight: 0;\n  bgColor: rebeccapurple;\n  barWidth: 8px;\n  zIndex: 1000;\n}\n\n.reading-position-bar {\n  &__wrapper {\n    display: none;\n    position: fixed;\n    right: var(--barRight);\n    top: 0;\n    width: var(--barWidth);\n    height: 100%;\n    background: #DDD;\n    z-index: 1000;\n\n    &__indicator {\n      background: var(--bgColor);\n      height: 0;\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px;\n    }\n\n    &__text {\n      position: absolute;\n      right: 0px;\n      margin-top: -20px;\n      padding: 5px;\n      width: 40px;\n      background: var(--bgColor);\n      color: white;\n      text-align: right;\n      font-size: 12px;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scss/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/NzYwMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfcyIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJpc0FycmF5IiwiX2l0ZW0iLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiSFRNTEVsZW1lbnQiLCJhZGRSZWFkaW5nUG9zaXRpb25CYXIiLCJvcHRpb25zIiwiRG9tIiwiRXZlbnRIYW5kbGVyIiwiYmdDb2xvciIsInNob3dUZXh0IiwiYmFyV2lkdGgiLCJyaWdodCIsInpJbmRleCIsImVsZW0iLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImluZGljYXRvciIsImFwcGVuZCIsInRleHQiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ3aWR0aCIsInBhcnNlSW50IiwiYmFyUmlnaHQiLCJiYXJaSW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50IiwiZWxlbWVudFlQb3MiLCJVdGlscyIsInRvcCIsImRpc3BsYXkiLCJyZWFkUmF0ZSIsImVsZW1Cb3R0b21ZIiwib2Zmc2V0VG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiYmFySGVpZ2h0IiwiaW5uZXJIVE1MIiwibWFyZ2luVG9wIiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ5T2ZmU2V0IiwicGFnZVlPZmZzZXQiLCJwYWdlSGVpZ2h0IiwiTWF0aCIsIm1heCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsInJhdGUiLCJzY3JvbGxZIiwiaW50UmF0ZSIsImVsZW1ZUG9zIiwiZWxlbVZpc2libGVIZWlnaHQiLCJpbnRIZWlnaHQiLCJyZWxhdGl2ZVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQVVDLHNCQUFWLEVBQWtDO0FBQ2pELE1BQUlDLElBQUksR0FBRyxFQUFYLENBRGlELENBQ2xDOztBQUVmQSxNQUFJLENBQUNDLFFBQUwsR0FBZ0IsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQyxXQUFPLEtBQUtDLEdBQUwsQ0FBUyxVQUFVQyxJQUFWLEVBQWdCO0FBQzlCLFVBQUlDLE9BQU8sR0FBR0wsc0JBQXNCLENBQUNJLElBQUQsQ0FBcEM7O0FBRUEsVUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO0FBQ1gsZUFBTyxVQUFVRSxNQUFWLENBQWlCRixJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixJQUExQixFQUFnQ0UsTUFBaEMsQ0FBdUNELE9BQXZDLEVBQWdELEdBQWhELENBQVA7QUFDRDs7QUFFRCxhQUFPQSxPQUFQO0FBQ0QsS0FSTSxFQVFKRSxJQVJJLENBUUMsRUFSRCxDQUFQO0FBU0QsR0FWRCxDQUhpRCxDQWE5QztBQUNIOzs7QUFHQU4sTUFBSSxDQUFDTyxDQUFMLEdBQVMsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJyZWFkaW5nLXBvc2l0aW9uLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9ldmVudEhhbmRsZXInO1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5hZGRSZWFkaW5nUG9zaXRpb25CYXIgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBEb20uY3JlYXRlRG9tcyh0aGlzKVxuICAgIEV2ZW50SGFuZGxlci5zZXRFdmVudCgpXG5cbiAgICBpZiAoJ2JnQ29sb3InIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRG9tLnNldEJnQ29sb3Iob3B0aW9ucy5iZ0NvbG9yKVxuICAgIH1cbiAgICBpZiAoJ3Nob3dUZXh0JyBpbiBvcHRpb25zICYmIG9wdGlvbnMuc2hvd1RleHQgPT09IGZhbHNlKSB7XG4gICAgICAgIERvbS5kaXNhYmxlVGV4dCgpXG4gICAgfVxuICAgIGlmICgnYmFyV2lkdGgnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRG9tLnNldEJhcldpZHRoKG9wdGlvbnMuYmFyV2lkdGgpXG4gICAgfVxuICAgIGlmICgncmlnaHQnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRG9tLnNldEJhclJpZ2h0KG9wdGlvbnMucmlnaHQpXG4gICAgfVxuICAgIGlmICgnekluZGV4JyBpbiBvcHRpb25zKSB7XG4gICAgICAgIERvbS5zZXRaSW5kZXgob3B0aW9ucy56SW5kZXgpXG4gICAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XG4gICAgc3RhdGljIGNyZWF0ZURvbXMgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3JlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyJ1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXJXaWR0aFwiLCAnMTBweCcpXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJhclJpZ2h0XCIsICcwJylcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tekluZGV4XCIsICcxMDAwJylcblxuICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbmRpY2F0b3IuY2xhc3NOYW1lID0gJ3JlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX19pbmRpY2F0b3InXG4gICAgICAgIGluZGljYXRvci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdDb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZChpbmRpY2F0b3IpXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gJ3JlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX190ZXh0J1xuICAgICAgICB0ZXh0LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ0NvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKHRleHQpXG5cbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhZGluZy1wb3NpdGlvbi1iYXItd3JhcHBlcicsJ3RydWUnKVxuICAgICAgICBlbGVtLmFwcGVuZCh3cmFwcGVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRCZ0NvbG9yIChjb2xvcikge1xuICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX19pbmRpY2F0b3JcIilcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ0NvbG9yXCIsIGNvbG9yKVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX190ZXh0XCIpXG4gICAgICAgIHRleHQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnQ29sb3JcIiwgY29sb3IpXG4gICAgfVxuXG4gICAgc3RhdGljIGRpc2FibGVUZXh0ICgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJfX3RleHRcIilcbiAgICAgICAgdGV4dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRleHQpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhcldpZHRoICh3aWR0aCkge1xuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHBhcnNlSW50KHdpZHRoKVxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlclwiKVxuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXJXaWR0aFwiLCBiYXJXaWR0aCArICdweCcpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhclJpZ2h0IChyaWdodCkge1xuICAgICAgICBjb25zdCBiYXJSaWdodCA9IHBhcnNlSW50KHJpZ2h0KVxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlclwiKVxuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXJSaWdodFwiLCBiYXJSaWdodCArICdweCcpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldFpJbmRleCAoekluZGV4KSB7XG4gICAgICAgIGNvbnN0IGJhclpJbmRleCA9IHBhcnNlSW50KHpJbmRleClcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJcIilcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tekluZGV4XCIsIGJhclpJbmRleClcbiAgICB9XG59IiwiaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xuICAgIHN0YXRpYyBzZXRFdmVudCAoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXJlYWRpbmctcG9zaXRpb24tYmFyLXdyYXBwZXI9dHJ1ZV1cIilcblxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlcl9faW5kaWNhdG9yXCIpXG4gICAgICAgICAgICBpZighaW5kaWNhdG9yIHx8IHR5cGVvZiBpbmRpY2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWvvuixoURPTeOBruS9jee9ruOCkuWPluW+l1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFlQb3MgPSBVdGlscy5nZXRFbGVtZW50WVBvcyhwYXJlbnQpXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlclwiKVxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBlbGVtZW50WVBvcyArICdweCdcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgICAgICAgICAgY29uc3QgcmVhZFJhdGUgPSBVdGlscy5nZXRSZWFkUmF0ZShwYXJlbnQpXG4gICAgICAgICAgICBjb25zdCBlbGVtQm90dG9tWSA9IHBhcmVudC5vZmZzZXRUb3AgKyBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgICAgICBjb25zdCBiYXJIZWlnaHQgPSBVdGlscy5nZXRCYXJIZWlnaHQocmVhZFJhdGUsIGVsZW1lbnRZUG9zLCBlbGVtQm90dG9tWSlcbiAgICAgICAgICAgIGluZGljYXRvci5zdHlsZS5oZWlnaHQgPSBiYXJIZWlnaHQgKyBcInB4XCJcblxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJfX3RleHRcIilcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gcmVhZFJhdGUgKyBcIiVcIlxuICAgICAgICAgICAgaWYgKGJhckhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRleHQuc3R5bGUubWFyZ2luVG9wID0gXCItMzJweFwiXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dC5zdHlsZS5tYXJnaW5Ub3AgPSBcIi0yMHB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFkUmF0ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBiYXJIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgc3RhdGljIGdldFJlYWRSYXRlIChlbGVtKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICBjb25zdCB5T2ZmU2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgcGFnZUhlaWdodCA9IE1hdGgubWF4KCBlbGVtLnNjcm9sbEhlaWdodCwgZWxlbS5vZmZzZXRIZWlnaHQgKVxuXG4gICAgICAgIGNvbnN0IHJhdGUgPSAod2luZG93LnNjcm9sbFkgKyB3aW5kb3dIZWlnaHQgLSBlbGVtLm9mZnNldFRvcCkgKiAxMDAgLyBwYWdlSGVpZ2h0XG4gICAgICAgIGxldCBpbnRSYXRlID0gcGFyc2VJbnQocmF0ZS50b1N0cmluZygpLCAxMClcbiAgICAgICAgaWYgKGludFJhdGUgPiAxMDApIHtcbiAgICAgICAgICAgIGludFJhdGUgPSAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRSYXRlXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJhckhlaWdodCAocmF0ZSwgZWxlbVlQb3MsIGVsZW1Cb3R0b21ZKSB7XG4gICAgICAgIGNvbnN0IGVsZW1WaXNpYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gZWxlbVlQb3NcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gZWxlbVZpc2libGVIZWlnaHQgKiByYXRlIC8gMTAwXG4gICAgICAgIGxldCBpbnRIZWlnaHQgPSBwYXJzZUludChoZWlnaHQudG9TdHJpbmcoKSwgMTApXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cuc2Nyb2xsWSA+IGVsZW1Cb3R0b21ZKSB7XG4gICAgICAgICAgICBpbnRIZWlnaHQgLT0gcGFyc2VJbnQod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgLSBlbGVtQm90dG9tWSwxMClcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW50SGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgaW50SGVpZ2h0ID0gMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRIZWlnaHRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RWxlbWVudFlQb3MgKGVsZW0pIHtcbiAgICAgICAgbGV0IHJlbGF0aXZlWSA9IGVsZW0ub2Zmc2V0VG9wIC0gd2luZG93LnNjcm9sbFlcbiAgICAgICAgaWYgKHJlbGF0aXZlWSA8IDApIHtcbiAgICAgICAgICAgIHJlbGF0aXZlWSA9IDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVsYXRpdmVZXG4gICAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgYmFyUmlnaHQ6IDA7XFxuICBiZ0NvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgYmFyV2lkdGg6IDhweDtcXG4gIHpJbmRleDogMTAwMDtcXG59XFxuXFxuLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogdmFyKC0tYmFyUmlnaHQpO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IHZhcigtLWJhcldpZHRoKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNEREQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJfX2luZGljYXRvciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0NvbG9yKTtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxufVxcblxcbi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlcl9fdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnQ29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc2Nzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUdFO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFBakI7O0FBRUk7RUFDRSwwQkFBMEI7RUFDMUIsU0FBUztFQUNULDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDckM7O0FBRUk7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgYmFyUmlnaHQ6IDA7XFxuICBiZ0NvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgYmFyV2lkdGg6IDhweDtcXG4gIHpJbmRleDogMTAwMDtcXG59XFxuXFxuLnJlYWRpbmctcG9zaXRpb24tYmFyIHtcXG4gICZfX3dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiB2YXIoLS1iYXJSaWdodCk7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IHZhcigtLWJhcldpZHRoKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjREREO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcblxcbiAgICAmX19pbmRpY2F0b3Ige1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQ29sb3IpO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgfVxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcik7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==