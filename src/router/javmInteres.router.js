import { Router } from "express";
import { actualizarInteres, buscarInteres, listarInteres, registrarInteres, desactivarInteres, activarInteres, eliminarInteres } from "../controllers/javmInseres.controller.js";
import { validarInteres, validarUpdateInteres } from "../validacion/validar.intares.js";
import { validarToken } from "../controllers/autenticacion.js";
const rutaInteres = Router()

rutaInteres.get('/javmListar',validarToken,listarInteres);
rutaInteres.post('/javmRegistrar',validarToken,validarInteres,registrarInteres);
rutaInteres.get('/javmBuscar/:id',validarToken,buscarInteres);
rutaInteres.put('/javmActualizar/:id',validarToken,validarUpdateInteres,actualizarInteres);
rutaInteres.patch('/javmDesactivar/:id',validarToken,desactivarInteres);
rutaInteres.patch('/javmActivar/:id',validarToken,activarInteres);
rutaInteres.delete('/javmEliminar',validarToken,eliminarInteres);

export default rutaInteres;