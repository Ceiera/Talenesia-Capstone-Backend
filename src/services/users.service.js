import usersModel from "../models/users.model.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
const createJWT = (user) => {
  const payload = {
    userId: user.userId,
    userRole: user.userRole,
    userEmail: user.userEmail,
    userFullName: user.userFullName,
    userName: user.userName,
  };

  const token = jsonwebtoken.sign(payload, process.env.AUTH_SECRET);
  return "Bearer " + token;
};

const findByEmail = async (email) => {
  try {
    const user = await usersModel.findOne({ userEmail: email });
    if (!user) {
      return "User Not Found";
    }
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const addUser = async (user) => {
  try {
    const newUser = new usersModel({
      userRole: user.userRole,
      userEmail: user.userEmail,
      userFullName: user.userFullName,
      userName: user.userName,
      userPassword: bcrypt.hashSync(user.userPassword, 10),
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUsers = async () => {
  try {
    const users = await usersModel.find();
    return users;
  } catch (error) {
    return "Server Error";
  }
};

const usersService = { findByEmail, createJWT, addUser, getAllUsers };

export default usersService;
