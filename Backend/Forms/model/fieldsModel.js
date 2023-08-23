const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  options: [String],
  required: {
    type: Boolean,
    default: false,
  },
  imageData: {
    type: Buffer,
  },
});

module.exports = fieldSchema;
