import { validationResult } from "express-validator";
import { Cliente } from "../model/modal.js";


export const listarCliente = async (req, res) => {
    try {
        const result = await Cliente.find();
        if(result.length>0){
            res.status(200).json(result);
        } else {
            res.status(404).json({'status': 404, 'message': `No hay ningún cliente en la base de datos.`});
        }
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}

export const registrarCliente = async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const {identificacion, nombre, direccion, telefono, fecha_nac, password, estado} = req.body;

        const nuevoArticulo = new Cliente({
            identificacion,
            nombre,
            direccion,
            telefono,
            fecha_nac,
            password,
            estado
        });
        const save = await nuevoArticulo.save();
        if(save) return res.status(200).json({'status': 200, 'message': 'Se registro el cliente con exito.'});
        else return res.status(404).json({'status': 404, 'message': `No se registro el cliente.`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const buscarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        
        const buscaCliente = await Cliente.findById(id);
        
        if(buscaCliente) return res.status(200).json(buscaCliente);
        else return res.status(404).json({'status': 404, 'message': `No se encontró el cliente con el ID ${id}.`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const actualizarCliente = async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(404).json(error.array());
        }

        const { id } = req.params;
        const { identificacion, nombre, direccion, telefono, fecha_nac, password } = req.body;

        const actualizaCliente = await Cliente.findById(id);

        actualizaCliente.identificacion = identificacion;
        actualizaCliente.nombre = nombre;
        actualizaCliente.direccion = direccion;
        actualizaCliente.telefono = telefono;
        actualizaCliente.fecha_nac = fecha_nac;
        actualizaCliente.password = password;
        
        const save = await actualizaCliente.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se actualizó el cliente con el ID ${id}.`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró o no se actalizó el cliente con el ID ${id}.`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const desactivarCliente = async (req, res) => {
    try {
        const {id} = req.params;

        const estadoCliente = await Cliente.findById(id);

        estadoCliente.estado = false;

        const save = await estadoCliente.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se desactivo el cliente con el ID ${id}.`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el cliente con el ID ${id}.`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const activarCliente = async (req, res) => {
    try {
        const {id} = req.params;

        const estadoCliente = await Cliente.findById(id);

        estadoCliente.estado = true;

        const save = await estadoCliente.save();
        if(save) return res.status(200).json({'status': 200, 'message': `Se activo el cliente con el ID ${id}.`});
        else return res.status(404).json({'status': 404, 'message': `No se encontró el cliente con el ID ${id}.`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': 'Error. '+e});
    }
}

export const eliminarCliente = async (req, res) => {
    try {
        const {id} = req.params;

        const eliminaCliente = await Cliente.findByIdAndDelete(id);

        if(eliminaCliente) return res.status(200).json({'status': 200, 'message': `Se elimino el cliente del ID ${id}`});
        else return res.status(404).json({'status': 404, 'massage': `No se encontró el cliente con el ID ${id}`});
    } catch (e) {
        res.status(500).json({'status': 500, 'message': `Error: `+e});
    }
}
