import badgesService from "../services/badges.service.js";

const addBadge = async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(payload.badgeName && payload.badgeDescription && payload.badgeValue)
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const newBadge = await badgesService.addBadge(payload);
    if (newBadge === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "Badge Succesfully Created",
      data: newBadge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getAllBadges = async (req, res) => {
  try {
    const badge = await badgesService.getAllBadges();
    if (badge === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Badges Succesfully Retrieved",
      data: badge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getBadgeById = async (req, res) => {
  try {
    const id = req.params.badgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BadgeId Query",
        data: [],
      });
    }
    const badge = await badgesService.getBadgeById(id);
    if (badge === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (badge === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Badge Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Badge Succesfully Retrieved",
      data: badge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const updateBadgeById = async (req, res) => {
  try {
    const id = req.params.badgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BadgeId Params",
        data: [],
      });
    }
    const payload = req.body;
    if (
      !(payload.badgeName && payload.badgeDescription && payload.badgeValue)
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const updatedBadge = await badgesService.updateBadgeById(id, payload);
    if (updatedBadge === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (updatedBadge === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Badge Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Badge Succesfully Updated",
      data: updatedBadge,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteBadgeById = async (req, res) => {
  try {
    const id = req.params.badgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BadgeId Params",
        data: [],
      });
    }
    const deletedBadge = await badgesService.deleteBadgeById(id);
    if (deletedBadge === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (deletedBadge === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Badge Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Badge Succesfully Deleted",
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

const badgesController = {
  addBadge,
  getAllBadges,
  getBadgeById,
  updateBadgeById,
  deleteBadgeById,
};

export default badgesController;
