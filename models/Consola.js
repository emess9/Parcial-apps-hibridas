import mongoose from 'mongoose';

const consolaSchema = new mongoose.Schema({
  nombre: String,
  fabricante: String
});

const Consola = mongoose.model('Consola', consolaSchema);

export default Consola;
