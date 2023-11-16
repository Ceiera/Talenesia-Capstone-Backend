import { nanoid } from "nanoid";
import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  batchId: {
    type: String,
    default: nanoid(12),
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
    default: Date.now(),
  },
  participant: {
    type: [{}],
  },
  mentor: {
    type: [{}],
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  softDeleted: {
    type: Boolean,
    default: false,
  },
});

const BatchesModel = mongoose.model("batches", batchSchema);

export default BatchesModel;
