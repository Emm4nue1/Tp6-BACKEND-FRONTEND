const Transaccion = require('../../models/pto2/transaccion');

// Dar de alta una Transaccion (POST)
async function createTransaccion(req, res) {
  try {
    const transaccion = new Transaccion(req.body);
    await transaccion.save();
    res.json({ status: '1', msg: 'Transaccion guardada.' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
  }
}

// Recuperar TODAS las Transacciones Registradas (GET)
async function getTransacciones(req, res) {
  const transacciones = await Transaccion.find();
  res.json(transacciones);
}

// Recuperar el histórico de transacciones de un determinado cliente (GET)
async function getTransaccionesCliente(req, res) {
  const transacciones = await Transaccion.find({ email: req.params.email });
  res.json(transacciones);
}

// Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET)
//revisar
async function getTransaccionesDivisas(req, res) {
  const transacciones = await Transaccion.find({ monedaOrigen: req.params.monedaOrigen, monedaDestino: req.params.monedaDestino });
  res.json(transacciones);
}

module.exports = {
  createTransaccion,
  getTransacciones,
  getTransaccionesCliente,
  getTransaccionesDivisas
};
