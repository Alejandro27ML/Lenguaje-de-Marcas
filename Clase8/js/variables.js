//Variables

//variables numéricas.
let numero = 20;

//variable de texto.
let palabra = "palabras";

//Así concatenamos:
console.log("Numero: ", numero);
console.log("Palabra: ", palabra);

//Variable Boolean:
let boleana = true;
console.log("Booleana: ", boleana);

//Variable tipo Array:
let colores = ["Rojo", "Amarillo", "Azul", "Verde"];
console.log("Colores", colores[1]);

//Variable de tipo objeto. (Object: propiedad:valor)
let zumo = {
    ingrediente1: "Fresa",
    ingrediente2: "Naranja",
    ingrediente3:"Platano"
    
};

console.log("Zumo: " , zumo.ingrediente1);

//Variable DOM: Modelo de Objetos del documento.
/*Estructura de objetos que genera el navegador cuando se
carga un documento que se puede alterar mediante JS para cambiar
la dinámica de los contenidos y aspectos de la página.*/ 
let caja = document.querySelector("#caja");
console.log("Caja: ", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

let cajas = document.querySelectorAll(".cajas");
console.log("cajas: ", cajas);

