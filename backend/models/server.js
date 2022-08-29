const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../DB/config');
class Server {
 constructor() {
  this.app = express();
  this.port = process.env.PORT;
  this.adminRoute = '/api/admin';
  this.dataRoute = '/api/reglamentos';
  this.ejemplosRoute = '/api/ejemplos';
  //CONECCION CON BD
  this.coneccionDB();
  //MIDDLEWARE
  this.middleware();
  //RUTAS
  this.routes();
 }
 middleware() {
  //CORS
  this.app.use(cors());
  //LECTURA Y PARSEO DEL BODY
  //de esta manera con express con cualquier peticion la va a intentar cerealizar en un json
  this.app.use(express.json());
  //direccions publicas
  this.app.use(express.static('public'));
 }
 //METODO PARA LA CONECCION CON BD
 async coneccionDB() {
  await dbConnection();
 }

 routes() {
  //de esta manera se puede hacer por un middleware
  this.app.use(this.adminRoute, require('../routes/admin'));
  this.app.use(this.dataRoute, require('../routes/getdata'));
  this.app.use(this.ejemplosRoute, require('../routes/ejemplos'));
  //esta es la manera de hacerlo dentro de este archivo
  //   this.app.get('/api', (req, res) => {
  //    res.json({
  //     prueba: 'prueba',
  //    });
  //   });
  //   this.app.put('/api', (req, res) => {
  //    res.json({
  //     prueba: 'prueba',
  //    });
  //   });
  //   this.app.post('/api', (req, res) => {
  //    res.json({
  //     prueba: 'prueba',
  //    });
  //   });
  //   this.app.delete('/api', (req, res) => {
  //    res.json({
  //     prueba: 'prueba',
  //    });
  //   });
 }
 listen() {
  this.app.listen(this.port, () => {
   console.log(`aplicacion corriendo en puerto ${this.port}`);
  });
 }
}

module.exports = Server;
