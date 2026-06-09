const mongoose = require('mongoose');

const escalationSchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Escalation', escalationSchema);