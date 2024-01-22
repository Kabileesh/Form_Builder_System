const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getFormResponsesService = require("../services/getFormResponsesService");

const getFormResponsesController = asyncErrorHandler(async (req, res, next) => {
  try {
    const { formId } = req.query;
    const formResponses = await getFormResponsesService(formId);
    res
      .status(FETCH_SUCCESS.status)
      .send({ formResponses: formResponses, message: FETCH_SUCCESS.message });
  } catch (error) {
    next(error);
  }
});

module.exports = getFormResponsesController;
