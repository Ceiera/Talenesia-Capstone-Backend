import BatchesModel from "../models/batches.model.js";
import { nanoid } from "nanoid";

const addBatch = async (batch) => {
  try {
    const newBatch = new BatchesModel({
      batchId: nanoid(12),
      learningTrackId: batch.learningTrackId,
      batchName: batch.batchName,
      batchDescription: batch.batchDescription,
      participant: [],
      mentor: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const savedBatch = await newBatch.save();
    return savedBatch;
  } catch (error) {
    return "Server Error";
  }
};

const getAllBatches = async () => {
  try {
    const batches = await BatchesModel.find();
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const getBatchById = async (id) => {
  try {
    const batch = await BatchesModel.findOne({ batchId: id });
    if (!batch) {
      return "Not Found";
    }
    return batch;
  } catch (error) {
    return "Server Error";
  }
};

const addParticipant = async (id, participant) => {
  try {
    let findBatch = await BatchesModel.findOne({ batchId: id });
    if (!findBatch) {
      return "Not Found";
    }
    const newParticipant = {
      userId: participant.userId,
      userFullName: participant.userFullName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    findBatch.participant = [...findBatch.participant, newParticipant];
    const updateBatch = await BatchesModel.findOneAndUpdate(
      { batchId: id },
      findBatch,
      { new: true }
    );
    return updateBatch;
  } catch (error) {
    return "Server Error";
  }
};

const addMentor = async (id, mentor) => {
  try {
    let findBatch = await BatchesModel.findOne({ batchId: id });
    if (!findBatch) {
      return "Not Found";
    }
    const newMentor = {
      userId: mentor.userId,
      userFullName: mentor.userFullName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    findBatch.mentor = [...findBatch.mentor, newMentor];
    const updateBatch = await BatchesModel.findOneAndUpdate(
      { batchId: id },
      findBatch,
      { new: true }
    );
    return updateBatch;
  } catch (error) {
    
    console.log(error)
    return "Server Error";
  }
};

const deleteBatchById = async (id) => {
  try {
    const deletedBatch = await BatchesModel.deleteOne({ batchId: id });
    return deletedBatch;
  } catch (error) {
    return "Server Error";
  }
};

const updateBatchById = async (id, batch) => {
  try {
    let findBatch = await BatchesModel.findOne({ batchId: id });
    if (!findBatch) {
      return "Not Found";
    }
    findBatch.batchName = batch.batchName;
    findBatch.batchDescription = batch.batchDescription;
    const updatedBatch = await BatchesModel.findOneAndUpdate(
      { batchId: id },
      findBatch,
      { new: true }
    );
    return updatedBatch;
  } catch {
    return "Server Error";
  }
};

const batchesService = {
  addBatch,
  getAllBatches,
  getBatchById,
  addParticipant,
  addMentor,
  deleteBatchById,
  updateBatchById,
};

export default batchesService;
