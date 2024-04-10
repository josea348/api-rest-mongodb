import { Cliente } from "../model/modal.js";
import jwt from "jsonwebtoken";

export const validarClient = async (req,res) => {
    try {
        let { identificacion, password } = req.body;
        const client = await Cliente.findOne({ identificacion: identificacion, password: password }, { _id: 1, identificacion: 1, nombre: 1, estado:1 });
        if(client) {
            let token = jwt.sign({client}, process.env.AUT_SECRET, {expiresIn: process.env.AUT_EXPIRE});
            return res.status(200).json({'client': client, 'token': token, 'message': 'Usuario autoridado'});
        } else {
            return res.status(404).json({'status': 404, 'message': 'Usuario no autorizado.'});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const validarToken = async (req,res,next) => {
    let token_client = req.headers['token'];
    if (!token_client) {
        return res.status(404).json({'message': 'Se requiere el token.'});
    } else {
        const token = jwt.verify(token_client, process.env.AUT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(404).json({'message': 'Token incorrecto'});
            } else {
                next();
            }
        });
    }
}