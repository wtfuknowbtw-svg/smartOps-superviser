const mongoose = require('mongoose');

const stockTransactionSchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('StockTransaction', stockTransactionSchema);