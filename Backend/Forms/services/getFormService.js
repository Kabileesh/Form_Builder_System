const checkSubmission = require("../../Submissions/db/checkSubmission");
const globalValidator = require("../../Utils/globalValidators");
const getForm = require("../db/getForm");
const formValidator = require("../validators/formValidator");

const getFormService = async (formId, id) => {
  if (globalValidator(formValidator, { formId })) {
    const form = await getForm(formId);
    const filledForm = await checkSubmission(formId, id);
    let formData;
    if (!filledForm) {
      formData = [];
    } else {
      formData = filledForm.formData;
    }
    return { form, formData };
  }
};

module.exports = getFormService;
