import { check } from "express-validator";

export const validarAlquiler = [
    check("valor","El valor es obligatorio y debe ser númerico.").notEmpty().isNumeric(),
    check("fecha","Se necesita la fecha.").toDate().not().isEmpty(),
    check("meses","Se necesita los meses y debe ser númerico.").not().isEmpty().isNumeric(),
    check("descripcion","La descripcion es nesesario y maximo de 200 caracteres.").not().isEmpty().isString().isLength({max:200}),
    check("interes","Es obligatorio el interes y debe ser númerico.").not().isEmpty().isNumeric(),
    check("cliente","El ID del cliente es obligatorio.").not().isEmpty(),
    check("articulo","El ID del articulo es obligatorio.").not().isEmpty(),
    check("estado","El etado es necesario.").not().isEmpty().isBoolean()
];

export const validarUpdateAlquiler = [
    check("valor","El valor es obligatorio y debe ser númerico.").not().isEmpty().isNumeric(),
    check("fecha","Se necesita la fecha.").toDate().not().isEmpty(),
    check("meses","Se necesita los meses y debe ser númerico.").not().isEmpty().isNumeric(),
    check("descripcion","La descripcion es nesesario y maximo de 200 caracteres.").not().isEmpty().isString().isLength({max:200}),
    check("interes","Es obligatorio el interes y debe ser númerico.").not().isEmpty().isNumeric(),
    check("cliente","El ID del cliente es obligatorio.").not().isEmpty(),
    check("articulo","El ID del articulo es obligatorio.").not().isEmpty()
];
