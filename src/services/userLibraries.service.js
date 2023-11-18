import { nanoid } from "nanoid";
import UserLibrariesModel from "../models/userLibraries.model.js";

const addUserLibrary = async (userLibrary) => {
  try {
    const newLibrary = new UserLibrariesModel({
      userLibrariesId: nanoid(12),
      userId: userLibrary.userId,
      batchId: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await newLibrary.save();
    return newLibrary;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getAllUserLibraries = async () => {
  try {
    const userLibraries = await UserLibrariesModel.find();
    return userLibraries;
  } catch (error) {
    return "Server Error";
  }
};

const getUserLibraryByUserId = async (id) => {
  try {
    const userLibrary = await UserLibrariesModel.findOne({
      userId: id,
    });
    if (!userLibrary) {
      return "Not Found";
    }
    return userLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const getUserLibraryById = async (id) => {
  try {
    const userLibrary = await UserLibrariesModel.findOne({
      userLibrariesId: id,
    });
    if (!userLibrary) {
      return "Not Found";
    }
    return userLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const addBatchIdById = async (id, batchId) => {
  try {
    let findUserLibrary = await UserLibrariesModel.findOne({
      userLibrariesId: id,
    });
    if (!findUserLibrary) {
      return "Not Found";
    }
    findUserLibrary.batchId = [...findUserLibrary.batchId, batchId];
    findUserLibrary.updatedAt = Date.now();
    const updatedUserLibrary = await UserLibrariesModel.findOneAndUpdate(
      { userLibrariesId: id },
      findUserLibrary,
      { new: true }
    );
    return updatedUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const deleteBatchIdById = async (id, batchId) => {
  try {
    let findUserLibrary = await UserLibrariesModel.findOne({
      userLibrariesId: id,
    });
    if (!findUserLibrary) {
      return "Not Found";
    }
    findUserLibrary.batchId = findUserLibrary.batchId.filter(
      (batch) => batch !== batchId
    );
    findUserLibrary.updatedAt = Date.now();
    const updatedUserLibrary = await UserLibrariesModel.findOneAndUpdate(
      { userLibrariesId: id },
      findUserLibrary,
      { new: true }
    );
    return updatedUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserLibraryById = async (id) => {
  try {
    let findUserLibrary = await UserLibrariesModel.findOne({
      userLibrariesId: id,
    });
    if (!findUserLibrary) {
      return "Not Found";
    }
    const deletedUserLibrary = await UserLibrariesModel.findOneAndDelete({
      userLibrariesId: id,
    });
    return deletedUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const userLibrariesService = {
  addUserLibrary,
  addBatchIdById,
  deleteBatchIdById,
  deleteUserLibraryById,
  getAllUserLibraries,
  getUserLibraryByUserId,
  getUserLibraryById,
};

export default userLibrariesService;
