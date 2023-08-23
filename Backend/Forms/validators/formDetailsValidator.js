const Joi = require("joi");

const formDetailsValidator = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `title cannot be empty`,
    "any.required": `Title is required`,
  }),
  fields: Joi.array().items(Joi.object().required()).required().messages({
    "array.empty": `form cannot be empty`,
    "any.required": `there must be atleast one field`,
  }),
});

module.exports = formDetailsValidator;
