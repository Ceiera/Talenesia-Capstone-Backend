import UserBadgesModel from "../models/userBadges.model.js";
import { nanoid } from "nanoid";

const addUserBadge = async (userBadge) => {
  try {
    const userBadges = new UserBadgesModel({
      userBadgesId: nanoid(12),
      userId: userBadge.userId,
      badgeId: userBadge.badgeId,
      subCourseId: userBadge.subCourseId,
      batchId: userBadge.batchId,
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
    const userBadge = await UserBadgesModel.aggregate([
      {
        $match: { userId: id },
      },
      {
        $lookup: {
          from: "badges",
          localField: "badgeId",
          foreignField: "badgeId",
          as: "detailbadge",
        },
      },
    ]);
    if (userBadge.length < 1) {
      return "Not Found";
    }
    return userBadge;
  } catch (error) {
    return "Server Error";
  }
};

const getUserBadgeBySubCourseId = async (id) => {
  try {
    const userBadge = await UserBadgesModel.aggregate([
      {
        $match: { subCourseId: id },
      },
      {
        $lookup: {
          from: "badges",
          localField: "badgeId",
          foreignField: "badgeId",
          as: "detailbadge",
        },
      },
    ]);
    if (userBadge.length < 1) {
      return "Not Found";
    }
    return userBadge;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getUserBadgeByBatchId = async (id) => {
  try {
    const userBadge = await UserBadgesModel.aggregate([
      {
        $match: { batchId: id },
      },
      {
        $lookup: {
          from: "badges",
          localField: "badgeId",
          foreignField: "badgeId",
          as: "detailbadge",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "userId",
          pipeline: [
            {
              $project: {
                _id: 0,
                userId: 1,
                userFullName: 1,
                userRole: 1,
                userEmail: 1,
              },
            },
          ],
          as: "userdetail",
        },
      },
      {
        $group: {
          _id: "$userdetail.userId",
          detailUser: {
            $first: { $arrayElemAt: ["$userdetail", 0] },
          },
          listBadges: {
            $push: { $arrayElemAt: ["$detailbadge", 0] },
          },
        },
      },
    ]);
    if (userBadge.length < 1) {
      return "Not Found";
    }
    return userBadge;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getUserBadgesByBatchIdandSubCourseId = async (id) => {
  try {
    const userBadge = await UserBadgesModel.aggregate([
      {
        $match: { batchId: id, subCourseId: id },
      },
      {
        $lookup: {
          from: "badges",
          localField: "badgeId",
          foreignField: "badgeId",
          as: "detailbadge",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "userId",
          pipeline: [
            {
              $project: {
                _id: 0,
                userId: 1,
                userFullName: 1,
                userRole: 1,
                userEmail: 1,
              },
            },
          ],
          as: "userdetail",
        },
      },
      {
        $group: {
          _id: "$userdetail.userId",
          detailUser: {
            $first: { $arrayElemAt: ["$userdetail", 0] },
          },
          listBadges: {
            $first: { $arrayElemAt: ["$detailbadge", 0] },
          },
        },
      },
    ]);
    if (userBadge.length < 1) {
      return "Not Found";
    }
    return userBadge;
  } catch (error) {
    console.log(error);
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
    const deletedUserBadge = await UserBadgesModel.findOneAndDelete({
      userBadgesId: id,
    });
    return deletedUserBadge;
  } catch (error) {
    return "Server Error";
  }
};

const updateUserBadgeById = async (id, userBadge) => {
  try {
    const findUserBadge = await UserBadgesModel.findOne({
      userBadgesId: id,
    });
    if (!findUserBadge) {
      return "Not Found";
    }
    const payload = {
      userId: userBadge.userId,
      badgeId: userBadge.badgeId,
      subCourseId: userBadge.subCourseId,
      batchId: userBadge.batchId,
      updatedAt: Date.now(),
    };
    const updatedUserBadge = await UserBadgesModel.findOneAndUpdate(
      { userBadgesId: id },
      payload,
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
  getUserBadgeBySubCourseId,
  getUserBadgeByBatchId,
  getUserBadgesByBatchIdandSubCourseId,
  updateUserBadgeById,
};

export default userBadgesService;
