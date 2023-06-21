var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");



/* POST agregar. */
router.post('/', function(req, res, next) {
  var nuevoProducto = {
    titulo: req.body.titulo,
    imagen: req.body.imagen,
    descripcion: req.body.descripcion,
    precio: req.body.precio
  };

  // Insertar el nuevo producto en la base de datos
  db.query("INSERT INTO tblproductos SET ?", nuevoProducto, function (err, resultado) {
    if (err) {
      console.log(err);
      res.render('error', { message: 'Error al agregar el producto', error: err });
    } else {
      console.log('Producto agregado exitosamente');
      res.redirect('/productos');
    }
  });
});

module.exports = router;
