import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    identificacion: Number,
    nombre: String,
    direccion: String,
    telefono: String,
    fecha_nac: Date,
    password: String,
    estado: Boolean
});

const articuloSchema = new mongoose.Schema({
    nombre: String,
    tipo: {
        type: String,
        enum: ["Vehiculo", "Oro", "Electrodomesticos", "Maquinaria", "Herramienta"]
    },
    estado: Boolean
});

const alquilerSchema = new mongoose.Schema({
    valor: Number,
    fecha: Date,
    meses: Number,
    descripcion: String,
    interes: Number,
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente'},
    articulo: {type: mongoose.Schema.Types.ObjectId, ref: 'Articulo'},
    estado: Boolean
});

const interesSchema = new mongoose.Schema({
    mes: Number,
    fecha: Date,
    valor: Number,
    alquiler: {type: mongoose.Schema.Types.ObjectId, ref: 'Alquiler'},
    estado: Boolean
})

export const Cliente = mongoose.model('Cliente',clienteSchema);
export const Articulo = mongoose.model('Articulo',articuloSchema);
export const Alquiler = mongoose.model('Alquiler',alquilerSchema);
export const Interes = mongoose.model('Interes',interesSchema);