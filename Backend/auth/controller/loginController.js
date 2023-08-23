const asyncErrorHandler = require("../../Utils/asyncErrorHandler");
const { REGISTER_SUCCESS, LOGIN_SUCCESS } = require("../../Utils/constants");
const loginService = require("../services/loginService");
const registerService = require("../services/registerService");

const registerUser = asyncErrorHandler(async (req, res) => {
  const { name, username, password } = req.body;
  const result = await registerService(username, name, password);

  return res.status(REGISTER_SUCCESS.status).send({
    message: REGISTER_SUCCESS.message,
    accessToken: result.accessToken,
    user: result.user,
  });
});

const loginUser = asyncErrorHandler(async (req, res) => {
  const { username, password } = req.body;

  const result = await loginService(username, password);

  return res.status(LOGIN_SUCCESS.status).send({
    message: LOGIN_SUCCESS.message,
    accessToken: result.accessToken,
    user: result.user,
  });
});

module.exports = { registerUser, loginUser };
