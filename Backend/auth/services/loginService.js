const passport = require("passport");
const globalValidator = require("../../Utils/globalValidators");
const loginValidator = require("../validators/loginValidator");
const userFind = require("../db/userFind");
const generateToken = require("./generateToken");

const loginService = async (username, password) => {
  if (globalValidator(loginValidator, { username, password })) {
    const user = await userFind(username);
    if (user) {
      passport.authenticate("local", { session: false })(
        req,
        res,
        async (err) => {
          const accessToken = generateToken();
          return { user, accessToken };
        }
      );
    }
  }
};

module.exports = loginService;
