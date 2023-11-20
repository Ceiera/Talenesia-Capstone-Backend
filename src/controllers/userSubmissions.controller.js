import userSubmissionsService from "../services/userSubmissions.service.js";

const addUserSubmission = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.userId ||
        payload.batchId ||
        payload.subCourseId ||
        payload.link
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const userSubmission = await userSubmissionsService.addUserSubmission(
      payload
    );
    if (userSubmission === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(201).send({
      status: "success",
      message: "User Submission Succesfully Created",
      data: userSubmission,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getAllUserSubmissions = async (req, res) => {
  try {
    const allUserSubmissions =
      await userSubmissionsService.getAllUserSubmissions();
    if (allUserSubmissions === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Submissions Succesfully Retrieved",
      data: allUserSubmissions,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserSubmissionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing Id Params",
        data: [],
      });
    }
    const userSubmission = await userSubmissionsService.getUserSubmissionById(
      id
    );
    if (userSubmission === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (!userSubmission) {
      return res.status(404).send({
        status: "error",
        message: "User Submission Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Submission Succesfully Retrieved",
      data: userSubmission,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const updateUserSubmissionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing Id Params",
        data: [],
      });
    }
    const payload = req.body;
    if (
      !(
        payload.userId ||
        payload.batchId ||
        payload.subCourseId ||
        payload.link
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const userSubmission =
      await userSubmissionsService.updateUserSubmissionById(id, payload);
    if (userSubmission === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (userSubmission === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Submission Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Submission Succesfully Updated",
      data: userSubmission,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteUserSubmissionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing Id Params",
        data: [],
      });
    }
    const userSubmission =
      await userSubmissionsService.deleteUserSubmissionById(id);
    if (userSubmission === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (userSubmission === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Submission Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Submission Succesfully Deleted",
      data: userSubmission,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const userSubmissionsController = {
  addUserSubmission,
  getAllUserSubmissions,
  getUserSubmissionById,
  updateUserSubmissionById,
  deleteUserSubmissionById,
};

export default userSubmissionsController;
