const viewForms = require("../db/viewForms");

const viewFormsServices = async () => {
  const createdForms = await viewForms();
  return createdForms;
};

module.exports = viewFormsServices;
