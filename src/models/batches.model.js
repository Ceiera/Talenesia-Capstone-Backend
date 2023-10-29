import {nanoid} from "nanoid";
import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    batchId : {
        type: String,
        default: nanoid(12),
        required: true
    },
    learningTrackId : {
        type: String,
        required: true
    },
    batchName: {
        type: String,
        required: true
    },
    batchDescription: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    participant: {
        type: [{userId: String, enrollDate: Date, status: String}],
    },
    mentor: {
        type: [String]
    },
    updatedAt: {
        type: Date,
    },
    softDeleted: {
        type: Boolean,
        default: false
    }
})