// Requerimos la libreria
const mongoose = require('mongoose');

// Definimos el esquema del modelo tipo
const tipoSchema = new mongoose.Schema({
    // Nombre del tipo
    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    // Fecha de creación del tipo
    FechaCreacion: {
        type: Date,
        default: Date.now
    },
    // Fecha de ultima actualización del tipo
    FechaActualizacion: {
        type: Date,
        default: Date.now
    },
    Descripcion: String
});

// Exportamos el modelo de tipo basado en el esquema definido anteriormente
module.exports = mongoose.model('Tipo', tipoSchema);