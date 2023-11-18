import badgesController from "../controllers/badges.controller.js";
import express from "express";

const badgesRouter = express.Router();

badgesRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(payload.badgeName || payload.badgeDescription || payload.badgeValue)
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const newBadge = await badgesController.addBadge(payload);
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
});

badgesRouter.get("/", async (req, res) => {
  try {
    const badge = await badgesController.getAllBadges();
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
});

badgesRouter.get("/:badgeId", async (req, res) => {
  try {
    const id = req.params.badgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BadgeId Query",
        data: [],
      });
    }
    const badge = await badgesController.getBadgeById(id);
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
});

badgesRouter.patch("/:badgeId", async (req, res) => {
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
      !(payload.badgeName || payload.badgeDescription || payload.badgeValue)
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }

    const updatedBadge = await badgesController.updateBadgeById(id, payload);
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
});

badgesRouter.delete("/:badgeId", async (req, res) => {
  try {
    const id = req.params.badgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BadgeId Params",
        data: [],
      });
    }
    const deletedBadge = await badgesController.deleteBadgeById(id);
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
});

export default badgesRouter;