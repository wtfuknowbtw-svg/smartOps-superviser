const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Worker', workerSchema);