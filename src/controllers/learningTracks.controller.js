import learningTrackServices from "../services/learningTracks.service.js";

const getAllLearningTracks = async (req, res) => {
  try {
    const learningTracks = await learningTrackServices.getAllLearningTracks();
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
};

const addLearningTrack = async (req, res) => {
  try {
    const payload = req.body;
    if (!(payload.learningTrackName && payload.learningTrackDescription)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const learningTrack = await learningTrackServices.addLearningTrack(payload);
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
};

const getLearningTrackById = async (req, res) => {
  const id = req.params.learningTrackId;
  try {
    const learningTrack = await learningTrackServices.getLearningTrackById(id);
    if (learningTrack === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (learningTrack === "Not Found") {
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
};

const updateLearningTrackById = async (req, res) => {
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
    if (!(payload.learningTrackName && payload.learningTrackDescription)) {
      return res.status(400).send({
        status: "error",
        message: "Missing Body",
        data: [],
      });
    }
    const learningTrack = await learningTrackServices.updateLearningTrackById(
      id,
      payload
    );
    if (learningTrack === "Server Error") {
      return res
        .status(500)
        .send({ status: "error", message: "Server Error", data: [] });
    }
    if (learningTrack === "Not Found") {
      return res.status(404).send({
        status: "error",
        message: "Learning Track Not Found",
        data: [],
      });
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
};

const deleteLearningTrackById = async (req, res) => {
  const id = req.params.learningTrackId;
  try {
    const deletedLearningTrack =
      await learningTrackServices.deleteLearningTrackById(id);
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
};

const learningTracksController = {
  getAllLearningTracks,
  addLearningTrack,
  updateLearningTrackById,
  deleteLearningTrackById,
  getLearningTrackById,
};

export default learningTracksController;
