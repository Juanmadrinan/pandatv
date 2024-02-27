
const express = require('express');
const router = express.Router();
const Genre = require('../models/genre');

// Ruta para obtener todos los generos
router.get('/', async (req, res) => {
    try {
        // Buscamos todos los géneros en la base de datos
        const genres = await Genre.find();
        // Respondemos con los géneros encontrados en formato JSON
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    };

});

// Ruta para crear un neuvo género
router.post('/', async (req, res) => {
    // Creamos un nuevo objeto Genre utilizando los datos proporcionados en la solicitud
    const genre = new Genre({
        Nombre: req.body.Nombre,
        Description: req.body.Description
    });

        try {
            // Guardamos el nuevo género en la base de datos
            const newGenre = await genre.save();
            // Respondemos con el género recién creado en formato JSON y un código de estado 201 (Creado)
            res.status(201).json(newGenre);
        } catch (err) {
            // Manejamos errores de validaciñon y respondemos con un código de estado 400 (Solicitud incorrecta)
            res.status(400).json({ message: err.message });
        }

});

// Ruta para actualizar un género existente
router.patch('/:id', getGenre, async (req, res) => {
    // Actualizamos los campos del género segñun los datos proporcionados en la solicitud
    if(req.body.Nombre != null) {
        res.genre.Nombre = req.body.Nombre;
    };
    if (req.body.Descripcion != null) {
        res.genre.Descripcion = req.body.Descripcion;
    };

    try {
        // Guardamos los cambios realizados en el género actualizado en la base de datos
        const updateGenre = await res.genre.save();
        // Respondemos con el género actualizado en formato JSON
        res.json(updateGenre);
    } catch (err) {
        // Manejamos erroes de validación y responder con un código de estado 400, por obvias razones (Solicitud incorecta)
        res.status(400).json({ message: err.message });
    };
});

// Ruta para eliminar un género existente
router.delete('/:id', async (req, res) => {
    try {
        // Eliminamos el género encontrado en la base de datos
        await res.genre.remove();
        // Respondemos con un mensaje indicando que el  género ha sido eliminado
        res.json({ message: 'Genero eliminado' });
    } catch (err) {
        // Manejamos errores y respondemos con un codigo de estado 500 si llega a ocurrir algún problema
        res.status(500).json({ message: err.message });
    };
});

//Middleware para obtener un género por su ID
async function getGenre(req, res, next) {
    let genre;
    try {
        // Buscamos el género por su ID en al base de datos
        genre = await Genre.findById(req.params.id);
        if(genre == null) {
            // Si no se encuentra el género, respondemos con un código de estado 404
            return res.status(400).json({ message: 'Género no encontrado'})
        }
    } catch (err) {
        // Manejamos errores y respondemos con un código 500 si ocurre algún problema
        return res.status(500).json({ message: err.message });
    };

    // Si se encuentra el género, lo almacenamos en el objeto de respuesta para su uso
    res.genre = genre;
    next();
};

// Exportamos el enrutador para usarlo en otra parte de la app
module.exports = router;

