import usersService from "../services/users.service.js";
import bcrypt from "bcrypt";

const login = async (payload) => {
  try {
    const userDetails = await usersService.findByEmail(payload.email);
    if (!userDetails) {
      return "Not Found";
    }
    const match = await bcrypt.compare(payload.password, userDetails.userPassword);
    if (!match) {
      return "Incorrect password";
    }
    const userEntity = {
      userId: userDetails.userId,
      userRole: userDetails.userRole,
      userEmail: userDetails.userEmail,
      userFullName: userDetails.userFullName,
      userName: userDetails.userName,
    }
    const token = usersService.createJWT(userEntity);
    return token;
  } catch (error) {
    return "Server Error";
  }
};

const authsController = {
  login,
};

export default authsController;
