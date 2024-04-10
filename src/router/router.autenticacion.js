import { Router } from "express";
import { validarClient } from "../controllers/autenticacion.js";
const routerAutenticacion = Router();

routerAutenticacion.post('/javmValidar',validarClient);

export default routerAutenticacion;