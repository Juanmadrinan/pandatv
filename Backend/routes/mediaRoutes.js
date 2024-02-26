// Importamos los módulos que vamos a usar en las rutas de media
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Importamos el módelo de media
const Media = require('../models/media');


// Ruta para obtener las peliculas y series
router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);
    } catch (error) {
        res.status(590).json({ message: error.message});
    };
});

// Esta ruta es para obtener una pelicula o serie especifica por su ID
router.get('/:id', getMedia, (req, res) => {
    res.json(res.media);
});

// Ruta pra crear uan nueva pelicula o serie
router.post('/', async (req, res) =>  {
    const media = new Media({
        titulo: req.body.titulo,
        sinopsis: req.body.sinopsis,
        url: req.body.url,
        imagenPortada: req.body.imagenPortada,
        anioEstreno: req.body.anioEstreno,
        generoPrincipal: req.body.generoPrincipal,
        directorPrincipal: req.body.directorPrincipal,
        productora: req.body.productora,
        tipo: req.body.tipo
    });

    try {
        const newMedia = await media.save();
        res.status(201).json(newMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
});

    // Ruta pra actualizar una pelicula o serie
    router.patch('/:id', async (req, res) => {
        if(req.body.titulo != null) {
            res.media.titulo = req.body.titulod;
        };
        if(req.body.sinopsis != null) {
            res.media.sinopsis = req.body.sinopsis;
        };

        try {
            res.json(updateMedia);
        } catch (err) {
            res.status(400).json({ message: err.message });
        };
    });
  


    // Ruta para eliminar una pelicula o serie
    router.delete('/:id', getMedia, async (req, res) => {
        try {
            await res.media.remove();
            res.json({ message: 'Media deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        };
    });