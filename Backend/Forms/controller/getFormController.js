const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FETCH_SUCCESS } = require("../../Utils/constants");
const getFormService = require("../services/getFormService");

const getFormController = asyncErrorHandler(async (req, res, next) => {
  try {
    const { formId } = req.query;
    const id = req.user.id;
    const { form, formData } = await getFormService(formId, id, next);
    res
      .status(FETCH_SUCCESS.status)
      .send({ form, formData, message: FETCH_SUCCESS.message });
  } catch (error) {
    next(error);
  }
});

module.exports = getFormController;
