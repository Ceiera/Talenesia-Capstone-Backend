import userLibrariesService from "../services/userLibraries.service.js";

const addUserLibrary = async (userLibrary) => {
  try {
    const newUserLibrary = await userLibrariesService.addUserLibrary(
      userLibrary
    );
    return newUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const getAllUserLibraries = async () => {
  try {
    const userLibraries = await userLibrariesService.getAllUserLibraries();
    return userLibraries;
  } catch (error) {
    return "Server Error";
  }
};

const getUserLibraryByUserId = async (id) => {
  try {
    const userLibrary = await userLibrariesService.getUserLibraryByUserId(id);
    return userLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const getUserLibraryById = async (id) => {
  try {
    const userLibrary = await userLibrariesService.getUserLibraryById(id);
    return userLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const addBatchIdById = async (id, batchId) => {
  try {
    const newUserLibrary = await userLibrariesService.addBatchIdById(
      id,
      batchId
    );
    return newUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const deleteBatchIdById = async (id, batchId) => {
  try {
    const newUserLibrary = await userLibrariesService.deleteBatchIdById(
      id,
      batchId
    );
    return newUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const deleteUserLibraryById = async (id) => {
  try {
    const deletedUserLibrary = await userLibrariesService.deleteUserLibraryById(
      id
    );
    return deletedUserLibrary;
  } catch (error) {
    return "Server Error";
  }
};

const userLibrariesController = {
  addUserLibrary,
  addBatchIdById,
  deleteBatchIdById,
  deleteUserLibraryById,
  getAllUserLibraries,
  getUserLibraryByUserId,
  getUserLibraryById,
};

export default userLibrariesController;
