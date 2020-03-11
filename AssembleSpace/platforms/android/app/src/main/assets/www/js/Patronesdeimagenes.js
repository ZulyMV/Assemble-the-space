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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/clases/Patronesdeimagenes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/type/clases/Patronesdeimagenes.ts":
/*!***********************************************!*\
  !*** ./src/type/clases/Patronesdeimagenes.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Patronesdeimagen; });
/* harmony import */ var _juegos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./juegos */ "./src/type/clases/juegos.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Patronesdeimagen =
/*#__PURE__*/
function (_juegos) {
  _inherits(Patronesdeimagen, _juegos);

  function Patronesdeimagen() {
    _classCallCheck(this, Patronesdeimagen);

    return _possibleConstructorReturn(this, _getPrototypeOf(Patronesdeimagen).apply(this, arguments));
  }

  _createClass(Patronesdeimagen, [{
    key: "Getpatron",
    value: function Getpatron() {
      return this.Patron;
    }
  }, {
    key: "GetRespuesta",
    value: function GetRespuesta() {
      return this.respuesta;
    }
  }, {
    key: "GetNumerodecartas",
    value: function GetNumerodecartas() {
      return this.Numerodecartas;
    }
  }]);

  return Patronesdeimagen;
}(_juegos__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL1BhdHJvbmVzZGVpbWFnZW5lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvUmVjdXJzb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL2p1ZWdvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvdXN1YXJpby50cyJdLCJuYW1lcyI6WyJQYXRyb25lc2RlaW1hZ2VuIiwiUGF0cm9uIiwicmVzcHVlc3RhIiwiTnVtZXJvZGVjYXJ0YXMiLCJqdWVnb3MiLCJSZWN1cnNvcyIsInBhdGhfcmVjdXJzb3MiLCJwYXRoX3Byb3Bpb3MiLCJhdWRpbyIsImltYWdlcyIsInJlY3Vyc29zIiwia2V5IiwicmVxdWVzdFVSTCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsImFsZXJ0IiwiRXJyb3IiLCJwdXNoIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJwYXRoIiwianNvbiIsInhociIsIm9ubG9hZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsIm5vbWJyZSIsIlVzdWFyaW8iLCJqdWVnbyIsImgiLCJtIiwicyIsIlBhbnRhbGxhIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25maWd1cmFjaW9uZXMiLCJmYWNpbCIsIm1lZGlvIiwiZGlmaWNpbCIsInNpemUiLCJ3aWR0aCIsInN0eWxlIiwiaGVpZ2h0IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsInNldERpZmljdWx0YWQiLCJib3RvbiIsIk5pdmVsX2RpZmljdWx0YWQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImxvZyIsImRpZmljdWx0YWRfZGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwbGF5IiwiaW1hZ2VuX2RpdiIsImoiLCJlc2NyaWJpciIsImludGVydmFsbyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImlubmVySFRNTCIsImhBdXgiLCJtQXV4Iiwic0F1eCIsImEiLCJwYXJhIiwiZyIsInRvU3RyaW5nIiwiYXBlbGxpZG8iLCJzZXhvIiwicGFzc3dvcmQiLCJHcmFkb19lc2NvbGFyIiwiTl9pZGUiLCJpZCIsInZlcmlmaWNhcl9lbl9iYXNlZGF0b3MiLCJ1c3VhcmlvIiwicGVybWlzb3MiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTs7SUFDOEJBLGdCOzs7Ozs7Ozs7Ozs7O2dDQU1WO0FBQ2YsYUFBTyxLQUFLQyxNQUFaO0FBQ0g7OzttQ0FDcUI7QUFDbkIsYUFBTyxLQUFLQyxTQUFaO0FBQ0g7Ozt3Q0FDMEI7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WjtBQUNBLEs7c0JBOENjSSxLLEVBQWU7QUFDN0IsV0FBS0osRUFBTCxHQUFVSSxLQUFWO0FBQ0E7OztxQ0FsR2lDRixPLEVBQWdCLENBRTlDIiwiZmlsZSI6ImpzL1BhdHJvbmVzZGVpbWFnZW5lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R5cGUvY2xhc2VzL1BhdHJvbmVzZGVpbWFnZW5lcy50c1wiKTtcbiIsIlxuaW1wb3J0IGp1ZWdvcyBmcm9tIFwiLi9qdWVnb3NcIjtcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhdHJvbmVzZGVpbWFnZW4gZXh0ZW5kcyBqdWVnb3N7XG4gcHJvdGVjdGVkIGFic3RyYWN0IE51bWVyb2RlY2FydGFzOm51bWJlcjtcbiBwcm90ZWN0ZWQgYWJzdHJhY3QgUGF0cm9uOmFueVxuIHByb3RlY3RlZCBhYnN0cmFjdCByZXNwdWVzdGE6bnVtYmVyW11cbiBwcm90ZWN0ZWQgYWJzdHJhY3QgbW92aW1pZW50b3M6bnVtYmVyO1xuXG4gcHVibGljICBHZXRwYXRyb24oKXtcbiAgICAgcmV0dXJuIHRoaXMuUGF0cm9uXG4gfTtcbiBwdWJsaWMgIEdldFJlc3B1ZXN0YSgpe1xuICAgIHJldHVybiB0aGlzLnJlc3B1ZXN0YVxufTtcbnB1YmxpYyAgR2V0TnVtZXJvZGVjYXJ0YXMoKXtcbiAgICByZXR1cm4gdGhpcy5OdW1lcm9kZWNhcnRhc1xufTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN1cnNvc3tcblxuICAgIHBhdGhfcmVjdXJzb3M6c3RyaW5nW11cbiAgICBwYXRoX3Byb3Bpb3M6W11cbiAgICBhdWRpbzpzdHJpbmdbXVxuICAgIGltYWdlczpzdHJpbmdbXVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wYXRoX3JlY3Vyc29zPVtdXG4gICAgICAgIHRoaXMucGF0aF9wcm9waW9zPVtdXG4gICAgICAgIHRoaXMuYXVkaW89W11cbiAgICAgICAgdGhpcy5pbWFnZXM9W11cbiAgICAgICAvLyB0aGlzLmdlbmVyYXJfcmVjdXJzb3NqdWVnbygpXG4gICAgfVxuXG4gICAgICAvKioqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBvYnRpZW5lIHRvZGFzIGxhcyBpbWFnZW5lcyBkZSB0b2RhcyBsYXMgY2FycGV0YXMgZGFkYXNcbiAgICAgICAgICovXG4gICAgZ2V0X2ltYWdlbmVzKCl7XG4gICAgIFxuICAgICAgbGV0IHJlY3Vyc29zPXRoaXNcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGF0aF9wcm9waW9zKSB7XG4gICAgICAgIGxldCByZXF1ZXN0VVJMID0ga2V5K1wiL2ltYWdlbmVzLmpzb25cIlxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyBcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgIGFsZXJ0KFwiU3VlcnRlXCIpXG4gICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igbm8gc2UgcHVkbyBsZWVyIGVsIGFyY2hpdm9cIilcbiAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBpbXBsZW1lbnRhZG9cIilcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgIHJlY3Vyc29zLmltYWdlcy5wdXNoKHRoaXMucmVzcG9uc2VUZXh0KVxuICAgXG4gICAgICB9KTtcbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLHJlcXVlc3RVUkwpXG4gICAgICByZXF1ZXN0LnNlbmQoKVxuICAgIH1cblxufVxuXG4gICAgZ2V0X2F1ZGlvcygpOltde1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG4gICAvKipcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIGVzdGUgbWV0b2RvIHNlIGVuY2FyZ2EgZGUgZW5jb250cmFyIGxvcyBqc29uIHJlc3BlY3Rpdm9zIGRlIGxhcyBtdWx0aW1lZGlhcyBlbiBlbCBlcXVpcG9cbiAgICAgICAgICogQGRlcHJlY2F0ZWQgZXN0ZSBtZXRvZG8gbm8gZXN0YSBpbXBsZW1lbnRhZG8gY29ycmVjdGFtZW50ZSAsYSBmdXR1cm8gbGVlcmEgbG9zIGpzb24gYXV0b21hdGljYW1hbmV0ZSBcbiAgICAgICAgICogQHJldHVybnMgdGV4dC9qc29uXG4gICAgICAgICAqL1xuICAgIGdlbmVyYXJfcmVjdXJzb3NqdWVnbyhwYXRoOnN0cmluZyk6YW55IHsgICBcbiAgICAgICAgLy90aGlzLnBhdGhfcmVjdXJzb3MucHVzaChcIi4uL2ltYWdlL3JvbXBlY2FiZXphc1wiKVxuICAgICAgICB2YXIganNvbj1cInt9XCI7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgZmFsc2UpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICBqc29uPXRoaXMucmVzcG9uc2VUZXh0IDtcblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcih4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgfVxuICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIC0tLS1cIit4aHIuc3RhdHVzVGV4dCtcIiA6IFwiK3hoci5ET05FKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7IFxuXG4gICAgICAgIHJldHVybiBqc29uXG5cbiAgfVxuXG59IiwiaW1wb3J0IGludGVyZmF6X2dyYWZpY2EgZnJvbSAnLi9pbnRlcmZhel9ncmFmaWNhJztcbmltcG9ydCBVc3VhcmlvIGZyb20gJy4vdXN1YXJpbyc7XG5pbXBvcnQgUmVjdXJzb3MgZnJvbSAnLi9SZWN1cnNvcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICBhYnN0cmFjdCBjbGFzcyAganVlZ29zICBpbXBsZW1lbnRzIGludGVyZmF6X2dyYWZpY2F7XG4gIFBpbnRhcl9wYW50YWxsYSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICAgIHJlY3Vyc29zOlJlY3Vyc29zXG4gICAgc2l6ZToge307XG4gICAgY29uZmlndXJhY2lvbmVzOiB7fTtcbiAgICBQYW50YWxsYTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIG5vbWJyZTpzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGg6bnVtYmVyO1xuICAgIHByb3RlY3RlZCBtOm51bWJlcjtcbiAgICBwcm90ZWN0ZWQgczpudW1iZXI7XG4gICAgcHJvdGVjdGVkIGludGVydmFsbyE6YW55O1xuICAgIHByb3RlY3RlZCBqdWVnbyE6VGhpc1R5cGU8anVlZ29zPjtcbiAgICBwcm90ZWN0ZWQgVXN1YXJpbzpVc3VhcmlvO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZXNjcmlwY2lvbjpzdHJpbmdcbiAgICBwcm90ZWN0ZWQgIE5pdmVsX2RpZmljdWx0YWQhOm51bWJlclxuICAgIHByb3RlY3RlZCAgVGllbXBvZGVsanVnYWRvciE6RGF0ZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBpbWFnZW5lczpIVE1MSW1hZ2VFbGVtZW50W11cbiAgXG4gICAgIGNvbnN0cnVjdG9yKG5vbWJyZTpzdHJpbmcsVXN1YXJpbzpVc3VhcmlvKXtcbiAgICAgICB2YXIganVlZ289dGhpcztcblxuICAgICAgdGhpcy5oPTBcbiAgICAgIHRoaXMubT0wXG4gICAgICB0aGlzLnM9MFxuICAgICAgIHRoaXMuVXN1YXJpbz1Vc3VhcmlvO1xuICAgICAgIHRoaXMubm9tYnJlPW5vbWJyZTtcbiAgICAgICB0aGlzLnJlY3Vyc29zPW5ldyBSZWN1cnNvcygpXG4gICAgICAgIHRoaXMuUGFudGFsbGE9PEhUTUxFbGVtZW50PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICB0aGlzLmNvbmZpZ3VyYWNpb25lcz17XG4gICAgICAgICBmYWNpbDp0cnVlLFxuICAgICAgICAgbWVkaW86dHJ1ZSxcbiAgICAgICAgIGRpZmljaWw6dHJ1ZSBcbiAgICAgIH1cbiAgICAgICB0aGlzLnNpemU9e1xuICAgICAgICAgIHdpZHRoOmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuc3R5bGUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuc3R5bGUuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnRzOkhUTUxDb2xsZWN0aW9uT2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+ID0gPCBIVE1MQ29sbGVjdGlvbk9mPEhUTUxCdXR0b25FbGVtZW50Pj5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibml2ZWxcIik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGp1ZWdvLnNldERpZmljdWx0YWQodGhpcylcbiAgICAgIH0gLCBmYWxzZSk7XG4gICAgfVxuICAgIHNldERpZmljdWx0YWQoYm90b246SFRNTEJ1dHRvbkVsZW1lbnQpe1xuICAgICAgLy8gb2J0ZW5lciBlbCBhdHJpYnV0byBkZWwgYm90b24gbml2ZWxcbiAgICAgICB0aGlzLk5pdmVsX2RpZmljdWx0YWQ9IHBhcnNlSW50KDxzdHJpbmc+Ym90b24uZ2V0QXR0cmlidXRlKFwibml2ZWxcIikgKVxuICAgICAgIGNvbnNvbGUubG9nKGJvdG9uLmdldEF0dHJpYnV0ZShcIm5pdmVsXCIpKVxuICAgIC8vb2N1bHRvIGxvcyBib3RvbmVzIGRlIGRpZmljdWx0YWQgIG9jdWx0YWRuZG8gZWwgZGl2XG4gICAgICAgbGV0IGRpZmljdWx0YWRfZGl2OkhUTUxFbGVtZW50PTxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pdmVsXCIpXG4gICAgICAgZGlmaWN1bHRhZF9kaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuICAgIC8vLyAgbXVlc3Ryb3MgbGEgc2VsbGVjaW9uIGRlIGltYWdlbmVzXG4gICAgICAgbGV0IGltYWdlbl9kaXY6SFRNTEVsZW1lbnQ9PEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdydXBhcl9pbWFnZW5lc1wiKVxuICAgICAgIGltYWdlbl9kaXYuc3R5bGUuZGlzcGxheT1cIlwiXG4gICAgIFxuICAgIH1cbiAgICBHZXROb21icmUoKTpzdHJpbmd7XG4gICAgIHJldHVybiB0aGlzLm5vbWJyZTtcbiAgICB9XG4gICAgICBjcm9ub21ldHJhcigpe1xuICAgICAgdmFyIGo9dGhpcztcbiAgICAgIC8vbGxhbWEgYWwgbWV0b2RvIGVzY3JpYmlyXG4gICAgIHRoaXMuZXNjcmliaXIoaik7XG4gICAgICAgIC8vIGVqZWN1dGEgZWwgbWV0b2RvIGNhZGEgc2VndW5kb1xuICAgICAgICAgdGhpcy5pbnRlcnZhbG8gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgIGouZXNjcmliaXIoaik7XG4gICAgICAgICB9LDEwMDApO1xuICAgICAgfVxuICAgICAgICBwYXJhKCl7XG4gICAgICAgIC8vcGFyYSBlbCBjcm9ub21lY3JvXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbG8pOyAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Jvbm9tZWNyb1wiKSEuaW5uZXJIVE1MPVwiMDA6MDA6MDBcIlxuICAgICAgfVxuICAgICAgXG4gICAgICBlc2NyaWJpcihqOmp1ZWdvcyl7XG4gICAgICAgIHZhciBoQXV4LCBtQXV4LCBzQXV4O1xuICAgICAgICBqLnMrKztcbiAgICAgICAgaWYgKGoucz41OSl7ai5tKys7ai5zPTA7fVxuICAgICAgICBpZiAoai5tPjU5KXtqLmgrKztqLm09MDt9XG4gICAgICAgIGlmIChqLmg+MjQpe2ouaD0wO31cbiAgICAgIFxuICAgICAgICBpZiAoai5zPDEwKXtzQXV4PVwiMFwiK2ouczt9ZWxzZXtzQXV4PWouczt9XG4gICAgICAgIGlmIChqLm08MTApe21BdXg9XCIwXCIrai5tO31lbHNle21BdXg9ai5tO31cbiAgICAgICAgaWYgKGouaDwxMCl7aEF1eD1cIjBcIitqLmg7fWVsc2V7aEF1eD1qLmg7fVxuICAgICAgLy8gZXNjcmliZSBlbiBlbCBodG1sXG4gICAgICAgIGxldCBhOkhUTUxFbGVtZW50PSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Jvbm9tZWNyb1wiKTtcbiAgICAgICAgIGEuaW5uZXJIVE1MID0gaEF1eCArIFwiOlwiICsgbUF1eCArIFwiOlwiICsgc0F1eDsgXG4gICAgICB9XG4gICAgICBcbiAgICAgIHRpbWVfdXN1YXJpbyAoKTpzdHJpbmd7XG4gICAgICAgIHRoaXMucGFyYSgpXG4gICAgICAgIGxldCBnPSB0aGlzLmgudG9TdHJpbmcoKStcIjpcIit0aGlzLm0udG9TdHJpbmcoKStcIjpcIit0aGlzLnMudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLmg9MDt0aGlzLm09MDt0aGlzLnM9MFxuICAgICAgICByZXR1cm4gZ1xuICAgICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGdldCBHZXRkaWZpY3VsdGFkKCk6bnVtYmVyXG4gICAgcHVibGljIGFic3RyYWN0IHNldCBTZXRkaWZpY3VsdGFkKG51bWVybzpudW1iZXIpO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBBc2lnbmFjaW9uZGVkaWZpY3VsdGFkKFVzdWFyaW86VXN1YXJpbyk6dm9pZDtcbiAgICBwdWJsaWMgcGVybWl0aWRvKFVzdWFyaW86VXN1YXJpbyk6Ym9vbGVhbntcbiAgICAgICAgLyoqXG4gICAgICAgICBtZXRvZG8gcGFyYSBzb2JyZXNjcmliaXJcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipAYWJzdHJhY3QgIGludGVyZmF6IGdyYWZpY2EgcXVlIHNlIHVzYSAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW50ZXJmYV9ncmFmaWNhKCk6YW55XG4gICAgLyoqIEBhYnN0cmFjdCB2YWxpZGEgbG9zIG1vdmltaWVudG9zIGRlbCB1c3VhcmlvKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgIFZhbGlkYXJNb3ZpbWllbnRvcyhFdmVudDpFdmVudCk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgQ2FsaWZpY2FyKFVzdWFyaW86VXN1YXJpbyk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgSnVnYXIoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRfZ3JhZmljYXMoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBlbnZpYXJfZGF0b3MoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBmaW5hbGl6YXIoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCAgcGludGFyX3BhbnRhbGxhKHZhbG9yPzphbnkpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0ICBnZW5lcmFyX3JlY3Vyc29qdWVnbygpOiB2b2lkXG4gICAgcHVibGljIGFic3RyYWN0ICBjYW1iaWFyX3VybCgpOiB2b2lkXG4gICAgcHVibGljIGFic3RyYWN0ICBjYXJnYXJfcmVjdXJzb3MoKTogdm9pZCA7XG4gICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZV9wYW50YWxsYSgpIDp2b2lkO1xuXG59O1xuIiwiaW1wb3J0IHBhcmFtZXRyb3MgZnJvbSBcIi4vUGFyYW1ldHJvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc3Vhcmlve1xuXG4gICAgcHJpdmF0ZSBub21icmU6c3RyaW5nO1xuICAgIHByaXZhdGUgYXBlbGxpZG86c3RyaW5nO1xuICAgIHByaXZhdGUgc2V4bzpzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBHcmFkb19lc2NvbGFyOnN0cmluZztcbiAgICBwcml2YXRlIGlkOm51bWJlcjtcbiAgICAvL2ZhbHRhIGltcGxlbWVudGFyXG4gICAgcHJpdmF0ZSBwZXJtaXNvcyE6cGFyYW1ldHJvc1tdO1xuICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5vbWJyZTpzdHJpbmcsYXBlbGxpZG86c3RyaW5nLHNleG86c3RyaW5nLHBhc3N3b3JkOnN0cmluZyxHcmFkb19lc2NvbGFyOnN0cmluZyxOX2lkZT86bnVtYmVyICl7XG4gICAgICAgICAgICB0aGlzLm5vbWJyZT1ub21icmU7XG4gICAgICAgICAgICB0aGlzLmFwZWxsaWRvPSBhcGVsbGlkbztcbiAgICAgICAgICAgIHRoaXMuc2V4bz0gc2V4bztcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQ9cGFzc3dvcmQ7XG4gICAgICAgICAgICB0aGlzLkdyYWRvX2VzY29sYXI9R3JhZG9fZXNjb2xhcjtcbiAgICAgICAgICAgIE5faWRlP3RoaXMuaWQ9IE5faWRlIDp0aGlzLmlkPTA7IFxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXJfZW5fYmFzZWRhdG9zKHRoaXMpOyBcbiAgICAgICAgICAgIFxuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyaWZpY2FyX2VuX2Jhc2VkYXRvcyh1c3VhcmlvOlVzdWFyaW8pe1xuICAgICAgXG4gICAgICAgIHRoaXMucGVybWlzb3M9W107XG5cbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBpbnNlcnRhcl91dXNhcmlvKHVzdWFyaW86VXN1YXJpbyl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkbm9tYnJlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRub21icmUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5ub21icmU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkYXBlbGxpZG9cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJGFwZWxsaWRvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuYXBlbGxpZG87XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkc2V4b1xuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkc2V4bygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNleG87XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkcGFzc3dvcmRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJHBhc3N3b3JkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFzc3dvcmQ7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkR3JhZG9fZXNjb2xhclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkR3JhZG9fZXNjb2xhcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLkdyYWRvX2VzY29sYXI7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkaWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJGlkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkbm9tYnJlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJG5vbWJyZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5ub21icmUgPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRhcGVsbGlkb1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRhcGVsbGlkbyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5hcGVsbGlkbyA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJHNleG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkc2V4byh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZXhvID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkcGFzc3dvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkcGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMucGFzc3dvcmQgPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRHcmFkb19lc2NvbGFyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJEdyYWRvX2VzY29sYXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMuR3JhZG9fZXNjb2xhciA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJGlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJGlkKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLmlkID0gdmFsdWU7XG5cdH1cblxuICAgIFxufVxuIFxuXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==