import batchesService from "../services/batches.service.js";

const getAllBatches = async () => {
  try {
    const batches = await batchesService.getAllBatches();
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const getBatchesByBatchId = async (batchId) => {
  try {
    const batches = await batchesService.getBatchesByBatchId(batchId);
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const getBatchesByUserId = async (userId) => {
  try {
    const batches = await batchesService.getBatchesByUserId(userId);
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const createBatch = async (batch) => {
  try {
    const newBatch = await batchesService.createBatch(batch);
    return newBatch;
  } catch (error) {
    return "Server Error";
  }
};

const deleteBatchById = async (batchId) => {
  try {
    const deletedBatch = await batchesService.deleteBatchById(batchId);
    return deletedBatch;
  } catch (error) {
    return "Server Error";
  }
};

const addParticipant = async (batchId, user) => {
  try {
    const addedParticipant = await batchesService.addParticipant(batchId, user);
    return addedParticipant;
  } catch (error) {
    return "Server Error";
  }
}

const addMentor = async (batchId, mentorId) => {
  try {
    const addedMentor = await batchesService.addMentor(batchId, mentorId);
    return addedMentor;
  } catch (error) {
    return "Server Error";
  }
}

const batchesController = { getAllBatches, getBatchesByUserId, createBatch, deleteBatchById, getBatchesByBatchId, addParticipant, addMentor };
export default batchesController;
