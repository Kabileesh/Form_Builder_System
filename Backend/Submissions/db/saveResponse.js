const Submission = require("../model/submissionModel");

const saveResponse = async (formId, formData) => {
  const newSubmission = new Submission({
    formId: formId,
    formData: formData,
    submittedBy: req.user.id,
  });

  await newSubmission.save();

  return newSubmission;
};

module.exports = saveResponse;
