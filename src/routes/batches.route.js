import express from "express";

const batchesRouter = express.Router();

batchesRouter.get("/", async (req, res) => {
  try {
    const batches = await batchesService.getAllBatches();
    if (batches === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Batches Succesfully Retrieved",
      data: batches,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

batchesRouter.get("/:batchId", async (req, res) => {
  const id = req.params.batchId;
  try {
    const batch = await batchesService.getBatchesByBatchId(id);
    if (batch === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (batch === "Batch Not Found") {
      return res
        .status(404)
        .send({ status: "error", message: "Batch Not Found", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Batch Succesfully Retrieved",
      data: batch,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

batchesRouter.post("/", async (req, res) => {
  try {
    const batch = await batchesService.createBatch(req.body);
    if (batch === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "Batch Succesfully Created",
      data: batch,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

batchesRouter.delete("/:batchId", async (req, res) => {
  const id = req.params.batchId;
  try {
    const deletedBatch = await batchesService.deleteBatchById(id);
    if (deletedBatch === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (deletedBatch === "Batch Not Found") {
      return res
        .status(404)
        .send({ status: "error", message: "Batch Not Found", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Batch Succesfully Deleted",
      data: deletedBatch,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

export default batchesRouter;