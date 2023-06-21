var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* POST modificar producto. */
router.post('/', function(req, res, next) {
    var productId = req.body.productId;
    var title = req.body.title;
    var image = req.body.image;
    var description = req.body.description;
    var price = req.body.price;

    // Realizar la actualización del producto en la base de datos
    db.query(
        "UPDATE tblproductos SET titulo = ?, imagen = ?, descripcion = ?, precio = ? WHERE id = ?",
        [title, image, description, price, productId],
        function (err, resultado) {
            if (err) {
                console.error(err);
                res.render('modificar', { title: 'Modificar Producto', error: 'Error al modificar el producto' });
            } else {
                res.redirect('/productos');
            }
        }
    );
});

module.exports = router;