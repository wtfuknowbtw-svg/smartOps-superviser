const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);