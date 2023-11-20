import mongoose from "mongoose";

const userSubmissionsSchema = new mongoose.Schema({
  userSubmissionId: {
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
  link: {
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

const UserSubmissionModel = mongoose.model(
  "usersubmissions",
  userSubmissionsSchema
);

export default UserSubmissionModel;
