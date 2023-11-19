import userBadgesController from "../controllers/userBadges.controller.js";
import express from "express";

const userBadgesRouter = express.Router();

userBadgesRouter.post("/", userBadgesController.addUserBadge);

userBadgesRouter.get("/", userBadgesController.getAllUserBadges);

userBadgesRouter.get("/:userBadgeId", userBadgesController.getUserBadgeById);

userBadgesRouter.delete(
  "/:userBadgeId",
  userBadgesController.deleteUserBadgeById
);

export default userBadgesRouter;
