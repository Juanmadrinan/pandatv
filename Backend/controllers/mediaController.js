const Media = require('../models/Media');

// Controlador para agregar una nueva película o serie
exports.addMedia = async (req, res) => {
    try {
        const {
            title,
            synopsis,
            url,
            coverImage,
            releaseYear,
            mainGenre,
            mainDirector,
            productionCompany,
            type
        } = req.body;
        const newMedia = new Media({
            title,
            synopsis,
            url,
            coverImage,
            releaseYear,
            mainGenre,
            mainDirector,
            productionCompany,
            type
        });
        const savedMedia = await newMedia.save();
        res.status(201).json(savedMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para actualizar una película o serie por su ID
exports.updateMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMedia = await Media.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMedia) {
            return res.status(404).json({ message: 'Media not found' });
        }
        res.json(updatedMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener una película o serie por su ID
exports.getMediaById = async (req, res) => {
    try {
        const { id } = req.params;
        const media = await Media.findById(id);
        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controlador para eliminar una película o serie por su ID
exports.deleteMedia = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMedia = await Media.findByIdAndDelete(id);
        if (!deletedMedia) {
            return res.status(404).json({ message: 'Media not found' });
        }
        res.json({ message: 'Media deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
