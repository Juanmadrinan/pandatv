const Media = require('../models/Media');

// Controlador para agregar una nueva película o serie
exports.addMedia = async (req, res) => {
    try {
        const media = new Media(req.body);
        await media.save();
        res.status(201).json(media);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para actualizar una película o serie por su ID
exports.updateMedia = async (req, res) => {
    try {
        const idMedia = req.params.id;
        const updatedDate = req.body;
        const updatedMedia = await Media.findByIdAndUpdate(
            {_id: idMedia},
            {$set: updatedDate},
            {new: true}
            );
        if (!updatedMedia) {
            return res.status(404).json({ message: 'Media not found' });
        }
        res.json(updatedMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controlador para obtener una película o serie por su ID
exports.getAllMedia = async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getIdMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Productora not found' });
        }
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Controlador para eliminar una película o serie por su ID
exports.deleteMedia = async (req, res) => {
    try {
        const idMedia = req.params.id;
        const deletedMedia = await Media.findOneAndDelete(
            {_id: idMedia},
            {new: true}
        );
        if (!deletedMedia) {
            return res.status(404).json({ message: 'Media not found' });
        }
        res.json({ message: 'Media deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
