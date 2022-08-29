// {
// matricula: '123123',
// razon_social: 'TEO COOP',
// direccion: 'una ub',
// }
const { Schema, model } = require('mongoose');

//ese es el objeto literal con el que se va a guardar en la DB
const CooperativaSchema = Schema({
 matricula: {
  type: String || Boolean,
 },
 razon_social: {
  type: String,
  required: [true, 'La razon social es obligatoria'],
 },
 direccion: {
  type: String,
 },
 rol: {
  type: String,
  required: true,
  emun: ['ADMIN_ROLE', 'USER_ROLE'],
 },
});

module.exports = model('Cooperativa', CooperativaSchema);
