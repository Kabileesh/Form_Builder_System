const jwt = require("jsonwebtoken");
const { FORBIDDEN } = require("../Utils/constants.js");

const verifyToken = (req, res) => {
  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    res.send({ id: decoded.id, username: decoded.username });
  } catch (error) {
    res.status(FORBIDDEN.status).send({ message: FORBIDDEN.message });
  }
};

module.exports = verifyToken;
