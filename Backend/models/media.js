const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Sipnosis: {
        type: String,
        required: true
    }, 
    URL: {
        type: String,
        required: true
    },
    ImagenPortada: {
        type: String
    },
    AnioEstreno: {
        type: Number,
        required: true
    },
    GeneroPrincipal: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Genre',
        required: true
    },
    DirectorPrincipal: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Director',
        required: true
    },
    Productora: {
        // type: mongoose.Schema.type.ObjectId,
        type: String,
        ref: 'Productora',
        required: true,
    },
    Tipo: {
        // type: mongoose.Types.ObjectId,
        type: String,
        ref: 'Tipo',
        required: true
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