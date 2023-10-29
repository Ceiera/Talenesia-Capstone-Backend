import usersService from "../services/users.service.js";
import bcrypt from "bcrypt";

const login = async (body) => {
  try {
    const { email, password } = body;
    if (!(email, password)) {
       return 'Missing Body'
    }

    const userDetails = await usersService.findByEmail(email);
    const match = await bcrypt.compare(password, userDetails.userPassword)
    if (!match) {
      return "Incorrect password";
    }
    const token = usersService.createJWT(userDetails);
    return token
  } catch (error) {
    return "Server Error";
  }
};




const authsController = {
  login,
};

export default authsController;
