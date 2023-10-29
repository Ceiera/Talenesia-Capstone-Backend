import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv/config";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(403).send({
      message: "No token provided!",
    });
  }
  try {
    const decoded = jsonwebtoken.verify(token, process.env.AUTH_SECRET);
    req.auth = decoded;
  } catch (error) {
    return res.status(401).send({ message: "Invalid Token" });
  }
  return next();
};

export { verifyToken };
