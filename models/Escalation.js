const mongoose = require('mongoose');

const escalationSchema = new mongoose.Schema({
  
}, { timestamps: true });

module.exports = mongoose.model('Escalation', escalationSchema);
