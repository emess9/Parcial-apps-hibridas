import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { consolas, juegos } from './data.js';
import Consola from './models/Consola.js';
import Juego from './models/Juego.js';
import connectDB from './config/database.js';

dotenv.config();

const importarDatos = async () => {
  try {
    await connectDB();

    // Eliminar datos existentes
    await Consola.deleteMany();
    await Juego.deleteMany();

    // Insertar consolas
    const consolasInsertadas = await Consola.insertMany(consolas);

    // Asociar juegos con el _id de su consola correspondiente
    const juegosConIdsMongo = juegos.map(juego => {
      const consola = consolasInsertadas.find(c => c.nombre === juego.consolaNombre);
      return {
        titulo: juego.titulo,
        anio: juego.anio,
        genero: juego.genero,
        consolaId: consola._id
      };
    });

    // Insertar juegos
    await Juego.insertMany(juegosConIdsMongo);

    console.log('✅ Datos insertados correctamente en MongoDB Atlas');
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar los datos:', error);
    process.exit(1);
  }
};

importarDatos();
