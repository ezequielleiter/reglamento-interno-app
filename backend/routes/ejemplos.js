const { Router } = require('express');
const {
 ejemploGET,
 ejemploPOST,
 ejemploPUT,
 ejemploDELETE,
} = require('../controllers/ejemplos');
const routerData = Router();

routerData.get('/', ejemploGET);

routerData.post('/', ejemploPOST);

routerData.put('/:id', ejemploPUT);
routerData.delete('/:id', ejemploDELETE);
module.exports = routerData;
