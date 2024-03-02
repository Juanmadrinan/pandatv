const Productora = require('../models/productora');

// Controlador para agregar una nueva productora
exports.addProductora = async (req, res) => {
    try {
        const productora = new Productora(req.body);
        await productora.save();
        res.status(201).json(productora);
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
        const nombreProductora = req.body.Nombre;
        const updateData = req.body;
        // Realizar la actualización parcial
        const updateProductora = await Productora.findOneAndUpdate(
          { Nombre: nombreProductora },
          { $set: updateData },
          { new: true }
        );
    
        if (!updateProductora) {
          return res.status(404).json({ error: 'Tipo no encontrado' });
        }
        res.json(updateProductora);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};

// Controlador para eliminar una productora por su ID
exports.deleteProductora = async (req, res) => {
    try {
        const Name = req.body.Nombre;
        const deletedProductora = await Productora.findOneAndDelete(
            { Nombre: Name },
            { new: true }
        );
        if (!deletedProductora) {
            return res.status(404).json({ message: 'Productora not found' });
        }
        res.json({ message: 'Productora deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
