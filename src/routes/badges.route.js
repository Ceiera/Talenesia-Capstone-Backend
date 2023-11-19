import badgesController from "../controllers/badges.controller.js";
import express from "express";

const badgesRouter = express.Router();

badgesRouter.post("/", badgesController.addBadge);

badgesRouter.get("/", badgesController.getAllBadges);

badgesRouter.get("/:badgeId", badgesController.getBadgeById);

badgesRouter.patch("/:badgeId", badgesController.updateBadgeById);

badgesRouter.delete("/:badgeId", badgesController.deleteBadgeById);

export default badgesRouter;
