const { UNAUTHORIZED } = require("../../Utils/constants");
const { default: CustomError } = require("../../Utils/customError");
const User = require("../model/userModel");

const userFind = async (username) => {
  const user = await User.findOne(
    { username },
    { username: 1, _id: 1, hash: 1 }
  );

  if (user.length !== 1) {
    throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
  } else {
    return user;
  }
};

module.exports = userFind;
