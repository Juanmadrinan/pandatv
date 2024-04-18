
const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', genreController.addGenre);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);


// Exportamos el enrutador para usarlo en otra parte de la app
module.exports = router;