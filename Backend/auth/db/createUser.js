const User = require("../model/userModel");

const createUser = async (username, name, hash) => {
  const user = new User({
    username: username.toLowerCase(),
    name: name,
    hash: hash,
  });

  const newUser = await user.save();

  return newUser;
};

module.exports = createUser;
