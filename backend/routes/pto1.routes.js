//Defino controlador para el manejo de CRUD
const producto = require('../controllers/pto1/mercado.controller');
//Creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//Definimos las rutas
router.post('/',producto.createProducto);
router.get('/',producto.getProductos);
router.delete('/:id',producto.deleteProducto);
router.put('/:id',producto.editProducto);
router.get('/:id',producto.getProductosDestacados);
//Exportamos el modulo de rutas
module.exports = router;