var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* GET productos. */
router.get('/', function(req, res, next) {
    db.query("SELECT * FROM tblproductos", function (err, resultado){
        console.log(resultado);
        res.render('productos', { title: 'Productos Disponibles en la tienda', Libros: resultado, align: 'left' });
    });
});


module.exports = router;