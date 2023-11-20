import express from "express";
import batchesController from "../controllers/batches.controller.js";
const batchesRouter = express.Router();

batchesRouter.post("/", batchesController.addBatch);

batchesRouter.get("/", batchesController.getAllBatches);

batchesRouter.get("/:batchId/badges", batchesController.getBadgeByBatchId);

batchesRouter.get("/:batchId", batchesController.getBatchById);

batchesRouter.patch("/:batchId", batchesController.updateBatchById);

batchesRouter.delete("/:batchId", batchesController.deleteBatchById);

batchesRouter.get("/:batchId/participants", batchesController.getAllParticipants);

batchesRouter.post("/:batchId/participants", batchesController.addParticipant);

batchesRouter.get("/:batchId/mentors", batchesController.getAllMentors);

batchesRouter.post("/:batchId/mentors", batchesController.addMentor);

export default batchesRouter;
