const jwt = require("jsonwebtoken");

const generateToken = () => {
  const accesToken = jwt.sign(
    {
      id: req.user.id,
      username: req.user.username,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.SECRET
  );

  return accesToken;
};

module.exports = generateToken;
