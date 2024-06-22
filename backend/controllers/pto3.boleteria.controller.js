const { Espectador, Ticket } = require('../models/pto3.boleteria');

/* Espectador */
// Dar de alta un Espectador (POST)
async function createEspectador(req, res) {
  try {
    const espectador = new Espectador(req.body);
    await espectador.save();
    res.json({ status: '1', msg: 'Espectador guardado.' });
  } catch (error) {
    console.error('Error:', error);
    console.log('Cuerpo de la solicitud:', req.body);
    res.status(400).json({ status: '0', msg: 'Error procesando operacion.', error: error.message });
  }  
}

// Obtener todos los Espectadores (GET)
async function getEspectadores(req, res) {
  const espectadores = await Espectador.find();
  res.json(espectadores);
}

// Obtener UN Espectador (GET)
async function getEspectador(req, res) {
  const espectador = await Espectador.findById(req.params.id);
  res.json(espectador);
}

/* Ticket */
async function createTicket(req, res) {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.json({ status: '1', msg: 'Ticket guardado.' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
  }
}

// Recuperar TODOS los Tickets (GET) incluyendo la información de los Espectadores
async function getTickets(req, res) {
  const tickets = await Ticket.find().populate('espectador');
  res.json(tickets);
}

// Eliminar un Ticket (DELETE)
async function deleteTicket(req, res) {
  try {
    await Ticket.deleteOne({ _id: req.params.id });
    res.json({ status: '1', msg: 'Ticket eliminado' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
  }
}

// Modificar un Ticket (PUT)
async function editTicket(req, res) {
  try {
    await Ticket.updateOne({ _id: req.params.id }, req.body);
    res.json({ status: '1', msg: 'Ticket actualizado' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando la operacion', error: error.message });
  }
}

// Recuperar SOLO los Espectadores que tienen una determinada categoría de Espectador
async function getEspectadoresPorCategoria(req, res) {
  const espectadores = await Espectador.find({ categoria: req.params.categoria });
  res.json(espectadores);
}

module.exports = {
  //Espectador
  createEspectador,
  getEspectador,
  getEspectadores,
  //Ticket
  createTicket,
  getTickets,
  deleteTicket,
  editTicket,
  getEspectadoresPorCategoria
};