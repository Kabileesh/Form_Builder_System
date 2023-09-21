const globalValidator = require("../../Utils/globalValidators");
const saveForm = require("../db/saveForm");
const formDetailsValidator = require("../validators/formDetailsValidator");

const createFormService = async (title, description, fields, id) => {
  if ((globalValidator(formDetailsValidator), { title, fields })) {
    const form = await saveForm(title, description, fields, id);

    return form;
  }
};

module.exports = createFormService;
