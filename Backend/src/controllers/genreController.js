const Genre = require('../models/genre');

// Controlador para agregar un nuevo género
exports.addGenre = async (req, res) => {
    try {
        const genre = new Genre(req.body);
        await genre.save();
        res.status(201).json(genre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para actualizar un género por su ID
exports.updateGenre = async (req, res) => {
    try {
        const idGenre = req.params.id;
        const updateData = req.body;
        const updatedGenre = await Genre.findByIdAndUpdate(
            {_id: idGenre}, 
            {$set: updateData}, 
            { new: true }
            );
        if (!updatedGenre) {
            return res.status(404).json({ message: 'Genre not found' });
        }
        res.json(updatedGenre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener todas las productoras
exports.getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Controlador para obtener un género por su ID
exports.getGenreById = async (req, res) => {
    try {
        const id = req.params.id;
        const genre = await Genre.findById(id);
        if (!genre) {
            return res.status(404).json({ message: 'Genre not found' });
        }
        res.json(genre);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para eliminar un género por su ID
exports.deleteGenre = async (req, res) => {
    try {
        const idGenre = req.params.id;
        const deletedGenre = await Genre.findOneAndDelete(
            {_id: idGenre},
            { new: true }
            );
        if (!deletedGenre) {
            return res.status(404).json({ message: 'Genero no encontrado' });
        }
        res.json({ message: 'Genero deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
