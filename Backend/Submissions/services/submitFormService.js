const globalValidator = require("../../Utils/globalValidators");
const saveResponse = require("../db/saveResponse");
const submissionDetailsValidator = require("../validators/submissionDetailsValidator");

const submitFormService = async (formId, formData) => {
  if (globalValidator(submissionDetailsValidator, { formId, formData })) {
    const formResponse = await saveResponse(formId, formData);
    return formResponse;
  }
};

module.exports = submitFormService;
