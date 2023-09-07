const { UNAUTHORIZED } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const User = require("../model/userModel");

const userFindById = async (id) => {
  const user = await User.findById(id);

  if (user.length !== 1) {
    throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
  } else {
    return user;
  }
};

module.exports = userFindById;
