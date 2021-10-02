const express = require('express');

const app = express();

port = 3000;

app.use( express.static( __dirname + "/public") )

app.get( '/', (req, res)=>{
    
    res.send("Mi respuesta desde express");
    
})

app.use( ( req, res, next ) => {

    res.status(404).send( __dirname + "/public/404.html");

}) 

app.listen(port, () => {

    console.log(`Servidor iniciado en el puerto`, port)

})

