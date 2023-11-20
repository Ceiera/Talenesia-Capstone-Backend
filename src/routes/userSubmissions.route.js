import userSubmissionsController from "../controllers/userSubmissions.controller.js";
import express from "express";

const userSubmissionsRouter = express.Router();

userSubmissionsRouter.post("/", userSubmissionsController.addUserSubmission);
userSubmissionsRouter.get("/", userSubmissionsController.getAllUserSubmissions);
userSubmissionsRouter.get(
  "/:userSubmissionId",
  userSubmissionsController.getUserSubmissionById
);
userSubmissionsRouter.patch(
  "/:userSubmissionId",
  userSubmissionsController.updateUserSubmissionById
);
userSubmissionsRouter.delete(
  "/:userSubmissionId",
  userSubmissionsController.deleteUserSubmissionById
);

export default userSubmissionsRouter;