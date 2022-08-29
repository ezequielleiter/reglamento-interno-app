const mongoose = require('mongoose');

//CONECCION CON LA DB

const dbConnection = async () => {
 try {
  const customerSchema = new mongoose.Schema({
   name: String,
   address: String,
   email: String,
  });

  await mongoose.connect('mongodb://localhost:27017/entries');
  //   mongosse.connect(process.env.MONGODB_ATLAS);
  console.log('DB conectada');
 } catch (error) {
  console.log(error);
  throw new Error('Error al iniciar la DB');
 }
};

module.exports = { dbConnection };
