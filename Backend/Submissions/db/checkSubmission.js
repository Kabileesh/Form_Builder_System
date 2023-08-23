const Submission = require("../model/submissionModel");

const checkSubmission = async (formId) => {
  const submittedForm = await Submission.find({
    _id: formId,
    submittedBy: req.user.id,
  });
  return submittedForm;
};

module.exports = checkSubmission;
