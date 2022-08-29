const { response, request } = require('express');
const { validationResult } = require('express-validator');
//IMPORTACION DE MODELOS
const Cooperativa = require('../models/cooperativa');
const adminGET = async (req = request, res = response) => {
 const { apikey = null, limite = 10, desde = 0 } = req.query;
 //concatenacion de promesas
 const [cooperativas, total] = await Promise.all([
  Cooperativa.find().skip(Number(desde)).limit(Number(limite)),
  Cooperativa.countDocuments(),
 ]);
 res.json({
  cooperativas,
  total,
 });
};
const adminPOST = async (req = request, res = response) => {
 const errors = validationResult(req);
 if (!errors.isEmpty) {
  return res.status(400).json({ msg: 'La matricula no es un numero' });
 }
 //PUEDO DESESCTRUCTURAR EL BODY
 const { matricula, razon_social, direccion, rol } = req.body;
 //VERIFICACIONES
 const existeMatricula = await Cooperativa.findOne({ matricula });
 if (existeMatricula) {
  return res.status(400).json({
   msg: 'La matricula ya existe',
  });
 }
 //INSTANCIA DE NUEVO USUARIO
 const cooperativa = new Cooperativa({
  matricula,
  razon_social,
  direccion,
  rol,
 });
 //ACA GUARDO EL USUARIO
 await cooperativa.save();
 res.json({
  prueba: 'Controlador POST',
  cooperativa,
 });
};
const adminPUT = (req = request, res = response) => {
 const id = req.params.id;
 res.json({
  prueba: 'Controlador PUT',
  id,
 });
};
const adminDELET = (req = response, res) => {
 res.json({
  prueba: 'Controlador DELET',
 });
};
module.exports = {
 adminGET,
 adminDELET,
 adminPOST,
 adminPUT,
};
