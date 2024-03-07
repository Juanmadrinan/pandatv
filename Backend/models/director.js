const mongoose = require('mongoose');

// Definimos el esquema para el modelo director
const directorSchema = new mongoose.Schema({
    // Nombres del director (El campo es requerido)
    nombre: {
        type: String,

    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    // Fecha de creacion del director
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    // Fecha de última actualización del director
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

// Exportamos el módelo del director basado en el esquima que hicimos
module.exports = mongoose.model('Director', directorSchema);