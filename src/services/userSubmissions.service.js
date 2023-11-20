import UserSubmissionModel from "../models/userSubmission.model.js";
import { nanoid } from "nanoid";

const addUserSubmission = async (userSubmission) => {
  try {
    const newUserSubmission = new UserProgressModel({
      userSubmissionId: nanoid(12),
      userId: userSubmission.userId,
      batchId: userSubmission.batchId,
      subCourseId: userSubmission.subCourseId,
      link: userSubmission.link,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      softDeleted: false,
    });
    const addedUserSubmission = await newUserSubmission.save();
    return addedUserSubmission;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUserSubmissions = async () => {
  try {
    const allUserSubmissions = await UserSubmissionModel.find();
    return allUserSubmissions;
  } catch (error) {
    return "Server Error";
  }
};

const getUserSubmissionById = async (id) => {
  try {
    const allUserSubmissions = await UserSubmissionModel.findOne({
      userSubmissionId: id,
    });
    if (!allUserSubmissions) {
      return "Not Found";
    }
    return allUserSubmissions;
  } catch (error) {
    return "Server Error";
  }
};

const updateUserSubmissionById = async (id, userSubmission) => {
  try {
    const findUserSubmissionById = await UserSubmissionModel.findOne({
      userSubmissionId: id,
    });
    if (!findUserSubmissionById) {
      return "Not Found";
    }
    userSubmission.updatedAt = Date.now();
    const updatedUserSubmission = await UserSubmissionModel.findOneAndUpdate(
      { userSubmissionId: id },
      userSubmission,
      { new: true }
    );
    return updatedUserSubmission;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserSubmissionById = async (id) => {
  try {
    const findUserSubmissionById = await UserSubmissionModel.findOne({
      userSubmissionId: id,
    });
    if (!findUserSubmissionById) {
      return "Not Found";
    }
    const deletedUserSubmission = await UserSubmissionModel.findOneAndDelete({
      userSubmissionId: id,
    });
    return deletedUserSubmission;
  } catch (error) {
    return "Server Error";
  }
};

const getByBatchIdAndUserId = async (userId, batchId) => {
  try {
    const allUserSubmissions = await UserSubmissionModel.agregate([
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
    return allUserSubmissions;
  } catch (error) {
    return "Server Error";
  }
};

const userSubmissionsService = {
  addUserSubmission,
  getAllUserSubmissions,
  getUserSubmissionById,
  updateUserSubmissionById,
  deleteUserSubmissionById,
  getByBatchIdAndUserId,
};

export default userSubmissionsService;
