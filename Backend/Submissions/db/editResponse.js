const Submission = require("../model/submissionModel");

const editResponse = async (submissionId, formData) => {
  const updatedResponse = await Submission.findByIdAndUpdate(submissionId, {
    $set: { formData: formData },
  });

  return updatedResponse;
};

module.exports = editResponse;
