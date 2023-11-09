import learningTrackServices from "../services/learningTracks.service";

const getAllLearningTracks = async () => {
  try {
    const learningTracks = await learningTrackServices.getAllLearningTracks();
    if (learningTracks === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Learning Tracks Succesfully Retrieved",
      data: learningTracks,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const getLearningTrackById = async (id) => {
  try {
    const learningTrack = await learningTrackServices.getLearningTrackById(id);
    if (learningTrack === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
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
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const createLearningTrack = async (newLearningTrack) => {
  try {
    const learningTrack = await learningTrackServices.createLearningTrack(
      newLearningTrack
    );
    if (learningTrack === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const deleteLearningTrackById = async (id) => {
  try {
    const deletedLearningTrack =
      await learningTrackServices.deleteLearningTrackById();
    if (deletedLearningTrack === "Server Error") {
      return res.status(500).send({
        status: "error",
        message: "Server Error",
        data: [],
      });
    }
    if (deletedLearningTrack === "Learning Track Not Found") {
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
    return res.status(500).send({
      status: "error",
      message: "Server Error",
      data: [],
    });
  }
};

const learningTracksController = {
  getAllLearningTracks,
  createLearningTrack,
  deleteLearningTrackById,
  getLearningTrackById,
};

export default learningTracksController;
