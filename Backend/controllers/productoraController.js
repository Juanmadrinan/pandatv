const Productora = require('../models/productora');

// Controlador para agregar una nueva productora
exports.addProductora = async (req, res) => {
    try {
        const productora = new Productora(req.body);
        const newProductora = await productora.save();
        res.status(201).json(newProductora);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener todas las productoras
exports.getAllProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para obtener una productora por su ID
exports.getProductoraById = async (req, res) => {
    try {
        const productora = await Productora.findById(req.params.id);
        if (!productora) {
            return res.status(404).json({ message: 'Productora not found' });
        }
        res.json(productora);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para actualizar una productora por su ID
exports.updateProductora = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProductora = await Productora.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProductora) {
            return res.status(404).json({ message: 'Productora not found' });
        }
        res.json(updatedProductora);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para eliminar una productora por su ID
exports.deleteProductora = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProductora = await Productora.findByIdAndDelete(id);
        if (!deletedProductora) {
            return res.status(404).json({ message: 'Productora not found' });
        }
        res.json({ message: 'Productora deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
