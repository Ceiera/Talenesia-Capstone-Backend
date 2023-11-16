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

const getUserByEmail = async (email) => {
  try {
    const user = await usersModel.findOne({ userEmail: email });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await usersModel.findOne({ userName: username });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByUserId = async (userId) => {
  try {
    const user = await usersModel.findOne({ userId: userId });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByFullname = async (fullname) => {
  try {
    const user = await usersModel.find({ userFullName: { $regex: fullname, $options: "i"} });
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const updateUserById = async (userId, user) => {
  try {
    const findUser = await usersModel.findOne({ userId: userId });
    if (!findUser) {
      return "Not Found";
    }
    if (user.userPassword !== findUser.userPassword) {
      user.userPassword = bcrypt.hashSync(user.userPassword, 10);
    }
    user.updateAt = Date.now();
    const updatedUser = await usersModel.findOneAndUpdate(
      { userId: userId },
      user,
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    return "Server Error";
  }
}
const deleteUserById = async (userId) => {
  try {
    const deletedUser = await usersModel.deleteOne({ userId: userId });
    if (deletedUser == 0) {
      return "Not Found";
    }
    return deletedUser;
  } catch (error) {
    return "Server Error";
  }
}

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
  deleteUserById
};

export default usersService;
