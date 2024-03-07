const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productoraController');

router.get('/', productoraController.getAllProductoras);
router.get('/:id', productoraController.getProductoraById);
router.post('/', productoraController.addProductora);
router.patch('/:id', productoraController.updateProductora);
router.delete('/:id', productoraController.deleteProductora);

// Exportamos el enrutador para su uso en otras partes de la pp
module.exports = router;
