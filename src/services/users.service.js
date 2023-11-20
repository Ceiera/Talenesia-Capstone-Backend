import UsersModel from "../models/users.model.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
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
    const user = await UsersModel.findOne({ userEmail: email });
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
    const newUser = new UsersModel({
      userId: nanoid(12),
      userRole: user.userRole,
      userEmail: user.userEmail,
      userFullName: user.userFullName,
      userName: user.userName,
      userPassword: bcrypt.hashSync(user.userPassword, 10),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUsers = async () => {
  try {
    const users = await UsersModel.find();
    return users;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await UsersModel.findOne({ userEmail: email });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await UsersModel.findOne({ userName: username });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByUserId = async (userId) => {
  try {
    const user = await UsersModel.findOne({ userId: userId });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByFullname = async (fullname) => {
  try {
    const user = await UsersModel.find({
      userFullName: { $regex: fullname, $options: "i" },
    });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const updateUserById = async (userId, user) => {
  try {
    const findUser = await UsersModel.findOne({ userId: userId });
    if (!findUser) {
      return "Not Found";
    }
    if (user.userPassword !== findUser.userPassword) {
      user.userPassword = bcrypt.hashSync(user.userPassword, 10);
    }
    user.updateAt = Date.now();
    const updatedUser = await UsersModel.findOneAndUpdate(
      { userId: userId },
      user,
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    return "Server Error";
  }
};
const deleteUserById = async (userId) => {
  try {
    const deletedUser = await UsersModel.deleteOne({ userId: userId });
    if (deletedUser.deletedCount == 0) {
      return "Not Found";
    }
    return deletedUser;
  } catch (error) {
    return "Server Error";
  }
};

const usersService = {
  findByEmail,
  createJWT,
  addUser,
  getAllUsers,
  getUserByEmail,
  getUserByUsername,
  getUserByUserId,
  getUserByFullname,
  updateUserById,
  deleteUserById,
};

export default usersService;
