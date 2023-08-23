const { INVALID_FORM_ID } = require("../../Utils/constants");
const { default: CustomError } = require("../../Utils/customError");
const Form = require("../model/formModel");

const deleteForm = async (formId) => {
  const form = await Form.findById({ formId });

  if (form) {
    await Form.deleteOne({ _id: formId });
  } else {
    throw new CustomError(INVALID_FORM_ID.message, INVALID_FORM_ID.status);
  }
};

module.exports = deleteForm;
