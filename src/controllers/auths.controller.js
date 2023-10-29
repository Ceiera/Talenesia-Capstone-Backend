import usersService from "../services/users.service.js";

const login = async (body) => {
  try {
    const { email, password, loginFrom } = body;
    if (!(email, password, loginFrom)) {
       return 'Missing Body'
    }

    const userDetails = usersService.findByEmail(email);
    if (userDetails.userPassword !== password) {
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
