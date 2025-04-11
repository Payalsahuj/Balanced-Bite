const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msg: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ msg: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, "masai");
    req.body.userID = decoded.userID;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ msg: "Invalid or expired token", error: err.message });
  }
};

module.exports = { auth };
