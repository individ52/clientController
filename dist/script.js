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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addSelect */ "./src/js/modules/addSelect.js");
/* harmony import */ var _modules_addOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addOrder */ "./src/js/modules/addOrder.js");


window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_addSelect__WEBPACK_IMPORTED_MODULE_0__["default"])('.type-orders', '.type-order');
  Object(_modules_addOrder__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/addOrder.js":
/*!************************************!*\
  !*** ./src/js/modules/addOrder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
/* harmony import */ var _getTimeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTimeView */ "./src/js/modules/getTimeView.js");
// import {postData} from "../server/requests";



const addOrder = () => {
  let btnSend = document.querySelector('.add-btn'),
      inputPrice = document.querySelector('#price');
  btnSend.addEventListener('click', function () {
    let orders = [];
    document.querySelectorAll('.type-order').forEach(select => {
      if (select.value) {
        orders.push(select.value);
      }
    });

    if (inputPrice.value && orders.length >= 1) {
      let data = {};
      let date = new Date();
      let nowHour = date.getHours();
      data['time'] = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
      data['price'] = inputPrice.value;
      data['types'] = orders.join('/');
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('../../assets/server.json').then(res => {
        addNew(res, nowHour, data);
      });
    }
  });

  function addNew(obj, nowHour, data) {
    function сontrol() {
      let a;
      Object.keys(obj).forEach(key => {
        if (key == nowHour) {
          a = true;
        }
      });
      return a;
    }

    ;

    if (сontrol()) {
      console.log('this time is');
      obj[nowHour].push(data);
    } else {
      console.log('this no');
      obj[nowHour] = [data];
    }

    let forSend = JSON.stringify(obj);
    console.log(forSend);
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])('../../assets/server.json', forSend).then(res => console.log(res));
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (addOrder);

/***/ }),

/***/ "./src/js/modules/addSelect.js":
/*!*************************************!*\
  !*** ./src/js/modules/addSelect.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const addSelect = (placeSelector, optionSelector) => {
  let placeForOptions = document.querySelector(placeSelector),
      select = document.querySelector(optionSelector);
  let selects = [select];
  select.addEventListener('change', function () {
    addNewClone();
  });

  function addNewClone() {
    let clone = select.cloneNode(true);
    placeForOptions.appendChild(clone);
    selects.push(clone);
    clone.addEventListener('change', function () {
      if (this.value === "delete") {
        this.remove();
      } else {
        addNewClone();
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (addSelect);

/***/ }),

/***/ "./src/js/modules/getTimeView.js":
/*!***************************************!*\
  !*** ./src/js/modules/getTimeView.js ***!
  \***************************************/
/*! exports provided: getTimeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeView", function() { return getTimeView; });
const getTimeView = ms => {
  let sec = Math.floor(ms / 1000 % 60);
  let min = Math.floor(ms / 60000 % 60);
  let hour = Math.floor(ms / 3600000 % 24);
  console.log(`${hour}:${min}:${sec}`);
};



/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource, readTextFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTextFile", function() { return readTextFile; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);

  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };

  rawFile.send(null);
}



/***/ })

/******/ });
//# sourceMappingURL=script.js.map