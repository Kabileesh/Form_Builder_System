const { UNAUTHORIZED } = require("../../Utils/constants");
const CustomError = require("../../Utils/customError");
const User = require("../model/userModel");

const userFind = async (username) => {
  const user = await User.findOne(
    { username },
    { username: 1, _id: 1, hash: 1 }
  );

  if (JSON.stringify(user) === '{}') {
    throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
  } else {
    return user;
  }
};

module.exports = userFind;
