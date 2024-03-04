const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productoraController');

router.get('/', productoraController.getAllProductoras);
router.post('/', productoraController.addProductora);
router.patch('/', productoraController.updateProductora);
router.delete('/', productoraController.deleteProductora);

// Exportamos el enrutador para su uso en otras partes de la pp
module.exports = router;
