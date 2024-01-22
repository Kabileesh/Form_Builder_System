const { INVALID_FORM_ID } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const Form = require("../model/formModel");

const deleteForm = async (formId) => {
  await Form.deleteOne({ _id: formId });
};

module.exports = deleteForm;
