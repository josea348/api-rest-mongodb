import { Cliente, Alquiler, Interes, Articulo } from "../model/modal.js";

export const listarInteresesPagados = async (req, res) => {
    try {
        const {id} = req.params;
        
        const cliente = await Cliente.findById(id, "nombre");
        /* console.log(cliente); */
        if(!cliente || !cliente.nombre) return res.status(404).json({ 'message': 'Cliente no encontrado.' });

        const alquileres = await Alquiler.find({cliente: id}, "descripcion").populate('articulo', 'nombre');
        /* console.log(alquileres); */
        if(alquileres.length === 0) return res.status(404).json({ 'message': 'El cliente no tiene alquileres registrados.' });
        
        const idsAlquileres = alquileres.map(alquiler => alquiler._id);
        const intereses = await Interes.find({ alquiler: { $in: idsAlquileres } }, "mes").populate('valor');
        /* console.log(intereses); */
        if(intereses.length === 0) return res.status(404).json({ 'message': 'El cliente no tiene intereses pagados registrados.' });

        const interesesPagados = intereses.map(interes => {
            return {
                cliente: cliente.nombre,
                /* alquiler: interes.alquiler.descripcion,
                articulo: interes.articulo, */
                alquileres,
                /* mes: interes.mes,
                valor: interes.valor, */
                intereses
            };
        });
        console.log(interesesPagados);

        return res.status(200).json(interesesPagados);
    } catch (e) {
        res.status(500).json({ 'status': 500, 'message': 'Error: ' + e.message });
    }
}

export const listarTotalInteresesMesAnio = async (req, res) => {
    try {
        const { mes, anio } = req.body;

        const intereses = await Interes.find({ estado: true, });

        const totalIntereses = intereses.reduce((total,interes)=>{
            const fechaInteres = new Date(interes.fecha);
            if(fechaInteres.getMonth()+1 === parseInt(mes) && fechaInteres.getFullYear() === parseInt(anio)) {
                total += interes.valor;
            }
            return total;
        }, 0);
        console.log( 'total_intereses '+totalIntereses );

        if(totalIntereses > 0) return res.status(200).json({ 'total_intereses': totalIntereses });
        else return res.status(404).json({'status': 404,'message': 'Hubo un error.'})
    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'Error: ' + error.message });
    }
};

export const listarInteresPendientePorAlquiler = async (req, res) => {
    try {
        const { id } = req.params;

        const alquiler = await Alquiler.findById(id);

        if (!alquiler) {
            return res.status(404).json({ 'message': 'Alquiler no encontrado.' });
        }

        const interesesPendientes = await Interes.find({ alquiler: id, estado: true });

        if (interesesPendientes.length === 0) {
            return res.status(404).json({ 'message': 'No hay intereses pendientes por pagar para este alquiler.' });
        }

        const mesesInteresesPendientes = interesesPendientes.map(interes => {
            return {
                id: interes.id,
                mes: interes.mes,
                interes_pendiente: interes.valor
            };
        });
        console.log(mesesInteresesPendientes);

        res.status(200).json(mesesInteresesPendientes);
    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'Error: '+error.message });
    }
};

export const consultarInteresesPorArticuloPagados = async (req, res) => {
    try {
        const { id } = req.params;

        const articulo = await Articulo.findById(id);
        /* console.log(articulo); */

        if (!articulo) {
            return res.status(404).json({ 'message': 'Articulo no encontrado.' });
        }

        const alquileres = await Alquiler.find({articulo: id});
        /* console.log(alquileres); */

        if (alquileres.length === 0) {
            return res.status(404).json({ 'message': 'Alquiler no se encontrado.' });
        }

        const interesesPagado = await Interes.find({ alquiler: { $in: alquileres.map( alquiler => alquiler._id) }, estado: true });
        /* console.log(interesesPagado); */

        if (interesesPagado.length === 0) {
            return res.status(404).json({ 'message': 'No hay intereses pendientes por pagar para este alquiler.' });
        }

        /* nn */

        const mesesInteresesPagados = interesesPagado.map(interes => {
            return {
                id: interes.id,
                mes: interes.mes,
                interes_pagado: interes.valor
            };
        });
        console.log(mesesInteresesPagados);

        res.status(200).json(mesesInteresesPagados);
    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'Error: '+error.message });
    }
};
