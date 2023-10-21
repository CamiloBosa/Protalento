function micallback(){
    console.log("Hola soy callback");
}

micallback
micallback()

//definicion de la funcion
document.querySelector("#Enviar").addEventListener("click",micallback);
//funcion anonima
document.querySelector("#Enviar").addEventListener("click",function(){
    alert("Hola soy una funcion anonima")
});