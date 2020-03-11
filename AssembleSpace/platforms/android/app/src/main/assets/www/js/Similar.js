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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/type/clases/Similar.ts");
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

/***/ "./src/type/clases/Similar.ts":
/*!************************************!*\
  !*** ./src/type/clases/Similar.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Similar; });
/* harmony import */ var _Patronesdeimagenes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patronesdeimagenes */ "./src/type/clases/Patronesdeimagenes.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Similar =
/*#__PURE__*/
function (_Patronesdeimagen) {
  _inherits(Similar, _Patronesdeimagen);

  _createClass(Similar, [{
    key: "Asignaciondedificultad",
    value: function Asignaciondedificultad(Usuario) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "interfa_grafica",
    value: function interfa_grafica() {
      var similar = this;
      var divs = document.getElementsByClassName("juego");

      for (var x = 0; x < divs.length; x++) {
        divs[x].addEventListener("click", function () {});
      }
    }
  }, {
    key: "cargar_recursos",
    value: function cargar_recursos() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Calificar",
    value: function Calificar(Usuario) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Jugar",
    value: function Jugar() {}
  }, {
    key: "Get_graficas",
    value: function Get_graficas() {
      var j = JSON.parse(this.recursos.generar_recursosjuego("../image/ronpecabeza1/imagenes.json"));
      var array_max = 0;
      var array_memoria = [];

      if (this.Nivel_dificultad === 4) {
        array_max = 4;
      }

      if (this.Nivel_dificultad == 5) {
        array_max = 6;
      }

      if (this.Nivel_dificultad == 6) {
        array_max = 8;
      }

      if (Object.keys(j).length >= array_max) {
        for (var x in j) {
          array_memoria.push("../image/ronpecabeza1/" + j[x].Nombre);
          array_memoria.push("../image/ronpecabeza1/" + j[x].Nombre);
        }

        var valor_memoria = [];
        var memoria_carta_ids = [];
        var girada_carta = 0;
        this.girada_carta = 0;
        var output = '';
        var array_nuevo = array_memoria.map(function (x, i) {
          return [x, i, Math.random()];
        }).sort(function ordenar(a, b) {
          // compara  2  posiciones del array  recursivamente  si es positivo le da 1 ,se organiza el array segu los numeros generados aleatoriamente
          return a[2] - b[2];
        });
        var parent = document.createElement("div");
        parent.id = "juego";
        parent.className = "container-fluid";
        var row = document.createElement("div");
        row.className = "row";

        for (var i = 0; i < array_nuevo.length; i++) {
          var col = document.createElement("div");
          col.id = "carta" + i;
          col.className = "col juego";
          row.appendChild(col);

          if (array_nuevo.length / 2 == i + 1) {
            parent.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
          } //  output += '<div id="carta_'+i+'" onclick="girarCartaMemoria(this,\''+array_memoria[i]+'\')"></div>';

        }

        document.getElementById('contenido').appendChild(parent);
        document.getElementById('contenido').style.display = "";
        this.interfa_grafica();
      } else {
        alert("No existen suficientes imagenes");
      }
    }
  }, {
    key: "enviar_datos",
    value: function enviar_datos() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "finalizar",
    value: function finalizar() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "pintar_pantalla",
    value: function pintar_pantalla(valor) {
      throw new Error("Method not implemented.");
    }
  }, {
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
    key: "update_pantalla",
    value: function update_pantalla() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "ValidarMovimientos",
    value: function ValidarMovimientos(Event) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Getdificultad",
    get: function get() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "Setdificultad",
    set: function set(numero) {
      throw new Error("Method not implemented.");
    }
  }]);

  function Similar(usuario) {
    var _this;

    _classCallCheck(this, Similar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Similar).call(this, "similar", usuario));
    _this.movimientos = 0;
    _this.imagenes = [];
    _this.descripcion = "";
    return _this;
  }

  _createClass(Similar, [{
    key: "setDificultad",
    value: function setDificultad(boton) {
      _get(_getPrototypeOf(Similar.prototype), "setDificultad", this).call(this, boton);

      this.Get_graficas();
    }
  }]);

  return Similar;
}(_Patronesdeimagenes__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL1BhdHJvbmVzZGVpbWFnZW5lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvUmVjdXJzb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL1NpbWlsYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R5cGUvY2xhc2VzL2p1ZWdvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZS9jbGFzZXMvdXN1YXJpby50cyJdLCJuYW1lcyI6WyJQYXRyb25lc2RlaW1hZ2VuIiwiUGF0cm9uIiwicmVzcHVlc3RhIiwiTnVtZXJvZGVjYXJ0YXMiLCJqdWVnb3MiLCJSZWN1cnNvcyIsInBhdGhfcmVjdXJzb3MiLCJwYXRoX3Byb3Bpb3MiLCJhdWRpbyIsImltYWdlcyIsInJlY3Vyc29zIiwia2V5IiwicmVxdWVzdFVSTCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInN0YXR1cyIsImFsZXJ0IiwiRXJyb3IiLCJwdXNoIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJwYXRoIiwianNvbiIsInhociIsIm9ubG9hZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsIlNpbWlsYXIiLCJVc3VhcmlvIiwic2ltaWxhciIsImRpdnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ4IiwibGVuZ3RoIiwiaiIsIkpTT04iLCJwYXJzZSIsImdlbmVyYXJfcmVjdXJzb3NqdWVnbyIsImFycmF5X21heCIsImFycmF5X21lbW9yaWEiLCJOaXZlbF9kaWZpY3VsdGFkIiwiT2JqZWN0Iiwia2V5cyIsIk5vbWJyZSIsInZhbG9yX21lbW9yaWEiLCJtZW1vcmlhX2NhcnRhX2lkcyIsImdpcmFkYV9jYXJ0YSIsIm91dHB1dCIsImFycmF5X251ZXZvIiwibWFwIiwiaSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0Iiwib3JkZW5hciIsImEiLCJiIiwicGFyZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiY2xhc3NOYW1lIiwicm93IiwiY29sIiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImludGVyZmFfZ3JhZmljYSIsInZhbG9yIiwiRXZlbnQiLCJudW1lcm8iLCJ1c3VhcmlvIiwibW92aW1pZW50b3MiLCJpbWFnZW5lcyIsImRlc2NyaXBjaW9uIiwiYm90b24iLCJHZXRfZ3JhZmljYXMiLCJub21icmUiLCJqdWVnbyIsImgiLCJtIiwicyIsIlBhbnRhbGxhIiwiZG9jdW1lbnRFbGVtZW50IiwiY29uZmlndXJhY2lvbmVzIiwiZmFjaWwiLCJtZWRpbyIsImRpZmljaWwiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50cyIsInNldERpZmljdWx0YWQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImxvZyIsImRpZmljdWx0YWRfZGl2IiwiaW1hZ2VuX2RpdiIsImVzY3JpYmlyIiwiaW50ZXJ2YWxvIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaW5uZXJIVE1MIiwiaEF1eCIsIm1BdXgiLCJzQXV4IiwicGFyYSIsImciLCJ0b1N0cmluZyIsImFwZWxsaWRvIiwic2V4byIsInBhc3N3b3JkIiwiR3JhZG9fZXNjb2xhciIsIk5faWRlIiwidmVyaWZpY2FyX2VuX2Jhc2VkYXRvcyIsInBlcm1pc29zIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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c0JBNEN1QkksSyxFQUFlO0FBQ3hDLFdBQUtKLGFBQUwsR0FBcUJJLEtBQXJCO0FBQ0E7QUFFRTs7Ozs7Ozt3QkE1Q3NCO0FBQ3hCLGFBQU8sS0FBS3pELEVBQVo7QUFDQSxLO3NCQThDY3lELEssRUFBZTtBQUM3QixXQUFLekQsRUFBTCxHQUFVeUQsS0FBVjtBQUNBOzs7cUNBbEdpQzdDLE8sRUFBZ0IsQ0FFOUMiLCJmaWxlIjoianMvU2ltaWxhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R5cGUvY2xhc2VzL1NpbWlsYXIudHNcIik7XG4iLCJcbmltcG9ydCBqdWVnb3MgZnJvbSBcIi4vanVlZ29zXCI7XG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQYXRyb25lc2RlaW1hZ2VuIGV4dGVuZHMganVlZ29ze1xuIHByb3RlY3RlZCBhYnN0cmFjdCBOdW1lcm9kZWNhcnRhczpudW1iZXI7XG4gcHJvdGVjdGVkIGFic3RyYWN0IFBhdHJvbjphbnlcbiBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVzcHVlc3RhOm51bWJlcltdXG4gcHJvdGVjdGVkIGFic3RyYWN0IG1vdmltaWVudG9zOm51bWJlcjtcblxuIHB1YmxpYyAgR2V0cGF0cm9uKCl7XG4gICAgIHJldHVybiB0aGlzLlBhdHJvblxuIH07XG4gcHVibGljICBHZXRSZXNwdWVzdGEoKXtcbiAgICByZXR1cm4gdGhpcy5yZXNwdWVzdGFcbn07XG5wdWJsaWMgIEdldE51bWVyb2RlY2FydGFzKCl7XG4gICAgcmV0dXJuIHRoaXMuTnVtZXJvZGVjYXJ0YXNcbn07XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzb3N7XG5cbiAgICBwYXRoX3JlY3Vyc29zOnN0cmluZ1tdXG4gICAgcGF0aF9wcm9waW9zOltdXG4gICAgYXVkaW86c3RyaW5nW11cbiAgICBpbWFnZXM6c3RyaW5nW11cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGF0aF9yZWN1cnNvcz1bXVxuICAgICAgICB0aGlzLnBhdGhfcHJvcGlvcz1bXVxuICAgICAgICB0aGlzLmF1ZGlvPVtdXG4gICAgICAgIHRoaXMuaW1hZ2VzPVtdXG4gICAgICAgLy8gdGhpcy5nZW5lcmFyX3JlY3Vyc29zanVlZ28oKVxuICAgIH1cblxuICAgICAgLyoqKlxuICAgICAgICAgKiBAZGVzY3JpcHRpb24gb2J0aWVuZSB0b2RhcyBsYXMgaW1hZ2VuZXMgZGUgdG9kYXMgbGFzIGNhcnBldGFzIGRhZGFzXG4gICAgICAgICAqL1xuICAgIGdldF9pbWFnZW5lcygpe1xuICAgICBcbiAgICAgIGxldCByZWN1cnNvcz10aGlzXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBhdGhfcHJvcGlvcykge1xuICAgICAgICBsZXQgcmVxdWVzdFVSTCA9IGtleStcIi9pbWFnZW5lcy5qc29uXCJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIixmdW5jdGlvbihldnQpe1xuICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gcmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICBhbGVydChcIlN1ZXJ0ZVwiKVxuICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICBhbGVydChcIkVycm9yIG5vIHNlIHB1ZG8gbGVlciBlbCBhcmNoaXZvXCIpXG4gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gaW1wbGVtZW50YWRvXCIpXG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgICByZWN1cnNvcy5pbWFnZXMucHVzaCh0aGlzLnJlc3BvbnNlVGV4dClcbiAgIFxuICAgICAgfSk7XG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIixyZXF1ZXN0VVJMKVxuICAgICAgcmVxdWVzdC5zZW5kKClcbiAgICB9XG5cbn1cblxuICAgIGdldF9hdWRpb3MoKTpbXXtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgLyoqXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBlc3RlIG1ldG9kbyBzZSBlbmNhcmdhIGRlIGVuY29udHJhciBsb3MganNvbiByZXNwZWN0aXZvcyBkZSBsYXMgbXVsdGltZWRpYXMgZW4gZWwgZXF1aXBvXG4gICAgICAgICAqIEBkZXByZWNhdGVkIGVzdGUgbWV0b2RvIG5vIGVzdGEgaW1wbGVtZW50YWRvIGNvcnJlY3RhbWVudGUgLGEgZnV0dXJvIGxlZXJhIGxvcyBqc29uIGF1dG9tYXRpY2FtYW5ldGUgXG4gICAgICAgICAqIEByZXR1cm5zIHRleHQvanNvblxuICAgICAgICAgKi9cbiAgICBnZW5lcmFyX3JlY3Vyc29zanVlZ28ocGF0aDpzdHJpbmcpOmFueSB7ICAgXG4gICAgICAgIC8vdGhpcy5wYXRoX3JlY3Vyc29zLnB1c2goXCIuLi9pbWFnZS9yb21wZWNhYmV6YXNcIilcbiAgICAgICAgdmFyIGpzb249XCJ7fVwiO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIGZhbHNlKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAganNvbj10aGlzLnJlc3BvbnNlVGV4dCA7XG5cbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnN0YXR1c1RleHQpO1xuICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciAtLS0tXCIreGhyLnN0YXR1c1RleHQrXCIgOiBcIit4aHIuRE9ORSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKG51bGwpOyBcblxuICAgICAgICByZXR1cm4ganNvblxuXG4gIH1cblxufSIsIiBpbXBvcnQgUGF0cm9uZXNkZWltYWdlbiBmcm9tIFwiLi9QYXRyb25lc2RlaW1hZ2VuZXNcIjtcbiBpbXBvcnQgVXN1YXJpbyBmcm9tICBcIi4vdXN1YXJpb1wiXG5pbXBvcnQganVlZ29zIGZyb20gJy4vanVlZ29zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbWlsYXIgZXh0ZW5kcyBQYXRyb25lc2RlaW1hZ2VuIHtcbiAgcHJvdGVjdGVkIE51bWVyb2RlY2FydGFzITogbnVtYmVyO1xuICBwcm90ZWN0ZWQgUGF0cm9uOiBhbnk7XG4gIHByb3RlY3RlZCByZXNwdWVzdGEhOiBudW1iZXJbXTtcbiAgcHJvdGVjdGVkIG1vdmltaWVudG9zOiBudW1iZXI7XG4gIHByb3RlY3RlZCBkZXNjcmlwY2lvbjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgaW1hZ2VuZXM6IEhUTUxJbWFnZUVsZW1lbnRbXTtcbiAgcHJvdGVjdGVkIGdpcmFkYV9jYXJ0YSE6bnVtYmVyXG4gIHB1YmxpYyBnZXQgR2V0ZGlmaWN1bHRhZCgpOiBudW1iZXIge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBzZXQgU2V0ZGlmaWN1bHRhZChudW1lcm86IG51bWJlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBBc2lnbmFjaW9uZGVkaWZpY3VsdGFkKFVzdWFyaW86IFVzdWFyaW8pOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICBwdWJsaWMgaW50ZXJmYV9ncmFmaWNhKCkge1xuICB2YXIgc2ltaWxhcj10aGlzO1xuICB2YXIgZGl2czpIVE1MQ29sbGVjdGlvbk9mPEhUTUxEaXZFbGVtZW50Pj08SFRNTENvbGxlY3Rpb25PZjxIVE1MRGl2RWxlbWVudD4+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqdWVnb1wiKVxuICAgZm9yIChsZXQgeD0wO3g8ZGl2cy5sZW5ndGg7eCsrKXtcbiAgICAgIGRpdnNbeF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgIFxuICAgICAgfVxuICAgICAgKTtcbiAgIH1cbiAgfVxuICBwdWJsaWMgY2FyZ2FyX3JlY3Vyc29zKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBDYWxpZmljYXIoVXN1YXJpbzogVXN1YXJpbyk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBKdWdhcigpOiB2b2lkIHtcbiAgICAgXG4gIH1cbiAgcHVibGljIEdldF9ncmFmaWNhcygpOiB2b2lkIHtcbiAgICAgIFxuICAgdmFyIGo9IEpTT04ucGFyc2UoIHRoaXMucmVjdXJzb3MuZ2VuZXJhcl9yZWN1cnNvc2p1ZWdvKFwiLi4vaW1hZ2Uvcm9ucGVjYWJlemExL2ltYWdlbmVzLmpzb25cIikpXG4gICB2YXIgYXJyYXlfbWF4PTBcbiAgIHZhciBhcnJheV9tZW1vcmlhPVtdXG4gICBpZih0aGlzLk5pdmVsX2RpZmljdWx0YWQgPT09NCl7XG4gICAgIGFycmF5X21heD00XG4gICB9IFxuICAgaWYodGhpcy5OaXZlbF9kaWZpY3VsdGFkPT01KXtcbiAgICBhcnJheV9tYXg9NlxuICAgfVxuICAgaWYodGhpcy5OaXZlbF9kaWZpY3VsdGFkPT02KXtcbiAgICBhcnJheV9tYXg9OFxuICB9XG4gXG4gIGlmKE9iamVjdC5rZXlzKGopLmxlbmd0aD49YXJyYXlfbWF4KXtcbiAgICBmb3IoY29uc3QgeCBpbiBqKXtcbiAgICAgIGFycmF5X21lbW9yaWEucHVzaChcIi4uL2ltYWdlL3JvbnBlY2FiZXphMS9cIitqW3hdLk5vbWJyZSlcbiAgICAgIGFycmF5X21lbW9yaWEucHVzaChcIi4uL2ltYWdlL3JvbnBlY2FiZXphMS9cIitqW3hdLk5vbWJyZSlcbiAgICB9XG4gICAgdmFyIHZhbG9yX21lbW9yaWE9W107XG4gICAgdmFyIG1lbW9yaWFfY2FydGFfaWRzPVtdO1xuICAgIHZhciBnaXJhZGFfY2FydGE9MDtcbiAgIFxuICAgICAgICB0aGlzLmdpcmFkYV9jYXJ0YSA9IDA7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgdmFyIGFycmF5X251ZXZvPWFycmF5X21lbW9yaWEgXG4gICAgICAgIC5tYXAoICh4LGkpID0+IFt4LGksTWF0aC5yYW5kb20oKV0pIFxuICAgICAgICAuc29ydChmdW5jdGlvbiBvcmRlbmFyKGE6KCBzdHJpbmd8bnVtYmVyKSBbXSAsYjogKHN0cmluZ3xudW1iZXIpIFtdKTpudW1iZXJ7XG4gICAgICAgIC8vIGNvbXBhcmEgIDIgIHBvc2ljaW9uZXMgZGVsIGFycmF5ICByZWN1cnNpdmFtZW50ZSAgc2kgZXMgcG9zaXRpdm8gbGUgZGEgMSAsc2Ugb3JnYW5pemEgZWwgYXJyYXkgc2VndSBsb3MgbnVtZXJvcyBnZW5lcmFkb3MgYWxlYXRvcmlhbWVudGVcbiAgICAgICAgcmV0dXJuIChhWzJdIGFzIG51bWJlciktIChiWzJdIGFzIG51bWJlcilcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIHBhcmVudD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBwYXJlbnQuaWQ9XCJqdWVnb1wiXG4gICAgICAgIHBhcmVudC5jbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIlxuXG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHJvdy5jbGFzc05hbWU9XCJyb3dcIlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5X251ZXZvLmxlbmd0aDsgaSsrKSB7IFxuXG4gICAgICAgICAgIGxldCBjb2w9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgY29sLmlkPVwiY2FydGFcIitpXG4gICAgICAgICAgIGNvbC5jbGFzc05hbWU9XCJjb2wganVlZ29cIlxuICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKVxuICAgICAgICAgICBpZihhcnJheV9udWV2by5sZW5ndGgvMiA9PShpKzEpKXtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChyb3cpXG4gICAgICAgICAgICByb3c9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgcm93LmNsYXNzTmFtZT1cInJvd1wiOyBcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAvLyAgb3V0cHV0ICs9ICc8ZGl2IGlkPVwiY2FydGFfJytpKydcIiBvbmNsaWNrPVwiZ2lyYXJDYXJ0YU1lbW9yaWEodGhpcyxcXCcnK2FycmF5X21lbW9yaWFbaV0rJ1xcJylcIj48L2Rpdj4nO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW5pZG8nKSEuYXBwZW5kQ2hpbGQocGFyZW50KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVuaWRvJykhLnN0eWxlLmRpc3BsYXk9XCJcIlxuICAgICAgICB0aGlzLmludGVyZmFfZ3JhZmljYSgpXG4gIH1cbiAgZWxzZXtcbiAgICBhbGVydChcIk5vIGV4aXN0ZW4gc3VmaWNpZW50ZXMgaW1hZ2VuZXNcIilcbiAgfVxuXG5cbiAgfVxuICBwdWJsaWMgZW52aWFyX2RhdG9zKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBmaW5hbGl6YXIoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgcHVibGljIHBpbnRhcl9wYW50YWxsYSh2YWxvcj86IGFueSk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gIHB1YmxpYyBnZW5lcmFyX3JlY3Vyc29qdWVnbygpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICBwdWJsaWMgY2FtYmlhcl91cmwoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cbiAgcHVibGljIHVwZGF0ZV9wYW50YWxsYSgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuICBwdWJsaWMgVmFsaWRhck1vdmltaWVudG9zKEV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKHVzdWFyaW86VXN1YXJpbykge1xuICAgICAgICBzdXBlcihcInNpbWlsYXJcIix1c3VhcmlvKTtcbiAgICAgICAgdGhpcy5tb3ZpbWllbnRvcz0wO1xuICAgICAgICB0aGlzLmltYWdlbmVzPVtdXG4gICAgICAgIHRoaXMuZGVzY3JpcGNpb249XCJcIlxuICAgIH1cblxuICAgIHNldERpZmljdWx0YWQoYm90b246SFRNTEJ1dHRvbkVsZW1lbnQpe1xuICAgICAgICBzdXBlci5zZXREaWZpY3VsdGFkKGJvdG9uKVxuICAgICAgICB0aGlzLkdldF9ncmFmaWNhcygpO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgaW50ZXJmYXpfZ3JhZmljYSBmcm9tICcuL2ludGVyZmF6X2dyYWZpY2EnO1xuaW1wb3J0IFVzdWFyaW8gZnJvbSAnLi91c3VhcmlvJztcbmltcG9ydCBSZWN1cnNvcyBmcm9tICcuL1JlY3Vyc29zJztcblxuZXhwb3J0IGRlZmF1bHQgIGFic3RyYWN0IGNsYXNzICBqdWVnb3MgIGltcGxlbWVudHMgaW50ZXJmYXpfZ3JhZmljYXtcbiAgUGludGFyX3BhbnRhbGxhKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gICAgcmVjdXJzb3M6UmVjdXJzb3NcbiAgICBzaXplOiB7fTtcbiAgICBjb25maWd1cmFjaW9uZXM6IHt9O1xuICAgIFBhbnRhbGxhOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgbm9tYnJlOnN0cmluZztcbiAgICBwcm90ZWN0ZWQgaDpudW1iZXI7XG4gICAgcHJvdGVjdGVkIG06bnVtYmVyO1xuICAgIHByb3RlY3RlZCBzOm51bWJlcjtcbiAgICBwcm90ZWN0ZWQgaW50ZXJ2YWxvITphbnk7XG4gICAgcHJvdGVjdGVkIGp1ZWdvITpUaGlzVHlwZTxqdWVnb3M+O1xuICAgIHByb3RlY3RlZCBVc3VhcmlvOlVzdWFyaW87XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlc2NyaXBjaW9uOnN0cmluZ1xuICAgIHByb3RlY3RlZCAgTml2ZWxfZGlmaWN1bHRhZCE6bnVtYmVyXG4gICAgcHJvdGVjdGVkICBUaWVtcG9kZWxqdWdhZG9yITpEYXRlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGltYWdlbmVzOkhUTUxJbWFnZUVsZW1lbnRbXVxuICBcbiAgICAgY29uc3RydWN0b3Iobm9tYnJlOnN0cmluZyxVc3VhcmlvOlVzdWFyaW8pe1xuICAgICAgIHZhciBqdWVnbz10aGlzO1xuXG4gICAgICB0aGlzLmg9MFxuICAgICAgdGhpcy5tPTBcbiAgICAgIHRoaXMucz0wXG4gICAgICAgdGhpcy5Vc3VhcmlvPVVzdWFyaW87XG4gICAgICAgdGhpcy5ub21icmU9bm9tYnJlO1xuICAgICAgIHRoaXMucmVjdXJzb3M9bmV3IFJlY3Vyc29zKClcbiAgICAgICAgdGhpcy5QYW50YWxsYT08SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgIHRoaXMuY29uZmlndXJhY2lvbmVzPXtcbiAgICAgICAgIGZhY2lsOnRydWUsXG4gICAgICAgICBtZWRpbzp0cnVlLFxuICAgICAgICAgZGlmaWNpbDp0cnVlIFxuICAgICAgfVxuICAgICAgIHRoaXMuc2l6ZT17XG4gICAgICAgICAgd2lkdGg6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IS5zdHlsZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IS5zdHlsZS5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHM6SFRNTENvbGxlY3Rpb25PZjxIVE1MQnV0dG9uRWxlbWVudD4gPSA8IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuaXZlbFwiKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAganVlZ28uc2V0RGlmaWN1bHRhZCh0aGlzKVxuICAgICAgfSAsIGZhbHNlKTtcbiAgICB9XG4gICAgc2V0RGlmaWN1bHRhZChib3RvbjpIVE1MQnV0dG9uRWxlbWVudCl7XG4gICAgICAvLyBvYnRlbmVyIGVsIGF0cmlidXRvIGRlbCBib3RvbiBuaXZlbFxuICAgICAgIHRoaXMuTml2ZWxfZGlmaWN1bHRhZD0gcGFyc2VJbnQoPHN0cmluZz5ib3Rvbi5nZXRBdHRyaWJ1dGUoXCJuaXZlbFwiKSApXG4gICAgICAgY29uc29sZS5sb2coYm90b24uZ2V0QXR0cmlidXRlKFwibml2ZWxcIikpXG4gICAgLy9vY3VsdG8gbG9zIGJvdG9uZXMgZGUgZGlmaWN1bHRhZCAgb2N1bHRhZG5kbyBlbCBkaXZcbiAgICAgICBsZXQgZGlmaWN1bHRhZF9kaXY6SFRNTEVsZW1lbnQ9PEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibml2ZWxcIilcbiAgICAgICBkaWZpY3VsdGFkX2Rpdi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXG4gICAgLy8vICBtdWVzdHJvcyBsYSBzZWxsZWNpb24gZGUgaW1hZ2VuZXNcbiAgICAgICBsZXQgaW1hZ2VuX2RpdjpIVE1MRWxlbWVudD08SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ3J1cGFyX2ltYWdlbmVzXCIpXG4gICAgICAgaW1hZ2VuX2Rpdi5zdHlsZS5kaXNwbGF5PVwiXCJcbiAgICAgXG4gICAgfVxuICAgIEdldE5vbWJyZSgpOnN0cmluZ3tcbiAgICAgcmV0dXJuIHRoaXMubm9tYnJlO1xuICAgIH1cbiAgICAgIGNyb25vbWV0cmFyKCl7XG4gICAgICB2YXIgaj10aGlzO1xuICAgICAgLy9sbGFtYSBhbCBtZXRvZG8gZXNjcmliaXJcbiAgICAgdGhpcy5lc2NyaWJpcihqKTtcbiAgICAgICAgLy8gZWplY3V0YSBlbCBtZXRvZG8gY2FkYSBzZWd1bmRvXG4gICAgICAgICB0aGlzLmludGVydmFsbyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgai5lc2NyaWJpcihqKTtcbiAgICAgICAgIH0sMTAwMCk7XG4gICAgICB9XG4gICAgICAgIHBhcmEoKXtcbiAgICAgICAgLy9wYXJhIGVsIGNyb25vbWVjcm9cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsbyk7ICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9ub21lY3JvXCIpIS5pbm5lckhUTUw9XCIwMDowMDowMFwiXG4gICAgICB9XG4gICAgICBcbiAgICAgIGVzY3JpYmlyKGo6anVlZ29zKXtcbiAgICAgICAgdmFyIGhBdXgsIG1BdXgsIHNBdXg7XG4gICAgICAgIGoucysrO1xuICAgICAgICBpZiAoai5zPjU5KXtqLm0rKztqLnM9MDt9XG4gICAgICAgIGlmIChqLm0+NTkpe2ouaCsrO2oubT0wO31cbiAgICAgICAgaWYgKGouaD4yNCl7ai5oPTA7fVxuICAgICAgXG4gICAgICAgIGlmIChqLnM8MTApe3NBdXg9XCIwXCIrai5zO31lbHNle3NBdXg9ai5zO31cbiAgICAgICAgaWYgKGoubTwxMCl7bUF1eD1cIjBcIitqLm07fWVsc2V7bUF1eD1qLm07fVxuICAgICAgICBpZiAoai5oPDEwKXtoQXV4PVwiMFwiK2ouaDt9ZWxzZXtoQXV4PWouaDt9XG4gICAgICAvLyBlc2NyaWJlIGVuIGVsIGh0bWxcbiAgICAgICAgbGV0IGE6SFRNTEVsZW1lbnQ9IDxIVE1MRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9ub21lY3JvXCIpO1xuICAgICAgICAgYS5pbm5lckhUTUwgPSBoQXV4ICsgXCI6XCIgKyBtQXV4ICsgXCI6XCIgKyBzQXV4OyBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGltZV91c3VhcmlvICgpOnN0cmluZ3tcbiAgICAgICAgdGhpcy5wYXJhKClcbiAgICAgICAgbGV0IGc9IHRoaXMuaC50b1N0cmluZygpK1wiOlwiK3RoaXMubS50b1N0cmluZygpK1wiOlwiK3RoaXMucy50b1N0cmluZygpXG4gICAgICAgIHRoaXMuaD0wO3RoaXMubT0wO3RoaXMucz0wXG4gICAgICAgIHJldHVybiBnXG4gICAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEdldGRpZmljdWx0YWQoKTpudW1iZXJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0IFNldGRpZmljdWx0YWQobnVtZXJvOm51bWJlcik7XG4gICAgcHVibGljIGFic3RyYWN0IEFzaWduYWNpb25kZWRpZmljdWx0YWQoVXN1YXJpbzpVc3VhcmlvKTp2b2lkO1xuICAgIHB1YmxpYyBwZXJtaXRpZG8oVXN1YXJpbzpVc3VhcmlvKTpib29sZWFue1xuICAgICAgICAvKipcbiAgICAgICAgIG1ldG9kbyBwYXJhIHNvYnJlc2NyaWJpclxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKkBhYnN0cmFjdCAgaW50ZXJmYXogZ3JhZmljYSBxdWUgc2UgdXNhICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBpbnRlcmZhX2dyYWZpY2EoKTphbnlcbiAgICAvKiogQGFic3RyYWN0IHZhbGlkYSBsb3MgbW92aW1pZW50b3MgZGVsIHVzdWFyaW8qL1xuICAgIHB1YmxpYyBhYnN0cmFjdCAgVmFsaWRhck1vdmltaWVudG9zKEV2ZW50OkV2ZW50KTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBDYWxpZmljYXIoVXN1YXJpbzpVc3VhcmlvKTp2b2lkO1xuICAgIHB1YmxpYyBhYnN0cmFjdCBKdWdhcigpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IEdldF9ncmFmaWNhcygpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IGVudmlhcl9kYXRvcygpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0IGZpbmFsaXphcigpOnZvaWQ7XG4gICAgcHVibGljIGFic3RyYWN0ICBwaW50YXJfcGFudGFsbGEodmFsb3I/OmFueSk6dm9pZDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgIGdlbmVyYXJfcmVjdXJzb2p1ZWdvKCk6IHZvaWRcbiAgICBwdWJsaWMgYWJzdHJhY3QgIGNhbWJpYXJfdXJsKCk6IHZvaWRcbiAgICBwdWJsaWMgYWJzdHJhY3QgIGNhcmdhcl9yZWN1cnNvcygpOiB2b2lkIDtcbiAgICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlX3BhbnRhbGxhKCkgOnZvaWQ7XG5cbn07XG4iLCJpbXBvcnQgcGFyYW1ldHJvcyBmcm9tIFwiLi9QYXJhbWV0cm9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzdWFyaW97XG5cbiAgICBwcml2YXRlIG5vbWJyZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcGVsbGlkbzpzdHJpbmc7XG4gICAgcHJpdmF0ZSBzZXhvOnN0cmluZztcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcbiAgICBwcml2YXRlIEdyYWRvX2VzY29sYXI6c3RyaW5nO1xuICAgIHByaXZhdGUgaWQ6bnVtYmVyO1xuICAgIC8vZmFsdGEgaW1wbGVtZW50YXJcbiAgICBwcml2YXRlIHBlcm1pc29zITpwYXJhbWV0cm9zW107XG4gICAgIHB1YmxpYyBjb25zdHJ1Y3Rvciggbm9tYnJlOnN0cmluZyxhcGVsbGlkbzpzdHJpbmcsc2V4bzpzdHJpbmcscGFzc3dvcmQ6c3RyaW5nLEdyYWRvX2VzY29sYXI6c3RyaW5nLE5faWRlPzpudW1iZXIgKXtcbiAgICAgICAgICAgIHRoaXMubm9tYnJlPW5vbWJyZTtcbiAgICAgICAgICAgIHRoaXMuYXBlbGxpZG89IGFwZWxsaWRvO1xuICAgICAgICAgICAgdGhpcy5zZXhvPSBzZXhvO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZD1wYXNzd29yZDtcbiAgICAgICAgICAgIHRoaXMuR3JhZG9fZXNjb2xhcj1HcmFkb19lc2NvbGFyO1xuICAgICAgICAgICAgTl9pZGU/dGhpcy5pZD0gTl9pZGUgOnRoaXMuaWQ9MDsgXG4gICAgICAgICAgICB0aGlzLnZlcmlmaWNhcl9lbl9iYXNlZGF0b3ModGhpcyk7IFxuICAgICAgICAgICAgXG5cblxuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJpZmljYXJfZW5fYmFzZWRhdG9zKHVzdWFyaW86VXN1YXJpbyl7XG4gICAgICBcbiAgICAgICAgdGhpcy5wZXJtaXNvcz1bXTtcblxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGluc2VydGFyX3V1c2FyaW8odXN1YXJpbzpVc3VhcmlvKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRub21icmVcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cdHB1YmxpYyBnZXQgJG5vbWJyZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm5vbWJyZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRhcGVsbGlkb1xuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkYXBlbGxpZG8oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hcGVsbGlkbztcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRzZXhvXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRzZXhvKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc2V4bztcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRwYXNzd29yZFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblx0cHVibGljIGdldCAkcGFzc3dvcmQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYXNzd29yZDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRHcmFkb19lc2NvbGFyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXHRwdWJsaWMgZ2V0ICRHcmFkb19lc2NvbGFyKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuR3JhZG9fZXNjb2xhcjtcblx0fVxuXG4gICAgLyoqXG4gICAgICogR2V0dGVyICRpZFxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cblx0cHVibGljIGdldCAkaWQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5pZDtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRub21icmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkbm9tYnJlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLm5vbWJyZSA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJGFwZWxsaWRvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG5cdHB1YmxpYyBzZXQgJGFwZWxsaWRvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmFwZWxsaWRvID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkc2V4b1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRzZXhvKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNleG8gPSB2YWx1ZTtcblx0fVxuXG4gICAgLyoqXG4gICAgICogU2V0dGVyICRwYXNzd29yZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuXHRwdWJsaWMgc2V0ICRwYXNzd29yZCh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5wYXNzd29yZCA9IHZhbHVlO1xuXHR9XG5cbiAgICAvKipcbiAgICAgKiBTZXR0ZXIgJEdyYWRvX2VzY29sYXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkR3JhZG9fZXNjb2xhcih2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5HcmFkb19lc2NvbGFyID0gdmFsdWU7XG5cdH1cblxuICAgIC8qKlxuICAgICAqIFNldHRlciAkaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKi9cblx0cHVibGljIHNldCAkaWQodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuaWQgPSB2YWx1ZTtcblx0fVxuXG4gICAgXG59XG4gXG5cbiAiXSwic291cmNlUm9vdCI6IiJ9