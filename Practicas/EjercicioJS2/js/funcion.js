function calcularDiaSemana1(){
    let num = parseInt(prompt("Ingresa un número."));
    let respuesta;
    if(num == 1){
        respuesta = "Lunes";
    }else if (num == 2){
        respuesta = "Martes";
    }else if (num == 3){
        respuesta = "Miercoles";
    }else if (num == 4){
        respuesta = "Jueves";
    }else if (num == 5){
        respuesta = "Viernes";
    }else if (num == 6){
        respuesta = "Sabado";
    }else if (num == 7){
        respuesta = "Domingo";  
    }else{
        respuesta = "Error";

        document.getElementById("parrafo1").innerHTML= respuesta;
    } 
}     
    
function calcularDiaSemana2(){
    let num = parseInt(prompt("Ingresa un número."));
    let respuesta;
    switch(num){
        case 1:
            respuesta = "Lunes";
        case 2:
            respuesta = "Lunes";
        case 3:
            respuesta = "Lunes";
        case 4:
            respuesta = "Lunes";
        case 5:
            respuesta = "Lunes";
        case 6:
            respuesta = "Lunes";    
        case 7:
            respuesta = "Lunes";  
        default:
            respuesta = "Lunes"; 
    }

}

    document.getElementById("parrafo2").innerHTML= respuesta;

function calcularDiaSemana3(){
    let num = document.getElementById(numero_ejercicio3).value;
    let respuesta;
    if(num == 1){
        respuesta = "Lunes";
    }else if (num == 2){
        respuesta = "Martes";
    }else if (num == 3){
        respuesta = "Miercoles";
    }else if (num == 4){
        respuesta = "Jueves";
    }else if (num == 5){
        respuesta = "Viernes";
    }else if (num == 6){
        respuesta = "Sabado";
    }else if (num == 7){
        respuesta = "Domingo";  
    }else{
        respuesta = "Error";

        document.getElementById("parrafo3").innerHTML= respuesta;;
    }  

}

function calcularDiaSemana2(){
    let num = parseInt(document.getElementById(numero_ejercicio4).value);
    let respuesta;
    switch(num){
        case 1:
            respuesta = "Lunes";
        case 2:
            respuesta = "Lunes";
        case 3:
            respuesta = "Lunes";
        case 4:
            respuesta = "Lunes";
        case 5:
            respuesta = "Lunes";
        case 6:
            respuesta = "Lunes";    
        case 7:
            respuesta = "Lunes";  
        default:
            respuesta = "Lunes"; 
    }

}

    document.getElementById("parrafo4").innerHTML= respuesta;

