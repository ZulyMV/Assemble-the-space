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



/***/ }),

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
/* harmony import */ var _Recursos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recursos */ "./src/type/clases/Recursos.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var juegos =
/*#__PURE__*/
function () {
  _createClass(juegos, [{
    key: "Pintar_pantalla",
    value: function Pintar_pantalla() {
      throw new Error("Method not implemented.");
    }
  }]);

  function juegos(nombre, Usuario) {
    _classCallCheck(this, juegos);

    var juego = this;
    this.h = 0;
    this.m = 0;
    this.s = 0;
    this.Usuario = Usuario;
    this.nombre = nombre;
    this.recursos = new _Recursos__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.Pantalla = document.documentElement;
    this.configuraciones = {
      facil: true,
      medio: true,
      dificil: true
    };
    this.size = {
      width: document.documentElement.style.width,
      height: document.documentElement.style.height
    };
    var elements = document.getElementsByClassName("nivel");

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function () {
        juego.setDificultad(this);
      }, false);
    }
  }

  _createClass(juegos, [{
    key: "setDificultad",
    value: function setDificultad(boton) {
      // obtener el atributo del boton nivel
      this.Nivel_dificultad = parseInt(boton.getAttribute("nivel"));
      console.log(boton.getAttribute("nivel")); //oculto los botones de dificultad  ocultadndo el div

      var dificultad_div = document.getElementById("nivel");
      dificultad_div.style.display = "none"; ///  muestros la sellecion de imagenes

      var imagen_div = document.getElementById("agrupar_imagenes");
      imagen_div.style.display = "";
    }
  }, {
    key: "GetNombre",
    value: function GetNombre() {
      return this.nombre;
    }
  }, {
    key: "cronometrar",
    value: function cronometrar() {
      var j = this; //llama al metodo escribir

      this.escribir(j); // ejecuta el metodo cada segundo

      this.intervalo = setInterval(function () {
        j.escribir(j);
      }, 1000);
    }
  }, {
    key: "para",
    value: function para() {
      //para el cronomecro
      clearInterval(this.intervalo);
      document.getElementById("cronomecro").innerHTML = "00:00:00";
    }
  }, {
    key: "escribir",
    value: function escribir(j) {
      var hAux, mAux, sAux;
      j.s++;

      if (j.s > 59) {
        j.m++;
        j.s = 0;
      }

      if (j.m > 59) {
        j.h++;
        j.m = 0;
      }

      if (j.h > 24) {
        j.h = 0;
      }

      if (j.s < 10) {
        sAux = "0" + j.s;
      } else {
        sAux = j.s;
      }

      if (j.m < 10) {
        mAux = "0" + j.m;
      } else {
        mAux = j.m;
      }

      if (j.h < 10) {
        hAux = "0" + j.h;
      } else {
        hAux = j.h;
      } // escribe en el html


      var a = document.getElementById("cronomecro");
      a.innerHTML = hAux + ":" + mAux + ":" + sAux;
    }
  }, {
    key: "time_usuario",
    value: function time_usuario() {
      this.para();
      var g = this.h.toString() + ":" + this.m.toString() + ":" + this.s.toString();
      this.h = 0;
      this.m = 0;
      this.s = 0;
      return g;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL1JlY3Vyc29zLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlL2NsYXNlcy9qdWVnb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL3VzdWFyaW8udHMiXSwibmFtZXMiOlsiUmVjdXJzb3MiLCJwYXRoX3JlY3Vyc29zIiwicGF0aF9wcm9waW9zIiwiYXVkaW8iLCJpbWFnZXMiLCJyZWN1cnNvcyIsImtleSIsInJlcXVlc3RVUkwiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJhbGVydCIsIkVycm9yIiwicHVzaCIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwicGF0aCIsImpzb24iLCJ4aHIiLCJvbmxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJqdWVnb3MiLCJub21icmUiLCJVc3VhcmlvIiwianVlZ28iLCJoIiwibSIsInMiLCJQYW50YWxsYSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY29uZmlndXJhY2lvbmVzIiwiZmFjaWwiLCJtZWRpbyIsImRpZmljaWwiLCJzaXplIiwid2lkdGgiLCJzdHlsZSIsImhlaWdodCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJzZXREaWZpY3VsdGFkIiwiYm90b24iLCJOaXZlbF9kaWZpY3VsdGFkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJkaWZpY3VsdGFkX2RpdiIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheSIsImltYWdlbl9kaXYiLCJqIiwiZXNjcmliaXIiLCJpbnRlcnZhbG8iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJoQXV4IiwibUF1eCIsInNBdXgiLCJhIiwicGFyYSIsImciLCJ0b1N0cmluZyIsImFwZWxsaWRvIiwic2V4byIsInBhc3N3b3JkIiwiR3JhZG9fZXNjb2xhciIsIk5faWRlIiwiaWQiLCJ2ZXJpZmljYXJfZW5fYmFzZWRhdG9zIiwidXN1YXJpbyIsInBlcm1pc29zIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLFE7OztBQU9qQixzQkFBYTtBQUFBOztBQUNULFNBQUtDLGFBQUwsR0FBbUIsRUFBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsS0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQVksRUFBWixDQUpTLENBS1Y7QUFDRjtBQUVDOzs7Ozs7O21DQUdZO0FBRVosVUFBSUMsUUFBUSxHQUFDLElBQWI7O0FBRlksaUNBR0RDLEdBSEM7QUFJVixZQUFJQyxVQUFV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O0FBRTFDLFdBQUtDLFFBQUwsR0FBYyxFQUFkO0FBRUg7Ozs7QUFLRDs7Ozt3QkFJMEI7QUFDNUIsYUFBTyxLQUFLcEQsTUFBWjtBQUNBO0FBRUU7Ozs7OztBQXdDQTs7OztzQkFJZ0JxRCxLLEVBQWU7QUFDakMsV0FBS3JELE1BQUwsR0FBY3FELEtBQWQ7QUFDQTtBQUVFOzs7Ozs7O3dCQTVDNEI7QUFDOUIsYUFBTyxLQUFLVCxRQUFaO0FBQ0E7QUFFRTs7Ozs7c0JBNENrQlMsSyxFQUFlO0FBQ25DLFdBQUtULFFBQUwsR0FBZ0JTLEtBQWhCO0FBQ0E7QUFFRTs7Ozs7Ozt3QkE1Q3dCO0FBQzFCLGFBQU8sS0FBS1IsSUFBWjtBQUNBO0FBRUU7Ozs7O3NCQTRDY1EsSyxFQUFlO0FBQy9CLFdBQUtSLElBQUwsR0FBWVEsS0FBWjtBQUNBO0FBRUU7Ozs7Ozs7d0JBNUM0QjtBQUM5QixhQUFPLEtBQUtQLFFBQVo7QUFDQTtBQUVFOzs7OztzQkE0Q2tCTyxLLEVBQWU7QUFDbkMsV0FBS1AsUUFBTCxHQUFnQk8sS0FBaEI7QUFDQTtBQUVFOzs7Ozs7O3dCQTVDaUM7QUFDbkMsYUFBTyxLQUFLTixhQUFaO0FBQ0E7QUFFRTs7Ozs7c0JBNEN1Qk0sSyxFQUFlO0FBQ3hDLFdBQUtOLGFBQUwsR0FBcUJNLEtBQXJCO0FBQ0E7QUFFRTs7Ozs7Ozt3QkE1Q3NCO0FBQ3hCLGFBQU8sS0FBS0osRUFBWjtBQUNBLEs7c0JBOENjSSxLLEVBQWU7QUFDN0IsV0FBS0osRUFBTCxHQUFVSSxLQUFWO0FBQ0E7OztxQ0FsR2lDRixPLEVBQWdCLENBRTlDIiwiZmlsZSI6ImpzL2p1ZWdvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R5cGUvY2xhc2VzL2p1ZWdvcy50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Vyc29ze1xuXG4gICAgcGF0aF9yZWN1cnNvczpzdHJpbmdbXVxuICAgIHBhdGhfcHJvcGlvczpbXVxuICAgIGF1ZGlvOnN0cmluZ1tdXG4gICAgaW1hZ2VzOnN0cmluZ1tdXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBhdGhfcmVjdXJzb3M9W11cbiAgICAgICAgdGhpcy5wYXRoX3Byb3Bpb3M9W11cbiAgICAgICAgdGhpcy5hdWRpbz1bXVxuICAgICAgICB0aGlzLmltYWdlcz1bXVxuICAgICAgIC8vIHRoaXMuZ2VuZXJhcl9yZWN1cnNvc2p1ZWdvKClcbiAgICB9XG5cbiAgICAgIC8qKipcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIG9idGllbmUgdG9kYXMgbGFzIGltYWdlbmVzIGRlIHRvZGFzIGxhcyBjYXJwZXRhcyBkYWRhc1xuICAgICAgICAgKi9cbiAgICBnZXRfaW1hZ2VuZXMoKXtcbiAgICAgXG4gICAgICBsZXQgcmVjdXJzb3M9dGhpc1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wYXRoX3Byb3Bpb3MpIHtcbiAgICAgICAgbGV0IHJlcXVlc3RVUkwgPSBrZXkrXCIvaW1hZ2VuZXMuanNvblwiXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IFxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsZnVuY3Rpb24oZXZ0KXtcbiAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IHJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgYWxlcnQoXCJTdWVydGVcIilcbiAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBubyBzZSBwdWRvIGxlZXIgZWwgYXJjaGl2b1wiKVxuICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGltcGxlbWVudGFkb1wiKVxuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgICAgcmVjdXJzb3MuaW1hZ2VzLnB1c2godGhpcy5yZXNwb25zZVRleHQpXG4gICBcbiAgICAgIH0pO1xuICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIscmVxdWVzdFVSTClcbiAgICAgIHJlcXVlc3Quc2VuZCgpXG4gICAgfVxuXG59XG5cbiAgICBnZXRfYXVkaW9zKCk6W117XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgIC8qKlxuICAgICAgICAgKiBAZGVzY3JpcHRpb24gZXN0ZSBtZXRvZG8gc2UgZW5jYXJnYSBkZSBlbmNvbnRyYXIgbG9zIGpzb24gcmVzcGVjdGl2b3MgZGUgbGFzIG11bHRpbWVkaWFzIGVuIGVsIGVxdWlwb1xuICAgICAgICAgKiBAZGVwcmVjYXRlZCBlc3RlIG1ldG9kbyBubyBlc3RhIGltcGxlbWVudGFkbyBjb3JyZWN0YW1lbnRlICxhIGZ1dHVybyBsZWVyYSBsb3MganNvbiBhdXRvbWF0aWNhbWFuZXRlIFxuICAgICAgICAgKiBAcmV0dXJucyB0ZXh0L2pzb25cbiAgICAgICAgICovXG4gICAgZ2VuZXJhcl9yZWN1cnNvc2p1ZWdvKHBhdGg6c3RyaW5nKTphbnkgeyAgIFxuICAgICAgICAvL3RoaXMucGF0aF9yZWN1cnNvcy5wdXNoKFwiLi4vaW1hZ2Uvcm9tcGVjYWJlemFzXCIpXG4gICAgICAgIHZhciBqc29uPVwie31cIjtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCBmYWxzZSk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgIGpzb249dGhpcy5yZXNwb25zZVRleHQgO1xuXG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKHhoci5zdGF0dXNUZXh0KTtcbiAgICAgICB9XG4gICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgLS0tLVwiK3hoci5zdGF0dXNUZXh0K1wiIDogXCIreGhyLkRPTkUpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZChudWxsKTsgXG5cbiAgICAgICAgcmV0dXJuIGpzb25cblxuICB9XG5cbn0iLCJpbXBvcnQgaW50ZXJmYXpfZ3JhZmljYSBmcm9tICcuL2ludGVyZmF6X2dyYWZpY2EnO1xuaW1wb3J0IFVzdWFyaW8gZnJvbSAnLi91c3VhcmlvJztcbmltcG9ydCBSZWN1cnNvcyBmcm9tICcuL1JlY3Vyc29zJztcblxuZXhwb3J0IGRlZmF1bHQgIGFic3RyYWN0IGNsYXNzICBqdWVnb3MgIGltcGxlbWVudHMgaW50ZXJmYXpfZ3JhZmljYXtcbiAgUGludGFyX3BhbnRhbGxhKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gICAgcmVjdXJzb3M6UmVjdXJzb3NcbiAgICBzaXplOiB7fTtcbiAgICBjb25maWd1cmFjaW9uZXM6IHt9O1xuICAgIFBhbnRhbGxhOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgbm9tYnJlOnN0cmluZztcbiAgICBwcm90ZWN0ZWQgaDpudW1iZXI7XG4gICAgcHJvdGVjdGVkIG06bnVtYmVyO1xuICAgIHByb3RlY3RlZCBzOm51bWJlcjtcbiAgICBwcm90ZWN0ZWQgaW50ZXJ2YWxvITphbnk7XG4gICAgcHJvdGVjdGVkIGp1ZWdvITpUaGlzVHlwZTxqdWVnb3M+O1xuICAgIHByb3RlY3RlZCBVc3VhcmlvOlVzdWFyaW87XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlc2NyaXBjaW9uOnN0cmluZ1xuICAgIHByb3RlY3RlZCAgTml2ZWxfZGlmaWN1bHRhZCE6bnVtYmVyXG4gICAgcHJvdGVjdGVkICBUaWVtcG9kZWxqdWdhZG9yITpEYXRlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGltYWdlbmVzOkhUTUxJbWFnZUVsZW1lbnRbXVxuICBcbiAgICAgY29uc3RydWN0b3Iobm9tYnJlOnN0cmluZyxVc3VhcmlvOlVzdWFyaW8pe1xuICAgICAgIHZhciBqdWVnbz10aGlzO1xuXG4gICAgICB0aGlzLmg9MFxuICAgICAgdGhpcy5tPTBcbiAgICAgIHRoaXMucz0wXG4gICAgICAgdGhpcy5Vc3VhcmlvPVVzdWFyaW87XG4gICAgICAgdGhpcy5ub21icmU9bm9tYnJlO1xuICAgICAgIHRoaXMucmVjdXJzb3M9bmV3IFJlY3Vyc29zKClcbiAgICAgICAgdGhpcy5QYW50YWxsYT08SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgIHRoaXMuY29uZmlndXJhY2lvbmVzPXtcbiAgICAgICAgIGZhY2lsOnRydWUsXG4gICAgICAgICBtZWRpbzp0cnVlLFxuICAgICAgICAgZGlmaWNpbDp0cnVlIFxuICAgICAgfVxuICAgICAgIHRoaXMuc2l6ZT17XG4gICAgICAgICAgd2lkdGg6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IS5zdHlsZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IS5zdHlsZS5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHM6SFRNTENvbGxlY3Rpb25PZjxIVE1MQnV0dG9uRWxlbWVudD4gPSA8IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuaXZlbFwiKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAganVlZ28uc2V0RGlmaWN1bHRhZCh0aGlzKVxuICAgICAgfSAsIGZhbHNlKTtcbiAgICB9XG4gICAgc2V0RGlmaWN1bHRhZChib3RvbjpIVE1MQnV0dG9uRWxlbWVudCl7XG4gICAgICAvLyBvYnRlbmVyIGVsIGF0cmlidXRvIGRlbCBib3RvbiBuaXZlbFxuICAgICAgIHRoaXMuTml2ZWxfZGlmaWN1bHRhZD0gcGFyc2VJbnQoPHN0cmluZz5ib3Rvbi5nZXRBdHRyaWJ1dGUoXCJuaXZlbFwiKSApXG4gICAgICAgY29uc29sZS5sb2coYm90b24uZ2V0QXR0cmlidXRlKFwibml2ZWxcIikpXG4gICAgLy9vY3VsdG8gbG9zIGJvdG9uZXMgZGUgZGlmaWN1bHRhZCAgb2N1bHRhZG5kbyBlbCBkaXZcbiAgICAgICBsZXQgZGlmaWN1bHRhZF9kaXY6SFRNTEVsZW1lbnQ9PEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibml2ZWxcIilcbiAgICAgICBkaWZpY3VsdGFkX2Rpdi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgLy8vICBtdWVzdHJvcyBsYSBzZWxsZWNpb24gZGUgaW1hZ2VuZXNcbiAgICAgICBsZXQgaW1hZ2VuX2RpdjpIVE1MRWxlbWVudD08SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ3J1cGFyX2ltYWdlbmVzXCIpXG4gICAgICAgaW1hZ2VuX2Rpdi5zdHlsZS5kaXNwbGF5PVwiXCJcbiAgICAgXG4gICAgfVxuICAgIEdldE5vbWJyZSgpOnN0cmluZ3tcbiAgICAgcmV0dXJuIHRoaXMubm9tYnJlO1xuICAgIH1cbiAgICAgIGNyb25vbWV0cmFyKCl7XG4gICAgICB2YXIgaj10aGlzO1xuICAgICAgLy9sbGFtYSBhbCBtZXRvZG8gZXNjcmliaXJcbiAgICAgdGhpcy5lc2NyaWJpcihqKTtcbiAgICAgICAgLy8gZWplY3V0YSBlbCBtZXRvZG8gY2FkYSBzZWd1bmRvXG4gICAgICAgICB0aGlzLmludGVydmFsbyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgai5lc2NyaWJpcihqKTtcbiAgICAgICAgIH0sMTAwMCk7XG4gICAgICB9XG4gICAgICAgIHBhcmEoKXtcbiAgICAgICAgLy9wYXJhIGVsIGNyb25vbWVjcm9cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsbyk7ICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9ub21lY3JvXCIpIS5pbm5lckhUTUw9XCIwMDowMDowMFwiXG4gICAgICB9XG4gICAgICBcbiAgICAgIGVzY3JpYmlyKGo6anVlZ29zKXtcbiAgICAgICAgdmFyIGhBdXgsIG1BdXgsIHNBdXg7XG4gICAgICAgIGoucysrO1xuICAgICAgICBpZiAoai5zPjU5KXtqLm0rKztqLnM9MDt9XG4gICAgICAgIGlmIChqLm0+NTkpe2ouaCsrO2oubT0wO31cbiAgICAgICAgaWYgKGouaD4yNCl7ai5oPTA7fVxuICAgICAgXG4gICAgICAgIGlmIChqLnM8MTApe3NBdXg9XCIwXCIrai5zO31lbHNle3NBdXg9ai5zO31cbiAgICAgICAgaWYgKGoubTwxMCl7bUF1eD1cIjBcIitqLm07fWVsc2V7bUF1eD1qLm07fVxuICAgICAgICBpZiAoai5oPDEwKXtoQXV4PVwiMFwiK2ouaDt9ZWxzZXtoQXV4PWouaDt9XG4gICAgICAvLyBlc2NyaWJlIGVuIGVsIGh0bWxcbiAgICAgICAgbGV0IGE6SFRNTEVsZW1lbnQ9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9ub21lY3JvXCIpO1xuICAgICAgICAgYS5pbm5lckhUTUwgPSBoQXV4ICsgXCI6XCIgKyBtQXV4ICsgXCI6XCIgKyBzQXV4OyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGltZV91c3VhcmlvICgpOnN0cmluZ3tcbiAgICAgICAgdGhpcy5wYXJhKClcbiAgICAgICAgbGV0IGc9IHRoaXMuaC50b1N0cmluZygpK1wiOlwiK3RoaXMubS50b1N0cmluZygpK1wiOlwiK3RoaXMucy50b1N0cmluZygpXG4gICAgICAgIHRoaXMuaD0wO3RoaXMubT0wO3RoaXMucz0wXG4gICAgICAgIHJldHVybiBnXG4gICAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEdldGRpZmljdWx0YWQoKTpudW1iZXJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0IFNldGRpZmljdWx0YWQobnVtZXJvOm51bWJlcik7XG4gICAgcHVibGljIGFic3RyYWN0IEFzaWduYWNpb25kZWRpZmljdWx0YWQoVXN1YXJpbzpVc3VhcmlvKTp2b2lkO1xuICAgIHB1YmxpYyBwZXJtaXRpZG8oVXN1YXJpbzpVc3VhcmlvKTpib29sZWFue1xuICAgICAgICAvKipcbiAgICAgICAgIG1ldG9kbyBwYXJhIHNvYnJlc2NyaWJpclxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKkBhYnN0cmFjdCAgaW50ZXJmYXogZ3JhZmljYSBxdWUgc2UgdXNhICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpbnRlcmZhX2dyYWZpY2EoKTphbnlcbiAgICAvKiogQGFic3RyYWN0IHZhbGlkYSBsb3MgbW92aW1pZW50b3MgZGVsIHVzdWFyaW8qL1xuICAgIHB1YmxpYyBhYnN0cmFjdCAgVmFsaWRhck1vdmltaWVudG9zKEV2ZW50OkV2ZW50KTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBDYWxpZmljYXIoVXN1YXJpbzpVc3VhcmlvKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBKdWdhcigpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IEdldF9ncmFmaWNhcygpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IGVudmlhcl9kYXRvcygpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IGZpbmFsaXphcigpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0ICBwaW50YXJfcGFudGFsbGEodmFsb3I/OmFueSk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgIGdlbmVyYXJfcmVjdXJzb2p1ZWdvKCk6IHZvaWRcbiAgICBwdWJsaWMgYWJzdHJhY3QgIGNhbWJpYXJfdXJsKCk6IHZvaWRcbiAgICBwdWJsaWMgYWJzdHJhY3QgIGNhcmdhcl9yZWN1cnNvcygpOiB2b2lkIDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlX3BhbnRhbGxhKCkgOnZvaWQ7XG5cbn07XG4iLCJpbXBvcnQgcGFyYW1ldHJvcyBmcm9tIFwiLi9QYXJhbWV0cm9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzdWFyaW97XG5cbiAgICBwcml2YXRlIG5vbWJyZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGVsbGlkbzpzdHJpbmc7XG4gICAgcHJpdmF0ZSBzZXhvOnN0cmluZztcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcbiAgICBwcml2YXRlIEdyYWRvX2VzY29sYXI6c3RyaW5nO1xuICAgIHByaXZhdGUgaWQ6bnVtYmVyO1xuICAgIC8vZmFsdGEgaW1wbGVtZW50YXJcbiAgICBwcml2YXRlIHBlcm1pc29zITpwYXJhbWV0cm9zW107XG4gICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggbm9tYnJlOnN0cmluZyxhcGVsbGlkbzpzdHJpbmcsc2V4bzpzdHJpbmcscGFzc3dvcmQ6c3RyaW5nLEdyYWRvX2VzY29sYXI6c3RyaW5nLE5faWRlPzpudW1iZXIgKXtcbiAgICAgICAgICAgIHRoaXMubm9tYnJlPW5vbWJyZTtcbiAgICAgICAgICAgIHRoaXMuYXBlbGxpZG89IGFwZWxsaWRvO1xuICAgICAgICAgICAgdGhpcy5zZXhvPSBzZXhvO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZD1wYXNzd29yZDtcbiAgICAgICAgICAgIHRoaXMuR3JhZG9fZXNjb2xhcj1HcmFkb19lc2NvbGFyO1xuICAgICAgICAgICAgTl9pZGU/dGhpcy5pZD0gTl9pZGUgOnRoaXMuaWQ9MDsgXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhcl9lbl9iYXNlZGF0b3ModGhpcyk7IFxuICAgICAgICAgICAgXG5cblxuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJpZmljYXJfZW5fYmFzZWRhdG9zKHVzdWFyaW86VXN1YXJpbyl7XG4gICAgICBcbiAgICAgICAgdGhpcy5wZXJtaXNvcz1bXTtcblxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGluc2VydGFyX3V1c2FyaW8odXN1YXJpbzpVc3VhcmlvKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRub21icmVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJG5vbWJyZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5vbWJyZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRhcGVsbGlkb1xuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkYXBlbGxpZG8oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hcGVsbGlkbztcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRzZXhvXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRzZXhvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc2V4bztcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRwYXNzd29yZFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkcGFzc3dvcmQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYXNzd29yZDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRHcmFkb19lc2NvbGFyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRHcmFkb19lc2NvbGFyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuR3JhZG9fZXNjb2xhcjtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRpZFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblx0cHVibGljIGdldCAkaWQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRub21icmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkbm9tYnJlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5vbWJyZSA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJGFwZWxsaWRvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJGFwZWxsaWRvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFwZWxsaWRvID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkc2V4b1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRzZXhvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNleG8gPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRwYXNzd29yZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJEdyYWRvX2VzY29sYXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkR3JhZG9fZXNjb2xhcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5HcmFkb19lc2NvbGFyID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkaWQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuaWQgPSB2YWx1ZTtcblx0fVxuXG4gICAgXG59XG4gXG5cbiAiXSwic291cmNlUm9vdCI6IiJ9