import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: './src/env/.env'});

/* export const db = await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Se conecto a la base de datos'))
.catch(e => console.error('Errorr al conectar con MongoDB '+e)); */

export const db = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);
        console.log("Se conecto con la base de datos.");
    } catch (e) {
        console.log('Error al conectar con la base de dtos. '+e);
    }
};