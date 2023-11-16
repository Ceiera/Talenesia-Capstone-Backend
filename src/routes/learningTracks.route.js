import learningTracksController from "../controllers/learningTracks.controller.js";
import express from "express";

const learningTrackRouter = express.Router();

learningTrackRouter.get("/", async (req, res) => {
  try {
    const learningTracks =
      await learningTracksController.getAllLearningTracks();
    if (learningTracks === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Learning Tracks Succesfully Retrieved",
      data: learningTracks,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

learningTrackRouter.get("/:learningTrackId", async (req, res) => {
  const id = req.params.learningTrackId;
  try {
    const learningTrack = await learningTracksController.getLearningTrackById(
      id
    );
    if (learningTrack === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (learningTrack === "Learning Track Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Learning Track Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Learning Track Succesfully Retrieved",
      data: learningTrack,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

learningTrackRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (!(payload.learningTrackName || payload.learningTrackDescription)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const learningTrack = await learningTracksController.addLearningTrack(
      payload
    );
    if (learningTrack === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(201).send({
      status: "success",
      message: "Learning Track Succesfully Created",
      data: learningTrack,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

learningTrackRouter.delete("/:learningTrackId", async (req, res) => {
  const id = req.params.learningTrackId;
  try {
    const deletedLearningTrack =
      await learningTracksController.deleteLearningTrackById(id);
    if (deletedLearningTrack === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (deletedLearningTrack === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Learning Track Not Found",
        data: [],
      });
    }
    return res.status(200).send({
      status: "success",
      message: "Learning Track Succesfully Deleted",
      data: [],
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

learningTrackRouter.patch("/:learningTrackId", async (req, res) => {
  try {
    const id = req.params.learningTrackId;
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "Missing Learning Track Id params",
        data: [],
      });
    }
    const payload = req.body;
    if (!(payload.learningTrackName || payload.learningTrackDescription)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const learningTrack =
      await learningTracksController.updateLearningTrackById(id, payload);
    if (learningTrack === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    return res.status(200).send({
      status: "success",
      message: "Learning Track Succesfully Updated",
      data: learningTrack,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Server Error", data: [] });
  }
});

export default learningTrackRouter;
