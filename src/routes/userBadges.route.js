import userBadgesController from "../controllers/userBadges.controller.js";
import express from "express";

const userBadgesRouter = express.Router();

userBadgesRouter.post("/", userBadgesController.addUserBadge);

userBadgesRouter.get("/", userBadgesController.getAllUserBadges);

userBadgesRouter.get(
  "/filters",
  userBadgesController.getUserBadgesByBatchIdandSubCourseId
);

userBadgesRouter.get("/:userBadgeId", userBadgesController.getUserBadgeById);

userBadgesRouter.delete(
  "/:userBadgeId",
  userBadgesController.deleteUserBadgeById
);

userBadgesRouter.patch(
  "/:userBadgeId",
  userBadgesController.updateUserBadgeById
)

export default userBadgesRouter;
