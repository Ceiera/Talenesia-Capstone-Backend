import BatchesModel from "../models/batches.model.js";

const getAllBatches = async () => {
  try {
    const batches = await BatchesModel.find();
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const getBatchesByBatchId = async (batchId) => {
  try {
    const batches = await BatchesModel.find({ batchId: batchId });
    if (!batches) {
      return "Batches Not Found";
    }
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const getBatchesByUserId = async (userId) => {
  try {
    const batches = await BatchesModel.find({ userId: userId });
    if (!batches) {
      return "Batches Not Found";
    }
    return batches;
  } catch (error) {
    return "Server Error";
  }
};

const createBatch = async (batch) => {
  try {
    const newBatch = new BatchesModel(batch);
    const savedBatch = await newBatch.save();
    return savedBatch;
  } catch (error) {
    return "Server Error";
  }
};

const addParticipant = async (batchId, user) => {
  try {
    //cek
    const batch = await BatchesModel.findOne({ batchId: batchId });
    if (!batch) {
      return "Batch Not Found";
    }
    batch.participant.push(user);
    const updatedBatch = await BatchesModel.updateOne(
      { batchId: batchId },
      { $set: { participant: batch.participant } }
    );
    if (updatedBatch.modifiedCount === 0) {
      return "Batch Not Found";
    }
    return "Successfully Added";
  } catch (error) {
    return "Server Error";
  }
};

const addMentor = async (batchId, mentorId) => {
  try {
    //cek
    const batch = await BatchesModel.findOne({ batchId: batchId });
    if (!batch) {
      return "Batch Not Found";
    }
    batch.mentor.push(mentorId);
    const updatedBatch = await BatchesModel.updateOne(
      { batchId: batchId },
      { $set: { mentor: batch.mentor } }
    );
    if (updatedBatch.modifiedCount === 0) {
      return "Batch Not Found";
    }
    return "Successfully Added";
  } catch (error) {
    return "Server Error";
  }
};

const deleteBatchById = async (batchId) => {
  try {
    const deletedBatch = await BatchesModel.deleteOne({ batchId: batchId });
    if (deletedBatch.deletedCount === 0) {
      return "Batch Not Found";
    }
    return "Successfully Deleted";
  } catch (error) {
    return "Server Error";
  }
};

const batchesService = {
  getAllBatches,
  getBatchesByUserId,
  createBatch,
  getBatchesByBatchId,
  deleteBatchById,
  addParticipant,
  addMentor,
};

export default batchesService;
