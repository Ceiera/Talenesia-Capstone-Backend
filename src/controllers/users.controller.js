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

const usersController = { addUser, getAllUsers };

export default usersController;
