const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getFormService = require("../services/getFormService");

const getFormController = asyncErrorHandler(async (req, res) => {
  const { formId } = req.query;
  const id = req.user.id;
  const { form, formData } = await getFormService(formId, id);
  res.stauts(FETCH_SUCCESS.status).send(form, formData);
});

module.exports = getFormController;
