const Joi = require("joi");

const formResponsesValidator = Joi.object().keys({
  formId: Joi.string().required().messages({
    "string.empty": `Form id cannot be empty`,
    "any.required": `Form id is required`,
  }),
});

module.exports = formResponsesValidator;
