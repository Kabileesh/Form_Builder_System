const checkSubmission = require("../../Submissions/db/checkSubmission");
const { default: globalValidator } = require("../../Utils/globalValidators");
const getForm = require("../db/getForm");
const formValidator = require("../validators/formValidator");

const getFormService = async (formId) => {
  if ((globalValidator(formValidator), { formId })) {
    const form = await getForm(formId);
    const filledForm = await checkSubmission(formId);
    let formData;
    if (!filledForm) {
      formData = {};
    } else {
      formData = filledForm.formData;
    }
    return { form, formData };
  }
};

module.exports = getFormService;
