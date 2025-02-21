const { Entrada, User } = require('../models');

// Comprar entrada
exports.comprarEntrada = async (req, res) => {
  const { eventName } = req.body;
  try {
    const entrada = await Entrada.create({ eventName, userId: req.userId });
    res.status(201).json(entrada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Veure entrades de l'usuari
exports.getEntrades = async (req, res) => {
  try {
    const entrades = await Entrada.findAll({ where: { userId: req.userId } });
    res.json(entrades);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Cancel·lar entrada
exports.cancelarEntrada = async (req, res) => {
  const { id } = req.params;
  try {
    const entrada = await Entrada.update(
      { isCancelled: true },
      { where: { id, userId: req.userId }, returning: true }
    );
    res.json(entrada[1][0]); // Retorna l'entrada actualitzada
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
