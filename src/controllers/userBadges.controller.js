import userBadgesService from "../services/userBadges.service.js";

const addUserBadge = async (userBadge) => {
  try {
    const newUserBadge = await userBadgesService.addUserBadge(userBadge);
    return newUserBadge;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUserBadges = async () => {
  try {
    const userBadges = await userBadgesService.getAllUserBadges();
    return userBadges;
  } catch (error) {
    return "Server Error";
  }
};

const getUserBadgeById = async (id) => {
  try {
    const userBadge = await userBadgesService.getUserBadgeById(id);
    return userBadge;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserBadgeById = async (id) => {
  try {
    const deletedUserBadge = await userBadgesService.deleteUserBadgeById(id);
    return deletedUserBadge;
  } catch (error) {
    return "Server Error";
  }
};

const userBadgesController = {
  addUserBadge,
  getAllUserBadges,
  getUserBadgeById,
  deleteUserBadgeById,
};

export default userBadgesController;
