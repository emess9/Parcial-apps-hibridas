import express from 'express';
import Juego from '../models/Juego.js'; 
import Consola from '../models/Consola.js'; 

const router = express.Router();

router.post('/api/juegos', async (req, res) => {
  const { titulo, anio, genero, consolaId } = req.body;

  if (!titulo || !anio || !genero || !consolaId) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios: título, año, género y consolaId.' });
  }

  try {
    // Validar que la consola exista
    const consolaExiste = await Consola.findById(consolaId);
    if (!consolaExiste) {
      return res.status(400).json({ error: 'La consola ingresada no existe.' });
    }
    const nuevoJuego = new Juego({
      titulo,
      anio,
      genero,
      consolaId
    });

    // Guardar en la base de datos
    const juegoGuardado = await nuevoJuego.save();

    res.status(201).json({ mensaje: 'Juego creado correctamente', juego: juegoGuardado });
  } catch (error) {
    console.error('Error al crear el juego:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el juego.' });
  }
});

export default router;
