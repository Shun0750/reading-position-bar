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

  if ('offsetTop' in options) {
    _dom__WEBPACK_IMPORTED_MODULE_2__.default.setOffsetTop(options.offsetTop);
  }

  _eventHandler__WEBPACK_IMPORTED_MODULE_0__.default.update();
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
      wrapper.style.setProperty("--offsetTop", '0');
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
  }, {
    key: "setOffsetTop",
    value: function setOffsetTop(offsetTop) {
      var wrapper = document.querySelector(".reading-position-bar__wrapper");
      wrapper.style.setProperty("--offsetTop", offsetTop);
      wrapper.dataset.offsetTop = offsetTop;
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
        EventHandler.update();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var parent = document.querySelector("[data-reading-position-bar-wrapper=true]");
      var indicator = document.querySelector(".reading-position-bar__wrapper__indicator");

      if (!indicator || typeof indicator === 'undefined') {
        return;
      } // 対象DOMの位置を取得


      var elementYPos = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getElementYPos(parent);
      var wrapper = document.querySelector(".reading-position-bar__wrapper");
      var offsetTop = parseInt(wrapper.dataset.offsetTop, 10);

      if (elementYPos < offsetTop) {
        elementYPos = offsetTop;
      }

      wrapper.style.top = elementYPos + 'px';
      wrapper.style.display = 'block';
      var readRate = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getReadRate(parent);
      var elemBottomY = parent.offsetTop + parent.getBoundingClientRect().height;
      var barHeight = _utils__WEBPACK_IMPORTED_MODULE_0__.default.getBarHeight(readRate, elementYPos, elemBottomY, offsetTop);
      indicator.style.height = barHeight + "px";
      var text = document.querySelector(".reading-position-bar__wrapper__text");
      text.innerHTML = readRate + "%";

      if (barHeight === 0) {
        text.style.marginTop = "-34px";
      } else {
        text.style.marginTop = "-26px";
      }

      if (readRate === 100) {
        wrapper.style.height = barHeight + "px";
      } else {
        wrapper.style.height = "100%";
      }
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
    value: function getBarHeight(rate, elemYPos, elemBottomY, offsetTop) {
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  barRight: 0;\n  bgColor: rebeccapurple;\n  barWidth: 8px;\n  zIndex: 1000;\n  offsetTop: 0;\n}\n\n.reading-position-bar__wrapper {\n  display: none;\n  position: fixed;\n  right: var(--barRight);\n  top: var(--offsetTop);\n  width: var(--barWidth);\n  height: 100%;\n  background: #DDD;\n  z-index: 1000;\n}\n\n.reading-position-bar__wrapper__indicator {\n  background: var(--bgColor);\n  height: 0;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.reading-position-bar__wrapper__text {\n  position: absolute;\n  right: 0px;\n  margin-top: -24px;\n  padding: 5px;\n  width: 40px;\n  background: var(--bgColor);\n  color: white;\n  text-align: right;\n  font-size: 12px;\n}\n", "",{"version":3,"sources":["webpack://src/scss/style.scss"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAGE;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,qBAAqB;EACrB,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;AAAjB;;AAEI;EACE,0BAA0B;EAC1B,SAAS;EACT,8BAA8B;EAC9B,+BAA+B;AACrC;;AAEI;EACE,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACrB","sourcesContent":[":root {\n  barRight: 0;\n  bgColor: rebeccapurple;\n  barWidth: 8px;\n  zIndex: 1000;\n  offsetTop: 0;\n}\n\n.reading-position-bar {\n  &__wrapper {\n    display: none;\n    position: fixed;\n    right: var(--barRight);\n    top: var(--offsetTop);\n    width: var(--barWidth);\n    height: 100%;\n    background: #DDD;\n    z-index: 1000;\n\n    &__indicator {\n      background: var(--bgColor);\n      height: 0;\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px;\n    }\n\n    &__text {\n      position: absolute;\n      right: 0px;\n      margin-top: -24px;\n      padding: 5px;\n      width: 40px;\n      background: var(--bgColor);\n      color: white;\n      text-align: right;\n      font-size: 12px;\n    }\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/NzYwMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfcyIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJpc0FycmF5IiwiX2l0ZW0iLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiSFRNTEVsZW1lbnQiLCJhZGRSZWFkaW5nUG9zaXRpb25CYXIiLCJvcHRpb25zIiwiRG9tIiwiRXZlbnRIYW5kbGVyIiwiYmdDb2xvciIsInNob3dUZXh0IiwiYmFyV2lkdGgiLCJyaWdodCIsInpJbmRleCIsIm9mZnNldFRvcCIsImVsZW0iLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImluZGljYXRvciIsImFwcGVuZCIsInRleHQiLCJzZXRBdHRyaWJ1dGUiLCJjb2xvciIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ3aWR0aCIsInBhcnNlSW50IiwiYmFyUmlnaHQiLCJiYXJaSW5kZXgiLCJkYXRhc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZSIsInBhcmVudCIsImVsZW1lbnRZUG9zIiwiVXRpbHMiLCJ0b3AiLCJkaXNwbGF5IiwicmVhZFJhdGUiLCJlbGVtQm90dG9tWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImJhckhlaWdodCIsImlubmVySFRNTCIsIm1hcmdpblRvcCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwieU9mZlNldCIsInBhZ2VZT2Zmc2V0IiwicGFnZUhlaWdodCIsIk1hdGgiLCJtYXgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJyYXRlIiwic2Nyb2xsWSIsImludFJhdGUiLCJlbGVtWVBvcyIsImVsZW1WaXNpYmxlSGVpZ2h0IiwiaW50SGVpZ2h0IiwicmVsYXRpdmVZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxzQkFBVixFQUFrQztBQUNqRCxNQUFJQyxJQUFJLEdBQUcsRUFBWCxDQURpRCxDQUNsQzs7QUFFZkEsTUFBSSxDQUFDQyxRQUFMLEdBQWdCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEMsV0FBTyxLQUFLQyxHQUFMLENBQVMsVUFBVUMsSUFBVixFQUFnQjtBQUM5QixVQUFJQyxPQUFPLEdBQUdMLHNCQUFzQixDQUFDSSxJQUFELENBQXBDOztBQUVBLFVBQUlBLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYLGVBQU8sVUFBVUUsTUFBVixDQUFpQkYsSUFBSSxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NFLE1BQWhDLENBQXVDRCxPQUF2QyxFQUFnRCxHQUFoRCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNELEtBUk0sRUFRSkUsSUFSSSxDQVFDLEVBUkQsQ0FBUDtBQVNELEdBVkQsQ0FIaUQsQ0FhOUM7QUFDSDs7O0FBR0FOLE1BQUksQ0FBQ08sQ0FBTCxHQUFTLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVB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ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgRG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9ldmVudEhhbmRsZXInO1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5hZGRSZWFkaW5nUG9zaXRpb25CYXIgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICBEb20uY3JlYXRlRG9tcyh0aGlzKVxuICAgIEV2ZW50SGFuZGxlci5zZXRFdmVudCgpXG5cbiAgICBpZiAoJ2JnQ29sb3InIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRG9tLnNldEJnQ29sb3Iob3B0aW9ucy5iZ0NvbG9yKVxuICAgIH1cbiAgICBpZiAoJ3Nob3dUZXh0JyBpbiBvcHRpb25zICYmIG9wdGlvbnMuc2hvd1RleHQgPT09IGZhbHNlKSB7XG4gICAgICAgIERvbS5kaXNhYmxlVGV4dCgpXG4gICAgfVxuICAgIGlmICgnYmFyV2lkdGgnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRG9tLnNldEJhcldpZHRoKG9wdGlvbnMuYmFyV2lkdGgpXG4gICAgfVxuICAgIGlmICgncmlnaHQnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRG9tLnNldEJhclJpZ2h0KG9wdGlvbnMucmlnaHQpXG4gICAgfVxuICAgIGlmICgnekluZGV4JyBpbiBvcHRpb25zKSB7XG4gICAgICAgIERvbS5zZXRaSW5kZXgob3B0aW9ucy56SW5kZXgpXG4gICAgfVxuICAgIGlmICgnb2Zmc2V0VG9wJyBpbiBvcHRpb25zKSB7XG4gICAgICAgIERvbS5zZXRPZmZzZXRUb3Aob3B0aW9ucy5vZmZzZXRUb3ApXG4gICAgfVxuICAgIEV2ZW50SGFuZGxlci51cGRhdGUoKVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbSB7XG4gICAgc3RhdGljIGNyZWF0ZURvbXMgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ3JlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyJ1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXJXaWR0aFwiLCAnMTBweCcpXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJhclJpZ2h0XCIsICcwJylcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tekluZGV4XCIsICcxMDAwJylcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb2Zmc2V0VG9wXCIsICcwJylcblxuICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbmRpY2F0b3IuY2xhc3NOYW1lID0gJ3JlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX19pbmRpY2F0b3InXG4gICAgICAgIGluZGljYXRvci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdDb2xvclwiLCBcImJsYWNrXCIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZChpbmRpY2F0b3IpXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gJ3JlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX190ZXh0J1xuICAgICAgICB0ZXh0LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ0NvbG9yXCIsIFwiYmxhY2tcIik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKHRleHQpXG5cbiAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhZGluZy1wb3NpdGlvbi1iYXItd3JhcHBlcicsJ3RydWUnKVxuICAgICAgICBlbGVtLmFwcGVuZCh3cmFwcGVyKVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRCZ0NvbG9yIChjb2xvcikge1xuICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX19pbmRpY2F0b3JcIilcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ0NvbG9yXCIsIGNvbG9yKVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX190ZXh0XCIpXG4gICAgICAgIHRleHQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnQ29sb3JcIiwgY29sb3IpXG4gICAgfVxuXG4gICAgc3RhdGljIGRpc2FibGVUZXh0ICgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJfX3RleHRcIilcbiAgICAgICAgdGV4dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRleHQpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhcldpZHRoICh3aWR0aCkge1xuICAgICAgICBjb25zdCBiYXJXaWR0aCA9IHBhcnNlSW50KHdpZHRoKVxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlclwiKVxuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXJXaWR0aFwiLCBiYXJXaWR0aCArICdweCcpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEJhclJpZ2h0IChyaWdodCkge1xuICAgICAgICBjb25zdCBiYXJSaWdodCA9IHBhcnNlSW50KHJpZ2h0KVxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlclwiKVxuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYXJSaWdodFwiLCBiYXJSaWdodCArICdweCcpXG4gICAgfVxuXG4gICAgc3RhdGljIHNldFpJbmRleCAoekluZGV4KSB7XG4gICAgICAgIGNvbnN0IGJhclpJbmRleCA9IHBhcnNlSW50KHpJbmRleClcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJcIilcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tekluZGV4XCIsIGJhclpJbmRleClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0T2Zmc2V0VG9wIChvZmZzZXRUb3ApIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJcIilcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tb2Zmc2V0VG9wXCIsIG9mZnNldFRvcClcbiAgICAgICAgd3JhcHBlci5kYXRhc2V0Lm9mZnNldFRvcCA9IG9mZnNldFRvcFxuICAgIH1cbn0iLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50SGFuZGxlciB7XG4gICAgc3RhdGljIHNldEV2ZW50ICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIudXBkYXRlKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcmVhZGluZy1wb3NpdGlvbi1iYXItd3JhcHBlcj10cnVlXVwiKVxuXG4gICAgICAgIGNvbnN0IGluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJfX2luZGljYXRvclwiKVxuICAgICAgICBpZighaW5kaWNhdG9yIHx8IHR5cGVvZiBpbmRpY2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWvvuixoURPTeOBruS9jee9ruOCkuWPluW+l1xuICAgICAgICBsZXQgZWxlbWVudFlQb3MgPSBVdGlscy5nZXRFbGVtZW50WVBvcyhwYXJlbnQpXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyXCIpXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHBhcnNlSW50KHdyYXBwZXIuZGF0YXNldC5vZmZzZXRUb3AsIDEwKVxuICAgICAgICBpZiAoIGVsZW1lbnRZUG9zIDwgb2Zmc2V0VG9wICkge1xuICAgICAgICAgICAgZWxlbWVudFlQb3MgPSBvZmZzZXRUb3BcbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGVsZW1lbnRZUG9zICsgJ3B4J1xuICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgICAgICAgY29uc3QgcmVhZFJhdGUgPSBVdGlscy5nZXRSZWFkUmF0ZShwYXJlbnQpXG4gICAgICAgIGNvbnN0IGVsZW1Cb3R0b21ZID0gcGFyZW50Lm9mZnNldFRvcCArIHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgY29uc3QgYmFySGVpZ2h0ID0gVXRpbHMuZ2V0QmFySGVpZ2h0KHJlYWRSYXRlLCBlbGVtZW50WVBvcywgZWxlbUJvdHRvbVksIG9mZnNldFRvcClcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLmhlaWdodCA9IGJhckhlaWdodCArIFwicHhcIlxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX190ZXh0XCIpXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gcmVhZFJhdGUgKyBcIiVcIlxuICAgICAgICBpZiAoYmFySGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICB0ZXh0LnN0eWxlLm1hcmdpblRvcCA9IFwiLTM0cHhcIlxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0ZXh0LnN0eWxlLm1hcmdpblRvcCA9IFwiLTI2cHhcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWFkUmF0ZSA9PT0gMTAwKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IGJhckhlaWdodCArIFwicHhcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgZ2V0UmVhZFJhdGUgKGVsZW0pIHtcbiAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIGNvbnN0IHlPZmZTZXQgPSB3aW5kb3cucGFnZVlPZmZzZXRcblxuICAgICAgICBjb25zdCBwYWdlSGVpZ2h0ID0gTWF0aC5tYXgoIGVsZW0uc2Nyb2xsSGVpZ2h0LCBlbGVtLm9mZnNldEhlaWdodCApXG5cbiAgICAgICAgY29uc3QgcmF0ZSA9ICh3aW5kb3cuc2Nyb2xsWSArIHdpbmRvd0hlaWdodCAtIGVsZW0ub2Zmc2V0VG9wKSAqIDEwMCAvIHBhZ2VIZWlnaHRcbiAgICAgICAgbGV0IGludFJhdGUgPSBwYXJzZUludChyYXRlLnRvU3RyaW5nKCksIDEwKVxuICAgICAgICBpZiAoaW50UmF0ZSA+IDEwMCkge1xuICAgICAgICAgICAgaW50UmF0ZSA9IDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGludFJhdGVcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QmFySGVpZ2h0IChyYXRlLCBlbGVtWVBvcywgZWxlbUJvdHRvbVksIG9mZnNldFRvcCkge1xuICAgICAgICBjb25zdCBlbGVtVmlzaWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGVsZW1ZUG9zXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGVsZW1WaXNpYmxlSGVpZ2h0ICogcmF0ZSAvIDEwMFxuICAgICAgICBsZXQgaW50SGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LnRvU3RyaW5nKCksIDEwKVxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ICsgd2luZG93LnNjcm9sbFkgPiBlbGVtQm90dG9tWSkge1xuICAgICAgICAgICAgaW50SGVpZ2h0IC09IHBhcnNlSW50KHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZIC0gZWxlbUJvdHRvbVksMTApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGludEhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGludEhlaWdodCA9IDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50SGVpZ2h0XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEVsZW1lbnRZUG9zIChlbGVtKSB7XG4gICAgICAgIGxldCByZWxhdGl2ZVkgPSBlbGVtLm9mZnNldFRvcCAtIHdpbmRvdy5zY3JvbGxZXG4gICAgICAgIGlmIChyZWxhdGl2ZVkgPCAwKSB7XG4gICAgICAgICAgICByZWxhdGl2ZVkgPSAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbGF0aXZlWVxuICAgIH1cbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGJhclJpZ2h0OiAwO1xcbiAgYmdDb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gIGJhcldpZHRoOiA4cHg7XFxuICB6SW5kZXg6IDEwMDA7XFxuICBvZmZzZXRUb3A6IDA7XFxufVxcblxcbi5yZWFkaW5nLXBvc2l0aW9uLWJhcl9fd3JhcHBlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IHZhcigtLWJhclJpZ2h0KTtcXG4gIHRvcDogdmFyKC0tb2Zmc2V0VG9wKTtcXG4gIHdpZHRoOiB2YXIoLS1iYXJXaWR0aCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjREREO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLnJlYWRpbmctcG9zaXRpb24tYmFyX193cmFwcGVyX19pbmRpY2F0b3Ige1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcik7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucmVhZGluZy1wb3NpdGlvbi1iYXJfX3dyYXBwZXJfX3RleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIG1hcmdpbi10b3A6IC0yNHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0NvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBR0U7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtBQUFqQjs7QUFFSTtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNyQzs7QUFFSTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBiYXJSaWdodDogMDtcXG4gIGJnQ29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICBiYXJXaWR0aDogOHB4O1xcbiAgekluZGV4OiAxMDAwO1xcbiAgb2Zmc2V0VG9wOiAwO1xcbn1cXG5cXG4ucmVhZGluZy1wb3NpdGlvbi1iYXIge1xcbiAgJl9fd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IHZhcigtLWJhclJpZ2h0KTtcXG4gICAgdG9wOiB2YXIoLS1vZmZzZXRUb3ApO1xcbiAgICB3aWR0aDogdmFyKC0tYmFyV2lkdGgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6ICNEREQ7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuXFxuICAgICZfX2luZGljYXRvciB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcik7XFxuICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0NvbG9yKTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9