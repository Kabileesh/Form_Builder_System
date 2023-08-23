const Joi = require("joi");

const submissionDetailsValidator = Joi.object().keys({
  formId: Joi.string().required().messages({
    "string.empty": `Form id cannot be empty`,
    "any.required": `Form id is required`,
  }),
  formData: Joi.object().required().messages({
    "object.empty": `Form cannot be empty`,
    "any.required": `Form data is required`,
  }),
});

module.exports = submissionDetailsValidator;
