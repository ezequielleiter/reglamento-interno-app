const { response, request } = require('express');
const Ejemplos = require('../models/ejemplo');
const ejemploGET = async (req = request, res = response) => {
 const { limite = 10, desde = 0 } = req.query;
 //concatenacion de promesas
 const [ejemplos, total] = await Promise.all([
  Ejemplos.find().skip(Number(desde)).limit(Number(limite)),
  Ejemplos.countDocuments(),
 ]);
 res.json({
  ejemplos,
  total,
 });
};
const ejemploPOST = async (req, res) => {
 //Genero la data que voy a guardar
 const { ejemplo_text, reglamento } = req.body;
 const ejemploSave = new Ejemplos({
  ejemplo_text,
  reglamento,
 });
 //Guardo la categoria de reglamento
 await ejemploSave.save();
 res.status(201).json({
  msg: `La ejemplo se guardo correctamente`,
 });
};
const ejemploPUT = async (req, res) => {
 const { id } = req.params;
 console.log(id);
 const actualizacion = req.body;
 const ejemploActualizado = await Ejemplos.findByIdAndUpdate(
  id,
  actualizacion,
  { new: true }
 );
 res.json(ejemploActualizado);
};

const ejemploDELETE = async (req, res) => {
 const { id } = req.params;
 const ejemploDelet = await Ejemplos.findByIdAndDelete(id);
 res.json({
  msg: 'el ejemplo se borro correctamente',
 });
};

module.exports = {
 ejemploGET,
 ejemploPOST,
 ejemploPUT,
 ejemploDELETE,
};
