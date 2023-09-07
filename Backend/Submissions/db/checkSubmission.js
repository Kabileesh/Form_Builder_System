const Submission = require("../model/submissionModel");

const checkSubmission = async (formId, id) => {
  const submittedForm = await Submission.find({
    _id: formId,
    submittedBy: id,
  });
  return submittedForm;
};

module.exports = checkSubmission;
