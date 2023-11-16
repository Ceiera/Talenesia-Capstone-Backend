import express from "express";
import batchesController from "../controllers/batches.controller.js";
const batchesRouter = express.Router();

batchesRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (
      !(
        payload.learningTrackId ||
        payload.batchName ||
        payload.batchDescription
      )
    ) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const batch = await batchesController.addBatch(payload);
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

batchesRouter.get("/", async (req, res) => {
  try {
    const batches = await batchesController.getAllBatches();
    if (batches === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Batches Succesfully Retrieved",
      data: batches,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

batchesRouter.get("/:batchId", async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await batchesController.getBatchById(id);
    if (batch === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (batch === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Batch Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Batch Succesfully Retrieved",
      data: batch,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

batchesRouter.patch("/:batchId", async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.batchName || batchDescription)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const batch = await batchesController.updateBatchById(id, payload);
    if (batch === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (batch === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Batch Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Batch Succesfully Updated",
      data: batch,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

batchesRouter.delete("/:batchId", async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await batchesController.deleteBatchById(id);
    if (batch === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (batch === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Batch Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Batch Succesfully Deleted",
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

batchesRouter.post("/:batchId/participants", async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.userId||payload.userFullName)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      })
    }
    const batch = await batchesController.addParticipant(id, payload);
    if (batch === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (batch === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Batch Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Participant Succesfully Added",
      data: batch,
    })
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});

batchesRouter.post("/:batchId/mentors", async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.userId||payload.userFullName)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      })
    }
    const batch = await batchesController.addMentor(id, payload);
    if (batch === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (batch === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Batch Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Mentor Succesfully Added",
      data: batch,
    })
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
});
export default batchesRouter;
