const mongoose = require('mongoose');

const capsuleSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Content is required.'],
    trim: true,
    maxlength: [500, 'Content cannot be more than 500 characters.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Capsule', capsuleSchema); 