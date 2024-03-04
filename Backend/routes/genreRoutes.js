
const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');
const genreController = require('../controllers/genreController');

router.get('/', genreController.getAllGenres);
router.post('/', genreController.addGenre);
router.get('/:id', genreController.getGenreById);
router.patch('/:id', genreController.updateGenre);
router.delete('/id:', genreController.deleteGenre);


// Exportamos el enrutador para usarlo en otra parte de la app
module.exports = router;

