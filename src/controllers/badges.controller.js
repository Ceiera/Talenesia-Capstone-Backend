import badgesService from "../services/badges.service.js";

const addBadge = async (badge) => {
  try {
    const newBadge = await badgesService.addBadge(badge);
    return newBadge;
  } catch (error) {
    return "Server Error";
  }
};

const getAllBadges = async () => {
  try {
    const badges = await badgesService.getAllBadges();
    return badges;
  } catch (error) {
    return "Server Error";
  }
};

const getBadgeById = async (id) => {
  try {
    const badge = await badgesService.getBadgeById(id);
    return badge;
  } catch (error) {
    return "Server Error";
  }
};

const updateBadgeById = async (id, badge) => {
  try {
    const findBadgeById = await badgesService.getBadgesById(id);
    if (!findBadgeById) {
      return "Not Found";
    }
    badge.updatedAt = Date.now();
    const updatedBadge = await badgesService.updateBadgeById(id, badge);
    return updatedBadge;
  } catch (error) {
    return "Server Error";
  }
};

const deleteBadgeById = async (id) => {
  try {
    const deletedBadge = await badgesService.deleteBadgeById(id);
    return deletedBadge;
  } catch (error) {
    return "Server Error";
  }
};

const badgesController = {
  addBadge,
  getAllBadges,
  getBadgeById,
  updateBadgeById,
  deleteBadgeById,
};

export default badgesController;
