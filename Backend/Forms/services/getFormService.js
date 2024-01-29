const checkSubmission = require("../../Submissions/db/checkSubmission");
const { FORM_NOT_FOUND, INVALID_FORM_ID } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const globalValidator = require("../../Utils/globalValidators");
const getForm = require("../db/getForm");
const formValidator = require("../validators/formValidator");

const getFormService = async (formId, id, next) => {
  if (globalValidator(formValidator, { formId })) {
    if (!formId) {
      return next(
        new CustomError(INVALID_FORM_ID.message, INVALID_FORM_ID.status)
      );
    }
    const form = await getForm(formId);
    if (!form) {
      return next(
        new CustomError(FORM_NOT_FOUND.message, FORM_NOT_FOUND.status)
      );
    }
    const filledForm = await checkSubmission(formId, id);
    let formData;
    if (!filledForm) {
      formData = [];
    } else {
      formData = filledForm.formData;
    }
    return { form, formData };
  }
};

module.exports = getFormService;
