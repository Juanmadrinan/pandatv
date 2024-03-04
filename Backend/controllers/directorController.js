const Director = require('../models/director');

// Controlador para agregar un nuevo director
exports.addDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener todos los directores.
exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        res.status(500).json( { message: err.message });
    };
};

// Controlador para actualizar un director por su ID
exports.updateDirector = async (req, res) => {
    try {
        const Name = req.body.Nombre;
        const updatedData = req.body;
        const  updatedDirector = await Director.findOneAndUpdate(
            {Nombre: Name},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedDirector) {
            return res.status(404).json({ message: 'Director not found' });
        }
        res.json(updatedDirector);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener un director por su ID
exports.getDirectorById = async (req, res) => {
    try {
        const { id } = req.params;
        const director = await Director.findById(id);
        if (!director) {
            return res.status(404).json({ message: 'Director not found' });
        }
        res.json(director);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para eliminar un director por su ID
exports.deleteDirector = async (req, res) => {
    try {
        const Name = req.body.Nombre;
        const deletedDirector = await Director.findOneAndDelete(
            {Nombre: Name},
            {new: true}
        );
        if (!deletedDirector) {
            return res.status(404).json({ message: 'Director not found' });
        }
        res.json({ message: 'Director deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
