const { FORM_NOT_FOUND } = require("../../Utils/constants");
const { default: CustomError } = require("../../Utils/customError");
const Form = require("../model/formModel");

const viewForms = async () => {
  const createdBy = req.user.id;
  const createdForms = await Form.find({ createdBy: createdBy });

  return createdForms;
};

module.exports = viewForms;
