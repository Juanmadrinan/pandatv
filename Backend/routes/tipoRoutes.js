// Requerimos las librerias
const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

router.get('/', tipoController.getAllTipos);
router.post('/', tipoController.addTipo);
router.patch('/', tipoController.updateTipo);
router.delete('/', tipoController.deleteTipo);


// Exportamos el enrutador para su uso en cualquier parte de la app
module.exports = router;