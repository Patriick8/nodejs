var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

/* POST eliminar producto. */
router.post('/', function(req, res, next) {
    var productId = req.body.productId;

    // Realizar la eliminación del producto en la base de datos
    db.query("DELETE FROM tblproductos WHERE id = ?", [productId], function (err, resultado) {
        if (err) {
            console.error(err);
            res.render('eliminar', { title: 'Eliminar Producto', error: 'Error al eliminar el producto' });
        } else {
            res.redirect('/productos');
        }
    });
});

module.exports = router;