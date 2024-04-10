import { validationResult } from "express-validator";
import { Alquiler } from "../model/modal.js";

export const listarAlquiler = async (req, res) => {
    try {
        const result = await Alquiler.find();
        if(result.length>0){
            res.status(200).json(result);
        } else {
            res.status(404).json({'status': 404, 'message': `No hay ningún alquiler en la base de datos.`});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}

export const registrarAlquiler = async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const {valor, fecha, meses, descripcion, interes, cliente, articulo, estado } = req.body;

        const nuevoAlquiler = new Alquiler({
            valor,
            fecha,
            meses,
            descripcion,
            interes,
            cliente,
            articulo,
            estado
        });
        const save = await nuevoAlquiler.save();
        if(save) {
            res.status(200).json({'status': 200, 'message': 'Se registro el alquiler.'});
        } else {
            res.status(404).json({'status': 404, 'message': 'No se registro el alquiler.'});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const buscarAlquiler = async (req,res) => {
    try {
        const {id} = req.params;
        const buscaAlquiler =  await Alquiler.findById(id);
        if (buscaAlquiler) {
            res.status(200).json(buscaAlquiler);
        } else {
            res.status(404).json({'status': 404, 'message': `No se encontró ningún alquiler con el ID ${id}`});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error. `+e});
    }
}

export const actualizarAlquiler = async (req,res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const {id} = req.params;
        const { valor, fecha, meses, descripcion, interes, cliente, articulo } = req.body;

        const actualizaAlquiler = await Alquiler.findById(id);

        actualizaAlquiler.valor = valor;
        actualizaAlquiler.fecha = fecha;
        actualizaAlquiler.meses = meses;
        actualizaAlquiler.descripcion = descripcion;
        actualizaAlquiler.interes = interes;
        actualizaAlquiler.cliente = cliente;
        actualizaAlquiler.articulo = articulo;

        const save = await actualizaAlquiler.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se actualizo el Alquiler con el ID ${id}`});
        else return res.status(404).json({'status': 404, 'message': `No se encotró el alquiler con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error. `+e});
    }
}

export const desactivarAlquiler = async(req,res) => {
    try {
        const {id} = req.params;
        const desactivaAlquiler = await Alquiler.findById(id);

        desactivaAlquiler.estado = false;
        
        const save = await desactivaAlquiler.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se desactivo el alquiler del ID ${id}`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el alquiler con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500,'message': 'Error. '+e})
    }
}

export const activarAlquiler = async(req,res) => {
    try {
        const {id} = req.params;
        const activaAlquiler = await Alquiler.findById(id);

        activaAlquiler.estado = true;
        
        const save = await activaAlquiler.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se activo el alquiler del ID ${id}`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el alquiler con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500,'message': 'Error. '+e})
    }
}

export const eliminarAlquiler = async (req, res) => {
    try {
        const {id} = req.params;

        const eliminaAlquiler = await Alquiler.findByIdAndDelete(id);

        if(eliminaAlquiler) return res.status(200).json({'status': 200, 'message': `Se elimino el alquiler del ID ${id}`});
        else return res.status(404).json({'status': 404, 'massage': `No se encontró el alquiler con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}
