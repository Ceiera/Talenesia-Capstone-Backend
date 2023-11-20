import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  userProgressId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  batchId: {
    type: String,
    required: true,
  },
  subCourseId: {
    type: String,
    required: true,
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

const UserProgressModel = mongoose.model(
  "userprogress", userProgressSchema
)

export default UserProgressModel
