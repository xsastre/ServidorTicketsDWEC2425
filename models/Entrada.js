const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Entrada = sequelize.define('Entrada', {
  eventName: { type: DataTypes.STRING, allowNull: false },
  purchaseDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  isCancelled: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Entrada;
