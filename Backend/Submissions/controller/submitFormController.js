const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { RESPONSE_SUBMIT_SUCCESS } = require("../../Utils/constants");
const submitFormService = require("../services/submitFormService");

const submitForm = asyncErrorHandler(async (req, res, next) => {
  try {
    const { formId, formData } = req.body;
    const id = req.user.id;
    const formResponse = await submitFormService(formId, formData, id);

    return res
      .status(RESPONSE_SUBMIT_SUCCESS.status)
      .send({ formResponse, message: RESPONSE_SUBMIT_SUCCESS.message });
  } catch (error) {
    next(error);
  }
});

module.exports = submitForm;
