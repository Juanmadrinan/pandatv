const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    sipnosis: {
        type: String,
    }, 
    URL: {
        type: String,
    },
    imagenPortada: {
        type: String
    },
    anioEstreno: {
        type: Number,
    },
    generoPrincipal: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Genre',
    },
    directorPrincipal: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Director',
    },
    productora: {
        // type: mongoose.Schema.type.ObjectId,
        type: String,
        ref: 'Productora',
    },
    tipo: {
        // type: mongoose.Types.ObjectId,
        type: String,
        ref: 'Tipo',
    },
    creadoEn: {
        type: Date,
        default: Date.now
    },
    actualizadoEn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Media', mediaSchema);