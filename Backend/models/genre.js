// Creo que no hace falta comentar esto :v
const mongoose = require('mongoose');

// Definimos el esquema para el modelo del género
const genreSchema = new mongoose.Schema({
    // Nombre del género (campo requerido y único)
    nombre: {
        type: String
    },
    // Estado del género (Activo o Inactivo, con valor por defecto Activo)
    estado: {
        type: String,
        default: 'Activo'
    },
    descripcion: String,
    // Fecha de creación del género (se establece automáticamente al momento de la creación)
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    // Fecha de última actualización del género (se actualiza automáticamente cuando se modifica)
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    // Esta es la descripción del género
});

// Exportamos el modelo de género basandonos en el esquema que hicimos
module.exports = mongoose.model('Genre', genreSchema);