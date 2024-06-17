const mongoose = require('mongoose');
const { Schema } = mongoose;

const EspectadorSchema = new Schema({
  apellido: { type: String, required: true },
  nombre: { type: String, required: true },
  dni: { type: String, required: true },
  email: { type: String, required: true },
  categoria: { type: String, enum: ['Local', 'Extranjero'], required: true }
},{ versionKey: false });

const TicketSchema = new Schema({
  precioTicket: { type: Number, required: true },
  fechaCompra: { type: String, required: true },
  espectador: { type: Schema.Types.ObjectId, ref: 'pto3-Espectadores', required: true }
},{ versionKey: false });

const Espectador = mongoose.models.Espectador || mongoose.model('pto3-Espectadores', EspectadorSchema);
const Ticket = mongoose.models.Ticket || mongoose.model('pto3-Tickets', TicketSchema);

module.exports = { Espectador, Ticket };