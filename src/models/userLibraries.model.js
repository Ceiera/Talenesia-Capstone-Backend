import nanoid  from "nanoid";
import mongoose from "mongoose";

const userLibrariesSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    batchId: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
    },
    softDeleted: {
        type: Boolean,
        default: false
    }
})