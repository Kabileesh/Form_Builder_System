const globalValidator = require("../../Utils/globalValidators");
const getFormResponses = require("../db/getResponses");
const formResponsesValidator = require("../validators/getResponseValidator");

const getFormResponsesService = async (formId) => {
  if (globalValidator(formResponsesValidator, { formId })) {
    const formResponses = await getFormResponses(formId);
    return formResponses;
  }
};

module.exports = getFormResponsesService;
