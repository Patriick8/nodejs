var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var mysql = require('mysql');

var connection = mysql.createConnection({
    //variables de Conexion
    host : 'localhost',
    user: 'root',
    password : '',
    database : 'ventas'
})

connection.connect(
    (err)=>{
        if(!err){
            console.log('Conexion exitosa');
        }else{
            console.log('Error de  conexion')
        }
        
    }
);

connection.query("SELECT * FROM tblproductos", function (err, resultado){
    console.log(resultado);
}
);
connection.end();
  res.render('index', { title: 'Mi web' });
});



/* GET nosotros. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Esta es mi empresa' });
});

/* GET eliminar. */
router.get('/eliminar', function(req, res, next) {
  res.render('eliminar', { title: 'Eliminar producto' });
});

/* GET agregar. */
router.get('/agregar', function(req, res, next) {
  res.render('agregar', { title: 'Agregar producto' });
});

/* GET modificar */
router.get('/modificar', function(req, res, next) {
  res.render('modificar', { title: 'Modificar Producto' });
});
module.exports = router;
