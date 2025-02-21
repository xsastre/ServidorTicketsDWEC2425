const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const entradesRoutes = require('./routes/entrades');
const authMiddleware = require('./middleware/authMiddleware');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/entrades', authMiddleware, entradesRoutes);

// Iniciar servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corrent en http://localhost:${PORT}`);
  });
});
