var express = require ('express');
var router = express.Router();
const categoriasControllers = require("../controllers/categoriasControllers")

router.get('/', categoriasControllers.getAll);
router.post('/', categoriasControllers.create);
module.exports = router;
