function llamaMiCallback(nombre,callback){
       setTimeout(function(){
        console.log(`hola, ${nombre}`)
        callback(); 
       },5000);  
}

function queHaces(){        
    setTimeout (function(){
        console.log("Qué haces?");
    },3000)
}

function dondeEstas(){
    setTimeout (function(){
        console.log("¿Dónde estás?");
    },3000)
}


llamaMiCallback("Adrian",queHaces);
llamaMiCallback("Adrian",dondeEstas);
llamaMiCallback("Adrian",function(){
    console.log("Te extraño")
});
llamaMiCallback("Adrian",() =>{
    console.log("Te extraño")
});
queHaces()  
