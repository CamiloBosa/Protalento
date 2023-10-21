const express = require ('express');
const router = express.Router();


const ventasController = require('../controllers/ventasController');

router.get('/', ventasController.list);
router.post('/add', ventasController.save);
router.get('/delete/:id', ventasController.delete);

router.get('/update/:id', ventasController.edit);
router.post('/update/:id', ventasController.update);

module.exports = router;