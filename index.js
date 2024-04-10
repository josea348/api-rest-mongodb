import express from "express";
import bodyParser from 'body-parser';
import { db } from "./src/databases/javmConexion.js";

import rutaCliente from "./src/router/javmCliente.router.js";
import rutaArticulo from "./src/router/javmArticulo.router.js";
import rutaAlquiler from "./src/router/javmAlquiler.router.js";
import rutaInteres from "./src/router/javmInteres.router.js";
import routerAutenticacion from "./src/router/router.autenticacion.js";
import routerConsulta from "./src/router/javmConsultas.router.js";

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));
servidor.set('view engine','ejs');
servidor.set('views','./view');

servidor.use(express.static('./public'));

servidor.get('/documents',(req,res)=>{
    res.render('documentation.ejs');
})

servidor.use('/javmCliente',rutaCliente);
servidor.use('/javmArticulo',rutaArticulo);
servidor.use('/javmAlquiler',rutaAlquiler);
servidor.use('/javmInteres',rutaInteres);
servidor.use(routerAutenticacion);
servidor.use(routerConsulta);

db();
const PORT = 4000;
servidor.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});