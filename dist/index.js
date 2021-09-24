/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".font-bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  font-size: 30px;\r\n}\r\n\r\n#add-list {\r\n  border: 0;\r\n  width: 100%;\r\n}\r\n\r\n.no-margin {\r\n  margin: 0 !important;\r\n}\r\n\r\n.black {\r\n  color: black;\r\n}\r\n\r\n.join-list-top {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-top: 0;\r\n}\r\n\r\n.join-list-bottom {\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.container {\r\n  padding: 0 !important;\r\n}\r\n\r\n.list-group-item {\r\n  border: 0 !important;\r\n  border-top: 1px rgba(0, 0, 0, 0.125) solid !important;\r\n}\r\n\r\n.list-group-item:first-of-type {\r\n  border-top: 0 !important;\r\n}\r\n\r\n.no-border {\r\n  border: 0 !important;\r\n}\r\n\r\n.no-round-borders {\r\n  border-radius: 0 !important;\r\n}\r\n\r\n.list-font {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* eslint-disable import/prefer-default-export */




class List {
  static dataArray() {
    const listArray = JSON.parse(localStorage.getItem('listArray') || '[]');
    return listArray;
  }

  static completedArray() {
    const completedArray = JSON.parse(localStorage.getItem('completedArray') || '[]');
    return completedArray;
  }

  static saveItem(obj) {
    const item = new _item_js__WEBPACK_IMPORTED_MODULE_0__.Item(obj);
    const listArray = List.dataArray();
    item.index = listArray.length + 1;
    listArray.push(item);
    localStorage.setItem('listArray', JSON.stringify(listArray));
    _update_js__WEBPACK_IMPORTED_MODULE_1__.Update.listPopulate();
  }

  static removeItem(event) {
    const removeArr = List.dataArray();
    removeArr.splice(event, 1);
    localStorage.setItem('listArray', JSON.stringify(removeArr));
    _update_js__WEBPACK_IMPORTED_MODULE_1__.Update.listPopulate();
  }

  static updateItem(text, id) {
    const newArr = List.dataArray();
    List.dataArray().forEach((task, index) => {
      if (index === id - 1) {
        newArr[index].text = text;
        localStorage.setItem('listArray', JSON.stringify(newArr));
      }
    });
    _update_js__WEBPACK_IMPORTED_MODULE_1__.Update.reload();
  }

  // needs to fix
  static removeCompleted() {
    const events = List.dataArray();
    const newEvents = new Array();
    events.forEach((event, index) => {
      if (!event.completed) {
        newEvents.push(event);
      }
    });
    localStorage.setItem('listArray', JSON.stringify(newEvents));
    _update_js__WEBPACK_IMPORTED_MODULE_1__.Update.reload();
  }

  static makeEditable(id) {
    const listObj = document.getElementById('list-objects');
    listObj.innerHTML = '';
    List.dataArray().forEach((listElement, index) => {
      if (listElement.completed === false) {
        if (index === id - 1) {
          listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><input id='edit-element' placeholder='${listElement.text}' class='no-border'></div><div><button value='${index + 1}' id='edit-btn' type='submit' class='btn btn-warning'>Edit</button></div></li>`;
        } else {
          listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><p value='${index + 1}' id='item-description' class='w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger' >Delete</button></div></li>`;
        }
      } else if (index === id - 1) {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><input id='edit-element' placeholder='${listElement.text}' class='no-border'>></div><div><button value='${index + 1}' id='edit-btn' type='submit' class='btn btn-warning'>Edit</button></div></li>`;
      } else {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><p value='${index + 1}' id='item-description' class='text-decoration-line-through w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger'>Delete</button></div></li>`;
      }
    });
    const editbtn = document.getElementById('edit-btn');

    editbtn.addEventListener('click', (event) => {
      const item = document.getElementById('edit-element');
      List.updateItem(item.value, id);
    });
  }

  static getDeleteButton(id) {
    const deletebtns = document.querySelectorAll('button[type=submit][id=delete-btn');
    const deletebtn = deletebtns[id];
    return deletebtn;
  }

  static getTextItem(id) {
    const textItems = document.querySelectorAll('p[id=item-description');
    const textItem = textItems[id];
    return textItem;
  }

  static completeItem(event) {
    const listArray = List.dataArray();
    const p = List.getTextItem(event.target.value - 1);
    if (listArray[event.target.value - 1].completed === false) {
      listArray[event.target.value - 1].completed = true;
      localStorage.setItem('listArray', JSON.stringify(listArray));
    } else {
      listArray[event.target.value - 1].completed = false;
      localStorage.setItem('listArray', JSON.stringify(listArray));
    }
  }
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */

class Item {
  constructor(text) {
    this.text = text;
    this.completed = false;
    this.index = 0;
  }
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update": () => (/* binding */ Update)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* eslint-disable import/prefer-default-export */



class Update {
  static listPopulate() {
    const listObj = document.getElementById('list-objects');
    listObj.innerHTML = '';
    _list_js__WEBPACK_IMPORTED_MODULE_0__.List.dataArray().forEach((listElement, index) => {
      if (listElement.completed === false) {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><p value='${index + 1}' id='item-description' class='w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger' >Delete</button></div></li>`;
      } else {
        listObj.innerHTML += `<li id='task' class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex w-100'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><p value='${index + 1}' id='item-description' class='text-decoration-line-through w-100 list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger'>Delete</button></div></li>`;
      }
    });
    if (listObj.innerHTML === '') {
      listObj.classList.add('d-none');
    } else {
      listObj.classList.remove('d-none');
    }
    Update.indexUpdate();
  }

  static indexUpdate() {
    const list = _list_js__WEBPACK_IMPORTED_MODULE_0__.List.dataArray();
    list.forEach((element, index) => {
      element.index = index + 1;
    });
    localStorage.setItem('listArray', JSON.stringify(list));
  }

  static reload() {
    window.location.reload();
  }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* eslint-disable import/prefer-default-export, no-unused-vars */





_update_js__WEBPACK_IMPORTED_MODULE_2__.Update.listPopulate();

const addbtn = document.getElementById('add-btn');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const deletebtns = document.querySelectorAll('button[type=submit][id=delete-btn');
const removeall = document.getElementById('delete-completed-btn');
const editables = document.querySelectorAll('p[id=item-description');

addbtn.addEventListener('click', (event) => {
  event.preventDefault();

  const desc = document.getElementById('add-list').value;

  _list_js__WEBPACK_IMPORTED_MODULE_1__.List.saveItem(desc);
  document.getElementById('add-list').value = '';
  _update_js__WEBPACK_IMPORTED_MODULE_2__.Update.reload();
});

deletebtns.forEach((deletebtn) => {
  deletebtn.addEventListener('click', (event) => {
    _list_js__WEBPACK_IMPORTED_MODULE_1__.List.removeItem(event.target.value - 1);
    _update_js__WEBPACK_IMPORTED_MODULE_2__.Update.reload();
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    _list_js__WEBPACK_IMPORTED_MODULE_1__.List.completeItem(event);
    _update_js__WEBPACK_IMPORTED_MODULE_2__.Update.reload();
  });
});

editables.forEach((button) => {
  button.addEventListener('click', (event) => {
    _list_js__WEBPACK_IMPORTED_MODULE_1__.List.makeEditable(event.target.attributes[0].value);
  });
});

removeall.addEventListener('click', (event) => {
  _list_js__WEBPACK_IMPORTED_MODULE_1__.List.removeCompleted();
});
})();

/******/ })()
;