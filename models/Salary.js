const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Salary', salarySchema);