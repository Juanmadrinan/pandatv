
const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/', genreController.getAllGenres);
router.post('/', genreController.addGenre);
router.get('/', genreController.getGenreById);
router.patch('/', genreController.updateGenre);
router.delete('/', genreController.deleteGenre);


// Exportamos el enrutador para usarlo en otra parte de la app
module.exports = router;

