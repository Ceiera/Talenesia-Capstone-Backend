import mongoose from "mongoose";

const learningTrackSchema = new mongoose.Schema({
  learningTrackId: {
    type: String,
    required: true,
  },
  learningTrackName: {
    type: String,
    required: true,
  },
  learningTrackDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
});

const LearningTrackModel = mongoose.model(
  "learningtracks",
  learningTrackSchema
);

export default LearningTrackModel;
