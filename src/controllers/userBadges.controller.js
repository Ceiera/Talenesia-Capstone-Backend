import userBadgesService from "../services/userBadges.service.js";
const addUserBadge = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.userId &&
        payload.badgeId &&
        payload.subCourseId &&
        payload.batchId
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const newUserBadge = await userBadgesService.addUserBadge(payload);
    if (newUserBadge === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "User Badge Succesfully Created",
      data: newUserBadge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getAllUserBadges = async (req, res) => {
  try {
    const userBadges = await userBadgesService.getAllUserBadges();
    if (userBadges === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
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

const getUserBadgeById = async (req, res) => {
  try {
    const id = req.params.userBadgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userBadgeId Params",
        data: [],
      });
    }
    const userBadge = await userBadgesService.getUserBadgeById(id);
    if (userBadge === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (userBadge === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Badge Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Badge Succesfully Retrieved",
      data: userBadge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteUserBadgeById = async (req, res) => {
  try {
    const id = req.params.userBadgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userBadgeId Params",
        data: [],
      });
    }
    const deletedUserBadge = await userBadgesService.deleteUserBadgeById(id);
    if (deletedUserBadge === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (deletedUserBadge === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Badge Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Badge Succesfully Deleted",
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

const getUserBadgesByBatchIdandSubCourseId = async (req, res) => {
  try {
    const batchId = req.query.batchId;
    const subCourseId = req.query.subCourseId;
    if (!(batchId && subCourseId)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Params",
        data: [],
      });
    }
    const userBadges =
      await userBadgesService.getUserBadgesByBatchIdandSubCourseId(
        batchId,
        subCourseId
      );
    if (userBadges === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
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

const updateUserBadgeById = async (req, res) => {
  try {
    const id = req.params.userBadgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userBadgeId Params",
        data: [],
      });
    }
    const payload = req.body;
    if (
      !(
        payload.userId &&
        payload.badgeId &&
        payload.subCourseId &&
        payload.batchId
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const updatedUserBadge = await userBadgesService.updateUserBadgeById(
      id,
      payload
    );
    if (updatedUserBadge === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (updatedUserBadge === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "User Badge Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "User Badge Succesfully Updated",
      data: updatedUserBadge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const userBadgesController = {
  addUserBadge,
  getAllUserBadges,
  getUserBadgeById,
  deleteUserBadgeById,
  getUserBadgesByBatchIdandSubCourseId,
  updateUserBadgeById,
};

export default userBadgesController;
