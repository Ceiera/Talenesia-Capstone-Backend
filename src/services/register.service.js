import usersService from "./users.service.js";
import userLibrariesService from "./userLibraries.service.js";
import userbadgesService from "./userBadges.service.js";

const registerUser = async (user) => {
  try {
    const newUser = await usersService.addUser({
      userRole: user.userRole,
      userEmail: user.userEmail,
      userFullName: user.userFullName,
      userName: user.userName,
      userPassword: user.userPassword,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const newUserLibrary = await userLibrariesService.addUserLibrary({
      userId: newUser.userId,
    });
    const newUserBadges = await userbadgesService.addUserBadge({
      userId: newUser.userId,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const registerService = {
  registerUser,
};

export default registerService;
