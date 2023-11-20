import batchesService from "../services/batches.service.js";
import userBadgesService from "../services/userBadges.service.js";

const addBatch = async (req, res) => {
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
    const batch = await batchesService.addBatch(payload);
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
};

const getAllBatches = async (req, res) => {
  try {
    const batches = await batchesService.getAllBatches();
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
      message: "Server sError",
      data: [],
    });
  }
};

const getBatchById = async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await batchesService.getBatchById(id);
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
};

const updateBatchById = async (req, res) => {
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
    const batch = await batchesService.updateBatchById(id, payload);
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
};

const deleteBatchById = async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await batchesService.deleteBatchById(id);
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
};

const addParticipant = async (req, res) => {
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
    if (!(payload.userId || payload.userFullName)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const batch = await batchesService.addParticipant(id, payload);
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
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const addMentor = async (req, res) => {
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
    if (!(payload.userId || payload.userFullName)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const batch = await batchesService.addMentor(id, payload);
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
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getBadgeByBatchId = async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await userBadgesService.getUserBadgeByBatchId(id);
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
      message: "Badge Succesfully Retrieved",
      data: batch,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

getAllParticipantsById = async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await batchesService.getBatchById(id);
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
    const participants = batch.participants;
    return res.status(200).send({
      status: "success",
      message: "Participants Succesfully Retrieved",
      data: participants,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};


getAllMentorsById = async (req, res) => {
  try {
    const id = req.params.batchId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing BatchId params",
        data: [],
      });
    }
    const batch = await batchesService.getBatchById(id);
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
    const mentors = batch.mentors;
    return res.status(200).send({
      status: "success",
      message: "Mentors Succesfully Retrieved",
      data: mentors,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const batchesController = {
  addBatch,
  getAllBatches,
  getBatchById,
  updateBatchById,
  deleteBatchById,
  addMentor,
  addParticipant,
  getBadgeByBatchId,
  getAllParticipantsById,
  getAllMentorsById,
};

export default batchesController;
