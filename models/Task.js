const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
