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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/clases/matematicos.ts");
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

/***/ "./src/type/clases/matematicos.ts":
/*!****************************************!*\
  !*** ./src/type/clases/matematicos.ts ***!
  \****************************************/
/*! exports provided: matematicos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matematicos", function() { return matematicos; });
/* harmony import */ var _Patronesdeimagenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patronesdeimagenes */ "./src/type/clases/Patronesdeimagenes.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var matematicos =
/*#__PURE__*/
function (_Patronesdeimagen) {
  _inherits(matematicos, _Patronesdeimagen);

  function matematicos() {
    _classCallCheck(this, matematicos);

    return _possibleConstructorReturn(this, _getPrototypeOf(matematicos).apply(this, arguments));
  }

  _createClass(matematicos, [{
    key: "generar_recursojuego",
    value: function generar_recursojuego() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "cambiar_url",
    value: function cambiar_url() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "cargar_recursos",
    value: function cargar_recursos() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "update_pantalla",
    value: function update_pantalla() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "pintar_pantalla",
    value: function pintar_pantalla() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "finalizar",
    value: function finalizar() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "enviar_datos",
    value: function enviar_datos() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Get_graficas",
    value: function Get_graficas() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Jugar",
    value: function Jugar() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Calificar",
    value: function Calificar(Usuario) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "ValidarMovimientos",
    value: function ValidarMovimientos(Event) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Asignaciondedificultad",
    value: function Asignaciondedificultad(Usuario) {
      throw new Error("Method not implemented.");
    }
  }]);

  return matematicos;
}(_Patronesdeimagenes__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL1BhdHJvbmVzZGVpbWFnZW5lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvUmVjdXJzb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL2p1ZWdvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvbWF0ZW1hdGljb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL3VzdWFyaW8udHMiXSwibmFtZXMiOlsiUGF0cm9uZXNkZWltYWdlbiIsIlBhdHJvbiIsInJlc3B1ZXN0YSIsIk51bWVyb2RlY2FydGFzIiwianVlZ29zIiwiUmVjdXJzb3MiLCJwYXRoX3JlY3Vyc29zIiwicGF0aF9wcm9waW9zIiwiYXVkaW8iLCJpbWFnZXMiLCJyZWN1cnNvcyIsImtleSIsInJlcXVlc3RVUkwiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJzdGF0dXMiLCJhbGVydCIsIkVycm9yIiwicHVzaCIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwicGF0aCIsImpzb24iLCJ4aHIiLCJvbmxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJub21icmUiLCJVc3VhcmlvIiwianVlZ28iLCJoIiwibSIsInMiLCJQYW50YWxsYSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY29uZmlndXJhY2lvbmVzIiwiZmFjaWwiLCJtZWRpbyIsImRpZmljaWwiLCJzaXplIiwid2lkdGgiLCJzdHlsZSIsImhlaWdodCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJzZXREaWZpY3VsdGFkIiwiYm90b24iLCJOaXZlbF9kaWZpY3VsdGFkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJsb2ciLCJkaWZpY3VsdGFkX2RpdiIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheSIsImltYWdlbl9kaXYiLCJqIiwiZXNjcmliaXIiLCJpbnRlcnZhbG8iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJoQXV4IiwibUF1eCIsInNBdXgiLCJhIiwicGFyYSIsImciLCJ0b1N0cmluZyIsIm1hdGVtYXRpY29zIiwiRXZlbnQiLCJhcGVsbGlkbyIsInNleG8iLCJwYXNzd29yZCIsIkdyYWRvX2VzY29sYXIiLCJOX2lkZSIsImlkIiwidmVyaWZpY2FyX2VuX2Jhc2VkYXRvcyIsInVzdWFyaW8iLCJwZXJtaXNvcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOztJQUM4QkEsZ0I7Ozs7Ozs7Ozs7Ozs7Z0NBTVY7QUFD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Ozs7d0JBNUNpQztBQUNuQyxhQUFPLEtBQUtOLGFBQVo7QUFDQTtBQUVFOzs7OztzQkE0Q3VCTSxLLEVBQWU7QUFDeEMsV0FBS04sYUFBTCxHQUFxQk0sS0FBckI7QUFDQTtBQUVFOzs7Ozs7O3dCQTVDc0I7QUFDeEIsYUFBTyxLQUFLSixFQUFaO0FBQ0EsSztzQkE4Q2NJLEssRUFBZTtBQUM3QixXQUFLSixFQUFMLEdBQVVJLEtBQVY7QUFDQTs7O3FDQWxHaUNGLE8sRUFBZ0IsQ0FFOUMiLCJmaWxlIjoianMvbWF0ZW1hdGljb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90eXBlL2NsYXNlcy9tYXRlbWF0aWNvcy50c1wiKTtcbiIsIlxuaW1wb3J0IGp1ZWdvcyBmcm9tIFwiLi9qdWVnb3NcIjtcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhdHJvbmVzZGVpbWFnZW4gZXh0ZW5kcyBqdWVnb3N7XG4gcHJvdGVjdGVkIGFic3RyYWN0IE51bWVyb2RlY2FydGFzOm51bWJlcjtcbiBwcm90ZWN0ZWQgYWJzdHJhY3QgUGF0cm9uOmFueVxuIHByb3RlY3RlZCBhYnN0cmFjdCByZXNwdWVzdGE6bnVtYmVyW11cbiBwcm90ZWN0ZWQgYWJzdHJhY3QgbW92aW1pZW50b3M6bnVtYmVyO1xuXG4gcHVibGljICBHZXRwYXRyb24oKXtcbiAgICAgcmV0dXJuIHRoaXMuUGF0cm9uXG4gfTtcbiBwdWJsaWMgIEdldFJlc3B1ZXN0YSgpe1xuICAgIHJldHVybiB0aGlzLnJlc3B1ZXN0YVxufTtcbnB1YmxpYyAgR2V0TnVtZXJvZGVjYXJ0YXMoKXtcbiAgICByZXR1cm4gdGhpcy5OdW1lcm9kZWNhcnRhc1xufTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN1cnNvc3tcblxuICAgIHBhdGhfcmVjdXJzb3M6c3RyaW5nW11cbiAgICBwYXRoX3Byb3Bpb3M6W11cbiAgICBhdWRpbzpzdHJpbmdbXVxuICAgIGltYWdlczpzdHJpbmdbXVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wYXRoX3JlY3Vyc29zPVtdXG4gICAgICAgIHRoaXMucGF0aF9wcm9waW9zPVtdXG4gICAgICAgIHRoaXMuYXVkaW89W11cbiAgICAgICAgdGhpcy5pbWFnZXM9W11cbiAgICAgICAvLyB0aGlzLmdlbmVyYXJfcmVjdXJzb3NqdWVnbygpXG4gICAgfVxuXG4gICAgICAvKioqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBvYnRpZW5lIHRvZGFzIGxhcyBpbWFnZW5lcyBkZSB0b2RhcyBsYXMgY2FycGV0YXMgZGFkYXNcbiAgICAgICAgICovXG4gICAgZ2V0X2ltYWdlbmVzKCl7XG4gICAgIFxuICAgICAgbGV0IHJlY3Vyc29zPXRoaXNcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGF0aF9wcm9waW9zKSB7XG4gICAgICAgIGxldCByZXF1ZXN0VVJMID0ga2V5K1wiL2ltYWdlbmVzLmpzb25cIlxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyBcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgIGFsZXJ0KFwiU3VlcnRlXCIpXG4gICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igbm8gc2UgcHVkbyBsZWVyIGVsIGFyY2hpdm9cIilcbiAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBpbXBsZW1lbnRhZG9cIilcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgIHJlY3Vyc29zLmltYWdlcy5wdXNoKHRoaXMucmVzcG9uc2VUZXh0KVxuICAgXG4gICAgICB9KTtcbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLHJlcXVlc3RVUkwpXG4gICAgICByZXF1ZXN0LnNlbmQoKVxuICAgIH1cblxufVxuXG4gICAgZ2V0X2F1ZGlvcygpOltde1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG4gICAvKipcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIGVzdGUgbWV0b2RvIHNlIGVuY2FyZ2EgZGUgZW5jb250cmFyIGxvcyBqc29uIHJlc3BlY3Rpdm9zIGRlIGxhcyBtdWx0aW1lZGlhcyBlbiBlbCBlcXVpcG9cbiAgICAgICAgICogQGRlcHJlY2F0ZWQgZXN0ZSBtZXRvZG8gbm8gZXN0YSBpbXBsZW1lbnRhZG8gY29ycmVjdGFtZW50ZSAsYSBmdXR1cm8gbGVlcmEgbG9zIGpzb24gYXV0b21hdGljYW1hbmV0ZSBcbiAgICAgICAgICogQHJldHVybnMgdGV4dC9qc29uXG4gICAgICAgICAqL1xuICAgIGdlbmVyYXJfcmVjdXJzb3NqdWVnbyhwYXRoOnN0cmluZyk6YW55IHsgICBcbiAgICAgICAgLy90aGlzLnBhdGhfcmVjdXJzb3MucHVzaChcIi4uL2ltYWdlL3JvbXBlY2FiZXphc1wiKVxuICAgICAgICB2YXIganNvbj1cInt9XCI7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgZmFsc2UpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICBqc29uPXRoaXMucmVzcG9uc2VUZXh0IDtcblxuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcih4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgfVxuICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIC0tLS1cIit4aHIuc3RhdHVzVGV4dCtcIiA6IFwiK3hoci5ET05FKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQobnVsbCk7IFxuXG4gICAgICAgIHJldHVybiBqc29uXG5cbiAgfVxuXG59IiwiaW1wb3J0IGludGVyZmF6X2dyYWZpY2EgZnJvbSAnLi9pbnRlcmZhel9ncmFmaWNhJztcbmltcG9ydCBVc3VhcmlvIGZyb20gJy4vdXN1YXJpbyc7XG5pbXBvcnQgUmVjdXJzb3MgZnJvbSAnLi9SZWN1cnNvcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICBhYnN0cmFjdCBjbGFzcyAganVlZ29zICBpbXBsZW1lbnRzIGludGVyZmF6X2dyYWZpY2F7XG4gIFBpbnRhcl9wYW50YWxsYSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICAgIHJlY3Vyc29zOlJlY3Vyc29zXG4gICAgc2l6ZToge307XG4gICAgY29uZmlndXJhY2lvbmVzOiB7fTtcbiAgICBQYW50YWxsYTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIG5vbWJyZTpzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGg6bnVtYmVyO1xuICAgIHByb3RlY3RlZCBtOm51bWJlcjtcbiAgICBwcm90ZWN0ZWQgczpudW1iZXI7XG4gICAgcHJvdGVjdGVkIGludGVydmFsbyE6YW55O1xuICAgIHByb3RlY3RlZCBqdWVnbyE6VGhpc1R5cGU8anVlZ29zPjtcbiAgICBwcm90ZWN0ZWQgVXN1YXJpbzpVc3VhcmlvO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZXNjcmlwY2lvbjpzdHJpbmdcbiAgICBwcm90ZWN0ZWQgIE5pdmVsX2RpZmljdWx0YWQhOm51bWJlclxuICAgIHByb3RlY3RlZCAgVGllbXBvZGVsanVnYWRvciE6RGF0ZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBpbWFnZW5lczpIVE1MSW1hZ2VFbGVtZW50W11cbiAgXG4gICAgIGNvbnN0cnVjdG9yKG5vbWJyZTpzdHJpbmcsVXN1YXJpbzpVc3VhcmlvKXtcbiAgICAgICB2YXIganVlZ289dGhpcztcblxuICAgICAgdGhpcy5oPTBcbiAgICAgIHRoaXMubT0wXG4gICAgICB0aGlzLnM9MFxuICAgICAgIHRoaXMuVXN1YXJpbz1Vc3VhcmlvO1xuICAgICAgIHRoaXMubm9tYnJlPW5vbWJyZTtcbiAgICAgICB0aGlzLnJlY3Vyc29zPW5ldyBSZWN1cnNvcygpXG4gICAgICAgIHRoaXMuUGFudGFsbGE9PEhUTUxFbGVtZW50PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICB0aGlzLmNvbmZpZ3VyYWNpb25lcz17XG4gICAgICAgICBmYWNpbDp0cnVlLFxuICAgICAgICAgbWVkaW86dHJ1ZSxcbiAgICAgICAgIGRpZmljaWw6dHJ1ZSBcbiAgICAgIH1cbiAgICAgICB0aGlzLnNpemU9e1xuICAgICAgICAgIHdpZHRoOmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuc3R5bGUud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCEuc3R5bGUuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnRzOkhUTUxDb2xsZWN0aW9uT2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+ID0gPCBIVE1MQ29sbGVjdGlvbk9mPEhUTUxCdXR0b25FbGVtZW50Pj5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibml2ZWxcIik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIGp1ZWdvLnNldERpZmljdWx0YWQodGhpcylcbiAgICAgIH0gLCBmYWxzZSk7XG4gICAgfVxuICAgIHNldERpZmljdWx0YWQoYm90b246SFRNTEJ1dHRvbkVsZW1lbnQpe1xuICAgICAgLy8gb2J0ZW5lciBlbCBhdHJpYnV0byBkZWwgYm90b24gbml2ZWxcbiAgICAgICB0aGlzLk5pdmVsX2RpZmljdWx0YWQ9IHBhcnNlSW50KDxzdHJpbmc+Ym90b24uZ2V0QXR0cmlidXRlKFwibml2ZWxcIikgKVxuICAgICAgIGNvbnNvbGUubG9nKGJvdG9uLmdldEF0dHJpYnV0ZShcIm5pdmVsXCIpKVxuICAgIC8vb2N1bHRvIGxvcyBib3RvbmVzIGRlIGRpZmljdWx0YWQgIG9jdWx0YWRuZG8gZWwgZGl2XG4gICAgICAgbGV0IGRpZmljdWx0YWRfZGl2OkhUTUxFbGVtZW50PTxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5pdmVsXCIpXG4gICAgICAgZGlmaWN1bHRhZF9kaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxuICAgIC8vLyAgbXVlc3Ryb3MgbGEgc2VsbGVjaW9uIGRlIGltYWdlbmVzXG4gICAgICAgbGV0IGltYWdlbl9kaXY6SFRNTEVsZW1lbnQ9PEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdydXBhcl9pbWFnZW5lc1wiKVxuICAgICAgIGltYWdlbl9kaXYuc3R5bGUuZGlzcGxheT1cIlwiXG4gICAgIFxuICAgIH1cbiAgICBHZXROb21icmUoKTpzdHJpbmd7XG4gICAgIHJldHVybiB0aGlzLm5vbWJyZTtcbiAgICB9XG4gICAgICBjcm9ub21ldHJhcigpe1xuICAgICAgdmFyIGo9dGhpcztcbiAgICAgIC8vbGxhbWEgYWwgbWV0b2RvIGVzY3JpYmlyXG4gICAgIHRoaXMuZXNjcmliaXIoaik7XG4gICAgICAgIC8vIGVqZWN1dGEgZWwgbWV0b2RvIGNhZGEgc2VndW5kb1xuICAgICAgICAgdGhpcy5pbnRlcnZhbG8gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgIGouZXNjcmliaXIoaik7XG4gICAgICAgICB9LDEwMDApO1xuICAgICAgfVxuICAgICAgICBwYXJhKCl7XG4gICAgICAgIC8vcGFyYSBlbCBjcm9ub21lY3JvXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbG8pOyAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Jvbm9tZWNyb1wiKSEuaW5uZXJIVE1MPVwiMDA6MDA6MDBcIlxuICAgICAgfVxuICAgICAgXG4gICAgICBlc2NyaWJpcihqOmp1ZWdvcyl7XG4gICAgICAgIHZhciBoQXV4LCBtQXV4LCBzQXV4O1xuICAgICAgICBqLnMrKztcbiAgICAgICAgaWYgKGoucz41OSl7ai5tKys7ai5zPTA7fVxuICAgICAgICBpZiAoai5tPjU5KXtqLmgrKztqLm09MDt9XG4gICAgICAgIGlmIChqLmg+MjQpe2ouaD0wO31cbiAgICAgIFxuICAgICAgICBpZiAoai5zPDEwKXtzQXV4PVwiMFwiK2ouczt9ZWxzZXtzQXV4PWouczt9XG4gICAgICAgIGlmIChqLm08MTApe21BdXg9XCIwXCIrai5tO31lbHNle21BdXg9ai5tO31cbiAgICAgICAgaWYgKGouaDwxMCl7aEF1eD1cIjBcIitqLmg7fWVsc2V7aEF1eD1qLmg7fVxuICAgICAgLy8gZXNjcmliZSBlbiBlbCBodG1sXG4gICAgICAgIGxldCBhOkhUTUxFbGVtZW50PSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Jvbm9tZWNyb1wiKTtcbiAgICAgICAgIGEuaW5uZXJIVE1MID0gaEF1eCArIFwiOlwiICsgbUF1eCArIFwiOlwiICsgc0F1eDsgXG4gICAgICB9XG4gICAgICBcbiAgICAgIHRpbWVfdXN1YXJpbyAoKTpzdHJpbmd7XG4gICAgICAgIHRoaXMucGFyYSgpXG4gICAgICAgIGxldCBnPSB0aGlzLmgudG9TdHJpbmcoKStcIjpcIit0aGlzLm0udG9TdHJpbmcoKStcIjpcIit0aGlzLnMudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLmg9MDt0aGlzLm09MDt0aGlzLnM9MFxuICAgICAgICByZXR1cm4gZ1xuICAgICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGdldCBHZXRkaWZpY3VsdGFkKCk6bnVtYmVyXG4gICAgcHVibGljIGFic3RyYWN0IHNldCBTZXRkaWZpY3VsdGFkKG51bWVybzpudW1iZXIpO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBBc2lnbmFjaW9uZGVkaWZpY3VsdGFkKFVzdWFyaW86VXN1YXJpbyk6dm9pZDtcbiAgICBwdWJsaWMgcGVybWl0aWRvKFVzdWFyaW86VXN1YXJpbyk6Ym9vbGVhbntcbiAgICAgICAgLyoqXG4gICAgICAgICBtZXRvZG8gcGFyYSBzb2JyZXNjcmliaXJcbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipAYWJzdHJhY3QgIGludGVyZmF6IGdyYWZpY2EgcXVlIHNlIHVzYSAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgaW50ZXJmYV9ncmFmaWNhKCk6YW55XG4gICAgLyoqIEBhYnN0cmFjdCB2YWxpZGEgbG9zIG1vdmltaWVudG9zIGRlbCB1c3VhcmlvKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgIFZhbGlkYXJNb3ZpbWllbnRvcyhFdmVudDpFdmVudCk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgQ2FsaWZpY2FyKFVzdWFyaW86VXN1YXJpbyk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgSnVnYXIoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBHZXRfZ3JhZmljYXMoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBlbnZpYXJfZGF0b3MoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBmaW5hbGl6YXIoKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCAgcGludGFyX3BhbnRhbGxhKHZhbG9yPzphbnkpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0ICBnZW5lcmFyX3JlY3Vyc29qdWVnbygpOiB2b2lkXG4gICAgcHVibGljIGFic3RyYWN0ICBjYW1iaWFyX3VybCgpOiB2b2lkXG4gICAgcHVibGljIGFic3RyYWN0ICBjYXJnYXJfcmVjdXJzb3MoKTogdm9pZCA7XG4gICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZV9wYW50YWxsYSgpIDp2b2lkO1xuXG59O1xuIiwiaW1wb3J0IFBhdHJvbmVzZGVpbWFnZW4gZnJvbSAnLi9QYXRyb25lc2RlaW1hZ2VuZXMnO1xuaW1wb3J0IFVzdWFyaW8gZnJvbSAnLi91c3VhcmlvJztcblxuZXhwb3J0IGNsYXNzIG1hdGVtYXRpY29zIGV4dGVuZHMgUGF0cm9uZXNkZWltYWdlbntcbiAgcHJvdGVjdGVkIG1vdmltaWVudG9zITogbnVtYmVyO1xuICBwdWJsaWMgZ2VuZXJhcl9yZWN1cnNvanVlZ28oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgcHVibGljIGNhbWJpYXJfdXJsKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBjYXJnYXJfcmVjdXJzb3MoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgcHVibGljIHVwZGF0ZV9wYW50YWxsYSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIHB1YmxpYyBwaW50YXJfcGFudGFsbGEoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgZmluYWxpemFyKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIGVudmlhcl9kYXRvcygpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHB1YmxpYyBHZXRfZ3JhZmljYXMoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgSnVnYXIoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgQ2FsaWZpY2FyKFVzdWFyaW86IFVzdWFyaW8pIDogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgVmFsaWRhck1vdmltaWVudG9zKEV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIEFzaWduYWNpb25kZWRpZmljdWx0YWQoVXN1YXJpbzogVXN1YXJpbyk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIFBhdHJvbjtcbiAgICBwdWJsaWMgR2V0ZGlmaWN1bHRhZDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBpbnRlcmZhX2dyYWZpY2E6IGFueTtcbiAgICBwcm90ZWN0ZWQgaW1hZ2VuZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgVGllbXBvZGVsanVnYWRvcjogRGF0ZTtcbiAgICBwcm90ZWN0ZWQgTml2ZWxfZGlmaWN1bHRhZDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBkZXNjcmlwY2lvbjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZXNwdWVzdGE7XG5cbiAgICBwcm90ZWN0ZWQgTnVtZXJvZGVjYXJ0YXM6IG51bWJlcjtcbiAgICBwdWJsaWMgU2V0ZGlmaWN1bHRhZDogbnVtYmVyO1xuXG5cblxufVxuIiwiaW1wb3J0IHBhcmFtZXRyb3MgZnJvbSBcIi4vUGFyYW1ldHJvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc3Vhcmlve1xuXG4gICAgcHJpdmF0ZSBub21icmU6c3RyaW5nO1xuICAgIHByaXZhdGUgYXBlbGxpZG86c3RyaW5nO1xuICAgIHByaXZhdGUgc2V4bzpzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XG4gICAgcHJpdmF0ZSBHcmFkb19lc2NvbGFyOnN0cmluZztcbiAgICBwcml2YXRlIGlkOm51bWJlcjtcbiAgICAvL2ZhbHRhIGltcGxlbWVudGFyXG4gICAgcHJpdmF0ZSBwZXJtaXNvcyE6cGFyYW1ldHJvc1tdO1xuICAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5vbWJyZTpzdHJpbmcsYXBlbGxpZG86c3RyaW5nLHNleG86c3RyaW5nLHBhc3N3b3JkOnN0cmluZyxHcmFkb19lc2NvbGFyOnN0cmluZyxOX2lkZT86bnVtYmVyICl7XG4gICAgICAgICAgICB0aGlzLm5vbWJyZT1ub21icmU7XG4gICAgICAgICAgICB0aGlzLmFwZWxsaWRvPSBhcGVsbGlkbztcbiAgICAgICAgICAgIHRoaXMuc2V4bz0gc2V4bztcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQ9cGFzc3dvcmQ7XG4gICAgICAgICAgICB0aGlzLkdyYWRvX2VzY29sYXI9R3JhZG9fZXNjb2xhcjtcbiAgICAgICAgICAgIE5faWRlP3RoaXMuaWQ9IE5faWRlIDp0aGlzLmlkPTA7IFxuICAgICAgICAgICAgdGhpcy52ZXJpZmljYXJfZW5fYmFzZWRhdG9zKHRoaXMpOyBcbiAgICAgICAgICAgIFxuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyaWZpY2FyX2VuX2Jhc2VkYXRvcyh1c3VhcmlvOlVzdWFyaW8pe1xuICAgICAgXG4gICAgICAgIHRoaXMucGVybWlzb3M9W107XG5cbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBpbnNlcnRhcl91dXNhcmlvKHVzdWFyaW86VXN1YXJpbyl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkbm9tYnJlXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRub21icmUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5ub21icmU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkYXBlbGxpZG9cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJGFwZWxsaWRvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuYXBlbGxpZG87XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkc2V4b1xuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkc2V4bygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnNleG87XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkcGFzc3dvcmRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJHBhc3N3b3JkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGFzc3dvcmQ7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkR3JhZG9fZXNjb2xhclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkR3JhZG9fZXNjb2xhcigpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLkdyYWRvX2VzY29sYXI7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIEdldHRlciAkaWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJGlkKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuaWQ7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkbm9tYnJlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJG5vbWJyZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5ub21icmUgPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRhcGVsbGlkb1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRhcGVsbGlkbyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5hcGVsbGlkbyA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJHNleG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkc2V4byh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZXhvID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkcGFzc3dvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkcGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMucGFzc3dvcmQgPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRHcmFkb19lc2NvbGFyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJEdyYWRvX2VzY29sYXIodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMuR3JhZG9fZXNjb2xhciA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJGlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJGlkKHZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLmlkID0gdmFsdWU7XG5cdH1cblxuICAgIFxufVxuIFxuXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==