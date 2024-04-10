import { Router } from "express";
import { activarArticulo, actualizarArticulo, buscarArticulo, desactivarArticulo, eliminarArticulo, listarArticulo, registrarArticulo } from "../controllers/javmArticulo.controller.js";
import { validarArticulo, validarUpdateArticulo } from "../validacion/validar.articulo.js";
import { validarToken } from "../controllers/autenticacion.js";
const rutaArticulo = Router();

rutaArticulo.get('/javmListar',validarToken,listarArticulo);
rutaArticulo.post('/javmRegistrar',validarToken,validarArticulo,registrarArticulo);
rutaArticulo.get('/javmBuscar/:id',validarToken,buscarArticulo);
rutaArticulo.put('/javmActualizar/:id',validarToken,validarUpdateArticulo,actualizarArticulo);
rutaArticulo.patch('/javmDesactivar/:id',validarToken,desactivarArticulo);
rutaArticulo.patch('/javmActivar/:id',validarToken,activarArticulo);
rutaArticulo.delete('/javmEliminar/:id',validarToken,eliminarArticulo);

export default rutaArticulo;