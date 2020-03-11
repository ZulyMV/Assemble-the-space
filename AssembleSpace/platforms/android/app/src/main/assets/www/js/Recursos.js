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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/clases/Recursos.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/type/clases/Recursos.ts":
/*!*************************************!*\
  !*** ./src/type/clases/Recursos.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recursos; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Recursos =
/*#__PURE__*/
function () {
  function Recursos() {
    _classCallCheck(this, Recursos);

    this.path_recursos = [];
    this.path_propios = [];
    this.audio = [];
    this.images = []; // this.generar_recursosjuego()
  }
  /***
     * @description obtiene todas las imagenes de todas las carpetas dadas
     */


  _createClass(Recursos, [{
    key: "get_imagenes",
    value: function get_imagenes() {
      var recursos = this;

      var _loop = function _loop(key) {
        var requestURL = key + "/imagenes.json";
        var request = new XMLHttpRequest();
        request.addEventListener("loadend", function (evt) {
          if (request.readyState === request.DONE) {
            if (request.status === 200) {
              alert("Suerte");
            } else {
              alert("Error no se pudo leer el archivo");
              throw new Error("No implementado");
            }
          }

          recursos.images.push(this.responseText);
        });
        request.open("GET", requestURL);
        request.send();
      };

      for (var key in this.path_propios) {
        _loop(key);
      }
    }
  }, {
    key: "get_audios",
    value: function get_audios() {
      return [];
    }
    /**
          * @description este metodo se encarga de encontrar los json respectivos de las multimedias en el equipo
          * @deprecated este metodo no esta implementado correctamente ,a futuro leera los json automaticamanete 
          * @returns text/json
          */

  }, {
    key: "generar_recursosjuego",
    value: function generar_recursosjuego(path) {
      //this.path_recursos.push("../image/rompecabezas")
      var json = "{}";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", path, false);

      xhr.onload = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          json = this.responseText;
        } else {
          console.error(xhr.statusText);
        }
      };

      xhr.onerror = function (e) {
        console.error("Error ----" + xhr.statusText + " : " + xhr.DONE);
      };

      xhr.send(null);
      return json;
    }
  }]);

  return Recursos;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL1JlY3Vyc29zLnRzIl0sIm5hbWVzIjpbIlJlY3Vyc29zIiwicGF0aF9yZWN1cnNvcyIsInBhdGhfcHJvcGlvcyIsImF1ZGlvIiwiaW1hZ2VzIiwicmVjdXJzb3MiLCJrZXkiLCJyZXF1ZXN0VVJMIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwiYWxlcnQiLCJFcnJvciIsInB1c2giLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsInBhdGgiLCJqc29uIiwieGhyIiwib25sb2FkIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJvbmVycm9yIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxROzs7QUFPakIsc0JBQWE7QUFBQTs7QUFDVCxTQUFLQyxhQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFZLEVBQVosQ0FKUyxDQUtWO0FBQ0Y7QUFFQzs7Ozs7OzttQ0FHWTtBQUVaLFVBQUlDLFFBQVEsR0FBQyxJQUFiOztBQUZZLGlDQUdEQyxHQUhDO0FBSVYsWUFBSUMsVUFBVSxHQUFHRCxHQUFHLEdBQUMsZ0JBQXJCO0FBQ0EsWUFBSUUsT0FBTyxHQUFHLElBQUlDLGNBQUosRUFBZDtBQUNBRCxlQUFPLENBQUNFLGdCQUFSLENBQXlCLFNBQXpCLEVBQW1DLFVBQVNDLEdBQVQsRUFBYTtBQUMvQyxjQUFJSCxPQUFPLENBQUNJLFVBQVIsS0FBdUJKLE9BQU8sQ0FBQ0ssSUFBbkMsRUFBeUM7QUFDdkMsZ0JBQUlMLE9BQU8sQ0FBQ00sTUFBUixLQUFtQixHQUF2QixFQUE0QjtBQUN4QkMsbUJBQUssQ0FBQyxRQUFELENBQUw7QUFDSCxhQUZELE1BRUs7QUFDSEEsbUJBQUssQ0FBQyxrQ0FBRCxDQUFMO0FBQ0Esb0JBQU0sSUFBSUMsS0FBSixDQUFVLGlCQUFWLENBQU47QUFDRDtBQUNGOztBQUNBWCxrQkFBUSxDQUFDRCxNQUFULENBQWdCYSxJQUFoQixDQUFxQixLQUFLQyxZQUExQjtBQUVILFNBWEM7QUFZRlYsZUFBTyxDQUFDVyxJQUFSLENBQWEsS0FBYixFQUFtQlosVUFBbkI7QUFDQUMsZUFBTyxDQUFDWSxJQUFSO0FBbkJZOztBQUdaLFdBQUssSUFBTWQsR0FBWCxJQUFrQixLQUFLSixZQUF2QixFQUFxQztBQUFBLGNBQTFCSSxHQUEwQjtBQWlCdEM7QUFFSjs7O2lDQUVrQjtBQUNYLGFBQU8sRUFBUDtBQUNIO0FBQ0Y7Ozs7Ozs7OzBDQUt1QmUsSSxFQUFpQjtBQUNuQztBQUNBLFVBQUlDLElBQUksR0FBQyxJQUFUO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLElBQUlkLGNBQUosRUFBVjtBQUNBYyxTQUFHLENBQUNKLElBQUosQ0FBUyxLQUFULEVBQWdCRSxJQUFoQixFQUFzQixLQUF0Qjs7QUFDQUUsU0FBRyxDQUFDQyxNQUFKLEdBQWEsVUFBVUMsQ0FBVixFQUFhO0FBQzFCLFlBQUlGLEdBQUcsQ0FBQ1gsVUFBSixLQUFtQixDQUFuQixJQUF3QlcsR0FBRyxDQUFDVCxNQUFKLEtBQWUsR0FBM0MsRUFBZ0Q7QUFDN0NRLGNBQUksR0FBQyxLQUFLSixZQUFWO0FBRUgsU0FIQSxNQUdNO0FBQ0pRLGlCQUFPLENBQUNDLEtBQVIsQ0FBY0osR0FBRyxDQUFDSyxVQUFsQjtBQUNGO0FBRUMsT0FSRDs7QUFTQUwsU0FBRyxDQUFDTSxPQUFKLEdBQWMsVUFBVUosQ0FBVixFQUFhO0FBQzNCQyxlQUFPLENBQUNDLEtBQVIsQ0FBYyxlQUFhSixHQUFHLENBQUNLLFVBQWpCLEdBQTRCLEtBQTVCLEdBQWtDTCxHQUFHLENBQUNWLElBQXBEO0FBQ0MsT0FGRDs7QUFHQVUsU0FBRyxDQUFDSCxJQUFKLENBQVMsSUFBVDtBQUVBLGFBQU9FLElBQVA7QUFFTCIsImZpbGUiOiJqcy9SZWN1cnNvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R5cGUvY2xhc2VzL1JlY3Vyc29zLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzb3N7XG5cbiAgICBwYXRoX3JlY3Vyc29zOnN0cmluZ1tdXG4gICAgcGF0aF9wcm9waW9zOltdXG4gICAgYXVkaW86c3RyaW5nW11cbiAgICBpbWFnZXM6c3RyaW5nW11cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGF0aF9yZWN1cnNvcz1bXVxuICAgICAgICB0aGlzLnBhdGhfcHJvcGlvcz1bXVxuICAgICAgICB0aGlzLmF1ZGlvPVtdXG4gICAgICAgIHRoaXMuaW1hZ2VzPVtdXG4gICAgICAgLy8gdGhpcy5nZW5lcmFyX3JlY3Vyc29zanVlZ28oKVxuICAgIH1cblxuICAgICAgLyoqKlxuICAgICAgICAgKiBAZGVzY3JpcHRpb24gb2J0aWVuZSB0b2RhcyBsYXMgaW1hZ2VuZXMgZGUgdG9kYXMgbGFzIGNhcnBldGFzIGRhZGFzXG4gICAgICAgICAqL1xuICAgIGdldF9pbWFnZW5lcygpe1xuICAgICBcbiAgICAgIGxldCByZWN1cnNvcz10aGlzXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBhdGhfcHJvcGlvcykge1xuICAgICAgICBsZXQgcmVxdWVzdFVSTCA9IGtleStcIi9pbWFnZW5lcy5qc29uXCJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIixmdW5jdGlvbihldnQpe1xuICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gcmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICBhbGVydChcIlN1ZXJ0ZVwiKVxuICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICBhbGVydChcIkVycm9yIG5vIHNlIHB1ZG8gbGVlciBlbCBhcmNoaXZvXCIpXG4gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gaW1wbGVtZW50YWRvXCIpXG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgICByZWN1cnNvcy5pbWFnZXMucHVzaCh0aGlzLnJlc3BvbnNlVGV4dClcbiAgIFxuICAgICAgfSk7XG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIixyZXF1ZXN0VVJMKVxuICAgICAgcmVxdWVzdC5zZW5kKClcbiAgICB9XG5cbn1cblxuICAgIGdldF9hdWRpb3MoKTpbXXtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgLyoqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBlc3RlIG1ldG9kbyBzZSBlbmNhcmdhIGRlIGVuY29udHJhciBsb3MganNvbiByZXNwZWN0aXZvcyBkZSBsYXMgbXVsdGltZWRpYXMgZW4gZWwgZXF1aXBvXG4gICAgICAgICAqIEBkZXByZWNhdGVkIGVzdGUgbWV0b2RvIG5vIGVzdGEgaW1wbGVtZW50YWRvIGNvcnJlY3RhbWVudGUgLGEgZnV0dXJvIGxlZXJhIGxvcyBqc29uIGF1dG9tYXRpY2FtYW5ldGUgXG4gICAgICAgICAqIEByZXR1cm5zIHRleHQvanNvblxuICAgICAgICAgKi9cbiAgICBnZW5lcmFyX3JlY3Vyc29zanVlZ28ocGF0aDpzdHJpbmcpOmFueSB7ICAgXG4gICAgICAgIC8vdGhpcy5wYXRoX3JlY3Vyc29zLnB1c2goXCIuLi9pbWFnZS9yb21wZWNhYmV6YXNcIilcbiAgICAgICAgdmFyIGpzb249XCJ7fVwiO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIGZhbHNlKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAganNvbj10aGlzLnJlc3BvbnNlVGV4dCA7XG5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnN0YXR1c1RleHQpO1xuICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciAtLS0tXCIreGhyLnN0YXR1c1RleHQrXCIgOiBcIit4aHIuRE9ORSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcblxuICAgICAgICByZXR1cm4ganNvblxuXG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=