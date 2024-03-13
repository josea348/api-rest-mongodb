import { Router } from "express";
import { activarCliente, actualizarCliente, buscarCliente, desactivarCliente, listarCliente, registrarCliente } from "../controllers/javmCliente.controller.js";
const rutaCliente = Router();

rutaCliente.get('/javmListar',listarCliente);
rutaCliente.post('/javmRegistrar',registrarCliente);
rutaCliente.put('/javmActualizar/:id',actualizarCliente);
rutaCliente.get('/javmBuscar/:id',buscarCliente);
rutaCliente.patch('/javmDesactivar/:id',desactivarCliente);
rutaCliente.patch('/javmActivar/:id',activarCliente);

export default rutaCliente;