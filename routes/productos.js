
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const productos = [
    {
        id:1,
        name:"RemeraJM",
        price:599,
    },
    {
        id:2,
        name:"PantalonJM",
        price:1999,
    },
  ]  
  res.json(productos);
});
//Este codigo es para insertar en base
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.json(req.body)
});
//Este codigo es para Actualizar datos en base
router.put('/:id', function(req, res, next) {
    console.log(req.params.id)
    res.json(req.body)
});
//Este codigo es para Eliminar datos en base
router.delete('/:id', function(req, res, next) {
    console.log(req.params.id)
    res.json(req.body)
});
module.exports = router;