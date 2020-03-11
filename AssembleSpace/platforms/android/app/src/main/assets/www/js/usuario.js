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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/clases/usuario.ts");
/******/ })
/************************************************************************/
/******/ ({

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
  //falta implementar
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL3VzdWFyaW8udHMiXSwibmFtZXMiOlsiVXN1YXJpbyIsIm5vbWJyZSIsImFwZWxsaWRvIiwic2V4byIsInBhc3N3b3JkIiwiR3JhZG9fZXNjb2xhciIsIk5faWRlIiwiaWQiLCJ2ZXJpZmljYXJfZW5fYmFzZWRhdG9zIiwidXN1YXJpbyIsInBlcm1pc29zIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hGcUJBLE87OztBQVFqQjtBQUVDLG1CQUFvQkMsTUFBcEIsRUFBa0NDLFFBQWxDLEVBQWtEQyxJQUFsRCxFQUE4REMsUUFBOUQsRUFBOEVDLGFBQTlFLEVBQW1HQyxLQUFuRyxFQUFrSDtBQUFBOztBQUMzRyxTQUFLTCxNQUFMLEdBQVlBLE1BQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWVBLFFBQWY7QUFDQSxTQUFLQyxJQUFMLEdBQVdBLElBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWNBLFFBQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQW1CQSxhQUFuQjtBQUNBQyxTQUFLLEdBQUMsS0FBS0MsRUFBTCxHQUFTRCxLQUFWLEdBQWlCLEtBQUtDLEVBQUwsR0FBUSxDQUE5QjtBQUNBLFNBQUtDLHNCQUFMLENBQTRCLElBQTVCO0FBSVA7Ozs7MkNBRTZCQyxPLEVBQWdCO0FBRTFDLFdBQUtDLFFBQUwsR0FBYyxFQUFkO0FBRUg7Ozs7QUFLRDs7Ozt3QkFJMEI7QUFDNUIsYUFBTyxLQUFLVCxNQUFaO0FBQ0E7QUFFRTs7Ozs7O0FBd0NBOzs7O3NCQUlnQlUsSyxFQUFlO0FBQ2pDLFdBQUtWLE1BQUwsR0FBY1UsS0FBZDtBQUNBO0FBRUU7Ozs7Ozs7d0JBNUM0QjtBQUM5QixhQUFPLEtBQUtULFFBQVo7QUFDQTtBQUVFOzs7OztzQkE0Q2tCUyxLLEVBQWU7QUFDbkMsV0FBS1QsUUFBTCxHQUFnQlMsS0FBaEI7QUFDQTtBQUVFOzs7Ozs7O3dCQTVDd0I7QUFDMUIsYUFBTyxLQUFLUixJQUFaO0FBQ0E7QUFFRTs7Ozs7c0JBNENjUSxLLEVBQWU7QUFDL0IsV0FBS1IsSUFBTCxHQUFZUSxLQUFaO0FBQ0E7QUFFRTs7Ozs7Ozt3QkE1QzRCO0FBQzlCLGFBQU8sS0FBS1AsUUFBWjtBQUNBO0FBRUU7Ozs7O3NCQTRDa0JPLEssRUFBZTtBQUNuQyxXQUFLUCxRQUFMLEdBQWdCTyxLQUFoQjtBQUNBO0FBRUU7Ozs7Ozs7d0JBNUNpQztBQUNuQyxhQUFPLEtBQUtOLGFBQVo7QUFDQTtBQUVFOzs7OztzQkE0Q3VCTSxLLEVBQWU7QUFDeEMsV0FBS04sYUFBTCxHQUFxQk0sS0FBckI7QUFDQTtBQUVFOzs7Ozs7O3dCQTVDc0I7QUFDeEIsYUFBTyxLQUFLSixFQUFaO0FBQ0EsSztzQkE4Q2NJLEssRUFBZTtBQUM3QixXQUFLSixFQUFMLEdBQVVJLEtBQVY7QUFDQTs7O3FDQWxHaUNGLE8sRUFBZ0IsQ0FFOUMiLCJmaWxlIjoianMvdXN1YXJpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R5cGUvY2xhc2VzL3VzdWFyaW8udHNcIik7XG4iLCJpbXBvcnQgcGFyYW1ldHJvcyBmcm9tIFwiLi9QYXJhbWV0cm9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzdWFyaW97XG5cbiAgICBwcml2YXRlIG5vbWJyZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGVsbGlkbzpzdHJpbmc7XG4gICAgcHJpdmF0ZSBzZXhvOnN0cmluZztcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcbiAgICBwcml2YXRlIEdyYWRvX2VzY29sYXI6c3RyaW5nO1xuICAgIHByaXZhdGUgaWQ6bnVtYmVyO1xuICAgIC8vZmFsdGEgaW1wbGVtZW50YXJcbiAgICBwcml2YXRlIHBlcm1pc29zITpwYXJhbWV0cm9zW107XG4gICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggbm9tYnJlOnN0cmluZyxhcGVsbGlkbzpzdHJpbmcsc2V4bzpzdHJpbmcscGFzc3dvcmQ6c3RyaW5nLEdyYWRvX2VzY29sYXI6c3RyaW5nLE5faWRlPzpudW1iZXIgKXtcbiAgICAgICAgICAgIHRoaXMubm9tYnJlPW5vbWJyZTtcbiAgICAgICAgICAgIHRoaXMuYXBlbGxpZG89IGFwZWxsaWRvO1xuICAgICAgICAgICAgdGhpcy5zZXhvPSBzZXhvO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZD1wYXNzd29yZDtcbiAgICAgICAgICAgIHRoaXMuR3JhZG9fZXNjb2xhcj1HcmFkb19lc2NvbGFyO1xuICAgICAgICAgICAgTl9pZGU/dGhpcy5pZD0gTl9pZGUgOnRoaXMuaWQ9MDsgXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhcl9lbl9iYXNlZGF0b3ModGhpcyk7IFxuICAgICAgICAgICAgXG5cblxuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJpZmljYXJfZW5fYmFzZWRhdG9zKHVzdWFyaW86VXN1YXJpbyl7XG4gICAgICBcbiAgICAgICAgdGhpcy5wZXJtaXNvcz1bXTtcblxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGluc2VydGFyX3V1c2FyaW8odXN1YXJpbzpVc3VhcmlvKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRub21icmVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJG5vbWJyZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5vbWJyZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRhcGVsbGlkb1xuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkYXBlbGxpZG8oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hcGVsbGlkbztcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRzZXhvXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRzZXhvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc2V4bztcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRwYXNzd29yZFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkcGFzc3dvcmQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYXNzd29yZDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRHcmFkb19lc2NvbGFyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRHcmFkb19lc2NvbGFyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuR3JhZG9fZXNjb2xhcjtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRpZFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblx0cHVibGljIGdldCAkaWQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRub21icmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkbm9tYnJlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5vbWJyZSA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJGFwZWxsaWRvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJGFwZWxsaWRvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFwZWxsaWRvID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkc2V4b1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRzZXhvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNleG8gPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRwYXNzd29yZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJEdyYWRvX2VzY29sYXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkR3JhZG9fZXNjb2xhcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5HcmFkb19lc2NvbGFyID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkaWQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuaWQgPSB2YWx1ZTtcblx0fVxuXG4gICAgXG59XG4gXG5cbiAiXSwic291cmNlUm9vdCI6IiJ9