import express from "express";
import bodyParser from 'body-parser';
import { db } from "./src/databases/javmConexion.js";

import rutaAlquiler from "./src/router/javmAlquiler.router.js";
import rutaArticulo from "./src/router/javmArticulo.router.js";
import rutaCliente from "./src/router/javmCliente.router.js";
import rutaInteres from "./src/router/javmInteres.router.js";
import routerAutenticacion from "./src/router/router.autenticacion.js";

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));

servidor.use('/javmCliente',rutaCliente);
servidor.use('/javmArticulo',rutaArticulo);
servidor.use('/javmAlquiler',rutaAlquiler);
servidor.use('/javmInteres',rutaInteres);
servidor.use(routerAutenticacion);

db();
const PORT = 4000;
servidor.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});