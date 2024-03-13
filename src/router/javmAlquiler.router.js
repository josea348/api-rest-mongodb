import { Router } from "express";
import { actualizarAlquiler, buscarAlquiler, desactivarAlquiler, listarAlquiler, registrarAlquiler } from "../controllers/javmAlquiler.controller.js";
const rutaAlquiler = Router();

rutaAlquiler.get('/javmListar',listarAlquiler);
rutaAlquiler.post('/javmRegistrar',registrarAlquiler);
rutaAlquiler.patch('/javmActualizar/:id',actualizarAlquiler);
rutaAlquiler.get('/javmBuscar/:id',buscarAlquiler);
rutaAlquiler.post('/javmDesactivar/:id',desactivarAlquiler);
rutaAlquiler.post('/javmActivar/:id',actualizarAlquiler);

export default rutaAlquiler;