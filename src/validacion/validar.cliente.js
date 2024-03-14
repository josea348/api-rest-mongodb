import { check } from "express-validator";

export const validarCliente = [
    check('identificacion', 'La identificacion es obligatoria.').isNumeric(),
    check('nombre', 'El nombre es necesario').not().isEmpty()
];