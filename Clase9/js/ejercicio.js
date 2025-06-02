/**
 * Crea un ejercicio trabajando con eventos el cual 
 * me permita cambiar de color un Div de Azul a Rojo
 * pulsando un boton
 * 
 * una vez cambie del color, volviendo a pulsar vuelva
 * a su color original.
 */

 let caja = document.querySelector("#caja");
 let boton = document.querySelector("#boton");

 boton.addEventListener("click", cambiarColor);

 function cambiarColor(){
    if(caja.style.backgroundColor === "blue"){
        caja.style.backgroundColor = "red";
    }else{
        caja.style.backgroundColor = "blue"
    }
 }



