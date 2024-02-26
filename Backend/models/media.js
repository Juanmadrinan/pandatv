const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
});

module.exports = moongose.model('Media', mediaSchema);