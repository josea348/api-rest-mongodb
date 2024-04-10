import { validationResult } from "express-validator";
import { Interes } from "../model/modal.js";

export const listarInteres = async (req, res) => {
    try {
        const result = await Interes.find();
        if(result.length>0){
            res.status(200).json(result);
        } else {
            res.status(404).json({'status': 404, 'message': `No hay ningún interes en la base de datos.`});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}

export const registrarInteres = async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const {mes, fecha, valor, alquiler, estado} = req.body;

        const nuevoInteres = new Interes({
            mes,
            fecha,
            valor,
            alquiler,
            estado
        });
        const save = await nuevoInteres.save();
        if(save) {
            res.status(200).json({'status': 200, 'message': 'Se registro el interes.'});
        } else {
            res.status(404).json({'status': 404, 'message': 'No se registro el interes.'});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const buscarInteres = async (req,res) => {
    try {
        const {id} = req.params;
        const buscaInteres = await Interes.findById(id);
        const buscar = await buscaInteres.save();
        if(buscar) return res.status(200).json(buscar);
        else return res.status(404).json({'status': 404, 'message': `No se encontró ningún interes con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error. `+e});
    }
}

export const actualizarInteres = async (req,res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const {id} = req.params;
        const { mes, fecha, valor, alquiler } = req.body;

        const actualizaInteres = await Interes.findById(id);

        actualizaInteres.mes = mes;
        actualizaInteres.fecha = fecha;
        actualizaInteres.valor = valor;
        actualizaInteres.alquiler = alquiler;

        const save = await actualizaInteres.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se actualizo el interes con el ID ${id}`});
        else return res.status(404).json({'status': 404, 'message': `No se encotró el interes con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error. `+e});
    }
}

export const desactivarInteres = async(req,res) => {
    try {
        const {id} = req.params;
        const desactivaInteres = await Interes.findById(id);

        desactivaInteres.estado = false;
        
        const save = await desactivaInteres.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se desactivo el interes del ID ${id}`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el interes con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500,'message': 'Error. '+e})
    }
}

export const activarInteres = async(req,res) => {
    try {
        const {id} = req.params;
        const activaInteres = await Interes.findById(id);

        activaInteres.estado = true;
        
        const save = await activaInteres.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se activo el interes del ID ${id}`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el interes con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500,'message': 'Error. '+e})
    }
}

export const eliminarInteres = async (req, res) => {
    try {
        const {id} = req.params;

        const eliminaInteres = await Interes.findByIdAndDelete(id);

        if(eliminaInteres) return res.status(200).json({'status': 200, 'message': `Se elimino el interes del ID ${id}`});
        else return res.status(404).json({'status': 404, 'massage': `No se encontró el interes con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}
