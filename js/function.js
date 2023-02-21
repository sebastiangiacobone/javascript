/**document.getElementById('boton').onclick = function (){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Javascript"

}
**/

/** 

document.addEventListener('click', function(){
    console.log("Hola Mundo desde eventlistener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Javascript"

});
**/

document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola Mundo desde eventlistener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Javascript"

});

document.getElementById('boton_nocturno').addEventListener('click', function(){
   document.body.style.backgroundColor ='#FF0000';

});

document.getElementById('boton_diurno').addEventListener('click', function(){
    document.body.style.backgroundColor ='blue';
 
 });

 

 document.getElementById('boton_ocultar').addEventListener('click', function(){
    document.getElementById('demo').style.display='none';
 });