const Producto = require("../../models/pto1/producto");

// Crea un nuevo producto
async function createProducto(req, res) {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({ status: '1', msg: 'Producto guardado.' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando operacion.' });
  }
}

// Obtiene todos los productos
async function getProductos(req, res) {
  const productos = await Producto.find();
  res.json(productos);
}

// Elimina un producto
async function deleteProducto(req, res) {
  try {
    await Producto.deleteOne({ _id: req.params.id });
    res.json({ status: '1', msg: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
  }
}

// Actualiza un producto
async function editProducto(req, res) {
  try {
    await Producto.updateOne({ _id: req.body._id }, req.body);
    res.json({ status: '1', msg: 'Producto actualizado' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando la operacion' });
  }
}


// Obtiene los productos destacados
async function getProductosDestacados(req, res) {
  const productos = await Producto.find({ destacado: true });
  res.json(productos);
}

module.exports = {
  createProducto,
  getProductos,
  deleteProducto,
  editProducto,
  getProductosDestacados
};


