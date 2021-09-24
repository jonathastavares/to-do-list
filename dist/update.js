/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
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
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
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
  }

  static removeItem(event) {
    const removeArr = List.dataArray();
    removeArr.splice(event, 1);
    localStorage.setItem('listArray', JSON.stringify(removeArr));
  }

  static removeCompleted() {
    const events = List.dataArray();
    events.forEach((event) => {
      if (event.completed === true) {
        List.removeItem(event.index);
      }
    });
    return events;
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
    const p = List.getTextItem(event.target.value-1)
    if (listArray[event.target.value-1].completed === false) {
      listArray[event.target.value-1].completed = true;
      localStorage.setItem('listArray', JSON.stringify(listArray));
      p.classList.add('text-decoration-line-through');
    } else {
      listArray[event.target.value-1].completed = false;
      localStorage.setItem('listArray', JSON.stringify(listArray));
      p.classList.remove('text-decoration-line-through');
    }
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
/******/ 			// no module.id needed
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update": () => (/* binding */ Update)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* eslint-disable import/prefer-default-export */



class Update {
  static listPopulate() {
    const listObj = document.getElementById('list-objects');
    listObj.innerHTML = '';
    _list_js__WEBPACK_IMPORTED_MODULE_0__.List.dataArray().forEach((listElement, index) => {
      if (listElement.completed === false) {
        listObj.innerHTML += `<li class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center'><p id='item-description' class='list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger' >Delete</button></div></li>`;
      } else {
        listObj.innerHTML += `<li class='list-group-item d-flex align-items-center justify-content-between'><div class='d-flex'><input id='check' value='${index + 1}' type="checkbox" class='me-4 align-self-center' checked><p id='item-description' class='list-font no-margin align-self-center'>${listElement.text}</p></div><div><button value='${index + 1}' id='delete-btn' type='submit' class='btn btn-danger'>Delete</button></div></li>`;
      }
    });
    if (listObj.innerHTML === '') {
      listObj.classList.add('d-none');
    } else {
      listObj.classList.remove('d-none');
    }
  }
}

})();

/******/ })()
;