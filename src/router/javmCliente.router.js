import { Router } from "express";
import { activarCliente, actualizarCliente, buscarCliente, desactivarCliente, eliminarCliente, listarCliente, registrarCliente } from "../controllers/javmCliente.controller.js";
import { validarCliente, validarUpdateClient } from "../validacion/validar.cliente.js";
import { validarToken } from "../controllers/autenticacion.js";
const rutaCliente = Router();

rutaCliente.get('/javmListar',validarToken,listarCliente);
rutaCliente.post('/javmRegistrar',validarToken,validarCliente,registrarCliente);
rutaCliente.get('/javmBuscar/:id',validarToken,buscarCliente);
rutaCliente.put('/javmActualizar/:id',validarToken,validarUpdateClient,actualizarCliente);
rutaCliente.patch('/javmDesactivar/:id',validarToken,desactivarCliente);
rutaCliente.patch('/javmActivar/:id',validarToken,activarCliente);
rutaCliente.delete('/javmEliminar/:id',validarToken,eliminarCliente);

export default rutaCliente;