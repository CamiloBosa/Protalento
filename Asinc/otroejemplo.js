function saludar(nombre){
    alert("Hola"+nombre)
}

function despedir(nombre){
    alert("Adios"+nombre)
}

//callback
function procesarEntradaUsuario(callback){
    let nombre = prompt("Ingresa tu nombre");
    callback(nombre)
}

procesarEntradaUsuario(saludar)

procesarEntradaUsuario(despedir)