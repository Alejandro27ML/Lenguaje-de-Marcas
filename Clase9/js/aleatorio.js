let numeroAleatorio = document.querySelector("#aleatorio");
let num = 0;

/**
 * 
 * El objeto Math permite realizar tareas matematicas
 * Math.random devuelve un número aleatorio entre 0 (incluido) 1(excluido)
 * Math.floo = redondea al menor.
 * Math.ceil = redondea al mayor.
 * Math.round = devuelve el valor de x redondeado a su entero mas próximo.
 * 
 */

num = Math.random()*10;
numeroAleatorio.innerHTML = num;