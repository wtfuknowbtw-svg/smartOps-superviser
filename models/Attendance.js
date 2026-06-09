const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);