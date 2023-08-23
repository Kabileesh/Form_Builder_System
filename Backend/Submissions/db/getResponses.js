const Submission = require("../model/submissionModel");

const getFormResponses = async (formId) => {
  const formResponses = await Submission.find({ formId: formId });
  return formResponses;
};

module.exports = getFormResponses;
