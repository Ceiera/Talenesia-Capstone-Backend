import LearningTrackModel from "../models/learningTracks.model";

const getAllLearningTracks = async () => {
  try {
    const learningTracks = await LearningTrackModel.find();
    return learningTracks;
  } catch (error) {
    return "Server Error";
  }
};

const createLearningTrack = async (learningTrack) => {
  try {
    const newLearningTrack = new LearningTrackModel(learningTrack);
    await newLearningTrack.save();
    return newLearningTrack;
  } catch (error) {
    return "Server Error";
  }
};

const getLearningTrackById = async (id) => {
  try {
    const learningTrack = await LearningTrackModel.findOne({
        learningTrackId: id,
    });
    if (!learningTrack) {
      return "Learning Track Not Found";
    }
    return learningTrack;
  } catch (error) {
    return "Server Error";
  }
};

const deleteLearningTrackById = async (batchId) => {
  try {
    const deletedLearningTrack = await LearningTrackModel.deleteOne({
      batchId: batchId,
    });
    if (deletedLearningTrack.deletedCount === 0) {
      return "Learning Track Not Found";
    }
    return "Successfully Deleted";
  } catch (error) {
    return "Server Error";
  }
};

const learningTrackServices = {
  getAllLearningTracks,
  createLearningTrack,
  getLearningTrackById,
  deleteLearningTrackById,
};
export default learningTrackServices;
