import 'bootstrap'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {mostrar_info,reiniciar_juego,time_usuario,cronometrar} from './index'
interface imagenDiv extends HTMLImageElement{
	posicion?:number
	clicked?: boolean,
	identificador?:number
	}

export default class Puzzle{
  ganar:HTMLTitleElement;
  rompecabezas:HTMLDivElement;
  imagenes:HTMLImageElement[]
  movimientos:number;
constructor(canvas:HTMLCanvasElement[],imagen:HTMLImageElement){
	
	document.documentElement.style.backgroundImage=""

//movimientos
	this.movimientos=0
//variables para  cronometro
    
	 console.log(' PUZZLE ')   ;
	 this.imagenes=[];
//Formato a las imagenes en Htmlimagen y lo inserta en un array
		 canvas.forEach(element=>{ 
//HtmlImage cada corte y los valores predeterminados
			  var nuevaimagen:imagenDiv = <imagenDiv> document.createElement("img")
			  nuevaimagen.crossOrigin="anonymous";
		    if(element.getContext("2d"))
			 if(element.getContext("2d")) nuevaimagen.src =    element.getContext("2d")!.canvas.toDataURL()
			  nuevaimagen.clicked=false;
			  nuevaimagen.className="img-fluid"
			  this.imagenes.push(nuevaimagen); 
			});
		 this.rompecabezas = <HTMLDivElement>document.getElementById('rompecabezas');
		 this.ganar = <HTMLTitleElement>document.getElementById('ganar');

//Le agrega  un  numero de posicion al azar  que sera usado para insertar en el div
	var Elementos:(HTMLImageElement|number)[][]=this.imagenes
//recorre el array  encapsulando la informacion en un array y un numero aleatorio adiccional en un nuevo  campo
	.map( (x,i) => [x,i,Math.random()]) 
	.sort(function ordenar(a:(HTMLImageElement | number) [] ,b: any []):number{
//Comparar  2  posiciones del array  recursivamente  si es positivo le da 1 ,se organiza el array segun los numeros generados aleatoriamente
	return (a[2] as number)- (b[2] as number)
	})
//numero de cortes dados
	var tam:number=this.getBaseLog(2,this.imagenes.length);
//inserta  en columnas de boostrapt  las imagenes dadas 
this.rompecabezas.textContent=""
var numero_contenedor=1;
var contenedor_columnas=document.createElement("div")
contenedor_columnas.className="row  justify-content-center"
var imagen_r= imagen;
imagen_r.style.width="100px";
imagen_r.style.height="100px";

document.getElementById("imagen_prueba")!.appendChild(imagen_r)
if(this.rompecabezas && this.ganar){
	for(let i=0; i<Elementos.length;i++){

		let container=document.createElement("div")
		container.className="col"  
		let imagen_elemento:imagenDiv = <imagenDiv>Elementos[i][0];
		imagen_elemento.clicked = false;
		imagen_elemento.posicion=<number> Elementos[i][1];
	
//metodo para insertar en columas cada elementos
		container.appendChild(imagen_elemento)
		if(numero_contenedor==tam){
			numero_contenedor=1
			let espacio=document.createElement("div")
			espacio.className="  "
			espacio.appendChild(document.createElement("br"))
			contenedor_columnas.appendChild(container)
			this.rompecabezas.appendChild(contenedor_columnas);
			this.rompecabezas.appendChild(espacio);

			contenedor_columnas=document.createElement("div")
			contenedor_columnas.className="row justify-content-center"
			console.log("contenedor")
		}else{
			contenedor_columnas.appendChild(container)
			numero_contenedor=numero_contenedor+1
		}		

	}


		this.jugar();

	}

   
} 
     getBaseLog(x:number, y:number) {
	return Math.round( Math.log(y) / Math.log(x));
	}
	
  
    public jugar(){

		var pasos = 1;
		var p1:imagenDiv,p2:imagenDiv;
		var puzzle=this;
		var mov=<HTMLElement>document.getElementById("movimientos") 
		document.addEventListener('click',function( e:MouseEvent){

			 const elegido= e.target as imagenDiv ;
			 console.log(elegido.posicion)
				 if( elegido && !elegido.clicked ){
					switch(pasos){
	
						case 1:
								if(elegido.tagName=="IMG" && !elegido.clicked){
									 elegido.className='img-fluid  select';
									elegido.clicked = true;
									p1=elegido;
									pasos=2;
									console.log("posicion1  : " +p1.posicion)
									
								}
								break;
						case 2:
								if( elegido.tagName=="IMG"   && !elegido.clicked){
									if(puzzle.movimientos===0) cronometrar();
									puzzle.movimientos++;
									mov.innerHTML="Movimientos:"+puzzle.movimientos;
									elegido.className='img-fluid select';
									elegido.clicked = true;
									p2 = elegido;
									let posicion = p2.posicion;
									let src = p2.src;
									p2.posicion = p1.posicion;
									p2.src = p1.src;
									p1.posicion = posicion;
									p1.src = src;
									p1.className = p2.className = "img-fluid";
									pasos = 1;
	 ;
	
								if (puzzle.isganar()){
									puzzle.ganar.textContent = "Ganaste!!"
									puzzle.pantallar_reposicion()
								}
								p2.clicked=false;
								p1.clicked=false;
	
								}
							 break;
											 
					}
				}
				
			 
		
		})
	}

	public  isganar(){

		let Fichas_campo: HTMLCollectionOf<imagenDiv> = <HTMLCollectionOf<imagenDiv>>    document.getElementsByTagName("img");
		let Fichas_comparar: imagenDiv []=[];
		for(let i=0; i<Fichas_campo.length;i++) {
			if(Fichas_campo[i].posicion !=undefined){
				Fichas_comparar.push(Fichas_campo[i])
			}
		}

		for(let i=0; i<Fichas_comparar.length;i++) {
			if(Fichas_comparar[i].posicion !=undefined){		 
				if(Fichas_comparar[i].posicion !=i)return false;
			}
			
		}
		return true;

	}
	public pantallar_reposicion(){
		
		document.getElementById("juego")!.style.display="none"
		document.getElementById("finalizado")!.style.display=""
		document.getElementById("ganar")!.innerHTML="Movimientos:0"

		document.getElementById("fin")!.innerHTML="Movimientos:" +this.movimientos.toString()+"\n\n\n\n\n"+
		"Tiempo:"+time_usuario()+""
		this.movimientos=0
		document.getElementById("reiniciar")!.addEventListener("click",function(){reiniciar_juego()},false)
		document.getElementById("info")!.addEventListener("click",mostrar_info,false)

	}	  
} 