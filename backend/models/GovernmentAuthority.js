const mongoose = require('mongoose');

const governmentSchema = new mongoose.Schema({
  name: { type: String, required: true  },
  department:{type: String , required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GovernmentAuthority', governmentSchema);
