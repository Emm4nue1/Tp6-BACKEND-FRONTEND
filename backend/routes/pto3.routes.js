//Defino controlador para el manejo de CRUD
const espectador = require('../controllers/pto3/espectador.controller');
const ticket = require('../controllers/pto3/ticket.controller');

//Creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//Definimos las rutas espectador
router.post('/',espectador.createEspectador);
router.get('/',espectador.getEspectadores);
router.get('/:id',espectador.getEspectador);

//Definimos las rutas ticket
router.post('/',ticket.createTicket);
router.get('/',ticket.getTickets);
router.delete('/:id',ticket.deleteTicket);
router.put('/:id',ticket.editTicket);

//Revisar
router.get('/',ticket.getEspectadoresPorCategoria);

//Exportamos el modulo de rutas
module.exports = router;