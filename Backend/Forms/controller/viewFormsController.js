const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const viewFormsServices = require("../services/viewFormsServices");

const viewFormsController = asyncErrorHandler(async (req, res, next) => {
  try {
    const id = req.user.id;
    const createdForms = await viewFormsServices(id);
    res.status(FETCH_SUCCESS.status).send(createdForms);
  } catch (error) {
    next(error);
  }
});

module.exports = viewFormsController;
