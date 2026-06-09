const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  // Add fields here
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);