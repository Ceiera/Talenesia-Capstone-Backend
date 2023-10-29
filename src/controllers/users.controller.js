import usersService from "../services/users.service.js";

const addUser = async (user) => {
  try {
    const newUser = await usersService.addUser(user);
    if ("Server Error") {
      return "Server Error";
    }
    return newUser;
  } catch (error) {
    return "Server Error";
  }
};

const usersController = { addUser };

export default usersController;
