import learningTracksController from "../controllers/learningTracks.controller.js";
import express from "express";

const learningTrackRouter = express.Router();

learningTrackRouter.get("/", learningTracksController.getAllLearningTracks);

learningTrackRouter.post("/", learningTracksController.addLearningTrack);

learningTrackRouter.get(
  "/:learningTrackId",
  learningTracksController.getLearningTrackById
);

learningTrackRouter.patch(
  "/:learningTrackId",
  learningTracksController.updateLearningTrackById
);

learningTrackRouter.delete(
  "/:learningTrackId",
  learningTracksController.deleteLearningTrackById
);

export default learningTrackRouter;
