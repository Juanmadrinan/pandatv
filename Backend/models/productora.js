const mongoose = require('mongoose');

// Definición del esquema para el modelo de productora
const productoraSchema = new mongoose.Schema({
    // Nombre de la productora 
    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    // Estado de la productora 
    Estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    // Fecha de creación de la productora 
    FechaCreacion: {
        type: Date,
        default: Date.now
    },
    // Fecha de última actualización de la productora 
    FechaActualizacion: {
        type: Date,
        default: Date.now
    },
    // Slogan opcional de la productora
    Slogan: String,
    // Descripción opcional de la productora
    Descripcion: String
});

// Exportamos el modelo de productora basado en el esquema definido
module.exports = mongoose.model('Productora', productoraSchema);
