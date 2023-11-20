import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv/config";

const verifyTokenUser = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) {
    res.status(403).send({
      status: "error",
      message: "No token provided!",
      data: [],
    });
  }
  try {
    const decoded = jsonwebtoken.verify(token, process.env.AUTH_SECRET);
    req.auth = decoded;
  } catch (error) {
    return res.status(401).send({
      status: "error",
      message: "Invalid Token",
      data: [],
    });
  }
  return next();
};

const authMiddleware = { verifyTokenUser };

export default authMiddleware;
