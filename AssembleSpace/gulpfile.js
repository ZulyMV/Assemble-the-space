//var rename = require("gulp-rename");//renombrar 
var gulp = require('gulp'); // CADENAS INTELIGENTES DDE TEXTO
var glob = require('glob'); 
var ts = require('gulp-typescript'); // TYPECRIPT  PARA GULP 
var tsProject = ts.createProject('tsconfig.json'); // CONFIGURACION PARA TYPESCRIPT 
var browserSync = require('browser-sync').create();//  servidor browserSync cargador de browsersync
var sass = require('gulp-sass'); // modulos para sass de gulp
var replace = require('gulp-replace');// replazar texto para string 
var exec = require('child_process').exec;// ejecutar procesos del sistema
var del = require('del');
 
 

gulp.task('scripts', async function () { /*   TAREA DE GULP PARA TYPESCRITP */
    return tsProject.src() //  carpetea root 
    .pipe(tsProject())   //  configuracion  del copilador
    .js.pipe(gulp.dest('./www/js')) // copilar a javascript 
    .pipe(browserSync.reload({stream:true}));
  });
 
gulp.task('copilar',async function(){
  console.log('---reload--')
 // exec('npm run start');
  browserSync.reload;
});
/*  @Decapricate  : al usar webpack se usa el Browwsersync webpack  para live_reload
*/
gulp.task('servidor-b', function() {
  browserSync.init({
      server: "./www",
      port:8080,
      host:"http://10.0.2.2:3000"
  });
   gulp.watch("www/**/*", gulp.series('copilar'));
   //gulp.watch("js/type/**/*.js", gulp.series('copilar'));
   //gulp.watch("lib/type/**/*.js", gulp.series('copilar'));
   gulp.watch("www/*.html").on('change', gulp.series('copilar'));
});


/* funcion servidor modificada de   https://stackoverflow.com/questions/46262816/cordova-hot-reloading-on-device-without-ionic
 todo derechos reservados al creador del  enlace
Notas:
*solo funciona para android en cordova-android 8.0.1 ,instalr pluguin 
*para realizar la conexion servidor(brosersync) y  aplicacioon la direcion url y puerto debe ser el mismo
*ejecutar subir-servidor en caso de  desarrollo
* ejecutar bajar-servidor en caso de baja de  produccion
*Recordar cambiar el archivo config.xml asi
***agregar en la etiqueta widget 
<widget ... xmlns:android="http://schemas.android.com/apk/res/android" ....>
***agregar en la etiqueta android
  <platform name="android">
  .....
    <allow-intent href="market:*" />
 <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application">
      <application android:usesCleartextTraffic="true" />
  </edit-config>
  ....
    </platform>

    
*/
 
 gulp.task('enlace-cordova-lib', async function () { 
        let argv = require('yargs').argv;
     // var files = glob.sync('./platforms/android/platform_www/cordova.js'); // OBTIENE UN STREAM DE LA CARPETA
        let android = ! (argv.android === undefined ) ;
        let browser = !(argv.browser === undefined)  ;
        console.log('android :'+android)
        console.log('browser :'+browser)
        let datos='';
        exec("cordova platform version android  "  ,function (err,stdout,stderr) { console.log(stderr),datos=stdout })
        if(datos.localeCompare('android 8.1.0')  && android){
          
        //gulp.src('./platforms/android/platform_www/**/*').pipe(gulp.dest('./www' ))
         gulp.src('./platforms/android/app/src/main/assets/www/cordova_plugins.js').pipe(gulp.dest('./www' ))
         gulp.src('./platforms/android/app/src/main/assets/www/plugins/**/*').pipe(gulp.dest('./www/plugins'  ))  
         gulp.src('./platforms/android/app/src/main/assets/www/cordova-js-src/**/*').pipe(gulp.dest('./www/cordova-js-src'))
         gulp.src('./platforms/android/app/src/main/assets/www/cordova.js').pipe(gulp.dest('./www'))
 
         console.log('android 8.0.1 proceso completo')    

        }else if(datos.localeCompare('browser 6.0.0') && browser){
 
         // gulp.src('./platforms/browser/platform_www/cordova.js').pipe(gulp.dest('./www'));gulp.src('./platforms/browser/platform_www/cordova_plugins.js').pipe(gulp.dest('./www')) ;gulp.src('./platforms/browser/platform_www/plugins/**/*').pipe(gulp.dest('./www/plugins' ))  ;gulp.src('./platforms/browser/platform_www/cordova-js-src/**/*').pipe(gulp.dest('./www/cordova-js-src' ))
        gulp.src('./platforms/browser/platform_www/**/*').pipe(gulp.dest('www'))
         console.log('browser 8.0.1 proceso completo')        
         }  
   }); 
 
        
 

gulp.task('remove-cordova-lib',async function () {
  const deletedPaths = await del(['www/**/*','www/cordova-js-src/**/*','www/cordova.js',' www/cordova_plugins.js',' www/plugins/**/*']);
//  console.log('Archivo eliminados '+deletedPaths.join('\b'))
  /**
 *               var path=glob.sync('www/cordova-js-src')
              var options = {
                continueOnError: true
              };
                 exec('rm www/cordova.js', options)
                 exec('rm www/cordova_plugins.js', options)
                 exec('rm -Rf www/plugins', options);
                 exec("rm -Rf "+path[0])
 */
         
            });


        
 gulp.task('cordova-enlace-servidor',  async function () {
            return gulp.src(['config.xml'])
              .pipe(replace(/(<content src=\")(.+)(\" \/>)/g, "$1http://10.0.2.2:8080$3"))
              .pipe(gulp.dest('.'));
          });
         
 gulp.task('cordova-enlace-cliente', async function () {
            return gulp.src(['config.xml'])
              .pipe(replace(/(<content src=\")(.+)(\" \/>)/g, "$1index.html$3"))
              .pipe(gulp.dest('.'));
          });
/**
 * 
 
gulp.task('subida-servidor',gulp.parallel('remove-cordova-lib','enlace-cordova-lib',
        'cordova-enlace-servidor'), async function(){})

gulp.task('subida-servidor-b',gulp.parallel('remove-cordova-lib','enlace-cordova-lib',
        'cordova-enlace-cliente'), async function(){})

gulp.task('bajada-servidor',gulp.parallel('remove-cordova-lib',
        'cordova-enlace-cliente','servidor-b'))
 */
        
//gulp.task('default', gulp.parallel( 'scripts','copilar'));  
gulp.task('default', async function(){});  
  

gulp.task('subida-servidor',gulp.series('default','remove-cordova-lib','enlace-cordova-lib',
'cordova-enlace-servidor'), async function(){})

gulp.task('bajada-servidor',gulp.series('default','remove-cordova-lib',
'cordova-enlace-cliente'));
 