const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/pandatv';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de Datos conectada exitosamente a MongoDB');
});
