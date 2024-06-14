const Espectador = require('../../models/pto3/espectador');

// Dar de alta un Espectador (POST)
async function createEspectador(req, res) {
  try {
    const espectador = new Espectador(req.body);
    await espectador.save();
    res.json({ status: '1', msg: 'Espectador guardado.' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
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
module.exports = {
    createEspectador,
    getEspectador,
    getEspectadores
}