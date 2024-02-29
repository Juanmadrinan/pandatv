const Tipo = require('../models/tipo');

// Controlador para agregar un nuevo tipo
exports.addTipo = async (req, res) => {
    try {
        const tipo = new Tipo(req.body);
        const newTipo = await tipo.save();
        res.status(201).json(newTipo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener todos los tipos
exports.getAllTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para obtener un tipo por su ID
exports.getTipoById = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            return res.status(404).json({ message: 'Tipo not found' });
        }
        res.json(tipo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para actualizar un tipo por su ID
exports.updateTipo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTipo = await Tipo.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTipo) {
            return res.status(404).json({ message: 'Tipo not found' });
        }
        res.json(updatedTipo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para eliminar un tipo por su ID
exports.deleteTipo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTipo = await Tipo.findByIdAndDelete(id);
        if (!deletedTipo) {
            return res.status(404).json({ message: 'Tipo not found' });
        }
        res.json({ message: 'Tipo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
