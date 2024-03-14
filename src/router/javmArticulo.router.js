import { Router } from "express";
import { activarArticulo, actualizarArticulo, buscarArticulo, desactivarArticulo, listarArticulo, registrarArticulo } from "../controllers/javmArticulo.controller.js";
const rutaArticulo = Router();

rutaArticulo.get('/javmListar',listarArticulo);
rutaArticulo.post('/javmRegistrar',registrarArticulo);
rutaArticulo.get('/javmBuscar/:id',buscarArticulo);
rutaArticulo.put('/javmActualizar/:id',actualizarArticulo);
rutaArticulo.patch('/javmDesativar/:id',desactivarArticulo);
rutaArticulo.patch('/javmActivar/:id',activarArticulo);

export default rutaArticulo;