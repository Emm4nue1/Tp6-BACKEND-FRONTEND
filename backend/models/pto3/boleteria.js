const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
  precioTicket: { type: Number, required: true },
  fechaCompra: { type: String, required: true },
  espectador: { type: Schema.Types.ObjectId, ref: 'Espectador', required: true }
});

const EspectadorSchema = new Schema({
    apellido: { type: String, required: true },
    nombre: { type: String, required: true },
    dni: { type: String, required: true },
    email: { type: String, required: true },
    categoria: { type: String, enum: ['Local', 'Extranjero'], required: true }
  });

const Espectador = mongoose.models.Espectador || mongoose.model('Espectador', EspectadorSchema);
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);

module.exports = { Espectador, Ticket };