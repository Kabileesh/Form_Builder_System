const { FORM_NOT_FOUND } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const Form = require("../model/formModel");

const getForm = async (formId) => {
  const selectedForm = await Form.findById(formId, { createdBy: 0 });
  if (!selectedForm) {
    throw new CustomError(FORM_NOT_FOUND.message, FORM_NOT_FOUND.status);
  }
  return selectedForm;
};

module.exports = getForm;
