const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
    try {
        const { userId, filename } = req.body;
        const image = new Image({ userId, filename });
        await image.save();
        res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
