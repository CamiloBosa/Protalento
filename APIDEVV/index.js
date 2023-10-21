// servidor 
const express = require('express');
const app = express();

const rutas = require('./routes/routes')
app.use(express.json());
//Para informar al usuario que no se permitiran enviar objetos o arreglos, esto en el caso de colocar extended false
app.use(express.urlencoded({extended:false}))
// Puerto de la pc a utilizar para estar esperando las peticiones
app.use(rutas);
app.listen(4000)

console.log('Servidor en puerto 4000');


