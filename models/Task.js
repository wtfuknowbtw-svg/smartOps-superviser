const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);