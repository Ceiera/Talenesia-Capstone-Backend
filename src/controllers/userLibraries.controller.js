import userLibrariesService from "../services/userLibraries.service.js";

const addUserLibrary = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.userId) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const newUserLibrary = await userLibrariesService.addUserLibrary(payload);
    if (newUserLibrary === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "User Library Succesfully Created",
      data: newUserLibrary,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getAllUserLibraries = async (req, res) => {
  try {
    const userLibraries = await userLibrariesService.getAllUserLibraries();
    if (userLibraries === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "User Libraries Succesfully Retrieved",
      data: userLibraries,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserLibraryById = async (req, res) => {
  try {
    const id = req.params.userLibraryId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userLibraryId Query",
        data: [],
      });
    }
    const userLibrary = await userLibrariesService.getUserLibraryById(id);
    if (userLibrary === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (userLibrary === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Library Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Library Succesfully Retrieved",
      data: userLibrary,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteUserLibraryById = async (req, res) => {
  try {
    const id = req.params.userLibraryId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userLibraryId Params",
        data: [],
      });
    }
    const deletedUserLibrary =
      await userLibrariesController.userLibrariesService(id);
    if (deletedUserLibrary === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (deletedUserLibrary === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Library Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Library Succesfully Deleted",
      data: [],
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const userLibrariesController = {
  addUserLibrary,
  deleteUserLibraryById,
  getAllUserLibraries,
  getUserLibraryById,
};

export default userLibrariesController;
