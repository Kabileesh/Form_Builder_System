const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const viewFormsServices = require("../services/viewFormsServices");

const viewFormsController = asyncErrorHandler(async (req, res) => {
  const createdForms = await viewFormsServices();
  res.status(FETCH_SUCCESS.status).send(createdForms);
});

module.exports = viewFormsController;
