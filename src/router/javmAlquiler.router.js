import { Router } from "express";
import { actualizarAlquiler, buscarAlquiler, desactivarAlquiler, activarAlquiler, listarAlquiler, registrarAlquiler } from "../controllers/javmAlquiler.controller.js";
const rutaAlquiler = Router();

rutaAlquiler.get('/javmListar',listarAlquiler);
rutaAlquiler.post('/javmRegistrar',registrarAlquiler);
rutaAlquiler.get('/javmBuscar/:id',buscarAlquiler);
rutaAlquiler.put('/javmActualizar/:id',actualizarAlquiler);
rutaAlquiler.patch('/javmDesactivar/:id',desactivarAlquiler);
rutaAlquiler.patch('/javmActivar/:id',activarAlquiler);

export default rutaAlquiler;