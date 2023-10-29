import usersModel from "../models/users.model.js";
import jsonwebtoken from "jsonwebtoken";

const createJWT = (user) => {
    const payload = {
        userId: user.userId,
        userRole: user.userRole,
        userEmail: user.userEmail,
        userFullName: user.userFullName,
        userName: user.userName,
    }

    const token = jsonwebtoken.sign(payload, process.env.AUTH_SECRET);
    return token;
}


const findByEmail = async (email) => {
  try {
    const user = await usersModel.findOne({ userEmail: email });
    return user;
  } catch (error) {
    return "server error";
  }
};

const usersService = { findByEmail, createJWT };

export default usersService;
