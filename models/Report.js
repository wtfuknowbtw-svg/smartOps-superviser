const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
