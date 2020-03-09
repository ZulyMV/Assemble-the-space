import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import Puzzle from './puzzle'
//import '../css/boostrap_import.sass'
 
 var elements:HTMLCollectionOf<HTMLButtonElement> = < HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("botones");

 interface imagehtml extends HTMLImageElement{
  cropper?:Cropper |null
}
/***
 * interface json_leer{
  [key:string]:Object
}
 */

//variables para  cronomecro
var h = 0;
var m = 0;
var s = 0;
//variable de hilo
var intervalo:NodeJS.Timeout;
//variable para  dificultad
var dificultad=0;

//varable de almacentaminto json
var datos:any;
//path  imagen 
var imagen_elegida:string;

//funciones cronomeccro

//exportar string del tiempo 
export function time_usuario ():string{
  para()
  let g= h.toString()+":"+m.toString()+":"+s.toString()
  h=0;m=0;s=0
  return g
}
// funcion principal de cronometro  
export function cronometrar(){
//llama al metodo escribir
  escribir();
  // ejecuta el metodo cada segundo
   intervalo = setInterval(escribir,1000);
}
export function para(){
  //para el cronomecro
  clearInterval(intervalo);  
  document.getElementById("cronomecro")!.innerHTML="00:00:00"
}

export function escribir(){
  var hAux, mAux, sAux;
  s++;
  if (s>59){m++;s=0;}
  if (m>59){h++;m=0;}
  if (h>24){h=0;}

  if (s<10){sAux="0"+s;}else{sAux=s;}
  if (m<10){mAux="0"+m;}else{mAux=m;}
  if (h<10){hAux="0"+h;}else{hAux=h;}
// escribe en el html
  let a:HTMLElement= <HTMLElement> document.getElementById("cronomecro");
  a.innerHTML = hAux + ":" + mAux + ":" + sAux; 
}

export function   cortes (v:number,img:HTMLImageElement): any{ // HTMLCANVASELEMENT []
  //imagenes ccortadas al final
  var partes:any [] =[];
  // valor de recorte  n^²
  var valor=v;
  // elemento imagen a usar
  var elemento:imagehtml   = <imagehtml> img;
  var cortar= new Cropper(elemento,{ autoCropArea: 1,
                                     checkCrossOrigin:false,
    //cuando ya halla cargado
    ready(){

    if(elemento.cropper){
      if (elemento.cropper.getImageData().width>elemento.cropper.getImageData().height){
        elemento.cropper.zoom(0.01)
      }
      // las dimiensiones origianles de la imagen 
      let dimension={
        width:elemento.cropper.getData().width,
        heigth:elemento.cropper.getData().height
      }
      for (var y=0;y<valor;y++){
        for(var x=0;x<valor;x++){
          elemento.cropper.setData({
            width:dimension.width/valor,
            height:dimension.heigth/valor,          
            x:dimension.width-(valor-x)*dimension.width/valor,
            y:dimension.heigth-(valor-y)*dimension.heigth/valor
          })
          var final=elemento.cropper.getCroppedCanvas({
            width:500,
            height:500
          }) 
         if(final.getContext("2d")!=null) 
           partes.push( final);
        }
      }
      cortar.disable()
      cortar.destroy();
      //elemento.remove()
      console.log("salio del cortar:" )
      var puzzle=new Puzzle( partes,img);
      
   


  }           
}});

}

//funcion que se ejecita como evento de los votones de tipo nivel
export function boton_elegir_dificultad(this:HTMLButtonElement){
  // obtener el atributo del boton nivel
   dificultad= parseInt(<string>this.getAttribute("nivel") )
   console.log(this.getAttribute("nivel"))
//oculto los botones de dificultad  ocultadndo el div
   let dificultad_div:HTMLElement=<HTMLElement>document.getElementById("nivel")
   dificultad_div.style.display="none"
///  muestros la sellecion de imagenes
   let imagen_div:HTMLElement=<HTMLElement>document.getElementById("agrupar_imagenes")
   imagen_div.style.display=""
 

}
//funcion que se ejecita como evento de los votones de tipo elegir_imagen

export function boton_elegir_imagen(this:HTMLButtonElement) {
  interface json_leer{
    [key:string]:string
  }
 //metodo para boton accion

      
     let attribute:string = <string>this.getAttribute("tsrc");
     //oculta div imagens
     let container=<HTMLElement>document.getElementById("agrupar_imagenes")
     container.style.display="none"
     // leer json
     let requestURL =window.cordova? "../image/rompecabezas/imagenes.json":'../image/rompecabezas/imagenes.json';
     let request = new XMLHttpRequest(); 
     
     request.addEventListener("loadend",function(evt){
      if (request.readyState === request.DONE) {
        if (request.status === 200) {
            alert("Suerte")
        }else{
          alert("Error no se pudo leer el archivo")
          throw new Error("No implementado")
        }
      }
      datos= this.responseText

      var img:HTMLImageElement= <HTMLImageElement>document.getElementById("id")
      imagen_elegida=  attribute+".jpg"

      if(img && attribute){
        img.src="../image/rompecabezas/"+attribute+".jpg";
        img.crossOrigin="anonymous";    
      }
      //ocultar botones
      let container=<HTMLElement>document.getElementById("agrupar_imagenes")

      container.style.display="none"
      // muestro el juego
      var b=<HTMLDivElement>document.getElementById("juego")
      b.style.display=""
 
      var cronomecro=<HTMLDivElement>document.getElementById("cronomecro")

     // cargar el metodo cortar
      if (img.complete ) cortes(dificultad,img)
      else img.onload=  cortes( dificultad,img);
      })
     // llama evento 
     request.open("GET",requestURL)
 /// ejecta evento
     request.send()
    

 };
 
 export function reiniciar_juego(){
  document.getElementById("finalizado")!.style.display="none"
  document.getElementById("ganar")!.innerHTML="&nbsp;"
  document.getElementById("juego")!.style.display=""
 
  cortes(dificultad,<HTMLImageElement>document.getElementById("id"))
 }
 export function mostrar_info(){
  document.getElementById("finalizado")!.style.display="none"
  document.getElementById("informativo")!.style.display=""
  interface datos_en_json{
    Nombre:string,
    Descripcion:string,
    URL:string
  }
   let texto:datos_en_json=(JSON.parse(datos )[imagen_elegida]  as datos_en_json);
   console.log(texto)
   document.getElementById("textoinformativo")!.innerHTML=texto.Nombre+"\n \n \n"+
   texto.Descripcion+"\n \n \n" +"url:"+texto.URL
 }

 

  

if(window.cordova) {
   window.addEventListener('DOMContentLoaded',  function(){
    console.log('cordova')
      //for (var i = 0; i < elements.length; i++)  elements[i].addEventListener('click', boton_elegir_dificultad, false);
      var elements:HTMLCollectionOf<HTMLButtonElement> = < HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("nivel");
      for (var i = 0; i < elements.length; i++)  elements[i].addEventListener('click', boton_elegir_dificultad, false);
      var elements:HTMLCollectionOf<HTMLButtonElement> = < HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("image");
      for (var i = 0; i < elements.length; i++)  elements[i].addEventListener('click', boton_elegir_imagen, false);
      document.body.style.backgroundImage='url("../image/fondos/index.jpg")'
      document.body.style.backgroundSize='100% 100%'


    });
  }
    //document.addEventListener('deviceready', cortes, false);
   else {
    window.addEventListener('DOMContentLoaded',  function(){
      console.log("------------console----------")

      var elements:HTMLCollectionOf<HTMLButtonElement> = < HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("nivel");
      for (var i = 0; i < elements.length; i++)  elements[i].addEventListener('click', boton_elegir_dificultad, false);
      var elements:HTMLCollectionOf<HTMLButtonElement> = < HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("imagen");
     console.log(elements.length)
      for (var i = 0; i < elements.length; i++)  elements[i].addEventListener('click', boton_elegir_imagen, false);
       document.body.style.backgroundImage='url("../image/fondos/index.jpg")'
       document.body.style.backgroundSize='100% 100%'

     
    });
  }