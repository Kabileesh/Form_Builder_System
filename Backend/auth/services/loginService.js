const passport = require("passport");
const globalValidator = require("../../Utils/globalValidators");
const loginValidator = require("../validators/loginValidator");
const userFind = require("../db/userFind");
const generateToken = require("./generateToken");
const CustomError = require("../../Utils/customError");
const { UNAUTHORIZED } = require("../../Utils/constants");

const loginService = async (username, password, req, res, next, callback) => {
  try {
    if (globalValidator(loginValidator, { username, password })) {
      const user = await userFind(username);
      if (!user) {
        callback(
          new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status),
          null
        );
        return;
      }
      if (user) {
        const sanitizedUser = {
          _id: user._id,
          username: user.username,
        };
        passport.authenticate("local", { session: false })(
          req,
          res,
          async (err) => {
            if (err) {
              callback(
                new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status),
                null
              );
            } else {
              const username = req.user.username;
              const id = req.user.id;
              const accessToken = generateToken(id, username);
              const result = { sanitizedUser, accessToken };
              callback(null, result);
            }
          }
        );
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = loginService;
