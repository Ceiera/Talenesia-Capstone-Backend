import usersService from "../services/users.service.js";

const addUser = async (user) => {
  try {
    const newUser = await usersService.addUser(user);
    if (newUser === "Server Error") {
      return "Server Error";
    }
    return newUser;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUsers = async () => {
  try {
    const users = await usersService.getAllUsers();
    return users;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await usersService.getUserByEmail(email);
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await usersService.getUserByUsername(username);
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByUserId = async (userId) => {
  try {
    const user = await usersService.getUserByUserId(userId);
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const getUserByFullname = async (fullname) => {
  try {
    const user = await usersService.getUserByFullname(fullname);
    return user;
  } catch (error) {
    return "Server Error";
  }
};

const updateUserById = async (userId, user) => {
  try {
    const updatedUser = await usersService.updateUserById(userId, user);
    return updatedUser;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserById = async (userId) => {
  try {
    const deletedUser = await usersService.deleteUserById(userId);
    return deletedUser;
  } catch (error) {
    return "Server Error";
  }
};

const usersController = {
  addUser,
  getAllUsers,
  getUserByEmail,
  getUserByUsername,
  getUserByUserId,
  getUserByFullname,
  updateUserById,
  deleteUserById,
};

export default usersController;
