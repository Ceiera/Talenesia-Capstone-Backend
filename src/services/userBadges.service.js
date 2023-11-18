import UserBadgesModel from "../models/userBadges.model.js";
import { nanoid } from "nanoid";

const addUserBadge = async (userBadges) => {
  try {
    const userBadges = new UserBadgesModel({
      userBadgesId: nanoid(12),
      userId: userBadges.userId,
      listBadges: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const newUserBadges = await userBadges.save();
    return newUserBadges;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUserBadges = async () => {
  try {
    const userBadges = await UserBadgesModel.find();
    return userBadges;
  } catch (error) {
    return "Server Error";
  }
};

const getUserBadgeById = async (id) => {
  try {
    const userBadge = await UserBadgesModel.findOne({
      userBadgesId: id,
    });
    if (!userBadge) {
      return "Not Found";
    }
    return userBadge;
  } catch (error) {
    return "Server Error";
  }
};

const getUserBadgeByUserId = async (id) => {
  try {
    const userBadge = await UserBadgesModel.findOne({
      userId: id,
    });
    if (!userBadge) {
      return "Not Found";
    }
    return userBadge;
  } catch (error) {
    return "Server Error";
  }
};

const addBadge = async (id, badge) => {
  try {
    const userBadge = await getUserBadgeByUserId(id);
    if (!userBadge) {
      return "Not Found";
    }
    userBadge.listBadges.push(badge);
    const updatedUserBadge = await UserBadgesModel.findOneAndUpdate(
      { userId: id },
      userBadge,
      { new: true }
    );
    return updatedUserBadge;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserBadgeById = async (id) => {
  try {
    const userBadge = await getUserBadgeById(id);
    if (!userBadge) {
      return "Not Found";
    }
    const updatedUserBadge = await UserBadgesModel.findOneAndUpdate(
      { userBadgesId: id },
      userBadge,
      { new: true }
    );
    return updatedUserBadge;
  } catch (error) {
    return "Server Error";
  }
};

const userBadgesService = {
  addUserBadge,
  getAllUserBadges,
  getUserBadgeById,
  getUserBadgeByUserId,
  addBadge,
  deleteUserBadgeById,
};

export default userBadgesService;
