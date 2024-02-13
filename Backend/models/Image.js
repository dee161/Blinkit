const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    filename: { type: String, required: true },
});

module.exports = mongoose.model('Image', imageSchema);
