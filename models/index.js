const sequelize = require('../config/db');
const User = require('./User');
const Entrada = require('./Entrada');

// Relació: Un usuari pot tenir moltes entrades
User.hasMany(Entrada, { foreignKey: 'userId' });
Entrada.belongsTo(User, { foreignKey: 'userId' });

// Sincronitzar models amb la base de dades
sequelize.sync({ force: true }).then(() => {
  console.log('Base de dades sincronitzada');
});

module.exports = { User, Entrada };
