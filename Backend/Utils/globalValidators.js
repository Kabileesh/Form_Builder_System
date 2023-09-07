const CustomError = require("./customError.js");

const globalValidator = (func, param) => {
  const validatorObj = func.validate(param);
  if (validatorObj.error) {
    throw new CustomError(validatorObj.error.details[0].message, 400);
  } else {
    return true;
  }
};

module.exports = globalValidator;
