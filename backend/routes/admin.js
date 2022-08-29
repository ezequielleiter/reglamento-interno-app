const { Router } = require('express');
const { check } = require('express-validator');
const {
 adminGET,
 adminPUT,
 adminPOST,
 adminDELET,
} = require('../controllers/admin');
//Esto es una herramienta de express
const router = Router();
router.get('/', adminGET);
//con el dos : puedo obtener el dato de la ruta
router.put('/:id', adminPUT);
//Puedo hacer las validaciones en este punto con express-validator, todo lo que
//pongo despues de la segundo coma siempre y tenga una tercera es un middleware
//se envia como array
router.post(
 '/',
 [check('matricula', 'Tiene que ser un numero').isNumeric()],
 adminPOST
);
router.delete('/', adminDELET);

module.exports = router;
