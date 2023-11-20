import userProgressService from "../services/userProgress.service.js";

const addUserProgress = async (req, res) => {
  try {
    const payload = req.body;
    if (!(payload.userId || payload.batchId || payload.subCourseId)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const userProgress = await userProgressService.addUserProgress(payload);
    if (userProgress === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(201).send({
      status: "success",
      message: "User Progress Succesfully Created",
      data: userProgress,
    })
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getAllUserProgress = async (req, res) => {
  try {
    const allUserProgress = await userProgressService.getAllUserProgress();
    if (allUserProgress === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Progress Succesfully Retrieved",
      data: allUserProgress,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserProgressById = async (req, res) => {
  try {
    const id = req.params.userProgressId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userProgressId Params",
        data: [],
      });
    }
    const userProgress = await userProgressService.getUserProgressById(id);
    if (userProgress === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (userProgress === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Progress Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Progress Succesfully Retrieved",
      data: userProgress,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const updateUserProgressById = async (req, res) => {
  try {
    const id = req.params.userProgressId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userProgressId Params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.userId || payload.batchId || payload.subCourseId)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const updatedUserProgress = await userProgressService.updateUserProgressById(
      id,
      payload
    );
    if (updatedUserProgress === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (updatedUserProgress === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Progress Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Progress Succesfully Updated",
      data: updatedUserProgress,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteUserProgressById = async (req, res) => {
  try {
    const id = req.params.userProgressId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userProgressId Params",
        data: [],
      });
    }
    const deletedUserProgress =
      await userProgressService.deleteUserProgressById(id);
    if (deletedUserProgress === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (deletedUserProgress === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Progress Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Progress Succesfully Deleted",
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

const userProgressController = {
  addUserProgress,
  getAllUserProgress,
  getUserProgressById,
  updateUserProgressById,
  deleteUserProgressById,
};

export default userProgressController;
