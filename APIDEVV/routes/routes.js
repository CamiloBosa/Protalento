//rutas entre llaves son especificas, en este caso se llama a Router 
const {Router} = require('express');
const {saludo,edad} = require('../controllers/controllers')
//Se trae el objeto Router y se ejecuta con una nueva función router
const router = Router();
// req = request(llo que va a mi petición ) y res = response( y lo que me va a devolver)
router.get('/hola/:nombre',saludo )

/*router.get('/adios', function(req,res){
    res.status(200).json({"respuesta":"adios"})
})

router.get('/dias', function(req,res){
    res.status(200).json({"respuesta":"Buenos días"})
})
*/

router.post('/regresaDatos',edad )


module.exports = router;