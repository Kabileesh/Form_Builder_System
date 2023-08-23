const globalValidator = require("../../Utils/globalValidators");
const deleteForm = require("../db/deleteForm");
const formValidator = require("../validators/formValidator");

const deleteFormService = async (formId) => {
  if (globalValidator(formValidator, { formId })) {
    await deleteForm(formId);
    return true;
  }
};

module.exports = deleteFormService;
