const { FORM_NOT_FOUND } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const globalValidator = require("../../Utils/globalValidators");
const deleteForm = require("../db/deleteForm");
const getForm = require("../db/getForm");
const formValidator = require("../validators/formValidator");

const deleteFormService = async (formId, next) => {
  if (globalValidator(formValidator, { formId })) {
    const form = await getForm(formId);
    if (!form) {
      return next(new CustomError(FORM_NOT_FOUND.message, FORM_NOT_FOUND.status));
    }
    await deleteForm(formId);
    return true;
  }
};

module.exports = deleteFormService;
