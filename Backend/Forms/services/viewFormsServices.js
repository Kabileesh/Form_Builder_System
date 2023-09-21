const viewForms = require("../db/viewForms");

const viewFormsServices = async (id) => {
  const createdForms = await viewForms(id);
  return createdForms;
};

module.exports = viewFormsServices;
