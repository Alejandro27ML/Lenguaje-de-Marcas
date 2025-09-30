let a = 5;
let b = 10;

//imaginamos que tenemos que mirar si a<b o a>b o a = b:

if(a>b){
    console.log(" a es mayor que b.");
}else if (a === b){
    console.log("a es igual que b.");
}else{
    console.log("a es menor que b.")
}

// = asignaciñon a=10
//== comparación debil a==b -> True/False 5 == '5' -> True: número y String se convierte al mismo tipo y se comparan.
//=== comparación estricta 5==='5' -> False No se convierte.

//operadores que podemos usar <, > , >= , <= , == , === , != , !== , && , ||

let dia = "Lunes";
switch(dia){
    case "Lunes":
        console.log("Toca Estudiar JS")
        break;
    case "Martes":
        console.log("Toca Estudiar SQL")
        break;
    case "Miercoles": 
    console.log("Toca Estudiar Python")
        break;
    default:
        console.log("Toca descanso.")
        

}