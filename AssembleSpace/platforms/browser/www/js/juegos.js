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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/clases/juegos.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/type/clases/juegos.ts":
/*!***********************************!*\
  !*** ./src/type/clases/juegos.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return juegos; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "./src/type/clases/usuario.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var juegos =
/*#__PURE__*/
function () {
  function juegos(nombre) {
    _classCallCheck(this, juegos);

    this.nombre = name;
  }

  _createClass(juegos, [{
    key: "GetNombre",
    value: function GetNombre() {
      return this.nombre;
    }
  }, {
    key: "permitido",
    value: function permitido(Usuario) {
      /**
       metodo para sobrescribir
      */
      return true;
    }
  }]);

  return juegos;
}();


;

/***/ }),

/***/ "./src/type/clases/usuario.ts":
/*!************************************!*\
  !*** ./src/type/clases/usuario.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usuario; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario(nombre, apellido, sexo, password, Grado_escolar, N_ide) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.password = password;
    this.Grado_escolar = Grado_escolar;
    N_ide ? this.id = N_ide : this.id = 0;
    this.verificar_en_basedatos(this);
  }

  _createClass(Usuario, [{
    key: "verificar_en_basedatos",
    value: function verificar_en_basedatos(usuario) {
      this.permisos = [];
    }
  }, {
    key: "$nombre",

    /**
     * Getter $nombre
     * @return {string}
     */
    get: function get() {
      return this.nombre;
    }
    /**
     * Getter $apellido
     * @return {string}
     */
    ,

    /**
     * Setter $nombre
     * @param {string} value
     */
    set: function set(value) {
      this.nombre = value;
    }
    /**
     * Setter $apellido
     * @param {string} value
     */

  }, {
    key: "$apellido",
    get: function get() {
      return this.apellido;
    }
    /**
     * Getter $sexo
     * @return {string}
     */
    ,
    set: function set(value) {
      this.apellido = value;
    }
    /**
     * Setter $sexo
     * @param {string} value
     */

  }, {
    key: "$sexo",
    get: function get() {
      return this.sexo;
    }
    /**
     * Getter $password
     * @return {string}
     */
    ,
    set: function set(value) {
      this.sexo = value;
    }
    /**
     * Setter $password
     * @param {string} value
     */

  }, {
    key: "$password",
    get: function get() {
      return this.password;
    }
    /**
     * Getter $Grado_escolar
     * @return {string}
     */
    ,
    set: function set(value) {
      this.password = value;
    }
    /**
     * Setter $Grado_escolar
     * @param {string} value
     */

  }, {
    key: "$Grado_escolar",
    get: function get() {
      return this.Grado_escolar;
    }
    /**
     * Getter $id
     * @return {number}
     */
    ,
    set: function set(value) {
      this.Grado_escolar = value;
    }
    /**
     * Setter $id
     * @param {number} value
     */

  }, {
    key: "$id",
    get: function get() {
      return this.id;
    },
    set: function set(value) {
      this.id = value;
    }
  }], [{
    key: "insertar_uusario",
    value: function insertar_uusario(usuario) {}
  }]);

  return Usuario;
}();


var usuario = new Usuario('j', 'j', 's', '22', '2');
usuario.$Grado_escolar = "GRADO1";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL2p1ZWdvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvdXN1YXJpby50cyJdLCJuYW1lcyI6WyJqdWVnb3MiLCJub21icmUiLCJuYW1lIiwiVXN1YXJpbyIsImFwZWxsaWRvIiwic2V4byIsInBhc3N3b3JkIiwiR3JhZG9fZXNjb2xhciIsIk5faWRlIiwiaWQiLCJ2ZXJpZmljYXJfZW5fYmFzZWRhdG9zIiwidXN1YXJpbyIsInBlcm1pc29zIiwidmFsdWUiLCIkR3JhZG9fZXNjb2xhciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTs7SUFFZ0NBLE07OztBQU81QixrQkFBWUMsTUFBWixFQUEwQjtBQUFBOztBQUN0QixTQUFLQSxNQUFMLEdBQVlDLElBQVo7QUFDSDs7OztnQ0FDaUI7QUFDakIsYUFBTyxLQUFLRCxNQUFaO0FBQ0E7Ozs4QkFLZ0JFLE8sRUFBd0I7QUFDckM7OztBQUdBLGFBQU8sSUFBUDtBQUNIOzs7Ozs7O0FBVUosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQ29CQSxPOzs7QUFTaEIsbUJBQW9CRixNQUFwQixFQUFrQ0csUUFBbEMsRUFBa0RDLElBQWxELEVBQThEQyxRQUE5RCxFQUE4RUMsYUFBOUUsRUFBbUdDLEtBQW5HLEVBQWtIO0FBQUE7O0FBQzNHLFNBQUtQLE1BQUwsR0FBWUEsTUFBWjtBQUNBLFNBQUtHLFFBQUwsR0FBZUEsUUFBZjtBQUNBLFNBQUtDLElBQUwsR0FBV0EsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBY0EsUUFBZDtBQUNBLFNBQUtDLGFBQUwsR0FBbUJBLGFBQW5CO0FBQ0FDLFNBQUssR0FBQyxLQUFLQyxFQUFMLEdBQVNELEtBQVYsR0FBaUIsS0FBS0MsRUFBTCxHQUFRLENBQTlCO0FBQ0EsU0FBS0Msc0JBQUwsQ0FBNEIsSUFBNUI7QUFJUDs7OzsyQ0FFNkJDLE8sRUFBZ0I7QUFFMUMsV0FBS0MsUUFBTCxHQUFjLEVBQWQ7QUFFSDs7OztBQUtEOzs7O3dCQUkwQjtBQUM1QixhQUFPLEtBQUtYLE1BQVo7QUFDQTtBQUVFOzs7Ozs7QUF3Q0E7Ozs7c0JBSWdCWSxLLEVBQWU7QUFDakMsV0FBS1osTUFBTCxHQUFjWSxLQUFkO0FBQ0E7QUFFRTs7Ozs7Ozt3QkE1QzRCO0FBQzlCLGFBQU8sS0FBS1QsUUFBWjtBQUNBO0FBRUU7Ozs7O3NCQTRDa0JTLEssRUFBZTtBQUNuQyxXQUFLVCxRQUFMLEdBQWdCUyxLQUFoQjtBQUNBO0FBRUU7Ozs7Ozs7d0JBNUN3QjtBQUMxQixhQUFPLEtBQUtSLElBQVo7QUFDQTtBQUVFOzs7OztzQkE0Q2NRLEssRUFBZTtBQUMvQixXQUFLUixJQUFMLEdBQVlRLEtBQVo7QUFDQTtBQUVFOzs7Ozs7O3dCQTVDNEI7QUFDOUIsYUFBTyxLQUFLUCxRQUFaO0FBQ0E7QUFFRTs7Ozs7c0JBNENrQk8sSyxFQUFlO0FBQ25DLFdBQUtQLFFBQUwsR0FBZ0JPLEtBQWhCO0FBQ0E7QUFFRTs7Ozs7Ozt3QkE1Q2lDO0FBQ25DLGFBQU8sS0FBS04sYUFBWjtBQUNBO0FBRUU7Ozs7O3NCQTRDdUJNLEssRUFBZTtBQUN4QyxXQUFLTixhQUFMLEdBQXFCTSxLQUFyQjtBQUNBO0FBRUU7Ozs7Ozs7d0JBNUNzQjtBQUN4QixhQUFPLEtBQUtKLEVBQVo7QUFDQSxLO3NCQThDY0ksSyxFQUFlO0FBQzdCLFdBQUtKLEVBQUwsR0FBVUksS0FBVjtBQUNBOzs7cUNBbEdpQ0YsTyxFQUFnQixDQUU5Qzs7Ozs7OztBQXNHTCxJQUFJQSxPQUFPLEdBQUUsSUFBSVIsT0FBSixDQUFZLEdBQVosRUFBZ0IsR0FBaEIsRUFBb0IsR0FBcEIsRUFBd0IsSUFBeEIsRUFBNkIsR0FBN0IsQ0FBYjtBQUNBUSxPQUFPLENBQUNHLGNBQVIsR0FBdUIsUUFBdkIsQyIsImZpbGUiOiJqcy9qdWVnb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90eXBlL2NsYXNlcy9qdWVnb3MudHNcIik7XG4iLCJpbXBvcnQgaW50ZXJmYXpfZ3JhZmljYSBmcm9tICcuL2ludGVyZmF6X2dyYWZpY2EnXG5pbXBvcnQgVXN1YXJpbyBmcm9tICcuL3VzdWFyaW8nXG5cbmV4cG9ydCBkZWZhdWx0ICBhYnN0cmFjdCBjbGFzcyAganVlZ29zICBpbXBsZW1lbnRzIGludGVyZmF6X2dyYWZpY2F7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlc2NyaXBjaW9uOnN0cmluZ1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBOaXZlbF9kaWZpY3VsdGFkOm51bWJlclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBUaWVtcG9kZWxqdWdhZG9yOkRhdGVcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW1hZ2VuZXM6SW1hZ2VCaXRtYXBbXVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBpbnRlcmZhX2dyYWZpY2E6YW55XG4gICAgICAgICAgICAgbm9tYnJlOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihub21icmU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5ub21icmU9bmFtZVxuICAgIH1cbiAgICBHZXROb21icmUoKTpzdHJpbmd7XG4gICAgIHJldHVybiB0aGlzLm5vbWJyZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFic3RyYWN0IGdldCBHZXRkaWZpY3VsdGFkKCk6bnVtYmVyXG4gICAgcHVibGljIGFic3RyYWN0IHNldCBTZXRkaWZpY3VsdGFkKG51bWVybzpudW1iZXIpO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBBc2lnbmFjaW9uZGVkaWZpY3VsdGFkKFVzdWFyaW86VXN1YXJpbyk6dm9pZDtcbiAgICBwdWJsaWMgcGVybWl0aWRvKFVzdWFyaW86VXN1YXJpbyk6Ym9vbGVhbntcbiAgICAgICAgLyoqXG4gICAgICAgICBtZXRvZG8gcGFyYSBzb2JyZXNjcmliaXJcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBwdWJsaWMgYWJzdHJhY3QgIFZhbGlkYXJNb3ZpbWllbnRvcyhFdmVudDpFdmVudCk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgQ2FsaWZpY2FyKFVzdWFyaW86VXN1YXJpbyk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgSnVnYXIoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRfZ3JhZmljYXMoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBlbnZpYXJfZGF0b3MoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBmaW5hbGl6YXIoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBwaW50YXJfcGFudGFsbGEoKTp2b2lkO1xuXG5cbn07IiwiaW1wb3J0IHBhcmFtZXRyb3MgZnJvbSBcIi4vUGFyYW1ldHJvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc3Vhcmlve1xuXG4gICAgcHJpdmF0ZSBub21icmU6c3RyaW5nO1xuICAgIHByaXZhdGUgYXBlbGxpZG86c3RyaW5nO1xuICAgIHByaXZhdGUgc2V4bzpzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBHcmFkb19lc2NvbGFyOnN0cmluZztcbiAgICBwcml2YXRlIGlkOm51bWJlcjtcbiAgICBwcml2YXRlIHBlcm1pc29zOnBhcmFtZXRyb3NbXTtcbiAgICAgcHVibGljIGNvbnN0cnVjdG9yKCBub21icmU6c3RyaW5nLGFwZWxsaWRvOnN0cmluZyxzZXhvOnN0cmluZyxwYXNzd29yZDpzdHJpbmcsR3JhZG9fZXNjb2xhcjpzdHJpbmcsTl9pZGU/Om51bWJlciApe1xuICAgICAgICAgICAgdGhpcy5ub21icmU9bm9tYnJlO1xuICAgICAgICAgICAgdGhpcy5hcGVsbGlkbz0gYXBlbGxpZG87XG4gICAgICAgICAgICB0aGlzLnNleG89IHNleG87XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkPXBhc3N3b3JkO1xuICAgICAgICAgICAgdGhpcy5HcmFkb19lc2NvbGFyPUdyYWRvX2VzY29sYXI7XG4gICAgICAgICAgICBOX2lkZT90aGlzLmlkPSBOX2lkZSA6dGhpcy5pZD0wOyBcbiAgICAgICAgICAgIHRoaXMudmVyaWZpY2FyX2VuX2Jhc2VkYXRvcyh0aGlzKTsgXG4gICAgICAgICAgICBcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHZlcmlmaWNhcl9lbl9iYXNlZGF0b3ModXN1YXJpbzpVc3VhcmlvKXtcbiAgICAgIFxuICAgICAgICB0aGlzLnBlcm1pc29zPVtdO1xuXG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgaW5zZXJ0YXJfdXVzYXJpbyh1c3VhcmlvOlVzdWFyaW8pe1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgJG5vbWJyZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkbm9tYnJlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMubm9tYnJlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgJGFwZWxsaWRvXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRhcGVsbGlkbygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFwZWxsaWRvO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgJHNleG9cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJHNleG8oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zZXhvO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgJHBhc3N3b3JkXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRwYXNzd29yZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhc3N3b3JkO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgJEdyYWRvX2VzY29sYXJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJEdyYWRvX2VzY29sYXIoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5HcmFkb19lc2NvbGFyO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgJGlkXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRpZCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJG5vbWJyZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRub21icmUodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMubm9tYnJlID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkYXBlbGxpZG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkYXBlbGxpZG8odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMuYXBlbGxpZG8gPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRzZXhvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJHNleG8odmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMuc2V4byA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnBhc3N3b3JkID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkR3JhZG9fZXNjb2xhclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRHcmFkb19lc2NvbGFyKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLkdyYWRvX2VzY29sYXIgPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRpZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRpZCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5pZCA9IHZhbHVlO1xuXHR9XG5cbiAgICBcbn1cbiBcblxudmFyIHVzdWFyaW89IG5ldyBVc3VhcmlvKCdqJywnaicsJ3MnLCcyMicsJzInKVxudXN1YXJpby4kR3JhZG9fZXNjb2xhcj1cIkdSQURPMVwiIl0sInNvdXJjZVJvb3QiOiIifQ==