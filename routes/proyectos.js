
var express = require('express');
var router = express.Router();
const proyectosControllers = require("../controllers/proyectosControllers")

/*RUTEO GENERAL */
/* GET users listing. */
router.get('/', proyectosControllers.getAll);
router.get('/paginate', proyectosControllers.getAllPaginate);//Se crea una nueva URL para paginar el back
router.get('/:id', proyectosControllers.getById);
//Este codigo es para insertar en base
//router.post('/', proyectosControllers.create); cometamos eso para ejemplo de validar solo al alta del proyecto
router.post('/',(req,res,next)=>{req.app.validateUser(req,res,next)},proyectosControllers.create)
//Este codigo es para Actualizar datos en base
router.put('/:id',proyectosControllers.update);
//Este codigo es para Eliminar datos en base
router.delete('/:id', proyectosControllers.delete);

module.exports = router;