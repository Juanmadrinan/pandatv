const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

router.get('/', directorController.getAllDirectors);
router.get('/:id', directorController.getDirectorById);
router.post('/', directorController.addDirector);
router.put('/:id', directorController.updateDirector);
router.delete('/:id', directorController.deleteDirector);

// Exportamos el enrutador para su uso en otras partes de la pp
module.exports = router;

