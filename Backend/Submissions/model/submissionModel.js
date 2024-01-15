const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Form",
  },
  formData: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;
