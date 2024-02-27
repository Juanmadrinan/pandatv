const express = require('express');
const router = express.Router();
const Productora = require('../models/productora');

// Obtenemos todas las productoras
router.get('/', async (req, res) => {
    try {
        // Buscamos todas las productoras en la base de datos
        const productoras = await Productora.find();
        // Respondemos con las productoras encontradas en formato JSON
        res.json(productoras);
    } catch (err) {
        // Manejamos los errores y respondemos con un código de estado 500 si ocurre algún problema
        res.status(500).json({ message: err.message });
    }
});

// Creamos una nueva productora
router.post('/', async (req, res) => {
    // Creamos un nuevo objeto Productora utilizando los datos proporcionados en el cuerpo de la solicitud
    const productora = new Productora({
        Nombre: req.body.Nombre,
        Slogan: req.body.Slogan,
        Descripcion: req.body.Descripcion
    });

    try {
        // Guardamos la nueva productora en la base de datos
        const newProductora = await productora.save();
        // Respondemos con la productora recién creada en formato JSON y un código de estado 201 (Creado)
        res.status(201).json(newProductora);
    } catch (err) {
        // Manejamos los errores de validación y respondemos con un código de estado 400 (Solicitud incorrecta)
        res.status(400).json({ message: err.message });
    }
});

// Actualizamos una productora existente
router.patch('/:id', getProductora, async (req, res) => {
    // Actualizamos los campos de la productora según los datos proporcionados en el cuerpo de la solicitud
    if (req.body.Nombre != null) {
        res.productora.Nombre = req.body.Nombre;
    }
    if (req.body.Slogan != null) {
        res.productora.Slogan = req.body.Slogan;
    }
    if (req.body.Descripcion != null) {
        res.productora.Descripcion = req.body.Descripcion;
    }

    try {
        // Guardamos los cambios realizados en la productora actualizada en la base de datos
        const updatedProductora = await res.productora.save();
        // Respondemos con la productora actualizada en formato JSON
        res.json(updatedProductora);
    } catch (err) {
        // Manejamos los errores de validación y respondemos con un código de estado 400 (Solicitud incorrecta)
        res.status(400).json({ message: err.message });
    }
});

// Aqui creamos el metodo delete para borrar una productora existente
router.delete('/:id', getProductora, async (req, res) => {
    try {
        // Eliminamos la productora encontrada en la base de datos
        await res.productora.remove();
        // Respondemos con un mensaje indicando que la productora ha sido eliminada
        res.json({ message: 'Productora deleted' });
    } catch (err) {
        // Manejamos los errores y respondemos con un código de estado 500 si ocurre algún problema
        res.status(500).json({ message: err.message });
    }
});

// Middleware para obtener una productora por su ID
async function getProductora(req, res, next) {
    let productora;
    try {
        // Buscamos una productora por su ID en la base de datos
        productora = await Productora.findById(req.params.id);
        if (productora == null) {
            // Si no se encuentra la productora, respondemos con un código de estado 404 (No encontrado)
            return res.status(404).json({ message: 'Productora not found' });
        }
    } catch (err) {
        // Manejamos los errores y respondemos con un código de estado 500 si ocurre algún problema
        return res.status(500).json({ message: err.message });
    }

    // Si se encuentra la productora la almacenamos en el objeto de respuesta para su uso
    res.productora = productora;
    next();
}

// Exportamos el enrutador para su uso en otras partes de la pp
module.exports = router;
