import userProgressController from "../controllers/userProgress.controller.js";
import express from "express";

const userProgressRouter = express.Router();

userProgressRouter.post("/", userProgressController.addUserProgress);

userProgressRouter.get("/filter", userProgressController.getAllUserProgressBy3Params);

userProgressRouter.get("/", userProgressController.getAllUserProgress);
userProgressRouter.get(
  "/:userProgressId",
  userProgressController.getUserProgressById
);
userProgressRouter.patch(
  "/:userProgressId",
  userProgressController.updateUserProgressById
);

userProgressRouter.delete(
  "/filter",
  userProgressController.deleteBy3Params
);

userProgressRouter.delete(
  "/:userProgressId",
  userProgressController.deleteUserProgressById
);
export default userProgressRouter;
