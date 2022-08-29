const { response, request } = require('express');
const Reglamentos = require('../models/reglamento');

const reglamentoGET = async (req = request, res = response) => {
 const { limite = 10, desde = 0, id } = req.query;
 //concatenacion de promesas
 const [find, reglamentos, total] = await Promise.all([
  Reglamentos.find({ _id: id }),
  Reglamentos.find().skip(Number(desde)).limit(Number(limite)),
  Reglamentos.countDocuments(),
 ]);
 res.json({
  find,
  reglamentos,
  total,
 });
};

const reglamentoPOST = async (req, res) => {
 const reglamento = req.body.tipo.toUpperCase().replace(' ', '_');
 const reglamentoDB = await Reglamentos.findOne({ tipo: reglamento });
 if (reglamentoDB) {
  return res.status(400).json({
   msg: `La categoria de reglamento ${reglamento} ya existe`,
  });
 }
 //Genero la data que voy a guardar
 const reglamentoSave = new Reglamentos({
  tipo: reglamento,
 });
 //Guardo la categoria de reglamento
 await reglamentoSave.save();
 res.status(201).json({
  msg: `La categoria ${reglamento} se guardo correctamente`,
 });
};
const reglamentoPUT = async (req, res) => {
 const { tipo, ejemplo } = req.body;
 const reglamento = new Reglamentos({
  tipo,
  ejemplo,
 });
 await reglamento.save();
 res.json({
  reglamento,
 });
};
module.exports = {
 reglamentoGET,
 reglamentoPOST,
 reglamentoPUT,
};
