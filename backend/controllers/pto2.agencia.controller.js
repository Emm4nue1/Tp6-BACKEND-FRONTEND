const Transaccion = require('../models/pto2.transaccion');

// Dar de alta una Transaccion (POST)
async function createTransaccion(req, res) {
  console.log('req.body:', req.body); // Esto te mostrará la estructura de los datos recibidos
  try {
    const transaccion = new Transaccion(req.body);
    await transaccion.save();
    res.json({ status: '1', msg: 'Transaccion guardada.' });
  } catch (error) {
    console.error('Error:', error); // Esto imprimirá el error específico
    res.status(400).json({ status: '0', msg: 'Error procesando operacion.', error: error.message });
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
