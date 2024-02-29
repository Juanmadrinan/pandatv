const Genre = require('../models/genre');

// Controlador para agregar un nuevo género
exports.addGenre = async (req, res) => {
    try {
        const { name } = req.body;
        const newGenre = new Genre({ name });
        const savedGenre = await newGenre.save();
        res.status(201).json(savedGenre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para actualizar un género por su ID
exports.updateGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedGenre = await Genre.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedGenre) {
            return res.status(404).json({ message: 'Genre not found' });
        }
        res.json(updatedGenre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener un género por su ID
exports.getGenreById = async (req, res) => {
    try {
        const { id } = req.params;
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
        const { id } = req.params;
        const deletedGenre = await Genre.findByIdAndDelete(id);
        if (!deletedGenre) {
            return res.status(404).json({ message: 'Genre not found' });
        }
        res.json({ message: 'Genre deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
