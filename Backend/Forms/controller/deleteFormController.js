const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FORM_DELETE_SUCCESS } = require("../../Utils/constants");
const deleteFormService = require("../services/deleteFormService");

const deleteFormController = asyncErrorHandler(async (req, res) => {
  const { formId } = req.body;
  await deleteFormService(formId);
  return res
    .status(FORM_DELETE_SUCCESS.status)
    .send({ message: FORM_DELETE_SUCCESS.message });
});

module.exports = deleteFormController;
