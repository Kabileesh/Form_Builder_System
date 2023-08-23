require("dotenv").config();
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Strategy: BearerStrategy } = require("passport-http-bearer");
const jwt = require("jsonwebtoken");
const { UNAUTHORIZED } = require("../Utils/constants");
const userFind = require("../auth/db/userFind");
const { default: CustomError } = require("../Utils/customError");

const credentials = async (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "username", passwordField: "password", session: false },
      async (username, password, done) => {
        const user = await userFind(username);
        if (!user) {
          throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
        }
        const passwordMatch = await bcrypt.compare(password, user.hash);
        if (passwordMatch) {
          return done(null, { id: user.id, username: user.username });
        } else {
          throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
        }
      }
    )
  );

  passport.use(
    new BearerStrategy(async (token, done) => {
      try {
        const decoded = jwt.verify(token, process.env.SECRET);
        // const existingUser = userFindById(decoded.id);
        if (
          decoded.exp &&
          new Date().getTime() < decoded.exp * 1000
        ) {
          const user = { id: decoded.id, username: decoded.username };
          return done(null, user);
        } else {
          throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
        }
      } catch (err) {
        throw new CustomError(UNAUTHORIZED.message, UNAUTHORIZED.status);
      }
    })
  );
};

module.exports = {
  credentials,
};
