const { INVALID_FORM_ID } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const globalValidator = require("../../Utils/globalValidators");
const getFormResponses = require("../db/getResponses");
const formResponsesValidator = require("../validators/getResponseValidator");

const getFormResponsesService = async (formId) => {
  if (globalValidator(formResponsesValidator, { formId })) {
    if (!formId) {
      throw new CustomError(INVALID_FORM_ID.message, INVALID_FORM_ID.status);
    }
    const formResponses = await getFormResponses(formId);
    return formResponses;
  }
};

module.exports = getFormResponsesService;
