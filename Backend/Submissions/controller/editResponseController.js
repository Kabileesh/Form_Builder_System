const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { RESPONSE_EDIT_SUCCESS } = require("../../Utils/constants");
const editResponseService = require("../services/editResponseService");

const editResponseController = asyncErrorHandler(async (req, res, next) => {
  const { formId, formData } = req.body;
  const editedResponse = await editResponseService(formId, formData);
  return res
    .status(RESPONSE_EDIT_SUCCESS.status)
    .send({ editedResponse, message: RESPONSE_EDIT_SUCCESS.message });
});

module.exports = editResponseController;
