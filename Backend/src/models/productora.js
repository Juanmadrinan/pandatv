const mongoose = require('mongoose');

// Definición del esquema para el modelo de productora
const productoraSchema = new mongoose.Schema({
    // Nombre de la productora 
    nombre: {
        type: String

    },
    // Estado de la productora 
    estado: {
        type: String,
        default: 'Activo'
    },
    // Fecha de creación de la productora 
    fechaCreacion: {
        type: Date,
        default: Date.now,
        // unique: true
    },
    // Fecha de última actualización de la productora 
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    // Slogan opcional de la productora
    slogan: String,
    // Descripción opcional de la productora
    descripcion: String
});

// Exportamos el modelo de productora basado en el esquema definido
module.exports = mongoose.model('Productora', productoraSchema);
