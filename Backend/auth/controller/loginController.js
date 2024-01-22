const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { REGISTER_SUCCESS, LOGIN_SUCCESS } = require("../../Utils/constants");
const loginService = require("../services/loginService");
const registerService = require("../services/registerService");

const registerUser = asyncErrorHandler(async (req, res, next) => {
  try {
    const { name, username, password } = req.body;
    registerService(username, name, password, req, res, (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(REGISTER_SUCCESS.status).send({
        message: REGISTER_SUCCESS.message,
        accessToken: result.accessToken,
        user: result.user,
      });
    });
  } catch (error) {
    next(error);
  }
});

const loginUser = asyncErrorHandler(async (req, res, next) => {
  try {
    const { username, password } = req.body;

    loginService(username, password, req, res, next, (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(LOGIN_SUCCESS.status).send({
        message: LOGIN_SUCCESS.message,
        accessToken: result.accessToken,
        user: result.sanitizedUser,
      });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { registerUser, loginUser };
