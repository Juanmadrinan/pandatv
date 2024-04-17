const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    tittle: {
        type: String,
    },
    sipnosis: {
        type: String,
    }, 
    url: {
        type: String,
    },
    imgMovie: {
        type: String
    },
    premierYear: {
        type: String,
    },
    genreMain: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Genre',
    },
    directorMain: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Director',
    },
    producer: {
        // type: mongoose.Schema.type.ObjectId,
        type: String,
        ref: 'Productora',
    },
    type: {
        // type: mongoose.Types.ObjectId,
        type: String,
        ref: 'Tipo',
    },
    createdIn: {
        type: Date,
        default: Date.now
    },
    updatedIn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Media', mediaSchema);