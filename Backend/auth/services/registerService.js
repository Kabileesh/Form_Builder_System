const passport = require("passport");
const { default: globalValidator } = require("../../Utils/globalValidators");
const {
  default: registerValidator,
} = require("../validators/registerValidator");
const hashPassword = require("../utils/hashPassword");
const createUser = require("../db/createUser");
const generateToken = require("./generateToken");

const registerService = async (username, name, password) => {
  console.log("Into register");
  if (globalValidator(registerValidator, { username, password })) {
    const hash = await hashPassword(password);
    console.log("Into register");
    const newUser = await createUser(username, name, hash);
    console.log("Registered");
    return new Promise((resolve, reject) => {
      passport.authenticate("local", { session: false }, (err, user) => {
        if (err) {
          return reject(err);
        }
        const accessToken = generateToken();
        return resolve({ newUser, accessToken });
      })();
    });
  }
};

module.exports = registerService;
