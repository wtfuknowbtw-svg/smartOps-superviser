const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  
}, { timestamps: true });

module.exports = mongoose.model('Salary', salarySchema);
