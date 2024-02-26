const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    sipnosis: {
        type: String,
        required: true
    }, 
    URL: {
        type: String,
        required: true
    },
    imagenPortada: {
        type: String
    },
    anioEstreno: {
        type: Number,
        required: true
    },
    generoPrincipal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
        required: true
    },
    directorPrincipal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: mongoose.Schema.type.ObjectId,
        ref: 'Productora',
        required: true,
    },
    tipo: {
        type: mongoose.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },creadoEn: {
        type: Date,
        default: Date.now
    },
    actualizadoEn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Media', mediaSchema);