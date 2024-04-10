import { validationResult } from "express-validator";
import { Articulo } from "../model/modal.js";

export const listarArticulo = async (req, res) => {
    try {
        const result = await Articulo.find();
        if(result.length>0){
            res.status(200).json(result);
        } else {
            res.status(404).json({'status': 404, 'message': `No hay ningún articulo en la base de datos.`});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}

export const registrarArticulo = async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const {nombre, tipo, estado } = req.body;

        const nuevoArticulo = new Articulo({
            nombre,
            tipo,
            estado
        });
        const save = await nuevoArticulo.save();
        if(save) return res.status(200).json({'status': 200, 'message': 'Se registro el artículo.'});
        else return res.status(404).json({'status': 404, 'message': 'No se registro el artículo.'});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const buscarArticulo = async (req, res) => {
    try {
        const { id } = req.params;

        const buscaArticulo = await Articulo.findById(id);

        if(buscaArticulo) return res.status(200).json(buscaArticulo);
        else return res.status(404).json({'status': 404, 'message': `No se encontró el artículo con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const actualizarArticulo = async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const { id } = req.params;
        const {nombre, tipo } = req.body;

        const actualizaArticulo = await Articulo.findById(id);

        actualizaArticulo.nombre = nombre;
        actualizaArticulo.tipo = tipo;
        
        const save = await actualizaArticulo.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se actualizo el artículo con el ID ${id}.`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el artículo con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const desactivarArticulo = async (req, res) => {
    try {
        const {id} = req.params;

        const estadoArticulo = await Articulo.findById(id);

        estadoArticulo.estado = false;

        const save = await estadoArticulo.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se desactivo el artículo con el ID ${id}.`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el artículo con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const activarArticulo = async (req, res) => {
    try {
        const {id} = req.params;

        const estadoArticulo = await Articulo.findById(id);

        estadoArticulo.estado = true;

        const save = await estadoArticulo.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se activo el artículo con el ID ${id}.`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el artículo con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const eliminarArticulo = async (req, res) => {
    try {
        const {id} = req.params;

        const eliminaArticulo = await Articulo.findByIdAndDelete(id);

        if(eliminaArticulo) return res.status(200).json({'status': 200, 'message': `Se elimino el artículo del ID ${id}`});
        else return res.status(404).json({'status': 404, 'massage': `No se encontró el artículo con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}
