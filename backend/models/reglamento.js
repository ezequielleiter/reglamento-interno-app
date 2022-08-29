const { Schema, model } = require('mongoose');

const ReglamentosSchema = Schema({
 tipo: {
  type: String,
  require: [true, 'La tipo de reglamento es obligatorio'],
  unique: true,
 },
});

module.exports = model('Reglamento', ReglamentosSchema);
