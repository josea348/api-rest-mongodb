import { Router } from "express";
import { actualizarAlquiler, buscarAlquiler, desactivarAlquiler, activarAlquiler, listarAlquiler, registrarAlquiler, eliminarAlquiler } from "../controllers/javmAlquiler.controller.js";
import { validarAlquiler, validarUpdateAlquiler } from "../validacion/validar.alquiler.js";
import { validarToken } from "../controllers/autenticacion.js";
const rutaAlquiler = Router();

rutaAlquiler.get('/javmListar',validarToken,listarAlquiler);
rutaAlquiler.post('/javmRegistrar',validarToken,validarAlquiler,registrarAlquiler);
rutaAlquiler.get('/javmBuscar/:id',validarToken,buscarAlquiler);
rutaAlquiler.put('/javmActualizar/:id',validarToken,validarUpdateAlquiler,actualizarAlquiler);
rutaAlquiler.patch('/javmDesactivar/:id',validarToken,desactivarAlquiler);
rutaAlquiler.patch('/javmActivar/:id',validarToken,activarAlquiler);
rutaAlquiler.delete('/javmEliminar/:id',validarToken,eliminarAlquiler);

export default rutaAlquiler;