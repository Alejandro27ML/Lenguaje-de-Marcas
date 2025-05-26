//Funciones: Bloque de código que solo se ejecuta cuando se lo llama.

//Funciones Sin parametros.
function saludo(){
    console.log("Hola mundo");
}

saludo();

//Funciones con Parametros.
function operacion(num1,num2){
    let resultado = num1 + num2;
    console.log("Resultado: ",resultado);
}

operacion(10,10);
operacion(20,50);

//Funciones con Return sin parametros.
function retorno1(){
    let numero = 5;
    return numero;
}

let variablex = retorno1

console.log(retorno1());

//Funciones con return y parametros.
function retorno2(numero){
    return numero;
}

console.log(retorno2(20));

/* Diferencias entre var y let
var tiene ambito de funcion y let ambito de bloque.
*/

function testScope(){
    if(true){
        var x = 10;
        let y = 20;    
    }

    console.log(x); // x = 10
    console.log(y); // y = ReferenceError
    // y no se puede llamar fuera del if.

    console.log(a);
    var a = 5;
    console.log(b);
    let b = 10;

    //En este caso a daria error de referencia y b
    //directamente ni se inicia.

    //se puede con var:
    var r = 1;
    var r = 2;
    

}