const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  
}, { timestamps: true });

module.exports = mongoose.model('Worker', workerSchema);
