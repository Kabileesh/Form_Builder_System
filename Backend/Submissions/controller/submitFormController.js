const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { RESPONSE_SUBMIT_SUCCESS } = require("../../Utils/constants");
const submitFormService = require("../services/submitFormService");

const submitForm = asyncErrorHandler(async (req, res, next) => {
  const { formId, formData } = req.body;
  const formResponse = await submitFormService(formId, formData);

  return res
    .status(RESPONSE_SUBMIT_SUCCESS.status)
    .send({ formResponse, message: RESPONSE_SUBMIT_SUCCESS.message });
});

module.exports = submitForm;
