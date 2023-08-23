const Joi = require("joi");

const registerValidator = Joi.object().keys(
  {
    username: Joi.string().required().messages({
      "string.empty": `name cannot be an empty field`,
      "any.required": `Name is required`,
    }),
    password: Joi.string()
      .min(8)
      .regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .required()
      .messages({
        "string.min":
          "Password must be minimum 8 characters, with at least a symbol, upper and lower case letters and a number",
        "object.regex": `Password must be minimum 8 characters, with at least a symbol, upper and lower case letters and a number`,
        "string.pattern.base":
          "Password must be minimum 8 characters, with at least a symbol, upper and lower case letters and a number",
        "string.empty": `Password cannot be empty`,
        "any.required": `Password is required`,
      }),
  }
);

module.exports = registerValidator;
