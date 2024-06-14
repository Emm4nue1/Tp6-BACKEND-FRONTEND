//Defino controlador para el manejo de CRUD
const ticket = require('../controllers/pto2/agencia.controller');
//Creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//Definimos las rutas
router.post('/',ticket.create);
router.get('/',ticket.getTransacciones);
router.get('/:id',ticket.getTransaccionesCliente);
//Revisar
router.get('/',ticket.getTransaccionesDivisas);
//Exportamos el modulo de rutas
module.exports = router;