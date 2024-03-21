// Requerimos la libreria
const mongoose = require('mongoose');

// Definimos el esquema del modelo tipo
const tipoSchema = new mongoose.Schema({
    // Nombre del tipo
    nombre: {
        type: String,
        required: true,
    },
    // Fecha de creación del tipos
    descripcion: String,
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now,
    },
});

// Exportamos el modelo de tipo basado en el esquema definido anteriormente
module.exports = mongoose.model('Tipo', tipoSchema);