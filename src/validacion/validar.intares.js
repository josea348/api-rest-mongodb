import { check } from "express-validator";

export const validarInteres = [
    check('mes', 'El mes es neceario.').isNumeric().not().isEmpty(),
    check('fecha', 'La fecha es obligatorio.').toDate().not().isEmpty(),
    check('valor', 'El valor es necesario.').isNumeric().not().isEmpty(),
    check('alquiler', 'El alquiler es obligatorio.').not().isEmpty(),
    check('estado', 'El estado es obligatorio.').not().isEmpty().isBoolean()
];

export const validarUpdateInteres = [
    check('mes', 'El mes es neceario.').isNumeric().not().isEmpty(),
    check('fecha', 'La fecha es obligatorio.').toDate().not().isEmpty(),
    check('valor', 'El valor es necesario.').isNumeric().not().isEmpty(),
    check('alquiler', 'El alquiler es obligatorio.').not().isEmpty()
];