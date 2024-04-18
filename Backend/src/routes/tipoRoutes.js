// Requerimos las librerias
const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');


router.get('/', tipoController.getAllTipos);
router.get('/:id', tipoController.getTipoById);
router.post('/', tipoController.addTipo);
router.put('/:id', tipoController.updateTipo);
router.delete('/:id', tipoController.deleteTipo);


// Exportamos el enrutador para su uso en cualquier parte de la app
module.exports = router;