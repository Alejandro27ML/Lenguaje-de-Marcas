/*Eventos desde DOM */

let recuadro = document.querySelector("#recuadro");

/*
function cambiarColor(){
    recuadro.style.backgound = "red";
}

*/

 /* Eventos desde JS */

 let boton = document.querySelector("#boton");

 boton.addEventListener("click",moverCaja);

 function moverCaja(){
    recuadro.style.width = "500px";
    recuadro.style.transition = "1s";

 }