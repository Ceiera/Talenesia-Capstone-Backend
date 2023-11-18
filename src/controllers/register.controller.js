import registerService from "../services/register.service.js";

const registerUser = async (user) => {
  try {
    const newUser = await registerService.registerUser(user);
    return newUser;
  } catch (error) {
    return "Server Error";
  }
};

const registerController = {
  registerUser,
};

export default registerController;
