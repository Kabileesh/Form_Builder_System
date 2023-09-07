const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { FORM_CREATE_SUCCESS } = require("../../Utils/constants");
const createFormService = require("../services/createFormService");

const createForm = asyncErrorHandler(async (req, res, next) => {
  const { title, description, fields } = req.body;
  const id = req.user.id;

  const form = await createFormService(title, description, fields, id);

  return res
    .status(FORM_CREATE_SUCCESS.status)
    .send({ form, message: FORM_CREATE_SUCCESS.message });
});

module.exports = createForm;