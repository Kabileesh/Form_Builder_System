const Submission = require("../model/submissionModel");

const saveResponse = async (formId, formData, id) => {
  const newSubmission = new Submission({
    formId: formId,
    formData: formData,
    submittedBy: id,
  });

  await newSubmission.save();

  return newSubmission;
};

module.exports = saveResponse;
