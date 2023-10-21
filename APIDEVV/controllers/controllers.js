const{Pool} = require('pg');

const conexion = new Pool({
    host: 'localhost',
    user: 'Postgres',
    password:'1234',
    database: 'restaurante',
    port:5432 
});

function saludo(req,res){
    const {nombre} = req.params
    res.status(200).json({"respuesta":`Buenas noches ${nombre}`})
}

function edad (req,res){
    const{Edad}=req.body
    if(Edad > 50){
        res.status(200).json("Ya eres viejo")
        return
    }else{
        res.status(200).json("Eres joven")
        return
    }
    res.status(200).json("No hay edad")
}

function empleados(req,res){
    
}

module.exports = {
    saludo,
    edad
}
