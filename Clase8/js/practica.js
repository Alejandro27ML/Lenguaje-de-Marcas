//Mortar la suma por consola:

function suma1(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let suma = num1 + num2;
    console.log("El resultado de la suma es: ", suma);
};


//por alerta
function suma2(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let suma = num1 + num2;
    //alert("Resultado: " +suma);
};

function suma3(){
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma;
}

function funconprompt(){
    let num1 = parseInt(prompt("Introduce un número"));
    let num2 = parseInt(prompt("Introduce otro número"));
    let suma = num1 + num2;

    document.getElementById("resultado").innerHTML = suma;
    //revisar esto
    
}






