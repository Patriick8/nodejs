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

module.exports=connection
/*connection.query("SELECT * FROM tblproductos", function (err, resultado){
    console.log(resultado)
}
);
connection.end();*/