const { Schema, model } = require('mongoose');

const EjemplosSchema = Schema({
 ejemplo_text: {
  type: String,
  require: [true, 'La tipo de ejemplo debe tener un contenido'],
 },
 reglamento: {
  type: Schema.Types.ObjectId,
  ref: 'Reglamento',
  required: [true, 'El tipo de reglamento es obligatorio'],
 },
});

module.exports = model('Ejemplo', EjemplosSchema);
