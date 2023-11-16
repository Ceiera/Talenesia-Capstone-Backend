import learningTrackServices from "../services/learningTracks.service.js";

const getAllLearningTracks = async () => {
  try {
    const learningTracks = await learningTrackServices.getAllLearningTracks();
    return learningTracks;
  } catch (error) {
    return "Server Error";
  }
};

const addLearningTrack = async (learningTrack)=> {
  try {
    const newLearningTrack = await learningTrackServices.addLearningTrack(learningTrack);
    return newLearningTrack;
  } catch (error) {
    return "Server Error";
  }
}

const updateLearningTrackById = async (id, learningTrack)=> {
  try {
    const updatelearningTrack = await learningTrackServices.updateLearningTrackById(id, learningTrack);
    return updatelearningTrack;
  } catch (error) {
    return "Server Error";
  }
}

const deleteLearningTrackById = async (id)=> {
  try {
    const learningTrack = await learningTrackServices.deleteLearningTrackById(id);
    return learningTrack;
  } catch (error) {
    return "Server Error";
  }
}

const getLearningTrackById = async (id)=> {
  try {
    const learningTrack = await learningTrackServices.getLearningTrackById(id);
    return learningTrack;
  }catch{
    return "Server Error";
  }
}

const learningTracksController = {
  getAllLearningTracks,
  addLearningTrack,
  updateLearningTrackById,
  deleteLearningTrackById,
  getLearningTrackById,
};

export default learningTracksController;
