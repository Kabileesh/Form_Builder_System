const mongoose = require("mongoose");
const fieldSchema = require("./fieldsModel");

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  fields: [fieldSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
