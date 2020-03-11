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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/cortes1.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.6
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-10-04T04:33:48.372Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link http://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;

      default:
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
        height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      canvasData.left = (containerData.width - canvasWidth) / 2;
      canvasData.top = (containerData.height - canvasHeight) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      this.initialImageData = assign({}, imageData);
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var minContainerWidth = Number(options.minContainerWidth) || MIN_CONTAINER_WIDTH;
      var minContainerHeight = Number(options.minContainerHeight) || MIN_CONTAINER_HEIGHT;

      if (this.disabled || containerData.width <= minContainerWidth || containerData.height <= minContainerHeight) {
        return;
      }

      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;

          default:
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;

        default:
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper =
  /*#__PURE__*/
  function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "http://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

}));


/***/ }),

/***/ "./src/type/cortes1.ts":
/*!*****************************!*\
  !*** ./src/type/cortes1.ts ***!
  \*****************************/
/*! exports provided: cortes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cortes", function() { return cortes; });
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_1__);

 //import Puzzle from './puzzle'

var partes = [];
var valor = 4;
function cortes() {
  var elemento = document.getElementById('id');
  var cortar = new cropperjs__WEBPACK_IMPORTED_MODULE_1___default.a(elemento, {
    autoCropArea: 1
  });
  var result = document.getElementById('resultado');
  elemento.addEventListener('ready', function () {
    if (this.cropper) {
      var dimension = {
        width: this.cropper.getData().width,
        heigth: this.cropper.getData().height
      };

      for (var y = 0; y < valor; y++) {
        for (var x = 0; x < valor; x++) {
          this.cropper.setData({
            width: dimension.width / valor,
            height: dimension.heigth / valor,
            x: dimension.width - (valor - x) * dimension.width / valor,
            y: dimension.heigth - (valor - y) * dimension.heigth / valor
          });
          partes.push(this.cropper.getCroppedCanvas());
        }
      }

      partes.forEach(function (element) {
        if (result) {
          var espacio = document.createElement('br');
          result.appendChild(espacio);
          result.appendChild(element);
        }
      });
    }
  });
}

if (window.cordova) {
  console.log('cordova');
  window.addEventListener('DOMContentLoaded', cortes); //document.addEventListener('deviceready', cortes, false);
} else {
  console.log('no cordova -1--');
  window.addEventListener('DOMContentLoaded', cortes);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuY3NzPzUyOTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY29ydGVzMS50cyJdLCJuYW1lcyI6WyJwYXJ0ZXMiLCJ2YWxvciIsImNvcnRlcyIsImVsZW1lbnRvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvcnRhciIsIkNyb3BwZXIiLCJhdXRvQ3JvcEFyZWEiLCJyZXN1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JvcHBlciIsImRpbWVuc2lvbiIsIndpZHRoIiwiZ2V0RGF0YSIsImhlaWd0aCIsImhlaWdodCIsInkiLCJ4Iiwic2V0RGF0YSIsInB1c2giLCJnZXRDcm9wcGVkQ2FudmFzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJlc3BhY2lvIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiY29yZG92YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsU0FBUztBQUNULE9BQU87QUFDUCxtREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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RnJCLFlBQU0sQ0FBQ3NCLE9BQVAsQ0FBZSxVQUFBQyxPQUFPLEVBQUk7QUFDekIsWUFBR2QsTUFBSCxFQUFVO0FBQ1IsY0FBSWUsT0FBTyxHQUFFcEIsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0FoQixnQkFBTSxDQUFDaUIsV0FBUCxDQUFtQkYsT0FBbkI7QUFDQWYsZ0JBQU0sQ0FBQ2lCLFdBQVAsQ0FBbUJILE9BQW5CO0FBQ0Q7QUFFRCxPQVBEO0FBUUY7QUFDQSxHQTFCRDtBQThCQTs7QUFJRixJQUFHSSxNQUFNLENBQUNDLE9BQVYsRUFBbUI7QUFDakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRUgsUUFBTSxDQUFDakIsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTZDUixNQUE3QyxFQUZlLENBR2Y7QUFDRCxDQUpILE1BSVM7QUFDTDJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0NILFFBQU0sQ0FBQ2pCLGdCQUFQLENBQXdCLGtCQUF4QixFQUEyQ1IsTUFBM0M7QUFDSixDIiwiZmlsZSI6ImpzL2NvcnRlczEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90eXBlL2NvcnRlczEudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiFcbiAqIENyb3BwZXIuanMgdjEuNS42XG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY3JvcHBlcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTUtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE5LTEwLTA0VDA0OjMzOjQ4LjM3MlpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkNyb3BwZXIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICAgIGlmIChpICUgMikge1xuICAgICAgICBvd25LZXlzKHNvdXJjZSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcbiAgdmFyIElTX1RPVUNIX0RFVklDRSA9IElTX0JST1dTRVIgPyAnb250b3VjaHN0YXJ0JyBpbiBXSU5ET1cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZmFsc2U7XG4gIHZhciBIQVNfUE9JTlRFUl9FVkVOVCA9IElTX0JST1dTRVIgPyAnUG9pbnRlckV2ZW50JyBpbiBXSU5ET1cgOiBmYWxzZTtcbiAgdmFyIE5BTUVTUEFDRSA9ICdjcm9wcGVyJzsgLy8gQWN0aW9uc1xuXG4gIHZhciBBQ1RJT05fQUxMID0gJ2FsbCc7XG4gIHZhciBBQ1RJT05fQ1JPUCA9ICdjcm9wJztcbiAgdmFyIEFDVElPTl9NT1ZFID0gJ21vdmUnO1xuICB2YXIgQUNUSU9OX1pPT00gPSAnem9vbSc7XG4gIHZhciBBQ1RJT05fRUFTVCA9ICdlJztcbiAgdmFyIEFDVElPTl9XRVNUID0gJ3cnO1xuICB2YXIgQUNUSU9OX1NPVVRIID0gJ3MnO1xuICB2YXIgQUNUSU9OX05PUlRIID0gJ24nO1xuICB2YXIgQUNUSU9OX05PUlRIX0VBU1QgPSAnbmUnO1xuICB2YXIgQUNUSU9OX05PUlRIX1dFU1QgPSAnbncnO1xuICB2YXIgQUNUSU9OX1NPVVRIX0VBU1QgPSAnc2UnO1xuICB2YXIgQUNUSU9OX1NPVVRIX1dFU1QgPSAnc3cnOyAvLyBDbGFzc2VzXG5cbiAgdmFyIENMQVNTX0NST1AgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNyb3BcIik7XG4gIHZhciBDTEFTU19ESVNBQkxFRCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZGlzYWJsZWRcIik7XG4gIHZhciBDTEFTU19ISURERU4gPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGRlblwiKTtcbiAgdmFyIENMQVNTX0hJREUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGVcIik7XG4gIHZhciBDTEFTU19JTlZJU0lCTEUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWludmlzaWJsZVwiKTtcbiAgdmFyIENMQVNTX01PREFMID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1tb2RhbFwiKTtcbiAgdmFyIENMQVNTX01PVkUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vdmVcIik7IC8vIERhdGEga2V5c1xuXG4gIHZhciBEQVRBX0FDVElPTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCJBY3Rpb25cIik7XG4gIHZhciBEQVRBX1BSRVZJRVcgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiUHJldmlld1wiKTsgLy8gRHJhZyBtb2Rlc1xuXG4gIHZhciBEUkFHX01PREVfQ1JPUCA9ICdjcm9wJztcbiAgdmFyIERSQUdfTU9ERV9NT1ZFID0gJ21vdmUnO1xuICB2YXIgRFJBR19NT0RFX05PTkUgPSAnbm9uZSc7IC8vIEV2ZW50c1xuXG4gIHZhciBFVkVOVF9DUk9QID0gJ2Nyb3AnO1xuICB2YXIgRVZFTlRfQ1JPUF9FTkQgPSAnY3JvcGVuZCc7XG4gIHZhciBFVkVOVF9DUk9QX01PVkUgPSAnY3JvcG1vdmUnO1xuICB2YXIgRVZFTlRfQ1JPUF9TVEFSVCA9ICdjcm9wc3RhcnQnO1xuICB2YXIgRVZFTlRfREJMQ0xJQ0sgPSAnZGJsY2xpY2snO1xuICB2YXIgRVZFTlRfVE9VQ0hfU1RBUlQgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2hzdGFydCcgOiAnbW91c2Vkb3duJztcbiAgdmFyIEVWRU5UX1RPVUNIX01PVkUgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICB2YXIgRVZFTlRfVE9VQ0hfRU5EID0gSVNfVE9VQ0hfREVWSUNFID8gJ3RvdWNoZW5kIHRvdWNoY2FuY2VsJyA6ICdtb3VzZXVwJztcbiAgdmFyIEVWRU5UX1BPSU5URVJfRE9XTiA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJkb3duJyA6IEVWRU5UX1RPVUNIX1NUQVJUO1xuICB2YXIgRVZFTlRfUE9JTlRFUl9NT1ZFID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcm1vdmUnIDogRVZFTlRfVE9VQ0hfTU9WRTtcbiAgdmFyIEVWRU5UX1BPSU5URVJfVVAgPSBIQVNfUE9JTlRFUl9FVkVOVCA/ICdwb2ludGVydXAgcG9pbnRlcmNhbmNlbCcgOiBFVkVOVF9UT1VDSF9FTkQ7XG4gIHZhciBFVkVOVF9SRUFEWSA9ICdyZWFkeSc7XG4gIHZhciBFVkVOVF9SRVNJWkUgPSAncmVzaXplJztcbiAgdmFyIEVWRU5UX1dIRUVMID0gJ3doZWVsJztcbiAgdmFyIEVWRU5UX1pPT00gPSAnem9vbSc7IC8vIE1pbWUgdHlwZXNcblxuICB2YXIgTUlNRV9UWVBFX0pQRUcgPSAnaW1hZ2UvanBlZyc7IC8vIFJlZ0V4cHNcblxuICB2YXIgUkVHRVhQX0FDVElPTlMgPSAvXmV8d3xzfG58c2V8c3d8bmV8bnd8YWxsfGNyb3B8bW92ZXx6b29tJC87XG4gIHZhciBSRUdFWFBfREFUQV9VUkwgPSAvXmRhdGE6LztcbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9KUEVHID0gL15kYXRhOmltYWdlXFwvanBlZztiYXNlNjQsLztcbiAgdmFyIFJFR0VYUF9UQUdfTkFNRSA9IC9eaW1nfGNhbnZhcyQvaTsgLy8gTWlzY1xuICAvLyBJbnNwaXJlZCBieSB0aGUgZGVmYXVsdCB3aWR0aCBhbmQgaGVpZ2h0IG9mIGEgY2FudmFzIGVsZW1lbnQuXG5cbiAgdmFyIE1JTl9DT05UQUlORVJfV0lEVEggPSAyMDA7XG4gIHZhciBNSU5fQ09OVEFJTkVSX0hFSUdIVCA9IDEwMDtcblxuICB2YXIgREVGQVVMVFMgPSB7XG4gICAgLy8gRGVmaW5lIHRoZSB2aWV3IG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICB2aWV3TW9kZTogMCxcbiAgICAvLyAwLCAxLCAyLCAzXG4gICAgLy8gRGVmaW5lIHRoZSBkcmFnZ2luZyBtb2RlIG9mIHRoZSBjcm9wcGVyXG4gICAgZHJhZ01vZGU6IERSQUdfTU9ERV9DUk9QLFxuICAgIC8vICdjcm9wJywgJ21vdmUnIG9yICdub25lJ1xuICAgIC8vIERlZmluZSB0aGUgaW5pdGlhbCBhc3BlY3QgcmF0aW8gb2YgdGhlIGNyb3AgYm94XG4gICAgaW5pdGlhbEFzcGVjdFJhdGlvOiBOYU4sXG4gICAgLy8gRGVmaW5lIHRoZSBhc3BlY3QgcmF0aW8gb2YgdGhlIGNyb3AgYm94XG4gICAgYXNwZWN0UmF0aW86IE5hTixcbiAgICAvLyBBbiBvYmplY3Qgd2l0aCB0aGUgcHJldmlvdXMgY3JvcHBpbmcgcmVzdWx0IGRhdGFcbiAgICBkYXRhOiBudWxsLFxuICAgIC8vIEEgc2VsZWN0b3IgZm9yIGFkZGluZyBleHRyYSBjb250YWluZXJzIHRvIHByZXZpZXdcbiAgICBwcmV2aWV3OiAnJyxcbiAgICAvLyBSZS1yZW5kZXIgdGhlIGNyb3BwZXIgd2hlbiByZXNpemUgdGhlIHdpbmRvd1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgLy8gUmVzdG9yZSB0aGUgY3JvcHBlZCBhcmVhIGFmdGVyIHJlc2l6ZSB0aGUgd2luZG93XG4gICAgcmVzdG9yZTogdHJ1ZSxcbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBpbWFnZSBpcyBhIGNyb3NzLW9yaWdpbiBpbWFnZVxuICAgIGNoZWNrQ3Jvc3NPcmlnaW46IHRydWUsXG4gICAgLy8gQ2hlY2sgdGhlIGN1cnJlbnQgaW1hZ2UncyBFeGlmIE9yaWVudGF0aW9uIGluZm9ybWF0aW9uXG4gICAgY2hlY2tPcmllbnRhdGlvbjogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSBibGFjayBtb2RhbFxuICAgIG1vZGFsOiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIGRhc2hlZCBsaW5lcyBmb3IgZ3VpZGluZ1xuICAgIGd1aWRlczogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSBjZW50ZXIgaW5kaWNhdG9yIGZvciBndWlkaW5nXG4gICAgY2VudGVyOiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIHdoaXRlIG1vZGFsIHRvIGhpZ2hsaWdodCB0aGUgY3JvcCBib3hcbiAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgZ3JpZCBiYWNrZ3JvdW5kXG4gICAgYmFja2dyb3VuZDogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gY3JvcCB0aGUgaW1hZ2UgYXV0b21hdGljYWxseSB3aGVuIGluaXRpYWxpemVcbiAgICBhdXRvQ3JvcDogdHJ1ZSxcbiAgICAvLyBEZWZpbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgYXV0b21hdGljIGNyb3BwaW5nIGFyZWEgd2hlbiBpbml0aWFsaXplc1xuICAgIGF1dG9Dcm9wQXJlYTogMC44LFxuICAgIC8vIEVuYWJsZSB0byBtb3ZlIHRoZSBpbWFnZVxuICAgIG1vdmFibGU6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIHJvdGF0ZSB0aGUgaW1hZ2VcbiAgICByb3RhdGFibGU6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIHNjYWxlIHRoZSBpbWFnZVxuICAgIHNjYWxhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byB6b29tIHRoZSBpbWFnZVxuICAgIHpvb21hYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byB6b29tIHRoZSBpbWFnZSBieSBkcmFnZ2luZyB0b3VjaFxuICAgIHpvb21PblRvdWNoOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byB6b29tIHRoZSBpbWFnZSBieSB3aGVlbGluZyBtb3VzZVxuICAgIHpvb21PbldoZWVsOiB0cnVlLFxuICAgIC8vIERlZmluZSB6b29tIHJhdGlvIHdoZW4gem9vbSB0aGUgaW1hZ2UgYnkgd2hlZWxpbmcgbW91c2VcbiAgICB3aGVlbFpvb21SYXRpbzogMC4xLFxuICAgIC8vIEVuYWJsZSB0byBtb3ZlIHRoZSBjcm9wIGJveFxuICAgIGNyb3BCb3hNb3ZhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byByZXNpemUgdGhlIGNyb3AgYm94XG4gICAgY3JvcEJveFJlc2l6YWJsZTogdHJ1ZSxcbiAgICAvLyBUb2dnbGUgZHJhZyBtb2RlIGJldHdlZW4gXCJjcm9wXCIgYW5kIFwibW92ZVwiIHdoZW4gY2xpY2sgdHdpY2Ugb24gdGhlIGNyb3BwZXJcbiAgICB0b2dnbGVEcmFnTW9kZU9uRGJsY2xpY2s6IHRydWUsXG4gICAgLy8gU2l6ZSBsaW1pdGF0aW9uXG4gICAgbWluQ2FudmFzV2lkdGg6IDAsXG4gICAgbWluQ2FudmFzSGVpZ2h0OiAwLFxuICAgIG1pbkNyb3BCb3hXaWR0aDogMCxcbiAgICBtaW5Dcm9wQm94SGVpZ2h0OiAwLFxuICAgIG1pbkNvbnRhaW5lcldpZHRoOiAyMDAsXG4gICAgbWluQ29udGFpbmVySGVpZ2h0OiAxMDAsXG4gICAgLy8gU2hvcnRjdXRzIG9mIGV2ZW50c1xuICAgIHJlYWR5OiBudWxsLFxuICAgIGNyb3BzdGFydDogbnVsbCxcbiAgICBjcm9wbW92ZTogbnVsbCxcbiAgICBjcm9wZW5kOiBudWxsLFxuICAgIGNyb3A6IG51bGwsXG4gICAgem9vbTogbnVsbFxuICB9O1xuXG4gIHZhciBURU1QTEFURSA9ICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1jb250YWluZXJcIiB0b3VjaC1hY3Rpb249XCJub25lXCI+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci13cmFwLWJveFwiPicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItY2FudmFzXCI+PC9kaXY+JyArICc8L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWRyYWctYm94XCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1jcm9wLWJveFwiPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXZpZXctYm94XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWRhc2hlZCBkYXNoZWQtaFwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1kYXNoZWQgZGFzaGVkLXZcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItY2VudGVyXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWZhY2VcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLWVcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiZVwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtblwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJuXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS13XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLXNcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cImVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtblwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJuXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXdcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwid1wiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC1zXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtbmVcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwibmVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtbndcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwibndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc3dcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic3dcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc2VcIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwic2VcIj48L3NwYW4+JyArICc8L2Rpdj4nICsgJzwvZGl2Pic7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgYSBudW1iZXIuXG4gICAqL1xuXG4gIHZhciBpc05hTiA9IE51bWJlci5pc05hTiB8fCBXSU5ET1cuaXNOYU47XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBudW1iZXIuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwb3NpdGl2ZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgdmFyIGlzUG9zaXRpdmVOdW1iZXIgPSBmdW5jdGlvbiBpc1Bvc2l0aXZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID4gMCAmJiB2YWx1ZSA8IEluZmluaXR5O1xuICB9O1xuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIHVuZGVmaW5lZC5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyB1bmRlZmluZWQsIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBfY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBfY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3RvciAmJiBwcm90b3R5cGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChwcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIEl0ZXJhdGUgdGhlIGdpdmVuIGRhdGEuXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIFRoZSBkYXRhIHRvIGl0ZXJhdGUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIHByb2Nlc3MgZnVuY3Rpb24gZm9yIGVhY2ggZWxlbWVudC5cbiAgICogQHJldHVybnMgeyp9IFRoZSBvcmlnaW5hbCBkYXRhLlxuICAgKi9cblxuICBmdW5jdGlvbiBmb3JFYWNoKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGRhdGEgJiYgaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzTnVtYmVyKGRhdGEubGVuZ3RoKVxuICAgICAgLyogYXJyYXktbGlrZSAqL1xuICAgICAgKSB7XG4gICAgICAgICAgdG9BcnJheShkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGRhdGEsIHZhbHVlLCBrZXksIGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgZGF0YVtrZXldLCBrZXksIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICAvKipcbiAgICogRXh0ZW5kIHRoZSBnaXZlbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7Kn0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvYmplY3QgdG8gZXh0ZW5kLlxuICAgKiBAcGFyYW0geyp9IGFyZ3MgLSBUaGUgcmVzdCBvYmplY3RzIGZvciBtZXJnaW5nIHRvIHRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZXh0ZW5kZWQgb2JqZWN0LlxuICAgKi9cblxuICB2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGFyZ1trZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICB2YXIgUkVHRVhQX0RFQ0lNQUxTID0gL1xcLlxcZCooPzowfDkpezEyfVxcZCokLztcbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwOi8vMC4zMDAwMDAwMDAwMDAwMDAwNC5jb20vfVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbm9ybWFsaXplLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVzPTEwMDAwMDAwMDAwMF0gLSBUaGUgdGltZXMgZm9yIG5vcm1hbGl6aW5nLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIG51bWJlci5cbiAgICovXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplRGVjaW1hbE51bWJlcih2YWx1ZSkge1xuICAgIHZhciB0aW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTAwMDAwMDAwMDAwO1xuICAgIHJldHVybiBSRUdFWFBfREVDSU1BTFMudGVzdCh2YWx1ZSkgPyBNYXRoLnJvdW5kKHZhbHVlICogdGltZXMpIC8gdGltZXMgOiB2YWx1ZTtcbiAgfVxuICB2YXIgUkVHRVhQX1NVRkZJWCA9IC9ed2lkdGh8aGVpZ2h0fGxlZnR8dG9wfG1hcmdpbkxlZnR8bWFyZ2luVG9wJC87XG4gIC8qKlxuICAgKiBBcHBseSBzdHlsZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFRoZSBzdHlsZXMgZm9yIGFwcGx5aW5nLlxuICAgKi9cblxuICBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZXMpIHtcbiAgICB2YXIgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGZvckVhY2goc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3BlcnR5KSB7XG4gICAgICBpZiAoUkVHRVhQX1NVRkZJWC50ZXN0KHByb3BlcnR5KSAmJiBpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhIHNwZWNpYWwgY2xhc3MuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgY2xhc3MgdG8gc2VhcmNoLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpYWwgY2xhc3Mgd2FzIGZvdW5kLlxuICAgKi9cblxuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdCA/IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSA6IGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBjbGFzc2VzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIGFkZGVkLlxuICAgKi9cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIoZWxlbWVudC5sZW5ndGgpKSB7XG4gICAgICBmb3JFYWNoKGVsZW1lbnQsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGFkZENsYXNzKGVsZW0sIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpO1xuXG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPCAwKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihlbGVtZW50Lmxlbmd0aCkpIHtcbiAgICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKHZhbHVlKSA+PSAwKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UodmFsdWUsICcnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHRvZ2dsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkZWQgLSBBZGQgb25seS5cbiAgICovXG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgdmFsdWUsIGFkZGVkKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihlbGVtZW50Lmxlbmd0aCkpIHtcbiAgICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWxlbSwgdmFsdWUsIGFkZGVkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSUUxMC0xMSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNsYXNzTGlzdC50b2dnbGVgXG5cblxuICAgIGlmIChhZGRlZCkge1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHZhciBSRUdFWFBfQ0FNRUxfQ0FTRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nO1xuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBnaXZlbiBzdHJpbmcgZnJvbSBjYW1lbENhc2UgdG8ga2ViYWItY2FzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gdHJhbnNmb3JtLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvUGFyYW1DYXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoUkVHRVhQX0NBTUVMX0NBU0UsICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBkYXRhIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgZGF0YSBrZXkgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShlbGVtZW50LCBuYW1lKSB7XG4gICAgaWYgKGlzT2JqZWN0KGVsZW1lbnRbbmFtZV0pKSB7XG4gICAgICByZXR1cm4gZWxlbWVudFtuYW1lXTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRvUGFyYW1DYXNlKG5hbWUpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkYXRhIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gc2V0RGF0YShlbGVtZW50LCBuYW1lLCBkYXRhKSB7XG4gICAgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBlbGVtZW50W25hbWVdID0gZGF0YTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgZWxlbWVudC5kYXRhc2V0W25hbWVdID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSksIGRhdGEpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byByZW1vdmUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZURhdGEoZWxlbWVudCwgbmFtZSkge1xuICAgIGlmIChpc09iamVjdChlbGVtZW50W25hbWVdKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnRbbmFtZV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlbGVtZW50W25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICAvLyAjMTI4IFNhZmFyaSBub3QgYWxsb3dzIHRvIGRlbGV0ZSBkYXRhc2V0IHByb3BlcnR5XG4gICAgICB0cnkge1xuICAgICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0W25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRvUGFyYW1DYXNlKG5hbWUpKSk7XG4gICAgfVxuICB9XG4gIHZhciBSRUdFWFBfU1BBQ0VTID0gL1xcc1xccyovO1xuXG4gIHZhciBvbmNlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICB2YXIgb25jZSA9IGZhbHNlO1xuXG4gICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHt9O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ29uY2UnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG9uY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRXJyb3JzL0dldHRlcl9vbmx5fVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvbmNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgV0lORE9XLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9ydGVkO1xuICB9KCk7XG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghb25jZVN1cHBvcnRlZCkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudC5saXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbZXZlbnRdICYmIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXTtcblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lcnNbZXZlbnRdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQubGlzdGVuZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlKHMpLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBldmVudCBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgZXZlbnQgb3B0aW9ucy5cbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIF9oYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgdmFyIF9lbGVtZW50JGxpc3RlbmVycyA9IGVsZW1lbnQubGlzdGVuZXJzLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gX2VsZW1lbnQkbGlzdGVuZXJzID09PSB2b2lkIDAgPyB7fSA6IF9lbGVtZW50JGxpc3RlbmVycztcblxuICAgICAgICBfaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgX2hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXIuYXBwbHkoZWxlbWVudCwgYXJncyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSA9IF9oYW5kbGVyO1xuICAgICAgICBlbGVtZW50Lmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBfaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoIGV2ZW50IG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHRhcmdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZXZlbnQgdHlwZShzKS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgYWRkaXRpb25hbCBldmVudCBkYXRhLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSW5kaWNhdGUgaWYgdGhlIGV2ZW50IGlzIGRlZmF1bHQgcHJldmVudGVkIG9yIG5vdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCB0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50OyAvLyBFdmVudCBhbmQgQ3VzdG9tRXZlbnQgb24gSUU5LTExIGFyZSBnbG9iYWwgb2JqZWN0cywgbm90IGNvbnN0cnVjdG9yc1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oRXZlbnQpICYmIGlzRnVuY3Rpb24oQ3VzdG9tRXZlbnQpKSB7XG4gICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgIGRldGFpbDogZGF0YSxcbiAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgb2Zmc2V0IGJhc2Ugb24gdGhlIGRvY3VtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBvZmZzZXQgZGF0YS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICB2YXIgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogYm94LmxlZnQgKyAod2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQpLFxuICAgICAgdG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3ApXG4gICAgfTtcbiAgfVxuICB2YXIgbG9jYXRpb24gPSBXSU5ET1cubG9jYXRpb247XG4gIHZhciBSRUdFWFBfT1JJR0lOUyA9IC9eKFxcdys6KVxcL1xcLyhbXjovPyNdKik6PyhcXGQqKS9pO1xuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIFVSTCBpcyBhIGNyb3NzIG9yaWdpbiBVUkwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgdGFyZ2V0IFVSTC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSB7XG4gICAgdmFyIHBhcnRzID0gdXJsLm1hdGNoKFJFR0VYUF9PUklHSU5TKTtcbiAgICByZXR1cm4gcGFydHMgIT09IG51bGwgJiYgKHBhcnRzWzFdICE9PSBsb2NhdGlvbi5wcm90b2NvbCB8fCBwYXJ0c1syXSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgcGFydHNbM10gIT09IGxvY2F0aW9uLnBvcnQpO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgdGltZXN0YW1wIHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgdGFyZ2V0IFVSTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlc3VsdCBVUkwuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFkZFRpbWVzdGFtcCh1cmwpIHtcbiAgICB2YXIgdGltZXN0YW1wID0gXCJ0aW1lc3RhbXA9XCIuY29uY2F0KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICByZXR1cm4gdXJsICsgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHRpbWVzdGFtcDtcbiAgfVxuICAvKipcbiAgICogR2V0IHRyYW5zZm9ybXMgYmFzZSBvbiB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIHRhcmdldCBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5zIHRyYW5zZm9ybSB2YWx1ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFRyYW5zZm9ybXMoX3JlZikge1xuICAgIHZhciByb3RhdGUgPSBfcmVmLnJvdGF0ZSxcbiAgICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgICB0cmFuc2xhdGVYID0gX3JlZi50cmFuc2xhdGVYLFxuICAgICAgICB0cmFuc2xhdGVZID0gX3JlZi50cmFuc2xhdGVZO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmIChpc051bWJlcih0cmFuc2xhdGVYKSAmJiB0cmFuc2xhdGVYICE9PSAwKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHRyYW5zbGF0ZVgsIFwicHgpXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIodHJhbnNsYXRlWSkgJiYgdHJhbnNsYXRlWSAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJ0cmFuc2xhdGVZKFwiLmNvbmNhdCh0cmFuc2xhdGVZLCBcInB4KVwiKSk7XG4gICAgfSAvLyBSb3RhdGUgc2hvdWxkIGNvbWUgZmlyc3QgYmVmb3JlIHNjYWxlIHRvIG1hdGNoIG9yaWVudGF0aW9uIHRyYW5zZm9ybVxuXG5cbiAgICBpZiAoaXNOdW1iZXIocm90YXRlKSAmJiByb3RhdGUgIT09IDApIHtcbiAgICAgIHZhbHVlcy5wdXNoKFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkgJiYgc2NhbGVYICE9PSAxKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInNjYWxlWChcIi5jb25jYXQoc2NhbGVYLCBcIilcIikpO1xuICAgIH1cblxuICAgIGlmIChpc051bWJlcihzY2FsZVkpICYmIHNjYWxlWSAhPT0gMSkge1xuICAgICAgdmFsdWVzLnB1c2goXCJzY2FsZVkoXCIuY29uY2F0KHNjYWxlWSwgXCIpXCIpKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtID0gdmFsdWVzLmxlbmd0aCA/IHZhbHVlcy5qb2luKCcgJykgOiAnbm9uZSc7XG4gICAgcmV0dXJuIHtcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgbXNUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBtYXggcmF0aW8gb2YgYSBncm91cCBvZiBwb2ludGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvaW50ZXJzIC0gVGhlIHRhcmdldCBwb2ludGVycy5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlc3VsdCByYXRpby5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0TWF4Wm9vbVJhdGlvKHBvaW50ZXJzKSB7XG4gICAgdmFyIHBvaW50ZXJzMiA9IF9vYmplY3RTcHJlYWQyKHt9LCBwb2ludGVycyk7XG5cbiAgICB2YXIgcmF0aW9zID0gW107XG4gICAgZm9yRWFjaChwb2ludGVycywgZnVuY3Rpb24gKHBvaW50ZXIsIHBvaW50ZXJJZCkge1xuICAgICAgZGVsZXRlIHBvaW50ZXJzMltwb2ludGVySWRdO1xuICAgICAgZm9yRWFjaChwb2ludGVyczIsIGZ1bmN0aW9uIChwb2ludGVyMikge1xuICAgICAgICB2YXIgeDEgPSBNYXRoLmFicyhwb2ludGVyLnN0YXJ0WCAtIHBvaW50ZXIyLnN0YXJ0WCk7XG4gICAgICAgIHZhciB5MSA9IE1hdGguYWJzKHBvaW50ZXIuc3RhcnRZIC0gcG9pbnRlcjIuc3RhcnRZKTtcbiAgICAgICAgdmFyIHgyID0gTWF0aC5hYnMocG9pbnRlci5lbmRYIC0gcG9pbnRlcjIuZW5kWCk7XG4gICAgICAgIHZhciB5MiA9IE1hdGguYWJzKHBvaW50ZXIuZW5kWSAtIHBvaW50ZXIyLmVuZFkpO1xuICAgICAgICB2YXIgejEgPSBNYXRoLnNxcnQoeDEgKiB4MSArIHkxICogeTEpO1xuICAgICAgICB2YXIgejIgPSBNYXRoLnNxcnQoeDIgKiB4MiArIHkyICogeTIpO1xuICAgICAgICB2YXIgcmF0aW8gPSAoejIgLSB6MSkgLyB6MTtcbiAgICAgICAgcmF0aW9zLnB1c2gocmF0aW8pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmF0aW9zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhhKSA8IE1hdGguYWJzKGIpO1xuICAgIH0pO1xuICAgIHJldHVybiByYXRpb3NbMF07XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHBvaW50ZXIgZnJvbSBhbiBldmVudCBvYmplY3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIFRoZSB0YXJnZXQgZXZlbnQgb2JqZWN0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuZE9ubHkgLSBJbmRpY2F0ZXMgaWYgb25seSByZXR1cm5zIHRoZSBlbmQgcG9pbnQgY29vcmRpbmF0ZSBvciBub3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgcG9pbnRlciBjb250YWlucyBzdGFydCBhbmQvb3IgZW5kIHBvaW50IGNvb3JkaW5hdGVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRQb2ludGVyKF9yZWYyLCBlbmRPbmx5KSB7XG4gICAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgICAgIHBhZ2VZID0gX3JlZjIucGFnZVk7XG4gICAgdmFyIGVuZCA9IHtcbiAgICAgIGVuZFg6IHBhZ2VYLFxuICAgICAgZW5kWTogcGFnZVlcbiAgICB9O1xuICAgIHJldHVybiBlbmRPbmx5ID8gZW5kIDogX29iamVjdFNwcmVhZDIoe1xuICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgIHN0YXJ0WTogcGFnZVlcbiAgICB9LCBlbmQpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjZW50ZXIgcG9pbnQgY29vcmRpbmF0ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0UG9pbnRlcnNDZW50ZXIocG9pbnRlcnMpIHtcbiAgICB2YXIgcGFnZVggPSAwO1xuICAgIHZhciBwYWdlWSA9IDA7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBmb3JFYWNoKHBvaW50ZXJzLCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBzdGFydFggPSBfcmVmMy5zdGFydFgsXG4gICAgICAgICAgc3RhcnRZID0gX3JlZjMuc3RhcnRZO1xuICAgICAgcGFnZVggKz0gc3RhcnRYO1xuICAgICAgcGFnZVkgKz0gc3RhcnRZO1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9KTtcbiAgICBwYWdlWCAvPSBjb3VudDtcbiAgICBwYWdlWSAvPSBjb3VudDtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZVg6IHBhZ2VYLFxuICAgICAgcGFnZVk6IHBhZ2VZXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBtYXggc2l6ZXMgaW4gYSByZWN0YW5nbGUgdW5kZXIgdGhlIGdpdmVuIGFzcGVjdCByYXRpby5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgb3JpZ2luYWwgc2l6ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT0nY29udGFpbiddIC0gVGhlIGFkanVzdCB0eXBlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRBZGp1c3RlZFNpemVzKF9yZWY0KSAvLyBvciAnY292ZXInXG4gIHtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBfcmVmNC5hc3BlY3RSYXRpbyxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjQuaGVpZ2h0LFxuICAgICAgICB3aWR0aCA9IF9yZWY0LndpZHRoO1xuICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnY29udGFpbic7XG4gICAgdmFyIGlzVmFsaWRXaWR0aCA9IGlzUG9zaXRpdmVOdW1iZXIod2lkdGgpO1xuICAgIHZhciBpc1ZhbGlkSGVpZ2h0ID0gaXNQb3NpdGl2ZU51bWJlcihoZWlnaHQpO1xuXG4gICAgaWYgKGlzVmFsaWRXaWR0aCAmJiBpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB2YXIgYWRqdXN0ZWRXaWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2NvbnRhaW4nICYmIGFkanVzdGVkV2lkdGggPiB3aWR0aCB8fCB0eXBlID09PSAnY292ZXInICYmIGFkanVzdGVkV2lkdGggPCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRXaWR0aCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBuZXcgc2l6ZXMgb2YgYSByZWN0YW5nbGUgYWZ0ZXIgcm90YXRlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgb3JpZ2luYWwgc2l6ZXMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgc2l6ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFJvdGF0ZWRTaXplcyhfcmVmNSkge1xuICAgIHZhciB3aWR0aCA9IF9yZWY1LndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmNS5oZWlnaHQsXG4gICAgICAgIGRlZ3JlZSA9IF9yZWY1LmRlZ3JlZTtcbiAgICBkZWdyZWUgPSBNYXRoLmFicyhkZWdyZWUpICUgMTgwO1xuXG4gICAgaWYgKGRlZ3JlZSA9PT0gOTApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgIGhlaWdodDogd2lkdGhcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFyYyA9IGRlZ3JlZSAlIDkwICogTWF0aC5QSSAvIDE4MDtcbiAgICB2YXIgc2luQXJjID0gTWF0aC5zaW4oYXJjKTtcbiAgICB2YXIgY29zQXJjID0gTWF0aC5jb3MoYXJjKTtcbiAgICB2YXIgbmV3V2lkdGggPSB3aWR0aCAqIGNvc0FyYyArIGhlaWdodCAqIHNpbkFyYztcbiAgICB2YXIgbmV3SGVpZ2h0ID0gd2lkdGggKiBzaW5BcmMgKyBoZWlnaHQgKiBjb3NBcmM7XG4gICAgcmV0dXJuIGRlZ3JlZSA+IDkwID8ge1xuICAgICAgd2lkdGg6IG5ld0hlaWdodCxcbiAgICAgIGhlaWdodDogbmV3V2lkdGhcbiAgICB9IDoge1xuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBjYW52YXMgd2hpY2ggZHJldyB0aGUgZ2l2ZW4gaW1hZ2UuXG4gICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gaW1hZ2UgLSBUaGUgaW1hZ2UgZm9yIGRyYXdpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbWFnZURhdGEgLSBUaGUgaW1hZ2UgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNhbnZhc0RhdGEgLSBUaGUgY2FudmFzIGRhdGEuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMuXG4gICAqIEByZXR1cm5zIHtIVE1MQ2FudmFzRWxlbWVudH0gVGhlIHJlc3VsdCBjYW52YXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldFNvdXJjZUNhbnZhcyhpbWFnZSwgX3JlZjYsIF9yZWY3LCBfcmVmOCkge1xuICAgIHZhciBpbWFnZUFzcGVjdFJhdGlvID0gX3JlZjYuYXNwZWN0UmF0aW8sXG4gICAgICAgIGltYWdlTmF0dXJhbFdpZHRoID0gX3JlZjYubmF0dXJhbFdpZHRoLFxuICAgICAgICBpbWFnZU5hdHVyYWxIZWlnaHQgPSBfcmVmNi5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICBfcmVmNiRyb3RhdGUgPSBfcmVmNi5yb3RhdGUsXG4gICAgICAgIHJvdGF0ZSA9IF9yZWY2JHJvdGF0ZSA9PT0gdm9pZCAwID8gMCA6IF9yZWY2JHJvdGF0ZSxcbiAgICAgICAgX3JlZjYkc2NhbGVYID0gX3JlZjYuc2NhbGVYLFxuICAgICAgICBzY2FsZVggPSBfcmVmNiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVgsXG4gICAgICAgIF9yZWY2JHNjYWxlWSA9IF9yZWY2LnNjYWxlWSxcbiAgICAgICAgc2NhbGVZID0gX3JlZjYkc2NhbGVZID09PSB2b2lkIDAgPyAxIDogX3JlZjYkc2NhbGVZO1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWY3LmFzcGVjdFJhdGlvLFxuICAgICAgICBuYXR1cmFsV2lkdGggPSBfcmVmNy5uYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmNy5uYXR1cmFsSGVpZ2h0O1xuICAgIHZhciBfcmVmOCRmaWxsQ29sb3IgPSBfcmVmOC5maWxsQ29sb3IsXG4gICAgICAgIGZpbGxDb2xvciA9IF9yZWY4JGZpbGxDb2xvciA9PT0gdm9pZCAwID8gJ3RyYW5zcGFyZW50JyA6IF9yZWY4JGZpbGxDb2xvcixcbiAgICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQgPSBfcmVmOCRpbWFnZVNtb290aGluZ0UgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmOCRpbWFnZVNtb290aGluZ0UsXG4gICAgICAgIF9yZWY4JGltYWdlU21vb3RoaW5nUSA9IF9yZWY4LmltYWdlU21vb3RoaW5nUXVhbGl0eSxcbiAgICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID09PSB2b2lkIDAgPyAnbG93JyA6IF9yZWY4JGltYWdlU21vb3RoaW5nUSxcbiAgICAgICAgX3JlZjgkbWF4V2lkdGggPSBfcmVmOC5tYXhXaWR0aCxcbiAgICAgICAgbWF4V2lkdGggPSBfcmVmOCRtYXhXaWR0aCA9PT0gdm9pZCAwID8gSW5maW5pdHkgOiBfcmVmOCRtYXhXaWR0aCxcbiAgICAgICAgX3JlZjgkbWF4SGVpZ2h0ID0gX3JlZjgubWF4SGVpZ2h0LFxuICAgICAgICBtYXhIZWlnaHQgPSBfcmVmOCRtYXhIZWlnaHQgPT09IHZvaWQgMCA/IEluZmluaXR5IDogX3JlZjgkbWF4SGVpZ2h0LFxuICAgICAgICBfcmVmOCRtaW5XaWR0aCA9IF9yZWY4Lm1pbldpZHRoLFxuICAgICAgICBtaW5XaWR0aCA9IF9yZWY4JG1pbldpZHRoID09PSB2b2lkIDAgPyAwIDogX3JlZjgkbWluV2lkdGgsXG4gICAgICAgIF9yZWY4JG1pbkhlaWdodCA9IF9yZWY4Lm1pbkhlaWdodCxcbiAgICAgICAgbWluSGVpZ2h0ID0gX3JlZjgkbWluSGVpZ2h0ID09PSB2b2lkIDAgPyAwIDogX3JlZjgkbWluSGVpZ2h0O1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBtYXhTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICB9KTtcbiAgICB2YXIgbWluU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgIGhlaWdodDogbWluSGVpZ2h0XG4gICAgfSwgJ2NvdmVyJyk7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4obWF4U2l6ZXMud2lkdGgsIE1hdGgubWF4KG1pblNpemVzLndpZHRoLCBuYXR1cmFsV2lkdGgpKTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4obWF4U2l6ZXMuaGVpZ2h0LCBNYXRoLm1heChtaW5TaXplcy5oZWlnaHQsIG5hdHVyYWxIZWlnaHQpKTsgLy8gTm90ZTogc2hvdWxkIGFsd2F5cyB1c2UgaW1hZ2UncyBuYXR1cmFsIHNpemVzIGZvciBkcmF3aW5nIGFzXG4gICAgLy8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCA9PT0gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0IHdoZW4gcm90YXRlICUgMTgwID09PSA5MFxuXG4gICAgdmFyIGRlc3RNYXhTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGltYWdlQXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICBoZWlnaHQ6IG1heEhlaWdodFxuICAgIH0pO1xuICAgIHZhciBkZXN0TWluU2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgIGFzcGVjdFJhdGlvOiBpbWFnZUFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICB9LCAnY292ZXInKTtcbiAgICB2YXIgZGVzdFdpZHRoID0gTWF0aC5taW4oZGVzdE1heFNpemVzLndpZHRoLCBNYXRoLm1heChkZXN0TWluU2l6ZXMud2lkdGgsIGltYWdlTmF0dXJhbFdpZHRoKSk7XG4gICAgdmFyIGRlc3RIZWlnaHQgPSBNYXRoLm1pbihkZXN0TWF4U2l6ZXMuaGVpZ2h0LCBNYXRoLm1heChkZXN0TWluU2l6ZXMuaGVpZ2h0LCBpbWFnZU5hdHVyYWxIZWlnaHQpKTtcbiAgICB2YXIgcGFyYW1zID0gWy1kZXN0V2lkdGggLyAyLCAtZGVzdEhlaWdodCAvIDIsIGRlc3RXaWR0aCwgZGVzdEhlaWdodF07XG4gICAgY2FudmFzLndpZHRoID0gbm9ybWFsaXplRGVjaW1hbE51bWJlcih3aWR0aCk7XG4gICAgY2FudmFzLmhlaWdodCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoaGVpZ2h0KTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG4gICAgY29udGV4dC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBpbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gICAgY29udGV4dC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBpbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW2ltYWdlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKHBhcmFtKSk7XG4gICAgfSkpKSk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuICB2YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgbGVuZ3RoICs9IHN0YXJ0O1xuXG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHN0ciArPSBmcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9IRUFEID0gL15kYXRhOi4qLC87XG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gRGF0YSBVUkwgdG8gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YVVSTCAtIFRoZSBEYXRhIFVSTCB0byB0cmFuc2Zvcm0uXG4gICAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gVGhlIHJlc3VsdCBhcnJheSBidWZmZXIuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRhdGFVUkxUb0FycmF5QnVmZmVyKGRhdGFVUkwpIHtcbiAgICB2YXIgYmFzZTY0ID0gZGF0YVVSTC5yZXBsYWNlKFJFR0VYUF9EQVRBX1VSTF9IRUFELCAnJyk7XG4gICAgdmFyIGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYmluYXJ5Lmxlbmd0aCk7XG4gICAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgIGZvckVhY2godWludDgsIGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgdWludDhbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gIH1cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICAgKi9cblxuICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvRGF0YVVSTChhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgICB2YXIgY2h1bmtzID0gW107IC8vIENodW5rIFR5cGVkIEFycmF5IGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgKCM0MzUpXG5cbiAgICB2YXIgY2h1bmtTaXplID0gODE5MjtcbiAgICB2YXIgdWludDggPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG5cbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cblxuICAgIHJldHVybiBcImRhdGE6XCIuY29uY2F0KG1pbWVUeXBlLCBcIjtiYXNlNjQsXCIpLmNvbmNhdChidG9hKGNodW5rcy5qb2luKCcnKSkpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVzZXRBbmRHZXRPcmllbnRhdGlvbihhcnJheUJ1ZmZlcikge1xuICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhhcnJheUJ1ZmZlcik7XG4gICAgdmFyIG9yaWVudGF0aW9uOyAvLyBJZ25vcmVzIHJhbmdlIGVycm9yIHdoZW4gdGhlIGltYWdlIGRvZXMgbm90IGhhdmUgY29ycmVjdCBFeGlmIGluZm9ybWF0aW9uXG5cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7IC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcblxuICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KDApID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KDEpID09PSAweEQ4KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBkYXRhVmlldy5ieXRlTGVuZ3RoO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMjtcblxuICAgICAgICB3aGlsZSAob2Zmc2V0ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpID09PSAweEZGICYmIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDEpID09PSAweEUxKSB7XG4gICAgICAgICAgICBhcHAxU3RhcnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXBwMVN0YXJ0KSB7XG4gICAgICAgIHZhciBleGlmSURDb2RlID0gYXBwMVN0YXJ0ICsgNDtcbiAgICAgICAgdmFyIHRpZmZPZmZzZXQgPSBhcHAxU3RhcnQgKyAxMDtcblxuICAgICAgICBpZiAoZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBleGlmSURDb2RlLCA0KSA9PT0gJ0V4aWYnKSB7XG4gICAgICAgICAgdmFyIGVuZGlhbm5lc3MgPSBkYXRhVmlldy5nZXRVaW50MTYodGlmZk9mZnNldCk7XG4gICAgICAgICAgbGl0dGxlRW5kaWFuID0gZW5kaWFubmVzcyA9PT0gMHg0OTQ5O1xuXG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENERcbiAgICAgICAgICAvKiBiaWdFbmRpYW4gKi9cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0ICsgMiwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMDJBKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpcnN0SUZET2Zmc2V0ID49IDB4MDAwMDAwMDgpIHtcbiAgICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpZmRTdGFydCkge1xuICAgICAgICB2YXIgX2xlbmd0aCA9IGRhdGFWaWV3LmdldFVpbnQxNihpZmRTdGFydCwgbGl0dGxlRW5kaWFuKTtcblxuICAgICAgICB2YXIgX29mZnNldDtcblxuICAgICAgICB2YXIgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgX2xlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgX29mZnNldCA9IGlmZFN0YXJ0ICsgaSAqIDEyICsgMjtcblxuICAgICAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKSA9PT0gMHgwMTEyXG4gICAgICAgICAgLyogT3JpZW50YXRpb24gKi9cbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgLy8gOCBpcyB0aGUgb2Zmc2V0IG9mIHRoZSBjdXJyZW50IHRhZydzIHZhbHVlXG4gICAgICAgICAgICAgIF9vZmZzZXQgKz0gODsgLy8gR2V0IHRoZSBvcmlnaW5hbCBvcmllbnRhdGlvbiB2YWx1ZVxuXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gZGF0YVZpZXcuZ2V0VWludDE2KF9vZmZzZXQsIGxpdHRsZUVuZGlhbik7IC8vIE92ZXJyaWRlIHRoZSBvcmllbnRhdGlvbiB3aXRoIGl0cyBkZWZhdWx0IHZhbHVlXG5cbiAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG9yaWVudGF0aW9uID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cbiAgLyoqXG4gICAqIFBhcnNlIEV4aWYgT3JpZW50YXRpb24gdmFsdWUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcmllbnRhdGlvbiAtIFRoZSBvcmllbnRhdGlvbiB0byBwYXJzZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHBhcnNlZCByZXN1bHQuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIC8vIEZsaXAgaG9yaXpvbnRhbFxuICAgICAgY2FzZSAyOlxuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODDCsFxuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJvdGF0ZSA9IC0xODA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbFxuXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIEZsaXAgdmVydGljYWwgYW5kIHJvdGF0ZSByaWdodCA5MMKwXG5cbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIFJvdGF0ZSByaWdodCA5MMKwXG5cbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTDCsFxuXG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBSb3RhdGUgbGVmdCA5MMKwXG5cbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm90YXRlOiByb3RhdGUsXG4gICAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICAgIHNjYWxlWTogc2NhbGVZXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZW5kZXIgPSB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB0aGlzLmluaXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuaW5pdENhbnZhcygpO1xuICAgICAgdGhpcy5pbml0Q3JvcEJveCgpO1xuICAgICAgdGhpcy5yZW5kZXJDYW52YXMoKTtcblxuICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXRDb250YWluZXI6IGZ1bmN0aW9uIGluaXRDb250YWluZXIoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgIGNyb3BwZXIgPSB0aGlzLmNyb3BwZXI7XG4gICAgICBhZGRDbGFzcyhjcm9wcGVyLCBDTEFTU19ISURERU4pO1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgQ0xBU1NfSElEREVOKTtcbiAgICAgIHZhciBjb250YWluZXJEYXRhID0ge1xuICAgICAgICB3aWR0aDogTWF0aC5tYXgoY29udGFpbmVyLm9mZnNldFdpZHRoLCBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJXaWR0aCkgfHwgMjAwKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLm1heChjb250YWluZXIub2Zmc2V0SGVpZ2h0LCBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJIZWlnaHQpIHx8IDEwMClcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbnRhaW5lckRhdGEgPSBjb250YWluZXJEYXRhO1xuICAgICAgc2V0U3R5bGUoY3JvcHBlciwge1xuICAgICAgICB3aWR0aDogY29udGFpbmVyRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEYXRhLmhlaWdodFxuICAgICAgfSk7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgICAgcmVtb3ZlQ2xhc3MoY3JvcHBlciwgQ0xBU1NfSElEREVOKTtcbiAgICB9LFxuICAgIC8vIENhbnZhcyAoaW1hZ2Ugd3JhcHBlcilcbiAgICBpbml0Q2FudmFzOiBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgICAgdmFyIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGEsXG4gICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICB2YXIgdmlld01vZGUgPSB0aGlzLm9wdGlvbnMudmlld01vZGU7XG4gICAgICB2YXIgcm90YXRlZCA9IE1hdGguYWJzKGltYWdlRGF0YS5yb3RhdGUpICUgMTgwID09PSA5MDtcbiAgICAgIHZhciBuYXR1cmFsV2lkdGggPSByb3RhdGVkID8gaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgOiBpbWFnZURhdGEubmF0dXJhbFdpZHRoO1xuICAgICAgdmFyIG5hdHVyYWxIZWlnaHQgPSByb3RhdGVkID8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCA6IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgIHZhciBjYW52YXNXaWR0aCA9IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICB2YXIgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS5oZWlnaHQ7XG5cbiAgICAgIGlmIChjb250YWluZXJEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY29udGFpbmVyRGF0YS53aWR0aCkge1xuICAgICAgICBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICBjYW52YXNXaWR0aCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgIHdpZHRoOiBjYW52YXNXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNIZWlnaHRcbiAgICAgIH07XG4gICAgICBjYW52YXNEYXRhLmxlZnQgPSAoY29udGFpbmVyRGF0YS53aWR0aCAtIGNhbnZhc1dpZHRoKSAvIDI7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IChjb250YWluZXJEYXRhLmhlaWdodCAtIGNhbnZhc0hlaWdodCkgLyAyO1xuICAgICAgY2FudmFzRGF0YS5vbGRMZWZ0ID0gY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgY2FudmFzRGF0YS5vbGRUb3AgPSBjYW52YXNEYXRhLnRvcDtcbiAgICAgIHRoaXMuY2FudmFzRGF0YSA9IGNhbnZhc0RhdGE7XG4gICAgICB0aGlzLmxpbWl0ZWQgPSB2aWV3TW9kZSA9PT0gMSB8fCB2aWV3TW9kZSA9PT0gMjtcbiAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7XG4gICAgICB0aGlzLmluaXRpYWxJbWFnZURhdGEgPSBhc3NpZ24oe30sIGltYWdlRGF0YSk7XG4gICAgICB0aGlzLmluaXRpYWxDYW52YXNEYXRhID0gYXNzaWduKHt9LCBjYW52YXNEYXRhKTtcbiAgICB9LFxuICAgIGxpbWl0Q2FudmFzOiBmdW5jdGlvbiBsaW1pdENhbnZhcyhzaXplTGltaXRlZCwgcG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgICAgdmFyIHZpZXdNb2RlID0gb3B0aW9ucy52aWV3TW9kZTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGNhbnZhc0RhdGEuYXNwZWN0UmF0aW87XG4gICAgICB2YXIgY3JvcHBlZCA9IHRoaXMuY3JvcHBlZCAmJiBjcm9wQm94RGF0YTtcblxuICAgICAgaWYgKHNpemVMaW1pdGVkKSB7XG4gICAgICAgIHZhciBtaW5DYW52YXNXaWR0aCA9IE51bWJlcihvcHRpb25zLm1pbkNhbnZhc1dpZHRoKSB8fCAwO1xuICAgICAgICB2YXIgbWluQ2FudmFzSGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ2FudmFzSGVpZ2h0KSB8fCAwO1xuXG4gICAgICAgIGlmICh2aWV3TW9kZSA+IDEpIHtcbiAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IE1hdGgubWF4KG1pbkNhbnZhc1dpZHRoLCBjb250YWluZXJEYXRhLndpZHRoKTtcbiAgICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBNYXRoLm1heChtaW5DYW52YXNIZWlnaHQsIGNvbnRhaW5lckRhdGEuaGVpZ2h0KTtcblxuICAgICAgICAgIGlmICh2aWV3TW9kZSA9PT0gMykge1xuICAgICAgICAgICAgaWYgKG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvID4gbWluQ2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc0hlaWdodCA9IG1pbkNhbnZhc1dpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlID4gMCkge1xuICAgICAgICAgIGlmIChtaW5DYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBNYXRoLm1heChtaW5DYW52YXNXaWR0aCwgY3JvcHBlZCA/IGNyb3BCb3hEYXRhLndpZHRoIDogMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5DYW52YXNIZWlnaHQpIHtcbiAgICAgICAgICAgIG1pbkNhbnZhc0hlaWdodCA9IE1hdGgubWF4KG1pbkNhbnZhc0hlaWdodCwgY3JvcHBlZCA/IGNyb3BCb3hEYXRhLmhlaWdodCA6IDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3JvcHBlZCkge1xuICAgICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBjcm9wQm94RGF0YS53aWR0aDtcbiAgICAgICAgICAgIG1pbkNhbnZhc0hlaWdodCA9IGNyb3BCb3hEYXRhLmhlaWdodDtcblxuICAgICAgICAgICAgaWYgKG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvID4gbWluQ2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc0hlaWdodCA9IG1pbkNhbnZhc1dpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtaW5DYW52YXNXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1pbkNhbnZhc0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBtaW5DYW52YXNXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzLndpZHRoO1xuICAgICAgICBtaW5DYW52YXNIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplcy5oZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEubWluV2lkdGggPSBtaW5DYW52YXNXaWR0aDtcbiAgICAgICAgY2FudmFzRGF0YS5taW5IZWlnaHQgPSBtaW5DYW52YXNIZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEubWF4V2lkdGggPSBJbmZpbml0eTtcbiAgICAgICAgY2FudmFzRGF0YS5tYXhIZWlnaHQgPSBJbmZpbml0eTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgICBpZiAodmlld01vZGUgPiAoY3JvcHBlZCA/IDAgOiAxKSkge1xuICAgICAgICAgIHZhciBuZXdDYW52YXNMZWZ0ID0gY29udGFpbmVyRGF0YS53aWR0aCAtIGNhbnZhc0RhdGEud2lkdGg7XG4gICAgICAgICAgdmFyIG5ld0NhbnZhc1RvcCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5Ub3AgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc0xlZnQpO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzVG9wKTtcblxuICAgICAgICAgIGlmIChjcm9wcGVkICYmIHRoaXMubGltaXRlZCkge1xuICAgICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oY3JvcEJveERhdGEubGVmdCwgY3JvcEJveERhdGEubGVmdCArIChjcm9wQm94RGF0YS53aWR0aCAtIGNhbnZhc0RhdGEud2lkdGgpKTtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oY3JvcEJveERhdGEudG9wLCBjcm9wQm94RGF0YS50b3AgKyAoY3JvcEJveERhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQpKTtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQ7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcblxuICAgICAgICAgICAgaWYgKHZpZXdNb2RlID09PSAyKSB7XG4gICAgICAgICAgICAgIGlmIChjYW52YXNEYXRhLndpZHRoID49IGNvbnRhaW5lckRhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjYW52YXNEYXRhLm1pbkxlZnQgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNMZWZ0KTtcbiAgICAgICAgICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBNYXRoLm1heCgwLCBuZXdDYW52YXNMZWZ0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjYW52YXNEYXRhLmhlaWdodCA+PSBjb250YWluZXJEYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc1RvcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gLWNhbnZhc0RhdGEud2lkdGg7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5Ub3AgPSAtY2FudmFzRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gY29udGFpbmVyRGF0YS53aWR0aDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJDYW52YXM6IGZ1bmN0aW9uIHJlbmRlckNhbnZhcyhjaGFuZ2VkLCB0cmFuc2Zvcm1lZCkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG5cbiAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICB2YXIgX2dldFJvdGF0ZWRTaXplcyA9IGdldFJvdGF0ZWRTaXplcyh7XG4gICAgICAgICAgd2lkdGg6IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggKiBNYXRoLmFicyhpbWFnZURhdGEuc2NhbGVYIHx8IDEpLFxuICAgICAgICAgIGhlaWdodDogaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgKiBNYXRoLmFicyhpbWFnZURhdGEuc2NhbGVZIHx8IDEpLFxuICAgICAgICAgIGRlZ3JlZTogaW1hZ2VEYXRhLnJvdGF0ZSB8fCAwXG4gICAgICAgIH0pLFxuICAgICAgICAgICAgbmF0dXJhbFdpZHRoID0gX2dldFJvdGF0ZWRTaXplcy53aWR0aCxcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfZ2V0Um90YXRlZFNpemVzLmhlaWdodDtcblxuICAgICAgICB2YXIgd2lkdGggPSBjYW52YXNEYXRhLndpZHRoICogKG5hdHVyYWxXaWR0aCAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IGNhbnZhc0RhdGEuaGVpZ2h0ICogKG5hdHVyYWxIZWlnaHQgLyBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKHdpZHRoIC0gY2FudmFzRGF0YS53aWR0aCkgLyAyO1xuICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAoaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQpIC8gMjtcbiAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY2FudmFzRGF0YS5hc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbnZhc0RhdGEud2lkdGggPiBjYW52YXNEYXRhLm1heFdpZHRoIHx8IGNhbnZhc0RhdGEud2lkdGggPCBjYW52YXNEYXRhLm1pbldpZHRoKSB7XG4gICAgICAgIGNhbnZhc0RhdGEubGVmdCA9IGNhbnZhc0RhdGEub2xkTGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbnZhc0RhdGEuaGVpZ2h0ID4gY2FudmFzRGF0YS5tYXhIZWlnaHQgfHwgY2FudmFzRGF0YS5oZWlnaHQgPCBjYW52YXNEYXRhLm1pbkhlaWdodCkge1xuICAgICAgICBjYW52YXNEYXRhLnRvcCA9IGNhbnZhc0RhdGEub2xkVG9wO1xuICAgICAgfVxuXG4gICAgICBjYW52YXNEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5taW5XaWR0aCksIGNhbnZhc0RhdGEubWF4V2lkdGgpO1xuICAgICAgY2FudmFzRGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5taW5IZWlnaHQpLCBjYW52YXNEYXRhLm1heEhlaWdodCk7XG4gICAgICB0aGlzLmxpbWl0Q2FudmFzKGZhbHNlLCB0cnVlKTtcbiAgICAgIGNhbnZhc0RhdGEubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEubGVmdCwgY2FudmFzRGF0YS5taW5MZWZ0KSwgY2FudmFzRGF0YS5tYXhMZWZ0KTtcbiAgICAgIGNhbnZhc0RhdGEudG9wID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS50b3AsIGNhbnZhc0RhdGEubWluVG9wKSwgY2FudmFzRGF0YS5tYXhUb3ApO1xuICAgICAgY2FudmFzRGF0YS5vbGRMZWZ0ID0gY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgY2FudmFzRGF0YS5vbGRUb3AgPSBjYW52YXNEYXRhLnRvcDtcbiAgICAgIHNldFN0eWxlKHRoaXMuY2FudmFzLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogY2FudmFzRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGNhbnZhc0RhdGEubGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogY2FudmFzRGF0YS50b3BcbiAgICAgIH0pKSk7XG4gICAgICB0aGlzLnJlbmRlckltYWdlKGNoYW5nZWQpO1xuXG4gICAgICBpZiAodGhpcy5jcm9wcGVkICYmIHRoaXMubGltaXRlZCkge1xuICAgICAgICB0aGlzLmxpbWl0Q3JvcEJveCh0cnVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlckltYWdlOiBmdW5jdGlvbiByZW5kZXJJbWFnZShjaGFuZ2VkKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICAgIHZhciB3aWR0aCA9IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggKiAoY2FudmFzRGF0YS53aWR0aCAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBpbWFnZURhdGEubmF0dXJhbEhlaWdodCAqIChjYW52YXNEYXRhLmhlaWdodCAvIGNhbnZhc0RhdGEubmF0dXJhbEhlaWdodCk7XG4gICAgICBhc3NpZ24oaW1hZ2VEYXRhLCB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIGxlZnQ6IChjYW52YXNEYXRhLndpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoY2FudmFzRGF0YS5oZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgICAgfSk7XG4gICAgICBzZXRTdHlsZSh0aGlzLmltYWdlLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogaW1hZ2VEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGltYWdlRGF0YS5oZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoYXNzaWduKHtcbiAgICAgICAgdHJhbnNsYXRlWDogaW1hZ2VEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGltYWdlRGF0YS50b3BcbiAgICAgIH0sIGltYWdlRGF0YSkpKSk7XG5cbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMub3V0cHV0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbml0Q3JvcEJveDogZnVuY3Rpb24gaW5pdENyb3BCb3goKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbyB8fCBvcHRpb25zLmluaXRpYWxBc3BlY3RSYXRpbztcbiAgICAgIHZhciBhdXRvQ3JvcEFyZWEgPSBOdW1iZXIob3B0aW9ucy5hdXRvQ3JvcEFyZWEpIHx8IDAuODtcbiAgICAgIHZhciBjcm9wQm94RGF0YSA9IHtcbiAgICAgICAgd2lkdGg6IGNhbnZhc0RhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogY2FudmFzRGF0YS5oZWlnaHRcbiAgICAgIH07XG5cbiAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICBpZiAoY2FudmFzRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbyA+IGNhbnZhc0RhdGEud2lkdGgpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBjcm9wQm94RGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gY3JvcEJveERhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jcm9wQm94RGF0YSA9IGNyb3BCb3hEYXRhO1xuICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7IC8vIEluaXRpYWxpemUgYXV0byBjcm9wIGFyZWFcblxuICAgICAgY3JvcEJveERhdGEud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS53aWR0aCwgY3JvcEJveERhdGEubWluV2lkdGgpLCBjcm9wQm94RGF0YS5tYXhXaWR0aCk7XG4gICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5oZWlnaHQsIGNyb3BCb3hEYXRhLm1pbkhlaWdodCksIGNyb3BCb3hEYXRhLm1heEhlaWdodCk7IC8vIFRoZSB3aWR0aC9oZWlnaHQgb2YgYXV0byBjcm9wIGFyZWEgbXVzdCBsYXJnZSB0aGFuIFwibWluV2lkdGgvSGVpZ2h0XCJcblxuICAgICAgY3JvcEJveERhdGEud2lkdGggPSBNYXRoLm1heChjcm9wQm94RGF0YS5taW5XaWR0aCwgY3JvcEJveERhdGEud2lkdGggKiBhdXRvQ3JvcEFyZWEpO1xuICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5tYXgoY3JvcEJveERhdGEubWluSGVpZ2h0LCBjcm9wQm94RGF0YS5oZWlnaHQgKiBhdXRvQ3JvcEFyZWEpO1xuICAgICAgY3JvcEJveERhdGEubGVmdCA9IGNhbnZhc0RhdGEubGVmdCArIChjYW52YXNEYXRhLndpZHRoIC0gY3JvcEJveERhdGEud2lkdGgpIC8gMjtcbiAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGNhbnZhc0RhdGEudG9wICsgKGNhbnZhc0RhdGEuaGVpZ2h0IC0gY3JvcEJveERhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICBjcm9wQm94RGF0YS5vbGRMZWZ0ID0gY3JvcEJveERhdGEubGVmdDtcbiAgICAgIGNyb3BCb3hEYXRhLm9sZFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcbiAgICAgIHRoaXMuaW5pdGlhbENyb3BCb3hEYXRhID0gYXNzaWduKHt9LCBjcm9wQm94RGF0YSk7XG4gICAgfSxcbiAgICBsaW1pdENyb3BCb3g6IGZ1bmN0aW9uIGxpbWl0Q3JvcEJveChzaXplTGltaXRlZCwgcG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhLFxuICAgICAgICAgIGxpbWl0ZWQgPSB0aGlzLmxpbWl0ZWQ7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvO1xuXG4gICAgICBpZiAoc2l6ZUxpbWl0ZWQpIHtcbiAgICAgICAgdmFyIG1pbkNyb3BCb3hXaWR0aCA9IE51bWJlcihvcHRpb25zLm1pbkNyb3BCb3hXaWR0aCkgfHwgMDtcbiAgICAgICAgdmFyIG1pbkNyb3BCb3hIZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5Dcm9wQm94SGVpZ2h0KSB8fCAwO1xuICAgICAgICB2YXIgbWF4Q3JvcEJveFdpZHRoID0gbGltaXRlZCA/IE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEud2lkdGggKyBjYW52YXNEYXRhLmxlZnQsIGNvbnRhaW5lckRhdGEud2lkdGggLSBjYW52YXNEYXRhLmxlZnQpIDogY29udGFpbmVyRGF0YS53aWR0aDtcbiAgICAgICAgdmFyIG1heENyb3BCb3hIZWlnaHQgPSBsaW1pdGVkID8gTWF0aC5taW4oY29udGFpbmVyRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCArIGNhbnZhc0RhdGEudG9wLCBjb250YWluZXJEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEudG9wKSA6IGNvbnRhaW5lckRhdGEuaGVpZ2h0OyAvLyBUaGUgbWluL21heENyb3BCb3hXaWR0aC9IZWlnaHQgbXVzdCBiZSBsZXNzIHRoYW4gY29udGFpbmVyJ3Mgd2lkdGgvaGVpZ2h0XG5cbiAgICAgICAgbWluQ3JvcEJveFdpZHRoID0gTWF0aC5taW4obWluQ3JvcEJveFdpZHRoLCBjb250YWluZXJEYXRhLndpZHRoKTtcbiAgICAgICAgbWluQ3JvcEJveEhlaWdodCA9IE1hdGgubWluKG1pbkNyb3BCb3hIZWlnaHQsIGNvbnRhaW5lckRhdGEuaGVpZ2h0KTtcblxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICBpZiAobWluQ3JvcEJveFdpZHRoICYmIG1pbkNyb3BCb3hIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmIChtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtaW5Dcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgICAgbWluQ3JvcEJveEhlaWdodCA9IG1pbkNyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWluQ3JvcEJveFdpZHRoID0gbWluQ3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWluQ3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gbWluQ3JvcEJveFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5Dcm9wQm94SGVpZ2h0KSB7XG4gICAgICAgICAgICBtaW5Dcm9wQm94V2lkdGggPSBtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1heENyb3BCb3hIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IG1heENyb3BCb3hXaWR0aCkge1xuICAgICAgICAgICAgbWF4Q3JvcEJveEhlaWdodCA9IG1heENyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhDcm9wQm94V2lkdGggPSBtYXhDcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRoZSBtaW5XaWR0aC9IZWlnaHQgbXVzdCBiZSBsZXNzIHRoYW4gbWF4V2lkdGgvSGVpZ2h0XG5cblxuICAgICAgICBjcm9wQm94RGF0YS5taW5XaWR0aCA9IE1hdGgubWluKG1pbkNyb3BCb3hXaWR0aCwgbWF4Q3JvcEJveFdpZHRoKTtcbiAgICAgICAgY3JvcEJveERhdGEubWluSGVpZ2h0ID0gTWF0aC5taW4obWluQ3JvcEJveEhlaWdodCwgbWF4Q3JvcEJveEhlaWdodCk7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1heFdpZHRoID0gbWF4Q3JvcEJveFdpZHRoO1xuICAgICAgICBjcm9wQm94RGF0YS5tYXhIZWlnaHQgPSBtYXhDcm9wQm94SGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICAgIGlmIChsaW1pdGVkKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEubWluTGVmdCA9IE1hdGgubWF4KDAsIGNhbnZhc0RhdGEubGVmdCk7XG4gICAgICAgICAgY3JvcEJveERhdGEubWluVG9wID0gTWF0aC5tYXgoMCwgY2FudmFzRGF0YS50b3ApO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heExlZnQgPSBNYXRoLm1pbihjb250YWluZXJEYXRhLndpZHRoLCBjYW52YXNEYXRhLmxlZnQgKyBjYW52YXNEYXRhLndpZHRoKSAtIGNyb3BCb3hEYXRhLndpZHRoO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heFRvcCA9IE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLnRvcCArIGNhbnZhc0RhdGEuaGVpZ2h0KSAtIGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5MZWZ0ID0gMDtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5Ub3AgPSAwO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heExlZnQgPSBjb250YWluZXJEYXRhLndpZHRoIC0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4VG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlckNyb3BCb3g6IGZ1bmN0aW9uIHJlbmRlckNyb3BCb3goKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcblxuICAgICAgaWYgKGNyb3BCb3hEYXRhLndpZHRoID4gY3JvcEJveERhdGEubWF4V2lkdGggfHwgY3JvcEJveERhdGEud2lkdGggPCBjcm9wQm94RGF0YS5taW5XaWR0aCkge1xuICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gY3JvcEJveERhdGEub2xkTGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNyb3BCb3hEYXRhLmhlaWdodCA+IGNyb3BCb3hEYXRhLm1heEhlaWdodCB8fCBjcm9wQm94RGF0YS5oZWlnaHQgPCBjcm9wQm94RGF0YS5taW5IZWlnaHQpIHtcbiAgICAgICAgY3JvcEJveERhdGEudG9wID0gY3JvcEJveERhdGEub2xkVG9wO1xuICAgICAgfVxuXG4gICAgICBjcm9wQm94RGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLndpZHRoLCBjcm9wQm94RGF0YS5taW5XaWR0aCksIGNyb3BCb3hEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLmhlaWdodCwgY3JvcEJveERhdGEubWluSGVpZ2h0KSwgY3JvcEJveERhdGEubWF4SGVpZ2h0KTtcbiAgICAgIHRoaXMubGltaXRDcm9wQm94KGZhbHNlLCB0cnVlKTtcbiAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS5sZWZ0LCBjcm9wQm94RGF0YS5taW5MZWZ0KSwgY3JvcEJveERhdGEubWF4TGVmdCk7XG4gICAgICBjcm9wQm94RGF0YS50b3AgPSBNYXRoLm1pbihNYXRoLm1heChjcm9wQm94RGF0YS50b3AsIGNyb3BCb3hEYXRhLm1pblRvcCksIGNyb3BCb3hEYXRhLm1heFRvcCk7XG4gICAgICBjcm9wQm94RGF0YS5vbGRMZWZ0ID0gY3JvcEJveERhdGEubGVmdDtcbiAgICAgIGNyb3BCb3hEYXRhLm9sZFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcblxuICAgICAgaWYgKG9wdGlvbnMubW92YWJsZSAmJiBvcHRpb25zLmNyb3BCb3hNb3ZhYmxlKSB7XG4gICAgICAgIC8vIFR1cm4gdG8gbW92ZSB0aGUgY2FudmFzIHdoZW4gdGhlIGNyb3AgYm94IGlzIGVxdWFsIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgc2V0RGF0YSh0aGlzLmZhY2UsIERBVEFfQUNUSU9OLCBjcm9wQm94RGF0YS53aWR0aCA+PSBjb250YWluZXJEYXRhLndpZHRoICYmIGNyb3BCb3hEYXRhLmhlaWdodCA+PSBjb250YWluZXJEYXRhLmhlaWdodCA/IEFDVElPTl9NT1ZFIDogQUNUSU9OX0FMTCk7XG4gICAgICB9XG5cbiAgICAgIHNldFN0eWxlKHRoaXMuY3JvcEJveCwgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNyb3BCb3hEYXRhLmhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICAgIHRyYW5zbGF0ZVg6IGNyb3BCb3hEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNyb3BCb3hEYXRhLnRvcFxuICAgICAgfSkpKTtcblxuICAgICAgaWYgKHRoaXMuY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgdGhpcy5saW1pdENhbnZhcyh0cnVlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMub3V0cHV0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvdXRwdXQ6IGZ1bmN0aW9uIG91dHB1dCgpIHtcbiAgICAgIHRoaXMucHJldmlldygpO1xuICAgICAgZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1AsIHRoaXMuZ2V0RGF0YSgpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHByZXZpZXcgPSB7XG4gICAgaW5pdFByZXZpZXc6IGZ1bmN0aW9uIGluaXRQcmV2aWV3KCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luO1xuICAgICAgdmFyIHByZXZpZXcgPSB0aGlzLm9wdGlvbnMucHJldmlldztcbiAgICAgIHZhciB1cmwgPSBjcm9zc09yaWdpbiA/IHRoaXMuY3Jvc3NPcmlnaW5VcmwgOiB0aGlzLnVybDtcbiAgICAgIHZhciBhbHQgPSBlbGVtZW50LmFsdCB8fCAnVGhlIGltYWdlIHRvIHByZXZpZXcnO1xuICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgfVxuXG4gICAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgICBpbWFnZS5hbHQgPSBhbHQ7XG4gICAgICB0aGlzLnZpZXdCb3guYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgdGhpcy52aWV3Qm94SW1hZ2UgPSBpbWFnZTtcblxuICAgICAgaWYgKCFwcmV2aWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZpZXdzID0gcHJldmlldztcblxuICAgICAgaWYgKHR5cGVvZiBwcmV2aWV3ID09PSAnc3RyaW5nJykge1xuICAgICAgICBwcmV2aWV3cyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHByZXZpZXcpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgcHJldmlld3MgPSBbcHJldmlld107XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlld3MgPSBwcmV2aWV3cztcbiAgICAgIGZvckVhY2gocHJldmlld3MsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vIFNhdmUgdGhlIG9yaWdpbmFsIHNpemUgZm9yIHJlY292ZXJcblxuICAgICAgICBzZXREYXRhKGVsLCBEQVRBX1BSRVZJRVcsIHtcbiAgICAgICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgaHRtbDogZWwuaW5uZXJIVE1MXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgaW1nLmFsdCA9IGFsdDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE92ZXJyaWRlIGltZyBlbGVtZW50IHN0eWxlc1xuICAgICAgICAgKiBBZGQgYGRpc3BsYXk6YmxvY2tgIHRvIGF2b2lkIG1hcmdpbiB0b3AgaXNzdWVcbiAgICAgICAgICogQWRkIGBoZWlnaHQ6YXV0b2AgdG8gb3ZlcnJpZGUgYGhlaWdodGAgYXR0cmlidXRlIG9uIElFOFxuICAgICAgICAgKiAoT2NjdXIgb25seSB3aGVuIG1hcmdpbi10b3AgPD0gLWhlaWdodClcbiAgICAgICAgICovXG5cbiAgICAgICAgaW1nLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpibG9jazsnICsgJ3dpZHRoOjEwMCU7JyArICdoZWlnaHQ6YXV0bzsnICsgJ21pbi13aWR0aDowIWltcG9ydGFudDsnICsgJ21pbi1oZWlnaHQ6MCFpbXBvcnRhbnQ7JyArICdtYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7JyArICdtYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50OycgKyAnaW1hZ2Utb3JpZW50YXRpb246MGRlZyFpbXBvcnRhbnQ7XCInO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXRQcmV2aWV3OiBmdW5jdGlvbiByZXNldFByZXZpZXcoKSB7XG4gICAgICBmb3JFYWNoKHRoaXMucHJldmlld3MsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0RGF0YShlbGVtZW50LCBEQVRBX1BSRVZJRVcpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCB7XG4gICAgICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBkYXRhLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhLmh0bWw7XG4gICAgICAgIHJlbW92ZURhdGEoZWxlbWVudCwgREFUQV9QUkVWSUVXKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcHJldmlldzogZnVuY3Rpb24gcHJldmlldygpIHtcbiAgICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YSxcbiAgICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBjcm9wQm94V2lkdGggPSBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgICBjcm9wQm94SGVpZ2h0ID0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHdpZHRoID0gaW1hZ2VEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgbGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQgLSBjYW52YXNEYXRhLmxlZnQgLSBpbWFnZURhdGEubGVmdDtcbiAgICAgIHZhciB0b3AgPSBjcm9wQm94RGF0YS50b3AgLSBjYW52YXNEYXRhLnRvcCAtIGltYWdlRGF0YS50b3A7XG5cbiAgICAgIGlmICghdGhpcy5jcm9wcGVkIHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRTdHlsZSh0aGlzLnZpZXdCb3hJbWFnZSwgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgICB0cmFuc2xhdGVYOiAtbGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogLXRvcFxuICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXREYXRhKGVsZW1lbnQsIERBVEFfUFJFVklFVyk7XG4gICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBvcmlnaW5hbEhlaWdodDtcbiAgICAgICAgdmFyIHJhdGlvID0gMTtcblxuICAgICAgICBpZiAoY3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbFdpZHRoIC8gY3JvcEJveFdpZHRoO1xuICAgICAgICAgIG5ld0hlaWdodCA9IGNyb3BCb3hIZWlnaHQgKiByYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcm9wQm94SGVpZ2h0ICYmIG5ld0hlaWdodCA+IG9yaWdpbmFsSGVpZ2h0KSB7XG4gICAgICAgICAgcmF0aW8gPSBvcmlnaW5hbEhlaWdodCAvIGNyb3BCb3hIZWlnaHQ7XG4gICAgICAgICAgbmV3V2lkdGggPSBjcm9wQm94V2lkdGggKiByYXRpbztcbiAgICAgICAgICBuZXdIZWlnaHQgPSBvcmlnaW5hbEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIHtcbiAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLCBhc3NpZ24oe1xuICAgICAgICAgIHdpZHRoOiB3aWR0aCAqIHJhdGlvLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICogcmF0aW9cbiAgICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgICAgIHRyYW5zbGF0ZVg6IC1sZWZ0ICogcmF0aW8sXG4gICAgICAgICAgdHJhbnNsYXRlWTogLXRvcCAqIHJhdGlvXG4gICAgICAgIH0sIGltYWdlRGF0YSkpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGV2ZW50cyA9IHtcbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjcm9wcGVyID0gdGhpcy5jcm9wcGVyO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3BzdGFydCkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwgb3B0aW9ucy5jcm9wc3RhcnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3Btb3ZlKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX01PVkUsIG9wdGlvbnMuY3JvcG1vdmUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3BlbmQpKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfRU5ELCBvcHRpb25zLmNyb3BlbmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3ApKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1AsIG9wdGlvbnMuY3JvcCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuem9vbSkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfWk9PTSwgb3B0aW9ucy56b29tKTtcbiAgICAgIH1cblxuICAgICAgYWRkTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfUE9JTlRFUl9ET1dOLCB0aGlzLm9uQ3JvcFN0YXJ0ID0gdGhpcy5jcm9wU3RhcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgIGlmIChvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uV2hlZWwpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfV0hFRUwsIHRoaXMub25XaGVlbCA9IHRoaXMud2hlZWwuYmluZCh0aGlzKSwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgICBhZGRMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrID0gdGhpcy5kYmxjbGljay5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX01PVkUsIHRoaXMub25Dcm9wTW92ZSA9IHRoaXMuY3JvcE1vdmUuYmluZCh0aGlzKSk7XG4gICAgICBhZGRMaXN0ZW5lcihlbGVtZW50Lm93bmVyRG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfVVAsIHRoaXMub25Dcm9wRW5kID0gdGhpcy5jcm9wRW5kLmJpbmQodGhpcykpO1xuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY3JvcHBlciA9IHRoaXMuY3JvcHBlcjtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wc3RhcnQpKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfU1RBUlQsIG9wdGlvbnMuY3JvcHN0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wbW92ZSkpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wZW5kKSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QX0VORCwgb3B0aW9ucy5jcm9wZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wKSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QLCBvcHRpb25zLmNyb3ApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnpvb20pKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKGNyb3BwZXIsIEVWRU5UX1BPSU5URVJfRE9XTiwgdGhpcy5vbkNyb3BTdGFydCk7XG5cbiAgICAgIGlmIChvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uV2hlZWwpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfV0hFRUwsIHRoaXMub25XaGVlbCwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZURyYWdNb2RlT25EYmxjbGljaykge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrKTtcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudC5vd25lckRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX01PVkUsIHRoaXMub25Dcm9wTW92ZSk7XG4gICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50Lm93bmVyRG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfVVAsIHRoaXMub25Dcm9wRW5kKTtcblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcih3aW5kb3csIEVWRU5UX1JFU0laRSwgdGhpcy5vblJlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVycyA9IHtcbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgIGNvbnRhaW5lckRhdGEgPSB0aGlzLmNvbnRhaW5lckRhdGE7XG4gICAgICB2YXIgbWluQ29udGFpbmVyV2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJXaWR0aCkgfHwgTUlOX0NPTlRBSU5FUl9XSURUSDtcbiAgICAgIHZhciBtaW5Db250YWluZXJIZWlnaHQgPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJIZWlnaHQpIHx8IE1JTl9DT05UQUlORVJfSEVJR0hUO1xuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBjb250YWluZXJEYXRhLndpZHRoIDw9IG1pbkNvbnRhaW5lcldpZHRoIHx8IGNvbnRhaW5lckRhdGEuaGVpZ2h0IDw9IG1pbkNvbnRhaW5lckhlaWdodCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByYXRpbyA9IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIGNvbnRhaW5lckRhdGEud2lkdGg7IC8vIFJlc2l6ZSB3aGVuIHdpZHRoIGNoYW5nZWQgb3IgaGVpZ2h0IGNoYW5nZWRcblxuICAgICAgaWYgKHJhdGlvICE9PSAxIHx8IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgIT09IGNvbnRhaW5lckRhdGEuaGVpZ2h0KSB7XG4gICAgICAgIHZhciBjYW52YXNEYXRhO1xuICAgICAgICB2YXIgY3JvcEJveERhdGE7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVzdG9yZSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmdldENhbnZhc0RhdGEoKTtcbiAgICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuZ2V0Q3JvcEJveERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVzdG9yZSkge1xuICAgICAgICAgIHRoaXMuc2V0Q2FudmFzRGF0YShmb3JFYWNoKGNhbnZhc0RhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBjYW52YXNEYXRhW2ldID0gbiAqIHJhdGlvO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKGZvckVhY2goY3JvcEJveERhdGEsIGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YVtpXSA9IG4gKiByYXRpbztcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRibGNsaWNrOiBmdW5jdGlvbiBkYmxjbGljaygpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IHRoaXMub3B0aW9ucy5kcmFnTW9kZSA9PT0gRFJBR19NT0RFX05PTkUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERyYWdNb2RlKGhhc0NsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfQ1JPUCkgPyBEUkFHX01PREVfTU9WRSA6IERSQUdfTU9ERV9DUk9QKTtcbiAgICB9LFxuICAgIHdoZWVsOiBmdW5jdGlvbiB3aGVlbChldmVudCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHJhdGlvID0gTnVtYmVyKHRoaXMub3B0aW9ucy53aGVlbFpvb21SYXRpbykgfHwgMC4xO1xuICAgICAgdmFyIGRlbHRhID0gMTtcblxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBMaW1pdCB3aGVlbCBzcGVlZCB0byBwcmV2ZW50IHpvb20gdG9vIGZhc3QgKCMyMSlcblxuICAgICAgaWYgKHRoaXMud2hlZWxpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLndoZWVsaW5nID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy53aGVlbGluZyA9IGZhbHNlO1xuICAgICAgfSwgNTApO1xuXG4gICAgICBpZiAoZXZlbnQuZGVsdGFZKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQuZGVsdGFZID4gMCA/IDEgOiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQud2hlZWxEZWx0YSkge1xuICAgICAgICBkZWx0YSA9IC1ldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwpIHtcbiAgICAgICAgZGVsdGEgPSBldmVudC5kZXRhaWwgPiAwID8gMSA6IC0xO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnpvb20oLWRlbHRhICogcmF0aW8sIGV2ZW50KTtcbiAgICB9LFxuICAgIGNyb3BTdGFydDogZnVuY3Rpb24gY3JvcFN0YXJ0KGV2ZW50KSB7XG4gICAgICB2YXIgYnV0dG9ucyA9IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCAvLyBIYW5kbGUgbW91c2UgZXZlbnQgYW5kIHBvaW50ZXIgZXZlbnQgYW5kIGlnbm9yZSB0b3VjaCBldmVudFxuICAgICAgfHwgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2ZW50LnR5cGUgPT09ICdwb2ludGVyZG93bicgJiYgZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScpICYmICggLy8gTm8gcHJpbWFyeSBidXR0b24gKFVzdWFsbHkgdGhlIGxlZnQgYnV0dG9uKVxuICAgICAgaXNOdW1iZXIoYnV0dG9ucykgJiYgYnV0dG9ucyAhPT0gMSB8fCBpc051bWJlcihidXR0b24pICYmIGJ1dHRvbiAhPT0gMCAvLyBPcGVuIGNvbnRleHQgbWVudVxuICAgICAgfHwgZXZlbnQuY3RybEtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgICB2YXIgYWN0aW9uO1xuXG4gICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgLy8gSGFuZGxlIHRvdWNoIGV2ZW50XG4gICAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdID0gZ2V0UG9pbnRlcih0b3VjaCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIG1vdXNlIGV2ZW50IGFuZCBwb2ludGVyIGV2ZW50XG4gICAgICAgIHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXSA9IGdldFBvaW50ZXIoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMocG9pbnRlcnMpLmxlbmd0aCA+IDEgJiYgb3B0aW9ucy56b29tYWJsZSAmJiBvcHRpb25zLnpvb21PblRvdWNoKSB7XG4gICAgICAgIGFjdGlvbiA9IEFDVElPTl9aT09NO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uID0gZ2V0RGF0YShldmVudC50YXJnZXQsIERBVEFfQUNUSU9OKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFSRUdFWFBfQUNUSU9OUy50ZXN0KGFjdGlvbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfU1RBUlQsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBUaGlzIGxpbmUgaXMgcmVxdWlyZWQgZm9yIHByZXZlbnRpbmcgcGFnZSB6b29taW5nIGluIGlPUyBicm93c2Vyc1xuXG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgIHRoaXMuY3JvcHBpbmcgPSBmYWxzZTtcblxuICAgICAgaWYgKGFjdGlvbiA9PT0gQUNUSU9OX0NST1ApIHtcbiAgICAgICAgdGhpcy5jcm9wcGluZyA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3JvcE1vdmU6IGZ1bmN0aW9uIGNyb3BNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb247XG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9pbnRlcnMgPSB0aGlzLnBvaW50ZXJzO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBFVkVOVF9DUk9QX01PVkUsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgLy8gVGhlIGZpcnN0IHBhcmFtZXRlciBzaG91bGQgbm90IGJlIHVuZGVmaW5lZCAoIzQzMilcbiAgICAgICAgICBhc3NpZ24ocG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gfHwge30sIGdldFBvaW50ZXIodG91Y2gsIHRydWUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NpZ24ocG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdIHx8IHt9LCBnZXRQb2ludGVyKGV2ZW50LCB0cnVlKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlKGV2ZW50KTtcbiAgICB9LFxuICAgIGNyb3BFbmQ6IGZ1bmN0aW9uIGNyb3BFbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uLFxuICAgICAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcblxuICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIGRlbGV0ZSBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgcG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMocG9pbnRlcnMpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jcm9wcGluZykge1xuICAgICAgICB0aGlzLmNyb3BwaW5nID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwsIHRoaXMuY3JvcHBlZCAmJiB0aGlzLm9wdGlvbnMubW9kYWwpO1xuICAgICAgfVxuXG4gICAgICBkaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNoYW5nZSA9IHtcbiAgICBjaGFuZ2U6IGZ1bmN0aW9uIGNoYW5nZShldmVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YSxcbiAgICAgICAgICBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb247XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgICAgdmFyIGxlZnQgPSBjcm9wQm94RGF0YS5sZWZ0LFxuICAgICAgICAgIHRvcCA9IGNyb3BCb3hEYXRhLnRvcCxcbiAgICAgICAgICB3aWR0aCA9IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgIHZhciByaWdodCA9IGxlZnQgKyB3aWR0aDtcbiAgICAgIHZhciBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICB2YXIgbWluTGVmdCA9IDA7XG4gICAgICB2YXIgbWluVG9wID0gMDtcbiAgICAgIHZhciBtYXhXaWR0aCA9IGNvbnRhaW5lckRhdGEud2lkdGg7XG4gICAgICB2YXIgbWF4SGVpZ2h0ID0gY29udGFpbmVyRGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgcmVuZGVyYWJsZSA9IHRydWU7XG4gICAgICB2YXIgb2Zmc2V0OyAvLyBMb2NraW5nIGFzcGVjdCByYXRpbyBpbiBcImZyZWUgbW9kZVwiIGJ5IGhvbGRpbmcgc2hpZnQga2V5XG5cbiAgICAgIGlmICghYXNwZWN0UmF0aW8gJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAmJiBoZWlnaHQgPyB3aWR0aCAvIGhlaWdodCA6IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgbWluTGVmdCA9IGNyb3BCb3hEYXRhLm1pbkxlZnQ7XG4gICAgICAgIG1pblRvcCA9IGNyb3BCb3hEYXRhLm1pblRvcDtcbiAgICAgICAgbWF4V2lkdGggPSBtaW5MZWZ0ICsgTWF0aC5taW4oY29udGFpbmVyRGF0YS53aWR0aCwgY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS5sZWZ0ICsgY2FudmFzRGF0YS53aWR0aCk7XG4gICAgICAgIG1heEhlaWdodCA9IG1pblRvcCArIE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLmhlaWdodCwgY2FudmFzRGF0YS50b3AgKyBjYW52YXNEYXRhLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb2ludGVyID0gcG9pbnRlcnNbT2JqZWN0LmtleXMocG9pbnRlcnMpWzBdXTtcbiAgICAgIHZhciByYW5nZSA9IHtcbiAgICAgICAgeDogcG9pbnRlci5lbmRYIC0gcG9pbnRlci5zdGFydFgsXG4gICAgICAgIHk6IHBvaW50ZXIuZW5kWSAtIHBvaW50ZXIuc3RhcnRZXG4gICAgICB9O1xuXG4gICAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhzaWRlKSB7XG4gICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgIGNhc2UgQUNUSU9OX0VBU1Q6XG4gICAgICAgICAgICBpZiAocmlnaHQgKyByYW5nZS54ID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgcmFuZ2UueCA9IG1heFdpZHRoIC0gcmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBBQ1RJT05fV0VTVDpcbiAgICAgICAgICAgIGlmIChsZWZ0ICsgcmFuZ2UueCA8IG1pbkxlZnQpIHtcbiAgICAgICAgICAgICAgcmFuZ2UueCA9IG1pbkxlZnQgLSBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgICAgaWYgKHRvcCArIHJhbmdlLnkgPCBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgcmFuZ2UueSA9IG1pblRvcCAtIHRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIEFDVElPTl9TT1VUSDpcbiAgICAgICAgICAgIGlmIChib3R0b20gKyByYW5nZS55ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHJhbmdlLnkgPSBtYXhIZWlnaHQgLSBib3R0b207XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgLy8gTW92ZSBjcm9wIGJveFxuICAgICAgICBjYXNlIEFDVElPTl9BTEw6XG4gICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBSZXNpemUgY3JvcCBib3hcblxuICAgICAgICBjYXNlIEFDVElPTl9FQVNUOlxuICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGFzcGVjdFJhdGlvICYmICh0b3AgPD0gbWluVG9wIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG5cbiAgICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fV0VTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB0b3AgKz0gKGNyb3BCb3hEYXRhLmhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYXNwZWN0UmF0aW8gJiYgKGxlZnQgPD0gbWluTGVmdCB8fCByaWdodCA+PSBtYXhXaWR0aCkpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuXG4gICAgICAgICAgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGxlZnQgKz0gKGNyb3BCb3hEYXRhLndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEFDVElPTl9XRVNUOlxuICAgICAgICAgIGlmIChyYW5nZS54IDw9IDAgJiYgKGxlZnQgPD0gbWluTGVmdCB8fCBhc3BlY3RSYXRpbyAmJiAodG9wIDw9IG1pblRvcCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcblxuICAgICAgICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9FQVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIHRvcCArPSAoY3JvcEJveERhdGEuaGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEg6XG4gICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCAmJiAoYm90dG9tID49IG1heEhlaWdodCB8fCBhc3BlY3RSYXRpbyAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IHJpZ2h0ID49IG1heFdpZHRoKSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoZWNrKEFDVElPTl9TT1VUSCk7XG4gICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG5cbiAgICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSAoY3JvcEJveERhdGEud2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIX0VBU1Q6XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IHJpZ2h0ID49IG1heFdpZHRoKSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fRUFTVCk7XG5cbiAgICAgICAgICAgIGlmIChyYW5nZS54ID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPD0gMCAmJiB0b3AgPD0gbWluVG9wKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmICh0b3AgPiBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIX1dFU1Q6XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IGxlZnQgPD0gbWluTGVmdCkpIHtcbiAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgbGVmdCArPSBjcm9wQm94RGF0YS53aWR0aCAtIHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuXG4gICAgICAgICAgICBpZiAocmFuZ2UueCA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChsZWZ0ID4gbWluTGVmdCkge1xuICAgICAgICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPD0gMCAmJiB0b3AgPD0gbWluVG9wKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRvcCA+IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEhfV0VTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS54IDw9IDAgJiYgKGxlZnQgPD0gbWluTGVmdCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fV0VTVCk7XG4gICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1NPVVRIKTtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcblxuICAgICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCkge1xuICAgICAgICAgICAgICBpZiAobGVmdCA+IG1pbkxlZnQpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55ID49IDAgJiYgYm90dG9tID49IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmFuZ2UueSA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChib3R0b20gPCBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHdpZHRoIDwgMCAmJiBoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEhfRUFTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fU09VVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuXG4gICAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChyaWdodCA8IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS55ID49IDAgJiYgYm90dG9tID49IG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCkge1xuICAgICAgICAgICAgICBpZiAoYm90dG9tIDwgbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX1dFU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfRUFTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBNb3ZlIGNhbnZhc1xuXG4gICAgICAgIGNhc2UgQUNUSU9OX01PVkU6XG4gICAgICAgICAgdGhpcy5tb3ZlKHJhbmdlLngsIHJhbmdlLnkpO1xuICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gWm9vbSBjYW52YXNcblxuICAgICAgICBjYXNlIEFDVElPTl9aT09NOlxuICAgICAgICAgIHRoaXMuem9vbShnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpLCBldmVudCk7XG4gICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBDcmVhdGUgY3JvcCBib3hcblxuICAgICAgICBjYXNlIEFDVElPTl9DUk9QOlxuICAgICAgICAgIGlmICghcmFuZ2UueCB8fCAhcmFuZ2UueSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuY3JvcHBlcik7XG4gICAgICAgICAgbGVmdCA9IHBvaW50ZXIuc3RhcnRYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgdG9wID0gcG9pbnRlci5zdGFydFkgLSBvZmZzZXQudG9wO1xuICAgICAgICAgIHdpZHRoID0gY3JvcEJveERhdGEubWluV2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gY3JvcEJveERhdGEubWluSGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKHJhbmdlLnggPiAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSByYW5nZS55ID4gMCA/IEFDVElPTl9TT1VUSF9FQVNUIDogQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChyYW5nZS54IDwgMCkge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGFjdGlvbiA9IHJhbmdlLnkgPiAwID8gQUNUSU9OX1NPVVRIX1dFU1QgOiBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmFuZ2UueSA8IDApIHtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfSAvLyBTaG93IHRoZSBjcm9wIGJveCBpZiBpcyBoaWRkZW5cblxuXG4gICAgICAgICAgaWYgKCF0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlcmFibGUpIHtcbiAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gbGVmdDtcbiAgICAgICAgY3JvcEJveERhdGEudG9wID0gdG9wO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICB9IC8vIE92ZXJyaWRlXG5cblxuICAgICAgZm9yRWFjaChwb2ludGVycywgZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcC5zdGFydFggPSBwLmVuZFg7XG4gICAgICAgIHAuc3RhcnRZID0gcC5lbmRZO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIC8vIFNob3cgdGhlIGNyb3AgYm94IG1hbnVhbGx5XG4gICAgY3JvcDogZnVuY3Rpb24gY3JvcCgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmNyb3BwZWQgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jcm9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbCkge1xuICAgICAgICAgIGFkZENsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKHRoaXMuaW5pdGlhbENyb3BCb3hEYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBSZXNldCB0aGUgaW1hZ2UgYW5kIGNyb3AgYm94IHRvIHRoZWlyIGluaXRpYWwgc3RhdGVzXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5pbWFnZURhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbEltYWdlRGF0YSk7XG4gICAgICAgIHRoaXMuY2FudmFzRGF0YSA9IGFzc2lnbih7fSwgdGhpcy5pbml0aWFsQ2FudmFzRGF0YSk7XG4gICAgICAgIHRoaXMuY3JvcEJveERhdGEgPSBhc3NpZ24oe30sIHRoaXMuaW5pdGlhbENyb3BCb3hEYXRhKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXMoKTtcblxuICAgICAgICBpZiAodGhpcy5jcm9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBDbGVhciB0aGUgY3JvcCBib3hcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBpZiAodGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGFzc2lnbih0aGlzLmNyb3BCb3hEYXRhLCB7XG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgIHRoaXMubGltaXRDYW52YXModHJ1ZSwgdHJ1ZSk7IC8vIFJlbmRlciBjYW52YXMgYWZ0ZXIgY3JvcCBib3ggcmVuZGVyZWRcblxuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcygpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmRyYWdCb3gsIENMQVNTX01PREFMKTtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgaW1hZ2UncyBzcmMgYW5kIHJlYnVpbGQgdGhlIGNyb3BwZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIG5ldyBVUkwuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFzU2FtZVNpemVdIC0gSW5kaWNhdGUgaWYgdGhlIG5ldyBpbWFnZSBoYXMgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgb2xkIG9uZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UodXJsKSB7XG4gICAgICB2YXIgaGFzU2FtZVNpemUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW1nKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNTYW1lU2l6ZSkge1xuICAgICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdXJsO1xuXG4gICAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0JveEltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3JjID0gdXJsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzSW1nKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IG51bGw7XG4gICAgICAgICAgdGhpcy51bmNyZWF0ZSgpO1xuICAgICAgICAgIHRoaXMubG9hZCh1cmwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gRW5hYmxlICh1bmZyZWV6ZSkgdGhlIGNyb3BwZXJcbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmNyb3BwZXIsIENMQVNTX0RJU0FCTEVEKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBEaXNhYmxlIChmcmVlemUpIHRoZSBjcm9wcGVyXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmNyb3BwZXIsIENMQVNTX0RJU0FCTEVEKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhlIGNyb3BwZXIgYW5kIHJlbW92ZSB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgaW1hZ2VcbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKCFlbGVtZW50W05BTUVTUEFDRV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRbTkFNRVNQQUNFXSA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRoaXMuaXNJbWcgJiYgdGhpcy5yZXBsYWNlZCkge1xuICAgICAgICBlbGVtZW50LnNyYyA9IHRoaXMub3JpZ2luYWxVcmw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5jcmVhdGUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIHRoZSBjYW52YXMgd2l0aCByZWxhdGl2ZSBvZmZzZXRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggLSBUaGUgcmVsYXRpdmUgb2Zmc2V0IGRpc3RhbmNlIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRZPW9mZnNldFhdIC0gVGhlIHJlbGF0aXZlIG9mZnNldCBkaXN0YW5jZSBvbiB0aGUgeS1heGlzLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgbW92ZTogZnVuY3Rpb24gbW92ZShvZmZzZXRYKSB7XG4gICAgICB2YXIgb2Zmc2V0WSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogb2Zmc2V0WDtcbiAgICAgIHZhciBfdGhpcyRjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICAgIGxlZnQgPSBfdGhpcyRjYW52YXNEYXRhLmxlZnQsXG4gICAgICAgICAgdG9wID0gX3RoaXMkY2FudmFzRGF0YS50b3A7XG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG8oaXNVbmRlZmluZWQob2Zmc2V0WCkgPyBvZmZzZXRYIDogbGVmdCArIE51bWJlcihvZmZzZXRYKSwgaXNVbmRlZmluZWQob2Zmc2V0WSkgPyBvZmZzZXRZIDogdG9wICsgTnVtYmVyKG9mZnNldFkpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIHBvaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeC1heGlzIGNvb3JkaW5hdGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt5PXhdIC0gVGhlIHktYXhpcyBjb29yZGluYXRlLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgbW92ZVRvOiBmdW5jdGlvbiBtb3ZlVG8oeCkge1xuICAgICAgdmFyIHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHg7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB4ID0gTnVtYmVyKHgpO1xuICAgICAgeSA9IE51bWJlcih5KTtcblxuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcHRpb25zLm1vdmFibGUpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKHgpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0geDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcih5KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wID0geTtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFpvb20gdGhlIGNhbnZhcyB3aXRoIGEgcmVsYXRpdmUgcmF0aW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSBUaGUgdGFyZ2V0IHJhdGlvLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IF9vcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHpvb206IGZ1bmN0aW9uIHpvb20ocmF0aW8sIF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHJhdGlvID0gTnVtYmVyKHJhdGlvKTtcblxuICAgICAgaWYgKHJhdGlvIDwgMCkge1xuICAgICAgICByYXRpbyA9IDEgLyAoMSAtIHJhdGlvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhdGlvID0gMSArIHJhdGlvO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy56b29tVG8oY2FudmFzRGF0YS53aWR0aCAqIHJhdGlvIC8gY2FudmFzRGF0YS5uYXR1cmFsV2lkdGgsIG51bGwsIF9vcmlnaW5hbEV2ZW50KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogWm9vbSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIHJhdGlvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gVGhlIHRhcmdldCByYXRpby5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGl2b3QgLSBUaGUgem9vbSBwaXZvdCBwb2ludCBjb29yZGluYXRlLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IF9vcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHpvb21UbzogZnVuY3Rpb24gem9vbVRvKHJhdGlvLCBwaXZvdCwgX29yaWdpbmFsRXZlbnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgd2lkdGggPSBjYW52YXNEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IGNhbnZhc0RhdGEuaGVpZ2h0LFxuICAgICAgICAgIG5hdHVyYWxXaWR0aCA9IGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBjYW52YXNEYXRhLm5hdHVyYWxIZWlnaHQ7XG4gICAgICByYXRpbyA9IE51bWJlcihyYXRpbyk7XG5cbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgb3B0aW9ucy56b29tYWJsZSkge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBuYXR1cmFsV2lkdGggKiByYXRpbztcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IG5hdHVyYWxIZWlnaHQgKiByYXRpbztcblxuICAgICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX1pPT00sIHtcbiAgICAgICAgICByYXRpbzogcmF0aW8sXG4gICAgICAgICAgb2xkUmF0aW86IHdpZHRoIC8gbmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IF9vcmlnaW5hbEV2ZW50XG4gICAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgdmFyIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuY3JvcHBlcik7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IHBvaW50ZXJzICYmIE9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGggPyBnZXRQb2ludGVyc0NlbnRlcihwb2ludGVycykgOiB7XG4gICAgICAgICAgICBwYWdlWDogX29yaWdpbmFsRXZlbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogX29yaWdpbmFsRXZlbnQucGFnZVlcbiAgICAgICAgICB9OyAvLyBab29tIGZyb20gdGhlIHRyaWdnZXJpbmcgcG9pbnQgb2YgdGhlIGV2ZW50XG5cbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpICogKChjZW50ZXIucGFnZVggLSBvZmZzZXQubGVmdCAtIGNhbnZhc0RhdGEubGVmdCkgLyB3aWR0aCk7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKG5ld0hlaWdodCAtIGhlaWdodCkgKiAoKGNlbnRlci5wYWdlWSAtIG9mZnNldC50b3AgLSBjYW52YXNEYXRhLnRvcCkgLyBoZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocGl2b3QpICYmIGlzTnVtYmVyKHBpdm90LngpICYmIGlzTnVtYmVyKHBpdm90LnkpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09IChuZXdXaWR0aCAtIHdpZHRoKSAqICgocGl2b3QueCAtIGNhbnZhc0RhdGEubGVmdCkgLyB3aWR0aCk7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKG5ld0hlaWdodCAtIGhlaWdodCkgKiAoKHBpdm90LnkgLSBjYW52YXNEYXRhLnRvcCkgLyBoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFpvb20gZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICBjYW52YXNEYXRhLndpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGUgY2FudmFzIHdpdGggYSByZWxhdGl2ZSBkZWdyZWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShkZWdyZWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdGF0ZVRvKCh0aGlzLmltYWdlRGF0YS5yb3RhdGUgfHwgMCkgKyBOdW1iZXIoZGVncmVlKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIGRlZ3JlZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWUgLSBUaGUgcm90YXRlIGRlZ3JlZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJvdGF0ZVRvOiBmdW5jdGlvbiByb3RhdGVUbyhkZWdyZWUpIHtcbiAgICAgIGRlZ3JlZSA9IE51bWJlcihkZWdyZWUpO1xuXG4gICAgICBpZiAoaXNOdW1iZXIoZGVncmVlKSAmJiB0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgdGhpcy5pbWFnZURhdGEucm90YXRlID0gZGVncmVlICUgMzYwO1xuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBpbWFnZSBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNjYWxlWDogZnVuY3Rpb24gc2NhbGVYKF9zY2FsZVgpIHtcbiAgICAgIHZhciBzY2FsZVkgPSB0aGlzLmltYWdlRGF0YS5zY2FsZVk7XG4gICAgICByZXR1cm4gdGhpcy5zY2FsZShfc2NhbGVYLCBpc051bWJlcihzY2FsZVkpID8gc2NhbGVZIDogMSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBpbWFnZSBvbiB0aGUgeS1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVkgLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNjYWxlWTogZnVuY3Rpb24gc2NhbGVZKF9zY2FsZVkpIHtcbiAgICAgIHZhciBzY2FsZVggPSB0aGlzLmltYWdlRGF0YS5zY2FsZVg7XG4gICAgICByZXR1cm4gdGhpcy5zY2FsZShpc051bWJlcihzY2FsZVgpID8gc2NhbGVYIDogMSwgX3NjYWxlWSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlWT1zY2FsZVhdIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB5LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZTogZnVuY3Rpb24gc2NhbGUoc2NhbGVYKSB7XG4gICAgICB2YXIgc2NhbGVZID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBzY2FsZVg7XG4gICAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICB2YXIgdHJhbnNmb3JtZWQgPSBmYWxzZTtcbiAgICAgIHNjYWxlWCA9IE51bWJlcihzY2FsZVgpO1xuICAgICAgc2NhbGVZID0gTnVtYmVyKHNjYWxlWSk7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIHRoaXMub3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoc2NhbGVYKSkge1xuICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVggPSBzY2FsZVg7XG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKHNjYWxlWSkpIHtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gc2NhbGVZO1xuICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNyb3BwZWQgYXJlYSBwb3NpdGlvbiBhbmQgc2l6ZSBkYXRhIChiYXNlIG9uIHRoZSBvcmlnaW5hbCBpbWFnZSlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyb3VuZGVkPWZhbHNlXSAtIEluZGljYXRlIGlmIHJvdW5kIHRoZSBkYXRhIHZhbHVlcyBvciBub3QuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjcm9wcGVkIGRhdGEuXG4gICAgICovXG4gICAgZ2V0RGF0YTogZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgIHZhciByb3VuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgICAgdmFyIGRhdGE7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuY3JvcHBlZCkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHg6IGNyb3BCb3hEYXRhLmxlZnQgLSBjYW52YXNEYXRhLmxlZnQsXG4gICAgICAgICAgeTogY3JvcEJveERhdGEudG9wIC0gY2FudmFzRGF0YS50b3AsXG4gICAgICAgICAgd2lkdGg6IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogY3JvcEJveERhdGEuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIHZhciByYXRpbyA9IGltYWdlRGF0YS53aWR0aCAvIGltYWdlRGF0YS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIGZvckVhY2goZGF0YSwgZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICBkYXRhW2ldID0gbiAvIHJhdGlvO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocm91bmRlZCkge1xuICAgICAgICAgIC8vIEluIGNhc2Ugcm91bmRpbmcgb2ZmIGxlYWRzIHRvIGV4dHJhIDFweCBpbiByaWdodCBvciBib3R0b20gYm9yZGVyXG4gICAgICAgICAgLy8gd2Ugc2hvdWxkIHJvdW5kIHRoZSB0b3AtbGVmdCBjb3JuZXIgYW5kIHRoZSBkaW1lbnNpb24gKCMzNDMpLlxuICAgICAgICAgIHZhciBib3R0b20gPSBNYXRoLnJvdW5kKGRhdGEueSArIGRhdGEuaGVpZ2h0KTtcbiAgICAgICAgICB2YXIgcmlnaHQgPSBNYXRoLnJvdW5kKGRhdGEueCArIGRhdGEud2lkdGgpO1xuICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQoZGF0YS54KTtcbiAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKGRhdGEueSk7XG4gICAgICAgICAgZGF0YS53aWR0aCA9IHJpZ2h0IC0gZGF0YS54O1xuICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gYm90dG9tIC0gZGF0YS55O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgIGRhdGEucm90YXRlID0gaW1hZ2VEYXRhLnJvdGF0ZSB8fCAwO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICBkYXRhLnNjYWxlWCA9IGltYWdlRGF0YS5zY2FsZVggfHwgMTtcbiAgICAgICAgZGF0YS5zY2FsZVkgPSBpbWFnZURhdGEuc2NhbGVZIHx8IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNyb3BwZWQgYXJlYSBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3IGRhdGEuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB7fTtcblxuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5yb3RhdGUpICYmIGRhdGEucm90YXRlICE9PSBpbWFnZURhdGEucm90YXRlKSB7XG4gICAgICAgICAgICBpbWFnZURhdGEucm90YXRlID0gZGF0YS5yb3RhdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5zY2FsZVgpICYmIGRhdGEuc2NhbGVYICE9PSBpbWFnZURhdGEuc2NhbGVYKSB7XG4gICAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gZGF0YS5zY2FsZVg7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEuc2NhbGVZKSAmJiBkYXRhLnNjYWxlWSAhPT0gaW1hZ2VEYXRhLnNjYWxlWSkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IGRhdGEuc2NhbGVZO1xuICAgICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aDtcblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS54KSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmxlZnQgPSBkYXRhLnggKiByYXRpbyArIGNhbnZhc0RhdGEubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnkpKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEudG9wID0gZGF0YS55ICogcmF0aW8gKyBjYW52YXNEYXRhLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gZGF0YS53aWR0aCAqIHJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEuaGVpZ2h0KSkge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IGRhdGEuaGVpZ2h0ICogcmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKGNyb3BCb3hEYXRhKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29udGFpbmVyIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNvbnRhaW5lciBkYXRhLlxuICAgICAqL1xuICAgIGdldENvbnRhaW5lckRhdGE6IGZ1bmN0aW9uIGdldENvbnRhaW5lckRhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkeSA/IGFzc2lnbih7fSwgdGhpcy5jb250YWluZXJEYXRhKSA6IHt9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGltYWdlIHBvc2l0aW9uIGFuZCBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBpbWFnZSBkYXRhLlxuICAgICAqL1xuICAgIGdldEltYWdlRGF0YTogZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZWQgPyBhc3NpZ24oe30sIHRoaXMuaW1hZ2VEYXRhKSA6IHt9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNhbnZhcyBwb3NpdGlvbiBhbmQgc2l6ZSBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY2FudmFzIGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q2FudmFzRGF0YTogZnVuY3Rpb24gZ2V0Q2FudmFzRGF0YSgpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIGRhdGEgPSB7fTtcblxuICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgZm9yRWFjaChbJ2xlZnQnLCAndG9wJywgJ3dpZHRoJywgJ2hlaWdodCcsICduYXR1cmFsV2lkdGgnLCAnbmF0dXJhbEhlaWdodCddLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgIGRhdGFbbl0gPSBjYW52YXNEYXRhW25dO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY2FudmFzIHBvc2l0aW9uIGFuZCBzaXplIHdpdGggbmV3IGRhdGEuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgbmV3IGNhbnZhcyBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0Q2FudmFzRGF0YTogZnVuY3Rpb24gc2V0Q2FudmFzRGF0YShkYXRhKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IGNhbnZhc0RhdGEuYXNwZWN0UmF0aW87XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkICYmIGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEubGVmdCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgPSBkYXRhLmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS50b3ApKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgPSBkYXRhLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGRhdGEuaGVpZ2h0KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IGRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3JvcCBib3ggcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNyb3AgYm94IGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q3JvcEJveERhdGE6IGZ1bmN0aW9uIGdldENyb3BCb3hEYXRhKCkge1xuICAgICAgdmFyIGNyb3BCb3hEYXRhID0gdGhpcy5jcm9wQm94RGF0YTtcbiAgICAgIHZhciBkYXRhO1xuXG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiB0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICBsZWZ0OiBjcm9wQm94RGF0YS5sZWZ0LFxuICAgICAgICAgIHRvcDogY3JvcEJveERhdGEudG9wLFxuICAgICAgICAgIHdpZHRoOiBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGNyb3BCb3hEYXRhLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjcm9wIGJveCBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBjcm9wIGJveCBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0Q3JvcEJveERhdGE6IGZ1bmN0aW9uIHNldENyb3BCb3hEYXRhKGRhdGEpIHtcbiAgICAgIHZhciBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSB0aGlzLm9wdGlvbnMuYXNwZWN0UmF0aW87XG4gICAgICB2YXIgd2lkdGhDaGFuZ2VkO1xuICAgICAgdmFyIGhlaWdodENoYW5nZWQ7XG5cbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuY3JvcHBlZCAmJiAhdGhpcy5kaXNhYmxlZCAmJiBpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLmxlZnQpKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEubGVmdCA9IGRhdGEubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnRvcCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS50b3AgPSBkYXRhLnRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLndpZHRoKSAmJiBkYXRhLndpZHRoICE9PSBjcm9wQm94RGF0YS53aWR0aCkge1xuICAgICAgICAgIHdpZHRoQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEuaGVpZ2h0KSAmJiBkYXRhLmhlaWdodCAhPT0gY3JvcEJveERhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgaGVpZ2h0Q2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICBpZiAod2lkdGhDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBjcm9wQm94RGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0Q2hhbmdlZCkge1xuICAgICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBjcm9wQm94RGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBhIGNhbnZhcyBkcmF3biB0aGUgY3JvcHBlZCBpbWFnZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gVGhlIGNvbmZpZyBvcHRpb25zLlxuICAgICAqIEByZXR1cm5zIHtIVE1MQ2FudmFzRWxlbWVudH0gLSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAgICAgKi9cbiAgICBnZXRDcm9wcGVkQ2FudmFzOiBmdW5jdGlvbiBnZXRDcm9wcGVkQ2FudmFzKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICBpZiAoIXRoaXMucmVhZHkgfHwgIXdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgc291cmNlID0gZ2V0U291cmNlQ2FudmFzKHRoaXMuaW1hZ2UsIHRoaXMuaW1hZ2VEYXRhLCBjYW52YXNEYXRhLCBvcHRpb25zKTsgLy8gUmV0dXJucyB0aGUgc291cmNlIGNhbnZhcyBpZiBpdCBpcyBub3QgY3JvcHBlZC5cblxuICAgICAgaWYgKCF0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJGdldERhdGEgPSB0aGlzLmdldERhdGEoKSxcbiAgICAgICAgICBpbml0aWFsWCA9IF90aGlzJGdldERhdGEueCxcbiAgICAgICAgICBpbml0aWFsWSA9IF90aGlzJGdldERhdGEueSxcbiAgICAgICAgICBpbml0aWFsV2lkdGggPSBfdGhpcyRnZXREYXRhLndpZHRoLFxuICAgICAgICAgIGluaXRpYWxIZWlnaHQgPSBfdGhpcyRnZXREYXRhLmhlaWdodDtcblxuICAgICAgdmFyIHJhdGlvID0gc291cmNlLndpZHRoIC8gTWF0aC5mbG9vcihjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCk7XG5cbiAgICAgIGlmIChyYXRpbyAhPT0gMSkge1xuICAgICAgICBpbml0aWFsWCAqPSByYXRpbztcbiAgICAgICAgaW5pdGlhbFkgKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxXaWR0aCAqPSByYXRpbztcbiAgICAgICAgaW5pdGlhbEhlaWdodCAqPSByYXRpbztcbiAgICAgIH1cblxuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gaW5pdGlhbFdpZHRoIC8gaW5pdGlhbEhlaWdodDtcbiAgICAgIHZhciBtYXhTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgIHdpZHRoOiBvcHRpb25zLm1heFdpZHRoIHx8IEluZmluaXR5LFxuICAgICAgICBoZWlnaHQ6IG9wdGlvbnMubWF4SGVpZ2h0IHx8IEluZmluaXR5XG4gICAgICB9KTtcbiAgICAgIHZhciBtaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgIHdpZHRoOiBvcHRpb25zLm1pbldpZHRoIHx8IDAsXG4gICAgICAgIGhlaWdodDogb3B0aW9ucy5taW5IZWlnaHQgfHwgMFxuICAgICAgfSwgJ2NvdmVyJyk7XG5cbiAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgIHdpZHRoOiBvcHRpb25zLndpZHRoIHx8IChyYXRpbyAhPT0gMSA/IHNvdXJjZS53aWR0aCA6IGluaXRpYWxXaWR0aCksXG4gICAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQgfHwgKHJhdGlvICE9PSAxID8gc291cmNlLmhlaWdodCA6IGluaXRpYWxIZWlnaHQpXG4gICAgICB9KSxcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcblxuICAgICAgd2lkdGggPSBNYXRoLm1pbihtYXhTaXplcy53aWR0aCwgTWF0aC5tYXgobWluU2l6ZXMud2lkdGgsIHdpZHRoKSk7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgaGVpZ2h0KSk7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gbm9ybWFsaXplRGVjaW1hbE51bWJlcih3aWR0aCk7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gbm9ybWFsaXplRGVjaW1hbE51bWJlcihoZWlnaHQpO1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmZpbGxDb2xvciB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHZhciBfb3B0aW9ucyRpbWFnZVNtb290aGkgPSBvcHRpb25zLmltYWdlU21vb3RoaW5nRW5hYmxlZCxcbiAgICAgICAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQgPSBfb3B0aW9ucyRpbWFnZVNtb290aGkgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRpbWFnZVNtb290aGksXG4gICAgICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gb3B0aW9ucy5pbWFnZVNtb290aGluZ1F1YWxpdHk7XG4gICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGltYWdlU21vb3RoaW5nRW5hYmxlZDtcblxuICAgICAgaWYgKGltYWdlU21vb3RoaW5nUXVhbGl0eSkge1xuICAgICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IGltYWdlU21vb3RoaW5nUXVhbGl0eTtcbiAgICAgIH0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5kcmF3SW1hZ2VcblxuXG4gICAgICB2YXIgc291cmNlV2lkdGggPSBzb3VyY2Uud2lkdGg7XG4gICAgICB2YXIgc291cmNlSGVpZ2h0ID0gc291cmNlLmhlaWdodDsgLy8gU291cmNlIGNhbnZhcyBwYXJhbWV0ZXJzXG5cbiAgICAgIHZhciBzcmNYID0gaW5pdGlhbFg7XG4gICAgICB2YXIgc3JjWSA9IGluaXRpYWxZO1xuICAgICAgdmFyIHNyY1dpZHRoO1xuICAgICAgdmFyIHNyY0hlaWdodDsgLy8gRGVzdGluYXRpb24gY2FudmFzIHBhcmFtZXRlcnNcblxuICAgICAgdmFyIGRzdFg7XG4gICAgICB2YXIgZHN0WTtcbiAgICAgIHZhciBkc3RXaWR0aDtcbiAgICAgIHZhciBkc3RIZWlnaHQ7XG5cbiAgICAgIGlmIChzcmNYIDw9IC1pbml0aWFsV2lkdGggfHwgc3JjWCA+IHNvdXJjZVdpZHRoKSB7XG4gICAgICAgIHNyY1ggPSAwO1xuICAgICAgICBzcmNXaWR0aCA9IDA7XG4gICAgICAgIGRzdFggPSAwO1xuICAgICAgICBkc3RXaWR0aCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNyY1ggPD0gMCkge1xuICAgICAgICBkc3RYID0gLXNyY1g7XG4gICAgICAgIHNyY1ggPSAwO1xuICAgICAgICBzcmNXaWR0aCA9IE1hdGgubWluKHNvdXJjZVdpZHRoLCBpbml0aWFsV2lkdGggKyBzcmNYKTtcbiAgICAgICAgZHN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWCA8PSBzb3VyY2VXaWR0aCkge1xuICAgICAgICBkc3RYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSBNYXRoLm1pbihpbml0aWFsV2lkdGgsIHNvdXJjZVdpZHRoIC0gc3JjWCk7XG4gICAgICAgIGRzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcmNXaWR0aCA8PSAwIHx8IHNyY1kgPD0gLWluaXRpYWxIZWlnaHQgfHwgc3JjWSA+IHNvdXJjZUhlaWdodCkge1xuICAgICAgICBzcmNZID0gMDtcbiAgICAgICAgc3JjSGVpZ2h0ID0gMDtcbiAgICAgICAgZHN0WSA9IDA7XG4gICAgICAgIGRzdEhlaWdodCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNyY1kgPD0gMCkge1xuICAgICAgICBkc3RZID0gLXNyY1k7XG4gICAgICAgIHNyY1kgPSAwO1xuICAgICAgICBzcmNIZWlnaHQgPSBNYXRoLm1pbihzb3VyY2VIZWlnaHQsIGluaXRpYWxIZWlnaHQgKyBzcmNZKTtcbiAgICAgICAgZHN0SGVpZ2h0ID0gc3JjSGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChzcmNZIDw9IHNvdXJjZUhlaWdodCkge1xuICAgICAgICBkc3RZID0gMDtcbiAgICAgICAgc3JjSGVpZ2h0ID0gTWF0aC5taW4oaW5pdGlhbEhlaWdodCwgc291cmNlSGVpZ2h0IC0gc3JjWSk7XG4gICAgICAgIGRzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmFtcyA9IFtzcmNYLCBzcmNZLCBzcmNXaWR0aCwgc3JjSGVpZ2h0XTsgLy8gQXZvaWQgXCJJbmRleFNpemVFcnJvclwiXG5cbiAgICAgIGlmIChkc3RXaWR0aCA+IDAgJiYgZHN0SGVpZ2h0ID4gMCkge1xuICAgICAgICB2YXIgc2NhbGUgPSB3aWR0aCAvIGluaXRpYWxXaWR0aDtcbiAgICAgICAgcGFyYW1zLnB1c2goZHN0WCAqIHNjYWxlLCBkc3RZICogc2NhbGUsIGRzdFdpZHRoICogc2NhbGUsIGRzdEhlaWdodCAqIHNjYWxlKTtcbiAgICAgIH0gLy8gQWxsIHRoZSBudW1lcmljYWwgcGFyYW1ldGVycyBzaG91bGQgYmUgaW50ZWdlciBmb3IgYGRyYXdJbWFnZWBcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZW5neXVhbmNoZW4vY3JvcHBlci9pc3N1ZXMvNDc2XG5cblxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW3NvdXJjZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKHBhcmFtKSk7XG4gICAgICB9KSkpKTtcbiAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0UmF0aW8gLSBUaGUgbmV3IGFzcGVjdCByYXRpby5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldEFzcGVjdFJhdGlvOiBmdW5jdGlvbiBzZXRBc3BlY3RSYXRpbyhhc3BlY3RSYXRpbykge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhaXNVbmRlZmluZWQoYXNwZWN0UmF0aW8pKSB7XG4gICAgICAgIC8vIDAgLT4gTmFOXG4gICAgICAgIG9wdGlvbnMuYXNwZWN0UmF0aW8gPSBNYXRoLm1heCgwLCBhc3BlY3RSYXRpbykgfHwgTmFOO1xuXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgdGhpcy5pbml0Q3JvcEJveCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGRyYWcgbW9kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAtIFRoZSBuZXcgZHJhZyBtb2RlLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0RHJhZ01vZGU6IGZ1bmN0aW9uIHNldERyYWdNb2RlKG1vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGRyYWdCb3ggPSB0aGlzLmRyYWdCb3gsXG4gICAgICAgICAgZmFjZSA9IHRoaXMuZmFjZTtcblxuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIGNyb3BwYWJsZSA9IG1vZGUgPT09IERSQUdfTU9ERV9DUk9QO1xuICAgICAgICB2YXIgbW92YWJsZSA9IG9wdGlvbnMubW92YWJsZSAmJiBtb2RlID09PSBEUkFHX01PREVfTU9WRTtcbiAgICAgICAgbW9kZSA9IGNyb3BwYWJsZSB8fCBtb3ZhYmxlID8gbW9kZSA6IERSQUdfTU9ERV9OT05FO1xuICAgICAgICBvcHRpb25zLmRyYWdNb2RlID0gbW9kZTtcbiAgICAgICAgc2V0RGF0YShkcmFnQm94LCBEQVRBX0FDVElPTiwgbW9kZSk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdCb3gsIENMQVNTX0NST1AsIGNyb3BwYWJsZSk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdCb3gsIENMQVNTX01PVkUsIG1vdmFibGUpO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94TW92YWJsZSkge1xuICAgICAgICAgIC8vIFN5bmMgZHJhZyBtb2RlIHRvIGNyb3AgYm94IHdoZW4gaXQgaXMgbm90IG1vdmFibGVcbiAgICAgICAgICBzZXREYXRhKGZhY2UsIERBVEFfQUNUSU9OLCBtb2RlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19DUk9QLCBjcm9wcGFibGUpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGZhY2UsIENMQVNTX01PVkUsIG1vdmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICB2YXIgQW5vdGhlckNyb3BwZXIgPSBXSU5ET1cuQ3JvcHBlcjtcblxuICB2YXIgQ3JvcHBlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBDcm9wcGVyLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudCBmb3IgY3JvcHBpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSAtIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ3JvcHBlcihlbGVtZW50KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9wcGVyKTtcblxuICAgICAgaWYgKCFlbGVtZW50IHx8ICFSRUdFWFBfVEFHX05BTUUudGVzdChlbGVtZW50LnRhZ05hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGFuIDxpbWc+IG9yIDxjYW52YXM+IGVsZW1lbnQuJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBhc3NpZ24oe30sIERFRkFVTFRTLCBpc1BsYWluT2JqZWN0KG9wdGlvbnMpICYmIG9wdGlvbnMpO1xuICAgICAgdGhpcy5jcm9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnBvaW50ZXJzID0ge307XG4gICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXBsYWNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaXplZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaXppbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDcm9wcGVyLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHVybDtcblxuICAgICAgICBpZiAoZWxlbWVudFtOQU1FU1BBQ0VdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudFtOQU1FU1BBQ0VdID0gdGhpcztcblxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgICB0aGlzLmlzSW1nID0gdHJ1ZTsgLy8gZS5nLjogXCJpbWcvcGljdHVyZS5qcGdcIlxuXG4gICAgICAgICAgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnO1xuICAgICAgICAgIHRoaXMub3JpZ2luYWxVcmwgPSB1cmw7IC8vIFN0b3Agd2hlbiBpdCdzIGEgYmxhbmsgaW1hZ2VcblxuICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBlLmcuOiBcImh0dHA6Ly9leGFtcGxlLmNvbS9pbWcvcGljdHVyZS5qcGdcIlxuXG5cbiAgICAgICAgICB1cmwgPSBlbGVtZW50LnNyYztcbiAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnY2FudmFzJyAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICB1cmwgPSBlbGVtZW50LnRvRGF0YVVSTCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkKHVybCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImxvYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0ge307XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBpZiAoIW9wdGlvbnMucm90YXRhYmxlICYmICFvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgICAgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gLy8gT25seSBJRTEwKyBzdXBwb3J0cyBUeXBlZCBBcnJheXNcblxuXG4gICAgICAgIGlmICghb3B0aW9ucy5jaGVja09yaWVudGF0aW9uIHx8ICF3aW5kb3cuQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIERldGVjdCB0aGUgbWltZSB0eXBlIG9mIHRoZSBpbWFnZSBkaXJlY3RseSBpZiBpdCBpcyBhIERhdGEgVVJMXG5cblxuICAgICAgICBpZiAoUkVHRVhQX0RBVEFfVVJMLnRlc3QodXJsKSkge1xuICAgICAgICAgIC8vIFJlYWQgQXJyYXlCdWZmZXIgZnJvbSBEYXRhIFVSTCBvZiBKUEVHIGltYWdlcyBkaXJlY3RseSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgaWYgKFJFR0VYUF9EQVRBX1VSTF9KUEVHLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkKGRhdGFVUkxUb0FycmF5QnVmZmVyKHVybCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IGEgSlBFRyBpbWFnZSBtYXkgY29udGFpbnMgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvbixcbiAgICAgICAgICAgIC8vIHRoZSByZXN0IHR5cGVzIG9mIERhdGEgVVJMcyBhcmUgbm90IG5lY2Vzc2FyeSB0byBjaGVjayBvcmllbnRhdGlvbiBhdCBhbGwuXG4gICAgICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIDEuIERldGVjdCB0aGUgbWltZSB0eXBlIG9mIHRoZSBpbWFnZSBieSBhIFhNTEh0dHBSZXF1ZXN0LlxuICAgICAgICAvLyAyLiBMb2FkIHRoZSBpbWFnZSBhcyBBcnJheUJ1ZmZlciBmb3IgcmVhZGluZyBvcmllbnRhdGlvbiBpZiBpdHMgYSBKUEVHIGltYWdlLlxuXG5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy54aHIgPSB4aHI7IC8vIDEuIENyb3NzIG9yaWdpbiByZXF1ZXN0cyBhcmUgb25seSBzdXBwb3J0ZWQgZm9yIHByb3RvY29sIHNjaGVtZXM6XG4gICAgICAgIC8vIGh0dHAsIGh0dHBzLCBkYXRhLCBjaHJvbWUsIGNocm9tZS1leHRlbnNpb24uXG4gICAgICAgIC8vIDIuIEFjY2VzcyB0byBYTUxIdHRwUmVxdWVzdCBmcm9tIGEgRGF0YSBVUkwgd2lsbCBiZSBibG9ja2VkIGJ5IENPUlMgcG9saWN5XG4gICAgICAgIC8vIGluIHNvbWUgYnJvd3NlcnMgYXMgSUUxMSBhbmQgU2FmYXJpLlxuXG4gICAgICAgIHhoci5vbmFib3J0ID0gY2xvbmU7XG4gICAgICAgIHhoci5vbmVycm9yID0gY2xvbmU7XG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBjbG9uZTtcblxuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBkaXJlY3RseSBpZiBpdCBub3QgYSBKUEVHIGltYWdlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICBpZiAoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSAhPT0gTUlNRV9UWVBFX0pQRUcpIHtcbiAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnJlYWQoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLnhociA9IG51bGw7XG4gICAgICAgIH07IC8vIEJ1c3QgY2FjaGUgd2hlbiB0aGVyZSBpcyBhIFwiY3Jvc3NPcmlnaW5cIiBwcm9wZXJ0eSB0byBhdm9pZCBicm93c2VyIGNhY2hlIGVycm9yXG5cblxuICAgICAgICBpZiAob3B0aW9ucy5jaGVja0Nyb3NzT3JpZ2luICYmIGlzQ3Jvc3NPcmlnaW5VUkwodXJsKSAmJiBlbGVtZW50LmNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgdXJsID0gYWRkVGltZXN0YW1wKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBlbGVtZW50LmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJztcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVhZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQoYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTsgLy8gUmVzZXQgdGhlIG9yaWVudGF0aW9uIHZhbHVlIHRvIGl0cyBkZWZhdWx0IHZhbHVlIDFcbiAgICAgICAgLy8gYXMgc29tZSBpT1MgYnJvd3NlcnMgd2lsbCByZW5kZXIgaW1hZ2Ugd2l0aCBpdHMgb3JpZW50YXRpb25cblxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKTtcbiAgICAgICAgdmFyIHJvdGF0ZSA9IDA7XG4gICAgICAgIHZhciBzY2FsZVggPSAxO1xuICAgICAgICB2YXIgc2NhbGVZID0gMTtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgVVJMIHdoaWNoIGhhcyB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgIHRoaXMudXJsID0gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIE1JTUVfVFlQRV9KUEVHKTtcblxuICAgICAgICAgIHZhciBfcGFyc2VPcmllbnRhdGlvbiA9IHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gICAgICAgICAgcm90YXRlID0gX3BhcnNlT3JpZW50YXRpb24ucm90YXRlO1xuICAgICAgICAgIHNjYWxlWCA9IF9wYXJzZU9yaWVudGF0aW9uLnNjYWxlWDtcbiAgICAgICAgICBzY2FsZVkgPSBfcGFyc2VPcmllbnRhdGlvbi5zY2FsZVk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgICBpbWFnZURhdGEucm90YXRlID0gcm90YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVkgPSBzY2FsZVk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgdXJsID0gdGhpcy51cmw7XG4gICAgICAgIHZhciBjcm9zc09yaWdpbiA9IGVsZW1lbnQuY3Jvc3NPcmlnaW47XG4gICAgICAgIHZhciBjcm9zc09yaWdpblVybCA9IHVybDtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNoZWNrQ3Jvc3NPcmlnaW4gJiYgaXNDcm9zc09yaWdpblVSTCh1cmwpKSB7XG4gICAgICAgICAgaWYgKCFjcm9zc09yaWdpbikge1xuICAgICAgICAgICAgY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgICB9IC8vIEJ1c3QgY2FjaGUgd2hlbiB0aGVyZSBpcyBub3QgYSBcImNyb3NzT3JpZ2luXCIgcHJvcGVydHkgKCM1MTkpXG5cblxuICAgICAgICAgIGNyb3NzT3JpZ2luVXJsID0gYWRkVGltZXN0YW1wKHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIHRoaXMuY3Jvc3NPcmlnaW5VcmwgPSBjcm9zc09yaWdpblVybDtcbiAgICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IGNyb3NzT3JpZ2luVXJsIHx8IHVybDtcbiAgICAgICAgaW1hZ2UuYWx0ID0gZWxlbWVudC5hbHQgfHwgJ1RoZSBpbWFnZSB0byBjcm9wJztcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSB0aGlzLnN0b3AuYmluZCh0aGlzKTtcbiAgICAgICAgYWRkQ2xhc3MoaW1hZ2UsIENMQVNTX0hJREUpO1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGltYWdlLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2l6aW5nID0gdHJ1ZTsgLy8gTWF0Y2ggYWxsIGJyb3dzZXJzIHRoYXQgdXNlIFdlYktpdCBhcyB0aGUgbGF5b3V0IGVuZ2luZSBpbiBpT1MgZGV2aWNlcyxcbiAgICAgICAgLy8gc3VjaCBhcyBTYWZhcmkgZm9yIGlPUywgQ2hyb21lIGZvciBpT1MsIGFuZCBpbi1hcHAgYnJvd3NlcnMuXG5cbiAgICAgICAgdmFyIGlzSU9TV2ViS2l0ID0gV0lORE9XLm5hdmlnYXRvciAmJiAvKD86aVBhZHxpUGhvbmV8aVBvZCkuKj9BcHBsZVdlYktpdC9pLnRlc3QoV0lORE9XLm5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gZG9uZShuYXR1cmFsV2lkdGgsIG5hdHVyYWxIZWlnaHQpIHtcbiAgICAgICAgICBhc3NpZ24oX3RoaXMyLmltYWdlRGF0YSwge1xuICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczIuc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMyLnNpemVkID0gdHJ1ZTtcblxuICAgICAgICAgIF90aGlzMi5idWlsZCgpO1xuICAgICAgICB9OyAvLyBNb3N0IG1vZGVybiBicm93c2VycyAoZXhjZXB0cyBpT1MgV2ViS2l0KVxuXG5cbiAgICAgICAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCAmJiAhaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICBkb25lKGltYWdlLm5hdHVyYWxXaWR0aCwgaW1hZ2UubmF0dXJhbEhlaWdodCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNpemluZ0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2l6aW5nSW1hZ2UgPSBzaXppbmdJbWFnZTtcblxuICAgICAgICBzaXppbmdJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9uZShzaXppbmdJbWFnZS53aWR0aCwgc2l6aW5nSW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgICAgIGlmICghaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoc2l6aW5nSW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzaXppbmdJbWFnZS5zcmMgPSBpbWFnZS5zcmM7IC8vIGlPUyBXZWJLaXQgd2lsbCBjb252ZXJ0IHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIHdpdGggaXRzIG9yaWVudGF0aW9uIG9uY2UgYXBwZW5kIGl0IGludG8gRE9NICgjMjc5KVxuXG4gICAgICAgIGlmICghaXNJT1NXZWJLaXQpIHtcbiAgICAgICAgICBzaXppbmdJbWFnZS5zdHlsZS5jc3NUZXh0ID0gJ2xlZnQ6MDsnICsgJ21heC1oZWlnaHQ6bm9uZSFpbXBvcnRhbnQ7JyArICdtYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7JyArICdtaW4taGVpZ2h0OjAhaW1wb3J0YW50OycgKyAnbWluLXdpZHRoOjAhaW1wb3J0YW50OycgKyAnb3BhY2l0eTowOycgKyAncG9zaXRpb246YWJzb2x1dGU7JyArICd0b3A6MDsnICsgJ3otaW5kZXg6LTE7JztcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNpemluZ0ltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdG9wXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGw7XG4gICAgICAgIGltYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB0aGlzLmltYWdlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYnVpbGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpemVkIHx8IHRoaXMucmVhZHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2U7IC8vIENyZWF0ZSBjcm9wcGVyIGVsZW1lbnRzXG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IFRFTVBMQVRFO1xuICAgICAgICB2YXIgY3JvcHBlciA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY29udGFpbmVyXCIpKTtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jYW52YXNcIikpO1xuICAgICAgICB2YXIgZHJhZ0JveCA9IGNyb3BwZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1kcmFnLWJveFwiKSk7XG4gICAgICAgIHZhciBjcm9wQm94ID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNyb3AtYm94XCIpKTtcbiAgICAgICAgdmFyIGZhY2UgPSBjcm9wQm94LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZmFjZVwiKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmNyb3BwZXIgPSBjcm9wcGVyO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmFnQm94ID0gZHJhZ0JveDtcbiAgICAgICAgdGhpcy5jcm9wQm94ID0gY3JvcEJveDtcbiAgICAgICAgdGhpcy52aWV3Qm94ID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLXZpZXctYm94XCIpKTtcbiAgICAgICAgdGhpcy5mYWNlID0gZmFjZTtcbiAgICAgICAgY2FudmFzLmFwcGVuZENoaWxkKGltYWdlKTsgLy8gSGlkZSB0aGUgb3JpZ2luYWwgaW1hZ2VcblxuICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pOyAvLyBJbnNlcnRzIHRoZSBjcm9wcGVyIGFmdGVyIHRvIHRoZSBjdXJyZW50IGltYWdlXG5cbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShjcm9wcGVyLCBlbGVtZW50Lm5leHRTaWJsaW5nKTsgLy8gU2hvdyB0aGUgaW1hZ2UgaWYgaXMgaGlkZGVuXG5cbiAgICAgICAgaWYgKCF0aGlzLmlzSW1nKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoaW1hZ2UsIENMQVNTX0hJREUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0UHJldmlldygpO1xuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW8gPSBNYXRoLm1heCgwLCBvcHRpb25zLmluaXRpYWxBc3BlY3RSYXRpbykgfHwgTmFOO1xuICAgICAgICBvcHRpb25zLmFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5hc3BlY3RSYXRpbykgfHwgTmFOO1xuICAgICAgICBvcHRpb25zLnZpZXdNb2RlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMywgTWF0aC5yb3VuZChvcHRpb25zLnZpZXdNb2RlKSkpIHx8IDA7XG4gICAgICAgIGFkZENsYXNzKGNyb3BCb3gsIENMQVNTX0hJRERFTik7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmd1aWRlcykge1xuICAgICAgICAgIGFkZENsYXNzKGNyb3BCb3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWRhc2hlZFwiKSksIENMQVNTX0hJRERFTik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuY2VudGVyKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY2VudGVyXCIpKSwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmQpIHtcbiAgICAgICAgICBhZGRDbGFzcyhjcm9wcGVyLCBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWJnXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICAgICAgICBhZGRDbGFzcyhmYWNlLCBDTEFTU19JTlZJU0lCTEUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgICAgICBhZGRDbGFzcyhmYWNlLCBDTEFTU19NT1ZFKTtcbiAgICAgICAgICBzZXREYXRhKGZhY2UsIERBVEFfQUNUSU9OLCBBQ1RJT05fQUxMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5jcm9wQm94UmVzaXphYmxlKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItbGluZVwiKSksIENMQVNTX0hJRERFTik7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItcG9pbnRcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0RHJhZ01vZGUob3B0aW9ucy5kcmFnTW9kZSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0Nyb3ApIHtcbiAgICAgICAgICB0aGlzLmNyb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmRhdGEpO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMucmVhZHkpKSB7XG4gICAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfUkVBRFksIG9wdGlvbnMucmVhZHksIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfUkVBRFkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1bmJ1aWxkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5idWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICB0aGlzLnJlc2V0UHJldmlldygpO1xuICAgICAgICB0aGlzLmNyb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNyb3BwZXIpO1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsIENMQVNTX0hJRERFTik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVuY3JlYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5jcmVhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgdGhpcy51bmJ1aWxkKCk7XG4gICAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY3JvcHBlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2l6aW5nKSB7XG4gICAgICAgICAgdGhpcy5zaXppbmdJbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5zaXplZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVsb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy54aHIub25hYm9ydCA9IG51bGw7XG4gICAgICAgICAgdGhpcy54aHIuYWJvcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBubyBjb25mbGljdCBjcm9wcGVyIGNsYXNzLlxuICAgICAgICogQHJldHVybnMge0Nyb3BwZXJ9IFRoZSBjcm9wcGVyIGNsYXNzLlxuICAgICAgICovXG5cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICAgICAgd2luZG93LkNyb3BwZXIgPSBBbm90aGVyQ3JvcHBlcjtcbiAgICAgICAgcmV0dXJuIENyb3BwZXI7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIENoYW5nZSB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldERlZmF1bHRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdHMob3B0aW9ucykge1xuICAgICAgICBhc3NpZ24oREVGQVVMVFMsIGlzUGxhaW5PYmplY3Qob3B0aW9ucykgJiYgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENyb3BwZXI7XG4gIH0oKTtcblxuICBhc3NpZ24oQ3JvcHBlci5wcm90b3R5cGUsIHJlbmRlciwgcHJldmlldywgZXZlbnRzLCBoYW5kbGVycywgY2hhbmdlLCBtZXRob2RzKTtcblxuICByZXR1cm4gQ3JvcHBlcjtcblxufSkpO1xuIiwiaW1wb3J0ICdjcm9wcGVyanMvZGlzdC9jcm9wcGVyLmNzcydcbmltcG9ydCBDcm9wcGVyIGZyb20gJ2Nyb3BwZXJqcydcbi8vaW1wb3J0IFB1enpsZSBmcm9tICcuL3B1enpsZSdcbnZhciBwYXJ0ZXM6SFRNTENhbnZhc0VsZW1lbnQgW10gPVtdO1xuaW50ZXJmYWNlIGltYWdlaHRtbCBleHRlbmRzIEhUTUxJbWFnZUVsZW1lbnR7XG4gIGNyb3BwZXI/OkNyb3BwZXIgXG59XG5cbnZhciB2YWxvcj00O1xuXG5leHBvcnQgZnVuY3Rpb24gICBjb3J0ZXMgKCk6dm9pZHtcbiAgdmFyIGVsZW1lbnRvOmltYWdlaHRtbCAgID0gPGltYWdlaHRtbD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lkJyk7XG4gIHZhciBjb3J0YXI9IG5ldyBDcm9wcGVyKGVsZW1lbnRvLHsgICAgICAgIGF1dG9Dcm9wQXJlYTogMSwgICAgICAgICAgICB9KTtcbiAgdmFyIHJlc3VsdCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdGFkbycpO1xuICBlbGVtZW50by5hZGRFdmVudExpc3RlbmVyKCdyZWFkeScsIGZ1bmN0aW9uICh0aGlzOmltYWdlaHRtbCkge1xuICAgIGlmKHRoaXMuY3JvcHBlcil7XG4gICAgICBsZXQgZGltZW5zaW9uPXtcbiAgICAgICAgd2lkdGg6dGhpcy5jcm9wcGVyLmdldERhdGEoKS53aWR0aCxcbiAgICAgICAgaGVpZ3RoOnRoaXMuY3JvcHBlci5nZXREYXRhKCkuaGVpZ2h0XG4gICAgICB9XG4gICAgICBmb3IgKHZhciB5PTA7eTx2YWxvcjt5Kyspe1xuICAgICAgICBmb3IodmFyIHg9MDt4PHZhbG9yO3grKyl7XG4gICAgICAgICAgdGhpcy5jcm9wcGVyLnNldERhdGEoe1xuICAgICAgICAgICAgd2lkdGg6ZGltZW5zaW9uLndpZHRoL3ZhbG9yLFxuICAgICAgICAgICAgaGVpZ2h0OmRpbWVuc2lvbi5oZWlndGgvdmFsb3IsICAgICAgICAgIFxuICAgICAgICAgICAgeDpkaW1lbnNpb24ud2lkdGgtKHZhbG9yLXgpKmRpbWVuc2lvbi53aWR0aC92YWxvcixcbiAgICAgICAgICAgIHk6ZGltZW5zaW9uLmhlaWd0aC0odmFsb3IteSkqZGltZW5zaW9uLmhlaWd0aC92YWxvclxuICAgICAgICAgIH0pXG4gICAgICAgICAgcGFydGVzLnB1c2godGhpcy5jcm9wcGVyLmdldENyb3BwZWRDYW52YXMoKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICBwYXJ0ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmKHJlc3VsdCl7XG4gICAgICAgIHZhciBlc3BhY2lvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZChlc3BhY2lvKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICBcbiAgICAgfSk7XG4gIH1cbiAgfSk7XG4gIFxuICBcbiAgXG4gfVxuXG5cbiBcbmlmKHdpbmRvdy5jb3Jkb3ZhKSB7XG4gIGNvbnNvbGUubG9nKCdjb3Jkb3ZhJylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICBjb3J0ZXMpO1xuICAgIC8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCBjb3J0ZXMsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnbm8gY29yZG92YSAtMS0tJylcbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLGNvcnRlcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==