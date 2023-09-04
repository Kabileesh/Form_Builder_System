const passport = require("passport");
const globalValidator = require("../../Utils/globalValidators");
const registerValidator = require("../validators/registerValidator");
const hashPassword = require("../utils/hashPassword");
const createUser = require("../db/createUser");
const generateToken = require("./generateToken");

const registerService = async (username, name, password) => {
  console.log("Into register");
  if (globalValidator(registerValidator, { username, password })) {
    const hash = await hashPassword(password);
    console.log("Into register 1");
    const newUser = await createUser(username, name, hash);
    console.log("Registered");
    passport.authenticate(
      "local",
      { session: false },
      (req,
      res,
      async (err) => {
        const accessToken = generateToken();
        const user = {
          username: newUser.username,
          name: newUser.name,
        };
        return { user, accessToken };
      })
    );
  }
};

module.exports = registerService;
