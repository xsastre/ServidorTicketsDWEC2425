const { User } = require('../models');
const jwt = require('jsonwebtoken');

// Registre d'usuari
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: 'Usuari registrat correctament' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login d'usuari
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Usuari no trobat');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Contrasenya incorrecta');

    // Generar JWT
    const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
