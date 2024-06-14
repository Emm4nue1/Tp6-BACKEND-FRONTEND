const Ticket = require('../../models/pto3/ticket');

// Dar de alta un Ticket (POST)
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
      const ticketActualizado = new Ticket(req.body);
      await Ticket.updateOne({ _id: req.body._id }, ticketActualizado);
      res.json({ status: '1', msg: 'Ticket actualizado' });
    } catch (error) {
      res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
    }
  }
  
  // Recuperar SOLO los Espectadores que tienen una determinada categoría de Espectador
  async function getEspectadoresPorCategoria(req, res) {
    const espectadores = await Espectador.find({ categoria: req.params.categoria });
    res.json(espectadores);
  }

  module.exports = {
    createTicket,
    getTickets,
    deleteTicket,
    editTicket,
    getEspectadoresPorCategoria
  };