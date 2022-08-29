const { Router } = require('express');
const {
 reglamentoGET,
 reglamentoPOST,
 reglamentoPUT,
} = require('../controllers/data');
const routerData = Router();

routerData.get('/', reglamentoGET);

routerData.post('/', reglamentoPOST);

routerData.post('/', reglamentoPUT);
module.exports = routerData;
