const globalValidator = require("../../Utils/globalValidators");
const saveForm = require("../db/saveForm");
const formDetailsValidator = require("../validators/formDetailsValidator");

const createFormService = async (title, description, fields) => {
  if ((globalValidator(formDetailsValidator), { title, description, fields })) {
    const form = await saveForm(title, description, fields);

    return form;
  }
};

module.exports = createFormService;
