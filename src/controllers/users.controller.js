import usersService from "../services/users.service.js";
import userLibrariesService from "../services/userLibraries.service.js";
import userBadgesService from "../services/userBadges.service.js";
import userProgressService from "../services/userProgress.service.js";
import userSubmissionsService from "../services/userSubmissions.service.js";

const addUser = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.userRole ||
        payload.userEmail ||
        payload.userPassword ||
        payload.userFullName ||
        payload.userName
      )
    ) {
      res
        .status(400)
        .send({ status: "error", message: "Missing Body", data: [] });
      return;
    }
    const newUser = await usersService.addUser(payload);
    if (newUser === "Server Error") {
      res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
      return;
    }
    res.status(201).send({
      status: "success",
      message: "User Succesfully Created",
      data: newUser,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    if (users === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Users Succesfully Retrieved",
      data: users,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).send({
        status: "error",
        message: "Missing Email Query",
        data: [],
      });
    }
    const user = await usersService.getUserByEmail(email);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserByFullname = async (req, res) => {
  try {
    const fullname = req.query.fullname;
    if (!fullname) {
      return res.status(400).send({
        status: "error",
        message: "Missing Username Query",
        data: [],
      });
    }
    const user = await usersService.getUserByFullname(fullname);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const username = req.query.username;
    if (!username) {
      return res.status(400).send({
        status: "error",
        message: "Missing Username Query",
        data: [],
      });
    }
    const user = await usersService.getUserByUsername(username);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserByUserId = async (req, res) => {
  try {
    const id = req.params.userId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing UserId params",
        data: [],
      });
    }
    const user = await usersService.getUserByUserId(id);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.userId;
    const payload = req.body;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing UserId params",
        data: [],
      });
    }
    if (
      !(
        payload.userRole ||
        payload.userEmail ||
        payload.userPassword ||
        payload.userUsername ||
        payload.userFullName
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const user = await usersService.updateUserById(id, payload);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (user === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Updated",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.userId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing UserId params",
        data: [],
      });
    }
    const user = await usersService.deleteUserById(id);
    if (user === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (user === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Succesfully Deleted",
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

const getUserLibraries = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const userLibraries = await userLibrariesService.getUserLibraryByUserId(
      userId
    );
    if (userLibraries === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Libraries Not Found",
        data: [],
      });
    }
    if (userLibraries === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
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

const getUserBadges = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const userBadges = await userBadgesService.getUserBadgeByUserId(userId);
    if (userBadges === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Badges Not Found",
        data: [],
      });
    }
    if (userBadges === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Badges Succesfully Retrieved",
      data: userBadges,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getUserProgress = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const batchId = req.query.batchId;
    if (!userId || !batchId) {
      return res.status(400).send({
        status: "error",
        message: "Missing Params",
        data: [],
      });
    }
    const userProgress = await userProgressService.getByBatchIdAndUserId(
      userId,
      batchId
    );
    if (userProgress === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Progress Not Found",
        data: [],
      });
    }
    if (userProgress === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
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

const getUserSubmission = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const batchId = req.query.batchId;
    if (!userId || !batchId) {
      return res.status(400).send({
        status: "error",
        message: "Missing Params",
        data: [],
      });
    }
    const userSubmission = await userSubmissionsService.getByBatchIdAndUserId(
      userId,
      batchId
    );
    if (userSubmission === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Submission Not Found",
        data: [],
      });
    }
    if (userSubmission === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
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

const usersController = {
  addUser,
  getAllUsers,
  getUserByEmail,
  getUserByUsername,
  getUserByUserId,
  getUserByFullname,
  updateUserById,
  deleteUserById,
  getUserLibraries,
  getUserBadges,
  getUserSubmission,
  getUserProgress,
};

export default usersController;
