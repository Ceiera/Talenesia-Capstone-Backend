import { nanoid } from "nanoid";
import BadgesModel from "../models/badges.model.js";

const addBadge = async (badge) => {
  try {
    const newBadge = new BadgesModel({
      badgeId: nanoid(12),
      badgeName: badge.badgeName,
      badgeDescription: badge.badgeDescription,
      badgeValue: badge.badgeValue,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      softDeleted: false,
    });
    await newBadge.save();
    return newBadge;
  } catch (error) {
    return "Server Error";
  }
};

const getAllBadges = async () => {
  try {
    const badges = await BadgesModel.find();
    return badges;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getBadgeById = async (id) => {
  try {
    const badge = await BadgesModel.findOne({ badgeId: id });
    if (!badge) {
      return "Not Found";
    }
    return badge;
  } catch (error) {
    return "Server Error";
  }
};

const updateBadgeById = async (id, badge) => {
  try {
    const findBadgeById = await BadgesModel.findOne({
      badgeId: id,
    });
    if (!findBadgeById) {
      return "Not Found";
    }
    badge.updatedAt = Date.now();
    const updatedBadge = await BadgesModel.findOneAndUpdate(
      { badgeId: id },
      badge,
      { new: true }
    );
    return updatedBadge;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const deleteBadgeById = async (id) => {
  try {
    const findBadgeById = await BadgesModel.findOne({
      badgeId: id,
    });
    if (!findBadgeById) {
      return "Not Found";
    }
    const deletedBadge = await BadgesModel.findOneAndDelete({
      badgeId: id,
    });
    return deletedBadge;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const badgesService = {
  addBadge,
  getAllBadges,
  getBadgeById,
  updateBadgeById,
  deleteBadgeById,
};

export default badgesService;
