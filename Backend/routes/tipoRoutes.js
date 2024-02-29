// Requerimos las librerias
const express = require('express');
const router = express.Router();
const Tipo = require('../models/tipo');
const tipoController = require('../controllers/tipoController');

router.get('/', tipoController.getAllTipos);
router.post('/', tipoController.addTipo);


// Exportamos el enrutador para su uso en cualquier parte de la app
module.exports = router;