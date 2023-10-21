let x = 1;

function resolve(){
    console.log("Resolver promesa")
}
function resolve(){
    console.log("Rechazar promesa")
}

const promesa = new Promise((resolve,reject)=>{
    if(x==1)
    resolve(true);
    else
    reject(false);
});

promesa.then(function(resultado){
        console.log(resultado)
        console.log("El primer paso está hecho!");
        return 100;
}).then(function(numero){
    console.log(numero)
    console.log("Listo el segundo then está hecho")
}).then(function(cadena){
    console.log(cadena);
    console.log("El final ha llegado");
    return{
        resultado: "success"
    }
}).catch(function(){
    console.log("Error al ejecutar")
})