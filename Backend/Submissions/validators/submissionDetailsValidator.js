const Joi = require("joi");

const submissionDetailsValidator = Joi.object().keys({
  formId: Joi.string().required().messages({
    "string.empty": `Form id cannot be empty`,
    "any.required": `Form id is required`,
  }),
  formData: Joi.array().items(
    Joi.object({
      id: Joi.number().integer().min(0).required(),
      question: Joi.string().required(),
      answer: Joi.string().required(),
    })
  ),
});

module.exports = submissionDetailsValidator;
