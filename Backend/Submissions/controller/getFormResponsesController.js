const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getFormResponsesService = require("../services/getFormResponsesService");

const getFormResponsesController = asyncErrorHandler(async (req, res, next) => {
  const { formId } = req.query;
  const formResponses = await getFormResponsesService(formId);
  res
    .status(FETCH_SUCCESS.status)
    .send({ formResponses: formResponses, message: FETCH_SUCCESS.message });
});

module.exports = getFormResponsesController;
