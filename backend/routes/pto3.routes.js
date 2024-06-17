//Defino controlador para el manejo de CRUD
const boleteria = require('../controllers/pto3.boleteria.controller');

//Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//Definimos las rutas espectador
router.post('/cliente',boleteria.createEspectador);
router.get('/cliente',boleteria.getEspectadores);
router.get('/cliente/:id',boleteria.getEspectador);
//Definimos las rutas ticket
router.post('/boleto',boleteria.createTicket);
router.get('/boleto',boleteria.getTickets);
router.delete('/boleto/:id',boleteria.deleteTicket);
router.put('/boleto/:id',boleteria.editTicket);
router.get('/boleto/:categoria',boleteria.getEspectadoresPorCategoria);

//Exportamos el modulo de rutas
module.exports = router;