const mongoose = require('mongoose');

const stockTransactionSchema = new mongoose.Schema({
  
}, { timestamps: true });

module.exports = mongoose.model('StockTransaction', stockTransactionSchema);
