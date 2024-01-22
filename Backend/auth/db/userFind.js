const User = require("../model/userModel");

const userFind = async (username) => {
  const user = await User.findOne(
    { username },
    { username: 1, _id: 1, hash: 1 }
  );

  return user;
};

module.exports = userFind;
