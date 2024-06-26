const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransaccionSchema = new Schema({
  monedaOrigen: { type: String, required: true },
  cantidadOrigen: { type: Number, required: true },
  monedaDestino: { type: String, required: true },
  cantidadDestino: { type: Number, required: true },
  email: { type: String, required: true },
  tasaConversion: { type: Number, required: true }
},{ versionKey: false });

module.exports = mongoose.models.Transaccion || mongoose.model('pto2-Transacciones', TransaccionSchema);