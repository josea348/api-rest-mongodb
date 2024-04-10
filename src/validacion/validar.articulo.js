import { check } from "express-validator";

export const validarArticulo = [
    check('nombre','El nombre es obligatorio y maximo 20 caracteres.').notEmpty().isString().isLength({max:20}),
    check('tipo','Es necesario el tipo del articulo').isIn(['Vehiculo','Oro','Eletrodomesticos','Maquinaria','Herramienta']).notEmpty().isString(),
    check('estado', 'Es necesario el estado').isBoolean().not().isEmpty()
];

export const validarUpdateArticulo = [
    check('nombre','El nombre es obligatorio y maximo 20 caracteres.').notEmpty().isString().isLength({max:20}),
    check('tipo','Es necesario el tipo del articulo').isIn(['Vehiculo','Oro','Electrodomesticos','Maquinaria','Herramienta']).notEmpty().isString(),
];
