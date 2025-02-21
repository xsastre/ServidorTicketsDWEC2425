const express = require('express');
const entradesController = require('../controllers/entradesController');

const router = express.Router();

router.post('/comprar', entradesController.comprarEntrada);
router.get('/', entradesController.getEntrades);
router.put('/cancelar/:id', entradesController.cancelarEntrada);

module.exports = router;
