const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Ruta on es guardarà la base de dades SQLite
  logging: false, // Desactiva els logs de Sequelize
});

module.exports = sequelize;
