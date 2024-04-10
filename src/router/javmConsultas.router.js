import { Router } from "express";
import { consultarInteresesPorArticuloPagados, listarInteresPendientePorAlquiler, listarInteresesPagados, listarTotalInteresesMesAnio } from "../controllers/javmConsultas.controller.js";
import { validarToken } from "../controllers/autenticacion.js";
const routerConsulta = Router();

routerConsulta.get('/javmInteresesPagados/:id',validarToken,listarInteresesPagados);
routerConsulta.post('/javmListarTotalIntereses',validarToken,listarTotalInteresesMesAnio);
routerConsulta.get('/javmListarInteresPendiPorAlquiler/:id',validarToken,listarInteresPendientePorAlquiler);
routerConsulta.get('/javmInteresPagadosPorArticulo/:id',validarToken,consultarInteresesPorArticuloPagados);

export default routerConsulta;