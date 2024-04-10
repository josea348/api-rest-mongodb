import { check } from "express-validator";

export const validarCliente = [
    check('identificacion', 'La identificación es obligatoria y debe ser numerico.').isNumeric().not().isEmpty(),
    check('nombre', 'El nombre es obligatorio, y debe de ser menor o igual a 50 caracteres.').not().isEmpty().isString().isLength({max:50}),
    check('direccion', 'La dirección es obligatorio.').not().isEmpty().isString(),
    check('telefono', 'El telefono es necesario.').not().isEmpty().isString(),
    check('fecha_nac', 'La fecha se necesita.').toDate().not().isEmpty(),
    check('password', 'La contraseña es obligatorio y maximo de 14 carateres.').isString().not().isEmpty().isLength({max:14}),
    check('estado', 'El etado es necesario.').isBoolean().not().isEmpty()
];

export const validarUpdateClient = [
    check('identificacion', 'La identificación es obligatoria y es numerico.').isNumeric().not().isEmpty(),
    check('nombre', 'El nombre es obligatorio, y debe de ser menor o igual a 50 caracteres.').not().isEmpty().isString().isLength({max:50}),
    check('direccion', 'La dirección es obligatorio.').not().isEmpty().isString(),
    check('telefono', 'El telefono es necesario.').not().isEmpty().isString(),
    check('fecha_nac', 'La fecha se necesita.').toDate().not().isEmpty(),
    check('password', 'La contraseña es obligatorio y maximo de 14 carateres.').isString().not().isEmpty().isLength({max:14}),
];