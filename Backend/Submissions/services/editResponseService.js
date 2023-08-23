const globalValidator = require("../../Utils/globalValidators");
const editResponse = require("../db/editResponse");
const submissionDetailsValidator = require("../validators/submissionDetailsValidator");

const editResponseService = async (formId, formData) => {
  if ((globalValidator(submissionDetailsValidator), { formId, formData })) {
    const editedResponse = await editResponse(formId, formData);
    return editedResponse;
  }
};

module.exports = editResponseService;
