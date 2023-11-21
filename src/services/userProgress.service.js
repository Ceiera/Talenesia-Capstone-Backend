import UserProgressModel from "../models/userProgress.model.js";
import { nanoid } from "nanoid";

const addUserProgress = async (userProgress) => {
  try {
    const newUserProgress = new UserProgressModel({
      userProgressId: nanoid(12),
      userId: userProgress.userId,
      batchId: userProgress.batchId,
      subCourseId: userProgress.subCourseId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      softDeleted: false,
    });
    const addedUserProgress = await newUserProgress.save();
    return addedUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUserProgress = async () => {
  try {
    const allUserProgress = await UserProgressModel.find();
    return allUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

const getUserProgressById = async (id) => {
  try {
    const allUserProgress = await UserProgressModel.findOne({
      userProgressId: id,
    });
    if (!allUserProgress) {
      return "Not Found";
    }
    return allUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

const updateUserProgressById = async (id, userProgress) => {
  try {
    const findUserProgressById = await UserProgressModel.findOne({
      userProgressId: id,
    });
    if (!findUserProgressById) {
      return "Not Found";
    }
    userProgress.updatedAt = Date.now();
    const updatedUserProgress = await UserProgressModel.findOneAndUpdate(
      { userProgressId: id },
      userProgress,
      { new: true }
    );
    return updatedUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserProgressById = async (id) => {
  try {
    const findUserProgressById = await UserProgressModel.findOne({
      userProgressId: id,
    });
    if (!findUserProgressById) {
      return "Not Found";
    }
    const deletedUserProgress = await UserProgressModel.findOneAndDelete({
      userProgressId: id,
    });
    return deletedUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

const getUserProgressByBatchId = async (batchId) => {
  try {
    const allUserProgress = await UserProgressModel.agregate([
      {
        $match: {
          batchId: batchId,
        },
        $lookup: {
          from: "subcourses",
          localField: "subCourseId",
          foreignField: "subCourseId",
          as: "subcoursesdetail",
        },
        $lookup: {
          from: "user",
          localField: "userId",
          foreignField: "userId",
          pipeline: [
            {
              $project: { userId, userFullName, userRole, userEmail },
            },
          ],
          as: "userdetail",
        },
      },
    ]);
    return allUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

//buat cek dari sisi user
const getByUserIdandBatchId = async (userId, batchId) => {
  try {
    const allUserProgress = await UserProgressModel.agregate([
      {
        $match: {
          userId: userId,
          batchId: batchId,
        },
        $lookup: {
          from: "subcourses",
          localField: "subCourseId",
          foreignField: "subCourseId",
          as: "subcoursesdetail",
        },
      },
    ]);
    return allUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

//buat Absensi
const getByBatchIdandSubCourseId = async (batchId, subCourseId) => {
  try {
    const allUserProgress = await UserProgressModel.agregate([
      {
        $match: {
          batchId: batchId,
          subCourseId: subCourseId,
        },
        $lookup: {
          from: "subcourses",
          localField: "subCourseId",
          foreignField: "subCourseId",
          as: "subcoursesdetail",
        },
      },
    ]);
    if (!allUserProgress) {
      return "Not Found";
    }
    return allUserProgress;
  } catch (error) {
    return "Server Error";
  }
};

const userProgressService = {
  addUserProgress,
  getAllUserProgress,
  getUserProgressById,
  updateUserProgressById,
  deleteUserProgressById,
  getByUserIdandBatchId,
  getUserProgressByBatchId,
  getByBatchIdandSubCourseId,
};

export default userProgressService;
