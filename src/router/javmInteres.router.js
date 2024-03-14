import { Router } from "express";
import { actualizarInteres, buscarInteres, listarInteres, registrarInteres, desactivarInteres, activarInteres } from "../controllers/javmInseres.controller.js";
const rutaInteres = Router()

rutaInteres.get('/javmListar',listarInteres);
rutaInteres.post('/javmRegistrar',registrarInteres);
rutaInteres.get('/javmBuscar/:id',buscarInteres);
rutaInteres.put('/javmActualizar/:id',actualizarInteres);
rutaInteres.patch('/javmDesactivar/:id',desactivarInteres);
rutaInteres.patch('/javmActivar/:id',activarInteres);

export default rutaInteres;