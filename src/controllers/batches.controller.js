import batchesService from "../services/batches.service.js";

const addBatch = async (batch) => {
  try {
    const newBatch = await batchesService.addBatch(batch);
    return newBatch;
  } catch (error) {
    return "Server Error";
  }
};

const getAllBatches = async () => {
  try {
    const batches = await batchesService.getAllBatches();
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const getBatchById = async (id) => {
  try {
    const batch = await batchesService.getBatchById(id);
    return batch;
  } catch (error) {
    return "Server Error";
  }
};

const updateBatchById = async (batchId, batch) => {
  try {
    const updatedBatch = await batchesService.updateBatchById(batchId, batch);
    return updatedBatch;
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

const addParticipant = async (id, participant) => {
  try {
    const batch = await batchesService.addParticipant(id, participant);
    return batch;
  } catch (error) {
    return "Server Error";
  }
};

const addMentor = async (id, mentor) => {
  try {
    const batch = await batchesService.addMentor(id, mentor);
    return batch;
  } catch (error) {
    return "Server Error";
  }
};

const batchesController = {
  addBatch,
  getAllBatches,
  getBatchById,
  updateBatchById,
  deleteBatchById,
  addMentor,
  addParticipant,
};

export default batchesController;
