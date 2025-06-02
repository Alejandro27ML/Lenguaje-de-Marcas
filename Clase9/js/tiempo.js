let tiempo = document.querySelector("#tiempo");
let segundos = 0;

/*Set INTERVAL (FUNCION, ) -> ejecuta una funcion segun el tiempo que indique */

let intervalo = setInterval(function(){
    segundos++;
    tiempo.innerHTML = segundos;
}, 1000);

/* Set timeout */

setTimeout(function(){
    //clearInterval(intervalo);
    alert("Se acabo el tiempo")
},5000)
