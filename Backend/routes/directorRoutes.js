const express = require('express');
const router = express.Router();
const Director = require('../models/director');

// Obtenemos todos los directores
router.get('/', async (req, res) => {
    try {
        // Buscamos todos los directorios en la base de datos´
        const directors = await Director.find();
        // Respondemos con los directores encontrados en formato JSON
        res.json(directors);
    } catch (err) {
        // Manejamos los errores y respondemos con un código de estado 500 si ocurre algún problema
        res.status(500).json({ message: err.message });
    };
});

// Creamos un nuevo director
router.post('/', async (req, res) => {
    // Creamos un nuevo objeto Director utilizando los datos
    const director = new Director({
        Nombres: req.body.Nombres
    });

    try {
        // Guardamos el nuevo director en la base de datos
        const newDirector = await director.save();
        // Respondemos ocnel director recién ceado en formato JSON
        res.status(201).json(newDirector);
    } catch (err) {
        // manejamos los errores de validación y respondemos con un 400
        res.status(400).json({ message: err.message });
    };
});

// Actualizamos los directorios existentes
router.patch('/:id', getDirector, async (req, res) => {
    // Actualizamos los campos del director según los datos proporcionados
    if(req.body.Nombres != null) {
        res.director.Nombres = req.body.Nombres;
    };

    try {
        // Guardamos los cambios realizados en el director actualizado en la base de datos
        const updateDirector = await res.director.save();
        // Respondemos con el director actualizado en formato JSON
        res.json(updateDirector);
    } catch (err) {
        // Manejamos los erores de validación y respondemos con un 400
        res.status(400).json({ message: err.message });
    };
});

// Borramos los directorios existentes
router.delete('/:id', getDirector, async (req, res) => {
    try {
        // Eliminamos el director encontrado en la base de datos
        await res.director.remove();
        // Respondemos con un mensaje indicando que el director ha sido eliminado
        res.json({ message: 'Director eliminado'});
    } catch (err) {
        // Manejamos los errores y respondemos con un 500 si ocurre algún problema
        res.status(500).json({ message: err.message });
    };
});

// Midleware para obtener un director por su ID
async function getDirector(req, res, next) {
    let director;
    
    try {
        // Buscamos un director por su ID en la base de datos
        director = await Director.findById(req.params.id);
        if(director == null) {
            // Si no se encuentra el director, respondemos con un código de estado 404
            return res.status(404).json({ message: 'Director no encontrado'});
        };
    } catch (err) {
        // Manejamos los errores y respondemos con un 500 si ocure algún problema
        return res.status(500).json({ message: err.message });
    };

    // Si se encuentra el director, lo almacenamos en el objeto de respuesta para su uso
    res.director = director;
    next();
};

// Exportamos el enrutador para su uso en otras partes de la pp
module.exports = router;

