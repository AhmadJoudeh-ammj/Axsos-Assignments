const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Prefer not to say']
  },
  details: {
    type: String,
    required: true,
    minlength: 20,
    trim: true
  },
  attendance: {
    type: String,
    enum: ['Present', 'Absent'],
    default: 'Present'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);

