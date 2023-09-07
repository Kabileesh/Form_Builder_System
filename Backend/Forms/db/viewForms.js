const Form = require("../model/formModel");

const viewForms = async (id) => {
  const createdBy = id;
  const createdForms = await Form.find({ createdBy: createdBy });

  return createdForms;
};

module.exports = viewForms;
