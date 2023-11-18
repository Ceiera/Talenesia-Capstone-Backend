import userBadgesController from "../controllers/userBadges.controller.js";
import express from "express";

const userBadgesRouter = express.Router();

userBadgesRouter.get("/", async (req, res) => {
  try {
    const userBadges = await userBadgesController.getAllUserBadges();
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
});

userBadgesRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (!payload.userId) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const newUserBadge = await userBadgesController.addUserBadge(payload);
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
});

userBadgesRouter.get("/:userBadgeId", async (req, res) => {
  try {
    const id = req.params.userBadgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userBadgeId Params",
        data: [],
      });
    }
    const userBadge = await userBadgesController.getUserBadgeById(id);
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
});

userBadgesRouter.delete("/:userBadgeId", async (req, res) => {
  try {
    const id = req.params.userBadgeId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing userBadgeId Params",
        data: [],
      });
    }
    const deletedUserBadge = await userBadgesController.deleteUserBadgeById(id);
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
});

export default userBadgesRouter;
