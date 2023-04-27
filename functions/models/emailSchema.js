const mongoose = require('mongoose');

const businessEmailListSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  emailSent: {
    type: Boolean,
    default: false
  }
});

const BusinessEmailList = mongoose.model('BusinessEmailList', businessEmailListSchema);

module.exports = BusinessEmailList;
