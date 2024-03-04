const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    Title: {
        type: String,
    },
    Sipnosis: {
        type: String,
    }, 
    URL: {
        type: String,
    },
    ImagenPortada: {
        type: String
    },
    AnioEstreno: {
        type: Number,
    },
    GeneroPrincipal: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Genre',
    },
    DirectorPrincipal: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Director',
    },
    Productora: {
        // type: mongoose.Schema.type.ObjectId,
        type: String,
        ref: 'Productora',
    },
    Tipo: {
        // type: mongoose.Types.ObjectId,
        type: String,
        ref: 'Tipo',
    },
    CreadoEn: {
        type: Date,
        default: Date.now
    },
    ActualizadoEn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Media', mediaSchema);