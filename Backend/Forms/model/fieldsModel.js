const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    options: [String],
    required: {
      type: Boolean,
      default: false,
    },
    imageData: {
      type: Buffer,
    },
  },
  { _id: false }
);

module.exports = fieldSchema;
