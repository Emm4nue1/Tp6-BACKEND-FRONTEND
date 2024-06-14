const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes (Modificar)

// app.use('/api/agente', require('./routes/agente.route.js'));
// app.use('/api/sector', require('./routes/sector.route'));



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
