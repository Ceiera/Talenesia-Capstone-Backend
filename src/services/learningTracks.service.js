import LearningTrackModel from "../models/learningTracks.model.js";
import { nanoid } from "nanoid";

const getAllLearningTracks = async () => {
  try {
    const learningTracks = await LearningTrackModel.find();
    return learningTracks;
  } catch (error) {
    return "Server Error";
  }
};

const addLearningTrack = async (learningTrack) => {
  try {
    const newLearningTrack = new LearningTrackModel({
      learningTrackId: nanoid(12),
      learningTrackName: learningTrack.learningTrackName,
      learningTrackDescription: learningTrack.learningTrackDescription,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    await newLearningTrack.save();
    return newLearningTrack;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const getLearningTrackById = async (id) => {
  try {
    const learningTrack = await LearningTrackModel.aggregate([
      {
        $match: { learningTrackId: id },
      },
      {
        $lookup: {
          from: "courses",
          localField: "learningTrackId",
          foreignField: "learningTrackId",
          pipeline: [
            {
              $lookup: {
                from: "subcourses",
                localField: "courseId",
                foreignField: "courseId",
                as: "subCourseDetail",
              },
            },
          ],
          as: "courseDetail",
        },
      },
    ]);
    if (learningTrack.length < 1) {
      return "Not Found";
    }
    return learningTrack;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const deleteLearningTrackById = async (id) => {
  try {
    const deletedLearningTrack = await LearningTrackModel.deleteOne({
      learningTrackId: id,
    });
    if (deletedLearningTrack.deletedCount === 0) {
      return "Not Found";
    }
    return "Successfully Deleted";
  } catch (error) {
    return "Server Error";
  }
};

const updateLearningTrackById = async (id, learningTrack) => {
  try {
    const findLearningTrackById = await LearningTrackModel.findOne({
      learningTrackId: id,
    });
    if (!findLearningTrackById) {
      return "Not Found";
    }
    learningTrack.updatedAt = Date.now();
    const updatedLearningTrack = await LearningTrackModel.findOneAndUpdate(
      { learningTrackId: id },
      learningTrack,
      { new: true }
    );
    return updatedLearningTrack;
  } catch (error) {
    console.log(error);
    return "Server Error";
  }
};

const learningTrackServices = {
  getAllLearningTracks,
  addLearningTrack,
  getLearningTrackById,
  updateLearningTrackById,
  deleteLearningTrackById,
};
export default learningTrackServices;
