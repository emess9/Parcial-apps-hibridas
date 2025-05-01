import mongoose from 'mongoose';

const juegoSchema = new mongoose.Schema({
  titulo: String,
  anio: Number,
  genero: String,
  consolaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consola'
  }
});

const Juego = mongoose.model('Juego', juegoSchema);

export default Juego;
