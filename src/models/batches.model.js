import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  batchId: {
    type: String,
    required: true,
  },
  learningTrackId: {
    type: String,
    required: true,
  },
  batchName: {
    type: String,
    required: true,
  },
  batchDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  participant: {
    type: [{}],
  },
  mentor: {
    type: [{}],
  },
  updatedAt: {
    type: Date,
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
});

const BatchesModel = mongoose.model("batches", batchSchema);

export default BatchesModel;
