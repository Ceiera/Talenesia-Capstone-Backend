import mongoose from "mongoose";

const userLibrariesSchema = new mongoose.Schema({
  userLibrariesId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  batchId: {
    type: [String],
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

const UserLibrariesModel = mongoose.model("userlibraries", userLibrariesSchema);
export default UserLibrariesModel;
