const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  //getting back the token from the front end
  const token = authHeader.split(" ")[1];

  //verify token is valid, if token expired or not able to be verified, throw error

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };

    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};
module.exports = authenticationMiddleware;
