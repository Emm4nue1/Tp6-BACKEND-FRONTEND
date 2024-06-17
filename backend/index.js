const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes (Modificar)
app.use('/producto', require('./routes/pto1.routes'));
app.use('/agencia', require('./routes/pto2.routes'));
app.use('/boleteria', require('./routes/pto3.routes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Setting
const port = process.env.PORT || 3000;
app.set('port', port);

// Starting the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
