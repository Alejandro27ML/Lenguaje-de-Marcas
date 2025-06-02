/*
Bucles:
-While
-do-while
-for : Usamos cuando tenemos un número de repeticiones o un rango.

*/

/*for(let i = 1;i<=10;i++){
    console.log(i);
}

let i = 1;
while(i<=10){
    alert(i);
    i++;
}

let i = 1;
do{
    console.log(i);
    i++;
}while(i<=10);

*/

//Bucles con DOM

let cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);


for(let i = 0; i<cajas.length;i++){

cajas[i].style.width = "50px";
cajas[i].style.height = "50px";
cajas[i].style.background = "blue";
cajas[i].style.marginTop = "5px";
cajas[i].style.marginRight = "5px";
cajas[i].style.display = "inline-block";

}

